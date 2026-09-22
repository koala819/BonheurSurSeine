// BSS-SOUTENIR — Module plateforme de soutien
import type { Metadata } from 'next'
import Link from 'next/link'

import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'
import { SupportContributionForm } from '@/src/features/soutenir/components/SupportContributionForm'

export const metadata: Metadata = {
  title: 'Soutenir Bonheur sur Seine',
  description:
    'Soutenir le travail indépendant de Bonheur sur Seine et découvrir le futur espace contributeurs.',
}

export default function SoutenirPage() {
  return (
    <SoutenirPageShell
      description="Le contenu de Bonheur sur Seine reste accessible gratuitement à toutes et à tous. Si tu souhaites soutenir ce travail indépendant, tu peux contribuer simplement, à ton rythme."
      eyebrow="Un petit coup de pouce"
      title="Soutenir Bonheur sur Seine"
    >
      <SupportContributionForm />

      <p className="mt-7 text-center text-sm text-slate-600 dark:text-slate-300">
        Tu as déjà contribué ?{' '}
        <Link
          className="font-semibold text-cyan-700 underline decoration-cyan-300 underline-offset-4 transition hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100"
          href="/soutenir/connexion"
        >
          Retrouver mon espace
        </Link>
      </p>
    </SoutenirPageShell>
  )
}
