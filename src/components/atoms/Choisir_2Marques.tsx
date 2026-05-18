'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import gyroroues from '@/public/gyroroues_bss202502.jpg'
import Logo_BG from '@/public/marques/Logo_Begode.jpg'
import Logo_EB from '@/public/marques/Logo_ExtremeBull.jpg'
import Logo_IM from '@/public/marques/Logo_Inmotion.jpg'
import Logo_KS from '@/public/marques/Logo_Kingsong.jpg'
import Logo_LK from '@/public/marques/Logo_Leaperkim.jpg'
import Logo_NB from '@/public/marques/Logo_Ninebot.png'
import Logo_NF from '@/public/marques/Logo_Nosfet.png'

const brands = [
  {
    key: '1',
    name: 'Begode',
    logo: Logo_BG,
    alt: 'Logo_Begode',
    width: 707,
    height: 217,
    text: `Ce fabricant historique (auparavant nommé Gotway) existe depuis 2014. Il s'est imposé comme une référence pour de nombreux passionnés, grâce à une très large gamme de modèles axés sur la performance, et un renouvellement constant de sa gamme (allant des très très petites aux très très grosses).`,
  },
  {
    key: '2',
    name: 'Extreme Bull',
    logo: Logo_EB,
    alt: 'Logo_ExtremeBull',
    width: 709,
    height: 248,
    text: `Apparue en 2021, cette marque partage ses ateliers de fabrication et tout son ADN avec Begode pour continuer à repousser les limites.`,
  },
  {
    key: '3',
    name: 'Inmotion',
    logo: Logo_IM,
    alt: 'Logo_Inmotion',
    width: 1768,
    height: 606,
    text: `Créé en 2012, ce fabricant propose une gamme lisible et diversifiée, avec des modèles adaptés aussi bien aux débutants qu'aux experts. Ses modèles associent généralement performance, praticité, sécurité et design soigné.`,
  },
  {
    key: '4',
    name: 'Kingsong',
    logo: Logo_KS,
    alt: 'Logo_Kingsong',
    width: 1879,
    height: 757,
    text: `Présente sur le marché depuis 2014, cette marque est reconnue pour ses modèles offrant un équilibre entre performance et sécurité. Elle fut la première à proposer un modèle avec suspension.`,
  },
  {
    key: '5',
    name: 'LeaperKim',
    logo: Logo_LK,
    alt: 'Logo_Leaperkim',
    width: 960,
    height: 346,
    text: `Apparu en 2020, ce fabricant (parfois encore appelé Veteran) a rapidement gagné en
    popularité auprès des connaisseurs avec sa gamme Veteran
    et ses roues robustes, solides et puissantes, offrant
    aussi une belle qualité de fabrication.`,
  },
  {
    key: '6',
    name: 'Ninebot by Segway',
    logo: Logo_NB,
    alt: 'Logo_Ninebot',
    width: 900,
    height: 434,
    text: `Connue pour ses trottinettes électriques, cette marque a
     aussi fabriqué quelques modèles très populaires entre 2014 et
     2018. Elle s'est depuis retirée du marché, mais ses
     modèles ont durablement influencé le marché par leur
     qualité, leur design et leur fiabilité.`,
  },
  {
    key: '7',
    name: 'Nosfet',
    logo: Logo_NF,
    alt: 'Logo_Nosfet',
    width: 734,
    height: 369,
    text: `Créée en 2024 par d'anciens collaborateurs Kingsong, cette marque a l'ambition de proposer des modèles innovants. Leurs premiers modèles ont rapidement suscité intérêt et curiosité des passionnés notamment grâce à leur suspension avancée et leur design.`,
  },
]

