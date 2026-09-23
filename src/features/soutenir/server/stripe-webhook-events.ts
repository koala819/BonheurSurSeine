// BSS-SOUTENIR — Module plateforme de soutien
import type { ContributionStatus } from '@/src/features/soutenir/types/contribution'

import type { StripeWebhookEvent } from './stripe-webhook'

import {
  hasProcessedStripeWebhookEvent,
  markContributionPaidByStripeCheckoutSession,
  markContributionRefundedByStripePaymentIntentId,
  recordProcessedStripeWebhookEvent,
  updateContributionStatusByStripeCheckoutSessionId,
  updateContributionStatusByStripeSubscriptionId,
} from '@/src/features/soutenir/server/contributions'
import { getSoutenirDatabase } from '@/src/features/soutenir/server/database'
import { syncDiscordRoleForContributor } from '@/src/features/soutenir/server/discord-role'
import 'server-only'

function getStringId(value: unknown) {
  if (typeof value === 'string') {
    return value
  }

  if (
    value &&
    typeof value === 'object' &&
    'id' in value &&
    typeof value.id === 'string'
  ) {
    return value.id
  }

  return null
}

function getInvoiceSubscriptionId(invoice: Record<string, unknown>) {
  const directSubscriptionId = getStringId(invoice.subscription)

  if (directSubscriptionId) {
    return directSubscriptionId
  }

  const parent = invoice.parent

  if (!parent || typeof parent !== 'object') {
    return null
  }

  const subscriptionDetails =
    'subscription_details' in parent ? parent.subscription_details : null

  if (!subscriptionDetails || typeof subscriptionDetails !== 'object') {
    return null
  }

  return 'subscription' in subscriptionDetails
    ? getStringId(subscriptionDetails.subscription)
    : null
}

async function processCheckoutSessionEvent(
  event: StripeWebhookEvent,
  status: 'cancelled' | 'paid',
) {
  const session = event.data.object
  const sessionId = getStringId(session.id)

  if (!sessionId?.startsWith('cs_test_')) {
    return false
  }

  if (status === 'cancelled') {
    return updateContributionStatusByStripeCheckoutSessionId(
      sessionId,
      'cancelled',
    )
  }

  const paymentStatus = session.payment_status

  if (
    event.type === 'checkout.session.completed' &&
    paymentStatus !== 'paid' &&
    paymentStatus !== 'no_payment_required'
  ) {
    return false
  }

  const contribution = await markContributionPaidByStripeCheckoutSession({
    customerId: getStringId(session.customer),
    paidAt: new Date(event.created * 1000),
    paymentIntentId: getStringId(session.payment_intent),
    stripeCheckoutSessionId: sessionId,
    subscriptionId: getStringId(session.subscription),
  })

  return Boolean(contribution)
}

function subscriptionStatusToContributionStatus(status: unknown) {
  if (status === 'active' || status === 'trialing') {
    return 'paid' satisfies ContributionStatus
  }

  if (status === 'canceled' || status === 'incomplete_expired') {
    return 'cancelled' satisfies ContributionStatus
  }

  if (
    status === 'incomplete' ||
    status === 'past_due' ||
    status === 'paused' ||
    status === 'unpaid'
  ) {
    return 'pending' satisfies ContributionStatus
  }

  return null
}

function getScheduledSubscriptionExpiry(subscription: Record<string, unknown>) {
  if (subscription.cancel_at_period_end !== true) {
    return null
  }

  const cancelAt = subscription.cancel_at

  if (typeof cancelAt !== 'number' || !Number.isSafeInteger(cancelAt)) {
    throw new Error('Date de résiliation Stripe manquante.')
  }

  const expiresAt = new Date(cancelAt * 1000)

  if (Number.isNaN(expiresAt.getTime())) {
    throw new Error('Date de résiliation Stripe invalide.')
  }

  return expiresAt
}

