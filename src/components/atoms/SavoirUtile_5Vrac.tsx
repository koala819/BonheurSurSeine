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
          <h4>➡️ Mode d&apos;emploi IQlight V2</h4>
          <p>
            Voici la version française (<i>traduite par mes soins</i>) du mode
            d&apos;emploi des{' '}
            <Link
              href="https://rudy-tech.pl/en/15-iqlight"
              target="_blank"
              className="link-style"
            >
              magnifiques IQlight V2
            </Link>{' '}
            de Rudy Tech.
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
            article mis à jour en janvier 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Vrac
