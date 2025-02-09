import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BonheurScore } from '@/src/components/atoms/BonheurScore'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title: 'Bonheur Score – Avis et Notes sur les roues électriques du marché"',
  description:
    'Découvrez mes évaluations détaillées avec mon BonheurScore : avis, notes, photos et liens vers mes vidéos YouTube pour vous aider.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/BonheurScore`,
  },
}

export default async function Page() {
  const client = createClient()
  try {
    const gyroroues = await client.getByType('gyroroue', {
      orderings: {
        field: 'my.gyroroue.date',
        direction: 'desc',
      },
    })
    return <BonheurScore gyroroues={gyroroues.results} />
  } catch (error) {
    notFound()
  }
}
