'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

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
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-600 rounded-lg p-4 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Bien entretenir sa gyroroue"
          title={<h3>🛠️ L&apos;entretien</h3>}
          indicator={
            <strong className="transition-transform">
              <svg
                className="mx-2 w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </strong>
          }
          classNames={{
            indicator: 'data-[open=true]:rotate-180 transition-transform',
          }}
        >
          <p className="mb-1 text-left">
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
          <p className="mt-1 mb-4 text-left">
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
          <h4 className="mt-4 mb-2">➡️ À retenir</h4>
          <ul className="compactlist2 mb-6">
            <li className="text-left">
              Il est important de{' '}
              <strong className="text-amber-900 dark:text-brown-200">
                vérifier
              </strong>{' '}
              son engin avant chaque trajet.
            </li>
            <li className="text-left">
              Révise le{' '}
              <strong className="text-amber-900 dark:text-brown-200">
                régulièrement
              </strong>
              . Sois attentif à tout bruit suspect.
            </li>
            <li className="text-left">
              <strong className="text-amber-900 dark:text-brown-200">
                Chaque élément
              </strong>{' '}
              est{' '}
              <strong className="text-amber-900 dark:text-brown-200">
                essentiel
              </strong>
              &nbsp;: usure du pneu, pédales, éclairages, électronique,
              suspension, état et charge de la batterie, poussières,
              visseries...
            </li>
            <li className="text-left">
              Vérifie attentivement la coque&nbsp;: identifie tout risque
              d&apos;infiltration ou toute trace d&apos;humidité.
            </li>
            <li className="text-left">
              Vérifie régulièrement la{' '}
              <strong className="text-amber-900 dark:text-brown-200">
                pression du pneu
              </strong>
              .
            </li>
          </ul>
          {/*------------------------------------*/}
          <h4 className="mt-4 mb-2">➡️ Prends soin de la batterie</h4>
          <ul className="compactlist2 mb-2">
            <li className="text-left">
              Évite de l&apos;exposer à des températures extrêmes (froid ou
              chaud).
            </li>
            <li className="text-left">
              Ne laisse jamais la batterie se décharger complètement (stocker
              entre 30%-70% en cas d&apos;immobilisation prolongée).
            </li>
            <li className="text-left">
              Évite de recharger immédiatement à chaud, et ne laisse pas la
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
          <div className="mt-4 brownBlockentretien">
            <b className="mb-2">
              💦 L&apos;eau s&apos;infiltre facilement partout.
              <br />
            </b>
            <p>
              L&apos;électronique et les batteries n&apos;aiment pas ça&nbsp;!
              <br />
              ⚠️ Les conséquences peuvent être{' '}
              <strong>immédiates ou à plus long terme </strong>(rouille,
              surchauffe, court-circuit et risque d&apos;incendie).
            </p>
          </div>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            rédigé par{' '}
            <Link
              href={'https://linktr.ee/fabien.wheel'}
              passHref
              target="_blank"
              className="link-style"
            >
              Fabien.Wheel
            </Link>
            <br />
            dernière mise à jour : mars 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Maintenance
