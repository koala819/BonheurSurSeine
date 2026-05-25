'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

//import ReactPlayer from 'react-player'
import Image from 'next/image'
import Link from 'next/link'

import Anumme from '@/public/3.debuter/Anumme.jpg'
import Discord from '@/public/3.debuter/Discord.png'
import Discord2 from '@/public/3.debuter/Discord_screenshot.jpg'

const Associations = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  //Pour l'image
  const [isOpen, setIsOpen] = useState(false)

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
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700
      rounded-lg p-2 md:p-4 mb-6
      border border-gray-200 dark:border-gray-600
      shadow-md hover:shadow-lg transition-shadow duration-300
     shadow-gray-400 hover:shadow-gray-400
     dark:shadow-neutral-900 dark:hover:shadow-neutral-950
     hover:border-sky-700    dark:hover:border-sky-600
       hover:-translate-y-[1px]"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Groupes & associations"
          title={<h3>🌍 Les groupes & associations</h3>}
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
          {/* Le Bonheur */}
          <div className="blueBlock mt-0 mb-0">
            <h4 className="mt-0 mb-0">
              📢 &laquo;&nbsp;Le bonheur n&apos;est réel que lorsqu&apos;il est
              partagé.&nbsp;&raquo;
            </h4>
          </div>

          {/* Invitation Discord */}
          <section className="mt-6">
            <h4 className="font-semibold">🟢 Le salon Discord</h4>

            <div className="ml-2 mt-4 text-center">
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
            <div className="ml-2 mt-2 max-w-6xl mx-auto grid md:grid-cols-[1fr_minmax(420px,1fr)] gap-2 items-center">
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
                    Alors n&apos;hésite plus&nbsp;! Il{' '}
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
              <div className="relative max-w-4xl mx-auto order-first md:order-last">
                <Image
                  src={Discord2}
                  alt="Salon Discord de la chaîne"
                  width={900}
                  height={800}
                  className="w-full max-w-lg mx-auto rounded-2xl object-cover object-center cursor-pointer shadow-md hover:shadow-lg dark:shadow-slate-600"
                  priority
                  placeholder="blur"
                  onClick={() => setIsOpen(true)} // 👈 ouvre la lightbox
                />
              </div>

              {/* Lightbox */}
              {isOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 pt-40"
                  onClick={() => setIsOpen(false)} // clic fond ferme
                >
                  <div className="relative max-w-5xl w-full p-4 ">
                    <button
                      className="absolute top-4 right-4 text-blue-300 text-5xl font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      ✕&nbsp;
                    </button>
                    <Image
                      src={Discord2}
                      alt="Salon Discord de la chaîne"
                      className="w-full rounded-xl shadow-lg border-medium border-blue-300"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>

            <div></div>
          </section>

          {/* ANUMME */}
          <section className="mt-6">
            <h4 className="font-semibold">
              🟢 L&apos;<span className="small-caps">ANUMME</span>
            </h4>
            <div className="blueBlock mb-4">
              <h4 className="mt-0 mb-0">
                ℹ️ Leur site est très complet et bourré d&apos;informations
              </h4>
            </div>
            <div className="max-w-6xl mx-auto gap-x-4 px-6 flex flex-col lg:flex-row">
              <aside className="lg:w-7/12 space-y-2">
                <p className="">
                  L&apos;
                  <strong>
                    Association Nationale des Utilisateurs de Micro-Mobilité
                    Électrique
                  </strong>{' '}
                  a été créée par des passionnés afin de promouvoir et défendre
                  l&apos;utilisation des EDPM (roues, trottinettes, e-skate).
                </p>
                <p>Leur site est rempli d&apos;informations utiles.</p>
              </aside>

              <aside className="lg:w-5/12 flex items-center justify-center">
                <Link href={'https://www.anumme.fr/'} passHref target="_blank">
                  <Image
                    src={Anumme}
                    alt="Anumme Logo"
                    width={300}
                    height={500}
                    className="rounded-lg cursor-pointer shadow-md hover:shadow-lg dark:shadow-slate-600"
                  />
                </Link>
              </aside>
            </div>
          </section>

          {/*--------------------------------------------*/}
          {/*              Secion asso                   */}
          {/*--------------------------------------------*/}
          <section className="mt-6">
            <h4 className="font-semibold">🟢 Les associations</h4>
            {/* ------------------ Comment ça marche ------------------ */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-4 items-center px-6">
              <div className="place-content-center mb-4">
                <p className="mt-0 mb-0">
                  Ce sont autant d&apos;opportunités de :{' '}
                </p>
                <ul className="compactlist2 mt-0 mb-2">
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
                    d&apos;autres façons de faire de la roue (polowheel,
                    freestyle, randonneurs, racer, off-road, acrobates, etc.).
                  </li>
                  <li>
                    <strong className="text-blue-800 dark:text-blue-400">
                      Participer
                    </strong>{' '}
                    à l&apos;organisation d&apos;événements.
                  </li>
                  <li>Faire connaître la roue électrique.</li>
                </ul>
                <p className="mt-0 mb-0">
                  Si tu te sens seul dans ta région, ce n&apos;est sûrement
                  qu&apos;une fausse impression&nbsp;!
                  <br />
                  Des groupes et des associations existent un peu partout.
                </p>
                <p className="mt-0 mb-2">
                  Tu en trouveras plein sur cette carte (magnifique travail
                  réalisé par{' '}
                  <Link
                    //href={'https://leswheelerssarthois.fr/'}
                    href={'https://leswheelerssarthois.asptt.com/'}
                    passHref
                    target="_blank"
                    className="link-style"
                  >
                    Les Wheelers Sarthois
                  </Link>{' '}
                  que je remercie).
                </p>
              </div>
              {/* ------------------ Vidéo ------------------ */}
              <div className="place-content-center place-items-center order-first lg:order-last">
                <div className="w-full sm:w-4/5 md:w-3/4 lg:w-full aspect-video rounded-xl shadow-md overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/iQzrhgo2XiM?si=k2ZEL-ZZFjGE6YJq"
                    title="La communauté de la roue"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 text-center">
                  La communauté de la roue
                </p>
              </div>
            </div>
            {/* ------------------ GOOGLE MAPS ------------------ */}
            <div className="place-items-center w-full">
              <div className="w-full aspect-[16/9] min-h-[800px]">
                <iframe
                  src="https://wheelerssarthois.github.io/Groupes-EDPM/"
                  className="w-full h-full rounded-md"
                  scrolling="no"
                ></iframe>
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
            dernière mise à jour : avril 2026
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Associations
