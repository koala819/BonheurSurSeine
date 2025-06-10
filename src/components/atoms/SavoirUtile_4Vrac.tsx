'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

import Link from 'next/link'

const Practical_Vrac = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Savoir en vrac"
          title={<h3>😉 Savoir en vrac</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          {/*--------------------------------------------------------*/}
          {/*                       1er BLOC                         */}
          {/*--------------------------------------------------------*/}
          <h4>➡️ Mode d&apos;emploi IQlight V2</h4>
          <p>
            La version française (<i>traduite par mes soins</i>) du mode
            d&apos;emploi des magnifiques{' '}
            <Link
              href="https://rudy-tech.pl/en/15-iqlight"
              target="_blank"
              className="link-style"
            >
              phares auto inclinable IQlight V2
            </Link>{' '}
            de Rudy Tech (dont je te parlais dans{' '}
            <Link
              href="https://youtu.be/zWsGDzFLqHo"
              target="_blank"
              className="link-style"
            >
              cette vidéo 📹
            </Link>
            ).
            <br />
            Le PDF est disponible{' '}
            <Link
              href="/Rudy Tech - mode d'emploi IQlight V2 - FR v20250307.pdf"
              target="_blank"
              className="link-style"
            >
              ❇️&nbsp;<b>ICI</b>&nbsp;❇️
            </Link>
            .
          </p>
          {/*--------------------------------------------------------*/}
          {/*                       2ème BLOC                        */}
          {/*--------------------------------------------------------*/}
          <h4 className="mt-10">
            ➡️ Sites/Applis pour la navigation et les tracés GPX
          </h4>
          Tout le monde connait{' '}
          <Link
            href="https://maps.google.com/"
            target="_blank"
            className="link-style"
          >
            GoogleMap
          </Link>
          &nbsp;! Mais il existe d&apos;autres sites spécialisés&nbsp;: <br />(
          <span className="text-gray-500 dark:text-gray-300 mt-0">
            <i>citées par ordre alphabétique</i>
          </span>
          😉)
          <section className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-4 md:mb-0 md:mr-4">
              <strong>Cartographie</strong>
              <ul className="compactlist">
                <li>
                  <Link
                    href="https://gmap2xxx.sdesimeur.com/"
                    target="_blank"
                    className="link-style"
                  >
                    Gmap2xxx
                  </Link>{' '}
                  (pour manipuler les fichiers GPX)
                </li>
                <li>
                  <Link
                    href="https://www.opencyclemap.org/"
                    target="_blank"
                    className="link-style"
                  >
                    Open Cycle Map
                  </Link>{' '}
                </li>
                <li>
                  <Link
                    href="https://www.af3v.org/"
                    target="_blank"
                    className="link-style"
                  >
                    Voies vertes de l&apos;AF3V
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0 md:mr-4">
              <strong>Navigation</strong>
              <ul className="compactlist">
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
                    href="https://www.komoot.com/fr-fr"
                    target="_blank"
                    className="link-style"
                  >
                    Komoot
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://fr.wikiloc.com/"
                    target="_blank"
                    className="link-style"
                  >
                    Wikiloc
                  </Link>{' '}
                  (dont je parle dans <i>&ldquo;Bien Démarrer&rdquo;</i>)
                </li>
              </ul>
            </div>
          </section>
          {/*--------------------------------------------------------*/}
          {/*                       3ème BLOC                        */}
          {/*--------------------------------------------------------*/}
          <h3 className="text-center mt-20 mb-0">
            🚧&nbsp;EN&nbsp;CONSTRUCTION&nbsp;🚧
          </h3>
          Reviens prochainement pour en savoir plus sur...
          <h5>🔜 Les moteurs</h5>
          <h5>
            🔜 Pleins d&apos;autres sujets&nbsp;:{' '}
            <Link
              href="https://fr.tipeee.com/bonheur-sur-seine"
              target="_blank"
              className="link-style"
            >
              Ne clique pas ici
            </Link>
          </h5>
          <p></p>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en juin 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Vrac
