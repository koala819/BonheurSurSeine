'use client'

import { Checkbox } from '@nextui-org/react'

import Image from 'next/image'

import Image_bon_sens from '@/public/Image_choisir_identifier_besoins(light)2.jpg'

//-----------------------------------------------
//style des Checkbox utilisés pour les 7 questions.
const checkboxClassNames = {
  label: 'w-full text-justify text-sm md:text-base',
  base:
    'w-full mt-1 mb-1 max-w-full cursor-pointer rounded-lg border-1 ' +
    'border-transparent py-0 gap-1 ' +
    'hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-150 ' +
    'data-[selected=true]:border-emerald-600 ',
  wrapper: 'bg-white rounded-md transition-colors',
}

const Needs = () => {
  return (
    <section
      id="besoins"
      className="scroll-mt-24 my-8 space-y-2 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6"
    >
      <h2>Bien identifier ses besoins</h2>
      {/*----------------------------------------------*/}
      {/*--               BLOC ET IMAGE              --*/}
      {/*----------------------------------------------*/}
      <div className="mb-0 grid grid-cols-1 sm:grid-cols-5 gap-2 items-center">
        {/* Bloc texte sur 4 des 5 colonnes */}
        <aside className="sm:col-span-3 space-y-0">
          <div className="greenBlockChoisir mb-0 mt-0">
            <h3 className="mt-0 mb-0">
              ⚠️ &laquo;&nbsp;La roue parfaite n&apos;existe
              pas&nbsp;!&nbsp;&raquo;
            </h3>
            Un modèle pourra, dans une situation donnée, être idéal pour une
            personne, mais inadapté pour une autre.
            <br />
            C&apos;est comme pour le vélo, tout le monde n&apos;a pas besoin
            d&apos;un VTT ou d&apos;un vélo de course&nbsp;! 😉
          </div>
        </aside>
        {/* Image sur 1 colonnes */}
        <aside className="sm:col-span-2 flex justify-center items-center">
          <Image
            src={Image_bon_sens}
            alt="Choisir sa gyroroue"
            width={/*1024*/ 400}
            height={/*1240*/ 400}
            className="object-contain rounded-lg cursor-pointer shadow-md transition-shadow max-h-full"
          />
        </aside>
      </div>
      {/*----------------------------------------------*/}
      {/*--                 PARAGRAPHE               --*/}
      {/*----------------------------------------------*/}
      <div className="space-y-0">
        <p className="text-justify mb-4">
          D&apos;expérience, chaque modèle excelle pour un usage précis, avec
          ses forces, ses qualités et ses faiblesses. Et avec la diversité des
          modèles et des fabricants, de nombreux wheelers hésitent avant leur
          achat.
        </p>
        <p className="text-justify">
          Pour ne pas se tromper et faire le bon choix, il est essentiel de{' '}
          <strong className="text-emerald-600">
            définir clairement son usage
          </strong>
          , de bien{' '}
          <strong className="text-emerald-600"> identifier ses besoins</strong>{' '}
          et ses <strong className="text-emerald-600">exigences</strong>. Et il
          faut aussi, bien évidemment, tenir compte de son budget (
          <i>même si, quand on aime, on ne compte pas</i>&nbsp;😅).
        </p>

        <p className="text-justify">
          Voici les{' '}
          <strong className="text-emerald-600"> principaux critères</strong> à
          prendre en compte pour faire son choix&nbsp;:
        </p>
        <ul className="compactlist">
          <li className="text-justify">
            Le <strong>poids</strong>.
          </li>
          <li className="text-justify">
            La <strong>taille</strong> et le diamètre de la roue.
          </li>
          <li className="text-justify">
            La <strong>suspension</strong>.
          </li>
          <li className="text-justify">
            L&apos;<strong>autonomie</strong> (la batterie).
          </li>
          <li className="text-justify">
            La qualité des <strong>équipements</strong> (trolley, éclairage,
            pneus, coupe-circuit, etc.).
          </li>
          <li className="text-justify">
            Et surtout, <strong>tester</strong> si possible pour connaitre ses
            ressentis et se faire ton propre avis.
          </li>
        </ul>
      </div>
      {/*----------------------------------------------*/}
      {/*--               7 QUESTIONS                --*/}
      {/*----------------------------------------------*/}
      <div className="space-y-0">
        <p className="text-justify mt-4">
          Pour t&apos;aider à bien choisir ta gyroroue, voici{' '}
          <strong className="text-emerald-600">
            <u>7 questions essentielles</u>
          </strong>{' '}
          à se poser avant d&apos;acheter&nbsp;:
        </p>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Je recherche une roue pour&nbsp;: essayer-apprendre&nbsp;? pratiquer
            régulièrement&nbsp;? un usage quotidien&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Je recherche une roue pour&nbsp;: compléter-remplacer les transports
            en commun (aller du point A au point B)&nbsp;? le loisir et se
            balader&nbsp;? faire de très longs trajets&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Je recherche en priorité&nbsp;: le confort&nbsp;? les
            équipements&nbsp;? la performance&nbsp;? la praticité&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Je recherche une roue avant tout munie d&apos;une suspension&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Je recherche une roue&nbsp;: simple à entretenir&nbsp;? ou bien
            suis-je prêt à bricoler&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Vais-je devoir souvent porter ma roue&nbsp;? combien suis-je capable
            de soulever&nbsp;: 20kg&nbsp;? 25kg&nbsp;? 30kg&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Quel est mon budget&nbsp;: &lt;1500€&nbsp;? &lt;2500€&nbsp;? ou
            plus&nbsp;?
          </Checkbox>
        </div>
      </div>
      {/*------------------------------------*/}
      <div className="greenBlockChoisir mb-0 mt-0">
        <h3 className="mb-0 mt-0 text-left">
          🔎 Cela va de soi, mais on ne peut pas tout avoir&nbsp;!
        </h3>
        <p className="mb-0 mt-0">
          Si l&apos;on souhaite conserver un{' '}
          <strong>objet compact et léger</strong>, il faudra forcément accepter
          de faire des concessions&nbsp;: batterie, suspension, puissance,
          équipements, matériaux…
        </p>
      </div>
      <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
        <br />
        article mis à jour en septembre 2025
      </p>
    </section>
  )
}

export default Needs
