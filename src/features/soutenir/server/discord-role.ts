// BSS-SOUTENIR — Module plateforme de soutien
import { getSoutenirDatabase, initializeSoutenirDatabase } from './database'

import 'server-only'

export const BSS_DISCORD_ROLE_NAME = 'Contributeur BSS'

export type DiscordRoleStatus =
  | 'granted'
  | 'not_member'
  | 'removed'
  | 'error'
  | 'configuration'

type DiscordRoleConfiguration = {
  botToken: string
  guildId: string
  roleId: string
}

function getDiscordRoleConfiguration(): DiscordRoleConfiguration | null {
  const botToken = process.env.BSS_SOUTENIR_DISCORD_BOT_TOKEN?.trim()
  const guildId = process.env.BSS_SOUTENIR_DISCORD_GUILD_ID?.trim()
  const roleId = process.env.BSS_SOUTENIR_DISCORD_ROLE_ID?.trim()

  if (!botToken || !guildId || !roleId) {
    return null
  }

  if (!/^\d+$/.test(guildId) || !/^\d+$/.test(roleId)) {
    return null
  }

  return { botToken, guildId, roleId }
}

export function isDiscordRoleConfigured() {
  return getDiscordRoleConfiguration() !== null
}

function getMemberRoleUrl(
  configuration: DiscordRoleConfiguration,
  discordUserId: string,
) {
  return `https://discord.com/api/v10/guilds/${configuration.guildId}/members/${discordUserId}/roles/${configuration.roleId}`
}

async function isDedicatedBssRole(configuration: DiscordRoleConfiguration) {
  const response = await fetch(
    `https://discord.com/api/v10/guilds/${configuration.guildId}/roles/${configuration.roleId}`,
    { headers: { Authorization: `Bot ${configuration.botToken}` } },
  )

  if (!response.ok) {
    return false
  }

  const role = (await response.json()) as {
    managed?: unknown
    name?: unknown
  }

  return role.name === BSS_DISCORD_ROLE_NAME && role.managed === false
}

async function setDiscordMemberRole(
  configuration: DiscordRoleConfiguration,
  discordUserId: string,
  active: boolean,
): Promise<DiscordRoleStatus> {
  if (!(await isDedicatedBssRole(configuration))) {
    return 'configuration'
  }

  const response = await fetch(getMemberRoleUrl(configuration, discordUserId), {
    headers: {
      Authorization: `Bot ${configuration.botToken}`,
      'X-Audit-Log-Reason': encodeURIComponent(
        active
          ? 'Soutien Bonheur sur Seine actif'
          : 'Soutien Bonheur sur Seine terminé',
      ),
    },
    method: active ? 'PUT' : 'DELETE',
  })

  if (response.status === 204) {
    return active ? 'granted' : 'removed'
  }

  if (response.status === 404) {
    const memberResponse = await fetch(
      `https://discord.com/api/v10/guilds/${configuration.guildId}/members/${discordUserId}`,
      { headers: { Authorization: `Bot ${configuration.botToken}` } },
    )

    if (memberResponse.status === 404) {
      return active ? 'not_member' : 'removed'
    }

    return 'error'
  }

  return 'error'
}

async function hasActiveContribution(contributorId: string) {
  const result = await getSoutenirDatabase().execute({
    args: [contributorId, new Date().toISOString()],
    sql: `SELECT id
      FROM bss_soutenir_contributions
      WHERE contributor_id = ?
        AND status = 'paid'
        AND (mode = 'monthly' OR access_expires_at IS NOT NULL)
        AND (access_expires_at IS NULL OR access_expires_at > ?)
      LIMIT 1`,
  })

  return Boolean(result.rows[0])
}

export async function syncDiscordRoleForContributor(contributorId: string) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const linkResult = await database.execute({
    args: [contributorId],
    sql: `SELECT discord_user_id, role_granted_at
      FROM bss_soutenir_discord_links
      WHERE contributor_id = ?
      LIMIT 1`,
  })
  const link = linkResult.rows[0]

  if (!link) {
    return null
  }

  const discordUserId = String(link.discord_user_id)
  const active = await hasActiveContribution(contributorId)
  const configuration = getDiscordRoleConfiguration()
  let status: DiscordRoleStatus

  if (!configuration) {
    status = 'configuration'
  } else if (!active && link.role_granted_at === null) {
    status = 'removed'
  } else {
    try {
      status = await setDiscordMemberRole(configuration, discordUserId, active)
    } catch {
      status = 'error'
    }
  }

  const nowIso = new Date().toISOString()

  await database.execute({
    args: [
      status,
      status === 'granted' ? nowIso : null,
      nowIso,
      status === 'removed' ? 'removed' : null,
      nowIso,
      contributorId,
      discordUserId,
    ],
    sql: `UPDATE bss_soutenir_discord_links
      SET role_status = ?,
        role_granted_at = CASE
          WHEN ? IS NOT NULL THEN COALESCE(role_granted_at, ?)
          WHEN ? IS NOT NULL THEN NULL
          ELSE role_granted_at
        END,
        role_synced_at = ?
      WHERE contributor_id = ? AND discord_user_id = ?`,
  })

  return status
}

export async function reconcileDiscordRoles() {
  await initializeSoutenirDatabase()

  const result = await getSoutenirDatabase().execute(
    'SELECT contributor_id FROM bss_soutenir_discord_links ORDER BY contributor_id',
  )
  const counts: Record<DiscordRoleStatus, number> = {
    configuration: 0,
    error: 0,
    granted: 0,
    not_member: 0,
    removed: 0,
  }

  for (const row of result.rows) {
    const status = await syncDiscordRoleForContributor(
      String(row.contributor_id),
    )

    if (status) {
      counts[status] += 1
    }
  }

  return counts
}

export async function removeManagedDiscordRoleBeforeDisconnect(
  contributorId: string,
) {
  await initializeSoutenirDatabase()

  const result = await getSoutenirDatabase().execute({
    args: [contributorId],
    sql: `SELECT discord_user_id, role_granted_at
      FROM bss_soutenir_discord_links
      WHERE contributor_id = ?
      LIMIT 1`,
  })
  const link = result.rows[0]

  if (!link?.role_granted_at) {
    return true
  }

  const configuration = getDiscordRoleConfiguration()

  if (!configuration) {
    return false
  }

  try {
    return (
      (await setDiscordMemberRole(
        configuration,
        String(link.discord_user_id),
        false,
      )) === 'removed'
    )
  } catch {
    return false
  }
}
