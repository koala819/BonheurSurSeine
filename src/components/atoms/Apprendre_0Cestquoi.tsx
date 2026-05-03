'use client'

import { Accordion, AccordionItem } from '@heroui/react'

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
          Son pilotage intuitif procure{' '}
          <strong className="text-blue-700 dark:text-blue-400">
            des sensations de glisse uniques et incomparables
          </strong>
          , mêlant équilibre et liberté, proche de celles du ski.
          <br />
          {/*… mais sur la terre ferme.*/}
          Je le répète souvent&nbsp;: c&apos;est à mes yeux{' '}
          <strong className="text-blue-700 dark:text-blue-400">
            le meilleur moyen de transport
          </strong>
          &nbsp;!
        </p>
      </div>

      {/*---------------------------------------------------------*/}
      {/* ----------------- Comment ça fonctionne --------------- */}
      {/*---------------------------------------------------------*/}
      <div className="my-1 mx-6 bg-indigo-100 dark:bg-sky-800 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:shadow-sky-700">
        <Accordion variant="light" className="px-0">
          <AccordionItem
            key="1"
            aria-label="Comment ça fonctionne ?"
            title={
              <h4 className="ml-5 font-bold mt-4 mb-4">
                🚀 Comment ça fonctionne&nbsp;?
              </h4>
            }
            indicator={
              <strong className="transition-transform">
                <svg
                  className="mx-8 w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
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
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 mb-2">
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
                <ul className="list-none space-y-1 p-0 mb-4">
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
              <div className="place-content-center place-items-center mb-2">
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
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      {/*---------------------------------------------------------*/}
      {/* ---------------  Pourquoi ça tient debout ------------- */}
      {/*---------------------------------------------------------*/}
      <div className="my-1 mx-6 bg-indigo-100 dark:bg-sky-800 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:shadow-sky-700">
        <Accordion variant="light" className="px-0">
          <AccordionItem
            key="1"
            aria-label="Et pourquoi ça tient debout ?"
            title={
              <h4 className="ml-5 font-bold mt-4 mb-4">
                🧠 Pourquoi ça tient debout&nbsp;?
              </h4>
            }
            indicator={
              <strong className="transition-transform">
                <svg
                  className="mx-8 w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
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
            <div className="mx-auto px-4">
              <ul className="list-disc ml-6 space-y-1 mb-6">
                <li>
                  L&apos;électronique ajuste en continu la stabilité des pédales
                  (programmées pour toujours rester à l&apos;horizontale).
                </li>
                <li>
                  C&apos;est le moteur qui produit tout l&apos;effort nécessaire
                  pour avancer.
                </li>
                <li>
                  Le mouvement (la rotation) crée un{' '}
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
                  Le pilote, lui, contrôle la direction (gauche/droite) comme en
                  vélo ou en ski.
                </li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      {/*---------------------------------------------------------*/}
      {/* -----------------  Et c'est compliqué   --------------- */}
      {/*---------------------------------------------------------*/}
      <div className="my-1 mx-6 bg-indigo-100 dark:bg-sky-800 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:shadow-sky-700">
        <Accordion variant="light" className="px-0">
          <AccordionItem
            key="1"
            aria-label="Et c'est compliqué ?"
            title={
              <h4 className="ml-5 font-bold mt-4 mb-4">
                🤔 Et c&apos;est compliqué&nbsp;?
              </h4>
            }
            indicator={
              <strong className="transition-transform">
                <svg
                  className="mx-8 w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
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
            <p className="max-w-6xl mx-auto gap-4 px-4 mb-2">
              La gyroroue, ça intrigue… et ça alimente pas mal{' '}
              <b>d&apos;idées reçues</b>.<br />
              Démêlons le vrai du faux&nbsp;!
            </p>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 px-4 mb-2">
              {/* ------------------ Idées reçues ------------------ */}
              <div className="p-2 bg-indigo-50 dark:bg-sky-700 rounded-lg">
                <p className="text-sm">
                  ❌ «&nbsp;Il faut avoir de l&apos;équilibre.&nbsp;»
                </p>
                <p className="text-sm">
                  ✅ Nul besoin d&apos;être acrobate&nbsp;! En réalité, quelques
                  minutes suffisent pour trouver l&apos;équilibre.
                </p>
              </div>
              <div className="p-2 bg-indigo-50 dark:bg-sky-700 rounded-lg">
                <p className="text-sm">
                  ❌ «&nbsp;Mais c&apos;est dangereux...&nbsp;»
                </p>
                <p className="text-sm">
                  ✅ Comme tout véhicule, il y a des risques, mais avec un peu
                  de pratique et un bon équipement, c&apos;est aussi sûr et
                  maîtrisable qu&apos;un vélo ou une trottinette.
                </p>
              </div>
              <div className="p-2 bg-indigo-50 dark:bg-sky-700 rounded-lg">
                <p className="text-sm">
                  ❌ «&nbsp;C&apos;est pour les jeunes, ça&nbsp;!&nbsp;»
                </p>
                <p className="text-sm">
                  ✅ Pas du tout ! On croise des wheelers de 7 à 77 ans. La
                  gyroroue est avant tout une question de pratique et de
                  plaisir.
                </p>
              </div>
              <div className="p-2 bg-indigo-50 dark:bg-sky-700 rounded-lg">
                <p className="text-sm">
                  ❌ «&nbsp;Et &ccedil;a va pas glisser&nbsp;?&nbsp;»
                </p>
                <p className="text-sm">
                  ✅ Une gyroroue ne dérape pas. Avec un pneu adéquat, on peut
                  évoluer sur toutes les surfaces, même la neige&nbsp;!
                </p>
              </div>
              <div className="p-2 bg-indigo-50 dark:bg-sky-700 rounded-lg">
                <p className="text-sm">
                  ❌ «&nbsp;Il faut un équipement.&nbsp;»
                </p>
                <p className="text-sm">
                  ✅ Pas besoin d&apos;armure&nbsp;! Un casque et des gants
                  suffisent pour rouler sereinement, comme pour le vélo.
                </p>
              </div>
              <div className="p-2 bg-indigo-50 dark:bg-sky-700 rounded-lg">
                <p className="text-sm">
                  ❌ «&nbsp;&Ccedil;a coûte cher, non&nbsp;?&nbsp;»
                </p>
                <p className="text-sm">
                  ✅ Oui et non… les coûts d&apos;entretien sont faibles&nbsp;:
                  on économise sur l&apos;essence et les transports. À long
                  terme, c&apos;est souvent rentable.
                </p>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      {/*------------------------------------*/}
      <div className="mb-6 mx-6 bg-indigo-100 dark:bg-sky-800 p-4 rounded-xl shadow-md">
        <h4 className="mx-3 font-bold mt-1 mb-1">
          ✳️ Oui, la gyroroue n&apos;est pas un véhicule comme les autres&nbsp;!{' '}
        </h4>
        <p className="mx-3 mt-1">
          Bonne nouvelle&nbsp;:{' '}
          <strong className="text-blue-700 dark:text-blue-300">
            tout le monde peut y arriver
          </strong>
          &nbsp;!😊
        </p>
        <p className="mx-3 mt-3">Et pour en profiter&nbsp;:</p>
        <div className="mx-3 mb-3">
          <ul className="list-disc ml-6 space-y-0">
            <li>
              Pas besoin d&apos;avoir un don, un sens de l&apos;équilibre
              particulier, d&apos;être motard, etc…
            </li>
            <li>
              Elle demande juste{' '}
              <strong className="text-blue-700 dark:text-blue-300">
                un petit temps d&apos;apprentissage
              </strong>
              …
            </li>
            <li>Et un peu de curiosité, d&apos;envie et de motivation…</li>
          </ul>
        </div>
        <p className="mx-3 mt-1">
          ℹ️ Pour le reste (<i>astuces, code de la route, assurance</i>) et
          éviter les erreurs des débutants,{' '}
          <Link
            href="/debuter-gyroroue"
            className="link-style font-bold text-blue-700 dark:text-blue-400"
          >
            consulte la page <i>L&apos;essentiel pour bien démarrer</i>
          </Link>
          .
        </p>
      </div>

      {/*------------------------------------*/}
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
        dernière mise à jour : avril 2026
      </p>
      {/*</AccordionItem>
      </Accordion>*/}
    </section>
  )
}

export default Maintenance
