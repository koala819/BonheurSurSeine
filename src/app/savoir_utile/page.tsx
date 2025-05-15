import type { Metadata } from 'next'

import Maintenance from '@/src/components/atoms/SavoirUtile_1Entretien'
import Battery from '@/src/components/atoms/SavoirUtile_2Batterie'
import Dico from '@/src/components/atoms/SavoirUtile_3Dico'
import Info from '@/src/components/atoms/SavoirUtile_4Infos'
import Vrac from '@/src/components/atoms/SavoirUtile_5Vrac'

export const metadata: Metadata = {
  title: 'Pour en savoir plus sur la roue électrique - Infos pratiques',
  description:
    'Découvrez quelques trucs et astuce pour mieux comprendre la roue électrique. Roulez en toute confiance.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/practical`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <h1>Savoir utile</h1>
      <p>
        Cette page regroupe quelques <strong>informations pratiques</strong> et{' '}
        utiles concernant la roue électrique et{' '}
        <strong> son utilisation</strong>.
      </p>
      <div className="blueBlock">
        <h3>
          🎓 Qui a dit &laquo;&nbsp;un wheeler averti en vaut
          deux&nbsp;&raquo;&nbsp;?
        </h3>
      </div>{' '}
      <Maintenance />
      <Battery />
      <Dico />
      <Info />
      <Vrac />
      <div className="yellowBlock">
        <h3>
          ❤️ Enjoy, et n&apos;hésite pas à me dire ce que tu en penses... <br />
          Comme dit mon papa&nbsp;: &laquo;&nbsp;
          <i>Ce sont les bons clients qui font les bonnes maisons</i>
          &nbsp;!&nbsp;&raquo;
        </h3>
      </div>
    </div>
  )
}

export default Page
