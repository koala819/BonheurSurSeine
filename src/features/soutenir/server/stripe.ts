// BSS-SOUTENIR — Module plateforme de soutien
import type { ContributionMode } from '@/src/features/soutenir/types/contribution'

import 'server-only'

type CreateStripeCheckoutSessionInput = {
  amountCents: number
  contributionId: string
  email: string
  mode: ContributionMode
  origin: string
}

type StripeCheckoutSessionResponse = {
  id?: string
  livemode?: boolean
  url?: string | null
}

type StripeErrorResponse = {
  error?: {
    message?: string
  }
}

export class StripeConfigurationError extends Error {}

export class StripeRequestError extends Error {}

export function getStripeTestSecretKey() {
  const secretKey = process.env.BSS_SOUTENIR_STRIPE_SECRET_KEY?.trim()

  if (!secretKey) {
    throw new StripeConfigurationError(
      'Stripe test n’est pas encore configuré pour cet environnement.',
    )
  }

  if (!/^(sk|rk)_test_/.test(secretKey)) {
    throw new StripeConfigurationError(
      'Seules les clés Stripe de test sont autorisées à cette étape.',
    )
  }

  return secretKey
}

function getReturnOrigin(requestOrigin: string) {
  const configuredOrigin = process.env.BSS_SOUTENIR_APP_URL?.trim()
  const origin = new URL(configuredOrigin || requestOrigin)
  const isLocal =
    origin.hostname === '127.0.0.1' || origin.hostname === 'localhost'

  if (
    origin.protocol !== 'https:' &&
    !(isLocal && origin.protocol === 'http:')
  ) {
    throw new StripeConfigurationError(
      'L’URL de retour Stripe doit utiliser HTTPS, sauf en local.',
    )
  }

  return origin.origin
}

export async function createStripeCheckoutSession({
  amountCents,
  contributionId,
  email,
  mode,
  origin: requestOrigin,
}: CreateStripeCheckoutSessionInput) {
  const secretKey = getStripeTestSecretKey()
  const origin = getReturnOrigin(requestOrigin)
  const successUrl = new URL('/soutenir/merci', origin)
  const cancelUrl = new URL('/soutenir', origin)

  successUrl.searchParams.set('session_id', '{CHECKOUT_SESSION_ID}')
  cancelUrl.searchParams.set('annule', '1')

  // Stripe remplace uniquement le marqueur littéral. URLSearchParams encode les
  // accolades, il faut donc les restaurer avant d'envoyer l'URL à Stripe.
  const stripeSuccessUrl = successUrl
    .toString()
    .replace('%7BCHECKOUT_SESSION_ID%7D', '{CHECKOUT_SESSION_ID}')

  const body = new URLSearchParams()
  body.set('mode', mode === 'monthly' ? 'subscription' : 'payment')
  body.set('success_url', stripeSuccessUrl)
  body.set('cancel_url', cancelUrl.toString())
  body.set('client_reference_id', contributionId)
  body.set('customer_email', email)
  body.set('locale', 'fr')
  body.set('line_items[0][price_data][currency]', 'eur')
  body.set(
    'line_items[0][price_data][product_data][name]',
    mode === 'monthly'
      ? 'Soutien mensuel — Bonheur sur Seine'
      : 'Soutien ponctuel — Bonheur sur Seine',
  )
  body.set(
    'line_items[0][price_data][product_data][description]',
    mode === 'monthly'
      ? 'Accès contributeur tant que le soutien reste actif.'
      : 'Accès contributeur pendant 30 jours.',
  )
  body.set('line_items[0][price_data][unit_amount]', String(amountCents))
  body.set('line_items[0][quantity]', '1')
  body.set('metadata[bss_soutenir_contribution_id]', contributionId)

  if (mode === 'monthly') {
    body.set('line_items[0][price_data][recurring][interval]', 'month')
    body.set(
      'subscription_data[metadata][bss_soutenir_contribution_id]',
      contributionId,
    )
  } else {
    body.set('customer_creation', 'always')
    body.set(
      'payment_intent_data[metadata][bss_soutenir_contribution_id]',
      contributionId,
    )
  }

  let response: Response

  try {
    response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      body,
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    })
  } catch {
    throw new StripeRequestError('Impossible de joindre Stripe pour le moment.')
  }

  const payload = (await response.json()) as
    | StripeCheckoutSessionResponse
    | StripeErrorResponse

  if (!response.ok) {
    const message =
      'error' in payload && payload.error?.message
        ? payload.error.message
        : 'Stripe a refusé la création de la session Checkout.'

    throw new StripeRequestError(message)
  }

  if (
    !('id' in payload) ||
    !payload.id ||
    !('url' in payload) ||
    !payload.url
  ) {
    throw new StripeRequestError('Stripe n’a pas renvoyé d’URL Checkout.')
  }

  if (payload.livemode) {
    throw new StripeConfigurationError(
      'Une session Stripe réelle a été refusée : utilise une clé de test.',
    )
  }

  return { id: payload.id, url: payload.url }
}
