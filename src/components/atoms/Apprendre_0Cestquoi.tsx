'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

//import Image from 'next/image'
import Link from 'next/link'

//import Tableaux_tensions from '@/public/techniques/risques-batteries-lithium (by cnpp).png'

const Maintenance = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>(['1'])
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
      id="cestquoi"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="cestquoi'"
          title={<h3>C&apos;est quoi une gyroroue&nbsp;?</h3>}
          indicator={<span className="chevronAccordionItem">&lsaquo;</span>}
        >
          {/*--------------------------------------------*/}
          {/*--------------------------------------------*/}
          <div className="mt-0 mb-4">
            <p className="mt-0 mb-1">
              <strong className="text-blue-800 dark:text-blue-200">
                Compacte, fun
              </strong>{' '}
              et électrique, il n&apos;existe pas plus{' '}
              <strong className="text-blue-800 dark:text-blue-200">
                pratique, efficace et polyvalent
              </strong>
              . La roue électrique permet de se déplacer librement et facilement
              en ville, à la campagne ou en randonnée.
              <br />
              Je le répète très souvent : il s&apos;agit du meilleur moyen de
              transport personnel&nbsp;!
              <br />
              Ce mode de conduite intuitif procure{' '}
              <strong className="text-blue-800 dark:text-blue-200">
                des sensations de glisse incomparables
              </strong>
              , alliant équilibre et liberté, proche du ski ou du snowboard…
              mais sur la terre ferme.
            </p>
          </div>

          {/*--------------------------------------------*/}
          {/*--------------------------------------------*/}
          <div className="blueBlock mb-4">
            <b>
              ✳️ La gyroroue n&apos;est pas un véhicule comme les autres… <br />
            </b>
            Pour en profiter, il faut passer{' '}
            <strong className="text-blue-800 dark:text-blue-200">
              par l&apos;apprentissage
            </strong>
            . La bonne nouvelle&nbsp;: 😊 tout le monde peut y arriver&nbsp;!
          </div>

          {/*------------------------------------*/}
          {/*------------------------------------*/}
          <div className="mt-4 mb-0">
            <h4 className="text-left mt-0 mb-1">
              🚀 Comment ça fonctionne&nbsp;?
            </h4>
            <p className="mt-0 mb-1">
              Son fonctionnement est à la fois simple et unique&nbsp;! Dépourvue
              de guidon et de freins mécaniques, la gyroroue ne contient que
              l&apos;essentiel&nbsp;: une roue, un moteur, une batterie et
              quelques capteurs électronique.
              <br />
              Elle{' '}
              <strong className="text-blue-800 dark:text-blue-200">
                se pilote uniquement grâce au corps
              </strong>
              , par transfert de poids et anticipation.
            </p>
            <ul className="compactlist mb-0">
              <li className="">
                <b>Avancer</b> → mettre son poid sur l&apos;avant.
              </li>
              <li className="">
                <b>Reculer</b> et <b>Freiner</b> → mettre son poid sur
                l&apos;arrière.
              </li>
              <li className="">
                Aller à <b>gauche ou droite</b> → transférer son poids sur un
                côté, comme en vélo ou en ski. Elle tournera et suivra
                naturellement les mouvements de ton corps.
              </li>
            </ul>
          </div>

          {/*------------------------------------*/}
          {/*------------------------------------*/}
          <div className="flex flex-col sm:flex-row mt-0 mb-0 space-x-4">
            <aside className="sm:w-full md:w-3/5 lg:w-1/2 flex flex-col space-y-0 mt-1 mb-0 place-content-center">
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-xl shadow-md"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/qOapkq09Oz0?si=_AX-CJDe8BbCaXfZ"
                  title="Apprendre la gyroroue (méthode simple)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <p className="mt-0 mb-0 text-xs text-center italic text-gray-600 dark:text-gray-400">
                Comment fonctionne une gyroroue (version simple)
              </p>
            </aside>
            {/*------------------------------------*/}
            <aside className="md:w-2/5 lg:w-1/2 flex text-justify place-items-start">
              <span className="text-justify text-base">
                <div className="mt-4 mb-0">
                  <h4 className="text-left mt-0 mb-0">
                    🧠 Pourquoi ça tient debout ?
                  </h4>
                  <ul className="compactlist mb-6">
                    <li className="">
                      L&apos;électronique gère la stabilité des pédales en
                      permanence.
                    </li>
                    <li className="">
                      En avançant, le mouvement circulaire produit{' '}
                      <Link
                        href="https://youtu.be/RSPUdAKqAgY"
                        target="_blank"
                        className="link-style font-bold text-blue-800 dark:text-blue-200"
                      >
                        l&apos;effet gyroscope&nbsp;(📹)
                      </Link>{' '}
                      et assure l&apos;équilibre.
                    </li>
                    <li className="">
                      Pour la direction gauche/droite, c&apos;est au pilotage
                      d&apos;agir (comme en vélo ou en ski).
                    </li>
                  </ul>
                  <h4 className="mt-2 mb-0">🚫 Non aux idées reçues&nbsp;:</h4>
                  <ul className="compactlist mb-6">
                    <li className="">C&apos;est trop compliqué.</li>
                    <li className="">C&apos;est trop dangereux.</li>
                  </ul>
                </div>
              </span>
            </aside>
          </div>
          <p>
            Pour le reste, tout savoir (
            <i>astuce, code de la route, assurance</i>) et éviter les erreurs
            des débutants,{' '}
            <Link
              href="/debuter-gyroroue"
              target="_blank"
              className="link-style font-bold text-blue-800 dark:text-blue-200"
            >
              consulte la page &laquo;&nbsp;Bien Démarrer&nbsp;&raquo;
            </Link>
            .
          </p>
          {/*------------------------------------*/}
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en septembre 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Maintenance
