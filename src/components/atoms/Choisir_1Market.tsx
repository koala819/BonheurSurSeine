'use client'

import { Accordion, AccordionItem } from '@heroui/react'

import Link from 'next/link'

const Market = () => {
  return (
    <section
      id="marche"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <h2>Le marché</h2>
      <p className="mt-0 mb-0">
        Sur la base de mes tests, il est possible de distinguer{' '}
        <strong>
          <span className="text-brown-700">3 grandes catégories</span>
        </strong>{' '}
        sur le marché&nbsp;:
      </p>
      <Accordion isCompact>
        <AccordionItem
          key="1"
          aria-label="Centre-Ville"
          title={<span className="profilGyroroue">Centre-Ville</span>}
          indicator={
            <span className="chevronAccordionItemsmall1 mr-1">&lsaquo;</span>
          }
        >
          <ul className="list-disc pl-4 space-y-1 mb-0 ml-4">
            <li className="text-justify">
              De part leur petite taille, ces roues sont souvent proposées en
              entrée de gamme. Mais ce sont elles{' '}
              <strong className="text-brown-700">
                les vraies reines de la micro-mobilité
              </strong>
              . Car elles sont absolument parfaites pour découvrir le pouvoir de
              la roue électrique&nbsp;:{' '}
              <strong className="text-brown-700">
                la liberté et la praticité
              </strong>
              &nbsp;!
            </li>
            <li className="text-justify">
              Compactes, faciles à transporter avec leur trolley, ultra
              maniables et assez légères (max 25kg), elles offrent ce que la
              roue a de meilleur. Les{' '}
              <strong className="text-brown-700">centres-villes</strong> et les{' '}
              <strong className="text-brown-700">pistes cyclables</strong> sont
              leur terrain de jeux favori. Elles sont parfaites pour{' '}
              <strong className="text-brown-700">rester discret</strong> (sous
              un siège, dans un magasin), pour l&apos;intermodalité, et faire
              des trajets de quelques kilomètres.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Agglomération"
          title={<span className="profilGyroroue">Agglomération</span>}
          indicator={
            <span className="chevronAccordionItemsmall1 mr-1">&lsaquo;</span>
          }
        >
          <ul className="list-disc pl-4 space-y-1 mb-0 ml-4">
            <li className="text-justify">
              Un peu plus grosses et généralement équipées d&apos;une
              suspension, ces roues offrent{' '}
              <strong className="text-brown-700">plus de confort</strong> et{' '}
              <strong className="text-brown-700">plus d&apos;autonomie</strong>.
              Cependant, avec un poids dépassant parfois les 35kg, elles perdent
              en discrétion et en praticité malgré tous leurs atouts.
            </li>
            <li className="text-justify">
              Leur taille leur permet de circuler{' '}
              <strong className="text-brown-700">en agglomération</strong>, et
              un peu plus sereinement en ville sur la chaussée au côté des
              autres véhicules. Avec ces roues, on peut aller au travail la
              semaine, et aller aussi se promener le week-end !
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Loisir"
          title={<span className="profilGyroroue">Loisir</span>}
          indicator={
            <span className="chevronAccordionItemsmall1 mr-1">&lsaquo;</span>
          }
        >
          <ul className="list-disc pl-4 space-y-1 mb-0 ml-4">
            <li className="text-justify">
              Ici, <strong className="text-brown-700">aucune limite</strong> de
              taille, ni de poids ! La praticité n&apos;est plus un argument,
              car ces modèles sont plutôt dédiés à la pratique sportive :
              performance ou grande randonnée. Ces roues affichent des{' '}
              <strong className="text-brown-700">
                spécifications techniques de haute volée
              </strong>{' '}
              (voltage, autonomie, puissance, suspension, vitesses max) que
              finalement peu de gens pourront exploiter totalement.
            </li>
            <li className="text-justify">
              On est sur les{' '}
              <strong className="text-brown-700">poids lourds</strong> de la
              micromobilité (40kg est un minimum). Avec seulement quelques
              modèles au début, l&apos;offre s&apos;est étoffée au fur et a
              mesure des améliorations techniques (suspension, voltage).
            </li>
          </ul>
        </AccordionItem>
      </Accordion>

      {/*--------------------------------------------------------*/}
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
        dernière mise à jour : février 2025
      </p>
    </section>
  )
}

export default Market
