'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

import Link from 'next/link'

const HighwayCode = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Le code de la route"
          title={<h3>🚦 Le code de la route</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          <p className="mb-8">
            Depuis le 23 octobre 2019, les roues électriques sont officiellement
            reconnues dans le Code de la Route (catégorie EDPM{' '}
            <strong>Engins de Déplacement Personnel à Moteur</strong> :{' '}
            <Link
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025043014"
              target="_blank"
              className="link-style"
            >
              §6.15 du R311-1
            </Link>
            ).
          </p>
          <div className="blueBlock mb-8">
            <h4>
              ❤️‍🩹 Quand on est sur la route, il ne faut jamais être trop
              pressé&nbsp;!
            </h4>
          </div>
          <p className="mb-8">
            Par conséquent, toutes les règles du Code de la Route
            s&apos;appliquent (alcoolémie, circulation, signalisation, etc.). Et
            pour <strong>circuler sur voies publiques</strong>, pas besoin de
            plaques d&apos;immatriculation (
            <Link
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039275482"
              target="_blank"
              className="link-style"
            >
              R317-14-1
            </Link>
            ), d&apos;un permis de conduire ou du Brevet de Sécurité Routière.
          </p>
          <p className="mb-8">
            Il y a aussi <strong>quelques spécificités à connaitre.</strong>
          </p>
          <section className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-4 md:mb-0 md:mr-4">
              <h4>CIRCULATION</h4>
              <ul className="list">
                <li>
                  Obligation d’emprunter les pistes cyclables si elles existent
                  (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048035783/"
                    target="_blank"
                    className="link-style"
                  >
                    R412-43-1
                  </Link>
                  ).
                </li>
                <li>
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
                <li>
                  Interdiction de circuler sur les trottoirs sauf dérogation (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048035783/"
                    target="_blank"
                    className="link-style"
                  >
                    R412-43-1
                  </Link>
                  ).
                </li>
                <li>
                  Interdiction de circuler sur les routes où la vitesse est
                  &gt;50km/h et hors agglomération, sauf sur pistes cyclables et
                  voies vertes (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048035783/"
                    target="_blank"
                    className="link-style"
                  >
                    R412-43-1
                  </Link>
                  ).
                </li>
                <li>
                  Interdiction de tenir un téléphone en main (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041910422/"
                    target="_blank"
                    className="link-style"
                  >
                    R412-6-1
                  </Link>
                  ).
                </li>
                <li>
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
                <li>
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
            <div>
              <h4>ÉQUIPEMENT</h4>
              <ul className="list">
                <li>
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
                <li>
                  Présence d&apos;une sonnette obligatoire (klaxon électrique
                  non valable,{' '}
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039277997"
                    target="_blank"
                    className="link-style"
                  >
                    R313-33
                  </Link>
                  ).
                </li>
                <li>
                  Feux de position non éblouissants et fixes : blanc à
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
                <li>
                  Catadioptres de couleurs nécessaires : rouge, orange et blanc
                  (
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
                <li>
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
          </section>
          <p className="mb-8">
            Ces dispositions peuvent paraitre contraignantes, mais elles sont
            importantes et efficaces pour ta propre sécurité et celle des autres
            !
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
