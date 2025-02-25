'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

import Link from 'next/link'

const Practical_Info_officiel = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Trouver les infos/news officiels des constructeurs"
          title={<h3>🆕 Suivre les news officiels constructeurs</h3>}
          indicator={<strong className="chevronAccordionItem">&lt;</strong>}
        >
          <h4 className="mt-4 mb-0">🔶 Begode et Extreme Bull</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>http://www.begode.com</li>
            <li>https://www.facebook.com/ExtremeBull.Levi</li>
            <li>https://www.facebook.com/Begode.Levi</li>
          </ul>
          <h4 className="mt-4 mb-0">🔶 Inmotion</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>https://www.inmotionworld.com</li>
            <li>https://www.facebook.com/InmotionWorld/</li>
            <li>https://www.youtube.com/@INMOTIONSCV</li>
          </ul>
          <h4 className="mt-4 mb-0">🔶 Kingsong</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>https://kingsong.com</li>
            <li>Sa filiale européenne : https://kingsongeurope.com</li>
            <li>https://www.facebook.com/kingsong.international</li>
            <li>https://www.youtube.com/@KingsongIntellCoLtd</li>
          </ul>
          <h4 className="mt-4 mb-0">🔶 Leaperkim</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>https://www.leaperkim.com</li>
            <li>https://youtube.com/@veteranlinnea9952</li>
          </ul>
          <h4 className="mt-4 mb-0">🔶 Nosfet</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>
              <Link
                href="https://www.nosfet.com"
                target="_blank"
                className="link-style"
              >
                https://www.nosfet.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@nosfet_tech"
                target="_blank"
                className="link-style"
              >
                https://www.youtube.com/@nosfet_tech
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/nosfet.tech"
                target="_blank"
                className="link-style"
              >
                https://www.facebook.com/nosfet.tech
              </Link>
            </li>
          </ul>
          <p></p>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en mars 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Info_officiel
