import type { Metadata } from 'next'

import Choice from '@/src/components/atoms/Choisir_0Choice'
import Market from '@/src/components/atoms/Choisir_1Market'
import Marques from '@/src/components/atoms/Choisir_2Marques'
import Needs from '@/src/components/atoms/Choisir_3Needs0'
import Compare from '@/src/components/atoms/Choisir_4Compare'

export const metadata: Metadata = {
  title: 'Gyroroue – Choisir sa monoroue électrique',
  description:
    'Quel modèle choisir ? Découvrez ce guide d’achat pour faire le bon choix. Comparez les usages, les marques et les critères importants pour choisir une gyroroue adaptée à votre budget et à votre façon de rouler. Découvrez les modèles de gyroroues, monoroues et roues électriques, leurs caractéristiques, leurs avantages et inconvénients, ainsi que des conseils pour faire le bon choix.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/choisir-gyroroue`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-2 sm:px-4 md:px-6 lg:px-8 space-y-8">
      <Choice />
      <Market />
      <Marques />
      <Needs />
      <Compare />
    </div>
  )
}

export default Page
