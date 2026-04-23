import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// import CountTimer from '../components/atoms/CounTimer'
//import FinishSection from '@/src/components/atoms/Accueil_FinishSection'
import Hero from '@/src/components/atoms/Accueil_Hero'
import Quote from '@/src/components/atoms/Accueil_Quote'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title: 'Bonheur Sur Seine - Vidéaste et Spécialiste Gyroroues',
  description:
    "Qu'est-ce qu'une gyroroue ? Comment apprendre la gyroroue ? Le monde des monoroues / roues électriques avec BonheurSurSeine, expert à Paris : tests, reviews, essais, conseils, guide d'achat, actus, infos, expertise technique et réglementaire, vidéos Youtube et dernières nouveautés pour tout savoir sur la mobilité électrique (Electric unicycle reviews, EUC comparison, real-world tests and buying guides).",
  alternates: {
    canonical: `${process.env.CLIENT_URL}`,
  },
}
export default async function Page() {
  const client = createClient()
  const accueil = await client.getSingle('accueil').catch(() => notFound())

  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 text-gray-900 dark:text-white mb-8 space-y-8">
      {/*----------------------------------------------*/}
      {/*            CONTENU PRISMIC + PHOTO           */}
      {/*----------------------------------------------*/}
      <Hero
        photo_back={accueil.data.photo_back}
        photo_front={accueil.data.photo_front}
        text={accueil.data.text}
        titre={accueil.data.titre}
      />

      {/*----------------------------------------------*/}
      {/*             BLOC MENUS                       */}
      {/*----------------------------------------------*/}
      <div className="px-4 lg:px-8 text-gray-900 dark:text-white" id="projet">
        {/* BLOC MENUS */}
        <p className="mt-0">
          Le contenu de ce site s&apos;adresse aux{' '}
          <strong>curieux, aux débutants et aux passionnés</strong>.
        </p>
        <p className="mt-2 text-left font-bold">Que souhaites-tu faire ?</p>
        <div className="mt-1 mb-3 grid mx-8 grid-cols-2 sm:grid-cols-3 gap-3 text-center">
          <Link
            href="/apprendre-gyroroue"
            className="p-2 rounded-lg font-semibold bg-white hover:bg-cyan-200 dark:bg-cyan-800 shadow dark:hover:bg-cyan-700 transition-all duration-100 hover:scale-105 flex items-center justify-center"
          >
            Apprendre
          </Link>
          <Link
            href="/choisir-gyroroue"
            className="p-2 rounded-lg font-semibold bg-white hover:bg-cyan-200 dark:bg-cyan-800 shadow dark:hover:bg-cyan-700 transition-all duration-100 hover:scale-105 flex items-center justify-center"
          >
            Choisir
          </Link>
          <Link
            href="/BonheurScore"
            className="p-2 rounded-lg font-semibold bg-white hover:bg-cyan-200 dark:bg-cyan-800 shadow dark:hover:bg-cyan-700 transition-all duration-100 hover:scale-105 flex items-center justify-center"
          >
            Voir
            <br />
            mes reviews
          </Link>
          <Link
            href="/codes-promo"
            className="p-2 rounded-lg font-semibold bg-white hover:bg-cyan-200 dark:bg-cyan-800 shadow dark:hover:bg-cyan-700 transition-all duration-100 hover:scale-105 flex items-center justify-center"
          >
            Profiter
            <br />
            (codes promo)
          </Link>

          <Link
            href="/debuter-gyroroue"
            className="p-2 rounded-lg font-semibold bg-white hover:bg-cyan-200 dark:bg-cyan-800 shadow dark:hover:bg-cyan-700 transition-all duration-100 hover:scale-105 flex items-center justify-center"
          >
            Découvrir <br />
            l&apos;essentiel
          </Link>
          <Link
            href="/guide-utile-gyroroue"
            className="p-2 rounded-lg font-semibold bg-white hover:bg-cyan-200 dark:bg-cyan-800 shadow dark:hover:bg-cyan-700 transition-all duration-100 hover:scale-105 flex items-center justify-center"
          >
            En apprendre <br />
            plus
          </Link>
        </div>
      </div>

      {/*----------------------------------------------*/}
      {/*            DICO                              */}
      {/*----------------------------------------------*/}
      <section
        className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 text-gray-900 dark:text-white"
        id="projet"
      >
        {/*<FinishSection text={accueil.data.fin} />*/}
        <p className="mt-3">
          <strong>Un terme trop technique&nbsp;?</strong> <br />
          ➡️ Consulte{' '}
          <Link
            href="/guide-utile-gyroroue#dico"
            className="link-style font-bold hover:text-cyan-700 dark:hover:text-cyan-200"
          >
            Le P&apos;tit Dico du Bonheur
          </Link>
          .
        </p>
      </section>

      <Quote />

      {/*----------------------------------------------*/}
      {/*            English content                   */}
      {/*----------------------------------------------*/}
      <section lang="English">
        <div className="bg-white dark:bg-cyan-900 p-6 rounded-lg shadow-md text-center max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl">
          {/* Title */}
          <h2 className="text-center text-medium md:text-lg lg:text-xl font-bold leading-relaxed">
            <strong>Electric Unicycle Reviews</strong> - EUC Tests and
            Comparisons
          </h2>
          {/* Google Translate Button */}
          <a
            href={`https://www-bonheursurseine-com.translate.goog/?_x_tr_sl=fr&_x_tr_tl=en&_x_tr_hl=fr&_x_tr_pto=wapp&_x_tr_hist=true`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-0 text-sm font-medium text-black bg-cyan-300  hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300 px-4 py-2 rounded-lg transition-colors"
          >
            🇬🇧 Read the English Version
          </a>
          <p className="text-center text-xs mt-0 opacity-70">
            Automatic translation powered by Google Translate.
          </p>

          <p className="text-left mt-4">
            Bonheur Sur Seine is a French independent YouTuber focused on{' '}
            <strong>EUC honest reviews</strong>,{' '}
            <strong>real-world tests</strong>, and{' '}
            <strong>buying guides</strong>. The website is regularly updated
            with the newest EUC models and all tests are performed in real
            riding conditions.
          </p>
        </div>
      </section>

      {/*----------------------------------------------*/}
      {/*               bloc de fin de page            */}
      {/*----------------------------------------------*/}
      <div className="bg-white dark:bg-cyan-800 p-6 rounded-lg shadow-md text-center max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl">
        <h4 className="text-center font-medium mb-0">
          Ce site est entièrement gratuit.
        </h4>
        <p className="mt-2 text-xs sm:text-small">
          Ce site web est dédié à la{' '}
          <strong className="text-cyan-700 dark:text-cyan-200">
            roue électrique
          </strong>
          , aussi appelée{' '}
          <strong className="text-cyan-700 dark:text-cyan-200">
            gyroroue, monoroue
          </strong>
          , ou{' '}
          <strong className="text-cyan-700 dark:text-cyan-200">
            monocycle électrique
          </strong>
          . En anglais, elle est souvent désignée par l&apos;acronyme EUC, qui
          signifie <i>Electric Unicycle</i>.
        </p>
        <p className="mt-2 text-xs sm:text-small">
          Il ne contient{' '}
          <strong className="text-cyan-700 dark:text-cyan-200">
            aucune publicité
          </strong>{' '}
          et ne collecte{' '}
          <strong className="text-cyan-700 dark:text-cyan-200">
            aucune donnée personnelle
          </strong>{' '}
          afin de garantir une navigation fluide et sans distraction. Son
          contenu, rédigé manuellement au fil des années, a été conçu avec soin.
          Il s&apos;adresse à un large public, et est{' '}
          <strong className="text-cyan-700 dark:text-cyan-200">
            pensé d&apos;intérêt général
          </strong>
          , pour partager mon travail au plus grand nombre de manière simple et
          lisible.
        </p>
      </div>
    </section>
  )
}
