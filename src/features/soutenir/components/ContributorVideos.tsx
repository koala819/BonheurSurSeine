// BSS-SOUTENIR — Module plateforme de soutien
import { Play } from 'lucide-react'

import type { ContributorVideo } from '@/src/features/soutenir/server/videos'

export function ContributorVideos({ videos }: { videos: ContributorVideo[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="rounded-lg bg-cyan-100 p-2 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200">
          <Play aria-hidden="true" className="h-5 w-5" />
        </span>
        <div>
          <h2 className="mb-0 text-xl font-bold sm:text-2xl">Vidéos</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Des vidéos YouTube non répertoriées, partagées ici avec les
            contributeurs.
          </p>
        </div>
      </div>

      {videos.length ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {videos.map((video) => (
            <article
              className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/60"
              key={video.id}
            >
              <div className="flex aspect-video items-center justify-center border-b border-dashed border-slate-300 bg-gradient-to-br from-slate-100 to-cyan-50 dark:border-slate-600 dark:from-slate-900 dark:to-cyan-950/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-cyan-700 shadow-md dark:bg-slate-800 dark:text-cyan-300">
                  <Play aria-hidden="true" className="ml-0.5 h-5 w-5" />
                </span>
              </div>
              <div className="p-4">
                <h3 className="mb-0 text-lg font-bold leading-snug text-slate-900 dark:text-white">
                  {video.title}
                </h3>
                {video.description ? (
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {video.description}
                  </p>
                ) : null}
                <a
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cyan-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-800"
                  href={video.url}
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Play aria-hidden="true" className="h-4 w-4" />
                  Regarder sur YouTube
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-600 dark:border-slate-600 dark:bg-slate-900/60 dark:text-slate-300">
          Les premières vidéos seront disponibles ici prochainement.
        </p>
      )}
    </section>
  )
}
