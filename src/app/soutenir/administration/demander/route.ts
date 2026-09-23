// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  getMagicLinkSmtpConfiguration,
  sendVideoAdminLinkEmail,
} from '@/src/features/soutenir/server/magic-link-email'
import {
  createVideoAdminLink,
  getVideoAdminOrigin,
  revokeVideoAdminLink,
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

  const form = await request.formData().catch(() => null)
  const email = form?.get('email')
  const address = typeof email === 'string' ? email.trim() : ''

  if (address && address.length <= 254) {
    try {
      const smtp = getMagicLinkSmtpConfiguration()

      if (smtp) {
        const link = await createVideoAdminLink(address, origin)

        if (link) {
          try {
            await sendVideoAdminLinkEmail(smtp, {
              email: address,
              url: link.url,
            })
          } catch {
            await revokeVideoAdminLink(link.id)
            process.stderr.write(
              'BSS-SOUTENIR : envoi du lien administrateur impossible.\n',
            )
          }
        }
      }
    } catch {
      process.stderr.write(
        'BSS-SOUTENIR : demande de lien administrateur impossible.\n',
      )
    }
  }

  return NextResponse.redirect(
    new URL('/soutenir/administration/connexion?demande=1', origin),
    303,
  )
}
