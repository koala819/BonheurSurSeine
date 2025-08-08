'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'

import Tableaux_tensions from '@/public/techniques/risques-batteries-lithium (by cnpp).png'

const Maintenance = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'entretien') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('entretien')
      }
    } // Appel initial

    handleHashChange() // Écoute les changements de hash (clics internes)
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
  //CODE POUR SCROLL VERS L'ANCRAGE DEPUIS LA NAVBARBAR
  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    }
  }, [scrollTarget])

  return (
    <section
      id="entretien"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="L'entretien'"
          title={<h3>🛠 L&apos;entretien</h3>}
          indicator={<span className="chevronAccordionItem">&lsaquo;</span>}
        >
          <p className="mb-1 text-justify">
            <strong className="text-amber-900 dark:text-brown-200">
              Comme tout véhicule
            </strong>
            , les roues électriques ont besoin d&apos;un
            <strong className="text-amber-900 dark:text-brown-200">
              {' '}
              entretien régulier
            </strong>{' '}
            pour garantir leur durabilité et leur bon fonctionnement.
          </p>
          <p className="mt-1 mb-4 text-justify">
            Rappel&nbsp;: pour être utilisée sur voie publique, la roue doit
            être <span className="underline">bridée à 25km/h</span>.
          </p>
          <div className="brownBlockentretien mb-1">
            <b>
              🔎 Conserve ton véhicule en bon état&nbsp;! C&apos;est ta sécurité
              qui en dépend…
            </b>
          </div>
          {/*------------------------------------*/}
          <h4 className="mt-4 mb-2">À retenir&nbsp;:</h4>
          <ul className="compactlist mb-6">
            <li className="text-justify">
              Il est important de{' '}
              <strong className="text-amber-900 dark:text-brown-200">
                vérifier
              </strong>{' '}
              son engin avant chaque trajet.
            </li>
            <li className="text-justify">
              Révise le{' '}
              <strong className="text-amber-900 dark:text-brown-200">
                régulièrement
              </strong>
              . Sois attentif à tout bruit suspect.
            </li>
            <li className="text-justify">
              <strong className="text-amber-900 dark:text-brown-200">
                Chaque élément
              </strong>{' '}
              est{' '}
              <strong className="text-amber-900 dark:text-brown-200">
                essentiel
              </strong>
              &nbsp;: usure du pneu, pédales, éclairages, électronique, état et
              charge de la batterie, poussières, visseries...
            </li>
            <li className="text-justify">
              Vérifie attentivement la coque&nbsp;: identifie tout risque
              d&apos;infiltration ou toute trace d&apos;humidité.
            </li>
            <li className="text-justify">
              Vérifie régulièrement la{' '}
              <strong className="text-amber-900 dark:text-brown-200">
                pression du pneu
              </strong>
              .
            </li>
          </ul>
          {/*------------------------------------*/}
          <h4 className="mt-4 mb-2">Prends soin de la batterie&nbsp;:</h4>
          <ul className="compactlist mb-2">
            <li className="text-justify">
              Évite de l&apos;exposer à des températures extrêmes (froid ou
              chaud).
            </li>
            <li className="text-justify">
              Ne laisse jamais la batterie se décharger complètement (stocker
              entre 30%-70% en cas d&apos;immobilisation prolongée).
            </li>
            <li className="text-justify">
              Évite de recharge immédiatement à chaud, et ne laisse pas la
              charge sans surveillance.
            </li>
          </ul>
          <div className="mt-2 mb-6 flex justify-center">
            <Image
              src={Tableaux_tensions}
              alt="Principaux risques des batteries"
              width={768}
              height={432}
              className="rounded-lg cursor-pointer"
            />
          </div>
          {/*------------------------------------*/}
          <div className="mt-4 brownBlockentretien text-justify">
            <b className="text-lg">
              💦 L&apos;eau s&apos;infiltre facilement partout.
              <br />
            </b>
            ⚠️ L&apos;électronique et les batteries n&apos;aiment pas ça&nbsp;!
            <br />
            Les conséquences peuvent être{' '}
            <strong>immédiates ou à plus long terme</strong> (rouille,
            surchauffe, court-circuit et risque d&apos;incendie).
          </div>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en mars 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Maintenance
