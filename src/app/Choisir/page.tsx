import type { Metadata } from 'next'

import ChooseWheel from '@/src/components/molecules/Choisir'

export const metadata: Metadata = {
  title:
    'Bonheur Sur Seine - Comment choisir sa gyroroue ? Comparaisons et Conseils',
  description:
    'Quelles sont les meilleures roues ? Marques, guide, conseils, comparatifs pour acheter la roue électrique idéale.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/Choisir`,
  },
}

const Page = () => {
  return <ChooseWheel />
}

export default Page
