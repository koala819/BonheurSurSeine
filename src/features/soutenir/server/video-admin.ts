// BSS-SOUTENIR — Module plateforme de soutien
import { getSoutenirAppOrigin } from './auth'
import { getSoutenirDatabase, initializeSoutenirDatabase } from './database'
import { getMagicLinkSmtpConfiguration } from './magic-link-email'
import { isVideoAdminEnvironmentAllowed } from './video-admin-policy'

import { createHash, randomBytes, randomUUID } from 'node:crypto'
import 'server-only'

const LINK_LIFETIME_MS = 15 * 60 * 1000
const SESSION_LIFETIME_MS = 12 * 60 * 60 * 1000
const TOKEN_PATTERN = /^[A-Za-z0-9_-]{43}$/
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const VIDEO_ADMIN_COOKIE = 'bss_soutenir_video_admin'

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

function createToken() {
  return randomBytes(32).toString('base64url')
}

export function getVideoAdminEmail() {
  const email = process.env.BSS_SOUTENIR_VIDEO_ADMIN_EMAIL?.trim().toLowerCase()
  return email && EMAIL_PATTERN.test(email) ? email : null
}

export function getVideoAdminOrigin(requestOrigin: string) {
  const configured = process.env.BSS_SOUTENIR_APP_URL?.trim()

  if (!configured || !getVideoAdminEmail()) {
    return null
  }

  try {
    const appOrigin = getSoutenirAppOrigin(configured)
    const requestUrl = new URL(requestOrigin)

    if (requestUrl.origin !== appOrigin.origin) {
      return null
    }

    const isVercel =
      process.env.VERCEL === '1' || Boolean(process.env.VERCEL_ENV)
    const allowed = isVideoAdminEnvironmentAllowed({
      branch: process.env.VERCEL_GIT_COMMIT_REF,
      databaseTokenConfigured: Boolean(
        process.env.BSS_SOUTENIR_DATABASE_AUTH_TOKEN?.trim(),
      ),
      databaseUrlConfigured: Boolean(
        process.env.BSS_SOUTENIR_DATABASE_URL?.trim(),
      ),
      isLocal: appOrigin.isLocal,
      previewAdminEnabled: process.env.BSS_SOUTENIR_ENABLE_PREVIEW_ADMIN,
      smtpConfigured: isVercel
        ? Boolean(getMagicLinkSmtpConfiguration())
        : false,
      vercel: process.env.VERCEL,
      vercelEnvironment: process.env.VERCEL_ENV,
    })

    if (!allowed) {
      return null
    }

    return appOrigin.origin
  } catch {
    return null
  }
}

export function getVideoAdminOriginForHost(host: string | null) {
  if (!host) {
    return null
  }

  const protocol = process.env.VERCEL === '1' ? 'https' : 'http'
  return getVideoAdminOrigin(`${protocol}://${host}`)
}

async function cleanupVideoAdminRecords(nowIso: string) {
  await getSoutenirDatabase().batch(
    [
      {
        args: [nowIso],
        sql: 'DELETE FROM bss_soutenir_video_admin_links WHERE expires_at <= ?',
      },
      {
        args: [nowIso],
        sql: 'DELETE FROM bss_soutenir_video_admin_sessions WHERE expires_at <= ?',
      },
    ],
    'write',
  )
}

export async function createVideoAdminLink(email: string, origin: string) {
  const adminEmail = getVideoAdminEmail()

  if (!adminEmail || email.trim().toLowerCase() !== adminEmail) {
    return null
  }

  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const now = new Date()
  const nowIso = now.toISOString()
  await cleanupVideoAdminRecords(nowIso)

  const recent = await database.execute({
    args: [adminEmail, new Date(now.getTime() - 60_000).toISOString()],
    sql: `SELECT id FROM bss_soutenir_video_admin_links
      WHERE admin_email = ? AND used_at IS NULL AND created_at > ?
      LIMIT 1`,
  })

  if (recent.rows[0]) {
    return null
  }

  const id = randomUUID()
  const token = createToken()

  await database.batch(
    [
      {
        args: [adminEmail],
        sql: `DELETE FROM bss_soutenir_video_admin_links
          WHERE admin_email = ? AND used_at IS NULL`,
      },
      {
        args: [
          id,
          adminEmail,
          hashToken(token),
          new Date(now.getTime() + LINK_LIFETIME_MS).toISOString(),
          nowIso,
        ],
        sql: `INSERT INTO bss_soutenir_video_admin_links (
          id, admin_email, token_hash, expires_at, created_at
        ) VALUES (?, ?, ?, ?, ?)`,
      },
    ],
    'write',
  )

  const url = new URL('/soutenir/administration/verification', origin)
  url.searchParams.set('token', token)

  return { id, url: url.toString() }
}

export async function revokeVideoAdminLink(id: string) {
  await initializeSoutenirDatabase()
  await getSoutenirDatabase().execute({
    args: [id],
    sql: 'DELETE FROM bss_soutenir_video_admin_links WHERE id = ?',
  })
}

export async function consumeVideoAdminLink(token: string) {
  if (!TOKEN_PATTERN.test(token)) {
    return null
  }

  const adminEmail = getVideoAdminEmail()

  if (!adminEmail) {
    return null
  }

  await initializeSoutenirDatabase()

  const database = getSoutenirDatabase()
  const now = new Date()
  const nowIso = now.toISOString()
  await cleanupVideoAdminRecords(nowIso)

  const result = await database.execute({
    args: [nowIso, hashToken(token), adminEmail, nowIso],
    sql: `UPDATE bss_soutenir_video_admin_links SET used_at = ?
      WHERE token_hash = ? AND admin_email = ?
        AND used_at IS NULL AND expires_at > ?
      RETURNING id`,
  })

  if (!result.rows[0]) {
    return null
  }

  const sessionToken = createToken()
  const sessionExpiresAt = new Date(now.getTime() + SESSION_LIFETIME_MS)

  await database.execute({
    args: [
      randomUUID(),
      adminEmail,
      hashToken(sessionToken),
      sessionExpiresAt.toISOString(),
      nowIso,
    ],
    sql: `INSERT INTO bss_soutenir_video_admin_sessions (
      id, admin_email, token_hash, expires_at, created_at
    ) VALUES (?, ?, ?, ?, ?)`,
  })

  return { sessionToken, sessionExpiresAt }
}

export async function hasVideoAdminSession(token: string | undefined) {
  if (!token || !TOKEN_PATTERN.test(token)) {
    return false
  }

  const adminEmail = getVideoAdminEmail()

  if (!adminEmail) {
    return false
  }

  await initializeSoutenirDatabase()

  const result = await getSoutenirDatabase().execute({
    args: [hashToken(token), adminEmail, new Date().toISOString()],
    sql: `SELECT id FROM bss_soutenir_video_admin_sessions
      WHERE token_hash = ? AND admin_email = ? AND expires_at > ?
      LIMIT 1`,
  })

  return Boolean(result.rows[0])
}

export async function revokeVideoAdminSession(token: string | undefined) {
  if (!token || !TOKEN_PATTERN.test(token)) {
    return
  }

  await initializeSoutenirDatabase()
  await getSoutenirDatabase().execute({
    args: [hashToken(token)],
    sql: 'DELETE FROM bss_soutenir_video_admin_sessions WHERE token_hash = ?',
  })
}
