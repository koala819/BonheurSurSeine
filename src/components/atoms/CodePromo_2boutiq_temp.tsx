'use client'

import { useEffect, useState } from 'react'

export default function BoutiqueCapsule({ endDate }: { endDate: string }) {
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    const END_DATE = new Date(endDate).getTime()
    const update = () => setTimeLeft(END_DATE - Date.now())
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [endDate])

  const isFinished = timeLeft <= 0

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)))
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24))
  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60))
  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60))

  return (
    <div
      className="rounded-2xl py-2 px-1 shadow-md flex flex-col items-center justify-center text-center
      bg-gradient-to-r from-indigo-200 to-purple-200 text-gray-900
      dark:from-indigo-800 dark:to-purple-800 dark:text-white
        border border-gray-200 dark:border-gray-600
      hover:border-sky-700    dark:hover:border-sky-600
      hover:-translate-y-[1px] "
    >
      <h2 className="text-xl font-bold mt-0 mb-2">
        <span className="text-5xl">🛍️</span> Boutique officielle éphémère
      </h2>
      {isFinished ? (
        <>
          {/* Décompte FINI */}
          <div className="text-lg font-mono bg-white/30 dark:bg-black/30 px-4 py-2 rounded-lg">
            Campagne terminée : {days}j {hours}h {minutes}m {seconds}s ⏳
          </div>
          <a
            target="_blank"
            className="font-semibold px-4 py-2 rounded-lg shadow mt-2
            text-white bg-black
            dark:bg-white dark:text-black"
          >
            La boutique reviendra peut-être prochainement
          </a>
        </>
      ) : (
        <>
          {/* Décompte animé */}
          <div className="text-lg font-mono bg-white/30 dark:bg-black/30 px-4 py-2 rounded-lg">
            ⏳ {days}j {hours}h {minutes}m {seconds}s restants
          </div>
          <p className="text-center mb-2 mx-4 sm:mx-8 md:mx-12">
            Découvre une collection exclusive de produits{' '}
            <strong>Bonheur Sur Seine</strong>, disponible pour une durée
            limitée&nbsp;!
          </p>

          <a
            href="https://bonheursurseine.myspreadshop.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
            font-semibold px-4 py-2 rounded-lg shadow
            text-white bg-pink-600 hover:bg-pink-800 transition
            dark:bg-white dark:text-pink-600 dark:hover:bg-pink-200"
          >
            <span>Accéder à la boutique</span>
            <span className="text-4xl leading-none">🏬</span>
          </a>
        </>
      )}
    </div>
  )
}
