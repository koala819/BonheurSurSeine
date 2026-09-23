// BSS-SOUTENIR — Module plateforme de soutien
import type {
  ContributionMode,
  ContributionStatus,
  ContributionSummary,
} from '@/src/features/soutenir/types/contribution'

import { getSoutenirDatabase, initializeSoutenirDatabase } from './database'

import { createHash, randomBytes, randomUUID } from 'node:crypto'
import 'server-only'

const MAGIC_LINK_LIFETIME_MS = 15 * 60 * 1000
const SESSION_LIFETIME_MS = 30 * 24 * 60 * 60 * 1000

export const SOUTENIR_SESSION_COOKIE = 'bss_soutenir_session'
export const SOUTENIR_SESSION_MAX_AGE_SECONDS = Math.floor(
  SESSION_LIFETIME_MS / 1000,
)

export function getSoutenirAppOrigin(requestOrigin: string) {
  const configuredOrigin = process.env.BSS_SOUTENIR_APP_URL?.trim()
  const origin = new URL(configuredOrigin || requestOrigin)
  const isLocal =
    origin.hostname === '127.0.0.1' || origin.hostname === 'localhost'

  if (
    origin.protocol !== 'https:' &&
    !(isLocal && origin.protocol === 'http:')
  ) {
    throw new Error('Origine de connexion non sécurisée.')
  }

  return { isLocal, origin: origin.origin }
}

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

function createOpaqueToken() {
  return randomBytes(32).toString('base64url')
}

function toContributionSummary(row: Record<string, unknown>) {
  return {
    accessExpiresAt:
      row.access_expires_at === null ? null : String(row.access_expires_at),
    accessStartsAt: String(row.access_starts_at),
    amountCents: Number(row.amount_cents),
    createdAt: String(row.created_at),
    currency: 'EUR' as const,
    id: String(row.id),
    mode: String(row.mode) as ContributionMode,
    status: String(row.status) as ContributionStatus,
  } satisfies ContributionSummary
}

async function cleanupExpiredAuthenticationRecords(nowIso: string) {
  const database = getSoutenirDatabase()

  await database.batch(
    [
      {
        args: [nowIso],
        sql: 'DELETE FROM bss_soutenir_magic_links WHERE expires_at <= ?',
      },
      {
        args: [nowIso],
        sql: 'DELETE FROM bss_soutenir_sessions WHERE expires_at <= ?',
      },
    ],
    'write',
  )
}

async function findActiveContributionByContributorId(
  contributorId: string,
  nowIso: string,
) {
  const database = getSoutenirDatabase()
  const result = await database.execute({
    args: [contributorId, nowIso],
    sql: `SELECT
      id,
      mode,
      amount_cents,
      currency,
      status,
      access_starts_at,
      access_expires_at,
      created_at
    FROM bss_soutenir_contributions
    WHERE contributor_id = ?
      AND status = 'paid'
      AND (mode = 'monthly' OR access_expires_at IS NOT NULL)
      AND (access_expires_at IS NULL OR access_expires_at > ?)
    ORDER BY created_at DESC
    LIMIT 1`,
  })

  return result.rows[0] ? toContributionSummary(result.rows[0]) : null
}

