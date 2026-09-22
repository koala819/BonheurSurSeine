// BSS-SOUTENIR — Module plateforme de soutien
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  MessageCircle,
  Play,
  Sparkles,
} from 'lucide-react'

import type { Metadata } from 'next'

import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'

export const metadata: Metadata = {
  title: 'Espace contributeurs | Bonheur sur Seine',
  description: "Prototype de l'espace contributeurs de Bonheur sur Seine.",
}

const videoCards = [
  {
    duration: '12 min',
    eyebrow: 'Avant-première',
    title: 'Dans les coulisses du prochain essai',
  },
  {
    duration: '8 min',
    eyebrow: 'Journal de bord',
    title: 'Ce que les tests ne montrent pas toujours',
  },
]

export default function SoutenirContributeursPage() {
  return (
    <SoutenirPageShell
      description="Un aperçu du futur espace réservé à celles et ceux qui soutiennent le projet."
      eyebrow="Prototype non protégé"
      title="Espace contributeurs"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-cyan-100 p-2 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200">
                <Play aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="mb-0 text-xl font-bold sm:text-2xl">
                  Vidéos réservées
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Emplacements prévus pour des vidéos YouTube non répertoriées.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {videoCards.map((video) => (
                <article
                  className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/60"
                  key={video.title}
                >
                  <div className="flex aspect-video items-center justify-center border-b border-dashed border-slate-300 bg-gradient-to-br from-slate-100 to-cyan-50 dark:border-slate-600 dark:from-slate-900 dark:to-cyan-950/50">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-cyan-700 shadow-md dark:bg-slate-800 dark:text-cyan-300">
                      <Play
                        aria-hidden="true"
                        className="ml-0.5 h-5 w-5"
                        fill="currentColor"
                      />
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
                      <span>{video.eyebrow}</span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <Clock3 aria-hidden="true" className="h-3.5 w-3.5" />
                        {video.duration}
                      </span>
                    </div>
                    <h3 className="mb-0 mt-2 text-lg font-bold leading-snug text-slate-900 dark:text-white">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Aperçu de démonstration — aucune vidéo privée n&apos;est
                      intégrée.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-lg bg-amber-100 p-2 text-amber-700 dark:bg-amber-900/60 dark:text-amber-200">
                <Sparkles aria-hidden="true" className="h-5 w-5" />
              </span>
              <h2 className="mb-0 text-xl font-bold sm:text-2xl">
                Coulisses & publications
              </h2>
            </div>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/60 sm:p-5">
              <div className="flex items-start gap-3">
                <FileText
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-300"
                />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    Notes de tournage — exemple de publication
                  </p>
                  <p className="mt-2 leading-6 text-slate-600 dark:text-slate-300">
                    Quelques nouvelles courtes, des choix de matériel et les
                    idées en préparation pourront être partagés ici.
                  </p>
                  <p className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                    Publication de démonstration
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-6">
          <h2 className="mb-4 text-xl font-bold">Mon accès</h2>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/40">
            <p className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-200">
              <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
              Accès actif
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-emerald-800 dark:text-emerald-200">
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
              Actif jusqu&apos;au 22/10/2026
            </p>
            <p className="mt-2 text-xs text-emerald-700 dark:text-emerald-300">
              Statut affiché à titre d&apos;exemple.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            <button
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              type="button"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Associer mon compte Discord
            </button>
            <button
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              type="button"
            >
              <CreditCard aria-hidden="true" className="h-4 w-4" />
              Gérer ma contribution
            </button>
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
            Ces actions seront activées lors d&apos;une prochaine étape.
          </p>
        </aside>
      </div>
    </SoutenirPageShell>
  )
}
