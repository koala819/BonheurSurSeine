// BSS-SOUTENIR — Module plateforme de soutien
import type { ReactNode } from 'react'

type SoutenirPageShellProps = {
  children: ReactNode
  description?: string
  eyebrow?: string
  title: string
}

export function SoutenirPageShell({
  children,
  description,
  eyebrow = 'Bonheur sur Seine',
  title,
}: SoutenirPageShellProps) {
  return (
    <section className="relative isolate w-full min-w-0 max-w-full overflow-hidden rounded-lg bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-700/20"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-800/20"
      />

      <div className="relative mx-auto w-full min-w-0 max-w-5xl px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <header className="mx-auto min-w-0 max-w-3xl text-center">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
            {eyebrow}
          </p>
          <h1 className="break-words whitespace-normal text-balance text-center text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              {description}
            </p>
          ) : null}
        </header>

        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  )
}
