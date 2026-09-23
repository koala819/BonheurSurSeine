// BSS-SOUTENIR — Module plateforme de soutien

export type ContributionMode = 'once' | 'monthly'

export type ContributionStatus =
  | 'simulated'
  | 'pending'
  | 'paid'
  | 'refunded'
  | 'cancelled'

export type ContributionSummary = {
  accessExpiresAt: string | null
  accessStartsAt: string
  amountCents: number
  createdAt: string
  currency: 'EUR'
  id: string
  mode: ContributionMode
  status: ContributionStatus
}

export type CreateContributionResponse = {
  contribution: ContributionSummary
}

export type CreateCheckoutResponse = {
  checkoutUrl: string
}

export type CheckoutErrorResponse = {
  code?: 'stripe_not_configured' | 'stripe_rejected_request'
  error: string
}

export type RequestMagicLinkResponse = {
  expiresAt?: string
  message: string
  previewUrl?: string
}
