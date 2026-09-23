// BSS-SOUTENIR — Module plateforme de soutien
import nodemailer from 'nodemailer'
import 'server-only'

type SmtpConfiguration = {
  from: string
  host: string
  isLocal: boolean
  password: string | null
  port: number
  user: string | null
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function getMagicLinkSmtpConfiguration(): SmtpConfiguration | null {
  const host = process.env.BSS_SOUTENIR_SMTP_HOST?.trim() ?? ''
  const rawPort = process.env.BSS_SOUTENIR_SMTP_PORT?.trim() ?? ''
  const user = process.env.BSS_SOUTENIR_SMTP_USER?.trim() ?? ''
  const password = process.env.BSS_SOUTENIR_SMTP_PASSWORD?.trim() ?? ''
  const from = process.env.BSS_SOUTENIR_EMAIL_FROM?.trim() ?? ''

  if (![host, rawPort, user, password, from].some(Boolean)) {
    return null
  }

  const port = Number(rawPort)
  const isLocal = host === '127.0.0.1' || host === 'localhost'

  if (
    !host ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !emailPattern.test(from) ||
    Boolean(user) !== Boolean(password) ||
    (!isLocal && (!user || !password))
  ) {
    throw new Error('Configuration SMTP du module Soutenir invalide.')
  }

  return {
    from,
    host,
    isLocal,
    password: password || null,
    port,
    user: user || null,
  }
}

async function sendSoutenirEmail(
  configuration: SmtpConfiguration,
  options: { email: string; subject: string; text: string },
) {
  const transporter = nodemailer.createTransport({
    auth:
      configuration.user && configuration.password
        ? { user: configuration.user, pass: configuration.password }
        : undefined,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    host: configuration.host,
    port: configuration.port,
    requireTLS: !configuration.isLocal && configuration.port !== 465,
    secure: configuration.port === 465,
    socketTimeout: 15_000,
  })

  try {
    const delivery = await transporter.sendMail({
      disableFileAccess: true,
      disableUrlAccess: true,
      from: { name: 'Bonheur sur Seine', address: configuration.from },
      subject: options.subject,
      text: options.text,
      to: options.email,
    })

    if (
      !delivery.accepted.some(
        (address) =>
          (typeof address === 'string'
            ? address
            : address.address
          ).toLowerCase() === options.email.toLowerCase(),
      )
    ) {
      throw new Error('Le destinataire a été refusé par le serveur SMTP.')
    }
  } finally {
    transporter.close()
  }
}

export async function sendMagicLinkEmail(
  configuration: SmtpConfiguration,
  options: { email: string; url: string },
) {
  return sendSoutenirEmail(configuration, {
    email: options.email,
    subject: 'Ton lien de connexion — Bonheur sur Seine',
    text: [
      'Bonjour,',
      '',
      'Voici ton lien personnel pour accéder à ton espace contributeur :',
      options.url,
      '',
      'Il est valable 15 minutes et ne peut être utilisé qu’une seule fois.',
      'Si tu n’as pas demandé ce lien, ignore simplement cet e-mail.',
      '',
      'Bonheur sur Seine',
    ].join('\n'),
  })
}

export async function sendVideoAdminLinkEmail(
  configuration: SmtpConfiguration,
  options: { email: string; url: string },
) {
  return sendSoutenirEmail(configuration, {
    email: options.email,
    subject: 'Ton accès administrateur — Bonheur sur Seine',
    text: [
      'Bonjour,',
      '',
      'Voici ton lien personnel pour accéder à l’administration de l’espace contributeur :',
      options.url,
      '',
      'Il est valable 15 minutes et ne peut être utilisé qu’une seule fois.',
      'Si tu n’as pas demandé ce lien, ignore simplement cet e-mail.',
      '',
      'Bonheur sur Seine',
    ].join('\n'),
  })
}
