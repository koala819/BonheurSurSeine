// BSS-SOUTENIR — Module plateforme de soutien
import { cookies, headers } from 'next/headers'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

import { SoutenirPageShell } from '@/src/features/soutenir/components/SoutenirPageShell'

import {
  VIDEO_ADMIN_COOKIE,
  getVideoAdminOriginForHost,
  hasVideoAdminSession,
} from '@/src/features/soutenir/server/video-admin'
import { getContributorVideos } from '@/src/features/soutenir/server/videos'

type PageProps = {
  searchParams: Promise<{ ajoute?: string; erreur?: string }>
}

export default async function VideoAdminPage({ searchParams }: PageProps) {
  const host = (await headers()).get('host')
  const origin = getVideoAdminOriginForHost(host)

  if (!origin) {
    notFound()
  }

  const token = (await cookies()).get(VIDEO_ADMIN_COOKIE)?.value

  if (!(await hasVideoAdminSession(token))) {
    redirect('/soutenir/administration/connexion')
  }

  const [status, videos] = await Promise.all([
    searchParams,
    getContributorVideos(),
  ])

  return (
    <SoutenirPageShell
      description="Ajoute ici les liens des vidéos destinées à l’espace contributeur."
      eyebrow="Administration"
      title="Gérer les vidéos"
    >
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-6">
          <h2 className="mb-5 text-xl font-bold">Ajouter une vidéo</h2>
          {status.ajoute === '1' ? (
            <p
              className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100"
              role="status"
            >
              La vidéo a été ajoutée à l’espace contributeur.
            </p>
          ) : null}
          {status.erreur === '1' ? (
            <p
              className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-100"
              role="alert"
            >
              Ajout impossible. Vérifie le titre, le lien YouTube et l’absence
              de doublon.
            </p>
          ) : null}
          <form
            action="/soutenir/administration/videos/ajouter"
            method="post"
            className="space-y-4"
          >
            <div>
              <label
                className="mb-2 block text-sm font-semibold"
                htmlFor="video-title"
              >
                Titre de la vidéo
              </label>
              <input
                id="video-title"
                name="title"
                type="text"
                maxLength={120}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-semibold"
                htmlFor="video-url"
              >
                Lien YouTube
              </label>
              <input
                id="video-url"
                name="url"
                type="url"
                inputMode="url"
                placeholder="https://youtu.be/…"
                maxLength={500}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label
                className="mb-2 block text-sm font-semibold"
                htmlFor="video-description"
              >
                Description <span className="font-normal">(facultative)</span>
              </label>
              <textarea
                id="video-description"
                name="description"
                rows={3}
                maxLength={240}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <button
              className="w-full rounded-xl bg-cyan-700 px-4 py-3 font-semibold text-white transition hover:bg-cyan-800"
              type="submit"
            >
              Ajouter la vidéo
            </button>
          </form>
          <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
            Une vidéo non répertoriée reste accessible à toute personne qui
            possède son lien.
          </p>
        </section>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-6">
          <h2 className="mb-4 text-xl font-bold">
            Vidéos en ligne sur cet espace
          </h2>
          {videos.length ? (
            <ol className="space-y-4">
              {videos.map((video) => (
                <li
                  className="border-b border-slate-200 pb-4 last:border-0 last:pb-0 dark:border-slate-700"
                  key={video.id}
                >
                  <p className="font-semibold">{video.title}</p>
                  <a
                    className="mt-1 block break-all text-sm text-cyan-700 underline dark:text-cyan-300"
                    href={video.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Voir sur YouTube
                  </a>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Aucune vidéo ajoutée pour le moment.
            </p>
          )}
          <Link
            className="mt-6 block text-sm font-semibold text-cyan-700 underline dark:text-cyan-300"
            href="/soutenir/contributeurs"
          >
            Voir l’espace contributeur
          </Link>
          <Link
            className="mt-3 block text-sm font-semibold text-cyan-700 underline dark:text-cyan-300"
            href="/soutenir/administration/contributeurs"
          >
            Voir les contributeurs
          </Link>
          <form action="/soutenir/administration/deconnexion" method="post">
            <button
              className="mt-5 text-sm font-semibold text-red-700 underline dark:text-red-300"
              type="submit"
            >
              Se déconnecter de l’administration
            </button>
          </form>
        </aside>
      </div>
    </SoutenirPageShell>
  )
}
