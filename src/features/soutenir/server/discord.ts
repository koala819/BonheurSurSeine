// BSS-SOUTENIR — Module plateforme de soutien
import { getSoutenirDatabase, initializeSoutenirDatabase } from './database'
import {
  type DiscordRoleStatus,
  removeManagedDiscordRoleBeforeDisconnect,
  syncDiscordRoleForContributor,
} from './discord-role'

import { createHash, randomBytes, randomUUID } from 'node:crypto'
import 'server-only'

const DISCORD_API_ORIGIN = 'https://discord.com'
const DISCORD_API_VERSION = 'v10'
const DISCORD_STATE_LIFETIME_MS = 10 * 60 * 1000

type DiscordApiUser = {
  avatar: string | null
  global_name: string | null
  id: string
  username: string
}

type DiscordTokenResponse = {
  access_token: string
  token_type: string
}

export type DiscordConnection = {
  avatarHash: string | null
  discordUserId: string
  displayName: string
  linkedAt: string
  roleStatus: DiscordRoleStatus | 'pending'
  username: string
}

export class DiscordAccountAlreadyLinkedError extends Error {}

function getDiscordConfiguration() {
  const clientId = process.env.BSS_SOUTENIR_DISCORD_CLIENT_ID?.trim()
  const clientSecret = process.env.BSS_SOUTENIR_DISCORD_CLIENT_SECRET?.trim()

  if (!clientId || !/^\d+$/.test(clientId) || !clientSecret) {
    throw new Error('Configuration Discord manquante.')
  }

  return { clientId, clientSecret }
}

export function isDiscordConfigured() {
  try {
    getDiscordConfiguration()
    return true
  } catch {
    return false
  }
}

function hashState(state: string) {
  return createHash('sha256').update(state).digest('hex')
}

function createOpaqueState() {
  return randomBytes(32).toString('base64url')
}

function getRedirectUri(origin: string) {
  return new URL('/soutenir/discord/callback', origin).toString()
}

export async function createDiscordAuthorization(options: {
  contributorId: string
  origin: string
  sessionId: string
}) {
  const { clientId } = getDiscordConfiguration()
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const now = new Date()
  const nowIso = now.toISOString()
  const state = createOpaqueState()

  await database.batch(
    [
      {
        args: [nowIso],
        sql: 'DELETE FROM bss_soutenir_discord_oauth_states WHERE expires_at <= ?',
      },
      {
        args: [options.contributorId, options.sessionId],
        sql: `DELETE FROM bss_soutenir_discord_oauth_states
          WHERE contributor_id = ? OR session_id = ?`,
      },
      {
        args: [
          randomUUID(),
          options.contributorId,
          options.sessionId,
          hashState(state),
          new Date(now.getTime() + DISCORD_STATE_LIFETIME_MS).toISOString(),
          nowIso,
        ],
        sql: `INSERT INTO bss_soutenir_discord_oauth_states (
          id,
          contributor_id,
          session_id,
          state_hash,
          expires_at,
          created_at
        ) VALUES (?, ?, ?, ?, ?, ?)`,
      },
    ],
    'write',
  )

  const authorizationUrl = new URL('/oauth2/authorize', DISCORD_API_ORIGIN)
  authorizationUrl.searchParams.set('response_type', 'code')
  authorizationUrl.searchParams.set('client_id', clientId)
  authorizationUrl.searchParams.set('scope', 'identify')
  authorizationUrl.searchParams.set('state', state)
  authorizationUrl.searchParams.set(
    'redirect_uri',
    getRedirectUri(options.origin),
  )
  authorizationUrl.searchParams.set('prompt', 'consent')

  return authorizationUrl
}

async function consumeDiscordState(options: {
  contributorId: string
  sessionId: string
  state: string
}) {
  if (!/^[A-Za-z0-9_-]{43}$/.test(options.state)) {
    return false
  }

  await initializeSoutenirDatabase()

  const result = await getSoutenirDatabase().execute({
    args: [
      hashState(options.state),
      options.contributorId,
      options.sessionId,
      new Date().toISOString(),
    ],
    sql: `DELETE FROM bss_soutenir_discord_oauth_states
      WHERE state_hash = ?
        AND contributor_id = ?
        AND session_id = ?
        AND expires_at > ?
      RETURNING id`,
  })

  return Boolean(result.rows[0])
}

async function exchangeDiscordCode(code: string, origin: string) {
  const { clientId, clientSecret } = getDiscordConfiguration()
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: getRedirectUri(origin),
  })
  const response = await fetch(
    `${DISCORD_API_ORIGIN}/api/${DISCORD_API_VERSION}/oauth2/token`,
    {
      body,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    },
  )

  if (!response.ok) {
    throw new Error('Discord a refusé le code OAuth.')
  }

  const token = (await response.json()) as Partial<DiscordTokenResponse>

  if (!token.access_token || token.token_type !== 'Bearer') {
    throw new Error('Réponse OAuth Discord invalide.')
  }

  return token.access_token
}

