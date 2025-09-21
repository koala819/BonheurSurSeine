'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

//import ReactPlayer from 'react-player'
import Image from 'next/image'
import Link from 'next/link'

import Discord from '@/public/Discord.png'
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
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-700 rounded-lg p-6 mb-6"
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
                  Leur site est rempli d&apos;informations utiles.
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
            <h3>Les associations</h3>
            <div className="blueBlock mb-2">
              <h4>
                📢 &laquo;&nbsp;Le bonheur n&apos;est réel que lorsqu&apos;il
                est partagé.&nbsp;&raquo;
              </h4>
            </div>
            <div className="flex flex-col sm:flex-row mb-0">
              <aside className="sm:w-8/12 flex items-center justify-center">
                <p className="text-justify">
                  N&apos;hésite pas à{' '}
                  <Link
                    href="https://discord.com/invite/Jhgw7C96Jf"
                    target="_blank"
                    className="w-12 h-12 md:w-16 md:h-16
                text-blue-800 hover:text-yellow-500
                dark:text-blue-400
                dark:hover:text-yellow-500"
                  >
                    <b>rejoindre le Discord</b>
                  </Link>{' '}
                  pour rentrer en contact avec des wheelers de ta région&nbsp;:
                  il a été{' '}
                  <strong className="text-blue-800 dark:text-blue-400">
                    créé pour ça&nbsp;!
                  </strong>
                </p>
              </aside>

              <aside className="sm:w-4/12 flex items-center justify-center">
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
                    className="rounded-lg cursor-pointer opacity-90 hover:opacity-100 transition-transform transform hover:scale-115"
                  />
                </Link>
              </aside>
            </div>

            <p className="mt-0 text-justify">
              On trouve des groupes et des associations un peu partout. Tu en
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
          </section>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en juin 2024
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Associations
