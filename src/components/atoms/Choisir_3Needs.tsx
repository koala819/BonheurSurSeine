'use client'

import { Checkbox } from '@heroui/react'

import Image from 'next/image'
import Link from 'next/link'

import Image_bon_sens from '@/public/Image_choisir_identifier_besoins(light)2.jpg'

//-----------------------------------------------
//style des Checkbox utilisés pour les 7 questions.
const checkboxClassNames = {
  label: 'w-full text-justify text-sm md:text-base',
  base:
    'w-full mt-1 mb-0 max-w-full cursor-pointer rounded-lg border-1 ' +
    'border-transparent py-0 gap-1 ' +
    'hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-150 ' +
    'data-[selected=true]:border-emerald-600 ',
  wrapper: 'bg-white rounded-md transition-colors',
}

const Needs = () => {
  return (
    <section
      id="besoins"
      className="scroll-mt-24 my-8 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6"
    >
      <h2>Bien identifier ses besoins</h2>
      {/*----------------------------------------------*/}
      {/*--               BLOC ET IMAGE              --*/}
      {/*----------------------------------------------*/}
      <div className="mt-0 mb-4 grid grid-cols-1 sm:grid-cols-5 gap-2 items-center">
        {/* Bloc texte sur 4 des 5 colonnes */}
        <aside className="sm:col-span-3 space-y-0">
          <div className="greenBlockChoisir mb-0 mt-0">
            <h3 className="mt-0 mb-0">
              ⚠️ &laquo;&nbsp;La roue parfaite n&apos;existe
              pas&nbsp;!&nbsp;&raquo;
            </h3>
            <p>
              Un modèle peut être idéal pour une personne dans une situation
              donnée… mais totalement inadapté pour une autre.
              <br />
              C&apos;est comme pour le vélo,{' '}
              <b>
                tout le monde n&apos;a pas besoin d&apos;un VTT ou d&apos;un
                vélo de course
              </b>
              &nbsp;! 😉
            </p>
          </div>
        </aside>
        {/* Image sur 1 colonnes */}
        <aside className="sm:col-span-2 flex justify-center items-center mt-1">
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
      <div className="mt-0 mb-4 ">
        <p className="">
          Le <strong>piège</strong> serait de ne regarder que les spécifications
          techniques et de n&apos;être attiré que par les nouvelles roues qui
          arrivent sur le marché.
        </p>
        <p className="text-justify">
          D&apos;<b>anciens modèles</b>, sortis il y a déjà plusieurs années,
          constituent encore aujourd&apos;hui des choix tout à fait{' '}
          <b>pertinents</b>.
        </p>
        <p className="text-justify">
          Pour ne pas se tromper et faire le bon choix, il est essentiel de
          définir clairement{' '}
          <strong className="text-emerald-600">son usage principal</strong>, et
          de bien identifier{' '}
          <strong className="text-emerald-600">ses besoins</strong>,{' '}
          <strong className="text-emerald-600">ses exigences</strong> et{' '}
          <strong className="text-emerald-600">ses contraintes</strong>.
        </p>
      </div>
      {/*----------------------------------------------*/}
      {/*--                 critères                 --*/}
      {/*----------------------------------------------*/}
      <div className="mt-0 mb-4">
        <p className="mt-0 mb-0 font-semibold">
          <span className="text-2xl">👉</span>
          <strong className="font-bold">
            Les principaux critères de choix
          </strong>
          &nbsp;:
        </p>
        <ul className="compactlist2">
          <li className="text-justify">
            Le <strong className="text-emerald-600">poids</strong>.
          </li>
          <li className="text-justify">
            La <strong className="text-emerald-600">taille</strong> et le
            diamètre de la roue.
          </li>
          <li className="text-justify">
            La <strong className="text-emerald-600">suspension</strong>.
          </li>
          <li className="text-justify">
            L&apos;<strong className="text-emerald-600">autonomie</strong> (la
            batterie).
          </li>
          <li className="text-justify">
            La qualité des{' '}
            <strong className="text-emerald-600">équipements</strong> (trolley,
            éclairage, pneus, coupe-circuit, etc.).
          </li>
          <li className="text-justify">
            Et surtout, <strong className="text-emerald-600">tester</strong> si
            possible pour connaitre ses ressentis et se faire ton propre avis.
          </li>
        </ul>
        <p className="text-justify ml-1 mt-1">
          Et il faut aussi, bien évidemment, tenir compte de son budget (
          <i>même si, quand on aime, on ne compte pas</i>&nbsp;😅).
        </p>
      </div>
      {/*----------------------------------------------*/}
      {/*--              surdimensionner             --*/}
      {/*----------------------------------------------*/}
      <div className="mt-0 mb-4">
        <p className="mt-0 mb-0 font-semibold">
          <span className="text-2xl">📏</span>
          <strong className="font-bold">Pas besoin de surdimensionner</strong>
          &nbsp;:
        </p>
        <p className="mt-0 mb-4 ml-2 text-justify">
          Il est tentant de{' '}
          <strong className="text-emerald-600">vouloir le meilleur</strong> et
          de choisir une roue aux chiffres impressionnants (puissance, vitesse,
          autonomie). En réalité, rares sont les occasions d&apos;exploiter ces
          spécifications extrêmes. <br />
          En contrepartie, le{' '}
          <strong className="text-emerald-600">poids</strong> grimpe, le{' '}
          <strong className="text-emerald-600">prix d&apos;achat</strong>{' '}
          augmente, et le <strong className="text-emerald-600">stockage</strong>{' '}
          / <strong className="text-emerald-600">transport</strong> se
          compliquent. Si ton usage est en centre-ville, que tu roules peu, ou
          que ton trajet est plat, tu n&apos;exploiteras probablement jamais
          tout ce potentiel. <br />
          <strong className="text-emerald-600">
            Trop surdimensionner, c&apos;est parfois du gaspillage
          </strong>
          .
        </p>
      </div>
      {/*----------------------------------------------*/}
      {/*--               7 QUESTIONS                --*/}
      {/*----------------------------------------------*/}
      <div id="8questions" className="scroll-mt-72 mt-0 mb-4 space-y-0">
        <p className="mt-0 mb-0 font-semibold">
          <span className="text-2xl">🎯</span>
          <strong className="underline font-bold">
            8 questions essentielles
          </strong>{' '}
          à se poser avant d&apos;acheter et choisir ta gyroroue&nbsp;:
        </p>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Je recherche une roue pour&nbsp;: essayer-apprendre&nbsp;? pratiquer
            régulièrement&nbsp;? un usage quotidien&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Mon objectif principal&nbsp;: compléter-remplacer les transports en
            commun (aller du point A au point B)&nbsp;? partir en balade&nbsp;?
            du loisir&nbsp;? faire de très longs trajets&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Mon utilisation principale&nbsp;: pistes cyclables&nbsp;?
            centre-ville&nbsp;? longs trajets&nbsp;? voies vertes&nbsp;?
            terrains offroad&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Ma priorité&nbsp;: le confort&nbsp;? les équipements&nbsp;? la
            performance&nbsp;? la praticité&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Je recherche une roue avant tout munie d&apos;une suspension&nbsp;?
          </Checkbox>
        </div>
        <div className="ml-4">
          <Checkbox color="success" classNames={checkboxClassNames}>
            Je veux une roue simple à entretenir ou bien suis-je prêt à
            bricoler&nbsp;?
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
            Mon budget&nbsp;: &lt;1500€&nbsp;? &lt;2500€&nbsp;? ou plus&nbsp;?
          </Checkbox>
        </div>
      </div>

      {/*----------------------------------------------*/}
      {/*--                  BLOCS                   --*/}
      {/*----------------------------------------------*/}
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
      {/*--------------------------------------------------------*/}
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
        dernière mise à jour : juin 2025
      </p>
    </section>
  )
}

export default Needs
