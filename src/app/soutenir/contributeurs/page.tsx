// BSS-SOUTENIR — Module plateforme de soutien
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  LogOut,
  MessageCircle,
} from 'lucide-react'

import type { Metadata } from 'next'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { ContributorVideos } from '@/src/features/soutenir/components/ContributorVideos'
import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'

import {
  SOUTENIR_SESSION_COOKIE,
  getAuthenticatedContributorSession,
} from '@/src/features/soutenir/server/auth'
import {
  getDiscordConnection,
  isDiscordConfigured,
} from '@/src/features/soutenir/server/discord'
import {
  isDiscordRoleConfigured,
  syncDiscordRoleForContributor,
} from '@/src/features/soutenir/server/discord-role'
import {
  getActiveMonthlyStripeCustomerId,
  isStripePortalConfigured,
} from '@/src/features/soutenir/server/stripe-portal'
import { getContributorThanksProfile } from '@/src/features/soutenir/server/thanks'
import {
  VIDEO_ADMIN_COOKIE,
  getVideoAdminOriginForHost,
  hasVideoAdminSession,
} from '@/src/features/soutenir/server/video-admin'
import { getContributorVideos } from '@/src/features/soutenir/server/videos'

export const metadata: Metadata = {
  title: 'Espace contributeurs | Bonheur sur Seine',
  description: 'Espace contributeurs protégé de Bonheur sur Seine.',
}

type SoutenirContributeursPageProps = {
  searchParams: Promise<{ discord?: string; merci?: string; stripe?: string }>
}

const discordMessages: Record<string, string> = {
  annule: "L'association Discord a été annulée. Ton accès reste inchangé.",
  associe: 'Ton compte Discord est maintenant associé.',
  configuration: "Le rôle Discord n'est pas encore configuré sur ce serveur.",
  'deja-utilise':
    'Ce compte Discord est déjà associé à un autre espace contributeur.',
  dissocie: 'Ton compte Discord a été dissocié.',
  'dissociation-erreur':
    'Le rôle Discord n’a pas pu être retiré. Réessaie un peu plus tard.',
  erreur:
    "L'association Discord n'a pas abouti. Tu peux réessayer sans risque.",
  'role-actif':
    'Ton compte Discord est associé et le rôle Contributeur BSS est actif.',
  'role-attente':
    'Ton compte Discord est associé, mais le rôle Contributeur BSS attend une synchronisation.',
}

const stripeMessages: Record<string, string> = {
  'aucun-abonnement': 'Aucun abonnement mensuel actif à gérer.',
  'portail-indisponible':
    'Le portail Stripe de test est momentanément indisponible. Réessaie plus tard.',
}

