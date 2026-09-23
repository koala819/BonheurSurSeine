// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  VIDEO_ADMIN_COOKIE,
  consumeVideoAdminLink,
  getVideoAdminOrigin,
} from '@/src/features/soutenir/server/video-admin'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const origin = getVideoAdminOrigin(request.nextUrl.origin)

  if (!origin) {
    return new NextResponse(null, { status: 404 })
  }

  const token = request.nextUrl.searchParams.get('token') ?? ''
  const session = await consumeVideoAdminLink(token)
  const destination = session
    ? '/soutenir/contributeurs'
    : '/soutenir/administration/connexion?erreur=lien'
  const response = NextResponse.redirect(new URL(destination, origin), 303)

  response.headers.set('Cache-Control', 'no-store')
  response.headers.set('Referrer-Policy', 'no-referrer')

  if (session) {
    response.cookies.set(VIDEO_ADMIN_COOKIE, session.sessionToken, {
      expires: session.sessionExpiresAt,
      httpOnly: true,
      path: '/soutenir',
      sameSite: 'lax',
      secure: new URL(origin).protocol === 'https:',
    })
    response.headers.append(
      'Set-Cookie',
      `${VIDEO_ADMIN_COOKIE}=; Path=/soutenir/administration; Max-Age=0; HttpOnly; SameSite=Lax`,
    )
  }

  return response
}