async function fetchDiscordUser(accessToken: string) {
  const response = await fetch(
    `${DISCORD_API_ORIGIN}/api/${DISCORD_API_VERSION}/users/@me`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  )

  if (!response.ok) {
    throw new Error('Impossible de lire le profil Discord.')
  }

  const user = (await response.json()) as Partial<DiscordApiUser>

  if (!user.id || !user.username) {
    throw new Error('Profil Discord invalide.')
  }

  return {
    avatar: typeof user.avatar === 'string' ? user.avatar : null,
    globalName: typeof user.global_name === 'string' ? user.global_name : null,
    id: user.id,
    username: user.username,
  }
}

async function revokeDiscordToken(accessToken: string) {
  const { clientId, clientSecret } = getDiscordConfiguration()

  await fetch(
    `${DISCORD_API_ORIGIN}/api/${DISCORD_API_VERSION}/oauth2/token/revoke`,
    {
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        token: accessToken,
        token_type_hint: 'access_token',
      }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    },
  )
}

async function saveDiscordConnection(
  contributorId: string,
  user: Awaited<ReturnType<typeof fetchDiscordUser>>,
) {
  const database = getSoutenirDatabase()
  const existingLink = await database.execute({
    args: [user.id],
    sql: `SELECT contributor_id
      FROM bss_soutenir_discord_links
      WHERE discord_user_id = ?
      LIMIT 1`,
  })

  if (
    existingLink.rows[0] &&
    String(existingLink.rows[0].contributor_id) !== contributorId
  ) {
    throw new DiscordAccountAlreadyLinkedError(
      'Ce compte Discord est déjà associé à un autre contributeur.',
    )
  }

  const currentLink = await database.execute({
    args: [contributorId],
    sql: `SELECT discord_user_id
      FROM bss_soutenir_discord_links
      WHERE contributor_id = ?
      LIMIT 1`,
  })

  if (
    currentLink.rows[0] &&
    String(currentLink.rows[0].discord_user_id) !== user.id
  ) {
    throw new DiscordAccountAlreadyLinkedError(
      'Dissocie le compte Discord actuel avant de le remplacer.',
    )
  }

  const nowIso = new Date().toISOString()

  await database.execute({
    args: [
      contributorId,
      user.id,
      user.username,
      user.globalName,
      user.avatar,
      nowIso,
      nowIso,
    ],
    sql: `INSERT INTO bss_soutenir_discord_links (
      contributor_id,
      discord_user_id,
      username,
      global_name,
      avatar_hash,
      linked_at,
      updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(contributor_id) DO UPDATE SET
      discord_user_id = excluded.discord_user_id,
      username = excluded.username,
      global_name = excluded.global_name,
      avatar_hash = excluded.avatar_hash,
      updated_at = excluded.updated_at`,
  })
}

export async function completeDiscordAuthorization(options: {
  code: string
  contributorId: string
  origin: string
  sessionId: string
  state: string
}) {
  const validState = await consumeDiscordState(options)

  if (!validState) {
    throw new Error('État OAuth Discord invalide ou expiré.')
  }

  const accessToken = await exchangeDiscordCode(options.code, options.origin)

  try {
    const user = await fetchDiscordUser(accessToken)
    await saveDiscordConnection(options.contributorId, user)
    return await syncDiscordRoleForContributor(options.contributorId)
  } finally {
    await revokeDiscordToken(accessToken).catch(() => undefined)
  }
}

export async function getDiscordConnection(contributorId: string) {
  await initializeSoutenirDatabase()

  const result = await getSoutenirDatabase().execute({
    args: [contributorId],
    sql: `SELECT
      discord_user_id,
      username,
      global_name,
      avatar_hash,
      linked_at,
      role_status
    FROM bss_soutenir_discord_links
    WHERE contributor_id = ?
    LIMIT 1`,
  })
  const row = result.rows[0]

  if (!row) {
    return null
  }

  return {
    avatarHash: row.avatar_hash === null ? null : String(row.avatar_hash),
    discordUserId: String(row.discord_user_id),
    displayName:
      row.global_name === null ? String(row.username) : String(row.global_name),
    linkedAt: String(row.linked_at),
    roleStatus: String(row.role_status) as DiscordConnection['roleStatus'],
    username: String(row.username),
  } satisfies DiscordConnection
}

export async function disconnectDiscordAccount(contributorId: string) {
  await initializeSoutenirDatabase()

  const roleRemoved =
    await removeManagedDiscordRoleBeforeDisconnect(contributorId)

  if (!roleRemoved) {
    return false
  }

  await getSoutenirDatabase().execute({
    args: [contributorId],
    sql: 'DELETE FROM bss_soutenir_discord_links WHERE contributor_id = ?',
  })

  return true
}