async function handleStripeWebhookEvent(event: StripeWebhookEvent) {
  const object = event.data.object
  const occurredAt = new Date(event.created * 1000)

  switch (event.type) {
    case 'checkout.session.completed':
    case 'checkout.session.async_payment_succeeded':
      return processCheckoutSessionEvent(event, 'paid')

    case 'checkout.session.async_payment_failed':
    case 'checkout.session.expired':
      return processCheckoutSessionEvent(event, 'cancelled')

    case 'invoice.paid': {
      const subscriptionId = getInvoiceSubscriptionId(object)

      return subscriptionId
        ? updateContributionStatusByStripeSubscriptionId(
            subscriptionId,
            'paid',
            occurredAt,
          )
        : false
    }

    case 'invoice.payment_failed': {
      const subscriptionId = getInvoiceSubscriptionId(object)

      return subscriptionId
        ? updateContributionStatusByStripeSubscriptionId(
            subscriptionId,
            'pending',
            occurredAt,
          )
        : false
    }

    case 'customer.subscription.deleted': {
      const subscriptionId = getStringId(object.id)

      return subscriptionId
        ? updateContributionStatusByStripeSubscriptionId(
            subscriptionId,
            'cancelled',
            occurredAt,
          )
        : false
    }

    case 'customer.subscription.updated': {
      const subscriptionId = getStringId(object.id)
      const contributionStatus = subscriptionStatusToContributionStatus(
        object.status,
      )

      return subscriptionId && contributionStatus
        ? updateContributionStatusByStripeSubscriptionId(
            subscriptionId,
            contributionStatus,
            occurredAt,
            contributionStatus === 'paid'
              ? { accessExpiresAt: getScheduledSubscriptionExpiry(object) }
              : undefined,
          )
        : false
    }

    case 'charge.refunded': {
      const paymentIntentId = getStringId(object.payment_intent)

      return object.refunded === true && paymentIntentId
        ? markContributionRefundedByStripePaymentIntentId(paymentIntentId)
        : false
    }

    default:
      return false
  }
}

async function findAffectedContributorId(event: StripeWebhookEvent) {
  const object = event.data.object
  let column: string
  let reference: string | null

  switch (event.type) {
    case 'checkout.session.completed':
    case 'checkout.session.async_payment_succeeded':
    case 'checkout.session.async_payment_failed':
    case 'checkout.session.expired':
      column = 'stripe_checkout_session_id'
      reference = getStringId(object.id)
      break
    case 'invoice.paid':
    case 'invoice.payment_failed':
      column = 'stripe_subscription_id'
      reference = getInvoiceSubscriptionId(object)
      break
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      column = 'stripe_subscription_id'
      reference = getStringId(object.id)
      break
    case 'charge.refunded':
      column = 'stripe_payment_intent_id'
      reference = getStringId(object.payment_intent)
      break
    default:
      return null
  }

  if (!reference) {
    return null
  }

  const result = await getSoutenirDatabase().execute({
    args: [reference],
    sql: `SELECT contributor_id
      FROM bss_soutenir_contributions
      WHERE ${column} = ?
      LIMIT 1`,
  })

  return result.rows[0] ? String(result.rows[0].contributor_id) : null
}

export async function processStripeWebhookEvent(event: StripeWebhookEvent) {
  if (await hasProcessedStripeWebhookEvent(event.id)) {
    return { duplicate: true, handled: false }
  }

  const handled = await handleStripeWebhookEvent(event)

  await recordProcessedStripeWebhookEvent({
    createdAt: new Date(event.created * 1000),
    id: event.id,
    type: event.type,
  })

  if (handled) {
    try {
      const contributorId = await findAffectedContributorId(event)

      if (contributorId) {
        await syncDiscordRoleForContributor(contributorId)
      }
    } catch {
      // Le traitement Stripe reste valide ; la synchronisation sera retentée.
    }
  }

  return { duplicate: false, handled }
}
