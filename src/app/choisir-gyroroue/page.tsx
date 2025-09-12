import type { Metadata } from 'next'

import Choice from '@/src/components/atoms/Choisir_0Choice'
import Market from '@/src/components/atoms/Choisir_1Market'
import Brands from '@/src/components/atoms/Choisir_2Brands'
import Needs from '@/src/components/atoms/Choisir_3Needs'
import Compare from '@/src/components/atoms/Choisir_4Compare'

export const metadata: Metadata = {
  title:
    'Comment bien choisir sa gyroroue ? Guide, comparaisons et conseils pour bien acheter sa gyroroue',
  description:
    'Quel modèle choisir ? Marques, guide, conseils et comparatifs des meilleures gyroroues pour acheter la roue électrique idéale sans se tromper.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/choisir-gyroroue`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <Choice />
      <Market />
      <Brands />
      <Needs />
      <Compare />
    </div>
  )
}

export default Page
