// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  SOUTENIR_SESSION_COOKIE,
  getAuthenticatedContributorSession,
  getSoutenirAppOrigin,
} from '@/src/features/soutenir/server/auth'
import { saveContributorThanksProfile } from '@/src/features/soutenir/server/thanks'

export const runtime = 'nodejs'

function backToContributors(origin: string, status: string) {
  const url = new URL('/soutenir/contributeurs', origin)
  url.searchParams.set('merci', status)
  return NextResponse.redirect(url, 303)
}

export async function POST(request: NextRequest) {
  const appOrigin = getSoutenirAppOrigin(request.nextUrl.origin)

  if (request.headers.get('origin') !== appOrigin.origin) {
    return new NextResponse(null, { status: 403 })
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

  const form = await request.formData().catch(() => null)

  if (!form) {
    return backToContributors(appOrigin.origin, 'erreur')
  }

  const consent = form.get('thanksConsent') === 'on'
  const rawPseudonym = form.get('thanksPseudonym')

  if (typeof rawPseudonym !== 'string') {
    return backToContributors(appOrigin.origin, 'erreur')
  }

  const pseudonym = rawPseudonym.replace(/\s+/gu, ' ').trim()

  if (consent && (!pseudonym || pseudonym.length > 40)) {
    return backToContributors(appOrigin.origin, 'erreur')
  }

  await saveContributorThanksProfile(
    session.contributorId,
    consent ? pseudonym : null,
  )

  return backToContributors(appOrigin.origin, consent ? 'enregistre' : 'retire')
}
