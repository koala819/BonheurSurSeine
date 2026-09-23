// BSS-SOUTENIR — Module plateforme de soutien
import type { Metadata } from 'next'
import Link from 'next/link'

import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'
import { SupportContributionForm } from '@/src/features/soutenir/components/SupportContributionForm'
import {
  StripeConfigurationError,
  getStripeTestSecretKey,
} from '@/src/features/soutenir/server/stripe'

export const metadata: Metadata = {
  title: 'Soutenir Bonheur sur Seine',
  description:
    'Soutenir le travail indépendant de Bonheur sur Seine et découvrir le futur espace contributeurs.',
}

type SoutenirPageProps = {
  searchParams: Promise<{ annule?: string }>
}

export default async function SoutenirPage({
  searchParams,
}: SoutenirPageProps) {
  const { annule } = await searchParams
  let checkoutEnabled = false

  try {
    getStripeTestSecretKey()
    checkoutEnabled = true
  } catch (error) {
    if (!(error instanceof StripeConfigurationError)) {
      throw error
    }
  }

  return (
    <SoutenirPageShell
      description="Le contenu de Bonheur sur Seine reste accessible gratuitement à toutes et à tous. Si tu souhaites soutenir ce travail indépendant, tu peux contribuer simplement, à ton rythme."
      eyebrow="Un petit coup de pouce"
      title="Soutenir Bonheur sur Seine"
    >
      {annule === '1' ? (
        <p
          className="mx-auto mb-5 max-w-3xl rounded-xl border border-amber-200 bg-amber-50 p-4 text-center text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100"
          role="status"
        >
          Le paiement test a été annulé. Rien n&apos;a été débité.
        </p>
      ) : null}

      <SupportContributionForm checkoutEnabled={checkoutEnabled} />

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
