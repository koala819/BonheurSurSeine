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
    <section className="relative h-full bg-stone-200 dark:bg-slate-950 shadow-md rounded-3xl p-2 mx-1 my-3">
      <div className="flex justify-center h-[100px] mb-0">
        <div className="relative overflow-hidden rounded-2xl shadow-slate-500 bg-white dark:bg-sky-950 dark:shadow-slate-700 shadow-md h-full w-1/2 sm:w-3/4 xl:w-3/4">
          <Link href={website} target="_blank" className="">
            <Image
              alt={alt || 'logo de mon partenaire'}
              src={imageSrc}
              priority
              objectFit="contain"
              layout="fill"
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      <div className="mt-4 pl-2 mb-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">
          <Link
            href={website}
            target="_blank"
            className="flex items-center mb-1 mt-4 mr-4 group cursor-pointer text-gray-800 dark:text-gray-300"
          >
            {name}
          </Link>
        </h2>
        <p className="text-md text-gray-800 dark:text-gray-300">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap space-y-0">
        <aside className="w-2/12 space-y-0 flex justify-center items-center">
          <Link
            href={website}
            target="_blank"
            className="flex items-center mb-1 mt-1 mr-2 group cursor-pointer text-gray-800 dark:text-gray-300"
          >
            <MdLoyalty className="h-10 w-10 text-bg-light dark:text-white dark:text-bg-gray-300 mr-0" />
          </Link>
        </aside>
        <aside className="w-10/12 space-y-0">
          Code&nbsp;:
          <span className="font-bold color-[#fbbf24] ml-1">{code}</span>
          <br />
          Réduction&nbsp;: {montant}
        </aside>
      </div>
    </section>
  )
}
