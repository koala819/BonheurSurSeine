'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

import Image from 'next/image'
import Link from 'next/link'

import gyroroues from '@/public/gyroroues_bss202502.jpg'

const Brands = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Le marché et les principales marques"
          title={<h2>Le marché et les principales marques</h2>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          <span className="mt-0 mb-0">
            Sur la base de mes test, le marché peut être divisé en 3 catégories
            principales&nbsp;:
          </span>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Urbaine"
              title={<span className="profilGyroroue">Urbaine</span>}
              indicator={
                <span className="chevronAccordionItemsmall1">&lsaquo;</span>
              }
            >
              <ul className="list-disc pl-4 space-y-1 mb-0 ml-4">
                <li>
                  De part leur petite taille, ces roues sont souvent proposées
                  en entrée de gamme. Mais elles sont absolument parfaites pour
                  découvrir le pouvoir de la roue électrique&nbsp;:{' '}
                  <strong>la liberté et la praticité</strong>&nbsp;!
                </li>
                <li>
                  Compactes, faciles à transporter avec leur trolley, ultra
                  maniables et assez légères (max 25kg), elles offrent ce que la
                  roue a de meilleur. Les <strong>centres-villes</strong> et les{' '}
                  <strong>pistes cyclables</strong> sont leur terrain de jeux
                  favori. Elles sont parfaites pour rester{' '}
                  <strong>discret</strong> (sous un siège, dans un magasin),
                  pour l&apos;intermodalité, et faire des trajets de quelques
                  kilomètres.
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Hybride/polyvalente"
              title={
                <span className="profilGyroroue">Hybride/polyvalente</span>
              }
              indicator={
                <span className="chevronAccordionItemsmall1">&lsaquo;</span>
              }
            >
              <ul className="list-disc pl-4 space-y-1 mb-0 ml-4">
                <li>
                  Un peu plus grosses et généralement équipées d&apos;une
                  suspension, ces roues offrent plus <strong>de confort</strong>{' '}
                  et plus <strong>d&apos;autonomie</strong>. Cependant, avec un
                  poids dépassant parfois les 35kg, elles perdent en discrétion
                  et en praticité malgré leurs atouts
                </li>
                <li>
                  Leur taille leur permet de circuler en{' '}
                  <strong>agglomération</strong>, et un peu plus sereinement en
                  ville sur la chaussée au côté des autres véhicules. Avec ces
                  roues, on peut aller au travail la semaine, et aller aussi se
                  promener le week-end !
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Loisir"
              title={<span className="profilGyroroue">Loisir</span>}
              indicator={
                <span className="chevronAccordionItemsmall1">&lsaquo;</span>
              }
            >
              <ul className="list-disc pl-4 space-y-1 mb-0 ml-4">
                <li>
                  Ici, <strong>aucune limite</strong> de taille, ni de poids !
                  La praticité n&apos;est plus un argument car ces modèles sont
                  plutôt dédiés à la pratique sportive : performance ou grande
                  randonnée. Ces roues affichent des{' '}
                  <strong>spécifications techniques de haute volée</strong>{' '}
                  (voltage, autonomie, puissance, suspension, vitesses max) que
                  finalement peu de gens pourront exploiter totalement.
                </li>
                <li>
                  On est sur les poids lourds de la micromobilité (40kg est un
                  minimum). Avec seulement quelques modèles au début,
                  l&apos;offre s&apos;est depuis étoffée au fur et a mesure des
                  améliorations techniques (suspension, voltage).
                </li>
              </ul>
            </AccordionItem>
          </Accordion>
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
          <p className="mt-8 mb-0">
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
          <Accordion isCompact>
            <AccordionItem
              key="1"
              aria-label="Begode (auparavant Gotway)"
              title={
                <span className="brandGyroroue">
                  Begode (auparavant Gotway)
                </span>
              }
              indicator={
                <span className="chevronAccordionItemsmall2">&lsaquo;</span>
              }
            >
              <p className="ml-4">
                Ce fabricant historique (présent depuis 2014) s&apos;est imposé
                comme une référence pour de nombreux passionnés, grâce à une
                très large gamme de modèles axés sur la performance (allant des
                très petites aux très grosses) et un renouvellement constant de
                sa gamme.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Extreme Bull"
              title={<span className="brandGyroroue">Extreme Bull</span>}
              indicator={
                <span className="chevronAccordionItemsmall2">&lsaquo;</span>
              }
            >
              <p className="ml-4">
                Marque apparue en 2021, elle partage son ADN et ses ateliers de
                fabrication avec Begode pour continuer à repousser les limites.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Inmotion"
              title={<span className="brandGyroroue">Inmotion</span>}
              indicator={
                <span className="chevronAccordionItemsmall2">&lsaquo;</span>
              }
            >
              <p className="ml-4">
                Créé en 2012, ce fabricant propose une gamme lisible et
                diversifiée, avec des modèles adaptés aussi bien aux débutants
                qu&apos;aux experts. Ses modèles associent performances,
                praticité, sécurité et design soigné.
              </p>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Kingsong"
              title={<span className="brandGyroroue">Kingsong</span>}
              indicator={
                <span className="chevronAccordionItemsmall2">&lsaquo;</span>
              }
            >
              <p className="ml-4">
                Présent sur le marché depuis 2014, cette marque est reconnue
                pour ses modèles offrant un équilibre entre performance et
                sécurité. Elle fut la première à proposer un modèle avec
                suspension.
              </p>
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Leaperkim / Veteran"
              title={<span className="brandGyroroue">Leaperkim / Veteran</span>}
              indicator={
                <span className="chevronAccordionItemsmall2">&lsaquo;</span>
              }
            >
              <p className="ml-4">
                Apparu en 2020, ce fabricant a rapidement gagné en popularité
                auprès des connaisseurs grâce à ses roues robustes et
                puissantes, et une belle qualité de fabrication.
              </p>
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="Ninebot by Segway"
              title={<span className="brandGyroroue">Ninebot by Segway</span>}
              indicator={
                <span className="chevronAccordionItemsmall2">&lsaquo;</span>
              }
            >
              <p className="ml-4">
                Cette marque, connue pour ses trottinettes électriques, a
                fabriqué quelques modèles populaires et au design soigné entre
                2014 et 2018. Elle s&apos;est depuis retirée du marché, mais ses
                modèles ont durablement influencé le marché par leur qualité,
                leur design et leur fiabilité.
              </p>
            </AccordionItem>
            <AccordionItem
              key="7"
              aria-label="Nosfet"
              title={<span className="brandGyroroue">Nosfet</span>}
              indicator={
                <span className="chevronAccordionItemsmall2">&lsaquo;</span>
              }
            >
              <p className="ml-4">
                Récemment créée en 2024, Nosfet est la plus jeune et la plus
                petite des marques de roues. Fondée par d&apos;anciens
                collaborateurs de chez Kingsong, cette marque a l&apos;ambition
                de proposer des modèles haut de gamme et innovants. Leurs 2
                premiers modèles ont déjà suscité l&apos;intérêt et la curiosité
                de nombreux wheelers grâce à leurs performances, leurs
                suspensions avancées et leur design.
              </p>
            </AccordionItem>
          </Accordion>
          <p>
            Certaines marques comme Solowheel, RockWheel ou IPS ont disparues.
            Il existe également d&apos;autres marques, mais celles-ci sont moins
            connues ou moins appréciées des connaisseurs. Les caractéristiques
            de leurs modèles n&apos;offrent pas les mêmes garanties (sécurité,
            performance) que celles qu&apos;on retrouve chez les principaux
            leaders du marché.
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
