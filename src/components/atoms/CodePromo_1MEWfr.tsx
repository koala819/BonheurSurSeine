'use client'

import { MdLoyalty } from 'react-icons/md'

import Image from 'next/image'
import Link from 'next/link'

import Image_mewfr from '@/public/marques/myewheel-logo-france.png'
import vendeurRapha from '@/public/marques/myewheel-logo-raph.jpg'

const MYEWFR = () => {
  return (
    <div
      className="rounded-2xl p-4 shadow-md flex flex-col items-center justify-center text-center space-y-2
      bg-gradient-to-r from-indigo-200 to-purple-200 text-gray-900
      dark:from-pink-500 dark:to-orange-400 dark:text-white"
    >
      {/* LOGO */}
      <Link href={'https://myewheel.com/fr/'} target="_blank">
        <Image
          src={Image_mewfr}
          alt="MyEWheel France"
          className="rounded-lg w-full object-cover shadow-sm
                  bg-white/50  min-w-[90px] max-w-[250px] items-center"
          priority={false}
        />
      </Link>

      {/* TEXTE + IMAGE */}
      <div className="flex flex-col-reverse min-[485px]:flex-row items-center gap-1 md:gap-6">
        {/* gauche */}
        <div className="flex-1 place-content-center">
          <p className="text-center">
            Découvre{' '}
            <Link
              href="https://www.youtube.com/watch?v=VPXLMrs_Ne4"
              target="_blank"
              className="link-style font-bold hover:text-pink-600 dark:hover:text-pink-900"
            >
              la boutique où je travaille
            </Link>
            &nbsp;🎥
            <br /> Proche des clients, de la communauté, et qui met toute son
            énergie à leur service…
          </p>
        </div>
        {/* droite */}
        <div className="flex place-content-center flex-shrink-0">
          <Image
            src={vendeurRapha}
            alt="Raphael"
            className="rounded-lg object-cover shadow-sm bg-white/50
                       w-24 sm:w-28 md:w-32 h-auto"
            priority={false}
          />
        </div>
      </div>

      {/* TEXTE */}
      <p className="font-semibold text-center mx-4 sm:mx-8 md:mx-10">
        En achetant ta roue chez MyEWheel, tu soutiens réellement la chaîne et
        tu lui permets de continuer à vivre.
      </p>

      {/* BOUTON */}
      <Link
        href="https://myewheel.com/fr/"
        target="_blank"
        className="inline-flex items-center gap-3 font-semibold px-4 py-2 rounded-lg shadow text-white bg-pink-600 hover:bg-pink-700 transition dark:bg-white dark:text-pink-600 dark:hover:bg-gray-100"
      >
        <MdLoyalty className="h-10 w-10 flex-shrink-0 text-white dark:text-pink-600" />

        <span className="leading-tight text-center">
          Accéder à la boutique
          <br />
          <span className="inline">
            5% sur ton panier avec le code{' '}
            <strong className="text-yellow-400 dark:text-yellow-600 font-bold">
              BONHEUR
            </strong>
          </span>
        </span>
      </Link>
    </div>
  )
}
export default MYEWFR
