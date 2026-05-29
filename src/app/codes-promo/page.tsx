import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import BoutiqueMEWfr from '@/src/components/atoms/CodePromo_1MEWfr'
import GrillePromo from '@/src/components/atoms/CodePromo_2grillepartenaires'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title:
    'Codes Promo Bonheur Sur Seine : Offres Partenaires et Réductions Exclusives',
  description:
    "Guide d'achat et promotions exclusives chez les partenaires de Bonheur Sur Seine (accessoires monoroue / gyroroue / roue électrique).",
  alternates: {
    canonical: `${process.env.CLIENT_URL}/codes-promo`,
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
      <p className="text-left">
        Retrouve ici tous les{' '}
        <strong className="dark:text-brown-300">codes promo exclusifs</strong>{' '}
        négociés avec les partenaires de la chaîne Bonheur sur Seine.
        <br />
        Parfait pour acheter une gyroroue, s&apos;équiper en accessoires de
        mobilité électrique et{' '}
        <strong className="dark:text-brown-300">
          profiter de réductions
        </strong>{' '}
        dans des boutiques spécialisées -{' '}
        <strong className="dark:text-brown-300">
          tout en soutenant directement la chaîne et lui permettre de continuer
          à exister&nbsp;!
        </strong>{' '}
        😁
      </p>

      {/* Capsule Boutique avec Timer */}
      {/* -------
      <div className="md:mx-4">
        <BoutiqueMEWfr />
      </div>
      */}

      {/* Grille de promos partenaires */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
        {sortedPromos.map((promo: any, id: number) => (
          <div key={id}>
            <GrillePromo
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
