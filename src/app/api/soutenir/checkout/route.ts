// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import type { ContributionMode } from '@/src/features/soutenir/types/contribution'

import {
  attachStripeCheckoutSession,
  createPendingContribution,
  updateContributionStatus,
} from '@/src/features/soutenir/server/contributions'
import {
  StripeConfigurationError,
  StripeRequestError,
  createStripeCheckoutSession,
  getStripeTestSecretKey,
} from '@/src/features/soutenir/server/stripe'

export const runtime = 'nodejs'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type CheckoutPayload = {
  amountCents?: unknown
  email?: unknown
  mode?: unknown
}

function validatePayload(payload: CheckoutPayload) {
  const email = typeof payload.email === 'string' ? payload.email.trim() : ''
  const mode = payload.mode
  const amountCents = payload.amountCents

  if (!emailPattern.test(email) || email.length > 254) {
    return { error: 'Adresse e-mail invalide.' } as const
  }

  if (mode !== 'once' && mode !== 'monthly') {
    return { error: 'Type de contribution invalide.' } as const
  }

  if (
    typeof amountCents !== 'number' ||
    !Number.isInteger(amountCents) ||
    amountCents < 100 ||
    amountCents > 1_000_000
  ) {
    return {
      error: 'Le montant doit être compris entre 1 € et 10 000 €.',
    } as const
  }

  return {
    amountCents,
    email,
    mode: mode as ContributionMode,
  }
}

function stripeErrorResponse(error: unknown) {
  if (error instanceof StripeConfigurationError) {
    return NextResponse.json(
      { code: 'stripe_not_configured', error: error.message },
      { status: 503 },
    )
  }

  if (error instanceof StripeRequestError) {
    return NextResponse.json(
      { code: 'stripe_rejected_request', error: error.message },
      { status: 502 },
    )
  }

  return null
}

export async function POST(request: NextRequest) {
  let payload: CheckoutPayload

  try {
    payload = (await request.json()) as CheckoutPayload
  } catch {
    return NextResponse.json(
      { error: 'Corps de requête invalide.' },
      { status: 400 },
    )
  }

  const validated = validatePayload(payload)

  if ('error' in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 })
  }

  try {
    getStripeTestSecretKey()
  } catch (error) {
    const response = stripeErrorResponse(error)

    if (response) {
      return response
    }

    throw error
  }

  const contribution = await createPendingContribution(validated)

  try {
    const checkout = await createStripeCheckoutSession({
      ...validated,
      contributionId: contribution.id,
      origin: request.nextUrl.origin,
    })

    await attachStripeCheckoutSession(contribution.id, checkout.id)

    return NextResponse.json({ checkoutUrl: checkout.url }, { status: 201 })
  } catch (error) {
    await updateContributionStatus(contribution.id, 'cancelled')

    const response = stripeErrorResponse(error)

    if (response) {
      return response
    }

    throw error
  }
}
