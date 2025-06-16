'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

import { UserProfile } from '@/src/types/models'

import Image_carto from '@/public/Image_cartographie(light).jpg'
import Wikiloc from '@/public/marques/wikiloc_logo.svg'

const Practical_Vrac = () => {
  const userProfiles: UserProfile[] = [
    {
      name: 'Fabien Wheel',
      profileUrl: 'https://fr.wikiloc.com/wikiloc/user.do?id=5325392',
      imageUrl:
        'https://s2.wklcdn.com/image_177/5325392/photo.jpg?1595180668172',
    },
    {
      name: 'Olig',
      profileUrl: 'https://fr.wikiloc.com/wikiloc/user.do?id=2126120',
      imageUrl:
        'https://s2.wklcdn.com/image_70/2126120/photo.jpg?1605908986646',
    },
    {
      name: 'Tonton Polo',
      profileUrl: 'https://fr.wikiloc.com/wikiloc/user.do?id=7067439',
      imageUrl:
        'https://s0.wklcdn.com/image_235/7067439/photo.jpg?1682195125259',
    },
    {
      name: 'Marko',
      profileUrl: 'https://fr.wikiloc.com/wikiloc/user.do?id=3131352',
      imageUrl:
        'https://s0.wklcdn.com/image_104/3131352/photo.jpg?1529266630389',
    },
  ]

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
              <p className="mb-0">
                Tout le monde connait{' '}
                <Link
                  href="https://maps.google.com/"
                  target="_blank"
                  className="link-style"
                >
                  GoogleMap
                </Link>
                &nbsp;!
              </p>
              <p className="mt-0 mb-0">
                Mais il existe aussi des sites spécialisés très pratiques.
              </p>
            </aside>
            <aside className="sm:w-1/2 md:w-2/5 text-right text-xs mt-1 mb-0">
              <Image
                src={Image_carto}
                alt="Image_carto"
                width={400}
                height={195}
                className="rounded-lg cursor-pointer"
              />
            </aside>
          </div>

          {/*--------------------------------------------------------*/}
          {/*                        BLOC 2                          */}
          {/*--------------------------------------------------------*/}
          <section className="pt-3">
            <p className="text-gray-500 dark:text-gray-300 mt-0 text-right">
              <i>Citées par ordre alphabétique</i>
              😉
            </p>
            <div className="flex flex-col sm:flex-row mb-0 mt-2">
              <aside className="sm:w-1/2 mb-0 mt-0">
                <h4 className="mb-0 mt-0 text-center">Site de cartographie</h4>
                <ul className="compactlist">
                  <li>
                    <Link
                      href="https://www.cyclosm.org/"
                      target="_blank"
                      className="link-style"
                    >
                      CyclOSM
                    </Link>{' '}
                  </li>
                  <li>
                    <Link
                      href="https://fr.eurovelo.com/#routes-and-countries"
                      target="_blank"
                      className="link-style"
                    >
                      Eurovelo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://gmap2xxx.sdesimeur.com/"
                      target="_blank"
                      className="link-style"
                    >
                      Gmap2xxx
                    </Link>{' '}
                    (pour avoir des fichiers GPX)
                  </li>
                  <li>
                    <Link
                      href="https://www.opencyclemap.org/"
                      target="_blank"
                      className="link-style"
                    >
                      OpenCycle Map
                    </Link>{' '}
                  </li>
                  <li>
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
              </aside>
              {/*--------------------------------------------------------*/}
              <aside className="sm:w-1/2 mb-0 mt-0">
                <h4 className="mb-0 mt-0 text-center">Applis de navigation</h4>
                <ul className="mt-0 compactlist">
                  <li>
                    <Link
                      href="https://geovelo.app/fr/"
                      target="_blank"
                      className="link-style"
                    >
                      Géovélo
                    </Link>{' '}
                  </li>
                  <li>
                    <Link
                      href="https://www.komoot.com/fr-fr/devices"
                      target="_blank"
                      className="link-style"
                    >
                      Komoot
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://fr.wikiloc.com/outdoor-navigation-app?ref=home"
                      target="_blank"
                      className="link-style"
                    >
                      Wikiloc
                    </Link>
                  </li>
                  <li>
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
                      <FaApple />
                      <FaAndroid />
                    </Link>
                    ) proposent aussi la navigation GPS.
                  </li>
                </ul>
              </aside>
            </div>
          </section>
          {/*--------------------------------------------------------*/}
          {/*                        BLOC 3                          */}
          {/*--------------------------------------------------------*/}
          <section className="pt-8">
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
                <p>
                  <b>Wikiloc</b> est particulièrement apprécié par certains
                  wheelers. <br />2 catégories sont utilisées&nbsp;:{' '}
                  <i>&laquo;&nbsp;Monocycle de montagne&nbsp;&raquo;</i> et{' '}
                  <i>&laquo;&nbsp;Segway&nbsp;&raquo;</i>.
                </p>{' '}
                <p>
                  La plateforme permet de{' '}
                  <strong>
                    découvrir, télécharger, suivre, et enregistrer des
                    itinéraires,
                  </strong>{' '}
                  puis de les documenter (textes, photos, commentaires) et à son
                  tour de les partager&nbsp;: parfait pour aider les autres ou
                  bénéficier de leurs expériences, et ainsi organiser ses
                  propres sorties.
                </p>
              </aside>
            </div>
            {/*--------------------------------------------------------*/}
            <p className="mb-0">
              Voici quelques contributeurs très actifs pour{' '}
              <strong>découvrir de supers parcours</strong>&nbsp;:
            </p>
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {userProfiles.map((user) => (
                <Link
                  href={user.profileUrl}
                  target="_blank"
                  key={user.name}
                  className=" hover:bg-gray-300 hover:dark:bg-gray-600 rounded-xl p-2"
                >
                  <div className="flex flex-col w-full">
                    <h4 className="text-center mt-2">{user.name}</h4>
                    <div className=" flex justify-center w-full py-2">
                      <Image
                        src={
                          user.imageUrl || '/public/BonheurSurSeine_logo.png'
                        }
                        alt={user.name}
                        className="w-28 h-28 object-cover rounded-full"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                </Link>
              ))}
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