export default async function SoutenirContributeursPage({
  searchParams,
}: SoutenirContributeursPageProps) {
  const cookieStore = await cookies()
  const host = (await headers()).get('host')
  const adminOrigin = getVideoAdminOriginForHost(host)
  const isAdmin = adminOrigin
    ? await hasVideoAdminSession(cookieStore.get(VIDEO_ADMIN_COOKIE)?.value)
    : false

  if (isAdmin) {
    const videos = await getContributorVideos()

    return (
      <SoutenirPageShell
        description="Retrouve les vidéos et gère leurs liens sans abonnement."
        eyebrow="Session administrateur vérifiée"
        title="Espace contributeurs"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <ContributorVideos videos={videos} />
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-6">
            <h2 className="mb-4 text-xl font-bold">Mon accès</h2>
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-indigo-950 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-100">
              <p className="flex items-center gap-2 font-bold">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                Accès administrateur
              </p>
              <p className="mt-2 text-sm">
                Accès aux vidéos sans contribution ni abonnement.
              </p>
            </div>
            <a
              className="mt-5 flex w-full items-center justify-center rounded-xl bg-cyan-700 px-4 py-3 font-semibold text-white transition hover:bg-cyan-800"
              href="/soutenir/administration/videos"
            >
              Ajouter une vidéo
            </a>
            <a
              className="mt-3 flex w-full items-center justify-center rounded-xl border border-cyan-300 px-4 py-3 font-semibold text-cyan-800 transition hover:bg-cyan-50 dark:border-cyan-700 dark:text-cyan-200 dark:hover:bg-slate-700"
              href="/soutenir/administration/contributeurs"
            >
              Voir les contributeurs
            </a>
            <p className="mt-4 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
              Cet accès d’administration est distinct des paiements et du rôle
              Discord des contributeurs.
            </p>
            <form action="/soutenir/auth/logout" method="post">
              <button
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 transition hover:border-red-300 hover:bg-red-100 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200 dark:hover:bg-red-950/60"
                type="submit"
              >
                <LogOut aria-hidden="true" className="h-4 w-4" />
                Se déconnecter
              </button>
            </form>
          </aside>
        </div>
      </SoutenirPageShell>
    )
  }

  const session = await getAuthenticatedContributorSession(
    cookieStore.get(SOUTENIR_SESSION_COOKIE)?.value,
  )

  if (!session) {
    redirect('/soutenir/connexion')
  }

  const [
    statuses,
    initialDiscordConnection,
    monthlyCustomerId,
    videos,
    thanksProfile,
  ] = await Promise.all([
    searchParams,
    getDiscordConnection(session.contributorId),
    getActiveMonthlyStripeCustomerId(session.contributorId),
    getContributorVideos(),
    getContributorThanksProfile(session.contributorId),
  ])
  const {
    discord: discordStatus,
    merci: thanksStatus,
    stripe: stripeStatus,
  } = statuses
  const discordConfigured = isDiscordConfigured() && isDiscordRoleConfigured()
  const portalConfigured = isStripePortalConfigured()
  let discordConnection = initialDiscordConnection

  if (
    initialDiscordConnection &&
    initialDiscordConnection.roleStatus !== 'granted' &&
    discordConfigured
  ) {
    await syncDiscordRoleForContributor(session.contributorId)
    discordConnection = await getDiscordConnection(session.contributorId)
  }
  const discordMessage = discordStatus
    ? discordMessages[discordStatus]
    : undefined
  const stripeMessage = stripeStatus ? stripeMessages[stripeStatus] : undefined
  const contribution = session.contribution
  const isPending = contribution?.status === 'pending'
  const isInactive =
    contribution?.status === 'cancelled' || contribution?.status === 'refunded'
  const accessLabel = isPending
    ? 'En attente du webhook Stripe'
    : isInactive
      ? contribution?.status === 'refunded'
        ? 'Contribution remboursée'
        : 'Contribution annulée'
      : contribution?.accessExpiresAt
        ? `${contribution.mode === 'monthly' ? 'Abonnement résilié — accès' : 'Actif'} jusqu'au ${new Intl.DateTimeFormat('fr-FR').format(new Date(contribution.accessExpiresAt))}`
        : contribution?.mode === 'monthly'
          ? 'Actif tant que le soutien mensuel reste actif'
          : "Actif jusqu'au 22/10/2026"

  return (
    <SoutenirPageShell
      description="Retrouve ici les vidéos partagées avec les personnes qui soutiennent le projet."
      eyebrow="Session contributeur vérifiée"
      title="Espace contributeurs"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0">
          <ContributorVideos videos={videos} />
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-6">
          <h2 className="mb-4 text-xl font-bold">Mon accès</h2>

          <div
            className={`rounded-xl border p-4 ${
              isPending
                ? 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/40'
                : isInactive
                  ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/40'
                  : 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40'
            }`}
          >
            <p
              className={`flex items-center gap-2 font-bold ${
                isPending
                  ? 'text-amber-800 dark:text-amber-200'
                  : isInactive
                    ? 'text-red-800 dark:text-red-200'
                    : 'text-emerald-800 dark:text-emerald-200'
              }`}
            >
              {isPending || isInactive ? (
                <Clock3 aria-hidden="true" className="h-5 w-5" />
              ) : (
                <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
              )}
              {isPending
                ? 'Validation en attente'
                : isInactive
                  ? 'Accès inactif'
                  : 'Accès actif'}
            </p>
            <p
              className={`mt-2 flex items-center gap-2 text-sm ${
                isPending
                  ? 'text-amber-800 dark:text-amber-200'
                  : isInactive
                    ? 'text-red-800 dark:text-red-200'
                    : 'text-emerald-800 dark:text-emerald-200'
              }`}
            >
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
              {accessLabel}
            </p>
            <p
              className={`mt-2 text-xs ${
                isPending
                  ? 'text-amber-700 dark:text-amber-300'
                  : isInactive
                    ? 'text-red-700 dark:text-red-300'
                    : 'text-emerald-700 dark:text-emerald-300'
              }`}
            >
              {isPending
                ? "Aucun accès réel n'est encore accordé."
                : isInactive
                  ? "L'accès contributeur n'est plus accordé."
                  : 'Statut vérifié depuis la base locale.'}
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {stripeMessage ? (
              <p
                className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-center text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
                role="status"
              >
                {stripeMessage}
              </p>
            ) : null}
            {discordMessage ? (
              <p
                className={`rounded-xl border p-3 text-center text-sm ${
                  discordStatus === 'associe' || discordStatus === 'dissocie'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200'
                    : 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200'
                }`}
                role="status"
              >
                {discordMessage}
              </p>
            ) : null}

            {discordConnection ? (
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-indigo-950 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-100">
                <p className="flex items-center gap-2 font-bold">
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  Discord associé
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {discordConnection.displayName}
                </p>
                <p className="mt-0.5 text-xs text-indigo-700 dark:text-indigo-300">
                  @{discordConnection.username}
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {discordConnection.roleStatus === 'granted'
                    ? 'Rôle Contributeur BSS actif sur Discord'
                    : discordConnection.roleStatus === 'not_member'
                      ? 'Rejoins le serveur Discord pour recevoir le rôle Contributeur BSS.'
                      : 'Rôle Contributeur BSS en attente de synchronisation.'}
                </p>
                <form action="/soutenir/discord/dissocier" method="post">
                  <button
                    className="mt-3 w-full rounded-lg border border-indigo-300 bg-white px-3 py-2 text-xs font-semibold text-indigo-800 transition hover:bg-indigo-100 dark:border-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-100 dark:hover:bg-indigo-900/60"
                    type="submit"
                  >
                    Dissocier ce compte
                  </button>
                </form>
              </div>
            ) : discordConfigured ? (
              <a
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-800 transition hover:border-indigo-400 hover:bg-indigo-100 dark:border-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-100 dark:hover:bg-indigo-900/50"
                href="/soutenir/discord/connexion"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Associer mon compte Discord
              </a>
            ) : (
              <button
                className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400"
                disabled
                type="button"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Configuration Discord requise
              </button>
            )}
            {monthlyCustomerId && portalConfigured ? (
              <form action="/soutenir/stripe/portail" method="post">
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                  type="submit"
                >
                  <CreditCard aria-hidden="true" className="h-4 w-4" />
                  Gérer mon abonnement
                </button>
              </form>
            ) : monthlyCustomerId ? (
              <button
                className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400"
                disabled
                type="button"
              >
                <CreditCard aria-hidden="true" className="h-4 w-4" />
                Portail Stripe à configurer
              </button>
            ) : (
              <a
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                href="/soutenir"
              >
                <CreditCard aria-hidden="true" className="h-4 w-4" />
                Soutenir à nouveau
              </a>
            )}
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
            {monthlyCustomerId
              ? 'Discord est facultatif. La gestion de l’abonnement s’ouvre sur Stripe en mode test.'
              : 'Discord est facultatif. Un soutien ponctuel ne comporte pas d’abonnement à résilier.'}
          </p>

          <details
            className="mt-5 rounded-xl border border-slate-300 p-4 dark:border-slate-600"
            open={Boolean(thanksStatus)}
          >
            <summary className="cursor-pointer font-semibold">
              Mon pseudo pour les remerciements
            </summary>
            <p className="mt-3 text-xs leading-5 text-slate-600 dark:text-slate-300">
              Facultatif : choisis le pseudo à citer dans les vidéos. Ton
              adresse e-mail et ton nom Discord ne seront pas utilisés à sa
              place. Tu peux retirer ton accord ici à tout moment.
            </p>
            {thanksStatus === 'enregistre' || thanksStatus === 'retire' ? (
              <p
                className="mt-3 text-sm text-emerald-700 dark:text-emerald-300"
                role="status"
              >
                {thanksStatus === 'enregistre'
                  ? 'Ton pseudo et ton accord ont été enregistrés.'
                  : 'Ton accord a été retiré et ton pseudo effacé.'}
              </p>
            ) : thanksStatus === 'erreur' ? (
              <p
                className="mt-3 text-sm text-red-700 dark:text-red-300"
                role="alert"
              >
                Indique un pseudo de 40 caractères maximum pour être cité.
              </p>
            ) : null}
            <form
              action="/soutenir/remerciements/enregistrer"
              className="mt-4 space-y-3"
              method="post"
            >
              <label
                className="block text-sm font-medium"
                htmlFor="thanks-pseudonym"
              >
                Pseudo à afficher
              </label>
              <input
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                defaultValue={thanksProfile.pseudonym ?? ''}
                id="thanks-pseudonym"
                maxLength={40}
                name="thanksPseudonym"
                type="text"
              />
              <label className="flex items-start gap-2 text-xs leading-5">
                <input
                  className="mt-1"
                  defaultChecked={Boolean(thanksProfile.consentAt)}
                  name="thanksConsent"
                  type="checkbox"
                />
                <span>
                  J’accepte que ce pseudo soit cité publiquement dans les vidéos
                  de Bonheur sur Seine.
                </span>
              </label>
              <button
                className="w-full rounded-lg border border-cyan-300 px-3 py-2 text-sm font-semibold text-cyan-800 dark:border-cyan-700 dark:text-cyan-200"
                type="submit"
              >
                Enregistrer mon choix
              </button>
            </form>
          </details>

          <form action="/soutenir/auth/logout" method="post">
            <button
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 transition hover:border-red-300 hover:bg-red-100 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200 dark:hover:bg-red-950/60"
              type="submit"
            >
              <LogOut aria-hidden="true" className="h-4 w-4" />
              Se déconnecter
            </button>
          </form>
        </aside>
      </div>
    </SoutenirPageShell>
  )
}
