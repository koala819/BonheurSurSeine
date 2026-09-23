// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  SOUTENIR_SESSION_COOKIE,
  getSoutenirAppOrigin,
  revokeContributorSession,
} from '@/src/features/soutenir/server/auth'
import {
  VIDEO_ADMIN_COOKIE,
  revokeVideoAdminSession,
} from '@/src/features/soutenir/server/video-admin'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const appOrigin = getSoutenirAppOrigin(request.nextUrl.origin)

  await revokeContributorSession(
    request.cookies.get(SOUTENIR_SESSION_COOKIE)?.value,
  )
  await revokeVideoAdminSession(request.cookies.get(VIDEO_ADMIN_COOKIE)?.value)

  const response = NextResponse.redirect(
    new URL('/soutenir/connexion?deconnexion=1', appOrigin.origin),
    303,
  )

  response.cookies.set(SOUTENIR_SESSION_COOKIE, '', {
    expires: new Date(0),
    httpOnly: true,
    maxAge: 0,
    path: '/soutenir',
    sameSite: 'lax',
    secure: new URL(appOrigin.origin).protocol === 'https:',
  })
  response.cookies.set(VIDEO_ADMIN_COOKIE, '', {
    expires: new Date(0),
    httpOnly: true,
    maxAge: 0,
    path: '/soutenir',
    sameSite: 'lax',
    secure: new URL(appOrigin.origin).protocol === 'https:',
  })
  response.headers.append(
    'Set-Cookie',
    `${VIDEO_ADMIN_COOKIE}=; Path=/soutenir/administration; Max-Age=0; HttpOnly; SameSite=Lax`,
  )

  return response
}
