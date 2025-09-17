'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

//import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import gyroroues from '@/public/gyroroues_bss202502.jpg'

const Maintenance = () => {
  return (
    <section
      id="cestquoi"
      className="scroll-mt-52 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      {/*<h2 className="mb-8">C&apos;est quoi une gyroroue&nbsp;?</h2>*/}
      <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={gyroroues}
          alt="Découvrir la gyroroue"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white font-bold text-center">
            C&apos;est quoi une gyroroue&nbsp;?
          </h2>
        </div>
      </div>

      {/*---------------------------------------------*/}
      {/* ------------------ Intro ------------------ */}
      <div className="mx-6 mt-0 mb-4">
        <p className="mt-0 mb-2">
          <strong className="text-blue-700 dark:text-blue-400">
            Compacte, fun
          </strong>{' '}
          et électrique, la gyroroue est le moyen de transport le plus{' '}
          <strong className="text-blue-700 dark:text-blue-400">
            pratique, efficace et polyvalent
          </strong>
          . Parfait pour se déplacer librement en ville ou à la campagne&nbsp;!
        </p>
        <p className="mt-0 mb-1">
          {/*Je le répète très souvent : c&apos;est à mes yeux le meilleur moyen de
          transport personnel&nbsp;!
          <br />*/}
          Son pilotage intuitif procure{' '}
          <strong className="text-blue-700 dark:text-blue-400">
            des sensations de glisse uniques et incomparables
          </strong>
          , mêlant équilibre et liberté, proche de celles du ski.
          {/*… mais sur la terre ferme.*/}
        </p>
      </div>

      {/*---------------------------------------------------------*/}
      {/* ----------------- Comment ça fonctionne --------------- */}
      {/*---------------------------------------------------------*/}
      <div className="my-1 mx-6 bg-indigo-100 dark:bg-sky-800 rounded-xl shadow-md">
        <Accordion isCompact>
          <AccordionItem
            key="1"
            aria-label="Comment ça fonctionne ?"
            title={
              <h3 className="mx-5 font-bold mt-1 mb-1">
                🚀 Comment ça fonctionne&nbsp;?
              </h3>
            }
            indicator={
              <strong className="chevronAccordionItem">&lsaquo;</strong>
            }
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-4">
              {/* ------------------ TEXTE Comment ça marche ------------------ */}
              <div className="">
                <p className="mb-3">
                  Sans guidon ni freins mécaniques, la gyroroue se limite à
                  l&apos;essentiel&nbsp;: une roue, un moteur, une batterie et
                  quelques capteurs. <br />
                  La roue suit naturellement les mouvements et se pilote{' '}
                  <strong className="text-blue-700 dark:text-blue-300">
                    uniquement avec le corps
                  </strong>
                  .
                </p>
                <ul className="list-none space-y-1 p-0 mb-6">
                  <li className="flex items-start mb-0 ">
                    {/* puce personnalisée alignée en haut */}
                    <span className="mr-2 ml-2" aria-hidden="true">
                      ⏩
                    </span>
                    <div>
                      <p>
                        <span className="dark:text-blue-300 font-bold">
                          Avancer
                        </span>{' '}
                        → mettre légèrement son poids sur l&apos;avant.
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
                        <span className="dark:text-blue-300 font-bold">
                          Freiner
                        </span>
                        /
                        <span className="dark:text-blue-300 font-bold">
                          Reculer
                        </span>{' '}
                        → mettre son poids sur l&apos;arrière.
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
                        <span className="dark:text-blue-300 font-bold">
                          Tourner
                        </span>{' '}
                        → mettre son poids sur un côté et tourner les épaules
                        (comme en ski).
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* ------------------ Vidéo ------------------ */}
              <div className="place-content-center place-items-center">
                <div className="w-4/5 sm:w-3/4 md:w-3/4 lg:w-full aspect-video rounded-xl shadow-md overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/qOapkq09Oz0?si=_AX-CJDe8BbCaXfZ"
                    title="Comment fonctionne une gyroroue (version simple)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 text-center">
                  Comment ça fonctionne (<b>version longue</b>)
                </p>
              </div>

              {/* ------------------ Explications ------------------ */}
              <div className="">
                <h3 className="font-bold mb-1">
                  🧠 Pourquoi ça tient debout&nbsp;?
                </h3>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    L&apos;électronique ajuste en continu la stabilité des
                    pédales.
                  </li>
                  <li>C&apos;est le moteur qui produit l&apos;effort.</li>
                  <li>
                    Le mouvement crée un{' '}
                    <Link
                      href="https://youtu.be/RSPUdAKqAgY?t=3"
                      target="_blank"
                      className="font-bold text-blue-700 dark:text-blue-300 underline"
                    >
                      effet gyroscopique{' '}
                    </Link>
                    🎥 (<i>comme une toupie</i>) et assure l&apos;équilibre.
                  </li>
                  <li>
                    Le pilote contrôle la direction (gauche/droite) comme en
                    vélo ou en ski.
                  </li>
                </ul>
              </div>

              {/* ------------------ Idées reçues ------------------ */}
              <div>
                <h3 className="font-bold mb-1">🚫 Idées reçues</h3>
                <div className="space-y-1 mb-3">
                  <div className="p-2 bg-indigo-50 dark:bg-sky-700 rounded-lg">
                    <p className="text-sm">
                      ❌ «&nbsp;C&apos;est trop compliqué&nbsp;»
                    </p>
                    <p className="text-sm">
                      ✅ En réalité, quelques minutes suffisent pour trouver
                      l&apos;équilibre.
                    </p>
                  </div>
                  <div className="p-2 bg-indigo-50 dark:bg-sky-700 rounded-lg">
                    <p className="text-sm">
                      ❌ «&nbsp;C&apos;est trop dangereux&nbsp;»
                    </p>
                    <p className="text-sm">
                      ✅ Comme pour le vélo, avec un peu de pratique et un bon
                      équipement, c&apos;est sûr et maîtrisable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      {/*------------------------------------*/}
      <div className="mb-6 mx-6 bg-indigo-100 dark:bg-sky-800 p-4 rounded-xl shadow-md">
        <p className="mb-3">
          ✳️{' '}
          <b>
            La gyroroue n&apos;est pas un véhicule comme les autres&nbsp;!{' '}
            <br />
          </b>{' '}
          Pour en profiter, elle demande un petit temps d&apos;
          <strong className="text-blue-700 dark:text-blue-300">
            apprentissage
          </strong>
          . Bonne nouvelle&nbsp;: 😊 <b>tout le monde peut y arriver</b>&nbsp;!
        </p>
        <p>
          ℹ️ Pour le reste (<i>astuces, code de la route, assurance</i>) et pour
          éviter les erreurs des débutants,{' '}
          <Link
            href="/debuter-gyroroue"
            className="link-style font-bold text-blue-700 dark:text-blue-400"
          >
            consulte la page <i>Bien Démarrer</i>
          </Link>
          .
        </p>
      </div>

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
