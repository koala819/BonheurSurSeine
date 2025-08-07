'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'

import Image_bon_sens from '@/public/Image_bon-sens_nuage-de-mots.png'

const CommonSense = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'bonsens') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('bonsens')
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
      id="bonsens"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Le bon sens"
          title={<h3>😊 Le bon sens</h3>}
          indicator={<span className="chevronAccordionItem">&lsaquo;</span>}
        >
          <div className="mb-3 grid grid-cols-1 md:grid-cols-5 gap-1 items-stretch">
            {/* Bloc texte sur 3 colonnes */}
            <aside className="md:col-span-3">
              <div className="yellowBlockbonsens my-0 grid grid-cols-1 gap-1 mb-0 h-full">
                {[
                  {
                    icon: '☠️',
                    text: "L'excès de confiance est l'ennemi n°1 du wheeler",
                  },
                  {
                    icon: '⚠️',
                    text: 'Anticipe les situations à risque',
                  },
                  {
                    icon: '📢',
                    text: 'Fais preuve de prudence en toutes circonstances',
                  },
                  {
                    icon: '🧠',
                    text: 'Pense aux autres usagers',
                  },
                ].map(({ icon, text }, i) => (
                  <div
                    key={i}
                    className="bg-yellow-50 dark:bg-yellow-900 rounded-xl px-2 py-1 shadow text-left"
                  >
                    <h4 className="text-lg font-semibold mb-0 mt-0">
                      {icon} {text}
                    </h4>
                  </div>
                ))}
              </div>
            </aside>
            {/* Image sur 2 colonnes */}
            <aside className="md:col-span-2 h-full flex justify-center md:justify-end bg-zinc-100 dark:bg-zinc-900 rounded-lg">
              <Image
                src={Image_bon_sens}
                alt="Bon sens en gyroroue"
                width={900}
                height={550}
                className="max-w-full h-full object-contain rounded-lg cursor-pointer shadow-md transition-shadow"
              />
            </aside>
          </div>
          {/*-----------------------------------------*/}
          {/*-----------------------------------------*/}
          <h3 className="mt-1">Prudence est mère de sûreté</h3>
          <ul className="list-disc pl-6 space-y-1 mb-6">
            <li>
              Respecte le <strong>code de la route</strong> (circulation,
              stationnement, signalisation).
            </li>
            <li>
              Respecte les autres usagers (piétons, cyclistes, etc.), et met toi
              à leur place :{' '}
              <strong>pense à ce qu&apos;ils peuvent ressentir</strong> en te
              voyant arriver.
            </li>
            <li>
              Anticipe les{' '}
              <strong>
                trajectoires (les tiennes et celles des autres usagers)
              </strong>
              .
            </li>
            <li>
              Maitrise toujours ta <strong>vitesse</strong> ! (Ne roule jamais
              plus vite que ce que tu peux freiner).
            </li>
          </ul>
          {/*-----------------------------------------*/}
          {/*-----------------------------------------*/}
          <div className="blueBlock mb-6">
            <h4>
              🔥 Les protections n&apos;évitent pas le danger, la vigilance,
              oui&nbsp;!
            </h4>
          </div>
          {/*-----------------------------------------*/}
          {/*-----------------------------------------*/}
          <h3>À retenir :</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>
              <strong>Protège toi&nbsp;!</strong>
            </li>
            <li>
              Le port du <strong>casque</strong> (sans être obligatoire) est{' '}
              <strong>vivement recommandé</strong>. Porter des gants ou des
              genouillères permet également de se protéger.
            </li>
            <li>
              <strong>Sois visible</strong> mais n&apos;aveugle pas les autres.
            </li>
            <li>
              Utilise une <strong>sonnette</strong> pour signaler{' '}
              <strong>amicalement</strong> ton approche et tes dépassements.
            </li>
            <li>
              Prend le temps de connaitre tes capacités, de{' '}
              <strong>connaitre ta roue</strong>, et{' '}
              <strong>respecte la</strong>.
            </li>
            <li>
              Je répète : connais bien les limites de ta roue et respecte les.
            </li>
          </ul>
          {/*-----------------------------------------*/}
          {/*-----------------------------------------*/}
          <div className="blueBlock">
            <h4>
              💟 Et n&apos;oublie pas : bon comportement = bonne image = bonne
              route&nbsp;!
            </h4>
            On se rend compte que quelque chose est précieux au moment où on le
            perd.
          </div>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en juin 2024
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default CommonSense
