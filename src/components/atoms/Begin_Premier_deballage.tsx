'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

import Link from 'next/link'

const Begin_premier_deballage = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Premier déballage"
          title={<h3>📦 Premier déballage</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
          //indicator={<strong className="chevronAccordionItem">&lt;</strong>}
          //</Accordion>indicator={<strong className="chevronAccordionItem">◀</strong>}
        >
          <div className="blueBlock mb-8">
            <h4>
              🎁 Lorsque que tu ouvres le carton, il est normal que la roue ne
              s&apos;équilibre pas lorsque tu l&apos;allumes. <br />
              La roue est en <strong>mode transport</strong>.
            </h4>
          </div>
          <h4 className="mt-4 mb-1">
            ➡️ Pour sortir la roue du mode transport, les étapes varient en
            fonction du fabricant&nbsp;:
          </h4>
          <ul className="compactlist mt-0 mb-6 leading-tight">
            <li>
              Généralement, le plus simple est de brancher le chargeur et de la
              connecter à la roue.
            </li>
            <li>
              Chez Begode, la manipulation est{' '}
              <Link
                href="https://www.youtube.com/watch?v=8HJws4b_Dtw"
                target="_blank"
                className="link-style"
              >
                parfaitement décrite dans cette vidéos
              </Link>
              .
            </li>
            <li>
              Chez Inmotion, Kingsong ou Leaperkim&nbsp;: l&apos;application
              mobile permet de désactiver/activer le mode transport.
            </li>
          </ul>

          <div className="blueBlock mb-8">
            <h4>
              🔒 Le &laquo;&nbsp;mode transport&nbsp;&raquo; c&apos;est
              quoi&nbsp;?
            </h4>
            Lors de leur mise en carton en usine, les roues sont verrouillées
            dans ce mode afin d&apos;éviter que celles-ci ne s&apos;allument pas
            de manière inopinée durant leur transport, ce qui pourrait causer de
            sérieux dégats.
          </div>
          <h4 className="mt-4 mb-1">Remarques : </h4>
          <ul className="compactlist">
            <li>
              Vérifie l&apos;aspect général du carton (refuse la livraison si le
              carton présente des déchirures ou des traces
              d&apos;eau/d&apos;humidité).
            </li>
            <li>
              Vérifie que le carton comprend la notice, le chargeur et son cable
              électrique.
            </li>
            <li>...</li>
            <li>Le mode transport est réversible.</li>
            <li>Vérifie le pneu et gonfle-le suffisament.</li>
            <li>Vérifie la suspension.</li>
          </ul>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en janvier 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Begin_premier_deballage
