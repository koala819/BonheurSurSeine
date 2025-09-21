'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Graphique_diminution from '@/public/techniques/BSS-Batterie_et_diminution_v20250419.png'
import Tableaux_tensions from '@/public/techniques/BSS-Batterie_et_tension_v20250419.png'

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
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-700 rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Pourcentage batterie et autonomie"
          title={<h3> ⚡ Batterie et autonomie</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          {/*---------------------------------------*/}
          {/*---------------------------------------*/}
          <p className="mb-2">
            Le pourcentage batterie est utile, rapide à lire, simple à
            comprendre, mais…{' '}
          </p>
          <div className="pinkBlock mb-2">
            <b className="mb-0 mt-0">
              ⚠️ On ne sollicite <u>pas</u> (accélération, freinage, vitesse,
              etc.) sa roue de la même manière à 100%, 50%, ou 20% de batterie…
            </b>
          </div>
          <p className="mb-2 text-justify">
            Il est <strong>vitale</strong>, pour rouler en sécurité,{' '}
            <strong>
              de veiller à ce que la batterie ait, à tout moment, suffisamment
              d&apos;énergie
            </strong>{' '}
            pour répondre à la demande du moteur.
            <br />
            Si le moteur demande plus d&apos;énergie que ne peut en fournir la
            batterie, la roue sera sans énergie&nbsp;et… ce sera la chute&nbsp;!
          </p>
          <p className="mb-2 text-justify">
            Fait donc{' '}
            <Link
              href="/debuter-gyroroue#bonsens"
              className="link-style font-bold text-black dark:text-white"
            >
              preuve de <i>bon sens</i>
            </Link>{' '}
            pour ne pas aller au-delà des limites de la roue et de sa batterie.
          </p>
          <div className="blueBlock mb-4">
            <b className="mb-0 mt-0">
              L&apos;autonomie n&apos;est pas une donnée absolue. <br />
            </b>
            <p>
              Elle dépend de nombreux paramètres&nbsp;:{' '}
              <i>
                poids du wheeler, accélérations, vitesse, pression et type de
                pneu, vent, température ambiante, profil et nature du trajet…
              </i>
            </p>
          </div>
          {/*---------------------------------------*/}
          {/*----------- En quelques mot -----------*/}
          {/*---------------------------------------*/}
          <h4 className="mt-4 mb-2">➡️ En quelques mots&nbsp;:</h4>
          <div className="mb-2 flex flex-col md:flex-row gap-4 items-center">
            <aside className="md:w-3/5">
              <p className="text-justify ml-2">
                🔋&nbsp;100%&nbsp;: la tension maximale. <br />
                🪫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0%&nbsp;: la tension minimum.{' '}
                <br />
                🤔 Entre les 2&nbsp;? Le fabricant décide de la manière dont le
                % évolue, ainsi que des tensions max/min (pour avoir une{' '}
                <strong>marge de sécurité</strong> et ne pas abimer les cellules
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
              <p className="text-justify mt-2 ml-2">
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
          <div className="blueBlock mb-2">
            <h4 className="mt-0 mb-0"> Ce qu&apos;il faut savoir&nbsp;:</h4>
            <p>
              🔸 La batterie a une tension max (84.0v, 100.8v, 126v, 151.2v…) et
              une tension min de fonctionnement. Sortir de ces plages risque
              d&apos;abîmer les cellules.
              <br />
              🔸 Le BMS (Battery Management System) mesure en temps réel la
              tension qui diminue au fur et à mesure de l&apos;utilisation.
              <br />
              🔸 C&apos;est un calcul qui convertit cette tension instantanée en
              un pourcentage approximatif (de 100% à 0%). <br />
            </p>
          </div>
          {/*---------------------------------------*/}
          {/*----------- Tension minimale ----------*/}
          {/*---------------------------------------*/}
          <h4 className="mt-4 mb-2">➡️ Tension minimale</h4>
          <p className="text-justify">
            Certains préfèrent{' '}
            <strong>surveiller directement la tension</strong> pour connaitre
            l&apos;état de la batterie.
            <br />
            Voici quelques valeurs utiles pour décider dans quelle mesure
            solliciter la roue&nbsp;:
          </p>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2 text-sm">
            Attention, il s&apos;agit de <u>données théoriques</u> soumises à
            l&apos;algorithme du fabricant et aux modèles des cellules qui
            feront varier ces données.
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
          <h4 className="mt-6 mb-2">➡️ Et le type de cellule&nbsp;?</h4>
          <p className="text-justify mb-2">
            On entend souvent parler des modèles de cellule (
            <i>Samsung 50S, Molicel P42A, LG M50LT, etc.</i>) comme s&apos;il
            s&apos;agissait d&apos;un critère décisif pour une roue plus
            performante, plus durable, plus sûre ou avec plus d&apos;autonomie.
          </p>
          <p className="text-justify">
            En réalité, les fabricants utilisent ce qui se fait de mieux. Et si
            ce choix a une importance technique indéniable (densité énergétique,
            cycles de recharge, capacité de décharge, stabilité thermique,
            etc.), son <b>impact</b> reste <b>relatif</b> dans l&apos;usage
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
              Et dans la pratique, il est{' '}
              <b>impossible de ressentir une différence nette</b> entre deux
              types de cellules. Les fabricant utilisent les meilleures
              technologies disponibles.
            </li>
          </ul>
          <p className="text-justify mb-6">
            👉 Le modèle de cellule est donc un paramètre à considérer, mais à
            replacer dans son contexte.
          </p>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en avril 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Battery
