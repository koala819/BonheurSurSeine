// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  VIDEO_ADMIN_COOKIE,
  getVideoAdminOrigin,
  hasVideoAdminSession,
} from '@/src/features/soutenir/server/video-admin'
import { addContributorVideo } from '@/src/features/soutenir/server/videos'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const origin = getVideoAdminOrigin(request.nextUrl.origin)

  if (!origin) {
    return new NextResponse(null, { status: 404 })
  }

  if (request.headers.get('origin') !== origin) {
    return new NextResponse(null, { status: 403 })
  }

  if (
    !(await hasVideoAdminSession(
      request.cookies.get(VIDEO_ADMIN_COOKIE)?.value,
    ))
  ) {
    return NextResponse.redirect(
      new URL('/soutenir/administration/connexion', origin),
      303,
    )
  }

  const form = await request.formData().catch(() => null)
  const title = form?.get('title')
  const url = form?.get('url')
  const description = form?.get('description')
  let status = 'erreur=1'

  if (
    typeof title === 'string' &&
    typeof url === 'string' &&
    (description === null || typeof description === 'string') &&
    title.length <= 120 &&
    url.length <= 500 &&
    (description?.length ?? 0) <= 240
  ) {
    try {
      await addContributorVideo({
        title,
        url,
        description: description ?? '',
      })
      status = 'ajoute=1'
    } catch {
      status = 'erreur=1'
    }
  }

  return NextResponse.redirect(
    new URL(`/soutenir/administration/videos?${status}`, origin),
    303,
  )
}
