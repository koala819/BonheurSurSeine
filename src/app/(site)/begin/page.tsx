import type { Metadata } from 'next'

import Associations from '@/src/components/atoms/Associations'
import Assurance from '@/src/components/atoms/Assurance'
import CommonSense from '@/src/components/atoms/CommonSense'
import HighwayCode from '@/src/components/atoms/HighwayCode'
import Maintenance from '@/src/components/atoms/Maintenance'

export const metadata: Metadata = {
  title:
    'Pour bien démarrer avec votre roue électrique en France - Conseils et Sécurité',
  description:
    'Découvrez des conseils pour débuter avec la roue électrique en France : sécurité, assurance, entretien, et plus. Roulez en toute confiance.',
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
        l’utilisation de la roue électrique <strong>en France.</strong>
      </p>

      <div className="blueBlock">
        <h3>
          💙 &quot;Le Bonheur de rouler, c’est se mettre dans les meilleurs
          conditions pour pouvoir en profiter !&quot;
        </h3>
      </div>

      <CommonSense />
      <Assurance />
      <HighwayCode />
      <Maintenance />
      <Associations />
      <div className="blueBlock">
        <h3>
          ❤️ Et si tu croises un autre passionné,{' '}
          <strong>n’oublie pas de le saluer !</strong>
        </h3>
      </div>
    </div>
  )
}

export default Page
