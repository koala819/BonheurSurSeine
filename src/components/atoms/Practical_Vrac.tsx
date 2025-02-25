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
          indicator={<strong className="chevronAccordionItem">&lt;</strong>}
        >
          <h4>➡️ Pourcentage batterie et tension</h4>
          <h4>➡️ Naviguer dans les menus Leaperkim </h4>
          <h4>➡️ Changer un pneu</h4>
          <h4>➡️ Vidéo officiel SAV de Kingsong</h4>
          <h4>➡️ Nosfet</h4>{' '}
          <ul className="list">
            <li>https://www.nosfet.com</li>
            <li>
              <Link
                href="https://www.nosfet.com"
                target="_blank"
                className="link-style"
              >
                https://www.nosfet.com
              </Link>
            </li>
            <li>https://www.facebook.com/nosfet.tech</li>
            <li>https://www.youtube.com/@nosfet_tech/videos</li>
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
