import type { Metadata } from 'next'

import CountTimer from '@/src/components/atoms/CounTimer'

export const metadata: Metadata = {
  title: 'Bonheur Sur Seine – Spécialiste Gyroroue à Paris',
  description:
    'Découvrez le monde des gyroroues avec Bonheur Sur Seine, votre expert à Paris. Tests, conseils, et les dernières nouveautés.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}`,
  },
}

export default async function Page() {
  return <CountTimer />
}
