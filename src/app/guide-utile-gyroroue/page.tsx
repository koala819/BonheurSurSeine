import type { Metadata } from 'next'
//import Info from '@/src/components/atoms/SavoirUtile_6Infos'
import Image from 'next/image'

import Dico from '@/src/components/atoms/SavoirUtile_1Dico'
import Maintenance from '@/src/components/atoms/SavoirUtile_2Entretien'
import Battery from '@/src/components/atoms/SavoirUtile_3Batterie'
import Pneu from '@/src/components/atoms/SavoirUtile_3Pneu'
import Suspension from '@/src/components/atoms/SavoirUtile_3Suspension'
import Navi from '@/src/components/atoms/SavoirUtile_4Navi'
import Vrac from '@/src/components/atoms/SavoirUtile_5Vrac'

import EUC_idées_clés from '@/public/4.guide/BSS - 3 idées clés sur la roue.png'

export const metadata: Metadata = {
  title:
    'Tout Savoir sur la gyroroue : Fonctionnement, Guide et Infos Pratiques sur les gyroroues / monoroues / roues électriques',
  description:
    'Fabricants, entretien, batteries, pneus, conseils, guide pratique pour aller plus loin, trucs et astuce pour mieux comprendre la roue électrique. Devenez expert et roulez en toute confiance !',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/guide-utile-gyroroue`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-2 sm:px-4 md:px-6 lg:px-8 space-y-8">
      <h1>Guide pratique</h1>
      <div className="space-y-1">
        <div className="mt-0 mb-0 flex flex-col md:flex-row items-center gap-x-2 gap-y-0">
          <aside className="md:w-1/2 space-y-1">
            <p className="text-left mt-0 mb-0">
              Ce <strong>guide complet</strong> sur la gyroroue contient des{' '}
              <strong>infos pratiques</strong> et des conseils{' '}
              <strong>pour bien utiliser ta roue</strong>&nbsp;: fonctionnement,
              entretien, autonomie, batterie, sécurité, applications pratiques
              et confort de conduite...
            </p>
          </aside>
          <aside className="md:w-1/2 blueBlock mt-0 mb-0">
            <h4 className="mt-0 mb-0">
              🎓 Qui a dit &laquo;&nbsp;un wheeler averti en vaut
              deux&nbsp;&raquo;&nbsp;?
            </h4>
          </aside>
        </div>
      </div>
      <div
        className="mt-0 mb-6 flex justify-center
       rounded-lg
      border border-gray-200 dark:border-gray-600
      shadow-md hover:shadow-lg transition-shadow duration-300
     shadow-gray-400 hover:shadow-gray-400
     dark:shadow-neutral-900 dark:hover:shadow-neutral-950
         "
      >
        <Image
          src={EUC_idées_clés}
          alt="3 idées clés sur la gyroroue"
          className="rounded-lg"
        />
      </div>
      <Dico />
      <Maintenance />
      <Battery />
      <Pneu />
      <Suspension />
      <Navi />
      <Vrac />
      {/*<Info />*/}
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
