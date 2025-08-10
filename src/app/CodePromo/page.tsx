import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import CardPromo from '@/src/components/atoms/CodePromo'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title:
    'Bonheur Sur Seine – Codes Promo : Offres Partenaires et Réductions Exclusives',
  description:
    "Guide d'achat et promotions exclusives chez les partenaires de Bonheur Sur Seine (accessoires monoroues, gyroroues, roues électriques).",
  alternates: {
    canonical: `${process.env.CLIENT_URL}/CodePromo`,
  },
}

export default async function Page() {
  const client = createClient()
  const promos = await client.getByType('promo').catch(() => notFound())
  const sortedPromos = promos.results.sort(
    (a, b) => a.data.rank! - b.data.rank!,
  )

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <h1 className="whitespace-break-spaces">
        Profite d&apos;Offres Exclusives&nbsp;!
      </h1>
      <p className="text-justify">
        Retrouve ici tous les{' '}
        <strong className="dark:text-brown-300">codes promo exclusifs</strong>{' '}
        négociés avec les partenaires de la chaîne Bonheur sur Seine.
        <br />
        Parfait pour acheter une gyroroue, s&apos;équiper en accessoires de
        mobilité électrique ou{' '}
        <strong className="dark:text-brown-300">
          profiter de réductions
        </strong>{' '}
        dans des boutiques spécialisées -{' '}
        <strong className="dark:text-brown-300">
          tout en soutenant directement la chaîne&nbsp;!
        </strong>{' '}
        😁
      </p>
      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
        /*"flex-col justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"*/
      >
        {sortedPromos.map((promo: any, id: number) => (
          <div key={id}>
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
