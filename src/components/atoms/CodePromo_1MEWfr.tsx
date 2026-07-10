'use client'

import { MdLoyalty } from 'react-icons/md'

import Image from 'next/image'
import Link from 'next/link'

import Image_mewfr from '@/public/0.boutique/myewheel-logo-france.png'
import vendeurRapha from '@/public/0.boutique/myewheel-logo-raph.jpg'

const MYEWFR = () => {
  return (
    <div
      className="rounded-2xl py-2 px-1 shadow-md flex flex-col items-center justify-center text-center
      bg-gradient-to-r from-green-100 to-sky-200 text-gray-900
      dark:from-pink-500/90 dark:to-orange-400/90 dark:text-white
      border border-gray-200 dark:border-gray-600
     hover:border-sky-700    dark:hover:border-sky-600
       hover:-translate-y-[1px] "
    >
      {/* LOGO */}
      <Link href={'https://myewheel.com/fr/'} target="_blank">
        <Image
          src={Image_mewfr}
          alt="MyEWheel France"
          className="rounded-lg w-full object-cover
                  bg-white/80 dark:bg-white/50
                  items-center aspect-auto min-h-[70px]
              border border-gray-200 dark:border-gray-600
              shadow hover:shadow-md transition-shadow duration-300
            shadow-gray-400 hover:shadow-gray-400
            dark:shadow-neutral-900 dark:hover:shadow-neutral-950 "
          priority={false}
        />
      </Link>

      {/* TEXTE */}
      <div className="items-center my-2 mx-4 sm:mx-8 md:mx-12">
        <p className="text-center">
          <Link
            href="https://myewheel.com/fr/about-us-fr/"
            target="_blank"
            className="link-style font-bold hover:text-pink-600 dark:hover:text-pink-900"
          >
            La boutique où je travaille et qui m&apos;offre les moyens de me
            consacrer à&nbsp;100% à la&nbsp;communauté&nbsp;!
          </Link>
        </p>
        <p className="text-center">
          En achetant ta roue chez MyEWheel, tu permets réellement à la chaîne
          de continuer à vivre…
        </p>
      </div>

      {/* BOUTON */}
      <div className="mx-1">
        <Link
          href="https://myewheel.com/fr/electric-unicycles-fr/"
          target="_blank"
          className="inline-flex items-center gap-1 font-semibold px-1 py-1 rounded-lg shadow text-white bg-pink-600 hover:bg-pink-800 transition dark:bg-white dark:text-pink-600 dark:hover:bg-pink-200"
        >
          <MdLoyalty className="h-10 w-10 flex-shrink-0 text-white dark:text-pink-600" />

          <span className="leading-tight text-center">
            <span className="inline">
              5% sur ton panier avec le code{' '}
              <strong className="text-yellow-400 dark:text-yellow-600 font-bold">
                BONHEUR
              </strong>
            </span>
          </span>
          <div className="flex place-content-center flex-shrink-0">
            <Image
              src={vendeurRapha}
              alt="Raphael"
              className="rounded-lg object-cover shadow-sm bg-white/50
                       w-20 sm:w-30 md:w-34 lg:w-38 h-auto"
              priority={false}
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
export default MYEWFR
