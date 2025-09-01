import type { Metadata } from 'next'

import ChooseWheel from '@/src/components/molecules/Choisir'

export const metadata: Metadata = {
  title:
    'Comment choisir sa gyroroue ? Guide, comparaisons et conseils pour bien acheter sa gyroroue',
  description:
    'Quelles sont les meilleures modèles ? Marques, guide, conseils, comparatifs pour acheter la roue électrique idéale.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/Choisir`,
  },
}

const Page = () => {
  return <ChooseWheel />
}

export default Page
