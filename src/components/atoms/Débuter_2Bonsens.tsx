'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

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
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-600 rounded-lg p-6 mb-6"
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
              <div className="TealBlockbonsens my-0 grid grid-cols-1 gap-1 mb-0 h-full">
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
                    className="bg-teal-50 dark:bg-teal-900 rounded-xl px-2 py-1 shadow text-left"
                  >
                    <h4 className="text-lg font-semibold mb-0 mt-0">
                      {icon} {text}
                    </h4>
                  </div>
                ))}
              </div>
            </aside>
            {/* Image sur 2 colonnes */}
            <aside className="md:col-span-2 h-full flex justify-center md:justify-end bg-teal-50 dark:bg-teal-900 rounded-lg">
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
            <li className="text-justify">
              Respecte le{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                code de la route
              </strong>{' '}
              (circulation, stationnement, signalisation).
            </li>
            <li className="text-justify">
              Respecte les autres usagers (piétons, cyclistes, etc.), et met toi
              à leur place :{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                pense à ce qu&apos;ils peuvent ressentir
              </strong>{' '}
              en te voyant arriver.
            </li>
            <li className="text-justify">
              Anticipe les{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                trajectoires
              </strong>{' '}
              (les tiennes et celles des autres usagers) et garde des{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                distances de sécurité
              </strong>
              .
            </li>
            <li className="text-justify">
              Maitrise toujours ta{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                vitesse
              </strong>{' '}
              ! (Ne roule jamais plus vite que ce que tu peux freiner).
            </li>
          </ul>
          {/*-----------------------------------------*/}
          {/*-----------------------------------------*/}
          <div className="TealBlockbonsens mb-6">
            <h4>
              🔥 Les protections n&apos;évitent pas le danger, la vigilance,
              oui&nbsp;!
            </h4>
          </div>
          {/*-----------------------------------------*/}
          {/*-----------------------------------------*/}
          <h3>À retenir :</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li className="text-justify">
              <strong className="text-teal-800 dark:text-teal-200">
                Protège toi&nbsp;!
              </strong>
            </li>
            <li className="text-justify">
              Le port du{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                casque
              </strong>{' '}
              (jet ou intégral) est{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                vivement recommandé{' '}
              </strong>
              (sans être obligatoire). Porter des{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                gants
              </strong>{' '}
              ou des genouillères permet également de se protéger.
            </li>
            <li className="text-justify">
              Sois{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                visible
              </strong>{' '}
              mais n&apos;aveugle pas les autres.
            </li>
            <li className="text-justify">
              Utilise une{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                sonnette
              </strong>{' '}
              pour signaler{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                amicalement
              </strong>{' '}
              ton approche et tes dépassements.
            </li>
            <li className="text-justify">
              Prend le temps de connaitre tes capacités, de{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                connaitre ta roue
              </strong>
              , et{' '}
              <strong className="text-teal-800 dark:text-teal-200">
                respecte la
              </strong>
              .
            </li>
            <li className="text-justify">
              Je répète : connais bien les limites de ta roue et respecte les.
            </li>
          </ul>
          {/*-----------------------------------------*/}
          {/*-----------------------------------------*/}
          <div className="TealBlockbonsens">
            <h4 className="mb-0">
              💟 Et n&apos;oublie pas : bon comportement = bonne image = bonne
              route&nbsp;!
            </h4>
            <p>
              On se rend compte que quelque chose est précieux au moment où on
              le perd.
            </p>
          </div>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            rédigé par{' '}
            <Link
              href={'https://www.patreon.com/c/BonheursurSeine'}
              passHref
              target="_blank"
              className="link-style"
            >
              Bonheur Sur Seine
            </Link>
            <br />
            dernière mise à jour : avril 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default CommonSense
