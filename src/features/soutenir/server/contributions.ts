// BSS-SOUTENIR — Module plateforme de soutien
import type {
  ContributionMode,
  ContributionStatus,
  ContributionSummary,
} from '@/src/features/soutenir/types/contribution'

import { getSoutenirDatabase, initializeSoutenirDatabase } from './database'

import { randomUUID } from 'node:crypto'
import 'server-only'

type CreateContributionInput = {
  amountCents: number
  email: string
  mode: ContributionMode
  status: ContributionStatus
}

type StripeCheckoutCompletionInput = {
  customerId: string | null
  paidAt: Date
  paymentIntentId: string | null
  stripeCheckoutSessionId: string
  subscriptionId: string | null
}

type StripeWebhookEventRecord = {
  createdAt: Date
  id: string
  type: string
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

async function createContribution({
  amountCents,
  email,
  mode,
  status,
}: CreateContributionInput) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const now = new Date()
  const nowIso = now.toISOString()
  const contributorId = randomUUID()
  const contributionId = randomUUID()
  const accessExpiresAt = null

  const contributorResult = await database.execute({
    args: [contributorId, email.trim().toLowerCase(), nowIso, nowIso],
    sql: `INSERT INTO bss_soutenir_contributors (
      id,
      email,
      created_at,
      updated_at
    ) VALUES (?, ?, ?, ?)
    ON CONFLICT(email) DO UPDATE SET updated_at = excluded.updated_at
    RETURNING id`,
  })

  const storedContributorId = String(contributorResult.rows[0].id)

  await database.execute({
    args: [
      contributionId,
      storedContributorId,
      mode,
      amountCents,
      'EUR',
      status,
      nowIso,
      accessExpiresAt,
      nowIso,
      nowIso,
    ],
    sql: `INSERT INTO bss_soutenir_contributions (
      id,
      contributor_id,
      mode,
      amount_cents,
      currency,
      status,
      access_starts_at,
      access_expires_at,
      created_at,
      updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  })

  return {
    accessExpiresAt,
    accessStartsAt: nowIso,
    amountCents,
    createdAt: nowIso,
    currency: 'EUR' as const,
    id: contributionId,
    mode,
    status,
  }
}

export function createPendingContribution(
  input: Omit<CreateContributionInput, 'status'>,
) {
  return createContribution({ ...input, status: 'pending' })
}

export async function attachStripeCheckoutSession(
  contributionId: string,
  stripeCheckoutSessionId: string,
) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  await database.execute({
    args: [stripeCheckoutSessionId, new Date().toISOString(), contributionId],
    sql: `UPDATE bss_soutenir_contributions
      SET stripe_checkout_session_id = ?, updated_at = ?
      WHERE id = ?`,
  })
}

export async function updateContributionStatus(
  contributionId: string,
  status: ContributionStatus,
) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  await database.execute({
    args: [status, new Date().toISOString(), contributionId],
    sql: `UPDATE bss_soutenir_contributions
      SET status = ?, updated_at = ?
      WHERE id = ?`,
  })
}

export async function markContributionPaidByStripeCheckoutSession({
  customerId,
  paidAt,
  paymentIntentId,
  stripeCheckoutSessionId,
  subscriptionId,
}: StripeCheckoutCompletionInput) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const existingResult = await database.execute({
    args: [stripeCheckoutSessionId],
    sql: `SELECT mode, status, access_starts_at, access_expires_at
      FROM bss_soutenir_contributions
      WHERE stripe_checkout_session_id = ?
      LIMIT 1`,
  })
  const existing = existingResult.rows[0]

  if (!existing) {
    return null
  }

  const wasAlreadyPaid = String(existing.status) === 'paid'
  const mode = String(existing.mode) as ContributionMode
  const paidAtIso = paidAt.toISOString()
  const accessStartsAt = wasAlreadyPaid
    ? String(existing.access_starts_at)
    : paidAtIso
  const accessExpiresAt = wasAlreadyPaid
    ? existing.access_expires_at === null
      ? null
      : String(existing.access_expires_at)
    : mode === 'once'
      ? new Date(paidAt.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString()
      : null

  await database.execute({
    args: [
      customerId,
      paymentIntentId,
      subscriptionId,
      accessStartsAt,
      accessExpiresAt,
      new Date().toISOString(),
      stripeCheckoutSessionId,
    ],
    sql: `UPDATE bss_soutenir_contributions
      SET
        status = 'paid',
        stripe_customer_id = COALESCE(?, stripe_customer_id),
        stripe_payment_intent_id = COALESCE(?, stripe_payment_intent_id),
        stripe_subscription_id = COALESCE(?, stripe_subscription_id),
        access_starts_at = ?,
        access_expires_at = ?,
        updated_at = ?
      WHERE stripe_checkout_session_id = ?`,
  })

  return true
}

export async function updateContributionStatusByStripeCheckoutSessionId(
  stripeCheckoutSessionId: string,
  status: ContributionStatus,
) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const result = await database.execute({
    args: [status, new Date().toISOString(), stripeCheckoutSessionId],
    sql: `UPDATE bss_soutenir_contributions
      SET status = ?, updated_at = ?
      WHERE stripe_checkout_session_id = ? AND status != 'paid'`,
  })

  return result.rowsAffected > 0
}

export async function updateContributionStatusByStripeSubscriptionId(
  stripeSubscriptionId: string,
  status: ContributionStatus,
  occurredAt: Date,
  options?: { accessExpiresAt: Date | null },
) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const occurredAtIso = occurredAt.toISOString()
  const result = await database.execute({
    args: [
      status,
      status === 'paid' ? occurredAtIso : null,
      occurredAtIso,
      options ? 1 : 0,
      options?.accessExpiresAt?.toISOString() ?? null,
      new Date().toISOString(),
      stripeSubscriptionId,
    ],
    sql: `UPDATE bss_soutenir_contributions
      SET
        status = ?,
        access_starts_at = CASE
          WHEN status = 'paid' OR ? IS NULL THEN access_starts_at
          ELSE ?
        END,
        access_expires_at = CASE
          WHEN ? = 1 THEN ?
          ELSE access_expires_at
        END,
        updated_at = ?
      WHERE stripe_subscription_id = ?`,
  })

  return result.rowsAffected > 0
}

export async function markContributionRefundedByStripePaymentIntentId(
  stripePaymentIntentId: string,
) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const result = await database.execute({
    args: [new Date().toISOString(), stripePaymentIntentId],
    sql: `UPDATE bss_soutenir_contributions
      SET status = 'refunded', updated_at = ?
      WHERE stripe_payment_intent_id = ?`,
  })

  return result.rowsAffected > 0
}

export async function hasProcessedStripeWebhookEvent(eventId: string) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const result = await database.execute({
    args: [eventId],
    sql: `SELECT id
      FROM bss_soutenir_webhook_events
      WHERE id = ?
      LIMIT 1`,
  })

  return Boolean(result.rows[0])
}

export async function recordProcessedStripeWebhookEvent({
  createdAt,
  id,
  type,
}: StripeWebhookEventRecord) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  await database.execute({
    args: [id, type, createdAt.toISOString(), new Date().toISOString()],
    sql: `INSERT OR IGNORE INTO bss_soutenir_webhook_events (
      id,
      type,
      stripe_created_at,
      processed_at
    ) VALUES (?, ?, ?, ?)`,
  })
}

export async function findContributionSummaryById(id: string) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const result = await database.execute({
    args: [id],
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
    WHERE id = ?
    LIMIT 1`,
  })

  const row = result.rows[0]

  if (!row) {
    return null
  }

  return toContributionSummary(row)
}

export async function findContributionSummaryByStripeCheckoutSessionId(
  stripeCheckoutSessionId: string,
) {
  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const result = await database.execute({
    args: [stripeCheckoutSessionId],
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
    WHERE stripe_checkout_session_id = ?
    LIMIT 1`,
  })

  const row = result.rows[0]

  return row ? toContributionSummary(row) : null
}
