// BSS-SOUTENIR — Module plateforme de soutien
import { cookies, headers } from 'next/headers'
import { notFound, redirect } from 'next/navigation'

import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'

import {
  VIDEO_ADMIN_COOKIE,
  getVideoAdminOriginForHost,
  hasVideoAdminSession,
} from '@/src/features/soutenir/server/video-admin'

type PageProps = {
  searchParams: Promise<{ demande?: string; erreur?: string }>
}

export default async function VideoAdminLoginPage({ searchParams }: PageProps) {
  const host = (await headers()).get('host')
  const origin = getVideoAdminOriginForHost(host)

  if (!origin) {
    notFound()
  }

  const token = (await cookies()).get(VIDEO_ADMIN_COOKIE)?.value

  if (await hasVideoAdminSession(token)) {
    redirect('/soutenir/contributeurs')
  }

  const status = await searchParams

  return (
    <SoutenirPageShell
      description="Un accès réservé à la gestion des vidéos et au suivi des contributeurs."
      eyebrow="Administration"
      title="Administration des contributeurs"
    >
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800">
        {status.demande === '1' ? (
          <p
            className="mb-5 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm text-cyan-900 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-100"
            role="status"
          >
            Si cette adresse est autorisée, un lien de connexion vient d’être
            demandé. Vérifie aussi les courriers indésirables.
          </p>
        ) : null}
        {status.erreur === 'lien' ? (
          <p
            className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-100"
            role="alert"
          >
            Ce lien est invalide ou expiré. Demande-en un nouveau.
          </p>
        ) : null}
        <form
          action="/soutenir/administration/demander"
          method="post"
          className="space-y-4"
        >
          <label className="block text-sm font-semibold" htmlFor="admin-email">
            Ton adresse e-mail d’administration
          </label>
          <input
            id="admin-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
            placeholder="toi@exemple.fr"
          />
          <button
            className="w-full rounded-xl bg-cyan-700 px-4 py-3 font-semibold text-white transition hover:bg-cyan-800"
            type="submit"
          >
            Recevoir mon lien d’administration
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
          Le lien reçu expire après 15 minutes. L’accès en ligne est limité à
          la préversion autorisée.
        </p>
      </div>
    </SoutenirPageShell>
  )
}