export async function createContributorMagicLink(
  email: string,
  origin: string,
  options: { throttleSeconds?: number } = {},
) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const now = new Date()
  const nowIso = now.toISOString()

  await cleanupExpiredAuthenticationRecords(nowIso)

  const contributorResult = await database.execute({
    args: [email.trim().toLowerCase(), nowIso],
    sql: `SELECT c.id
      FROM bss_soutenir_contributors c
      WHERE c.email = ?
        AND EXISTS (
          SELECT 1
          FROM bss_soutenir_contributions contribution
          WHERE contribution.contributor_id = c.id
            AND contribution.status = 'paid'
            AND (contribution.mode = 'monthly' OR contribution.access_expires_at IS NOT NULL)
            AND (contribution.access_expires_at IS NULL OR contribution.access_expires_at > ?)
        )
      LIMIT 1`,
  })
  const contributor = contributorResult.rows[0]

  if (!contributor) {
    return null
  }

  const contributorId = String(contributor.id)

  if (options.throttleSeconds) {
    const recent = await database.execute({
      args: [
        contributorId,
        new Date(now.getTime() - options.throttleSeconds * 1000).toISOString(),
      ],
      sql: `SELECT id
        FROM bss_soutenir_magic_links
        WHERE contributor_id = ? AND used_at IS NULL AND created_at > ?
        LIMIT 1`,
    })

    if (recent.rows[0]) {
      return null
    }
  }

  const token = createOpaqueToken()
  const expiresAt = new Date(now.getTime() + MAGIC_LINK_LIFETIME_MS)

  await database.batch(
    [
      {
        args: [contributorId],
        sql: `DELETE FROM bss_soutenir_magic_links
          WHERE contributor_id = ? AND used_at IS NULL`,
      },
      {
        args: [
          randomUUID(),
          contributorId,
          hashToken(token),
          expiresAt.toISOString(),
          nowIso,
        ],
        sql: `INSERT INTO bss_soutenir_magic_links (
          id,
          contributor_id,
          token_hash,
          expires_at,
          created_at
        ) VALUES (?, ?, ?, ?, ?)`,
      },
    ],
    'write',
  )

  const magicLink = new URL('/soutenir/auth/verification', origin)
  magicLink.searchParams.set('token', token)

  return {
    expiresAt: expiresAt.toISOString(),
    previewUrl: magicLink.toString(),
  }
}

export async function consumeMagicLink(token: string) {
  if (!/^[A-Za-z0-9_-]{43}$/.test(token)) {
    return null
  }

  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const now = new Date()
  const nowIso = now.toISOString()

  await cleanupExpiredAuthenticationRecords(nowIso)

  const magicLinkResult = await database.execute({
    args: [nowIso, hashToken(token), nowIso],
    sql: `UPDATE bss_soutenir_magic_links
      SET used_at = ?
      WHERE token_hash = ? AND used_at IS NULL AND expires_at > ?
      RETURNING contributor_id`,
  })
  const magicLink = magicLinkResult.rows[0]

  if (!magicLink) {
    return null
  }

  const contributorId = String(magicLink.contributor_id)
  const contribution = await findActiveContributionByContributorId(
    contributorId,
    nowIso,
  )

  if (!contribution) {
    return null
  }

  const sessionToken = createOpaqueToken()
  const sessionExpiresAt = new Date(now.getTime() + SESSION_LIFETIME_MS)

  await database.execute({
    args: [
      randomUUID(),
      contributorId,
      hashToken(sessionToken),
      sessionExpiresAt.toISOString(),
      nowIso,
      nowIso,
    ],
    sql: `INSERT INTO bss_soutenir_sessions (
      id,
      contributor_id,
      token_hash,
      expires_at,
      created_at,
      last_seen_at
    ) VALUES (?, ?, ?, ?, ?, ?)`,
  })

  return {
    contribution,
    sessionExpiresAt,
    sessionToken,
  }
}

export async function getAuthenticatedContributorSession(
  sessionToken: string | undefined,
) {
  if (!sessionToken || !/^[A-Za-z0-9_-]{43}$/.test(sessionToken)) {
    return null
  }

  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const nowIso = new Date().toISOString()

  await cleanupExpiredAuthenticationRecords(nowIso)

  const sessionResult = await database.execute({
    args: [hashToken(sessionToken), nowIso],
    sql: `SELECT id, contributor_id
      FROM bss_soutenir_sessions
      WHERE token_hash = ? AND expires_at > ?
      LIMIT 1`,
  })
  const session = sessionResult.rows[0]

  if (!session) {
    return null
  }

  const contribution = await findActiveContributionByContributorId(
    String(session.contributor_id),
    nowIso,
  )

  if (!contribution) {
    return null
  }

  await database.execute({
    args: [nowIso, String(session.id)],
    sql: `UPDATE bss_soutenir_sessions
      SET last_seen_at = ?
      WHERE id = ?`,
  })

  return {
    contribution,
    contributorId: String(session.contributor_id),
    sessionId: String(session.id),
  }
}

export async function revokeContributorSession(
  sessionToken: string | undefined,
) {
  if (!sessionToken) {
    return
  }

  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  await database.execute({
    args: [hashToken(sessionToken)],
    sql: 'DELETE FROM bss_soutenir_sessions WHERE token_hash = ?',
  })
}
