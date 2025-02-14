import type { Metadata } from 'next'
import Link from 'next/link'

import Associations from '@/src/components/atoms/Associations'
import Assurance from '@/src/components/atoms/Assurance'
import CommonSense from '@/src/components/atoms/CommonSense'
import HighwayCode from '@/src/components/atoms/HighwayCode'
import Maintenance from '@/src/components/atoms/Maintenance'

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
          💙 &laquo;Le Bonheur de rouler, c&apos;est se mettre dans les
          meilleures conditions pour pouvoir en profiter !&raquo;
        </h3>
      </div>

      <p>
        <div className="pinkBlock">
          <p>
            <h3>
              Si tu veux te mettre à la roue électrique mais que tu as peur de
              te lancer, sache que je propose des{' '}
              <strong>sessions de formation</strong> théorique et pratique pour
              t&apos;accompagner et dédramatiser. 😊
            </h3>
          </p>
          <p className="mb-0">
            <h3>
              En seulement 1 heure🕐, tu auras un autre regard sur l&apos;objet.
              😎
            </h3>
          </p>

          <p>
            <h3>
              ➡️Pour <strong>prendre rendez-vous</strong> :{' '}
              <Link
                href={'mailto:bonheursurseine@gmail.com'}
                className="hover:underline"
              >
                bonheursurseine@gmail.com{' '}
              </Link>
            </h3>
          </p>
        </div>
      </p>

      <CommonSense />
      <Assurance />
      <HighwayCode />
      <Maintenance />
      <Associations />
      <div className="yellowBlock">
        <h3>
          ❤️ Et si tu croises un autre passionné,{' '}
          <strong>n’oublie pas de le saluer !</strong>
        </h3>
      </div>
    </div>
  )
}

export default Page
