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
          <h3 className="text-center">🚧&nbsp;EN&nbsp;CONSTRUCTION&nbsp;🚧</h3>
          Reviens prochainement pour en savoir plus sur...
          <br />
          <br />
          <h4>➡️ Pourcentage batterie et tension</h4>
          <h4>➡️ Naviguer dans les menus Leaperkim </h4>
          <h4>➡️ Changer un pneu</h4>
          <h4>➡️ Vidéos SAV</h4>
          <h4>➡️ Liens</h4>{' '}
          <ul className="list">
            <li>
              <Link
                href="https://fr.tipeee.com/bonheur-sur-seine"
                target="_blank"
                className="link-style"
              >
                Ne clique pas ici{' '}
              </Link>
            </li>

            <li>...</li>
          </ul>
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
