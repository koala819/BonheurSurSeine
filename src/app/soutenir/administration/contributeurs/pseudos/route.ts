// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import { getThanksPseudonyms } from '@/src/features/soutenir/server/thanks'
import {
  VIDEO_ADMIN_COOKIE,
  getVideoAdminOrigin,
  hasVideoAdminSession,
} from '@/src/features/soutenir/server/video-admin'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const origin = getVideoAdminOrigin(request.nextUrl.origin)

  if (!origin) {
    return new NextResponse(null, { status: 404 })
  }

  if (
    !(await hasVideoAdminSession(
      request.cookies.get(VIDEO_ADMIN_COOKIE)?.value,
    ))
  ) {
    return NextResponse.redirect(new URL('/soutenir/connexion', origin), 303)
  }

  const pseudonyms = await getThanksPseudonyms()
  const content = `\uFEFF${pseudonyms.join('\r\n')}${pseudonyms.length ? '\r\n' : ''}`
  const filename = `pseudos-contributeurs-${new Date().toISOString().slice(0, 10)}.txt`

  return new NextResponse(content, {
    headers: {
      'Cache-Control': 'private, no-store',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
