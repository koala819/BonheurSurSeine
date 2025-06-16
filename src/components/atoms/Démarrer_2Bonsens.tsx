'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

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
          <div className="blueBlock mb-8">
            <h4>
              🔥 Les protections n&apos;évitent pas le danger, la vigilance,
              oui&nbsp;!
            </h4>
          </div>
          <h3>Prudence est mère de sûreté</h3>
          <ul className="list-disc pl-4 space-y-2 mb-4">
            <li>
              Respecte le <strong>code de la route</strong> (circulation,
              stationnement, équipement).
            </li>
            <li>
              Respecte les autres usagers (piétons, cyclistes, etc.), et met toi
              à leur place : pense à ce qu’ils peuvent ressentir en te voyant
              arriver.
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
          <div className="blueBlock mb-8">
            <h4>
              📢 Anticipe les situations à risque et fait preuve de prudence en
              toutes circonstances.
            </h4>
          </div>
          <h3>À retenir :</h3>
          <ul className="list-disc pl-4 space-y-2 mb-4">
            <li>
              <strong>Protège toi !</strong>
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
              <strong>connaitre ta roue</strong>, et
              <strong className="ml-1">respecte là</strong>.
            </li>
            <li>
              Je répète : connais bien les limites de ta roue et respecte les.
            </li>
          </ul>
          <div className="blueBlock">
            <h4>
              💟 Et n’oublie pas : bon comportement = bonne image = bonne
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
