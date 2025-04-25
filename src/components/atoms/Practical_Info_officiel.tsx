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
          title={
            <h3>🆕 Infos et chaine Youtube officielles des constructeurs</h3>
          }
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          On y pense peu, mais les constructeurs communiquent beaucoup&nbsp;! 😉
          <br /> Selon les marques, on a un peu de tout : annonces des nouveaux
          modèles, spécifications techniques, vidéos de démontage et de
          changement de pneus, navigation dans les menus, etc. <br />
          Alors, si tu veux être sur d&apos;avoir les dernières informations
          officielles&nbsp;:
          <h4 className="mt-4 mb-0">💠 Begode et Extreme Bull</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>
              Site ={' '}
              <Link
                href="http://www.begode.com"
                target="_blank"
                className="link-style"
              >
                http://www.begode.com
              </Link>
            </li>
            <li>
              Facebook ={' '}
              <Link
                href="https://www.facebook.com/Begode.Levi"
                target="_blank"
                className="link-style"
              >
                Begode.Levi
              </Link>{' '}
              et{' '}
              <Link
                href="https://www.facebook.com/ExtremeBull.Levi"
                target="_blank"
                className="link-style"
              >
                ExtremeBull.Levi
              </Link>
            </li>
          </ul>
          <h4 className="mt-4 mb-0">💠 Inmotion</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>
              Site ={' '}
              <Link
                href="https://www.inmotionworld.com"
                target="_blank"
                className="link-style"
              >
                https://www.inmotionworld.com
              </Link>
            </li>
            <li>
              Youtube ={' '}
              <Link
                href="https://www.youtube.com/@INMOTIONSCV"
                target="_blank"
                className="link-style"
              >
                @InmotionSCV
              </Link>
            </li>
            <li>
              Facebook ={' '}
              <Link
                href="https://www.facebook.com/InmotionWorld"
                target="_blank"
                className="link-style"
              >
                InmotionWorld
              </Link>
            </li>
          </ul>
          <h4 className="mt-4 mb-0">💠 Kingsong</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>
              Site ={' '}
              <Link
                href="https://kingsong.com"
                target="_blank"
                className="link-style"
              >
                https://kingsong.com
              </Link>{' '}
              et sa filiale{' '}
              <Link
                href="https://kingsongeurope.com"
                target="_blank"
                className="link-style"
              >
                https://kingsongeurope.com
              </Link>
            </li>
            <li>
              Youtube ={' '}
              <Link
                href="https://www.youtube.com/@KingsongIntellCoLtd"
                target="_blank"
                className="link-style"
              >
                @KingsongIntellCoLtd
              </Link>{' '}
              et sa filiale{' '}
              <Link
                href="https://www.youtube.com/@KingSongEurope"
                target="_blank"
                className="link-style"
              >
                @KingsongEurope
              </Link>
            </li>
            <li>
              Facebook ={' '}
              <Link
                href="https://www.facebook.com/kingsong.international"
                target="_blank"
                className="link-style"
              >
                Kingsong.International
              </Link>{' '}
              et sa filiale{' '}
              <Link
                href="https://www.facebook.com/kingsongeurope"
                target="_blank"
                className="link-style"
              >
                KingsongEurope
              </Link>
            </li>
          </ul>
          <h4 className="mt-4 mb-0">💠 Leaperkim</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>
              Site ={' '}
              <Link
                href="https://www.leaperkim.com"
                target="_blank"
                className="link-style"
              >
                https://www.leaperkim.com
              </Link>
            </li>
            <li>
              Youtube ={' '}
              <Link
                href="https://youtube.com/@veteranlinnea9952"
                target="_blank"
                className="link-style"
              >
                @veteranlinnea9952
              </Link>
            </li>
          </ul>
          <h4 className="mt-4 mb-0">💠 Nosfet</h4>
          <ul className="compactlist mt-0 mb-0 leading-tight">
            <li>
              Site ={' '}
              <Link
                href="https://www.nosfet.com"
                target="_blank"
                className="link-style"
              >
                https://www.nosfet.com
              </Link>
            </li>
            <li>
              Youtube ={' '}
              <Link
                href="https://www.youtube.com/@nosfet_tech"
                target="_blank"
                className="link-style"
              >
                @Nosfet_tech
              </Link>
            </li>
            <li>
              Facebook ={' '}
              <Link
                href="https://www.facebook.com/nosfet.tech"
                target="_blank"
                className="link-style"
              >
                Nosfet.tech
              </Link>
            </li>
          </ul>
          <p></p>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en avril 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Info_officiel
