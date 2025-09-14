'use client'

//import { Accordion, AccordionItem } from '@nextui-org/react'
//import { useEffect, useState } from 'react'
//import Image from 'next/image'
import Link from 'next/link'

//import Tableaux_tensions from '@/public/techniques/risques-batteries-lithium (by cnpp).png'

const Maintenance = () => {
  {
    /*
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>(['1'])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'cestquoi') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('cestquoi')
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
*/
  }

  return (
    <section
      id="cestquoi"
      className="scroll-mt-80 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      {/*<Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="cestquoi'"
          title={<h2>C&apos;est quoi une gyroroue&nbsp;?</h2>}
          indicator={<span className="chevronAccordionItem">&lsaquo;</span>}
        >*/}
      <h2 className="mb-8">C&apos;est quoi une gyroroue&nbsp;?</h2>
      {/*--------------------------------------------*/}
      {/*--------------------------------------------*/}
      <div className="mt-0 mb-4">
        <p className="mt-0 mb-2">
          <strong className="text-blue-800 dark:text-blue-200">
            Compacte, fun
          </strong>{' '}
          et électrique, la gyroroue est sans aucun doute le moyen de transport
          le{' '}
          <strong className="text-blue-800 dark:text-blue-200">
            pratique, efficace et polyvalent
          </strong>
          . Parfait pour se déplacer librement et facilement en ville ou à la
          campagne&nbsp;!
        </p>
        <p className="mt-0 mb-1">
          {/*Je le répète très souvent : c&apos;est à mes yeux le meilleur moyen de
          transport personnel&nbsp;!
          <br />*/}
          Son mode de conduite intuitif procure{' '}
          <strong className="text-blue-800 dark:text-blue-200">
            des sensations de glisse uniques et incomparables
          </strong>
          , mêlant équilibre et liberté, proche de celles du ski.
          {/*… mais sur la terre ferme.*/}
        </p>
      </div>

      {/*--------------------------------------------*/}
      {/*--------------------------------------------*/}
      <div className="blueBlock mb-4">
        <b>
          ✳️ La gyroroue n&apos;est pas un véhicule comme les autres&nbsp;!{' '}
          <br />
        </b>
        <p>
          Pour en profiter, un petit temps d&apos;
          <strong className="text-blue-800 dark:text-blue-200">
            apprentissage
          </strong>{' '}
          est{' '}
          <strong className="text-blue-800 dark:text-blue-200">
            nécessaire
          </strong>
          . La bonne nouvelle&nbsp;: 😊 tout le monde peut y arriver&nbsp;!
        </p>
      </div>

      {/*------------------------------------*/}
      {/*------------------------------------*/}
      <div className="">
        <h4 className="text-left mt-0 mb-1">🚀 Comment ça fonctionne&nbsp;?</h4>
        <p className="mt-0 mb-4">
          Le principe est à la fois simple et unique&nbsp;! Sans guidon ni
          freins mécaniques, la gyroroue ne garde que l&apos;essentiel&nbsp;:
          une roue, un moteur, une batterie et quelques capteurs électroniques.
        </p>
        <p className="mt-0 mb-0">
          Elle{' '}
          <strong className="text-blue-800 dark:text-blue-200">
            se pilote uniquement grâce au corps
          </strong>
          , par transfert de poids et anticipation.
        </p>
        <ul className="list-none p-0 mb-6">
          <li className="flex items-start mb-0 ">
            {/* puce personnalisée alignée en haut */}
            <span className="mr-2 ml-2" aria-hidden="true">
              ⏩
            </span>
            <div>
              <p>
                <b>Avancer</b> → mettre légèrement son poids sur l&apos;avant.
              </p>
            </div>
          </li>
          <li className="flex items-start mb-0">
            {/* puce personnalisée alignée en haut */}
            <span className="mr-2 ml-2" aria-hidden="true">
              ⏹️
            </span>
            <div>
              <p>
                <b>Freiner</b>/<b>Reculer</b> → mettre son poids sur
                l&apos;arrière.
              </p>
            </div>
          </li>
          <li className="flex items-start mb-0">
            {/* puce personnalisée alignée en haut */}
            <span className="mr-2 ml-2" aria-hidden="true">
              ↔️
            </span>
            <div>
              <p>
                Tourner à <b>gauche/droite</b> → mettre son poids sur un côté,
                tourner les épaules (comme en ski)&nbsp;: la roue suit
                naturellement les mouvements du corps.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/*------------------------------------*/}
      {/*------------------------------------*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        {/* Carte Vidéo */}
        <div className="space-y-0 flex flex-col place-content-center items-center">
          <div className="sm:w-4/5 md:w-3/5 lg:w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-md"
              width="400"
              height="315"
              src="https://www.youtube.com/embed/qOapkq09Oz0?si=_AX-CJDe8BbCaXfZ"
              title="Apprendre la gyroroue (méthode simple)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <p className="mt-3 text-xs text-center italic text-gray-600 dark:text-gray-400">
            Comment fonctionne une gyroroue (version simple)
          </p>
        </div>

        {/* Carte Explications */}
        <div className="text-base text-justify">
          {/*-------------------------------------------------------*/}
          <h4 className="text-left mt-0 mb-0">
            🧠 Pourquoi ça tient debout&nbsp;?
          </h4>
          <ul className="compactlist2 ml-2 mb-6">
            <li className="">
              L&apos;électronique ajuste en continu la stabilité des pédales.
            </li>
            <li className="">
              En roulant, le mouvement circulaire crée un{' '}
              <Link
                href="https://youtu.be/RSPUdAKqAgY"
                target="_blank"
                className="link-style font-bold text-blue-800 dark:text-blue-200"
              >
                effet gyroscopique&nbsp;📹
              </Link>{' '}
              (<i>comme une toupie qui tourne</i>) et assure l&apos;équilibre.
            </li>
            <li className="">
              Pour la direction (gauche/droite), c&apos;est le pilote qui agit,
              comme en vélo ou en ski.
            </li>
          </ul>
          {/*-------------------------------------------------------*/}
          <h4 className="mt-2 mb-0">🚫 Idées reçues&nbsp;:</h4>
          <ul className="list-none p-0 mb-6">
            <li className="flex items-start mb-0">
              {/* puce personnalisée alignée en haut */}
              <span className="mr-2 ml-4" aria-hidden="true">
                •
              </span>
              <div>
                <p>❌&nbsp;«&nbsp;C&apos;est trop compliqué&nbsp;»</p>
                <p>
                  ✅&nbsp;En réalité, quelques minutes suffisent pour trouver
                  l&apos;équilibre.
                </p>
              </div>
            </li>
            <li className="flex items-start mb-3">
              {/* puce personnalisée alignée en haut */}
              <span className="mr-2 ml-4" aria-hidden="true">
                •
              </span>
              <div>
                <p>❌«&nbsp;C&apos;est trop dangereux.&nbsp;»</p>
                <p>
                  ✅&nbsp;Comme pour le vélo, avec un peu de pratique et un
                  équipement adapté, c&apos;est sûr et maîtrisable.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p>
        ℹ️ Pour le reste (<i>astuces, code de la route, assurance</i>) et pour
        éviter les erreurs des débutants,{' '}
        <Link
          href="/debuter-gyroroue"
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
      {/*</AccordionItem>
      </Accordion>*/}
    </section>
  )
}

export default Maintenance
