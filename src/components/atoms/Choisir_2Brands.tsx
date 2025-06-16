'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
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

const Brands = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'marques') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('marques')
      }
    } // Appel initial

    handleHashChange() // Écoute les changements de hash (clics internes)
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
  //CODE POUR SCROLL VERS L'ANCRAGE DEPUIS LA NAVBARBAR
  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    }
  }, [scrollTarget])

  return (
    <section
      id="marques"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Les principales marques"
          title={<h2>Les principales marques</h2>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          <div className="flex justify-center">
            <Link href={gyroroues.src} passHref target="_blank">
              <Image
                src={gyroroues}
                alt="5 gyroroues"
                width={500}
                height={500}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          </div>
          <p className="mt-8 mb-2">
            Le marché est actuellement dominé par quelques fabricants, tous
            basés en Chine (près de Shenzen). <br />
            <span className="text-gray-500 dark:text-gray-300 mt-0">
              <i>
                Aucun favoritisme de ma part, les marques sont citées par ordre
                alphabétique.
              </i>
              😉
            </span>
          </p>
          <p className="ml-10">
            <Accordion isCompact>
              <AccordionItem
                key="1"
                aria-label="Begode (auparavant Gotway)"
                className="accordion-item"
                title={
                  <span className="brandGyroroue">
                    Begode (auparavant Gotway)
                  </span>
                }
                indicator={
                  <span className="chevronAccordionItemsmall2  mr-1">
                    &lsaquo;
                  </span>
                }
              >
                <div className="flex flex-row items-center gap-4 flex-nowrap">
                  <aside className="mb-2 flex-shrink-0">
                    <Image
                      src={Logo_BG}
                      alt="Logo_Begode"
                      width={707}
                      height={217}
                      className="rounded-lg cursor-pointer w-auto min-w-[50px] max-w-[20vw]"
                    />
                  </aside>
                  <aside className="">
                    <p className="text-xs sm:text-sm md:text-base">
                      Ce fabricant historique (existe depuis 2014) s&apos;est
                      imposé comme une référence pour de nombreux passionnés,
                      grâce à une très large gamme de modèles axés sur la
                      performance (allant des très petites aux très grosses) et
                      un renouvellement constant de sa gamme.
                    </p>
                  </aside>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Extreme Bull"
                title={<span className="brandGyroroue">Extreme Bull</span>}
                indicator={
                  <span className="chevronAccordionItemsmall2  mr-1">
                    &lsaquo;
                  </span>
                }
              >
                <div className="flex flex-row items-center gap-4 flex-nowrap">
                  <aside className="mb-2 flex-shrink-0">
                    <Image
                      src={Logo_EB}
                      alt="Logo_ExtremeBull"
                      width={709}
                      height={248}
                      className="rounded-lg cursor-pointer w-auto min-w-[50px] max-w-[20vw]"
                    />
                  </aside>
                  <aside className="">
                    <p className="text-xs sm:text-sm md:text-base">
                      Apparue en 2021, cette marque partage ses ateliers de
                      fabrication et toute son ADN avec Begode pour continuer à
                      repousser les limites.
                    </p>{' '}
                  </aside>
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Inmotion"
                title={<span className="brandGyroroue">Inmotion</span>}
                indicator={
                  <span className="chevronAccordionItemsmall2  mr-1">
                    &lsaquo;
                  </span>
                }
              >
                <div className="flex flex-row items-center gap-4 flex-nowrap">
                  <aside className="mb-2 flex-shrink-0">
                    <Image
                      src={Logo_IM}
                      alt="Logo_Inmotion"
                      width={1768}
                      height={606}
                      className="rounded-lg cursor-pointer w-auto min-w-[50px] max-w-[20vw]"
                    />
                  </aside>
                  <aside className="">
                    <p className="text-xs sm:text-sm md:text-base">
                      Créé en 2012, ce fabricant propose une gamme lisible et
                      diversifiée, avec des modèles adaptés aussi bien aux
                      débutants qu&apos;aux experts. Ses modèles associent
                      généralement performance, praticité, sécurité et design
                      soigné.
                    </p>
                  </aside>
                </div>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Kingsong"
                title={<span className="brandGyroroue">Kingsong</span>}
                indicator={
                  <span className="chevronAccordionItemsmall2  mr-1">
                    &lsaquo;
                  </span>
                }
              >
                <div className="flex flex-row items-center gap-4 flex-nowrap">
                  <aside className="mb-2 flex-shrink-0">
                    <Image
                      src={Logo_KS}
                      alt="Logo_Kingsong"
                      width={1879}
                      height={757}
                      className="rounded-lg cursor-pointer w-auto min-w-[50px] max-w-[20vw]"
                    />
                  </aside>
                  <aside className="">
                    <p className="text-xs sm:text-sm md:text-base">
                      Présente sur le marché depuis 2014, cette marque est
                      reconnue pour ses modèles offrant un équilibre entre
                      performance et sécurité. Elle fut la première à proposer
                      un modèle avec suspension.
                    </p>
                  </aside>
                </div>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Leaperkim"
                title={<span className="brandGyroroue">Leaperkim</span>}
                indicator={
                  <span className="chevronAccordionItemsmall2  mr-1">
                    &lsaquo;
                  </span>
                }
              >
                <div className="flex flex-row items-center gap-4 flex-nowrap">
                  <aside className="mb-2 flex-shrink-0">
                    <Image
                      src={Logo_LK}
                      alt="Logo_Leaperkim"
                      width={960}
                      height={346}
                      className="rounded-lg cursor-pointer w-auto min-w-[50px] max-w-[20vw]"
                    />
                  </aside>
                  <aside className="">
                    <p className="text-xs sm:text-sm md:text-base">
                      Apparu en 2020, ce fabricant a rapidement gagné en
                      popularité auprès des connaisseurs avec sa gamme Veteran
                      et ses roues robustes, solides et puissantes, offrant
                      aussi une belle qualité de fabrication.
                    </p>
                  </aside>
                </div>
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Ninebot by Segway"
                title={<span className="brandGyroroue">Ninebot by Segway</span>}
                indicator={
                  <span className="chevronAccordionItemsmall2  mr-1">
                    &lsaquo;
                  </span>
                }
              >
                <div className="flex flex-row items-center gap-4 flex-nowrap">
                  <aside className="mb-2 flex-shrink-0">
                    <Image
                      src={Logo_NB}
                      alt="Logo_Ninebot"
                      width={900}
                      height={434}
                      className="rounded-lg cursor-pointer w-auto min-w-[50px] max-w-[20vw]"
                    />
                  </aside>
                  <aside className="">
                    <p className="text-xs sm:text-sm md:text-base">
                      Connue pour ses trottinettes électriques, cette marque a
                      aussi fabriqué quelques modèles populaires entre 2014 et
                      2018. Elle s&apos;est depuis retirée du marché, mais ses
                      modèles ont durablement influencé le marché par leur
                      qualité, leur design et leur fiabilité.
                    </p>
                  </aside>
                </div>
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="Nosfet"
                title={<span className="brandGyroroue">Nosfet</span>}
                indicator={
                  <span className="chevronAccordionItemsmall2  mr-1">
                    &lsaquo;
                  </span>
                }
              >
                <div className="flex flex-row items-center gap-4 flex-nowrap">
                  <aside className="mb-2 flex-shrink-0">
                    <Image
                      src={Logo_NF}
                      alt="logo_Nosfet"
                      width={734}
                      height={369}
                      className="rounded-lg cursor-pointer w-auto min-w-[50px] max-w-[20vw]"
                    />
                  </aside>
                  <aside className="">
                    <p className="text-xs sm:text-sm md:text-base">
                      Créée en 2024 par d&apos;anciens collaborateurs Kingsong,
                      cette marque a l&apos;ambition de proposer des modèles
                      innovants. Leurs 2 premiers modèles ont suscité intérêt et
                      curiosité grâce à leur suspension avancées et leur design.
                    </p>
                  </aside>
                </div>
              </AccordionItem>
            </Accordion>
          </p>
          <p className="mt-4">
            Il existe également d&apos;autres marques&nbsp;: certaines comme
            Solowheel, RockWheel ou IPS ont disparu, et les autres sont moins
            connues/appréciées des connaisseurs. Les caractéristiques de leurs
            modèles n&apos;offrent pas les mêmes garanties (sécurité,
            performance) que ceux des modèles des principaux leaders du marché.
            <br />
            <br />
          </p>

          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en février 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Brands
