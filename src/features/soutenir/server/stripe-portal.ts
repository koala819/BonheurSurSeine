// BSS-SOUTENIR — Module plateforme de soutien
import { getSoutenirDatabase, initializeSoutenirDatabase } from './database'
import {
  StripeConfigurationError,
  StripeRequestError,
  getStripeTestSecretKey,
} from './stripe'

import 'server-only'

type StripePortalSessionResponse = {
  customer?: string
  livemode?: boolean
  url?: string
}

export function isStripePortalConfigured() {
  return /^bpc_[A-Za-z0-9]+$/.test(
    process.env.BSS_SOUTENIR_STRIPE_PORTAL_CONFIGURATION_ID?.trim() ?? '',
  )
}

export async function getActiveMonthlyStripeCustomerId(contributorId: string) {
  await initializeSoutenirDatabase()

  const result = await getSoutenirDatabase().execute({
    args: [contributorId, new Date().toISOString()],
    sql: `SELECT stripe_customer_id
      FROM bss_soutenir_contributions
      WHERE contributor_id = ?
        AND mode = 'monthly'
        AND status = 'paid'
        AND (access_expires_at IS NULL OR access_expires_at > ?)
        AND stripe_customer_id LIKE 'cus_%'
        AND stripe_subscription_id LIKE 'sub_%'
      ORDER BY created_at DESC
      LIMIT 1`,
  })

  return result.rows[0]?.stripe_customer_id
    ? String(result.rows[0].stripe_customer_id)
    : null
}

export async function createStripePortalSession(
  customerId: string,
  origin: string,
) {
  const secretKey = getStripeTestSecretKey()
  const configurationId =
    process.env.BSS_SOUTENIR_STRIPE_PORTAL_CONFIGURATION_ID?.trim()

  if (!configurationId || !isStripePortalConfigured()) {
    throw new StripeConfigurationError(
      'Le portail Stripe de test n’est pas configuré.',
    )
  }

  const body = new URLSearchParams({
    configuration: configurationId,
    customer: customerId,
    locale: 'fr',
    return_url: new URL('/soutenir/contributeurs', origin).toString(),
  })

  let response: Response

  try {
    response = await fetch(
      'https://api.stripe.com/v1/billing_portal/sessions',
      {
        body,
        cache: 'no-store',
        headers: {
          Authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
      },
    )
  } catch {
    throw new StripeRequestError('Impossible de joindre Stripe.')
  }

  const payload = (await response.json()) as StripePortalSessionResponse

  if (!response.ok || !payload.url) {
    throw new StripeRequestError('Stripe n’a pas ouvert le portail de test.')
  }

  const portalUrl = new URL(payload.url)

  if (
    payload.livemode !== false ||
    payload.customer !== customerId ||
    portalUrl.protocol !== 'https:' ||
    portalUrl.hostname !== 'billing.stripe.com'
  ) {
    throw new StripeRequestError('La session du portail Stripe est invalide.')
  }

  return portalUrl
}
