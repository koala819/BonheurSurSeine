import assert from 'node:assert/strict'
import test from 'node:test'

import { isStripeTestEnvironmentAllowed } from './stripe-preview-policy.ts'

const preview = {
  appUrlConfigured: true,
  branch: 'dev',
  databaseTokenConfigured: true,
  databaseUrlConfigured: true,
  previewCheckoutEnabled: '1',
  vercel: '1',
  vercelEnvironment: 'preview',
  webhookSecretConfigured: true,
}

test('les essais locaux gardent leur fonctionnement existant', () => {
  assert.equal(
    isStripeTestEnvironmentAllowed({
      ...preview,
      previewCheckoutEnabled: undefined,
      vercel: undefined,
      vercelEnvironment: undefined,
      webhookSecretConfigured: false,
    }),
    true,
  )
})

test('Preview dev complète et explicitement activée est autorisée', () => {
  assert.equal(isStripeTestEnvironmentAllowed(preview), true)
})

test('Production et les autres branches restent fermées', () => {
  for (const changes of [
    { vercelEnvironment: 'production' },
    { branch: 'master' },
    { branch: undefined },
    { vercel: undefined },
  ]) {
    assert.equal(isStripeTestEnvironmentAllowed({ ...preview, ...changes }), false)
  }
})

test('Preview dev reste fermée tant que la préparation est incomplète', () => {
  for (const changes of [
    { previewCheckoutEnabled: undefined },
    { appUrlConfigured: false },
    { databaseUrlConfigured: false },
    { databaseTokenConfigured: false },
    { webhookSecretConfigured: false },
  ]) {
    assert.equal(isStripeTestEnvironmentAllowed({ ...preview, ...changes }), false)
  }
})
