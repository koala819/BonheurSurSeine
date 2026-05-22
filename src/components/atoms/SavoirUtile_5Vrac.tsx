'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import eucone from '@/public/marques/EUC.ONE app-logo.png'
import rudy from '@/public/marques/RudyTech logo.avif'

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
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-600 rounded-lg p-2 md:p-4 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Savoir en vrac"
          title={<h3>😉 Savoir en vrac</h3>}
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
          {/*--------------------------------------------------------*/}
          {/*                       BLOC 2                           */}
          {/*--------------------------------------------------------*/}
          <h4 className="mt-0 mb-2 flex items-center gap-2 justify-between">
            ➡️ Mode d&apos;emploi IQlight V2
            <Link
              href="https://rudy-tech.pl/en/15-iqlight"
              target="_blank"
              className="link-style"
            >
              <Image
                src={rudy}
                alt="logo_rudy"
                className="p1 border border-black rounded-lg cursor-pointer max-w-[70px] max-h-[40px]"
              />
            </Link>
          </h4>
          <p className="">
            Voici la version française du mode d&apos;emploi (
            <i>traduite par mes soins</i>) du magnifique{' '}
            <Link
              href="https://rudy-tech.pl/en/15-iqlight"
              target="_blank"
              className="link-style"
            >
              phare auto-inclinable IQlight V2
            </Link>{' '}
            de Rudy Tech.
            <br /> Je t&apos;en parlais en mars 2025 dans{' '}
            <Link
              href="https://youtu.be/zWsGDzFLqHo"
              target="_blank"
              className="link-style"
            >
              cette vidéo
            </Link>
            &nbsp;🎥.
            <br />
            Le PDF est disponible ❇️
            <Link
              href="/Rudy Tech - mode d'emploi IQlight V2 - FR v20250307.pdf"
              target="_blank"
              className="link-style"
            >
              &nbsp;<b>ICI</b>&nbsp;
            </Link>
            ❇️.
          </p>
          {/*--------------------------------------------------------*/}
          {/*                       BLOC 3                           */}
          {/*--------------------------------------------------------*/}
          <h4 className="mt-6 mb-2 flex items-center gap-2 justify-between">
            ➡️ Estimer ton autonomie
            <Link
              href="https://www.euc.one/calculator"
              target="_blank"
              className="link-style"
            >
              <Image
                src={eucone}
                alt="logo_EUCONE"
                className="p-1 border rounded-lg bg-black cursor-pointer max-w-[70px] max-h-[40px]"
              />
            </Link>
          </h4>
          <p className="">
            Le site ❇️
            <Link
              href="https://www.euc.one/calculator"
              target="_blank"
              className="link-style"
            >
              &nbsp;<b>Euc.one</b>&nbsp;
            </Link>
            ❇️ propose de jouer avec tous les paramètres impactant
            l&apos;autonomie.
            <br />
            Tu peux donc estimer au mieux ton autonomie avec ta roue.
            <br />
            Merci à eux pour ce magnifique projet.
          </p>
          {/*--------------------------------------------------------*/}
          {/*                 BLOC CONSTRUCTION                      */}
          {/*--------------------------------------------------------*/}
          <h3 className="text-center mt-28 mb-0">
            🚧&nbsp;EN&nbsp;CONSTRUCTION&nbsp;🚧
          </h3>
          Reviens prochainement pour en savoir plus sur...
          <h5>🔜 Les moteurs</h5>
          <h5>🔜 Les suspensions</h5>
          <h5>
            🔜 Plein d&apos;autres sujets&nbsp;:{' '}
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
            rédigé par{' '}
            <Link
              href={'https://www.patreon.com/c/BonheursurSeine'}
              passHref
              target="_blank"
              className="link-style"
            >
              Bonheur Sur Seine
            </Link>{' '}
            et{' '}
            <Link
              href={'https://linktr.ee/fabien.wheel'}
              passHref
              target="_blank"
              className="link-style"
            >
              Fabien.Wheel
            </Link>
            <br />
            dernière mise à jour : septembre 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Vrac
