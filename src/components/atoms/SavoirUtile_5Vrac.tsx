'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

//import Image from 'next/image'
import Link from 'next/link'

const Practical_Vrac = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'vrac') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('vrac')
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
      id="vrac"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Savoir en vrac"
          title={<h3>😉 Savoir en vrac</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          {/*--------------------------------------------------------*/}
          {/*                       BLOC 2                           */}
          {/*--------------------------------------------------------*/}
          <h4 className="mt-0">➡️ Mode d&apos;emploi IQlight V2</h4>
          <p className="text-justify">
            La version française (<i>traduite par mes soins</i>) du mode
            d&apos;emploi des magnifiques{' '}
            <Link
              href="https://rudy-tech.pl/en/15-iqlight"
              target="_blank"
              className="link-style"
            >
              phares auto inclinable IQlight V2
            </Link>{' '}
            de Rudy Tech (dont je te parlais dans{' '}
            <Link
              href="https://youtu.be/zWsGDzFLqHo"
              target="_blank"
              className="link-style"
            >
              cette vidéo&nbsp;📹
            </Link>
            ).
            <br />
            Le PDF est disponible{' '}
            <Link
              href="/Rudy Tech - mode d'emploi IQlight V2 - FR v20250307.pdf"
              target="_blank"
              className="link-style"
            >
              ❇️&nbsp;<b>ICI</b>&nbsp;❇️
            </Link>
            .
          </p>
          {/*--------------------------------------------------------*/}
          {/*                        BLOC 3                          */}
          {/*--------------------------------------------------------*/}
          <h3 className="text-center mt-28 mb-0">
            🚧&nbsp;EN&nbsp;CONSTRUCTION&nbsp;🚧
          </h3>
          Reviens prochainement pour en savoir plus sur...
          <h5>🔜 Les moteurs</h5>
          <h5>🔜 Les suspensions</h5>
          <h5>
            🔜 Pleins d&apos;autres sujets&nbsp;:{' '}
            <i>
              <Link
                href="https://fr.tipeee.com/bonheur-sur-seine"
                target="_blank"
                className="link-style"
              >
                Ne clique pas ici
              </Link>
            </i>
          </h5>
          <p></p>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en juin 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Vrac