const Marques = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)

  // OUVERTURE AUTOMATIQUE
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')

      if (hash === 'marques') {
        setOpenKeys(['1'])
        setScrollTarget('marques')
      }
    }

    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // SCROLL DOUX
  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget)

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: 'smooth',
          })
        }, 300)
      }
    }
  }, [scrollTarget])

  return (
    <section
      id="marques"
      className="
        scroll-mt-24
        my-8
        rounded-3xl
        bg-white
        dark:bg-gray-700
        shadow-md
        hover:shadow-xl
        transition-all
        duration-500
        p-6
      "
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Les principales marques"
          title={<h2>Les principales marques</h2>}
          indicator={
            <strong className="transition-transform">
              <svg
                className="mx-2 w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </strong>
          }
          classNames={{
            indicator: 'data-[open=true]:rotate-180 transition-transform',
          }}
        >
          {/* IMAGE */}
          <div className="flex justify-center mt-2">
            <Image
              src={gyroroues}
              alt="5 gyroroues"
              width={500}
              height={500}
              className="
                rounded-2xl
                shadow-md
                hover:scale-[1.01]
                transition-transform
                duration-300
              "
            />
          </div>

          {/* INTRO */}
          <div className="mt-8 space-y-4 mb-1">
            <p className="mt-8 mb-2">
              Voici un panorama complet des marques les plus présentes dans le
              monde de la gyroroue.{' '}
            </p>
            <p className="mt-8 mb-0">
              Ce marché est actuellement dominé par seulement{' '}
              <strong className="text-sky-800 dark:text-sky-400">
                quelques fabricants incontournables
              </strong>
              , tous basés en Chine (
              <Link
                href="https://maps.app.goo.gl/1mAawTBrb1diP3ok8"
                target="_blank"
                className="link-style text-sky-800 dark:text-sky-400"
              >
                dans la région de Shenzhen
              </Link>
              ).
              <br />
              Pour savoir comment suivre l&apos;actualité des fabricants et en
              savoir plus sur eux, consulte la section{' '}
              <Link
                href="/guide-utile-gyroroue#infos"
                className="link-style text-sky-800 dark:text-sky-400"
              >
                Infos constructeurs
              </Link>{' '}
              dans <i>Guide Pratique</i>.
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-right text-small sm:ml-32">
              <i>
                Aucun favoritisme, les marques sont affichées par ordre
                alphabétique
              </i>
              &nbsp;😉
            </p>
          </div>

          {/* LISTE DES MARQUES */}
          <div className="sm:ml-2 md:ml-4 mb-4">
            <Accordion
              variant="splitted"
              isCompact
              itemClasses={{
                base: `group
                  rounded-xl px-2
                  border border-gray-200 dark:border-gray-600
                  bg-gray-100/60 dark:bg-gray-800/40
                  transition-all duration-300
                  hover:shadow-lg
                  hover:border-sky-700
                  dark:hover:border-sky-600
                  hover:-translate-y-[2px]
                `,
              }}
            >
              {brands.map((brand) => (
                <AccordionItem
                  key={brand.key}
                  aria-label={brand.name}
                  title={
                    <div className="flex flex-col">
                      <span className="brandGyroroue">{brand.name}</span>
                      <span className="text-xs font-light text-gray-500 dark:text-gray-400">
                        Cliquer pour découvrir la marque
                      </span>
                    </div>
                  }
                  indicator={
                    <div
                      className="flex items-center justify-center
                        w-8 h-8 rounded-full
                        bg-sky-200 dark:bg-sky-900
                        border border-gray-200 dark:border-gray-500
                        shadow-sm
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:border-sky-700 dark:group-hover:border-sky-600"
                    >
                      <strong className="transition-transform">
                        <svg
                          className="mx-2 w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </strong>
                    </div>
                  }
                  classNames={{
                    trigger: 'py-3',
                    indicator:
                      'data-[open=true]:-rotate-180 transition-transform duration-300',
                    content: 'pb-3',
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* LOGO */}
                    <aside className="flex-shrink-0">
                      <div
                        className="rounded-2xl
                          bg-white dark:bg-gray-700
                          p-3 shadow-sm"
                      >
                        <Image
                          src={brand.logo}
                          alt={brand.alt}
                          width={brand.width}
                          height={brand.height}
                          className="w-auto object-contain
                            min-w-[90px]
                            max-w-[180px]"
                        />
                      </div>
                    </aside>

                    {/* TEXTE */}
                    <aside className="flex-1">
                      <p
                        className="text-xs sm:text-xs md:text-sm lg:text-base
                          text-gray-700 dark:text-gray-200"
                      >
                        {brand.text}
                      </p>
                    </aside>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CONCLUSION */}
          <p className="mt-4 mb-6">
            Il existe également d&apos;autres marques&nbsp;: certaines comme
            RockWheel, Solowheel ou IPS ont disparu, et les autres sont moins
            connues/appréciées des connaisseurs. Les caractéristiques de leurs
            modèles n&apos;offrent pas les mêmes garanties (sécurité,
            performance) que ceux des modèles des principaux leaders du marché.
          </p>

          {/* AUTEURS */}
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            rédigé par{' '}
            <Link
              href={'https://www.patreon.com/c/BonheursurSeine'}
              passHref
              target="_blank"
              className="link-style"
            >
              Bonheur Sur Seine
            </Link>{' '}
            et{' '}
            <Link
              href={'https://linktr.ee/fabien.wheel'}
              passHref
              target="_blank"
              className="link-style"
            >
              Fabien.Wheel
            </Link>
            <br />
            dernière mise à jour : septembre 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Marques
