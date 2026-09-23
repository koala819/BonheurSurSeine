// BSS-SOUTENIR — Le paiement test en ligne reste fermé jusqu'à l'activation explicite de Preview dev.
export type StripeTestEnvironment = {
  appUrlConfigured: boolean
  branch: string | undefined
  databaseTokenConfigured: boolean
  databaseUrlConfigured: boolean
  previewCheckoutEnabled: string | undefined
  vercel: string | undefined
  vercelEnvironment: string | undefined
  webhookSecretConfigured: boolean
}

export function isStripeTestEnvironmentAllowed({
  appUrlConfigured,
  branch,
  databaseTokenConfigured,
  databaseUrlConfigured,
  previewCheckoutEnabled,
  vercel,
  vercelEnvironment,
  webhookSecretConfigured,
}: StripeTestEnvironment) {
  if (vercel === '1' || vercelEnvironment) {
    return (
      vercel === '1' &&
      vercelEnvironment === 'preview' &&
      branch === 'dev' &&
      previewCheckoutEnabled === '1' &&
      databaseUrlConfigured &&
      databaseTokenConfigured &&
      webhookSecretConfigured &&
      appUrlConfigured
    )
  }

  return true
}
