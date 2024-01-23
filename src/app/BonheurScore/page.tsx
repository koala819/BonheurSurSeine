import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BonheurScore } from '@/src/components/atoms/BonheurScore'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title: 'Bonheur Score – Avis et Notes sur les Gyroroues"',
  description:
    'Découvrez des évaluations détaillées de gyroroues sur Bonheur Score. Avis, notes, photos et liens vers des vidéos YouTube pour vous aider à choisir la meilleure gyroroue pour vos besoins.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/BonheurScore`,
  },
}

export default async function Page() {
  const client = createClient()
  const gyroroues = await client.getByType('gyroroue').catch(() => notFound())

  return <BonheurScore gyroroues={gyroroues.results} />
}
