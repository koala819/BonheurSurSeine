// BSS-SOUTENIR — Module plateforme de soutien
import { ArrowLeft } from 'lucide-react'

import type { Metadata } from 'next'
import Link from 'next/link'

import { MagicLinkForm } from '@/src/features/soutenir/components/MagicLinkForm'
import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'

export const metadata: Metadata = {
  title: 'Connexion contributeur | Bonheur sur Seine',
  description:
    "Prototype de connexion par lien magique à l'espace contributeurs.",
}

export default function SoutenirConnexionPage() {
  return (
    <SoutenirPageShell
      description="Indique l’adresse utilisée pour ta contribution. À terme, tu recevras un lien personnel et sécurisé."
      eyebrow="Connexion par lien magique"
      title="Retrouver mon espace contributeur"
    >
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
