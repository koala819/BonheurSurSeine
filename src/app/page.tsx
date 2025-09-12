import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// import CountTimer from '../components/atoms/CounTimer'
import FinishSection from '@/src/components/atoms/Accueil_FinishSection'
import Hero from '@/src/components/atoms/Accueil_Hero'
import Quote from '@/src/components/atoms/Accueil_Quote'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title: 'Bonheur Sur Seine - Vidéaste et Spécialiste Gyroroues',
  description:
    "Qu'est-ce qu'une gyroroue ? Comment apprendre la gyroroue ? Le monde des monoroues / roues électriques avec BonheurSurSeine, expert à Paris : tests, essais, reviews, conseils, guide d'achat, actus, infos, expertise technique et réglementaire, vidéos Youtube et dernières nouveautés pour tout savoir sur la mobilité électrique.",
  alternates: {
    canonical: `${process.env.CLIENT_URL}`,
  },
}
export default async function Page() {
  const client = createClient()
  const accueil = await client.getSingle('accueil').catch(() => notFound())

  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 text-gray-900 dark:text-white mb-8 space-y-8">
      <Hero
        photo_back={accueil.data.photo_back}
        photo_front={accueil.data.photo_front}
        text={accueil.data.text}
        titre={accueil.data.titre}
      />
      <div className="bg-white dark:bg-cyan-800 p-6 rounded-lg shadow-md text-center max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl">
        <p className="text-center text-emerald-600 dark:text-emerald-400 md:text-lg lg:text-xl font-medium leading-relaxed">
          Ce site est entièrement gratuit.
        </p>
        <p className="text-justify">
          Il ne contient <strong>aucune publicité</strong> et ne collecte{' '}
          <strong>aucune donnée personnelle</strong> afin de garantir une
          navigation fluide et sans distraction. Son contenu, rédigé
          manuellement au fil des années, a été conçu avec soin. Il
          s&apos;adresse à un large public, et est pensé{' '}
          <strong>d&apos;intérêt général</strong>, pour partager mon travail au
          plus grand nombre de manière <strong>simple et lisible</strong>.
        </p>
      </div>
      <Quote />
      <FinishSection text={accueil.data.fin} />
    </section>
  )
}
