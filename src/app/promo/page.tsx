import { notFound } from 'next/navigation'

import CardPromo from '@/src/components/atoms/CardPromo'

import { createClient } from '@/prismicio'

export default async function Page() {
  const client = createClient()
  const promos = await client.getByType('promo').catch(() => notFound())
  const sortedPromos = promos.results.sort(
    (a, b) => a.data.rank! - b.data.rank!,
  )

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {sortedPromos.map((promo: any, id: number) => (
        <div key={id} className="text-red-500">
          <CardPromo
            key={id}
            name={promo.data.name}
            logo={promo.data.logo.url}
            logo_mode_sombre={promo.data.logo_mode_sombre.url}
            alt={promo.data.logo.alt}
            website={promo.data.website}
            description={promo.data.description}
            code={promo.data.code}
            montant={promo.data.montant}
          />
        </div>
      ))}
    </div>
  )
}
