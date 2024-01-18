import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import CardPromo from '@/src/components/atoms/CardPromo'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title: 'Mes Partenaires et Promos Exclusives – Bonheur Sur Seine"',
  description:
    'Profitez des offres exclusives chez nos partenaires avec Bonheur Sur Seine. Codes promo et réductions spéciales sur les gyroroues.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/promo`,
  },
}

export default async function Page() {
  const client = createClient()
  const promos = await client.getByType('promo').catch(() => notFound())
  const sortedPromos = promos.results.sort(
    (a, b) => a.data.rank! - b.data.rank!,
  )

  return (
    <section className="flex-col justify-center p-4 space-y-8">
      <h1 className="text-xl md:text-3xl lg:text-4xl dark:text-white text-black font-semibold">
        Découvrez mes Partenaires et Profitez d&apos;Offres Exclusives sur les
        Gyroroues !
      </h1>
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
    </section>
  )
}
