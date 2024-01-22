'use client'

// import { Image } from '@nextui-org/react'
import { MdLoyalty } from 'react-icons/md'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import { Partner } from '@/src/types/models'

export default function CardPromo({
  name,
  logo,
  logo_mode_sombre,
  alt,
  website,
  description,
  code,
  montant,
}: Partner) {
  const { theme } = useTheme()

  return (
    <section className="relative bg-gray-300 dark:bg-gray-800 shadow-md rounded-3xl p-2 mx-1 my-3">
      <div className="flex justify-center overflow-x-hidden rounded-2xl relative">
        <Image
          className="lg:h-20 object-center"
          alt={alt || 'logo de mon partenaire'}
          src={
            theme === 'dark' && logo_mode_sombre
              ? logo_mode_sombre || ''
              : logo || ''
          }
          priority
          width={500}
          height={200}
          // placeholder="blur"
        />
      </div>
      <div className="mt-4 pl-2 mb-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">
          {name}
        </h2>
        <p className="text-md text-gray-800 dark:text-gray-300">
          {description}
        </p>

        <Link
          href={website}
          target="_blank"
          className="flex items-center mb-1 mt-4 mr-4 group cursor-pointer text-gray-800 dark:text-gray-300"
        >
          <MdLoyalty className="h-32 w-32 text-bg-light dark:text-bg-dark mr-2" />
          {/* <p dangerouslySetInnerHTML={{ __html: reduction }} /> */}
          <p>
            Et avec le code Promo
            <span className="bold color-[#fbbf24]">{code}</span> bénéficie
            d&apos;une réduction {montant}.
          </p>
        </Link>
      </div>
    </section>
  )
}
