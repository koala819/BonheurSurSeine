import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BonheurScoreProps } from '@/src/types/models'

import { BonheurScore } from '@/src/components/atoms/BonheurScore'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title:
    "BonheurScore | Tests de gyroroues (vidéos, conseils d'achat, et reviews de mobilité urbaine)",
  description:
    'Consultez mes tests et mes avis des différents modèles de gyroroues, monoroues, roues électriques : évaluations détaillées, avis, comparatifs des marques et des modèles, photos et vidéos YouTube pour faire son choix. Comparez les marques et les modèles, et trouvez celui adapté à votre usage grâce au BonheurScore.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/BonheurScore`,
  },
}

export default async function Page() {
  const client = createClient()
  try {
    let allGyroroues: BonheurScoreProps[] = []
    let page = 1
    let hasMorePages = true

    while (hasMorePages) {
      const gyroroues = await client.getByType('gyroroue', {
        orderings: {
          field: 'my.gyroroue.date',
          direction: 'desc',
        },
        page,
        pageSize: 100, // Maximum autorisé par Prismic
      })

      allGyroroues = [...allGyroroues, ...gyroroues.results]

      // Vérifier s'il y a plus de pages
      hasMorePages = gyroroues.next_page !== null
      page++
    }

    return <BonheurScore gyroroues={allGyroroues} />
  } catch (error) {
    notFound()
  }
}
