// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  VIDEO_ADMIN_COOKIE,
  getVideoAdminOrigin,
  revokeVideoAdminSession,
} from '@/src/features/soutenir/server/video-admin'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const origin = getVideoAdminOrigin(request.nextUrl.origin)

  if (!origin) {
    return new NextResponse(null, { status: 404 })
  }

  if (request.headers.get('origin') !== origin) {
    return new NextResponse(null, { status: 403 })
  }

  await revokeVideoAdminSession(request.cookies.get(VIDEO_ADMIN_COOKIE)?.value)
  const response = NextResponse.redirect(
    new URL('/soutenir/administration/connexion', origin),
    303,
  )
  response.cookies.set(VIDEO_ADMIN_COOKIE, '', {
    httpOnly: true,
    maxAge: 0,
    path: '/soutenir',
    sameSite: 'lax',
    secure: new URL(origin).protocol === 'https:',
  })
  response.headers.append(
    'Set-Cookie',
    `${VIDEO_ADMIN_COOKIE}=; Path=/soutenir/administration; Max-Age=0; HttpOnly; SameSite=Lax`,
  )
  return response
}
