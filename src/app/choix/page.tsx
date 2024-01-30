import type { Metadata } from 'next'

import ChooseWheel from '@/src/components/molecules/ChooseWheel'

export const metadata: Metadata = {
  title: 'Bonheur Sur Seine – Comparaisons et Conseils',
  description:
    'Découvrez le meilleur guide pour choisir votre gyroroue. Conseils, comparaisons de marques, et astuces pour trouver la roue électrique idéale.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/choix`,
  },
}

const Page = () => {
  return <ChooseWheel />
}

export default Page
