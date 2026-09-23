// BSS-SOUTENIR — Politique d'accès administrateur, indépendante des secrets.
export type VideoAdminEnvironment = {
  branch: string | undefined
  databaseTokenConfigured: boolean
  databaseUrlConfigured: boolean
  isLocal: boolean
  previewAdminEnabled: string | undefined
  smtpConfigured: boolean
  vercel: string | undefined
  vercelEnvironment: string | undefined
}

export function isVideoAdminEnvironmentAllowed({
  branch,
  databaseTokenConfigured,
  databaseUrlConfigured,
  isLocal,
  previewAdminEnabled,
  smtpConfigured,
  vercel,
  vercelEnvironment,
}: VideoAdminEnvironment) {
  if (vercel === '1' || vercelEnvironment) {
    return (
      vercel === '1' &&
      vercelEnvironment === 'preview' &&
      branch === 'dev' &&
      previewAdminEnabled === '1' &&
      !isLocal &&
      databaseUrlConfigured &&
      databaseTokenConfigured &&
      smtpConfigured
    )
  }

  return isLocal
}
