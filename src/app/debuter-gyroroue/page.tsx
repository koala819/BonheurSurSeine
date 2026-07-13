import type { Metadata } from 'next'
import Image from 'next/image'

//import Link from 'next/link'
import Premier_deballage from '@/src/components/atoms/Débuter_1Premier_deballage'
import CommonSense from '@/src/components/atoms/Débuter_2Bonsens'
import Assurance from '@/src/components/atoms/Débuter_3Assurance'
import HighwayCode from '@/src/components/atoms/Débuter_4HighwayCode'
import Maintenance from '@/src/components/atoms/Débuter_5Entretien'
import Associations from '@/src/components/atoms/Débuter_6Associations'

import HeroPhoto from '@/public/3.debuter/PhotoBSS - Bien Démarrer.jpg'

export const metadata: Metadata = {
  title:
    'Les Fondamentaux à connaître pour bien débuter la gyroroue / monoroue / roue électrique',
  description:
    "Conseils indispensables, la sécurité, les assurances, le code de la route, les informations essentielles avant d'aller rouler et plus encore. Débuter et progressez en toute confiance.",
  alternates: {
    canonical: `${process.env.CLIENT_URL}/debuter-gyroroue`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <section className="">
        {/* Titre */}
        <h1 className="">
          L&apos;essentiel <br />
          pour bien démarrer
        </h1>
        {/* Image avec citation */}

        {/* Contenu en 2 colonnes */}

        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_minmax(400px,1fr)] gap-2 items-center">
          {/* Colonne de gauche */}
          <div className="space-y-2 text-gray-800 dark:text-gray-200 leading-relaxed">
            <p className="">
              Cette page regroupe de manière synthétique les{' '}
              <strong>bases indispensables </strong>pour bien débuter en roue
              électrique, et t&apos;offrir{' '}
              <strong>tout ce qu&apos;il faut savoir</strong> pour commencer la
              gyroroue sereinement <strong>en France</strong>.
            </p>

            <div>
              <div className="blueBlock p-6 rounded-2xl shadow text-center space-y-1">
                <p>
                  ➡️{' '}
                  <strong className="text-blue-800 dark:text-blue-300">
                    6 thèmes{' '}
                    <i>
                      <u>incontournables</u>
                    </i>
                  </strong>{' '}
                  à lire attentivement pour bien débuter et éviter les erreurs
                  des débutants.
                </p>
              </div>
            </div>
          </div>

          {/* Colonne de droite */}

          <div className="relative max-w-4xl mx-auto order-first md:order-last ">
            <Image
              src={HeroPhoto}
              alt="Personne avec une roue"
              width={900}
              height={500}
              className="w-full max-w-lg mx-auto rounded-2xl object-cover object-center shadow-lg"
              priority
              placeholder="blur"
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-cyan-800/80 text-white px-2 py-2 rounded-xl shadow-md max-w-lg text-center min-w-max text-xs sm:text-sm font-bold">
              🩵 &laquo;&nbsp;Le Bonheur de rouler… c&apos;est se mettre
              <br />
              dans les meilleures conditions pour en
              profiter&nbsp;!&nbsp;&raquo;
            </div>
          </div>
        </div>
      </section>

      <Premier_deballage />
      <CommonSense />
      <Assurance />
      <HighwayCode />
      <Maintenance />
      <Associations />
      <div className="yellowBlock">
        <h3>
          🥰 Et si tu croises un autre passionné,{' '}
          <strong>n&apos;oublie pas de le saluer&nbsp;!</strong>
        </h3>
      </div>
    </div>
  )
}

export default Page
