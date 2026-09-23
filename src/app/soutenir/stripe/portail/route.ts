// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  SOUTENIR_SESSION_COOKIE,
  getAuthenticatedContributorSession,
  getSoutenirAppOrigin,
} from '@/src/features/soutenir/server/auth'
import {
  createStripePortalSession,
  getActiveMonthlyStripeCustomerId,
} from '@/src/features/soutenir/server/stripe-portal'

export const runtime = 'nodejs'

function backToContributors(origin: string, status: string) {
  const url = new URL('/soutenir/contributeurs', origin)
  url.searchParams.set('stripe', status)
  return NextResponse.redirect(url, 303)
}

export async function POST(request: NextRequest) {
  const appOrigin = getSoutenirAppOrigin(request.nextUrl.origin)
  const requestOrigin = request.headers.get('origin')

  if (requestOrigin && requestOrigin !== appOrigin.origin) {
    return new NextResponse('Origine non autorisée.', { status: 403 })
  }

  const session = await getAuthenticatedContributorSession(
    request.cookies.get(SOUTENIR_SESSION_COOKIE)?.value,
  )

  if (!session) {
    return NextResponse.redirect(
      new URL('/soutenir/connexion', appOrigin.origin),
      303,
    )
  }

  const customerId = await getActiveMonthlyStripeCustomerId(
    session.contributorId,
  )

  if (!customerId) {
    return backToContributors(appOrigin.origin, 'aucun-abonnement')
  }

  try {
    const portalUrl = await createStripePortalSession(
      customerId,
      appOrigin.origin,
    )
    return NextResponse.redirect(portalUrl, 303)
  } catch {
    return backToContributors(appOrigin.origin, 'portail-indisponible')
  }
}
