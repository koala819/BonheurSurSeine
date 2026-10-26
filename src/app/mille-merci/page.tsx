import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Contact from '@/src/components/atoms/Merci_1'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title: 'Soutenir Bonheur Sur Seine – Vidéaste et Spécialiste Gyroroue',
  description:
    'Le contenu de Bonheur sur Seine est accessible gratuitement à toutes et à tous. Si tu souhaites soutenir ce travail indépendant sur sur les gyroroues, monoroues, roues électriques, tu peux contribuer simplement, à ton rythme.',
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
