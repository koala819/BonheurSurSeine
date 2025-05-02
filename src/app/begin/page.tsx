import type { Metadata } from 'next'
import Link from 'next/link'

import Premier_deballage from '@/src/components/atoms/Begin_1Premier_deballage'
import CommonSense from '@/src/components/atoms/Begin_2Bonsens'
import Assurance from '@/src/components/atoms/Begin_3Assurance'
import HighwayCode from '@/src/components/atoms/Begin_4HighwayCode'
import Associations from '@/src/components/atoms/Begin_5Associations'

export const metadata: Metadata = {
  title: 'Pour bien démarrer avec la roue électrique - Conseils et Sécurité',
  description:
    'Découvrez quelques conseils pour débuter avec la roue électrique en France : sécurité, assurance, entretien, et plus. Roulez en gyroroue en toute confiance.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/begin`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <h1>Pour bien démarrer</h1>
      <p>
        Cette page regroupe <strong>quelques conseils</strong> et{' '}
        <strong>rappels essentiels</strong> mais non exhaustifs concernant
        l&apos;utilisation de la roue électrique <strong>en France.</strong>
      </p>

      <div className="blueBlock">
        <h3>
          💙 &laquo; Le Bonheur de rouler, c&apos;est se mettre dans les
          meilleures conditions pour pouvoir en profiter&nbsp;!&nbsp;&raquo;
        </h3>
      </div>

      <div className="pinkBlock">
        <h4>
          Si tu veux te mettre à la roue électrique mais que tu as peur de te
          lancer, sache que je propose des{' '}
          <strong>sessions de formation</strong> théorique <u>et</u> pratique
          pour t&apos;accompagner et dédramatiser. 😊
          <br />
          En seulement 1h🕐, tu auras un autre regard sur l&apos;objet. 😎
        </h4>
        <h4>
          ➡️ Pour <strong>prendre rendez-vous</strong> :{' '}
          <Link
            href={'mailto:bonheursurseine@gmail.com'}
            className="underline text-rose-800 dark:text-black"
          >
            bonheursurseine@gmail.com{' '}
          </Link>
        </h4>
      </div>

      <Premier_deballage />
      <CommonSense />
      <Assurance />
      <HighwayCode />
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
