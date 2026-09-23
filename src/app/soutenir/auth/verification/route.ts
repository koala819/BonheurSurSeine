// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  SOUTENIR_SESSION_COOKIE,
  consumeMagicLink,
  getSoutenirAppOrigin,
} from '@/src/features/soutenir/server/auth'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const appOrigin = getSoutenirAppOrigin(request.nextUrl.origin)
  const token = request.nextUrl.searchParams.get('token') ?? ''
  const session = await consumeMagicLink(token)

  if (!session) {
    return NextResponse.redirect(
      new URL('/soutenir/connexion?erreur=lien', appOrigin.origin),
      303,
    )
  }

  const response = NextResponse.redirect(
    new URL('/soutenir/contributeurs', appOrigin.origin),
    303,
  )

  response.cookies.set(SOUTENIR_SESSION_COOKIE, session.sessionToken, {
    expires: session.sessionExpiresAt,
    httpOnly: true,
    path: '/soutenir',
    sameSite: 'lax',
    secure: new URL(appOrigin.origin).protocol === 'https:',
  })

  return response
}
