// BSS-SOUTENIR — Module plateforme de soutien
import { NextRequest, NextResponse } from 'next/server'

import {
  createContributorMagicLink,
  getSoutenirAppOrigin,
} from '@/src/features/soutenir/server/auth'
import {
  getMagicLinkSmtpConfiguration,
  sendMagicLinkEmail,
  sendVideoAdminLinkEmail,
} from '@/src/features/soutenir/server/magic-link-email'
import {
  createVideoAdminLink,
  getVideoAdminOrigin,
  getVideoAdminEmail,
  revokeVideoAdminLink,
} from '@/src/features/soutenir/server/video-admin'

export const runtime = 'nodejs'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  let payload: { email?: unknown }

  try {
    payload = (await request.json()) as { email?: unknown }
  } catch {
    return NextResponse.json(
      { error: 'Corps de requête invalide.' },
      { status: 400 },
    )
  }

  const email = typeof payload.email === 'string' ? payload.email.trim() : ''

  if (!emailPattern.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: 'Adresse e-mail invalide.' },
      { status: 400 },
    )
  }

  let origin

  try {
    origin = getSoutenirAppOrigin(request.nextUrl.origin)
  } catch {
    return NextResponse.json(
      { error: 'Configuration de connexion invalide.' },
      { status: 503 },
    )
  }

  let smtpConfiguration

  try {
    smtpConfiguration = getMagicLinkSmtpConfiguration()
  } catch {
    return NextResponse.json(
      { error: 'Configuration de messagerie invalide.' },
      { status: 503 },
    )
  }

  if (!smtpConfiguration && !origin.isLocal) {
    return NextResponse.json(
      { error: 'La messagerie de connexion n’est pas configurée.' },
      { status: 503 },
    )
  }

  const adminOrigin = getVideoAdminOrigin(request.nextUrl.origin)

  if (adminOrigin && email.toLowerCase() === getVideoAdminEmail()) {
    if (smtpConfiguration) {
      try {
        const adminLink = await createVideoAdminLink(email, adminOrigin)

        if (adminLink) {
          try {
            await sendVideoAdminLinkEmail(smtpConfiguration, {
              email,
              url: adminLink.url,
            })
          } catch {
            await revokeVideoAdminLink(adminLink.id)
            process.stderr.write(
              'BSS-SOUTENIR : envoi du lien administrateur impossible.\n',
            )
          }
        }
      } catch {
        process.stderr.write(
          'BSS-SOUTENIR : demande de lien administrateur impossible.\n',
        )
      }
    }

    return NextResponse.json(
      {
        message:
          'Si cette adresse dispose d’un accès, un e-mail de connexion a été demandé. Un nouveau lien peut être demandé après une minute.',
      },
      { status: 202 },
    )
  }

  const magicLink = await createContributorMagicLink(email, origin.origin, {
    throttleSeconds: smtpConfiguration ? 60 : undefined,
  })

  if (magicLink && smtpConfiguration) {
    try {
      await sendMagicLinkEmail(smtpConfiguration, {
        email,
        url: magicLink.previewUrl,
      })
    } catch {
      process.stderr.write('BSS-SOUTENIR : envoi SMTP du lien impossible.\n')
    }
  }

  const response = {
    message: smtpConfiguration
      ? 'Si cette adresse dispose d’un accès, un e-mail de connexion a été demandé. Un nouveau lien peut être demandé après une minute.'
      : 'Si cette adresse dispose d’un accès, un lien de connexion est disponible.',
    ...(origin.isLocal && !smtpConfiguration && magicLink
      ? {
          expiresAt: magicLink.expiresAt,
          previewUrl: magicLink.previewUrl,
        }
      : {}),
  }

  return NextResponse.json(response, { status: 202 })
}
