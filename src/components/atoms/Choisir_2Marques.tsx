'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Image_news from '@/public/Image_news.png'
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
    links: [
      {
        label: 'Site web officiel',
        items: [{ href: 'http://www.begode.com', text: 'www.begode.com' }],
      },
      {
        label: 'Youtube',
        items: [
          {
            href: 'https://www.youtube.com/@begode_levi',
            text: '@begode_levi',
          },
        ],
      },
      {
        label: 'Facebook',
        items: [
          { href: 'https://www.facebook.com/Begode.Levi', text: 'Begode.Levi' },
        ],
      },
    ],
  },
  {
    key: '2',
    name: 'Extreme Bull',
    logo: Logo_EB,
    alt: 'Logo_ExtremeBull',
    width: 709,
    height: 248,
    text: `Apparue en 2021, cette marque partage ses ateliers de fabrication et tout son ADN avec Begode pour continuer à repousser les limites.`,
    links: [
      {
        label: 'Facebook',
        items: [
          {
            href: 'https://www.facebook.com/ExtremeBull.Levi',
            text: 'ExtremeBull.Levi',
          },
        ],
      },
    ],
  },
  {
    key: '3',
    name: 'Inmotion',
    logo: Logo_IM,
    alt: 'Logo_Inmotion',
    width: 1768,
    height: 606,
    text: `Créé en 2012, ce fabricant propose une gamme lisible et diversifiée, avec des modèles adaptés aussi bien aux débutants qu'aux experts. Ses modèles associent généralement performance, praticité, sécurité et design soigné.`,
    links: [
      {
        label: 'Site web officiel',
        items: [
          {
            href: 'https://www.inmotionworld.com',
            text: 'www.inmotionworld.com',
          },
        ],
      },
      {
        label: 'Youtube',
        items: [
          {
            href: 'https://www.youtube.com/@INMOTIONSCV',
            text: '@InmotionSCV',
          },
        ],
      },
      {
        label: 'Facebook',
        items: [
          {
            href: 'https://www.facebook.com/InmotionWorld',
            text: 'InmotionWorld',
          },
        ],
      },
    ],
  },
  {
    key: '4',
    name: 'Kingsong',
    logo: Logo_KS,
    alt: 'Logo_Kingsong',
    width: 1879,
    height: 757,
    text: `Présente sur le marché depuis 2014, cette marque est reconnue pour ses modèles offrant un équilibre entre performance et sécurité. Elle fut la première à proposer un modèle avec suspension.`,
    links: [
      {
        label: 'Site web officiel',
        items: [{ href: 'https://kingsong.com', text: 'www.kingsong.com' }],
      },
      {
        label: 'Youtube',
        items: [
          {
            href: 'https://www.youtube.com/@KingsongIntellCoLtd',
            text: '@KingsongIntellCoLtd',
          },
        ],
      },
      {
        label: 'Facebook',
        items: [
          {
            href: 'https://www.facebook.com/kingsong.international',
            text: 'Kingsong.International',
          },
        ],
      },
      {
        label: 'Filiale Europe',
        items: [
          {
            href: 'https://kingsongeurope.com',
            text: 'wwww.kingsongeurope.com',
          },
          {
            href: 'https://www.youtube.com/@KingSongEurope',
            text: '@KingsongEurope',
          },
          {
            href: 'https://www.facebook.com/kingsongeurope',
            text: 'KingsongEurope',
          },
        ],
      },
    ],
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
    links: [
      {
        label: 'Site web officiel',
        items: [
          { href: 'https://www.leaperkim.com', text: 'www.leaperkim.com' },
        ],
      },
      {
        label: 'Youtube',
        items: [
          {
            href: 'https://youtube.com/@veteranlinnea9952',
            text: '@veteranlinnea',
          },
        ],
      },
      {
        label: 'Facebook',
        items: [
          {
            href: 'https://www.facebook.com/linnea.lin.14',
            text: 'linnea.lin',
          },
        ],
      },
    ],
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
    links: [],
  },
  {
    key: '7',
    name: 'Nosfet',
    logo: Logo_NF,
    alt: 'Logo_Nosfet',
    width: 734,
    height: 369,
    text: `Créée en 2024 par d'anciens collaborateurs Kingsong, cette marque a l'ambition de proposer des modèles innovants. Leurs premiers modèles ont rapidement suscité intérêt et curiosité des passionnés notamment grâce à leur suspension avancée et leur design.`,
    links: [
      {
        label: 'Site web officiel',
        items: [{ href: 'https://www.nosfet.com', text: 'www.nosfet.com' }],
      },
      {
        label: 'Youtube',
        items: [
          {
            href: 'https://www.youtube.com/@nosfet_tech',
            text: '@Nosfet_tech',
          },
        ],
      },
      {
        label: 'Facebook',
        items: [
          { href: 'https://www.facebook.com/nosfet.tech', text: 'Nosfet.tech' },
        ],
      },
    ],
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
      if (hash === 'infos') {
        setOpenKeys(['1'])
        setScrollTarget('infos')
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
    if (!scrollTarget) return
    const el = document.getElementById(scrollTarget)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300)
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
          <div className="mt-8 mb-1">
            <h4 className="mt-4 mb-1">🧭 Principaux fabricants</h4>
            <p className="mt-0 mb-4">
              Le marché des gyroroues est actuellement dominé par seulement{' '}
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
                  <div className="flex flex-col md:flex-row items-center gap-x-3 gap-y-1">
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

                  {/* LINKS DYNAMIQUES */}
                  <div className="mt-2 text-xs sm:text-xs md:text-sm lg:text-base">
                    {brand.links.map((group, i) => (
                      <div key={i} className="">
                        {/* 1 seul item */}
                        {group.items.length === 1 ? (
                          <ul className="compactlist mt-0 mb-0 leading-tight">
                            <li className="font-medium text-xs sm:text-xs md:text-sm lg:text-base">
                              {group.label} ={' '}
                              <Link
                                href={group.items[0].href}
                                target="_blank"
                                className="text-sky-700 underline font-normal"
                              >
                                {group.items[0].text}
                              </Link>
                            </li>
                          </ul>
                        ) : (
                          <>
                            {/* plusieurs items */}
                            <ul className="compactlist mt-0 mb-0 leading-tight">
                              <li className="font-medium text-xs sm:text-xs md:text-sm lg:text-base">
                                {group.label}
                                <ul className="compactlist mt-0 mb-0 leading-tight">
                                  {group.items.map((item, j) => (
                                    <li
                                      className="font-medium text-xs sm:text-xs md:text-sm lg:text-base"
                                      key={j}
                                    >
                                      <Link
                                        href={item.href}
                                        target="_blank"
                                        className="text-sky-700 underline font-normal"
                                      >
                                        {item.text}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            </ul>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CONCLUSION */}
          <p className="mt-4 mb-4">
            Il existe également d&apos;autres marques&nbsp;: certaines comme
            RockWheel, Solowheel ou IPS ont disparu, et les autres sont moins
            connues/appréciées des connaisseurs. <br />
            Les caractéristiques de leurs modèles n&apos;offrent pas les mêmes
            garanties (sécurité, performance) que ceux des modèles des
            principaux leaders du marché.
          </p>

          {/* ----------------------------------------------------- */}
          {/* Se tenir informer */}
          <h4 className="mt-6 mb-2 scroll-mt-24" id="infos">
            🆕 Se tenir informé ?
          </h4>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-1 mb-8">
            {/* TEXTE */}
            <div className="flex-1 space-y-2">
              <p className="">
                Pour se tenir informé, il faut suivre l&apos;actualité des
                fabricants, notamment sur les réseaux sociaux&nbsp;: certains
                constructeurs communiquent énormément.
              </p>
              <p className="">
                Selon les marques, on retrouve annonces marketing, photos des
                nouveaux modèles, spécifications techniques, etc.
              </p>
              <p className="">
                Et sur YouTube, certains fabricants proposent aussi des{' '}
                <strong>tutoriels vidéo</strong>
                &nbsp;pour faciliter l&apos;entretien et le SAV&nbsp;:
                <strong> démontage</strong>,
                <strong> changement de pneus</strong>, explications des
                réglages, ou navigation dans les menus, etc.
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex-shrink-0">
              <div className="rounded-2xl bg-gray-100 dark:bg-gray-800  p-2 shadow-sm">
                <Image
                  src={Image_news}
                  alt="Actualités fabricants"
                  className="rounded-xl object-cover shadow-sm
                  w-40 sm:w-44 md:w-56 lg:w-64 h-auto"
                  priority={false}
                />
              </div>
            </div>
          </div>

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
