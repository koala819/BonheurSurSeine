import type { Metadata } from 'next'

import Maintenance from '@/src/components/atoms/SavoirUtile_1Entretien'
import Dico from '@/src/components/atoms/SavoirUtile_2Dico'
import Navi from '@/src/components/atoms/SavoirUtile_3Navi'
import Battery from '@/src/components/atoms/SavoirUtile_4Batterie'
import Vrac from '@/src/components/atoms/SavoirUtile_5Vrac'
import Info from '@/src/components/atoms/SavoirUtile_6Infos'

export const metadata: Metadata = {
  title:
    'Bonheur Sur Seine – Savoir Utile : Fonctionnement, Guide et Infos Pratiques sur les gyroroues, monoroues, roues électriques',
  description:
    'Fabricants, entretien, batteries, conseils, trucs et astuce pour mieux comprendre la roue électrique. Devenez expert et roulez en toute confiance !',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/practical`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <h1>Savoir utile</h1>
      <p>
        Ce guide complet sur la gyroroue contient des{' '}
        <strong>infos pratiques</strong> et des conseils{' '}
        <strong>pour bien utiliser ta roue</strong>&nbsp;: fonctionnement,
        entretien, autonomie, batterie, sécurité, applications pratiques et
        confort de conduite...
      </p>
      <div className="blueBlock">
        <h3>
          🎓 Qui a dit &laquo;&nbsp;un wheeler averti en vaut
          deux&nbsp;&raquo;&nbsp;?
        </h3>
      </div>{' '}
      <Maintenance />
      <Dico />
      <Navi />
      <Battery />
      <Vrac />
      <Info />
      <div className="yellowBlock">
        <h3>
          ❤️ Enjoy, et n&apos;hésite pas à me dire ce que tu en penses... <br />
          Cela m&apos;encourage énormément&nbsp;!
          <br />
          Et comme dit mon papa&nbsp;: &laquo;&nbsp;
          <i>Ce sont les bons clients qui font les bonnes maisons</i>
          &nbsp;!&nbsp;&raquo;
        </h3>
      </div>
    </div>
  )
}

export default Page
