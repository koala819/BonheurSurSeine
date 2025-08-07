'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Image_HighwayCode from '@/public/Image_code_de_la_route(light).jpg'

const HighwayCode = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'code') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('code')
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
      id="code"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Le code de la route"
          title={<h3>🚦 Code de la route</h3>}
          indicator={<span className="chevronAccordionItem">&lsaquo;</span>}
        >
          <p className="mb-4 text-justify">
            Depuis le 23 octobre 2019, les gyroroues sont officiellement
            reconnues dans le Code de la Route (catégorie EDPM{' '}
            <strong>Engins de Déplacement Personnel à Moteur</strong>&nbsp;:{' '}
            <Link
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025043014"
              target="_blank"
              className="link-style"
            >
              §6.15 du R311-1
            </Link>
            ).
          </p>

          <div className="mb-2 flex flex-col md:flex-row items-center">
            <aside className="md:w-3/5 space-y-4 mr-1">
              <div className="blueBlock mb-1">
                <h4>
                  ❤️‍🩹 Quand on est sur la route, il ne faut jamais être trop
                  pressé&nbsp;!
                </h4>
              </div>
              <p className="mb-1 text-justify mr-3">
                Par conséquent,{' '}
                <b>TOUTES les règles du Code de la Route s&apos;appliquent</b>{' '}
                (alcoolémie, circulation, signalisation, etc.). Et pour circuler{' '}
                <strong>sur voies publiques</strong>, nul besoin de plaques
                d&apos;immatriculation (
                <Link
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039275482"
                  target="_blank"
                  className="link-style"
                >
                  R317-14-1
                </Link>
                ), d&apos;un permis de conduire ou du Brevet de Sécurité
                Routière.
              </p>
            </aside>
            <aside className="md:w-2/5 text-center text-xs mt-1 mb-1">
              <Image
                src={Image_HighwayCode}
                alt="Image_HighwayCode"
                width={400}
                height={195}
                className="rounded-lg cursor-pointer shadow-md transition-shadow"
              />
            </aside>
          </div>

          <p className="mb-4">
            Il y a <strong>quelques spécificités à connaitre.</strong>
          </p>
          {/*-------------------------------------------*/}
          {/* Section avec 2 capsules de même hauteur */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Capsule CIRCULATION */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-200">
                🚴‍♂️ CIRCULATION
              </h4>
              <ul className="list-disc space-y-2 list-inside text-sm flex-1 text-gray-800 dark:text-gray-100">
                <li className="text-justify text-sm">
                  Obligation d&apos;emprunter les pistes cyclables si elles
                  existent (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048035783/"
                    target="_blank"
                    className="link-style"
                  >
                    R412-43-1
                  </Link>
                  ).
                </li>
                <li className="text-justify text-sm">
                  Utilisation possible du panneau M12 en cédant le passage aux
                  piétons et aux autres usagers (
                  <Link
                    href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000038120387"
                    target="_blank"
                    className="link-style"
                  >
                    article 2-1 màj le 15/03/2024
                  </Link>
                  ).
                </li>
                <li className="text-justify text-sm">
                  Interdiction de circuler sur les trottoirs (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048035783/"
                    target="_blank"
                    className="link-style"
                  >
                    R412-43-1
                  </Link>
                  ).
                </li>
                <li className="text-justify text-sm">
                  Interdiction de circuler sur les routes où la vitesse est
                  &gt;50km/h et sur les routes hors agglomération, sauf sur
                  pistes cyclables et voies vertes (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048035783/"
                    target="_blank"
                    className="link-style"
                  >
                    R412-43-1
                  </Link>
                  ).
                </li>
                <li className="text-justify text-sm">
                  Interdiction de tenir un téléphone en main (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041910422/"
                    target="_blank"
                    className="link-style"
                  >
                    R412-6-1
                  </Link>{' '}
                  et{' '}
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000019277064/"
                    target="_blank"
                    className="link-style"
                  >
                    R412-6-2
                  </Link>
                  ).
                </li>
                <li className="text-justify text-sm">
                  Interdiction de porter des écouteurs ou des oreillettes (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041910422"
                    target="_blank"
                    className="link-style"
                  >
                    R412-6-1
                  </Link>
                  ).
                </li>
                <li className="text-justify text-sm">
                  Âge minimum de 14 ans (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048035778"
                    target="_blank"
                    className="link-style"
                  >
                    §I R412-43-3
                  </Link>
                  ).
                </li>
              </ul>
            </div>
            {/* Capsule ÉQUIPEMENTS */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col">
              <h4 className="font-semibold mb-3  text-gray-900 dark:text-gray-200">
                🛠️ ÉQUIPEMENT
              </h4>
              <ul className="list-disc space-y-2 list-inside text-sm flex-1 text-gray-800 dark:text-gray-100">
                <li className="text-justify text-sm">
                  Vitesse maximale de 25 km/h par construction ou par bridage (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039478722/"
                    target="_blank"
                    className="link-style"
                  >
                    §6.15 du R311-1
                  </Link>
                  ).
                </li>
                <li className="text-justify text-sm">
                  Sonnette obligatoire (klaxon électrique non valable,{' '}
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039277997"
                    target="_blank"
                    className="link-style"
                  >
                    R313-33
                  </Link>
                  ).
                </li>
                <li className="text-justify text-sm">
                  Feux de position non éblouissants et fixes&nbsp;: blanc à
                  l&apos;avant, rouge à l&apos;arrière (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042266173/"
                    target="_blank"
                    className="link-style"
                  >
                    §X. R313-4
                  </Link>
                  ,{' '}
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042266169/"
                    target="_blank"
                    className="link-style"
                  >
                    §V. R313-5
                  </Link>
                  ,{' '}
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042266141"
                    target="_blank"
                    className="link-style"
                  >
                    §IIbis. R313-14
                  </Link>
                  ,{' '}
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032401362"
                    target="_blank"
                    className="link-style"
                  >
                    R313-25
                  </Link>
                  ).
                </li>
                <li className="text-justify text-sm">
                  Catadioptres nécessaires&nbsp;: blanc à l&apos;avant, rouge à
                  l&apos;arrière, orange sur les côtés (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042266173/"
                    target="_blank"
                    className="link-style"
                  >
                    V. R313-18
                  </Link>
                  ,{' '}
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042266173/"
                    target="_blank"
                    className="link-style"
                  >
                    III. R313-19
                  </Link>
                  ,{' '}
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042266173/"
                    target="_blank"
                    className="link-style"
                  >
                    IV. R313-20
                  </Link>
                  ).
                </li>
                <li className="text-justify text-sm">
                  Interdiction de pousser ou tracter une charge ou un véhicule (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039276191"
                    target="_blank"
                    className="link-style"
                  >
                    §I R412-43-2
                  </Link>
                  ).
                </li>
              </ul>
            </div>
          </div>
          {/*-------------------------------------------*/}
          <p className="mb-8 text-justify">
            Ces dispositions peuvent paraitre contraignantes, mais elles sont{' '}
            <b>
              importantes et efficaces pour ta propre sécurité et celle des
              autres
            </b>
            &nbsp;!
          </p>
          <div className="yellowBlock mb-8">
            <h4>
              📢 Consulte régulièrement{' '}
              <Link
                href="https://www.securite-routiere.gouv.fr/reglementation-liee-aux-modes-de-deplacements/reglementation-des-edpm"
                target="_blank"
                className="link-style"
              >
                le site officiel
              </Link>{' '}
              de la Sécurité Routière.
            </h4>
          </div>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en janvier 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default HighwayCode
