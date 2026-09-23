import assert from 'node:assert/strict'
import test from 'node:test'

import { isVideoAdminEnvironmentAllowed } from './video-admin-policy.ts'

const preview = {
  branch: 'dev',
  databaseTokenConfigured: true,
  databaseUrlConfigured: true,
  isLocal: false,
  previewAdminEnabled: '1',
  smtpConfigured: true,
  vercel: '1',
  vercelEnvironment: 'preview',
}

test('l’accès local reste possible sans activation Vercel', () => {
  assert.equal(
    isVideoAdminEnvironmentAllowed({
      ...preview,
      isLocal: true,
      vercel: undefined,
      vercelEnvironment: undefined,
      previewAdminEnabled: undefined,
      smtpConfigured: false,
    }),
    true,
  )
})

test('la préversion dev configurée est autorisée', () => {
  assert.equal(isVideoAdminEnvironmentAllowed(preview), true)
})

test('la production et les autres branches restent fermées', () => {
  for (const changes of [
    { vercelEnvironment: 'production' },
    { branch: 'master' },
    { branch: undefined },
    { isLocal: true },
    { vercel: undefined },
  ]) {
    assert.equal(isVideoAdminEnvironmentAllowed({ ...preview, ...changes }), false)
  }
})

test('la préversion reste fermée sans l’une des protections requises', () => {
  for (const changes of [
    { previewAdminEnabled: undefined },
    { databaseUrlConfigured: false },
    { databaseTokenConfigured: false },
    { smtpConfigured: false },
  ]) {
    assert.equal(isVideoAdminEnvironmentAllowed({ ...preview, ...changes }), false)
  }
})
