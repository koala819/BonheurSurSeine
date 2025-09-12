import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Contact from '@/src/components/atoms/Merci'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title: 'Bonheur Sur Seine – Vidéaste et Spécialiste Gyroroue',
  description:
    'Pour en savoir plus sur les gyroroues / monoroues / roues électriques / monocycles électriques, soutenez Bonheur Sur Seine.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/merci`,
  },
}

export default async function Page() {
  const client = createClient()
  // const contact = await client.getSingle('contact').catch(() => notFound())
  const contactFriends = await client
    .getByType('amis_dans_contact')
    .catch(() => notFound())
  const sortedFriends = contactFriends.results.sort(
    (a, b) => a.data.rank! - b.data.rank!,
  )

  return (
    <Contact
      // text={contact.data.phrase}
      friends={sortedFriends}
    />
  )
}
