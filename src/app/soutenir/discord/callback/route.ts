// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  SOUTENIR_SESSION_COOKIE,
  getAuthenticatedContributorSession,
  getSoutenirAppOrigin,
} from '@/src/features/soutenir/server/auth'
import {
  DiscordAccountAlreadyLinkedError,
  completeDiscordAuthorization,
} from '@/src/features/soutenir/server/discord'

export const runtime = 'nodejs'

function redirectToContributors(origin: string, status: string) {
  const url = new URL('/soutenir/contributeurs', origin)
  url.searchParams.set('discord', status)
  return NextResponse.redirect(url, 303)
}

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

  if (request.nextUrl.searchParams.get('error') === 'access_denied') {
    return redirectToContributors(appOrigin.origin, 'annule')
  }

  const code = request.nextUrl.searchParams.get('code') ?? ''
  const state = request.nextUrl.searchParams.get('state') ?? ''

  if (!code || code.length > 2048 || !state) {
    return redirectToContributors(appOrigin.origin, 'erreur')
  }

  try {
    const roleStatus = await completeDiscordAuthorization({
      code,
      contributorId: session.contributorId,
      origin: appOrigin.origin,
      sessionId: session.sessionId,
      state,
    })

    return redirectToContributors(
      appOrigin.origin,
      roleStatus === 'granted' ? 'role-actif' : 'role-attente',
    )
  } catch (error) {
    return redirectToContributors(
      appOrigin.origin,
      error instanceof DiscordAccountAlreadyLinkedError
        ? 'deja-utilise'
        : 'erreur',
    )
  }
}
