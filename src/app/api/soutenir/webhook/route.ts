// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  StripeWebhookConfigurationError,
  StripeWebhookVerificationError,
  verifyStripeWebhookEvent,
} from '@/src/features/soutenir/server/stripe-webhook'
import { processStripeWebhookEvent } from '@/src/features/soutenir/server/stripe-webhook-events'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const rawBody = await request.text()
  let event

  try {
    event = verifyStripeWebhookEvent(
      rawBody,
      request.headers.get('stripe-signature'),
    )
  } catch (error) {
    if (error instanceof StripeWebhookConfigurationError) {
      return NextResponse.json({ error: error.message }, { status: 503 })
    }

    if (error instanceof StripeWebhookVerificationError) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    throw error
  }

  const result = await processStripeWebhookEvent(event)

  return NextResponse.json({ received: true, ...result })
}
