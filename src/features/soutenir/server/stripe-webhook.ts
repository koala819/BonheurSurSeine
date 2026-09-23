// BSS-SOUTENIR — Module plateforme de soutien
import { createHmac, timingSafeEqual } from 'node:crypto'
import 'server-only'

const DEFAULT_SIGNATURE_TOLERANCE_SECONDS = 300

export type StripeWebhookEvent = {
  created: number
  data: {
    object: Record<string, unknown>
  }
  id: string
  livemode: boolean
  object: 'event'
  type: string
}

export class StripeWebhookConfigurationError extends Error {}

export class StripeWebhookVerificationError extends Error {}

export function getStripeWebhookSecret() {
  const webhookSecret = process.env.BSS_SOUTENIR_STRIPE_WEBHOOK_SECRET?.trim()

  if (!webhookSecret) {
    throw new StripeWebhookConfigurationError(
      'Le secret de signature du webhook Stripe n’est pas configuré.',
    )
  }

  if (!webhookSecret.startsWith('whsec_')) {
    throw new StripeWebhookConfigurationError(
      'Le secret du webhook Stripe doit commencer par whsec_.',
    )
  }

  return webhookSecret
}

function signaturesMatch(expectedSignature: string, signatures: string[]) {
  const expectedBuffer = Buffer.from(expectedSignature, 'hex')

  return signatures.some((signature) => {
    if (!/^[a-f0-9]{64}$/i.test(signature)) {
      return false
    }

    const signatureBuffer = Buffer.from(signature, 'hex')

    return (
      signatureBuffer.length === expectedBuffer.length &&
      timingSafeEqual(signatureBuffer, expectedBuffer)
    )
  })
}

function parseStripeSignature(signatureHeader: string) {
  const parts = signatureHeader.split(',').map((part) => part.trim())
  const timestampPart = parts.find((part) => part.startsWith('t='))
  const signatures = parts
    .filter((part) => part.startsWith('v1='))
    .map((part) => part.slice(3))
  const timestamp = Number(timestampPart?.slice(2))

  if (!Number.isInteger(timestamp) || signatures.length === 0) {
    throw new StripeWebhookVerificationError(
      'En-tête de signature Stripe invalide.',
    )
  }

  return { signatures, timestamp }
}

function parseStripeEvent(rawBody: string) {
  let value: unknown

  try {
    value = JSON.parse(rawBody)
  } catch {
    throw new StripeWebhookVerificationError('Payload Stripe invalide.')
  }

  if (
    !value ||
    typeof value !== 'object' ||
    !('id' in value) ||
    typeof value.id !== 'string' ||
    !value.id.startsWith('evt_') ||
    !('object' in value) ||
    value.object !== 'event' ||
    !('type' in value) ||
    typeof value.type !== 'string' ||
    !('created' in value) ||
    typeof value.created !== 'number' ||
    !('livemode' in value) ||
    typeof value.livemode !== 'boolean' ||
    !('data' in value) ||
    !value.data ||
    typeof value.data !== 'object' ||
    !('object' in value.data) ||
    !value.data.object ||
    typeof value.data.object !== 'object'
  ) {
    throw new StripeWebhookVerificationError(
      'Structure de l’événement Stripe invalide.',
    )
  }

  return value as StripeWebhookEvent
}

export function verifyStripeWebhookEvent(
  rawBody: string,
  signatureHeader: string | null,
  toleranceSeconds = DEFAULT_SIGNATURE_TOLERANCE_SECONDS,
) {
  if (!signatureHeader) {
    throw new StripeWebhookVerificationError('Signature Stripe manquante.')
  }

  const webhookSecret = getStripeWebhookSecret()
  const { signatures, timestamp } = parseStripeSignature(signatureHeader)
  const currentTimestamp = Math.floor(Date.now() / 1000)

  if (Math.abs(currentTimestamp - timestamp) > toleranceSeconds) {
    throw new StripeWebhookVerificationError('Signature Stripe expirée.')
  }

  const expectedSignature = createHmac('sha256', webhookSecret)
    .update(`${timestamp}.${rawBody}`)
    .digest('hex')

  if (!signaturesMatch(expectedSignature, signatures)) {
    throw new StripeWebhookVerificationError('Signature Stripe incorrecte.')
  }

  const event = parseStripeEvent(rawBody)

  if (event.livemode) {
    throw new StripeWebhookVerificationError(
      'Les événements Stripe réels sont refusés dans ce prototype local.',
    )
  }

  return event
}
