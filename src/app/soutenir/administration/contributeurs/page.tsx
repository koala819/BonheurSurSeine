// BSS-SOUTENIR — Module plateforme de soutien
import type { Metadata } from 'next'
import { cookies, headers } from 'next/headers'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'

import {
  type AdminContribution,
  getAdminContributorsPage,
} from '@/src/features/soutenir/server/admin-contributors'
import { getThanksPseudonyms } from '@/src/features/soutenir/server/thanks'
import {
  VIDEO_ADMIN_COOKIE,
  getVideoAdminOriginForHost,
  hasVideoAdminSession,
} from '@/src/features/soutenir/server/video-admin'

export const metadata: Metadata = {
  title: 'Contributeurs — Administration | Bonheur sur Seine',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

type PageProps = {
  searchParams: Promise<{ page?: string }>
}

const euro = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
})
const date = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'medium' })

const statusLabels: Record<AdminContribution['status'], string> = {
  cancelled: 'Annulée',
  paid: 'Payée',
  pending: 'En attente',
  refunded: 'Remboursée',
  simulated: 'Simulation',
}

const discordLabels: Record<string, string> = {
  granted: 'Rôle actif',
  not_member: 'Hors du serveur',
  pending: 'Rôle en attente',
}

function formatDate(value: string) {
  return date.format(new Date(value))
}

function parsePage(value: string | undefined) {
  return value && /^[1-9]\d{0,5}$/.test(value) ? Number(value) : 1
}

function stripeReferences(contribution: AdminContribution) {
  return [
    ['Client', contribution.stripeCustomerId],
    ['Abonnement', contribution.stripeSubscriptionId],
    ['Paiement', contribution.stripePaymentIntentId],
    ['Checkout', contribution.stripeCheckoutSessionId],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]))
}

