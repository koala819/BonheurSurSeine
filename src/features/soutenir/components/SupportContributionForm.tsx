'use client'

// BSS-SOUTENIR — Module plateforme de soutien
import { CalendarHeart, HandHeart, Heart } from 'lucide-react'
import { useState } from 'react'

import { useRouter } from 'next/navigation'

type ContributionMode = 'once' | 'monthly'
type ContributionAmount = '5' | '10' | '20' | 'custom'

const amounts: Array<{ label: string; value: ContributionAmount }> = [
  { label: '5 €', value: '5' },
  { label: '10 €', value: '10' },
  { label: '20 €', value: '20' },
  { label: 'Montant libre', value: 'custom' },
]

export function SupportContributionForm() {
  const router = useRouter()
  const [mode, setMode] = useState<ContributionMode>('once')
  const [amount, setAmount] = useState<ContributionAmount>('10')
  const [customAmount, setCustomAmount] = useState('')

  const customAmountIsValid = Number(customAmount) >= 1
  const canContinue = amount !== 'custom' || customAmountIsValid

  const selectedAmount =
    amount === 'custom' && customAmountIsValid
      ? `${customAmount} €`
      : `${amount} €`

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (canContinue) {
      router.push('/soutenir/merci')
    }
  }

  return (
    <form
      className="mx-auto w-full min-w-0 max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-800 sm:p-6 lg:p-8"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend className="mb-4 text-base font-bold text-slate-900 dark:text-white">
          Choisis ton type de soutien
        </legend>

        <div className="grid gap-3 md:grid-cols-2">
          <label
            className={`cursor-pointer rounded-xl border p-4 transition sm:p-5 ${
              mode === 'once'
                ? 'border-cyan-600 bg-cyan-50 ring-2 ring-cyan-600/15 dark:border-cyan-400 dark:bg-cyan-950/40'
                : 'border-slate-200 bg-slate-50 hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-cyan-700'
            }`}
          >
            <input
              checked={mode === 'once'}
              className="sr-only"
              name="contribution-mode"
              onChange={() => setMode('once')}
              type="radio"
              value="once"
            />
            <span className="flex items-start gap-3">
              <span className="rounded-lg bg-cyan-100 p-2 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                <HandHeart aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-slate-950 dark:text-white">
                  Contribution ponctuelle
                </span>
                <span className="mt-1 block text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Donne accès à l&apos;espace contributeur pendant 30 jours.
                </span>
              </span>
            </span>
          </label>

          <label
            className={`cursor-pointer rounded-xl border p-4 transition sm:p-5 ${
              mode === 'monthly'
                ? 'border-cyan-600 bg-cyan-50 ring-2 ring-cyan-600/15 dark:border-cyan-400 dark:bg-cyan-950/40'
                : 'border-slate-200 bg-slate-50 hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:border-cyan-700'
            }`}
          >
            <input
              checked={mode === 'monthly'}
              className="sr-only"
              name="contribution-mode"
              onChange={() => setMode('monthly')}
              type="radio"
              value="monthly"
            />
            <span className="flex items-start gap-3">
              <span className="rounded-lg bg-cyan-100 p-2 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                <CalendarHeart aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-slate-950 dark:text-white">
                  Contribution mensuelle
                </span>
                <span className="mt-1 block text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Accès tant que le soutien mensuel reste actif.
                </span>
              </span>
            </span>
          </label>
        </div>
      </fieldset>

      <fieldset className="mt-7">
        <legend className="mb-4 text-base font-bold text-slate-900 dark:text-white">
          Choisis un montant
        </legend>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {amounts.map((option) => (
            <label
              className={`flex min-h-14 cursor-pointer items-center justify-center rounded-xl border px-3 py-3 text-center font-semibold transition ${
                amount === option.value
                  ? 'border-cyan-600 bg-cyan-600 text-white shadow-md shadow-cyan-700/15 dark:border-cyan-400 dark:bg-cyan-500 dark:text-slate-950'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
              }`}
              key={option.value}
            >
              <input
                checked={amount === option.value}
                className="sr-only"
                name="contribution-amount"
                onChange={() => setAmount(option.value)}
                type="radio"
                value={option.value}
              />
              <span className="text-center text-sm sm:text-base">
                {option.label}
              </span>
            </label>
          ))}
        </div>

        {amount === 'custom' ? (
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Montant libre
            </span>
            <span className="relative block">
              <input
                autoFocus
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                inputMode="decimal"
                min="1"
                onChange={(event) => setCustomAmount(event.target.value)}
                placeholder="15"
                required
                step="1"
                type="number"
                value={customAmount}
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-semibold text-slate-500 dark:text-slate-300">
                €
              </span>
            </span>
          </label>
        ) : null}
      </fieldset>

      <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
        <p className="mb-3 text-center text-sm text-slate-500 dark:text-slate-400">
          {mode === 'once' ? 'Soutien ponctuel' : 'Soutien mensuel'} ·{' '}
          {selectedAmount}
          {mode === 'monthly' ? ' par mois' : ''}
        </p>
        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
          disabled={!canContinue}
          type="submit"
        >
          <Heart aria-hidden="true" className="h-5 w-5" />
          Contribuer
        </button>
        <p className="mt-3 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
          Démonstration uniquement : aucun paiement ne sera effectué.
        </p>
      </div>
    </form>
  )
}
