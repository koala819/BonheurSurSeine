'use client'

import { Accordion, AccordionItem, Checkbox } from '@nextui-org/react'

import Image from 'next/image'
import Link from 'next/link'

import gyroroues from '@/public/gyroroues.jpg'

const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 text-lg">
      <section className="mb-8">
        <h1 className="text-4xl font-semibold mb-4">Choisir sa roue</h1>
        <div className="mb-8 flex flex-col-reverse md:flex-row items-center">
          <aside className="md:w-1/2 text-center md:text-left space-y-4 ">
            <p>
              L&apos;important est d&apos;avoir une roue adaptée à son
              utilisation.<span className="font-semibold"> Le piège</span>, ce
              serait de{' '}
              <span className="font-semibold">
                ne regarder que les spécifications techniques
              </span>{' '}
              et de{' '}
              <span className="font-semibold">
                n&apos;être attiré que par les nouvelles roues qui arrivent
              </span>{' '}
              sur le marché.
            </p>
            <p>
              Or, le choix se fait en fonction de ses goûts, de sa sensibilité,
              de sa situation, de son style de conduite et d&apos;autres{' '}
              <span className="font-semibold">critères personnels.</span>
            </p>
          </aside>
          <aside className="md:w-1/2 md:ml-6 mt-4 md:mt-0 bg-blue-100 dark:bg-cyan-800 p-4 rounded space-y-8">
            <p className="font-semibold">
              📢 &quot;La meilleure roue, c’est celle qu’on a sous les pieds
              !&quot;
            </p>
            <p>
              Pas besoin d’avoir la dernière roue du marché pour ressentir le
              bonheur de rouler.
            </p>
          </aside>
        </div>
        <p>
          J&apos;invite chacun, quand il le peut, à tester les roues pour se
          faire son propre avis.
        </p>
      </section>

      <section className="my-8 space-y-4">
        <h2 className="text-4xl font-semibold mb-4">
          Le marché et les principales marques
        </h2>
        <span>3 catégories se distinguent :</span>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Les citadines"
            title={<span className="text-xl font-semibold">Les citadines</span>}
          >
            <ul className="list-disc pl-4 space-y-4">
              <li>
                Souvent proposées en entrée de gamme, elles sont absolument
                parfaites pour découvrir le pouvoir de la roue électrique : la
                liberté !
              </li>
              <li>
                Compactes, ultra maniables et légères (max 20kg), elles offrent
                ce que la roue a de meilleur. Les centres-villes et les pistes
                cyclables sont leur terrain de jeux favori. Elles sont parfaites
                pour rester discret, pour l’intermodalité, et faire des trajets
                de quelques kilomètres.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Les polyvalentes"
            title={
              <span className="text-xl font-semibold">Les polyvalentes</span>
            }
          >
            <ul className="list-disc pl-4 space-y-4">
              <li>
                Le cœur du marché : ni trop grosses (même si à présent le poids
                dépasse les 30kg), ni trop petites, confortables, ergonomiques,
                avec de bonnes autonomies, ces modèles présentent de nombreux
                avantages. Les plus imposantes proposent même une suspension.
              </li>
              <li>
                Avec ces roues, on peut aller au travail la semaine, et aller se
                promener le week-end !
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Les randonneuses"
            title={
              <span className="text-xl font-semibold">Les randonneuses</span>
            }
          >
            <ul className="list-disc pl-4 space-y-4">
              <li>
                Ici, aucune limite de taille, ni de poids ! Ces modèles sont
                plutôt dédiés à la pratique sportive : performance ou grande
                randonnée. Ces roues affichent des spécifications techniques de
                haute volée (voltage, autonomie, puissance, suspension, vitesses
                max) que finalement peu de gens exploitent.
              </li>
              <li>
                On est sur les poids lourds de la micromobilité (40kg est un
                minimum). Avec seulement quelques modèles au début, l’offre
                s’est depuis étoffée au fur et a mesure des améliorations
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
          Le marché est actuellement dominé par quelques fabricants, tous basés
          en Chine (près de Shenzen).
        </p>
        <p>
          Aucun favoritisme de ma part, les marques sont citées par ordre
          alphabétique.😉
        </p>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Begode (précédemment Gotway)"
            title={
              <span className="text-xl font-semibold text-brown-700">
                Begode (précédemment Gotway)
              </span>
            }
          >
            <span>
              Ce fabricant historique (présent depuis 2014) s’est imposé comme
              une référence pour de nombreux passionnés, grâce à une très large
              gamme de modèles axés sur la performance (allant des très petites
              aux très grosses) et grâce à un renouvellement constant de sa
              gamme.
            </span>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Extreme Bull"
            title={
              <span className="text-xl font-semibold text-brown-700">
                Extreme Bull
              </span>
            }
          >
            <span>
              Marque apparue en 2021, elle partage son ADN et ses ateliers de
              fabrication avec Begode pour continuer à repousser les limites.
            </span>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Inmotion"
            title={
              <span className="text-xl font-semibold text-brown-700">
                Inmotion
              </span>
            }
          >
            <span>
              Créé en 2012, ce fabricant propose une gamme lisible et
              diversifiée, avec des modèles adaptés aussi bien aux débutants
              qu’aux experts. Ses modèles associent performances, praticité,
              sécurité et design soigné.
            </span>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Kingsong"
            title={
              <span className="text-xl font-semibold text-brown-700">
                Kingsong
              </span>
            }
          >
            <span>
              Présent sur le marché depuis 2014, cette marque est reconnue pour
              ses modèles offrant un équilibre entre performance et sécurité.
              Elle fut la première à proposer un modèle avec suspension.
            </span>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Leaperkim / Veteran"
            title={
              <span className="text-xl font-semibold text-brown-700">
                Leaperkim / Veteran
              </span>
            }
          >
            <span>
              Apparu en 2020, ce fabricant a rapidement gagné en popularité
              auprès des connaisseurs grâce à ses roues robustes et puissantes,
              et une belle qualité de fabrication.
            </span>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Ninebot by Segway"
            title={
              <span className="text-xl font-semibold text-brown-700">
                Ninebot by Segway
              </span>
            }
          >
            <span>
              Cette marque, connue pour ses trottinettes électriques, a fabriqué
              quelques modèles populaires et au design soigné entre 2014 et
              2018. Elle s’est depuis retirée du marché.
            </span>
          </AccordionItem>
        </Accordion>
        <p>
          Les autres marques sont moins connues et moins appréciées des
          connaisseurs. Les caractéristiques de leurs modèles n&apos;offrent pas
          les mêmes garanties (sécurité, performance) que celles qu&apos;on
          retrouve chez les leaders du marché.
        </p>
        <div className="md:ml-6 mt-4 md:mt-0 bg-blue-100 dark:bg-cyan-800 p-4 rounded space-y-8">
          <p className="font-semibold">
            ⚠️ &quot;La roue parfaite n&apos;existe pas.&quot;
          </p>
          <p>
            D&apos;expérience, chaque modèle excelle pour un usage précis, avec
            ses forces, ses qualités et ses faiblesses.
          </p>
        </div>
      </section>

      <section className="my-8 space-y-4">
        <h2 className="text-4xl font-semibold mb-4">
          Bien identifier ses besoins
        </h2>
        <div className="flex flex-col gap-4">
          <Checkbox color="primary">
            Je recherche une roue pour : essayer/apprendre ? pratiquer
            régulièrement ?
          </Checkbox>
          <Checkbox color="primary">
            Je recherche une roue pour : compléter/remplacer les transports en
            commun (aller du point A au point B) ? le loisir et se balader ?
            faire de très longs trajets ?
          </Checkbox>
          <Checkbox color="primary">
            Je recherche en priorité : le confort ? les équipements ? la
            performance ?
          </Checkbox>
          <Checkbox color="primary">
            Je recherche une roue avant tout munie d’une suspension ?
          </Checkbox>
          <Checkbox color="primary">
            Je recherche une roue : simple à entretenir ? ou suis-je prêt à
            bricoler ?
          </Checkbox>
          <Checkbox color="primary">
            Vais-je devoir souvent porter ma roue ? combien suis-je capable de
            soulever : 20kg ? 30kg ?
          </Checkbox>
          <Checkbox color="primary">
            Quel est mon budget : &lt;1500€ ? &lt;2500€ ? ou plus ?
          </Checkbox>
        </div>
      </section>

      {/* Bloc 4 - Comparer */}
      <section className="my-8 space-y-4">
        <h2 className="text-4xl font-semibold mb-4">Comparer</h2>
        <div className="md:ml-6 mt-4 md:mt-0 bg-blue-100 dark:bg-cyan-800 p-4 rounded space-y-8">
          <p className="font-semibold">
            📢 &quot;Choisir, c’est aussi renoncer…&quot;
          </p>
          <p>
            Pour faire un choix éclairé, il faut peser les avantages et les
            inconvénients, et tenir compte de ses contraintes.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">➡️ Pas si simple</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Bien que petit, le marché propose énormément de modèles. Certaines
              marques enchaînent les nouveautés et renouvellent constamment leur
              gamme.
            </li>
            <li>
              Les fabricants et les magasins affichent parfois des
              spécifications différentes (valeurs, formats ou unités de mesure).
            </li>
            <li>
              Les chiffres fabricants sont parfois trompeurs, et les autonomies
              annoncées sont toujours surévaluées (il faut parfois diviser par
              2). Rappel : l&apos;autonomie est tributaire de nombreux
              paramètres (poids du wheeler, vitesse, température, profil et
              nature du trajet…).
            </li>
            <li>
              Certains modèles changent légèrement avec le temps (esthétique ou
              technique) selon le lot de production (on appelle cela les
              *batchs*).
            </li>
          </ul>
        </div>

        <div className="pt-8">
          <h2 className="text-xl font-semibold mb-4">
            ➡️ Mes reviews et le BonheurScore
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              La notation{' '}
              <Link
                href="/BonheurScore"
                className="underline hover:text-blue-500"
              >
                BonheurScore
              </Link>{' '}
              permet de savoir en synthèse ce que j&apos;ai pensé de chaque roue
              que j&apos;ai testée.
            </li>
            <li>
              Dans toutes{' '}
              <Link
                href="https://www.youtube.com/@BonheursurSeine"
                className="underline hover:text-blue-500"
                target="_blank"
              >
                mes vidéos
              </Link>
              , je donne librement mon avis et j&apos;identifie au mieux les
              usages pour lesquels la roue excelle.
            </li>
          </ul>
        </div>

        <div className="pt-8">
          <h2 className="text-xl font-semibold mb-4">➡️ EUC Finder</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Ce projet (auquel je participe avec{' '}
              <Link
                href="https://www.instagram.com/rafa.pgarcia"
                className="underline hover:text-blue-500"
                target="_blank"
              >
                @rafa.pgarcia
              </Link>{' '}
              et{' '}
              <Link
                href="https://www.instagram.com/fabien.wheel"
                className="underline hover:text-blue-500"
                target="_blank"
              >
                @Fabien.Wheel
              </Link>
              ) permet de consulter l&apos;ensemble des modèles dans un format
              standardisé.
            </li>
            <li>
              C&apos;est actuellement le meilleur outil pour faire des
              comparaisons. ⇒{' '}
              <Link
                href="https://finder.eucfinder.com/fr"
                className="underline hover:text-blue-500"
                target="_blank"
              >
                Accès direct au comparateur
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Page
