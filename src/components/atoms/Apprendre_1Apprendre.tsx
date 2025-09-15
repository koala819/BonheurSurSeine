'use client'

//import { Accordion, AccordionItem } from '@nextui-org/react'
//import { useEffect, useState } from 'react'
//import ReactPlayer from 'react-player'
import Image from 'next/image'
import Link from 'next/link'

import apprendre from '@/public/gyroroues_apprendre202509.png'

const Apprendre = () => {
  return (
    <section
      id="apprendre"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={apprendre}
          alt="Apprendre la gyroroue"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white font-bold text-center">
            Apprendre la gyroroue
          </h2>
        </div>
      </div>
      {/*--------------------------------------------*/}
      {/*              INTRO + VIDEO                 */}
      {/*--------------------------------------------*/}
      <div className="flex flex-col sm:flex-row mt-0 mb-4 gap-4">
        <aside className="sm:w-3/5 md:w-1/2 lg:w-1/2 place-content-center">
          <h3 className="mb-3 font-bold ">🎓 Comment faire&nbsp;?</h3>
          <p className="mt-0 mb-1">
            Tu ne sais pas par où commencer&nbsp;?{' '}
            <strong className="text-blue-700 dark:text-blue-300">
              Cette vidéo est faite pour toi{' '}
            </strong>
            et facilitera ton apprentissage. <br />
            <br />
            👉 Avec un peu de{' '}
            <strong className="text-blue-700 dark:text-blue-300">
              méthode
            </strong>{' '}
            et de{' '}
            <strong className="text-blue-700 dark:text-blue-300">
              persévérance
            </strong>
            , la gyroroue devient intuitive et sécurisante.
            <br />
            Tu vas rapidement pouvoir découvrir la roue électrique,{' '}
            <strong className="text-blue-700 dark:text-blue-300">
              progresser
            </strong>{' '}
            pas à pas, et surtout{' '}
            <strong className="text-blue-700 dark:text-blue-300">
              éviter les pièges courants
            </strong>
            .
          </p>
        </aside>
        <aside className="sm:w-2/5 md:w-1/2 lg:w-1/2 flex flex-col space-y-0 place-content-center mt-2 justify-center">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-md"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/II3MQNy7b0I?si=g5gJhImayjyiaOZ7"
              title="Apprendre la gyroroue (méthode simple)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <p className="mt-0 mb-0 text-xs place-items-center items-center text-center italic text-gray-600 dark:text-gray-400">
            Apprendre la gyroroue (méthode simple)
          </p>
        </aside>
      </div>
      {/*--------------------------------------------*/}
      {/*              BLOC CONSEIL                  */}
      {/*--------------------------------------------*/}
      <div className="my-4">
        <div className="blueBlock my-0 p-4">
          <h4 className="mt-0 mb-2 text-xl font-bold">
            💡 7 conseils à retenir :
          </h4>
          <div className="mt-0 mb-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch">
            {/* -- 6 cartes conseils (map) -- */}
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
                className="bg-blue-50 dark:bg-cyan-950 rounded-xl p-4 shadow text-justify h-full flex flex-col"
              >
                <h5 className="text-lg font-semibold mb-2">
                  {icon} {title}
                </h5>
                <p className="text-sm text-gray-800 dark:text-gray-200 flex-1">
                  {text}
                </p>
              </div>
            ))}
            {/* -- Tuto : placé DANS la même grid et qui occupe toute la largeur -- */}
            <div className="bg-blue-50 dark:bg-cyan-950 rounded-xl p-4 shadow text-justify col-span-1 sm:col-span-2 lg:col-span-3 h-full flex flex-col">
              <h5 className="text-lg font-semibold mb-2">
                🎥 Les « Tutos de la semaine »
              </h5>
              <p className="text-sm text-gray-800 dark:text-gray-200 flex-1">
                Ces courtes{' '}
                <a
                  href="https://youtube.com/playlist?list=PL9xPR9BbyK1dFDQkX_fLsLUwB8OEXw6SE&si=lt4Mjl6Dq-q9sqEk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  vidéos d&apos;Hirsute (Damien Gaumet)
                </a>{' '}
                sont idéales pour progresser (qu&apos;on soit <b>débutant</b> ou{' '}
                <b>confirmé</b>
                ).
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------------------------*/}
      {/*              BLOC PIEGES                   */}
      {/*--------------------------------------------*/}
      <div className="yellowBlock mb-4">
        <h4 className="mb-2">😱 5 pièges à éviter&nbsp;:</h4>
        🔸 Se <b>pencher</b> vers l&apos;avant (garde ton buste droit)
        <br />
        🔸 <b>Regarder le sol</b> et ses pieds (fixe l&apos;horizon devant toi
        pour rester stable) <br />
        🔸 <b>Se crisper</b> (la décontraction du corps aide à sentir la roue et
        à réagir aux oscillations, alors respire) <br />
        🔸 Chercher la <b>vitesse</b> dès le départ (la vitesse vient avec la
        maîtrise)
        <br />
        🔸 <b>S&apos;entêter</b> pendant des heures (n&apos;insiste pas, laisse
        le temps à ton corps d&apos;assimiler les sensations, fait une pause
        sinon tu t&apos;épuiseras au risque de te faire mal, et ré-essaye plutôt
        le lendemain après une bonne nuit de repos)
      </div>

      {/*--------------------------------------------*/}
      {/*              BLOC NOSTALGIE                */}
      {/*--------------------------------------------*/}
      <div className="mt-7 mb-4">
        <h4 className="text-center">Toujours pas convaincu&nbsp;? 😁</h4>
        <p className="text-center">
          {/*&Ccedil;a,*/}
          <Link
            href="https://www.youtube.com/watch?v=VPXLMrs_Ne4"
            target="_blank"
            className="link-style font-bold text-blue-700 dark:text-blue-300"
          >
            Alors regarde
          </Link>
          &nbsp;! C&apos;était en 2018, et moi aussi j&apos;ai galéré...
        </p>
        <p className="text-center">
          Comme pour le vélo, cela demande juste un peu d&apos;
          <strong className="text-blue-700 dark:text-blue-300">audace</strong>,
          de{' '}
          <strong className="text-blue-700 dark:text-blue-300">méthode</strong>{' '}
          et de{' '}
          <strong className="text-blue-700 dark:text-blue-300">
            persévérance
          </strong>
          .
        </p>
      </div>

      <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
        article mis à jour en septembre 2025
      </p>
    </section>
  )
}

export default Apprendre
