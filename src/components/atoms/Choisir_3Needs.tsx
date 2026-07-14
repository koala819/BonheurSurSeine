'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { QuizBesoins } from '@/src/components/atoms/Choisir_3Needs-quizz'

import Image_bon_sens from '@/public/2.choisir/Image_choisir_identifier_besoins(light)2.jpg'

//-----------------------------------------------
//style des Checkbox utilisés pour les 7 questions.
const QuestionItem = ({ children }: { children: any }) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={`
        ml-3 group flex items-center gap-2 p-0.5 rounded-lg cursor-pointer transition-all duration-200 border-[0.5px]
        ${
          isSelected
            ? 'border-emerald-600 bg-emerald-50/50 dark:bg-emerald-900/20'
            : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50'
        }
      `}
    >
      {/* Checkbox sur mesure */}
      <div
        className={`
        flex-shrink-0 m-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
        ${
          isSelected
            ? 'bg-emerald-600 border-emerald-600'
            : 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-500'
        }
      `}
      >
        {isSelected && (
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>

      {/* Texte de la question */}
      <p className="flex-1 text-sm md:text-base leading-relaxed text-gray-800 dark:text-gray-200">
        {children}
      </p>
    </div>
  )
}

const Needs = () => {
  return (
    <section
      id="besoins"
      className="scroll-mt-24 my-8 bg-white dark:bg-gray-700 shadow-md rounded-lg p-2 md:p-4 lg:p-6"
    >
      <h2 className="ml-2 md:ml-0">Bien identifier ses besoins</h2>
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
          Le <strong className="text-emerald-600">piège </strong>serait de ne
          regarder que les spécifications techniques et de n&apos;être attiré
          que par les nouvelles roues qui arrivent sur le marché.
        </p>
        <p className="">
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
          <span className="text-2xl">👉 </span>
          <strong className="font-bold">
            Les principaux critères de choix
          </strong>
          &nbsp;:
        </p>
        <ul className="compactlist2">
          <li className="text-justify">
            Le <strong className="text-emerald-600">poids</strong>.
          </li>
          <li className="">
            La <strong className="text-emerald-600">taille</strong> et le
            diamètre de la roue.
          </li>
          <li className="">
            La <strong className="text-emerald-600">suspension</strong>.
          </li>
          <li className="">
            L&apos;<strong className="text-emerald-600">autonomie</strong>{' '}
            (batterie et puissance moteur).
          </li>
          <li className="">
            La qualité des{' '}
            <strong className="text-emerald-600">équipements</strong> (trolley,
            éclairage, pneus, coupe-circuit, etc.).
          </li>
          <li className="">
            Et surtout, <strong className="text-emerald-600">tester </strong>si
            possible pour connaitre ses ressentis et se faire son propre avis.
          </li>
        </ul>
        <p className="ml-1 mt-1">
          Et bien évidemment, il faut aussi tenir compte de son{' '}
          <strong className="text-emerald-600">budget </strong>(
          <i>même si, quand on aime, on ne compte pas</i>&nbsp;😅).
        </p>
      </div>

      {/*----------------------------------------------*/}
      {/*--                  BLOCS                   --*/}
      {/*----------------------------------------------*/}
      <div className="greenBlockChoisir mb-0 mt-0">
        <h3 className="mb-0 mt-0 text-left">
          💡 Pas besoin d&apos;avoir la dernière grosse roue pour découvrir le
          bonheur de rouler&nbsp;!
        </h3>
        <p className="mb-0 mt-0">
          D&apos;<b>anciens modèles</b>, sortis il y a plusieurs années,
          constituent toujours aujourd&apos;hui des choix <b>pertinents</b>.
        </p>
      </div>

      {/*----------------------------------------------*/}
      {/*--              surdimensionner             --*/}
      {/*----------------------------------------------*/}
      <div className="mt-4 mb-4">
        <p className="mt-0 mb-0 font-semibold">
          <span className="text-2xl">📏 </span>
          <strong className="font-bold">Pas besoin de surdimensionner</strong>
          &nbsp;:
        </p>
        <p className="mt-0 mb-4 ml-2">
          Il est tentant de{' '}
          <strong className="text-emerald-600">vouloir le meilleur </strong>et
          de choisir une roue aux chiffres impressionnants (puissance, vitesse,
          autonomie). En réalité, rares sont les occasions d&apos;exploiter ces
          spécifications extrêmes. <br />
          Et en contrepartie,
          <strong className="text-emerald-600"> le poids </strong> grimpe,
          <strong className="text-emerald-600"> le prix </strong>
          d&apos;achat augmente, et
          <strong className="text-emerald-600"> le stockage</strong> et
          <strong className="text-emerald-600"> le transport </strong> se
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
      {/*--               8 QUESTIONS                --*/}
      {/*----------------------------------------------*/}
      <div id="8questions" className="scroll-mt-56 mt-4 mb-4 space-y-0">
        <p className="mt-0 mb-0 font-semibold">
          <span className="text-2xl">🎯 </span>
          <strong className="underline font-bold text-lg">
            8 questions essentielles
          </strong>{' '}
          à se poser avant de choisir et acheter ta gyroroue&nbsp;:
        </p>
        <div className="space-y-0.5">
          <QuestionItem>
            Je recherche une roue pour&nbsp;: essayer-apprendre&nbsp;? pratiquer
            régulièrement&nbsp;? un usage quotidien&nbsp;?
          </QuestionItem>
          <QuestionItem>
            Mon objectif principal&nbsp;: compléter/remplacer les transports en
            commun (aller du point A au point&nbsp;B)&nbsp;? partir
            en&nbsp;balade&nbsp;? du&nbsp;loisir&nbsp;? faire de très longs
            trajets&nbsp;?
          </QuestionItem>
          <QuestionItem>
            Mon utilisation principale&nbsp;: pistes&nbsp;cyclables&nbsp;?
            centre&#8209;ville&nbsp;? agglomération&nbsp;?
            voies&nbsp;vertes&nbsp;? terrains&nbsp;offroad&nbsp;?
          </QuestionItem>
          <QuestionItem>
            Ma priorité&nbsp;: le confort&nbsp;? les&nbsp;équipements&nbsp;?
            la&nbsp;performance&nbsp;? la&nbsp;praticité&nbsp;?
          </QuestionItem>
          <QuestionItem>
            Je recherche une roue avant tout munie d&apos;une suspension (cf.{' '}
            <Link
              href={'/guide-utile-gyroroue#suspension'}
              className="text-emerald-600 underline hover:text-blue-700 dark:hover:text-blue-400"
              target="_blank"
            >
              l&apos;usage de la suspension)
            </Link>
            &nbsp;?
          </QuestionItem>
          <QuestionItem>
            Je veux une roue simple à entretenir ou bien suis-je prêt à
            bricoler&nbsp;?
          </QuestionItem>
          <QuestionItem>
            Vais-je devoir souvent porter ma roue&nbsp;? combien suis-je capable
            de soulever&nbsp;: 20kg&nbsp;? 25kg&nbsp;? 30kg&nbsp;?
          </QuestionItem>
          <QuestionItem>
            Mon budget&nbsp;: &lt;1500€&nbsp;? &lt;2500€&nbsp;?
            ou&nbsp;plus&nbsp;?
          </QuestionItem>
        </div>
      </div>

      {/*-- APPEL DU COMPOSANT INTERACTIF --*/}
      <QuizBesoins />

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
        dernière mise à jour : avril 2026
      </p>
    </section>
  )
}

export default Needs