export default async function AdminContributorsPage({
  searchParams,
}: PageProps) {
  const host = (await headers()).get('host')
  const origin = getVideoAdminOriginForHost(host)

  if (!origin) {
    notFound()
  }

  const token = (await cookies()).get(VIDEO_ADMIN_COOKIE)?.value

  if (!(await hasVideoAdminSession(token))) {
    redirect('/soutenir/connexion')
  }

  const { page: requestedPage } = await searchParams
  const [listing, thanksPseudonyms] = await Promise.all([
    getAdminContributorsPage(parsePage(requestedPage)),
    getThanksPseudonyms(),
  ])
  const { activeCount, contributors, page, pageCount, totalCount } = listing

  return (
    <SoutenirPageShell
      description="Vue des soutiens enregistrés par ce module, en mode test Stripe."
      eyebrow="Administration"
      title="Contributeurs"
    >
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            className="text-sm font-semibold text-cyan-700 underline dark:text-cyan-300"
            href="/soutenir/contributeurs"
          >
            Retour à l’espace contributeur
          </Link>
          <Link
            className="rounded-xl border border-cyan-300 px-4 py-2 text-sm font-semibold text-cyan-800 dark:border-cyan-700 dark:text-cyan-200"
            href="/soutenir/administration/videos"
          >
            Gérer les vidéos
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Adresses enregistrées
            </p>
            <p className="text-2xl font-bold">{totalCount}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Accès actifs
            </p>
            <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
              {activeCount}
            </p>
          </div>
        </div>

        <section className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-4 dark:border-cyan-800 dark:bg-cyan-950/30">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-bold">
              Pseudos pour les remerciements ({thanksPseudonyms.length})
            </h2>
            {thanksPseudonyms.length ? (
              <a
                className="rounded-lg bg-cyan-700 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-800"
                href="/soutenir/administration/contributeurs/pseudos"
              >
                Télécharger la liste (.txt)
              </a>
            ) : null}
          </div>
          <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
            Uniquement les contributeurs avec un accès actif qui ont choisi un
            pseudo et accepté d’être cités. Aucun nom Discord n’est ajouté
            automatiquement.
          </p>
          {thanksPseudonyms.length ? (
            <textarea
              aria-label="Pseudos à remercier, un par ligne"
              className="mt-3 w-full rounded-lg border border-cyan-200 bg-white p-3 text-sm text-slate-900 dark:border-cyan-800 dark:bg-slate-900 dark:text-white"
              readOnly
              rows={Math.min(5, Math.max(2, thanksPseudonyms.length))}
              value={thanksPseudonyms.join('\n')}
            />
          ) : (
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Aucun pseudo autorisé pour le moment. Les contributeurs peuvent
              renseigner le leur dans leur espace.
            </p>
          )}
        </section>

        <details className="text-xs leading-5 text-slate-600 dark:text-slate-300">
          <summary className="cursor-pointer font-semibold">
            À propos des données affichées
          </summary>
          <p className="mt-2">
            Les montants proviennent des essais Stripe de ce module. Un montant
            mensuel représente le tarif choisi, pas la somme encaissée. Les
            autres clients Stripe, factures, moyens de paiement et données
            Patreon/Tipeee ne sont pas importés ici.
          </p>
        </details>

        {contributors.length ? (
          <div className="space-y-2">
            {contributors.map((contributor) => {
              const latest = contributor.contributions[0]

              return (
                <article
                  className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
                  key={contributor.id}
                >
                  <div className="grid gap-2 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-4">
                    <div className="min-w-0">
                      <h2 className="break-all text-sm font-bold">
                        {contributor.email}
                      </h2>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {contributor.thanksPseudonym
                          ? `Pseudo : ${contributor.thanksPseudonym}`
                          : contributor.discordUsername
                            ? `Discord : @${contributor.discordUsername}`
                            : 'Aucun pseudo de remerciement'}
                      </p>
                    </div>
                    <p className="text-sm">
                      {latest ? (
                        <>
                          <span className="font-semibold">
                            {euro.format(latest.amountCents / 100)}
                            {latest.mode === 'monthly' ? ' / mois' : ''}
                          </span>
                          <span className="block text-xs text-slate-600 dark:text-slate-300">
                            {statusLabels[latest.status]} ·{' '}
                            {formatDate(latest.createdAt)}
                          </span>
                        </>
                      ) : (
                        'Aucun soutien'
                      )}
                    </p>
                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${
                        contributor.hasActiveAccess
                          ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200'
                          : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {contributor.hasActiveAccess ? 'Actif' : 'Inactif'}
                    </span>
                  </div>

                  <details className="mt-2 border-t border-slate-100 pt-2 text-xs dark:border-slate-700">
                    <summary className="cursor-pointer font-semibold text-cyan-700 dark:text-cyan-300">
                      Détails · {contributor.contributions.length} soutien
                      {contributor.contributions.length > 1 ? 's' : ''}
                    </summary>
                    <div className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
                      <p>
                        Première demande le {formatDate(contributor.createdAt)}
                        {' · '}Discord :{' '}
                        {contributor.discordUsername
                          ? `@${contributor.discordUsername} — ${discordLabels[contributor.discordRoleStatus ?? ''] ?? 'État inconnu'}`
                          : 'non associé'}
                      </p>
                      {contributor.contributions.map((contribution) => {
                        const references = stripeReferences(contribution)

                        return (
                          <div
                            className="rounded-lg bg-slate-50 p-3 dark:bg-slate-900/50"
                            key={contribution.id}
                          >
                            <p className="font-semibold">
                              {contribution.mode === 'monthly'
                                ? 'Mensuel'
                                : 'Ponctuel'}
                              {' · '}
                              {euro.format(contribution.amountCents / 100)}
                              {contribution.mode === 'monthly' ? ' / mois' : ''}
                              {' · '}
                              {statusLabels[contribution.status]}
                            </p>
                            <p className="mt-1">
                              Créé le {formatDate(contribution.createdAt)}
                              {contribution.status === 'paid' &&
                              contribution.accessExpiresAt
                                ? ` · Accès jusqu’au ${formatDate(contribution.accessExpiresAt)}`
                                : null}
                            </p>
                            {references.length ? (
                              <details className="mt-2">
                                <summary className="cursor-pointer font-semibold text-cyan-700 dark:text-cyan-300">
                                  Références Stripe (test)
                                </summary>
                                <dl className="mt-2 space-y-1">
                                  {references.map(([label, value]) => (
                                    <div
                                      className="flex flex-wrap gap-1"
                                      key={label}
                                    >
                                      <dt className="font-semibold">
                                        {label} :
                                      </dt>
                                      <dd className="break-all">{value}</dd>
                                    </div>
                                  ))}
                                </dl>
                              </details>
                            ) : null}
                          </div>
                        )
                      })}
                    </div>
                  </details>
                </article>
              )
            })}
          </div>
        ) : (
          <p className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800">
            Aucun contributeur enregistré sur ce poste pour le moment.
          </p>
        )}

        {pageCount > 1 ? (
          <nav
            aria-label="Pages des contributeurs"
            className="flex items-center justify-center gap-4 text-sm"
          >
            {page > 1 ? (
              <Link
                className="font-semibold text-cyan-700 underline dark:text-cyan-300"
                href={`/soutenir/administration/contributeurs?page=${page - 1}`}
              >
                Page précédente
              </Link>
            ) : null}
            <span>
              Page {page} sur {pageCount}
            </span>
            {page < pageCount ? (
              <Link
                className="font-semibold text-cyan-700 underline dark:text-cyan-300"
                href={`/soutenir/administration/contributeurs?page=${page + 1}`}
              >
                Page suivante
              </Link>
            ) : null}
          </nav>
        ) : null}
      </div>
    </SoutenirPageShell>
  )
}
