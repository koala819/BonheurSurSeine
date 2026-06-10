'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Graphique_diminution from '@/public/4.guide/BSS-Batterie - Diminution_v20250419.png'
import Tableaux_tensions from '@/public/4.guide/BSS-Batterie - Tableau-tensions_v20250419.png'
import Cellules1 from '@/public/4.guide/BSS-Batterie - cellules1.jpg'
import Cellules2 from '@/public/4.guide/BSS-Batterie - cellules2.jpg'
import jauge_simple from '@/public/4.guide/BSS-Batterie - simple.png'

const Practical_Battery = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'batterie') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('batterie')
      }
      if (hash === 'cells') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('cells')
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
      id="batterie"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700
      rounded-lg p-2 md:p-4 mb-6
      border border-gray-200 dark:border-gray-600
      shadow-md hover:shadow-lg transition-shadow duration-300
     shadow-gray-400 hover:shadow-gray-400
     dark:shadow-neutral-900 dark:hover:shadow-neutral-950
     hover:border-sky-700    dark:hover:border-sky-600
       hover:-translate-y-[1px]"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Pourcentage batterie et autonomie"
          title={
            <h3 className="line-clamp-2 md:line-clamp-none">
              ⚡ La batterie : fonctionnement et autonomie
            </h3>
          }
          indicator={
            <strong className="transition-transform">
              <svg
                className="mx-2 w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
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
          {/*---------------------------------------*/}

          <div className="flex flex-col lg:flex-row items-center mb-2 gap-3">
            {/* TEXTE */}
            <aside className="flex-1">
              <p className="mb-2">
                Le pourcentage batterie est utile, rapide à lire, simple à
                comprendre, mais…{' '}
              </p>
              <div className="pinkBlock mb-2">
                <b className="mb-0 mt-0">
                  ⚠️ On ne sollicite <u>pas</u>&thinsp;(accélération, freinage,
                  vitesse, etc.) sa roue de la même manière à 100%, 50%, ou 20%
                  de batterie…
                </b>
              </div>
              <p className="mb-2 text-left">
                Il est <strong>vital</strong>, <u>pour rouler en sécurité</u>,{' '}
                <strong>
                  de veiller à ce que la batterie ait, à tout moment,
                  suffisamment d&apos;énergie
                </strong>{' '}
                pour répondre à la demande du moteur.
                <br />
                Si le moteur demande plus d&apos;énergie que ne peut en fournir
                la batterie, la roue sera sans énergie&nbsp;et… ce sera la
                chute&nbsp;!
              </p>
            </aside>
            {/* LOGO */}
            <aside className="flex-shrink-0">
              <div
                className="rounded-2xl
                          bg-gray-100 dark:bg-gray-800
                          p-2 shadow-sm"
              >
                <Image
                  src={jauge_simple}
                  alt="Assemblage d'une batterie lithium-ion"
                  className="rounded-lg w-full object-cover shadow-sm
                            min-w-[90px] max-w-[400px]"
                  priority={false}
                />
              </div>
            </aside>
          </div>

          {/*---------------------------------------*/}

          <p className="mb-2 text-left">
            Fais donc{' '}
            <Link
              href="/debuter-gyroroue#bonsens"
              className="link-style font-bold text-black dark:text-white"
            >
              <i>preuve de bon sens</i>
            </Link>
            &nbsp;: ne va pas au-delà des limites de la roue (de son moteur
            et/ou de sa batterie). Respecte le tilt-back et ne désactive jamais
            les <i>&ldquo;bips&rdquo;</i>.
            <br />
            Pour cela, l&apos;indicateur le plus utilisé est le P.W.M. (pour en
            savoir plus sur les cellules et le PWM, consulte{' '}
            <Link
              href="/guide-utile-gyroroue#dico"
              className="link-style font-bold text-black dark:text-white"
            >
              Le P&apos;tit Dico du Bonheur
            </Link>
            ).
          </p>
          {/*---------------------------------------*/}
          {/*----------- En quelques mot -----------*/}
          {/*---------------------------------------*/}
          <h4 className="mt-4 mb-2">➡️ Fonctionnement</h4>
          <div className="blueBlock mb-4">
            <p className="mt-0 mb-0 font-bold">
              {' '}
              Ce qu&apos;il faut savoir&nbsp;:
            </p>
            <p>
              🔸 Les batteries des gyroroues sont à ce jour composées de
              cellules lithium-ion.
              <br />
              🔸 La batterie a une tension max (exemple&nbsp;: 84.0v, 100.8v,
              126v, 151.2v…) et une tension min de fonctionnement. Sortir de
              cette plage risque d&apos;abîmer les cellules.
              <br />
              🔸 Le BMS (Battery Management System) gère les cellules de la
              batterie, et mesure en temps réel la tension (celle-ci diminue au
              fur et à mesure de l&apos;utilisation).
              <br />
              🔸 C&apos;est un calcul qui convertit cette tension instantanée en
              un pourcentage approximatif (de 100% à 0%). <br />
            </p>
          </div>
          <div className="mb-2 flex flex-col md:flex-row gap-4 items-center">
            <aside className="md:w-3/5">
              <p className="text-left ml-2">
                🔋&nbsp;100%&nbsp;: la tension maximale. <br />
                🪫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0%&nbsp;: la tension minimum.{' '}
                <br />
                🤔 Entre les 2&nbsp;? Le fabricant décide de la manière dont le
                % évolue, ainsi que des tensions max/min (pour avoir une{' '}
                <strong>marge de sécurité</strong> et ne pas abîmer les cellules
                de la batterie). <br />
                La diminution du % peut prendre une forme&nbsp;:
                <br />
                <span className="mt-0 mb-0">
                  &emsp;&bull;&ensp;Linéaire (diminution régulière, en même
                  temps que la tension).
                  <br />
                  &emsp;&bull;&ensp;Convexe (diminution lente au début, puis
                  rapide en fin de batterie).
                  <br />
                  &emsp;&bull;&ensp;Concave (diminution rapide au début, puis
                  lente en fin de batterie).
                </span>
                <br />
              </p>
              <p className="text-left mt-2 ml-2">
                Il faut aussi garder à l&apos;esprit que{' '}
                <strong>la tension ne diminue pas de manière linéaire</strong>{' '}
                avec le kilométrage parcouru&nbsp;!
              </p>
            </aside>
            <aside className="md:w-2/5 text-center text-xs mb-0">
              <Link href={Graphique_diminution.src} passHref target="_blank">
                <Image
                  src={Graphique_diminution}
                  alt="Graphique_diminution"
                  width={632}
                  height={472}
                  className="rounded-lg cursor-pointer shadow-md transition-shadow mb-1"
                />
              </Link>
              Le graphique ci-dessus illustre ce phénomène
              <br />
              <i> (volontairement exagéré)</i>.
            </aside>
          </div>
          {/*---------------------------------------*/}
          <div className="blueBlock mb-4">
            <b className="mb-0 mt-0">
              Avec un moteur électrique, l&apos;autonomie réelle n&apos;est pas
              une donnée absolue. <br />
            </b>
            <p>
              Elle dépend de nombreux paramètres&nbsp;:{' '}
              <i>
                poids du wheeler, accélérations, vitesse, pression et type de
                pneu, vent, température ambiante, terrain, profil et nature du
                trajet…
              </i>
            </p>
          </div>
          {/*---------------------------------------*/}
          {/*----------- Tension minimale ----------*/}
          {/*---------------------------------------*/}
          <h4 className="mt-4 mb-2">➡️ Tension minimale</h4>
          <p className="text-left">
            Certains préfèrent{' '}
            <strong>surveiller directement la tension </strong>pour connaitre
            l&apos;état de la batterie.
            <br />
            Voici quelques valeurs utiles pour décider dans quelle mesure
            solliciter la roue&nbsp;:
          </p>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2 text-sm">
            Attention, il s&apos;agit de <u>données théoriques</u>
            &thinsp;soumises à l&apos;algorithme du fabricant et aux modèles des
            cellules qui feront varier ces données.
          </p>
          <div className="mt-2 flex justify-center">
            <Link href={Tableaux_tensions.src} passHref target="_blank">
              <Image
                src={Tableaux_tensions}
                alt="Tableaux des tensions"
                width={768}
                height={432}
                className="rounded-lg cursor-pointer shadow-md transition-shadow"
              />
            </Link>
          </div>
          {/*---------------------------------------*/}
          {/*----------- type de cellule -----------*/}
          {/*---------------------------------------*/}
          <h4 className="mt-6 mb-2 scroll-mt-24" id="cells">
            ➡️ Et le type de cellule&nbsp;?
          </h4>
          <div className="flex flex-col sm:flex-row items-center mb-2 gap-1">
            {/* TEXTE */}
            <aside className="flex-1">
              <p className="mb-0">
                On entend souvent parler des modèles de cellule (
                <i>Samsung 50S, 50E, 50GB, Molicel P42A, LG M50LT, etc.</i>)
                comme s&apos;il s&apos;agissait d&apos;un critère décisif pour
                une roue plus performante, plus durable, plus sûre ou avec plus
                d&apos;autonomie.
                <br />
                D&apos;ailleurs, les fabricants proposent parfois plusieurs
                choix. Et s&apos;il est normal de vouloir le meilleur pour sa
                roue, les fabricants utilisent en réalité déjà ce qui se fait de
                mieux (la technologie lithium-ion présente beaucoup
                d&apos;avantages et est déjà très optimisée).
              </p>
            </aside>
            {/* LOGO */}
            <aside className="flex-shrink-0">
              <div
                className="rounded-2xl
                          bg-gray-100 dark:bg-gray-800
                          p-2 shadow-sm"
              >
                <Image
                  src={Cellules1}
                  alt="Cellules lithium-ion cylindriques"
                  className="rounded-lg  shadow-sm w-auto object-contain
                            min-w-[90px] max-w-[180px]"
                  priority={false}
                />
              </div>
            </aside>
          </div>
          <p className="mb-2">
            Les cellules lithium-ion ne sont pas toutes identiques. Les
            différences reposent notamment sur la conception des électrodes, la
            chimie et la résistance interne, qui influencent les pertes
            thermiques et la chute de tension sous forte sollicitation. On
            distingue généralement 2 grandes familles&nbsp;:
            <br />
            🔹 les cellules orientées capacité (pour maximiser
            l&apos;autonomie).
            <br />
            🔹 les cellules orientées puissance (capables de mieux supporter les
            forts appels de courant, avec moins de chute de tension et moins
            d&apos;échauffement).
          </p>
          <p className="mb-0">
            Bien que le choix ait une importance technique indéniable (densité
            énergétique, cycles de recharge, capacité de décharge, stabilité
            thermique, etc.), son <b>impact reste relatif </b>dans l&apos;usage
            quotidien&nbsp;:
          </p>
          <ul className="compactlist2 mb-2">
            <li>
              Le marketing met souvent en avant les cellules mais un “bon type”
              de cellule ne suffit pas à lui seul à rendre une roue fiable ou
              performante si le reste est négligé.
            </li>
            <li>
              Une <b>batterie bien conçue</b> passe surtout par un assemblage
              solide et hermétique, et une bonne gestion thermique (capteurs et
              dissipation).
            </li>
            <li>
              Dans la pratique, il est{' '}
              <b>impossible de ressentir une différence nette</b> entre 2 types
              de cellules. Les différences se mesurent en laboratoire.
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row items-center mb-6 gap-1">
            {/* TEXTE */}
            <aside className="flex-1">
              <p className="mb-2">
                👉 Le modèle de cellule est donc un paramètre à considérer, mais
                à replacer dans son contexte.
              </p>
              <p className="">
                Et c&apos;est surtout la façon d&apos;utiliser la batterie qui
                impactera les performances et leur durée de vie (éviter
                décharges profondes, le stockage prolongé batterie pleine, les
                températures extrêmes, etc.)
              </p>
            </aside>
            {/* LOGO */}
            <aside className="flex-shrink-0">
              <div
                className="rounded-2xl
                          bg-gray-100 dark:bg-gray-800
                          p-2 shadow-sm"
              >
                <Image
                  src={Cellules2}
                  alt="Assemblage d'une batterie lithium-ion"
                  className="rounded-lg w-full object-cover shadow-sm
                            min-w-[90px] max-w-[250px]"
                  priority={false}
                />
              </div>
            </aside>
          </div>

          {/*---------------------------------------*/}
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            rédigé par{' '}
            <Link
              href={'https://linktr.ee/fabien.wheel'}
              passHref
              target="_blank"
              className="link-style"
            >
              Fabien.Wheel
            </Link>
            <br />
            dernière mise à jour : mai 2026
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Battery
