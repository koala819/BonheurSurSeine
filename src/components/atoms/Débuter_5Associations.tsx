'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

//import ReactPlayer from 'react-player'
import Image from 'next/image'
import Link from 'next/link'

import Discord from '@/public/Discord.png'
import Discord2 from '@/public/Discord_screenshot.jpg'
import Anumme from '@/public/marques/Anumme.png'

const Associations = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'asso') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('asso')
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
      id="asso"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-600 rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Groupes & associations"
          title={<h3>🌍 Groupes & associations</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          <section>
            <h3>
              L&apos;<span className="small-caps">ANUMME</span>
            </h3>
            <div className="blueBlock mb-2">
              <h4>
                ℹ️ Leur site est très complet et bourré d&apos;informations
              </h4>
            </div>
            <div className="flex flex-col lg:flex-row">
              <aside className="lg:w-7/12 space-y-8">
                <p className="text-justify">
                  L&apos;
                  <strong>
                    Association Nationale des Utilisateurs de Micro-Mobilité
                    Électrique
                  </strong>{' '}
                  a été créée par des passionnés afin de promouvoir et défendre
                  l&apos;utilisation des EDPM (roues, trottinettes, e-skate).
                  <br /> <br />
                  Même si l&apos;asso est Leur site est rempli
                  d&apos;informations utiles.
                </p>
              </aside>

              <aside className="lg:w-5/12 flex items-center justify-center">
                <Link href={'https://www.anumme.fr/'} passHref target="_blank">
                  <Image
                    src={Anumme}
                    alt="Anumme Logo"
                    width={300}
                    height={500}
                    className="rounded-lg cursor-pointer"
                  />
                </Link>
              </aside>
            </div>
          </section>

          <section className="mt-6">
            <h3>Le salon Discord</h3>
            {/* Invitation Discord */}
            <div className="mt-4 text-center ">
              <Link
                href="https://discord.com/invite/Jhgw7C96Jf"
                target="_blank"
                className="inline-flex items-center gap-1 bg-blue-800 hover:bg-yellow-600 text-white font-semibold py-1 px-5 rounded-lg shadow-md transition text-sm md:text-base"
              >
                <Image
                  src={Discord}
                  alt="Discord Logo"
                  width={70}
                  height={70}
                  className="rounded-lg cursor-pointer transition-transform transform hover:scale-140"
                />
                Tu as besoin d&apos;échanger&nbsp;? Viens me rejoindre sur
                Discord.
              </Link>
            </div>
            <div className="mt-2 max-w-6xl mx-auto grid md:grid-cols-[1fr_minmax(420px,1fr)] gap-2 items-center">
              {/* Colonne de gauche */}
              <div className="mb-0">
                <div className="items-center">
                  <p className="">
                    C&apos;est l&apos;endroit PARFAIT pour{' '}
                    <strong className="text-blue-800 dark:text-blue-400">
                      trouver des wheelers dans ta région
                    </strong>{' '}
                    avec qui tu pourras discuter, aller rouler ou simplement
                    prendre un café&nbsp;! <br />
                    Ce Discord a été créé spécialement pour ça&nbsp;!
                  </p>
                  <p className="mt-2">
                    Alors n&apos;hésites plus&nbsp;! Il{' '}
                    <strong className="text-blue-800 dark:text-blue-400">
                      est là pour ça
                    </strong>
                    &nbsp;: créer du lien entre passionnés ❤️.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    href={'https://discord.com/invite/Jhgw7C96Jf'}
                    target="_blank"
                    className="transition-transform transform hover:scale-125 flex items-center"
                  >
                    <Image
                      src={Discord}
                      alt="Discord Logo"
                      width={120}
                      height={120}
                      className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 transition-transform transform"
                    />
                  </Link>
                </div>
              </div>

              {/* Colonne de droite */}
              <div className="relative max-w-4xl mx-auto order-first md:order-last ">
                <Link href={Discord2.src} passHref target="_blank">
                  <Image
                    src={Discord2}
                    alt="Salon Discord de la chaîne"
                    width={900}
                    height={800}
                    className="w-full max-w-lg mx-auto rounded-2xl object-cover object-center shadow-lg"
                    priority
                    placeholder="blur"
                  />
                </Link>
              </div>
            </div>

            <div></div>
          </section>

          <section className="mt-6">
            <h3>Les associations</h3>
            <div className="blueBlock mb-2">
              <h4>
                📢 &laquo;&nbsp;Le bonheur n&apos;est réel que lorsqu&apos;il
                est partagé.&nbsp;&raquo;
              </h4>
            </div>
            {/* Carte des asso */}
            <div>
              <p className="mt-0 text-justify">
                Si tu te sens seul dans ta région, ce n&apos;est surement
                qu&apos;une fausse impression&nbsp;!
                <br />
                Des groupes et des associations existent un peu partout. Tu en
                trouveras plein sur cette carte (magnifique travail réalisé par{' '}
                <Link
                  //href={'https://leswheelerssarthois.fr/'}
                  href={'https://leswheelerssarthois.asptt.com/'}
                  passHref
                  target="_blank"
                  className="link-style"
                >
                  Les Wheelers Sarthois
                </Link>{' '}
                que je remercie) :
              </p>
              <div className="flex flex-col lg:flex-row mt-2 mb-2">
                <aside className="lg:w-7/12 flex items-center justify-center ">
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1Y9MEriN0xb-_4wEnTdJdRho7BXps4cy1&ehbc=2E312F"
                    width="640"
                    height="480"
                    className="rounded-md"
                  ></iframe>
                </aside>

                <aside className="lg:w-5/12 pt-8 lg:pt-0 lg:pl-8">
                  <p>Autant d&apos;opportunités de : </p>
                  <ul className="compactlist2 mt-1 mb-4">
                    <li>
                      <strong className="text-blue-800 dark:text-blue-400">
                        Rencontrer
                      </strong>{' '}
                      d&apos;autres passionnés.
                    </li>
                    <li>
                      <strong className="text-blue-800 dark:text-blue-400">
                        Partager
                      </strong>{' '}
                      des expériences autour de cette passion commune.
                    </li>
                    <li>
                      <strong className="text-blue-800 dark:text-blue-400">
                        Découvrir
                      </strong>{' '}
                      d&apos;autres façons de faire de la roue (freestyle,
                      randonneurs, racer, off road, acrobates, etc.).
                    </li>
                    <li>
                      <strong className="text-blue-800 dark:text-blue-400">
                        Participer
                      </strong>{' '}
                      à l&apos;organisation d&apos;événements.
                    </li>
                    <li>Faire connaitre la roue électrique.</li>
                  </ul>
                  <div className="relative w-full pb-[56.25%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      src="https://www.youtube.com/embed/iQzrhgo2XiM?si=k2ZEL-ZZFjGE6YJq"
                      title="La communauté de la roue"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                  <p className="mt-0 mb-0 text-xs place-items-center items-center text-center italic text-gray-600 dark:text-gray-400">
                    Vidéo : La communauté de la roue
                  </p>
                </aside>
              </div>
            </div>
          </section>

          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            rédigé par{' '}
            <Link
              href={'https://www.patreon.com/c/BonheursurSeine'}
              passHref
              target="_blank"
              className="link-style"
            >
              Bonheur Sur Seine
            </Link>
            <br />
            dernière mise à jour : juin 2024
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Associations
