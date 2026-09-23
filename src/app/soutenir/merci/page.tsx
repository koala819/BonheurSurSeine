// BSS-SOUTENIR — Module plateforme de soutien
import { ArrowRight, Heart, MessageCircle } from 'lucide-react'

import type { Metadata } from 'next'
import Link from 'next/link'

import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'

import {
  findContributionSummaryById,
  findContributionSummaryByStripeCheckoutSessionId,
} from '@/src/features/soutenir/server/contributions'

export const metadata: Metadata = {
  title: 'Merci pour ton soutien | Bonheur sur Seine',
  description:
    'Page de confirmation du prototype de soutien Bonheur sur Seine.',
}

type SoutenirMerciPageProps = {
  searchParams: Promise<{ contribution?: string; session_id?: string }>
}

export default async function SoutenirMerciPage({
  searchParams,
}: SoutenirMerciPageProps) {
  const { contribution: contributionId, session_id: stripeSessionId } =
    await searchParams
  const contribution = stripeSessionId
    ? await findContributionSummaryByStripeCheckoutSessionId(stripeSessionId)
    : contributionId
      ? await findContributionSummaryById(contributionId)
      : null
  const isPendingStripeReturn =
    Boolean(stripeSessionId) && contribution?.status === 'pending'
  const isPaidStripeReturn =
    Boolean(stripeSessionId) && contribution?.status === 'paid'
  const isInactiveStripeReturn =
    Boolean(stripeSessionId) &&
    (contribution?.status === 'cancelled' ||
      contribution?.status === 'refunded')
  const formattedAmount = contribution
    ? new Intl.NumberFormat('fr-FR', {
        currency: contribution.currency,
        style: 'currency',
      }).format(contribution.amountCents / 100)
    : null

  return (
    <SoutenirPageShell
      description={
        isPaidStripeReturn
          ? 'Ton paiement test a été confirmé par le webhook Stripe. Ton accès contributeur est actif.'
          : isPendingStripeReturn
            ? 'Ton paiement test a été transmis. L’accès sera activé après la validation sécurisée du webhook Stripe.'
            : isInactiveStripeReturn
              ? 'Cette contribution test n’accorde plus d’accès contributeur.'
              : 'Cette page présente la confirmation du parcours de soutien.'
      }
      eyebrow={stripeSessionId ? 'Retour Stripe test' : 'Contribution simulée'}
      title="Merci pour ton soutien ❤️"
    >
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200">
          <Heart aria-hidden="true" className="h-7 w-7" fill="currentColor" />
        </div>

        <p className="mt-5 text-center leading-7 text-slate-600 dark:text-slate-300">
          {isPaidStripeReturn
            ? "Le webhook Stripe a vérifié le paiement. L'accès local est maintenant actif."
            : isPendingStripeReturn
              ? "La session Checkout est bien reliée à la contribution locale. Aucun accès réel n'est encore accordé à cette étape."
              : isInactiveStripeReturn
                ? "La contribution a été annulée ou remboursée. L'accès n'est pas actif."
                : "Bienvenue dans cette première version de l'espace. Tu peux découvrir son aperçu."}
        </p>

        {contribution ? (
          <div
            className={`mt-5 rounded-xl border p-4 ${
              isPendingStripeReturn
                ? 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/40'
                : isInactiveStripeReturn
                  ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/40'
                  : 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40'
            }`}
          >
            <p
              className={`text-center font-semibold ${
                isPendingStripeReturn
                  ? 'text-amber-800 dark:text-amber-200'
                  : isInactiveStripeReturn
                    ? 'text-red-800 dark:text-red-200'
                    : 'text-emerald-800 dark:text-emerald-200'
              }`}
            >
              {isPaidStripeReturn
                ? 'Paiement confirmé par Stripe'
                : isPendingStripeReturn
                  ? 'Validation du paiement en attente'
                  : isInactiveStripeReturn
                    ? 'Contribution inactive'
                    : 'Contribution enregistrée dans la base locale'}
            </p>
            <p
              className={`mt-1 text-center text-sm ${
                isPendingStripeReturn
                  ? 'text-amber-700 dark:text-amber-300'
                  : isInactiveStripeReturn
                    ? 'text-red-700 dark:text-red-300'
                    : 'text-emerald-700 dark:text-emerald-300'
              }`}
            >
              {formattedAmount} ·{' '}
              {contribution.mode === 'once' ? 'ponctuelle' : 'mensuelle'}
            </p>
          </div>
        ) : stripeSessionId ? (
          <p className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200">
            Cette session Stripe ne correspond à aucune contribution locale.
          </p>
        ) : null}

        <div className="mt-7 grid gap-3">
          <Link
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            href={isPaidStripeReturn ? '/soutenir/connexion' : '/soutenir'}
          >
            {isPaidStripeReturn
              ? 'Accéder à mon espace sécurisé'
              : isPendingStripeReturn
                ? 'Retour à la page de soutien'
                : isInactiveStripeReturn
                  ? 'Retour à la page de soutien'
                  : 'Continuer'}
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>

          <Link
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            href="/soutenir/contributeurs"
          >
            <MessageCircle aria-hidden="true" className="h-5 w-5" />
            Associer Discord
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-300">
              optionnel
            </span>
          </Link>
        </div>

        <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
          L&apos;association se fait depuis ton espace contributeur sécurisé.
        </p>
      </div>
    </SoutenirPageShell>
  )
}
