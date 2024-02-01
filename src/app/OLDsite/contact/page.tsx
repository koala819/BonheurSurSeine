import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Contact from '@/src/components/molecules/Contact'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title: 'Contactez Bonheur Sur Seine – Expert Gyroroue à Paris',
  description:
    'Pour en savoir plus sur les gyroroues, contactez Bonheur Sur Seine à Paris pour plus d&apos;informations.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/contact`,
  },
}

export default async function Page() {
  const client = createClient()
  const contact = await client.getSingle('contact').catch(() => notFound())

  return <Contact text={contact.data.phrase} />
}
