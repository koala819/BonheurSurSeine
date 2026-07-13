'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Les3pneus from '@/public/4.guide/Pneus1_les_structures.jpg'
import Jantes from '@/public/4.guide/Pneus2_les jantes_toutes.jpg'

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
      if (hash === 'pneu_pression') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('pneu_pression')
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
          <div className="blueBlock_pneu mb-4">
            <b className="mb-0 mt-0">
              💡 Sur une roue électrique, il n&apos;y a qu&apos;une seule roue
              et donc qu&apos;un seul pneu&nbsp;!
              <br />
            </b>
            <p>
              De lui va dépendre une très grande partie de tes ressentis&nbsp;:{' '}
              <i>
                sensation de glisse, confort, autonomie, sensibilité au dévers,
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
          {/*----------------- ARCHITECTURE ---------------------------*/}
          <div className="ml-6 mr-4 mb-2 md:mb-4">
            <div className="grid gap-2 md:gap-4 lg:grid-cols-2 mb-4">
              <div
                className="bg-taupe-50 dark:bg-taupe-900 px-2 py-2 rounded-xl
                shadow-md hover:shadow-lg transition-shadow
                dark:shadow-neutral-900 dark:hover:shadow-neutral-950
                flex flex-col h-full border-t-4 border-taupe-600"
              >
                <h6 className="font-semibold mb-1">🛞 Les pneus vélo</h6>
                <p className="text-sm">
                  Ils sont pour la plupart équipés de <b>chambre à air </b>
                  (simple, économique). <br />
                  Leur taille correspond au <b>diamètre extérieur du pneu</b> et
                  à la <b>largeur du pneu </b>(exprimé en pouce).
                </p>
                <div className="mt-1 ml-4 text-sm">
                  Exemple&nbsp;: <i>18&quot;x2.5&quot;</i>
                  <br />
                  &nbsp;&nbsp;- 18&quot; = diamètre total de la roue
                  <br />
                  &nbsp;&nbsp;- 2.5&quot; = largeur du pneu
                </div>
              </div>
              <div
                className="bg-taupe-50 dark:bg-taupe-900 px-2 py-2 rounded-xl
                shadow-md hover:shadow-lg transition-shadow
                dark:shadow-neutral-900 dark:hover:shadow-neutral-950
                flex flex-col h-full border-t-4 border-taupe-600"
              >
                <h6 className="font-semibold mb-1">🛞 Les pneus scooter</h6>
                <p className="text-sm">
                  Ils sont majoritairement
                  <b> tubeless </b>(plus résistants aux crevaisons, mais plus
                  lourds et montage/réparation plus techniques).
                  <br />
                  Leur taille correspond à la <b>largeur du pneu</b> et au{' '}
                  <b>diamètre de la jante</b>.
                </p>
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
              </div>
            </div>
          </div>

          <p className="mt-4 mb-0">
            Deux petites particularités dans le monde des gyroroues&nbsp;:
          </p>
          <ul className="compactlist2 mb-2">
            <li>
              La valve est très souvent <b>coudée</b>, pour faciliter
              l&apos;accès et le gonflage.
            </li>
            <li>
              Les tailles des gyroroues (14&quot;, 16&quot;, 18&quot;, 20&quot;,
              22&quot;) se basent sur le diamètre extérieur du pneu (roue
              complète), comme pour les pneus vélo.
            </li>
          </ul>
          {/*---------------------------------------------------------------*/}
          <div className="relative max-w-4xl mx-auto order-first md:order-last">
            <Image
              src={Les3pneus}
              alt="Image de pneus"
              className="w-full max-w-3xl mx-auto rounded-2xl object-cover object-center cursor-pointer shadow-md hover:shadow-lg dark:shadow-slate-600"
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
              Inconvénients&nbsp;: mauvais nulle part, mais aussi excellent
              nulle part.
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
          {/*------------------ PRESSION -----------------------------------*/}
          <h4 className="mt-6 mb-2 scroll-mt-24" id="pneu_pression">
            ➡️ Pression : un réglage clé
          </h4>
          <div className="mt-3 mb-3">
            <p className="">
              Les indications sur les pneus ne sont pas toujours simples à lire,
              et avant tout pensées pour des véhicules à au moins 2 roues&nbsp;:
              on ne sait donc pas forcément comment les interpréter.
            </p>{' '}
            <p className="">
              Or, la pression du pneu influence la sécurité, le confort et
              l&apos;autonomie.
            </p>
            <p className="mt-2">
              La pression du pneu{' '}
              <strong>
                dépendra principalement du poids du wheeler et de la taille de
                la roue (14&quot;, 16&quot;, 18&quot;, 20&quot;)
              </strong>
              . Elle peut être exprimée&nbsp;:
            </p>
            <ul className="compactlist2">
              <li>soit en bar</li>
              <li>soit en psi (unité anglo-saxonne 14,5psi &asymp; 1bar)</li>
            </ul>
          </div>
          <div className="pinkBlock_pneu mb-2">
            <b className="mb-0 mt-0">
              ⚠️ Sous gonfler son pneu (&lt;2 bars), c&apos;est prendre le
              risque d&apos;abîmer la jante…
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
                  alt="Jantes abîmées"
                  className="w-full rounded-xl shadow-lg border-medium border-blue-300"
                  priority
                />
              </div>
            </div>
          )}

          {/*----------------------- repères pratiques -----------------------------*/}
          <div>
            <p className="font-semibold mt-3">
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
                &nbsp;Plus le poids du wheeler est important, et plus la
                pression doit être élevée.
              </li>
              <li>
                &nbsp;Plus la roue est petite, et plus la pression doit être
                élevée.
              </li>
            </ul>
          </div>
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
            Ces valeurs sont des repères issus de retours d&apos;expérience.
            Elles restent indicatives et doivent être ajustées en fonction des
            éventuelles recommandations des fabricants (en cas de doute,
            privilégier une pression légèrement plus élevée plutôt que trop
            faible).
          </p>

          {/*---------------------------------------------------------------*/}
          {/*------------------ENTRETIEN -----------------------------------*/}
          <h4 className="mt-6 mb-2">➡️ Entretenir et changer son pneu</h4>
          <div className="pinkBlock_pneu mb-2">
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
