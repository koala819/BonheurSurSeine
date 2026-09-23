// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  SOUTENIR_SESSION_COOKIE,
  getAuthenticatedContributorSession,
  getSoutenirAppOrigin,
} from '@/src/features/soutenir/server/auth'
import { disconnectDiscordAccount } from '@/src/features/soutenir/server/discord'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const appOrigin = getSoutenirAppOrigin(request.nextUrl.origin)
  const session = await getAuthenticatedContributorSession(
    request.cookies.get(SOUTENIR_SESSION_COOKIE)?.value,
  )

  if (!session) {
    return NextResponse.redirect(
      new URL('/soutenir/connexion', appOrigin.origin),
      303,
    )
  }

  const disconnected = await disconnectDiscordAccount(session.contributorId)

  return NextResponse.redirect(
    new URL(
      disconnected
        ? '/soutenir/contributeurs?discord=dissocie'
        : '/soutenir/contributeurs?discord=dissociation-erreur',
      appOrigin.origin,
    ),
    303,
  )
}
