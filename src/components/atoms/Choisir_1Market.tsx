'use client'

import { Accordion, AccordionItem } from '@heroui/react'

import Link from 'next/link'

const Market = () => {
  return (
    <section
      id="marche"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-2 md:p-4 lg:p-6 mb-6"
    >
      <h2 className="ml-2 md:ml-0">Le marché</h2>
      <p className="mt-0 mb-0 ml-2 md:ml-0">
        Sur la base de mes tests, il est possible de distinguer{' '}
        <strong>
          <span className="text-brown-800 dark:text-brown-700">
            3 grandes catégories
          </span>
        </strong>{' '}
        sur le marché&nbsp;:
      </p>

      {/* LISTE DES CATEGORIES */}
      <div className="">
        <Accordion
          isCompact
          variant="splitted"
          itemClasses={{
            base: `group
                  rounded-xl px-2
                  border border-brown-200 dark:border-brown-500/50
                  bg-brown-100/20 dark:bg-brown-900/10
                  transition-all duration-300
                  hover:shadow-lg
                  hover:border-orange-700
                  dark:hover:border-brown-600
                  hover:-translate-y-[1px]
                `,
          }}
        >
          <AccordionItem
            key="1"
            aria-label="Centre-Ville"
            title={
              <span className="text-xl font-semibold text-brown-800 dark:text-brown-700">
                Centre-Ville
              </span>
            }
            subtitle={
              <span
                className="block ml-2 text-sm text-brown-900 dark:text-brown-300"
                title="Cliquer pour déplier"
              >
                Idéale pour les petits trajets urbains
              </span>
            }
            indicator={
              <div
                className="flex items-center justify-center
                        w-8 h-8
                        rounded-full
                        bg-brown-800 dark:bg-brown-800/70
                        border
                        border-brown-300 dark:border-brown-600
                        shadow-sm
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:border-brown-300
                        dark:group-hover:border-brown-500"
              >
                <strong className="transition-transform">
                  <svg
                    className="mx-2 w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </strong>
              </div>
            }
            classNames={{
              indicator: 'data-[open=true]:rotate-180 transition-transform',
            }}
          >
            <ul className="list-disc pl-4 space-y-1 mb-4 ml-4">
              <li className="">
                De part leur{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  petite taille{' '}
                </strong>
                , ces roues sont souvent proposées en entrée de gamme. Mais ce
                sont elles{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  les vraies reines{' '}
                </strong>
                de la micro-mobilité. Car elles sont absolument parfaites pour
                découvrir le pouvoir de la roue électrique&nbsp;:{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  la liberté et la praticité
                </strong>
                &nbsp;!
              </li>
              <li className="">
                Compactes, faciles à transporter avec leur trolley, ultra
                maniables et assez légères (max 25kg), elles offrent ce que la
                roue a de meilleur. Les{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  centres-villes
                </strong>{' '}
                et les{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  pistes cyclables
                </strong>{' '}
                sont leur terrain de jeux favori. Elles sont parfaites pour{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  rester discret{' '}
                </strong>
                (sous un siège, dans un magasin), pour l&apos;intermodalité, et
                faire des trajets de quelques kilomètres.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Agglomération"
            title={
              <span className="text-xl font-semibold text-brown-800 dark:text-brown-700">
                Agglomération
              </span>
            }
            subtitle={
              <span
                className="block ml-2 text-sm text-brown-900 dark:text-brown-300"
                title="Cliquer pour déplier"
              >
                Confortable pour les trajets quotidiens
              </span>
            }
            indicator={
              <div
                className="flex items-center justify-center
                        w-8 h-8
                        rounded-full
                        bg-brown-800 dark:bg-brown-800/70
                        border
                        border-brown-300 dark:border-brown-600
                        shadow-sm
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:border-brown-300
                        dark:group-hover:border-brown-500"
              >
                <strong className="transition-transform">
                  <svg
                    className="mx-2 w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </strong>
              </div>
            }
            classNames={{
              indicator: 'data-[open=true]:rotate-180 transition-transform',
            }}
          >
            <ul className="list-disc pl-4 space-y-1 mb-4 ml-4">
              <li className="">
                Un peu plus grosses et généralement équipées d&apos;une
                suspension, ces roues offrent{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  plus de confort
                </strong>{' '}
                et{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  plus d&apos;autonomie
                </strong>
                . Cependant, avec un poids atteignant et dépassant parfois les
                35kg, elles perdent en discrétion et en praticité malgré tous
                leurs atouts.
              </li>
              <li className="">
                Leur taille leur permet de circuler{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  en agglomération
                </strong>
                , et un peu plus sereinement sur la chaussée au côté des autres
                véhicules. Avec ces roues, on peut aller au travail la semaine,
                et aller aussi se promener le week-end !
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Loisir"
            title={
              <span className="text-xl font-semibold text-brown-800 dark:text-brown-700">
                Loisir
              </span>
            }
            subtitle={
              <span
                className="block ml-2 text-sm text-brown-900 dark:text-brown-300"
                title="Cliquer pour déplier"
              >
                Optimisée pour l&apos;aventure et l&apos;endurance
              </span>
            }
            indicator={
              <div
                className="flex items-center justify-center
                        w-8 h-8
                        rounded-full
                        bg-brown-800 dark:bg-brown-800/70
                        border
                        border-brown-300 dark:border-brown-600
                        shadow-sm
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:border-brown-300
                        dark:group-hover:border-brown-500"
              >
                <strong className="transition-transform">
                  <svg
                    className="mx-2 w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </strong>
              </div>
            }
            classNames={{
              indicator: 'data-[open=true]:rotate-180 transition-transform',
            }}
          >
            <ul className="list-disc pl-4 space-y-1 mb-4 ml-4">
              <li className="">
                Ici,{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  aucune limite{' '}
                </strong>
                de taille, ni de poids ! Ces roues affichent des{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  spécifications techniques de haute volée
                </strong>{' '}
                (voltage, autonomie, puissance, suspension, vitesses max) que
                finalement peu de gens pourront totalement exploiter au
                quotidien. <br />
                D&apos;ailleurs, la praticité n&apos;est plus un argument
                essentiel car ces modèles sont plutôt dédiés à la pratique
                sportive :{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  grande randonnée, performance sur piste ou off-road
                </strong>
                .
              </li>
              <li className="">
                On est sur les{' '}
                <strong className="text-brown-900 dark:text-brown-300">
                  poids lourds{' '}
                </strong>
                de la micromobilité (40kg est souvent un minimum). Avec
                seulement quelques modèles au début, l&apos;offre s&apos;est
                étoffée au fur et a mesure des améliorations techniques
                (suspension, tension).
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
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
