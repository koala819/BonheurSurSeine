// BSS-SOUTENIR — Module plateforme de soutien
import { ArrowLeft } from 'lucide-react'

import type { Metadata } from 'next'
import { cookies, headers } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { MagicLinkForm } from '@/src/features/soutenir/components/MagicLinkForm'
import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'

import {
  SOUTENIR_SESSION_COOKIE,
  getAuthenticatedContributorSession,
} from '@/src/features/soutenir/server/auth'
import {
  VIDEO_ADMIN_COOKIE,
  getVideoAdminOriginForHost,
  hasVideoAdminSession,
} from '@/src/features/soutenir/server/video-admin'

export const metadata: Metadata = {
  title: 'Connexion contributeur | Bonheur sur Seine',
  description: "Connexion par lien magique à l'espace contributeurs.",
}

type SoutenirConnexionPageProps = {
  searchParams: Promise<{ deconnexion?: string; erreur?: string }>
}

export default async function SoutenirConnexionPage({
  searchParams,
}: SoutenirConnexionPageProps) {
  const cookieStore = await cookies()
  const host = (await headers()).get('host')
  const adminOrigin = getVideoAdminOriginForHost(host)
  const isAdmin = adminOrigin
    ? await hasVideoAdminSession(cookieStore.get(VIDEO_ADMIN_COOKIE)?.value)
    : false

  if (isAdmin) {
    redirect('/soutenir/contributeurs')
  }

  const session = await getAuthenticatedContributorSession(
    cookieStore.get(SOUTENIR_SESSION_COOKIE)?.value,
  )

  if (session) {
    redirect('/soutenir/contributeurs')
  }

  const { deconnexion, erreur } = await searchParams

  return (
    <SoutenirPageShell
      description="Indique ton adresse e-mail pour recevoir un lien personnel à usage unique."
      eyebrow="Connexion par lien magique"
      title="Retrouver mon espace contributeur"
    >
      {erreur === 'lien' ? (
        <p
          className="mx-auto mb-5 max-w-xl rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-100"
          role="alert"
        >
          Ce lien est invalide, expiré ou déjà utilisé. Demande un nouveau lien.
        </p>
      ) : null}

      {deconnexion === '1' ? (
        <p
          className="mx-auto mb-5 max-w-xl rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100"
          role="status"
        >
          Tu es maintenant déconnecté.
        </p>
      ) : null}

      <MagicLinkForm />

      <p className="mt-7 text-center">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 underline decoration-cyan-300 underline-offset-4 transition hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100"
          href="/soutenir"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Retour à la page de soutien
        </Link>
      </p>
    </SoutenirPageShell>
  )
}
