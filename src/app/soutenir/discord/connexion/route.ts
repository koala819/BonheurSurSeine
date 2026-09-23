// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  SOUTENIR_SESSION_COOKIE,
  getAuthenticatedContributorSession,
  getSoutenirAppOrigin,
} from '@/src/features/soutenir/server/auth'
import { createDiscordAuthorization } from '@/src/features/soutenir/server/discord'
import { isDiscordRoleConfigured } from '@/src/features/soutenir/server/discord-role'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
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

  if (!isDiscordRoleConfigured()) {
    return NextResponse.redirect(
      new URL(
        '/soutenir/contributeurs?discord=configuration',
        appOrigin.origin,
      ),
      303,
    )
  }

  try {
    const authorizationUrl = await createDiscordAuthorization({
      contributorId: session.contributorId,
      origin: appOrigin.origin,
      sessionId: session.sessionId,
    })

    return NextResponse.redirect(authorizationUrl, 303)
  } catch {
    return NextResponse.redirect(
      new URL(
        '/soutenir/contributeurs?discord=configuration',
        appOrigin.origin,
      ),
      303,
    )
  }
}
