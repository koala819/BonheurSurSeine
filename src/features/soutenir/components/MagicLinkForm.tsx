'use client'

// BSS-SOUTENIR — Module plateforme de soutien
import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export function MagicLinkForm() {
  const [email, setEmail] = useState('')
  const [isSimulated, setIsSimulated] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSimulated(true)
  }

  return (
    <form
      className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-8"
      onSubmit={handleSubmit}
    >
      <label className="block" htmlFor="supporter-email">
        <span className="mb-2 block font-semibold text-slate-900 dark:text-white">
          Ton adresse e-mail
        </span>
        <span className="relative block">
          <Mail
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          />
          <input
            autoComplete="email"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
            id="supporter-email"
            onChange={(event) => {
              setEmail(event.target.value)
              setIsSimulated(false)
            }}
            placeholder="toi@exemple.fr"
            required
            type="email"
            value={email}
          />
        </span>
      </label>

      <button
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
        type="submit"
      >
        <Send aria-hidden="true" className="h-5 w-5" />
        Recevoir mon lien de connexion
      </button>

      <p className="mt-3 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
        Prototype : aucun e-mail n&apos;est réellement envoyé.
      </p>

      {isSimulated ? (
        <div
          aria-live="polite"
          className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-100"
          role="status"
        >
          Simulation réussie : à terme, un lien de connexion serait envoyé à{' '}
          <strong>{email}</strong>.
        </div>
      ) : null}
    </form>
  )
}
