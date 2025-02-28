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
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          Tu veux être sur d&apos;avoir les dernières informations
          officielles&nbsp;?
          <h4 className="mt-4 mb-0">💠 Begode et Extreme Bull</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>
              <Link
                href="http://www.begode.com"
                target="_blank"
                className="link-style"
              >
                http://www.begode.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/Begode.Levi"
                target="_blank"
                className="link-style"
              >
                https://www.facebook.com/Begode.Levi
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/ExtremeBull.Levi"
                target="_blank"
                className="link-style"
              >
                https://www.facebook.com/ExtremeBull.Levi
              </Link>
            </li>
          </ul>
          <h4 className="mt-4 mb-0">💠 Inmotion</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>
              <Link
                href="https://www.inmotionworld.com"
                target="_blank"
                className="link-style"
              >
                https://www.inmotionworld.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@INMOTIONSCV"
                target="_blank"
                className="link-style"
              >
                https://www.youtube.com/@INMOTIONSCV
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/InmotionWorld"
                target="_blank"
                className="link-style"
              >
                https://www.facebook.com/InmotionWorld
              </Link>
            </li>
          </ul>
          <h4 className="mt-4 mb-0">💠 Kingsong</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>
              <Link
                href="https://kingsong.com"
                target="_blank"
                className="link-style"
              >
                https://kingsong.com
              </Link>{' '}
              et{' '}
              <Link
                href="https://kingsongeurope.com"
                target="_blank"
                className="link-style"
              >
                https://kingsongeurope.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@KingsongIntellCoLtd"
                target="_blank"
                className="link-style"
              >
                https://www.youtube.com/@KingsongIntellCoLtd
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/kingsong.international"
                target="_blank"
                className="link-style"
              >
                https://www.facebook.com/kingsong.international
              </Link>{' '}
            </li>
          </ul>
          <h4 className="mt-4 mb-0">💠 Leaperkim</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>
              <Link
                href="https://www.leaperkim.com"
                target="_blank"
                className="link-style"
              >
                https://www.leaperkim.com
              </Link>
            </li>
            <li>
              <Link
                href="https://youtube.com/@veteranlinnea9952"
                target="_blank"
                className="link-style"
              >
                https://youtube.com/@veteranlinnea9952
              </Link>
            </li>
          </ul>
          <h4 className="mt-4 mb-0">💠 Nosfet</h4>
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
