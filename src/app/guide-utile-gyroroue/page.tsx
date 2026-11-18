import type { Metadata } from 'next'

import Infographies from '@/src/components/atoms/SavoirUtile_0Infographies'
import Dico from '@/src/components/atoms/SavoirUtile_1Dico'
import Battery from '@/src/components/atoms/SavoirUtile_3Batterie'
import Pneu from '@/src/components/atoms/SavoirUtile_3Pneu'
import Suspension from '@/src/components/atoms/SavoirUtile_3Suspension'
import Navi from '@/src/components/atoms/SavoirUtile_4Navi'
import Vrac from '@/src/components/atoms/SavoirUtile_5Vrac'

export const metadata: Metadata = {
  title:
    'Tout Savoir sur la gyroroue : Fonctionnement, Guide et Infos Pratiques sur les gyroroues, monoroues électriques',
  description:
    'Comprenez le fonctionnement de votre monoroue électrique et découvrez des conseils pratiques sur les réglages, la batterie, les pneus, la suspension et l’entretien. Devenez expert et roulez en toute confiance !',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/guide-utile-gyroroue`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-2 sm:px-4 md:px-6 lg:px-8 space-y-8">
      {/*--------------TITRE---------------------------------*/}
      <h1>Aller plus loin</h1>
      <div className="space-y-1">
        <div className="mt-0 mb-0 flex flex-col md:flex-row items-center gap-x-2 gap-y-0">
          <aside className="md:w-1/2 space-y-1">
            <p className="text-left mt-0 mb-0">
              Ce <strong>guide complet</strong> sur la gyroroue contient des{' '}
              <strong>infos pratiques</strong> et des conseils{' '}
              <strong>pour bien utiliser ta roue</strong>&nbsp;: fonctionnement,
              entretien, autonomie, batterie, pneus, sécurité, suspension,
              applications pratiques et confort de conduite...
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

      {/*---------------Infographie--------------------------------*/}
      <Infographies />

      {/*--------------BLOCS---------------------------------*/}
      <Dico />
      <Battery />
      <Pneu />
      <Suspension />
      <Navi />
      <Vrac />

      {/*--------------INFOS---------------------------------*/}
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
