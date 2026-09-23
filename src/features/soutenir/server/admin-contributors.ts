// BSS-SOUTENIR — Module plateforme de soutien
import type {
  ContributionMode,
  ContributionStatus,
} from '@/src/features/soutenir/types/contribution'

import { getSoutenirDatabase, initializeSoutenirDatabase } from './database'

import 'server-only'

export const ADMIN_CONTRIBUTORS_PAGE_SIZE = 25

export type AdminContribution = {
  accessExpiresAt: string | null
  accessStartsAt: string
  amountCents: number
  createdAt: string
  id: string
  mode: ContributionMode
  status: ContributionStatus
  stripeCheckoutSessionId: string | null
  stripeCustomerId: string | null
  stripePaymentIntentId: string | null
  stripeSubscriptionId: string | null
}

export type AdminContributor = {
  contributions: AdminContribution[]
  createdAt: string
  discordRoleStatus: string | null
  discordUsername: string | null
  email: string
  hasActiveAccess: boolean
  id: string
  thanksPseudonym: string | null
}

export type AdminContributorsPage = {
  activeCount: number
  contributors: AdminContributor[]
  page: number
  pageCount: number
  totalCount: number
}

function optionalString(value: unknown) {
  return value === null || value === undefined ? null : String(value)
}

export async function getAdminContributorsPage(
  requestedPage: number,
): Promise<AdminContributorsPage> {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const now = new Date().toISOString()
  const counts = await database.execute({
    args: [now],
    sql: `SELECT
      COUNT(*) AS total_count,
      COALESCE(SUM(CASE WHEN EXISTS (
        SELECT 1 FROM bss_soutenir_contributions contribution
        WHERE contribution.contributor_id = contributor.id
          AND contribution.status = 'paid'
          AND (contribution.mode = 'monthly' OR contribution.access_expires_at IS NOT NULL)
          AND (contribution.access_expires_at IS NULL OR contribution.access_expires_at > ?)
      ) THEN 1 ELSE 0 END), 0) AS active_count
    FROM bss_soutenir_contributors contributor`,
  })
  const totalCount = Number(counts.rows[0]?.total_count ?? 0)
  const activeCount = Number(counts.rows[0]?.active_count ?? 0)
  const pageCount = Math.max(
    1,
    Math.ceil(totalCount / ADMIN_CONTRIBUTORS_PAGE_SIZE),
  )
  const page = Math.min(Math.max(1, requestedPage), pageCount)
  const list = await database.execute({
    args: [
      now,
      ADMIN_CONTRIBUTORS_PAGE_SIZE,
      (page - 1) * ADMIN_CONTRIBUTORS_PAGE_SIZE,
    ],
    sql: `SELECT
      contributor.id,
      contributor.email,
      contributor.created_at,
      contributor.thanks_pseudonym,
      contributor.thanks_consent_at,
      discord.username AS discord_username,
      discord.role_status AS discord_role_status,
      EXISTS (
        SELECT 1 FROM bss_soutenir_contributions contribution
        WHERE contribution.contributor_id = contributor.id
          AND contribution.status = 'paid'
          AND (contribution.mode = 'monthly' OR contribution.access_expires_at IS NOT NULL)
          AND (contribution.access_expires_at IS NULL OR contribution.access_expires_at > ?)
      ) AS has_active_access
    FROM bss_soutenir_contributors contributor
    LEFT JOIN bss_soutenir_discord_links discord
      ON discord.contributor_id = contributor.id
    ORDER BY contributor.created_at DESC, contributor.id DESC
    LIMIT ? OFFSET ?`,
  })

  const contributors: AdminContributor[] = list.rows.map((row) => ({
    contributions: [],
    createdAt: String(row.created_at),
    discordRoleStatus: optionalString(row.discord_role_status),
    discordUsername: optionalString(row.discord_username),
    email: String(row.email),
    hasActiveAccess: Boolean(row.has_active_access),
    id: String(row.id),
    thanksPseudonym: row.thanks_consent_at
      ? optionalString(row.thanks_pseudonym)
      : null,
  }))

  if (contributors.length) {
    const byId = new Map(
      contributors.map((contributor) => [contributor.id, contributor]),
    )
    const placeholders = contributors.map(() => '?').join(', ')
    const result = await database.execute({
      args: contributors.map((contributor) => contributor.id),
      sql: `SELECT
        id, contributor_id, mode, amount_cents, status,
        access_starts_at, access_expires_at, created_at,
        stripe_checkout_session_id, stripe_customer_id,
        stripe_payment_intent_id, stripe_subscription_id
      FROM bss_soutenir_contributions
      WHERE contributor_id IN (${placeholders})
      ORDER BY created_at DESC, id DESC`,
    })

    for (const row of result.rows) {
      byId.get(String(row.contributor_id))?.contributions.push({
        accessExpiresAt: optionalString(row.access_expires_at),
        accessStartsAt: String(row.access_starts_at),
        amountCents: Number(row.amount_cents),
        createdAt: String(row.created_at),
        id: String(row.id),
        mode: String(row.mode) as ContributionMode,
        status: String(row.status) as ContributionStatus,
        stripeCheckoutSessionId: optionalString(row.stripe_checkout_session_id),
        stripeCustomerId: optionalString(row.stripe_customer_id),
        stripePaymentIntentId: optionalString(row.stripe_payment_intent_id),
        stripeSubscriptionId: optionalString(row.stripe_subscription_id),
      })
    }
  }

  return { activeCount, contributors, page, pageCount, totalCount }
}
