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
          title={<h3>Premier déballage</h3>}
          indicator={<strong className="chevronAccordionItem">&lt;</strong>}
        >
          <div className="blueBlock mb-8">
            <h3>
              📦 Lorsque que tu ouvres le carton, il est normal que la roue ne
              s&apos;équilibre pas lorsque tu l&apos;allumes. Elle est en{' '}
              <strong>mode transport</strong>.
            </h3>
          </div>
          <p>
            Pour sortir la roue du mode transport, voici les manipulations à
            effectuer&nbsp;:
          </p>
          <h4 className="mt-4 mb-0">➡️ Nosfet</h4>
          <ul className="compactlist mt-0 mb-6 leading-tight">
            <li> Etape 1 : https://www.nosfet.com</li>
            <li>
              Etape 2 :
              <Link
                href="https://www.nosfet.com"
                target="_blank"
                className="link-style"
              >
                https://www.nosfet.com
              </Link>
            </li>
            <li> Etape 3 :</li>
            <li> Etape 4 : </li>
          </ul>

          <div className="blueBlock mb-8">
            <h3>
              📦 Le &laquo;&nbsp;mode transport&nbsp;&raquo; c&apos;est
              quoi&nbsp;?
            </h3>
            Lors de leur mise en carton en usine, les roues sont verrouillées
            dans ce mode afin d&apos;éviter que celles-ci ne s&apos;allument pas
            de manière inopinée durant leur transport, ce qui provoquerait des
            problèmes.
          </div>
          <h4>A noter / Remarques : </h4>
          <ul className="list">
            <li>
              Vérifier l&apos;aspect général du carton. Ne pas hésiter à refuser
              la livraison si carton éventré, déchirures, traces d&apos;eau ou
              d&apos;humidité.
            </li>
            <li>
              Vérifier que le carton comprend la notice, le chargeur et son
              cable électrique.
            </li>
            <li>...</li>
            <li>Le mode transport est réversible.</li>
            <li>Vérifier le pneu. Le gonfler suffisament.</li>
            <li>Vérifier la suspension.</li>
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
