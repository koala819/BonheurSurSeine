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
          title={<h3>Le code de la route</h3>}
          indicator={<strong className="chevronAccordionItem">&lt;</strong>}
        >
          <p className="mb-8">
            Le 23 octobre 2019, les roues électriques sont officiellement
            entrées dans le Code de la Route (catégorie EDPM{' '}
            <strong>Engins de Déplacement Personnel à Moteur</strong> (
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
            <h3>
              🚦 Quand on est sur la route, il ne faut jamais être trop pressé !
            </h3>
          </div>
          <p className="mb-8">
            Par conséquent, toutes les règles du Code de la Route
            s&apos;appliquent (alcoolémie, circulation, signalisation, etc.).
            Pour <strong>circuler sur voies publiques</strong>, pas besoin de
            plaque d’immatriculation (
            <Link
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039275482?isSuggest=true"
              target="_blank"
              className="link-style"
            >
              R317-14-1
            </Link>
            ), ou d&apos;un permis de conduire ou du Brevet de Sécurité
            Routière.
          </p>
          <p className="mb-8">
            Il y a aussi <strong>quelques spécificités à connaitre.</strong>
          </p>
          <section className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-4 md:mb-0 md:mr-4">
              <h4>CIRCULATION</h4>
              <ul className="list">
                <li>Emprunter les pistes cyclables si elles existent.</li>
                <li>Interdit de circuler sur les trottoirs.</li>
                <li>
                  Interdit hors agglomération sauf sur pistes cyclables et voies
                  vertes.
                </li>
                <li>Tenir un téléphone en main est interdit.</li>
                <li>Porter des écouteurs ou des oreillettes est interdit.</li>
                <li>Âge minimum de 14 ans.</li>
              </ul>
            </div>
            <div>
              <h4>ÉQUIPEMENT</h4>
              <ul className="list">
                <li>Vitesse maximale de 25 km/h par construction.</li>
                <li>
                  Présence d&apos;une sonnette nécessaire, klaxon électrique non
                  valable.
                </li>
                <li>Feux de position non éblouissants fixes requis.</li>
                <li>Catadioptres de différentes couleurs obligatoires.</li>
                <li>
                  Interdit de pousser ou tracter une charge ou un véhicule.
                </li>
              </ul>
            </div>
          </section>
          <p className="mb-8">
            Ces dispositions peuvent paraitre contraignantes, mais elles sont
            importantes et efficaces pour ta propre sécurité et celle des autres
            !
          </p>
          <div className="blueBlock mb-8">
            <h3>
              📢 Consulte régulièrement{' '}
              <Link
                href="https://www.securite-routiere.gouv.fr/reglementation-liee-aux-modes-de-deplacements/reglementation-des-edpm"
                target="_blank"
                className="link-style"
              >
                le site officiels de la Sécurité Routière
              </Link>
              .
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article rédigé en janvier 2024
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default HighwayCode
