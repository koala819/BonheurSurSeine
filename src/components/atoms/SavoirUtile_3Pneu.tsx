'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Les3pneus from '@/public/Pneus1_les_structures.jpg'
import Jantes from '@/public/Pneus2_les jantes.jpg'

const Pneu = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  //Pour l'image
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'pneu') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('pneu')
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
      id="pneu"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-600 rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Choisir et gonfler son pneu"
          title={<h3>🛞 Le pneu : choix, pression et entretien</h3>}
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
          {/*------------------INTRO----------------------------------------*/}
          <div className="blueBlock mb-4">
            <b className="mb-0 mt-0">
              💡 Sur une roue électrique, il n&apos;y a qu&apos;une seule roue
              et donc qu&apos;un seul pneu&nbsp;!
              <br />
            </b>
            <p>
              De lui va dépendre une très grande partie de tes ressentis&nbsp;:{' '}
              <i>
                sensation de glisse, confort, autonomie, sensibilité au devers,
                stabilité, maniabilité…
              </i>
              <br />
              Le type de pneu, son entretien et sa pression sont donc
              essentiels.
            </p>
          </div>
          <p className="mb-2">
            Le choix du pneu est un paramètre à considérer sérieusement. <br />
            D&apos;ailleurs, sur certains modèles, les fabricants proposent au
            choix plusieurs types de pneu.
          </p>
          {/*---------------------------------------------------------------*/}
          {/*------------------TYPES----------------------------------------*/}
          <h4 className="mt-6 mb-2">➡️ Les types de pneus&nbsp;?</h4>
          <p className="mt-2">
            Techniquement, il existe 2 grandes familles&nbsp;:
          </p>

          <ul className="compactlist2 mb-0 space-y-3">
            <li>
              <b>Les pneus vélo</b>
              <br />
              Ils sont pour la plupart équipés de <b>chambre à air </b>(simple,
              économique). <br />
              Leur taille correspond au <b>diamètre extérieur du pneu</b> et à
              la <b>largeur du pneu </b>(exprimé en pouce).
              <div className="mt-1 ml-4 text-sm">
                Exemple&nbsp;: <i>18&quot;x2.5&quot;</i>
                <br />
                &nbsp;&nbsp;- 18&quot; = diamètre total de la roue
                <br />
                &nbsp;&nbsp;- 2.5&quot; = largeur du pneu
              </div>
            </li>

            <li>
              <b>Les pneus scooter</b>
              <br />
              Ils sont majoritairement
              <b> tubeless </b>(plus résistants aux crevaisons, mais plus lourds
              et montage/réparation plus techniques).
              <br />
              Leur taille correspond à la <b>largeur du pneu</b> et au{' '}
              <b>diamètre de la jante</b>.
              <div className="mt-1 ml-4 text-sm">
                Exemple&nbsp;: <i>2.5&quot;-14&quot;</i>
                <br />
                &nbsp;&nbsp;- 2.5&quot; = largeur du pneu
                <br />
                &nbsp;&nbsp;- 14&quot; = diamètre de la jante
                <br />
                Exemple&nbsp;: <i>80/90-14</i> (exprimé en pouce)
                <br />
                &nbsp;&nbsp;- 80 = largeur (mm)
                <br />
                &nbsp;&nbsp;- 90 = hauteur (en %) = 90% de 80 mm (≈ 72 mm)
                <br />
                &nbsp;&nbsp;- 14 = diamètre de la jante (pouces)
              </div>
            </li>
          </ul>
          <p className="mt-4 mb-0">
            Deux petites particularités dans le monde des gyroroues&nbsp;:
          </p>
          <ul className="compactlist2 mb-0">
            <li>
              La valve est très souvent <b>coudée</b>, pour faciliter
              l&apos;accès et le gonflage.
            </li>
            <li>
              La taille des gyroroues (14&quot;, 16&quot;, 18&quot;, 20&quot;,
              22&quot;) se base sur le diamètre extérieur du pneu (roue
              complète), comme pour les vélos.
            </li>
          </ul>
          {/*---------------------------------------------------------------*/}
          <div className="relative max-w-4xl mx-auto order-first md:order-last">
            <Image
              src={Les3pneus}
              alt="Image de pneus"
              className="w-full max-w-lg mx-auto rounded-2xl object-cover object-center cursor-pointer shadow-md hover:shadow-lg dark:shadow-slate-600"
              priority
              placeholder="blur"
              onClick={() => setIsOpen1(true)} // 👈 ouvre la lightbox
            />
          </div>
          {/* Lightbox */}
          {isOpen1 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 pt-40"
              onClick={() => setIsOpen1(false)} // clic fond ferme
            >
              <div className="relative max-w-5xl w-full p-4 ">
                <button
                  className="absolute top-4 right-4 text-blue-300 text-5xl font-bold"
                  onClick={() => setIsOpen1(false)}
                >
                  ✕&nbsp;
                </button>
                <Image
                  src={Les3pneus}
                  alt="Image de pneus"
                  className="w-full rounded-xl shadow-lg border-medium border-blue-300"
                  priority
                />
              </div>
            </div>
          )}
          {/*---------------------------------------------------------------*/}
          <p className="mt-4">Il existe 3 grandes catégories&nbsp;:</p>
          <ul className="compactlist2 mb-0">
            <li>
              <b>Route / Street </b>(slick)&nbsp;: structure et surface lisse.
              <br />
              Avantages&nbsp;: stabilité, silence, gain d&apos;autonomie si
              correctement gonflé.
              <br />
              Inconvénients&nbsp;: adhérence limitée sur terrain humide ou
              meuble.
            </li>
            <li>
              <b>Tout-terrain / Off-road </b>(cramponné)&nbsp;: structure et
              reliefs marqués.
              <br />
              Avantages&nbsp;: meilleure accroche sur terre, gravier, herbe,
              boue.
              <br />
              Inconvénients&nbsp;: bruit, vibrations, moins d&apos;autonomie.
            </li>
            <li>
              <b>Hybrides / Mixte </b>(semi-cramponné)&nbsp;: <br />
              Avantages&nbsp;: très bon compromis pour la ville et les chemins.
              <br />
              Inconvénients&nbsp;: mauvais nul part, mais aussi excellent nul
              part.
              <br />
              Dans la pratique, ils sont les plus polyvalents.
            </li>
          </ul>

          <p className="mt-3">
            Comme en voiture ou en moto où, par exemple, on n&apos;utilise pas
            des pneus neige toute l&apos;année, chaque type de pneu correspond à
            un usage.
          </p>
          <p className="mb-6">
            👉 Le choix du pneu dépend donc de l&apos;usage&nbsp;: inutile
            d&apos;imposer son choix ou sa préférence aux autres&nbsp;!
          </p>

          {/*---------------------------------------------------------------*/}
          {/*------------------PRESSION-------------------------------------*/}
          <h4 className="mt-6 mb-2">➡️ Pression : un réglage clé</h4>
          <p className="my-2">
            La pression du pneu influence la sécurité, le confort et
            l&apos;autonomie.
          </p>
          <div className="pinkBlock mb-2">
            <b className="mb-0 mt-0">
              ⚠️ Sous gonfler son pneu (&lt;2 bars), c&apos;est prendre le
              risque d&apos;abimer la jante…
              <br />
            </b>
            Vérifie régulièrement la pression du pneu (toutes les 3-4 semaines).
          </div>
          <div className="relative max-w-4xl mx-auto order-first md:order-last">
            <Image
              src={Jantes}
              alt="Jantes abimées"
              className="w-full max-w-lg mx-auto rounded-2xl object-cover object-center cursor-pointer shadow-md hover:shadow-lg dark:shadow-slate-600"
              priority
              placeholder="blur"
              onClick={() => setIsOpen2(true)} // 👈 ouvre la lightbox
            />
          </div>
          {/* Lightbox */}
          {isOpen2 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 pt-40"
              onClick={() => setIsOpen2(false)} // clic fond ferme
            >
              <div className="relative max-w-5xl w-full p-4 ">
                <button
                  className="absolute top-4 right-4 text-blue-300 text-5xl font-bold"
                  onClick={() => setIsOpen2(false)}
                >
                  ✕&nbsp;
                </button>
                <Image
                  src={Jantes}
                  alt="Jantes abimées"
                  className="w-full rounded-xl shadow-lg border-medium border-blue-300"
                  priority
                />
              </div>
            </div>
          )}

          {/*---------------------------------------------------------------*/}
          <p className="mt-3">
            Les indications des pneus ne sont pas simple à lire, avant tout
            penser pour des véhicules à au moins 2 ou 3 roues : et on ne sait
            pas forcément comment les lire/interpréter.
          </p>
          <p className="" id="pression">
            La pression du pneu dépendra principalement du poids du wheeler mais
            aussi de la taille de la roue (16&quot;, 18&quot;, 20&quot;). Elle
            peut être exprimée&nbsp;:
          </p>
          <ul className="compactlist2">
            <li>soit en bar</li>
            <li>soit en psi (unité anglo-saxonne 14,5psi &asymp; 1bar)</li>
          </ul>
          <p className="font-semibold mt-2">
            🔍 Quelques repères pratiques&nbsp;:
          </p>
          <ul className="mb-0 list-none pl-5 [&>li]:relative [&>li]:pl-4 [&>li::before]:content-['➤'] [&>li::before]:absolute [&>li::before]:left-0">
            {' '}
            <li>
              &nbsp;Une pression faible apportera plus de confort et de grip,
              mais réduira l&apos;autonomie.
            </li>
            <li>
              &nbsp;Une pression élevée augmentera l&apos;autonomie, mais
              diminuera le confort.
            </li>
            <li>
              &nbsp;Plus le poids du wheeler est important, et plus la pression
              doit être élevée.
            </li>
            <li>
              &nbsp;Plus la roue est petite, et plus la pression doit être
              élevée.
            </li>
          </ul>
          <div className="overflow-x-auto pl-5 mt-2 flex justify-center">
            <table className="table-auto border-collapse border border-gray-300 text-sm w-full max-w-2xl">
              <thead>
                <tr className="bg-gray-200 dark:bg-neutral-700">
                  <th className="border border-gray-300 px-3 py-2">Poids</th>
                  <th className="border border-gray-300 px-3 py-2">
                    14-16&quot;
                  </th>
                  <th className="border border-gray-300 px-3 py-2">18&quot;</th>
                  <th className="border border-gray-300 px-3 py-2">20&quot;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border font-bold border-gray-300 px-2 py-2 bg-gray-200 dark:bg-neutral-700">
                    &lt; 70 kg
                  </td>
                  <td className="border text-center border-gray-300 px-2 py-2">
                    2.3 &ndash; 2.6 bars
                    <br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      (33 &ndash; 38 psi)
                    </span>
                  </td>
                  <td className="border text-center border-gray-300 px-2 py-2">
                    2.0 &ndash; 2.4 bars
                    <br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      (29 &ndash; 35 psi)
                    </span>
                  </td>
                  <td className="border text-center border-gray-300 px-2 py-2">
                    1.8 &ndash; 2.2 bars
                    <br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      (26 &ndash; 32 psi)
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="border font-bold border-gray-300 px-2 py-2 bg-gray-200 dark:bg-neutral-700">
                    70 &ndash; 90 kg
                  </td>
                  <td className="border text-center border-gray-300 px-2 py-2">
                    2.6 &ndash; 3.0 bars
                    <br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      (38 &ndash; 44 psi)
                    </span>
                  </td>
                  <td className="border text-center border-gray-300 px-2 py-2">
                    2.3 &ndash; 2.8 bars
                    <br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      (33 &ndash; 41 psi)
                    </span>
                  </td>
                  <td className="border text-center border-gray-300 px-2 py-2">
                    2.0 &ndash; 2.5 bars
                    <br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      (29 &ndash; 36 psi)
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="border font-bold border-gray-300 px-2 py-2 bg-gray-200 dark:bg-neutral-700">
                    &gt; 90 kg
                  </td>
                  <td className="border text-center border-gray-300 px-2 py-2">
                    2.8 &ndash; 3.4 bars
                    <br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      (41 &ndash; 49 psi)
                    </span>
                  </td>
                  <td className="border text-center border-gray-300 px-2 py-2">
                    2.6 &ndash; 3.2 bars
                    <br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      (38 &ndash; 46 psi)
                    </span>
                  </td>
                  <td className="border text-center border-gray-300 px-2 py-2">
                    2.3 &ndash; 2.8 bars
                    <br />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      (33 &ndash; 41 psi)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="pl-5 font-semibold mt-2">
            N&apos;hésite pas à tester plusieurs pressions pour trouver ton
            équilibre&nbsp;!
          </p>
          <p className="pl-5 text-gray-600 dark:text-gray-400 text-sm">
            Ces valeurs sont des repères issus de retours d&apos;expérience et
            de pratiques courantes (elles doivent être ajustées en fonction des
            éventuelles recommandations des fabricants).
            <br />
            Elles restent indicatives&nbsp;: en cas de doute, privilégier une
            pression légèrement plus élevée plutôt que trop faible.
          </p>

          {/*---------------------------------------------------------------*/}
          {/*------------------ENTRETIEN -----------------------------------*/}
          <h4 className="mt-6 mb-2">➡️ Entretenir et changer son pneu</h4>
          <div className="pinkBlock mb-2">
            <b className="mb-0 mt-0">
              ⚠️ Un pneu usé = moins d&apos;adhérence + risque de chute.
            </b>
          </div>
          <p className="">
            Inspecte régulièrement les signes visuels d&apos;usure&nbsp;:
          </p>
          <ul className="compactlist2 mb-2">
            <li>Coupures, traces de clous, micro-fissures…</li>
            <li>Bande centrale lisse, perte d&apos;adhérence notable…</li>
          </ul>
          <p className="">
            <b>Usure et durée de vie&nbsp;: </b>en moyenne, 6&nbsp;000 à
            8&nbsp;000&nbsp;km (variable selon la conduite, le poids, le
            terrain…).
          </p>
          {/*---------------------------------------------------------------*/}
          {/*---------------------------------------------------------------*/}
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

export default Pneu
