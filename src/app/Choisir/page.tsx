import type { Metadata } from 'next'

import ChooseWheel from '@/src/components/molecules/Choisir'

export const metadata: Metadata = {
  title:
    'Bonheur Sur Seine - Comment choisir sa gyroroue ? Comparaisons et Conseils',
  description:
    'Guide pour choisir sa gyroroue : conseils, comparaisons, et astuces pour acheter la roue électrique idéale.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/choix`,
  },
}

const Page = () => {
  return <ChooseWheel />
}

export default Page
