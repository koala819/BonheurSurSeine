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
    <section
      className="relative h-full bg-slate-300 dark:bg-slate-700
      rounded-2xl py-2 flex flex-col w-full max-w-[400px] lg:max-w-[350px] mx-auto
      border border-gray-200 dark:border-gray-600
      shadow hover:shadow-md transition-shadow duration-300
     shadow-gray-400 hover:shadow-gray-400
     dark:shadow-neutral-900 dark:hover:shadow-neutral-950
     hover:border-sky-700    dark:hover:border-sky-600
       hover:-translate-y-[1px]"
    >
      {/* PARTIE IMAGE */}
      <div className="flex justify-center mb-0">
        <div
          className="relative overflow-hidden rounded-xl
          shadow-md shadow-gray-400 dark:shadow-neutral-900
          bg-slate-50 dark:bg-slate-800
          aspect-[16/9] w-[150px] lg:w-[200px]
          flex items-center
           hover:shadow-lg"
        >
          <Link
            href={website}
            target="_blank"
            className="relative w-full h-full block"
          >
            <Image
              alt={alt || 'logo de mon partenaire'}
              src={imageSrc}
              fill
              priority
              sizes="(max-width: 1024px) 150px, 200px"
              className="object-contain object-center rounded-xl"
            />
          </Link>
        </div>
      </div>
      {/* PARTIE DESCRIPTION */}
      <div className="mt-0 pl-2 mb-1">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-0">
          <Link
            href={website}
            target="_blank"
            className="flex items-center mb-0 mt-3 mr-4 group cursor-pointer text-gray-800 dark:text-gray-300"
          >
            {name}
          </Link>
        </h2>
        <p className="text-md text-gray-800 dark:text-gray-300">
          {description}
        </p>
      </div>
      {/* PARTIE REDUCTION */}
      <div className="flex flex-wrap md:flex-nowrap space-y-0 mt-auto items-center">
        {/* Icône toujours visible */}
        <aside className="w-3/12 flex justify-center items-center">
          <Link
            href={website}
            target="_blank"
            className="flex items-center mb-1 mt-1 mr-2 group cursor-pointer text-gray-800 dark:text-gray-300"
          >
            <MdLoyalty className="h-10 w-10 text-bg-light dark:text-white dark:text-bg-gray-300 mr-0 object-center" />
          </Link>
        </aside>
        {/* Affiche seulement si au moins un champ existe */}
        {(code || montant) && (
          <aside className="w-9/12">
            {/* Cas spécifique : si le code est une adresse mail */}
            {code === 'bonheursurseine@gmail.com' ? (
              <p>
                Contact e-mail&nbsp;:
                <br />
                <Link
                  href="mailto:bonheursurseine@gmail.com"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <span className="font-bold text-yellow-600 ml-1 text-sm">
                    {code}
                  </span>
                </Link>
              </p>
            ) : (
              code && (
                <p>
                  Code&nbsp;:
                  <span className="font-bold text-yellow-600 ml-1">{code}</span>
                  <br />
                </p>
              )
            )}
            {montant && <p>Réduction&nbsp;: {montant}</p>}
          </aside>
        )}
      </div>
    </section>
  )
}
