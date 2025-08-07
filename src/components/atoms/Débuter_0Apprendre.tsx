'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

//import ReactPlayer from 'react-player'
//import Image from 'next/image'
//import Link from 'next/link'

const Associations = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>(['1'])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'asso') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('asso')
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
      id="apprendre"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Apprendre"
          title={<h3>🎓 Apprendre</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          <section className="mt-4 mb-8 pt-1">
            {/*--------------------------------------------*/}
            {/*              INTRO + VIDEO                 */}
            {/*--------------------------------------------*/}
            <div className="flex flex-col sm:flex-row mt-0 mb-8">
              <aside className="sm:w-full md:w-full lg:w-2/5 flex text-justify">
                <span className="text-justify">
                  <h4 className="text-left mb-1">
                    🤷 Comment apprendre la gyroroue&nbsp;?
                  </h4>
                  Tu veux apprendre la gyroroue mais tu ne sais pas par où
                  commencer&nbsp;?{' '}
                  <strong className="text-blue-800 dark:text-blue-200">
                    Cette vidéo est faite pour toi
                  </strong>
                  &nbsp;: elle facilitera ton apprentissage. <br />
                  Tu vas pouvoir{' '}
                  <strong className="text-blue-800 dark:text-blue-200">
                    découvrir
                  </strong>{' '}
                  la roue électrique,{' '}
                  <strong className="text-blue-800 dark:text-blue-200">
                    progresser
                  </strong>{' '}
                  rapidement, et{' '}
                  <strong className="text-blue-800 dark:text-blue-200">
                    éviter les pièges courants
                  </strong>
                  .<br />
                  <br />
                  <h4 className="text-left mb-1">
                    🚀 Pourquoi apprendre la gyroroue&nbsp;?{' '}
                  </h4>
                  La roue électrique est le meilleur moyen de transport
                  personnel&nbsp;: compact, fun et électrique,{' '}
                  <strong className="text-blue-800 dark:text-blue-200">
                    il n&apos;existe pas plus pratique
                  </strong>
                  . <br /> Elle permet de se déplacer librement et facilement en
                  ville, à la campagne ou en randonnée.
                </span>
              </aside>
              <aside className="sm:w-full md:w-full lg:w-3/5 flex flex-col space-y-0 place-items-center mt-2 justify-center">
                <div className="w-full max-w-[90%] aspect-video">
                  <iframe
                    className="w-full h-full rounded-xl shadow-md"
                    /*width="560"
                    height="315"*/
                    src="https://www.youtube.com/embed/VPXLMrs_Ne4"
                    title="Apprendre la gyroroue (méthode simple)"
                    /*frameborder="0"*/
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    /*referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen*/
                  ></iframe>
                </div>
                <p className="mt-0 mb-0 text-xs place-items-center items-center text-center italic text-gray-600 dark:text-gray-400">
                  Vidéo : Apprendre la gyroroue (méthode simple)
                </p>
              </aside>
            </div>
            {/*--------------------------------------------*/}
            {/*              BLOC CONSEIL                  */}
            {/*--------------------------------------------*/}
            <div className="blueBlock my-4">
              <h4 className="mt-0 mb-4 text-xl font-bold">
                💡 7 conseils à retenir :
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-0">
                {[
                  {
                    title: 'Équipe-toi bien',
                    icon: '🧤',
                    text: "Vêtements confortables, casque, et surtout gants et bonnes chaussures. Protège tes chevilles (les chutes sont rarissimes lors de l'apprentissage).",
                  },
                  {
                    title: 'Protège ta roue',
                    icon: '🛡️',
                    text: 'Utilise de la mousse ou du papier bulle : elle va tomber, autant éviter les rayures.',
                  },
                  {
                    title: 'Trouve un bon spot',
                    icon: '📍',
                    text: "Un endroit plat, large, sans obstacle ni passage : parking vide ou cour tranquille sont idéals pour commencer. L'espace aide à progresser sereinement.",
                  },
                  {
                    title: 'Reste souple',
                    icon: '🧘',
                    text: 'Plie les genoux, et surtout relâche les épaules : ce sont elles qui gèrent ton équilibre.',
                  },
                  {
                    title: 'Respire et reste cool',
                    icon: '😌',
                    text: "Pas de stress. Respire, souris. Faire des erreurs et faire tomber la roue, c'est normal au début.",
                  },
                  {
                    title: 'Entraîne-toi !',
                    icon: '🏋️',
                    text: "Avancer et tourner, c'est un début. Mais pour vraiment maîtriser ta roue, il faut aussi savoir freiner, éviter, et rester stable en toutes conditions.",
                  },
                ].map(({ title, icon, text }, i) => (
                  <div
                    key={i}
                    className="bg-blue-50 dark:bg-cyan-950 rounded-xl p-4 shadow text-justify"
                  >
                    <h5 className="text-lg font-semibold mb-1">
                      {icon} {title}
                    </h5>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 dark:bg-cyan-950 rounded-xl p-4 shadow text-justify mt-0">
                <h5 className="text-lg font-semibold mb-1">
                  🎥 Les &laquo;&nbsp;Tutos de la semaine&nbsp;&raquo;
                </h5>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Ces courtes{' '}
                  <a
                    href="https://youtube.com/playlist?list=PL9xPR9BbyK1dFDQkX_fLsLUwB8OEXw6SE&si=lt4Mjl6Dq-q9sqEk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    vidéos d&apos;Hirsute (Damien Gaumet)
                  </a>{' '}
                  sont idéales pour progresser (qu&apos;on soit débutant ou
                  confirmé).
                </p>
              </div>
            </div>

            {/*--------------------------------------------*/}
            {/*              BLOC PIEGES                   */}
            {/*--------------------------------------------*/}

            <div className="yellowBlock mb-4">
              <h4>😱 5 pièges à éviter&nbsp;:</h4>
              🔸 Se <b>pencher</b> vers l&apos;avant (garde ton buste droit)
              <br />
              🔸 <b>Regarder le sol</b> et ses pieds (fixe l&apos;horizon devant
              toi pour rester stable) <br />
              🔸 <b>Se crisper</b> (la décontraction du corps aide à sentir la
              roue et à réagir aux oscillations, alors respire) <br />
              🔸 Chercher la <b>vitesse</b> dès le départ (la vitesse vient avec
              la maîtrise)
              <br />
              🔸 <b>S&apos;entêter</b> pendant des heures (n&apos;insiste pas,
              laisse le temps à ton corps d&apos;assimiler les sensations, fait
              une pause sinon tu t&apos;épuiseras au risque de te faire mal, et
              ré-essaye plutôt le lendemain après une bonne nuit de repos)
            </div>

            {/*--------------------------------------------*/}
            {/*              BLOC NOSTALGIE                */}
            {/*--------------------------------------------*/}
            <div className="flex flex-col sm:flex-row mt-0 mb-8">
              <aside className="sm:w-full md:w-full lg:w-2/5 flex text-justify place-items-center">
                <span className="text-center">
                  <h4 className="text-center mb-1">
                    Toujours pas convaincu&nbsp;?
                    <br />
                    😁
                  </h4>
                  Alors regarde&nbsp;! &Ccedil;a, c&apos;était moi en 2018.{' '}
                  <br />
                  Et moi aussi j&apos;ai galéré...
                  <br />
                  <br />
                  Comme pour le vélo, l&apos;apprentissage demande{' '}
                  <strong className="text-blue-800 dark:text-blue-200">
                    de la méthode
                  </strong>{' '}
                  et juste un peu de{' '}
                  <strong className="text-blue-800 dark:text-blue-200">
                    persévérance
                  </strong>
                  .
                </span>
              </aside>
              <aside className="sm:w-full md:w-full lg:w-3/5 flex flex-col space-y-0 place-items-center mt-2 justify-center">
                <div className="w-full max-w-[80%] aspect-video">
                  <iframe
                    className="w-full h-full rounded-xl shadow-md"
                    width="336"
                    height="189"
                    src="https://www.youtube.com/embed/VPXLMrs_Ne4"
                    title="Nostalgie - Apprendre la gyroroue"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <p className="mt-0 mb-0 text-xs place-items-center items-center text-center text-gray-600 dark:text-gray-400">
                  <i>Vidéo : On est tous passé par là (nostalgie</i>🥲<i>)</i>
                </p>
              </aside>
            </div>
          </section>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en septembre 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Associations
