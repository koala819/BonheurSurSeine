'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

import { WikilocProfil } from '@/src/types/models'

import Wikiloc from '/public/marques/wikiloc_logo.svg'

import { createClient } from '@/prismicio'
import Image_carto from '@/public/Image_cartographie(light).jpg'

/*import { ImageField, KeyTextField, NumberField } from '@prismicio/client'*/

const Practical_Vrac = () => {
  const [userProfiles, setUserProfiles] = useState<WikilocProfil[]>([])
  useEffect(() => {
    const fetchWikilocProfils = async () => {
      const client = createClient()
      const response = await client.getAllByType('wikiloc_contributeur')

      const formatted: WikilocProfil[] = response
        .map((doc) => ({
          rank: doc.data.rank,
          nom: doc.data.nom,
          profileUrl: doc.data.profileurl,
          image: doc.data.image,
        }))
        .sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0)) // Tri par ordre croissant

      setUserProfiles(formatted)
    }

    fetchWikilocProfils()
  }, [])

  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'navi') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('navi')
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
      id="navi"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Trouver son chemin : applis & cartes"
          title={<h3>🛣️ Trouver son chemin : applis & cartes</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          {/*--------------------------------------------------------*/}
          {/*                        BLOC 1                          */}
          {/*--------------------------------------------------------*/}
          <div className="mt-0 mb-0 flex flex-col sm:flex-row items-center">
            <aside className="sm:w-1/2 md:w-3/5 space-y-2 mr-4">
              <div className="blueBlock mb-3">
                <h4>
                  📢 En 2 mots&nbsp;: <br />
                  &emsp;&emsp;&laquo;&nbsp;Allons rouler&nbsp;!&nbsp;&raquo;
                </h4>
              </div>
              <p className="mb-0 ml-3">
                Tout le monde connait{' '}
                <Link
                  href="https://maps.google.com/"
                  target="_blank"
                  className="link-style"
                >
                  Google&nbsp;Map
                </Link>
                &nbsp;! Mais ce n&apos;est pas le plus adapté&nbsp;!
                <br />
                Il existe d&apos;autres sites spécialisés très pratiques.
              </p>
            </aside>
            <aside className="sm:w-1/2 md:w-2/5 text-right text-xs mt-1 mb-0">
              <Image
                src={Image_carto}
                alt="Image_carto"
                width={400}
                height={195}
                className="rounded-lg cursor-pointer shadow-md transition-shadow"
              />
            </aside>
          </div>

          {/*--------------------------------------------------------*/}
          {/*                        BLOC 2                          */}
          {/*--------------------------------------------------------*/}
          <section className="pt-3">
            <p className="text-gray-500 dark:text-gray-300 mt-0 text-right text-small">
              <i>Citées par ordre alphabétique</i>
              😉
            </p>

            {/* Section avec 2 capsules de même hauteur */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Capsule CIRCULATION */}
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-200">
                  🗺️ Site de cartographie
                </h4>
                <ul className="list-disc space-y-2 list-inside text-sm flex-1 text-gray-800 dark:text-gray-100">
                  <li className="text-justify text-sm">
                    <Link
                      href="https://www.cyclosm.org/"
                      target="_blank"
                      className="link-style"
                    >
                      CyclOSM
                    </Link>{' '}
                  </li>
                  <li className="text-justify text-sm">
                    <Link
                      href="https://fr.eurovelo.com/#routes-and-countries"
                      target="_blank"
                      className="link-style"
                    >
                      Eurovelo
                    </Link>
                  </li>
                  <li className="text-justify text-sm">
                    <Link
                      href="https://gmap2xxx.sdesimeur.com/"
                      target="_blank"
                      className="link-style"
                    >
                      Gmap2xxx
                    </Link>{' '}
                    (pour avoir des fichiers GPX)
                  </li>
                  <li className="text-justify text-sm">
                    <Link
                      href="https://www.opencyclemap.org/"
                      target="_blank"
                      className="link-style"
                    >
                      OpenCycle Map
                    </Link>{' '}
                  </li>
                  <li className="text-justify text-sm">
                    <Link
                      href="https://www.af3v.org/les-voies-vertes/carte-du-schema-national-des-veloroutes-et-voies-vertes/"
                      target="_blank"
                      className="link-style"
                    >
                      Voies vertes
                    </Link>{' '}
                    (cartographiées par l&apos;AF3V)
                  </li>
                </ul>
              </div>
              {/* Capsule ÉQUIPEMENTS */}
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col">
                <h4 className="font-semibold mb-3  text-gray-900 dark:text-gray-200">
                  📲 Applis de navigation
                </h4>
                <ul className="list-disc space-y-2 list-inside text-sm flex-1 text-gray-800 dark:text-gray-100">
                  <li className="text-justify text-sm">
                    <Link
                      href="https://geovelo.app/fr/"
                      target="_blank"
                      className="link-style"
                    >
                      Géovélo
                    </Link>{' '}
                  </li>
                  <li className="text-justify text-sm">
                    <Link
                      href="https://www.komoot.com/fr-fr/devices"
                      target="_blank"
                      className="link-style"
                    >
                      Komoot
                    </Link>
                  </li>
                  <li className="text-justify text-sm">
                    <Link
                      href="https://fr.wikiloc.com/outdoor-navigation-app?ref=home"
                      target="_blank"
                      className="link-style"
                    >
                      Wikiloc
                    </Link>
                  </li>
                  <li className="text-justify text-sm">
                    Certaines applications dédiées à la roue (Darknessboot{' '}
                    <Link
                      href="https://apps.apple.com/fr/app/darknessbot/id1108403878"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link-style inline-flex items-center gap-x-1"
                    >
                      <FaApple />
                    </Link>
                    &nbsp;
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.darknessproduction.darknessbot"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link-style inline-flex items-center gap-x-1"
                    >
                      <FaAndroid />
                    </Link>{' '}
                    et EUC&nbsp;World{' '}
                    <Link
                      href="https://euc.world/"
                      target="_blank"
                      className="link-style inline-flex items-center gap-x-1"
                    >
                      <FaAndroid />
                    </Link>
                    ) proposent aussi la navigation GPS.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/*--------------------------------------------------------*/}
          {/*                        BLOC 3                          */}
          {/*--------------------------------------------------------*/}
          <section className="pt-4">
            <div className="flex flex-col sm:flex-row mb-4">
              <aside className="sm:w-1/3 lg:w-1/3 flex items-center justify-center">
                <Link href={'https://fr.wikiloc.com/'} passHref target="_blank">
                  <Image
                    src={Wikiloc}
                    alt="Wikiloc Logo"
                    width={225}
                    height={300}
                    className="rounded-lg cursor-pointer"
                  />
                </Link>
              </aside>
              <aside className="sm:w-2/3 lg:w-2/3 space-y-3 mb-1 ml-2">
                <p className="text-justify">
                  <b>Wikiloc</b> est particulièrement apprécié par certains
                  wheelers. Deux catégories sont utilisées&nbsp;:{' '}
                  <i>&laquo;&nbsp;Monocycle de montagne&nbsp;&raquo;</i> et{' '}
                  <i>&laquo;&nbsp;Segway&nbsp;&raquo;</i>.
                </p>
                <p className="mb-0">
                  Voici quelques contributeurs très actifs pour{' '}
                  <strong>découvrir de supers parcours</strong>&nbsp;:
                </p>
              </aside>
            </div>
            {/*--------------------------------------------------------*/}
            <div className="pt-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2">
              {userProfiles.map((user) => (
                <Link
                  href={user.profileUrl?.url || '#'}
                  target="_blank"
                  key={user.nom}
                  className="hover:bg-gray-300 hover:dark:bg-gray-600 rounded-xl p-2"
                >
                  <div className="flex flex-col w-full">
                    <h4 className="text-center mt-1 mb-0">{user.nom}</h4>
                    <div className="flex justify-center w-full py-1">
                      <Image
                        src={user.image?.url || '/BonheurSurSeine_logo.png'}
                        alt="{user.nom}"
                        className="w-28 h-28 object-cover rounded-full"
                        width={250}
                        height={250}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          {/*--------------------------------------------------------*/}
          {/*                        BLOC 4                          */}
          {/*--------------------------------------------------------*/}
          <section className="mt-4 pt-1">
            <div className="flex flex-col sm:flex-row mb-0">
              <aside className="sm:w-1/2 md:w-2/5 lg:w-2/5 flex text-justify">
                <p className="text-justify">
                  La plateforme permet de{' '}
                  <strong>
                    découvrir, télécharger, suivre, et enregistrer des
                    itinéraires,
                  </strong>{' '}
                  puis de les documenter (textes, photos, commentaires) et à son
                  tour de les partager&nbsp;! <br />
                  Parfait pour aider les autres ou bénéficier de leurs
                  expériences, et ainsi organiser ses propres sorties&nbsp;!
                  <br />
                  <br />
                  <strong>A toi de jouer&nbsp;!</strong>
                </p>
              </aside>
              <aside className="sm:w-1/2 md:w-3/5 lg:w-3/5 flex flex-col space-y-0 place-items-center">
                <div className="w-full max-w-[90%] aspect-video">
                  <iframe
                    className="w-full h-full rounded-xl shadow"
                    /*width="560"
                    height="315"*/
                    src="https://www.youtube.com/embed/dB7rl8ruHjs?si=K0JHPG-XTTJoTU1e"
                    title="Apprendre à tracer un parcours de randonnée (méthode
                  simple)"
                    /*frameborder="0"*/
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    /*referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen*/
                  ></iframe>
                </div>
                <p className="mt-0 mb-0 text-xs place-items-center items-center text-center italic text-gray-600 dark:text-gray-400">
                  Apprendre à tracer un parcours de randonnée (méthode simple)
                </p>
              </aside>
            </div>
          </section>
          {/*--------------------------------------------------------*/}
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en juin 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Vrac
