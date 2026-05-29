'use client'

import { MdLoyalty } from 'react-icons/md'

import Image from 'next/image'
import Link from 'next/link'

import Image_mewfr from '@/public/0.boutique/myewheel-logo-france.png'
import vendeurRapha from '@/public/0.boutique/myewheel-logo-raph.jpg'

const MYEWFR = () => {
  return (
    <div
      className="rounded-2xl py-4 shadow-md flex flex-col items-center justify-center text-center space-y-2
      bg-gradient-to-r from-green-100 to-sky-200 text-gray-900
      dark:from-pink-500/90 dark:to-orange-400/90 dark:text-white"
    >
      {/* LOGO */}
      <Link href={'https://myewheel.com/fr/'} target="_blank">
        <Image
          src={Image_mewfr}
          alt="MyEWheel France"
          className="rounded-lg w-full object-cover
                  bg-white/80 dark:bg-white/50 min-w-[90px] max-w-[250px] items-center
              border border-gray-200 dark:border-gray-600
              shadow-md hover:shadow-lg transition-shadow duration-300
            shadow-gray-400 hover:shadow-gray-400
            dark:shadow-neutral-900 dark:hover:shadow-neutral-950
            hover:border-sky-700    dark:hover:border-sky-600
              hover:-translate-y-[1px]"
          priority={false}
        />
      </Link>

      {/* TEXTE + IMAGE */}
      <div
        className="flex flex-col-reverse min-[485px]:flex-row items-center
        mx-1 sm:mx-2 md:mx-4
        gap-0.5 sm:gap-1 md:gap-6"
      >
        {/* gauche */}
        <div className="flex-1 place-content-center">
          <p className="text-center mb-1 text-lg">
            <Link
              href="https://www.youtube.com/@MyEWheel/videos"
              target="_blank"
              className="link-style font-bold hover:text-pink-600 dark:hover:text-pink-900"
            >
              C&apos;est la boutique où je travaille
            </Link>
            &nbsp;🎥
          </p>
          <p className="text-left sm:text-center ml-3">
            Proche des clients, elle met toute son énergie à leur service, et
            elle <u>m&apos;offre les moyens</u> de faire vivre la communauté…
          </p>
        </div>
        {/* droite */}
        <div className="flex place-content-center flex-shrink-0">
          <Image
            src={vendeurRapha}
            alt="Raphael"
            className="rounded-lg object-cover shadow-sm bg-white/50
                       w-28 sm:w-32 md:w-36 lg:w-40 h-auto"
            priority={false}
          />
        </div>
      </div>

      {/* TEXTE */}
      <p className="font-semibold text-left sm:text-center mx-4 sm:mx-8 md:mx-10">
        En achetant ta roue chez MyEWheel, tu soutiens réellement la chaîne, et
        tu lui permets de continuer à vivre.
      </p>

      {/* BOUTON */}
      <Link
        href="https://myewheel.com/fr/"
        target="_blank"
        className="inline-flex items-center gap-3 font-semibold px-4 py-2 rounded-lg shadow text-white bg-pink-600 hover:bg-pink-800 transition dark:bg-white dark:text-pink-600 dark:hover:bg-pink-200"
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
