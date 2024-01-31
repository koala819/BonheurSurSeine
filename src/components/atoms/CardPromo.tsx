'use client'

import { useEffect, useState } from 'react'
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
  const [imageSrc, setImageSrc] = useState(logo)
  useEffect(() => {
    if (theme === 'dark' && logo_mode_sombre) {
      setImageSrc(logo_mode_sombre)
    } else {
      setImageSrc(logo)
    }
  }, [theme, logo_mode_sombre, logo])

  return (
    <section className="relative bg-gray-300 dark:bg-gray-900 shadow-md rounded-3xl p-2 mx-1 my-3">
      <div className="flex justify-center h-[100px]">
        <div className="relative overflow-hidden rounded-2xl shadow-lg h-full w-1/2 sm:w-full xl:w-1/2">
          <Image
            alt={alt || 'logo de mon partenaire'}
            src={imageSrc}
            priority
            objectFit="contain"
            layout="fill"
            className="object-content"
          />
        </div>
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
          <MdLoyalty className="h-32 w-32 text-bg-light dark:text-bg-gray-300 mr-2" />
          <p>
            Et avec le code Promo
            <span className="font-bold color-[#fbbf24] ml-1">{code}</span>{' '}
            bénéficies d&apos;une réduction {montant}.
          </p>
        </Link>
      </div>
    </section>
  )
}
