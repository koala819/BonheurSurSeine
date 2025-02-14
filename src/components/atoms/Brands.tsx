'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

import Image from 'next/image'
import Link from 'next/link'

import gyroroues from '@/public/gyroroues_bss202502.jpg'

const Brands = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <h2>Le marché et les principales marques</h2>
      <span>3 catégories se distinguent :</span>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Urbaine"
          title={<span>Urbaine</span>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <ul className="list">
            <li>
              De part leur petite taille, ces roues sont souvent proposées en
              entrée de gamme. Mais elles sont absolument parfaites pour
              découvrir le pouvoir de la roue électrique :{' '}
              <strong>la liberté et la praticité</strong> !
            </li>
            <li>
              Compactes, faciles à transporter avec leur trolley, ultra
              maniables et assez légères (max 25kg), elles offrent ce que la
              roue a de meilleur. Les <strong>centres-villes</strong> et les{' '}
              <strong>pistes cyclables</strong> sont leur terrain de jeux
              favori. Elles sont parfaites pour rester <strong>discret</strong>{' '}
              (sous un siège, dans un magasin), pour l&apos;intermodalité, et
              faire des trajets de quelques kilomètres.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Hybride/polyvalente"
          title={<span>Hybride/polyvalente</span>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <ul className="list">
            <li>
              Un peu plus grosses et généralement équipées d&apos;une
              suspension, ces roues offrent plus <strong>de confort</strong> et
              plus <strong>d&apos;autonomie</strong>. Cependant, avec un poids
              dépassant parfois les 35kg, elles perdent en discrétion et en
              praticité malgré leurs atouts
            </li>
            <li>
              Leur taille leur permet de circuler en grande{' '}
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
          title={<span>Loisir</span>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <ul className="list">
            <li>
              Ici, <strong>aucune limite</strong> de taille, ni de poids ! La
              praticité n&apos;est plus un argument car ces modèles sont plutôt
              dédiés à la pratique sportive : performance ou grande randonnée.
              Ces roues affichent des{' '}
              <strong>spécifications techniques de haute volée</strong>{' '}
              (voltage, autonomie, puissance, suspension, vitesses max) que
              finalement peu de gens exploitent totalement.
            </li>
            <li>
              On est sur les poids lourds de la micromobilité (40kg est un
              minimum). Avec seulement quelques modèles au début, l&apos;offre
              s&apos;est depuis étoffée au fur et a mesure des améliorations
              techniques (suspension, voltage).
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
      <p>
        Le marché est actuellement dominé par quelques fabricants, tous basés en
        Chine (près de Shenzen).
      </p>
      <p>
        <i>
          Aucun favoritisme de ma part, les marques sont citées par ordre
          alphabétique.
        </i>
        😉
      </p>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Begode (précédemment Gotway)"
          title={
            <span className="brandGyroroue">Begode (précédemment Gotway)</span>
          }
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <span>
            Ce fabricant historique (présent depuis 2014) s&apos;est imposé
            comme une référence pour de nombreux passionnés, grâce à une très
            large gamme de modèles axés sur la performance (allant des très
            petites aux très grosses) et grâce à un renouvellement constant de
            sa gamme.
          </span>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Extreme Bull"
          title={<span className="brandGyroroue">Extreme Bull</span>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <span>
            Marque apparue en 2021, elle partage son ADN et ses ateliers de
            fabrication avec Begode pour continuer à repousser les limites.
          </span>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Inmotion"
          title={<span className="brandGyroroue">Inmotion</span>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <span>
            Créé en 2012, ce fabricant propose une gamme lisible et diversifiée,
            avec des modèles adaptés aussi bien aux débutants qu&apos;aux
            experts. Ses modèles associent performances, praticité, sécurité et
            design soigné.
          </span>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Kingsong"
          title={<span className="brandGyroroue">Kingsong</span>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <span>
            Présent sur le marché depuis 2014, cette marque est reconnue pour
            ses modèles offrant un équilibre entre performance et sécurité. Elle
            fut la première à proposer un modèle avec suspension.
          </span>
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Leaperkim / Veteran"
          title={<span className="brandGyroroue">Leaperkim / Veteran</span>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <span>
            Apparu en 2020, ce fabricant a rapidement gagné en popularité auprès
            des connaisseurs grâce à ses roues robustes et puissantes, et une
            belle qualité de fabrication.
          </span>
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="Ninebot by Segway"
          title={<span className="brandGyroroue">Ninebot by Segway</span>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <span>
            Cette marque, connue pour ses trottinettes électriques, a fabriqué
            quelques modèles populaires et au design soigné entre 2014 et 2018.
            Elle s&apos;est depuis retirée du marché.
          </span>
        </AccordionItem>
        <AccordionItem
          key="7"
          aria-label="Nosfet"
          title={<span className="brandGyroroue">Nosfet</span>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <span>
            Récemment créée en 2024, Nosfet est la plus jeune et la plus petite
            des marques de roues. Fondée par d&apos;anciens collaborateurs de
            chez Kingsong, cette marque a l&apos;ambition de proposer des
            modèles haut de gamme et innovants. Leurs 2 premiers modèles ont
            déjà suscité l&apos;intérêt et la curiosité de nombreux wheelers
            grâce à leurs performances, leurs suspensions avancées et leur
            design.
          </span>
        </AccordionItem>
      </Accordion>
      <p>
        Certaines marques comme Solowheel, RockWheel ou IPS ont disparues. Il
        existe également d&apos;autres mais celles-ci sont moins connues et/ou
        moins appréciées des connaisseurs. Les caractéristiques de leurs modèles
        n&apos;offrent pas les mêmes garanties (sécurité, performance) que
        celles qu&apos;on retrouve chez les principaux leaders du marché.
      </p>
      <div className="md:ml-6 blueBlock">
        <h3>⚠️ &quot;La roue parfaite n&apos;existe pas.&quot;</h3>
        <p>
          D&apos;expérience, chaque modèle excelle pour un usage précis, avec
          ses forces, ses qualités et ses faiblesses.
        </p>
      </div>
    </section>
  )
}

export default Brands
