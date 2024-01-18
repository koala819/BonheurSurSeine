import type { Metadata } from 'next'

import Contact from '@/src/components/molecules/Contact'

export const metadata: Metadata = {
  title: 'Contactez Bonheur Sur Seine – Expert Gyroroue à Paris',
  description:
    'Pour en savoir plus sur les gyroroues, contactez Bonheur Sur Seine à Paris pour plus d&apos;informations.',
}

export default function Page() {
  return <Contact />
}
