// BSS-SOUTENIR — Module plateforme de soutien
import { ArrowRight, Heart, MessageCircle } from 'lucide-react'

import type { Metadata } from 'next'
import Link from 'next/link'

import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'

export const metadata: Metadata = {
  title: 'Merci pour ton soutien | Bonheur sur Seine',
  description:
    'Page de confirmation du prototype de soutien Bonheur sur Seine.',
}

export default function SoutenirMerciPage() {
  return (
    <SoutenirPageShell
      description="Ton accès contributeur est maintenant actif."
      eyebrow="Contribution simulée"
      title="Merci pour ton soutien ❤️"
    >
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200">
          <Heart aria-hidden="true" className="h-7 w-7" fill="currentColor" />
        </div>

        <p className="mt-5 text-center leading-7 text-slate-600 dark:text-slate-300">
          Bienvenue dans cette première version de l&apos;espace. Tu peux dès
          maintenant découvrir son aperçu.
        </p>

        <div className="mt-7 grid gap-3">
          <Link
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            href="/soutenir/contributeurs"
          >
            Voir les contenus contributeurs
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>

          <button
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            type="button"
          >
            <MessageCircle aria-hidden="true" className="h-5 w-5" />
            Associer Discord
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-300">
              optionnel
            </span>
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
          L&apos;association Discord sera disponible dans une prochaine étape.
        </p>
      </div>
    </SoutenirPageShell>
  )
}
