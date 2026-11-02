import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Contact from '@/src/components/atoms/Merci_1'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title: 'Soutenir Bonheur Sur Seine',
  description:
    'Les tests et vidéos de Bonheur sur Seine sont gratuits et accessibles à toutes et à tous. Découvrez comment soutenir ce travail indépendant sur les gyroroues, monoroues, roues électriques.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/mille-merci`,
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
