'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

import Link from 'next/link'

const Practical_Video = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Vidéos Utiles"
          title={<h3>Vidéos Utiles</h3>}
          indicator={<strong className="chevronAccordionItem">&lt;</strong>}
        >
          <p></p>
          <div className="blueBlock mb-8">
            <h3>
              🎞️ xxxx xxxx xxxx&nbsp;!{' '}
              <Link
                href="https://www.securite-routiere.gouv.fr/reglementation-liee-aux-modes-de-deplacements/reglementation-des-edpm"
                target="_blank"
                className="link-style"
              >
                xx xxxx !
              </Link>
            </h3>
          </div>
          <p className="mb-8">
            Il y a aussi <strong>quelques spécificités à connaitre.</strong>
          </p>

          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en janvier 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Video
