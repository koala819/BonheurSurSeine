'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Les3suspensions from '@/public/4.guide/Pneus1_les_structures.jpg'

const Suspension = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  //Pour l'image
  const [isOpen1, setIsOpen1] = useState(false)
  //const [isOpen2, setIsOpen2] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'suspension') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('suspension')
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
      id="suspension"
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
          aria-label="Choisir et régler la suspension"
          title={<h3>🦿 La suspension : choisir et régler</h3>}
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
          {/*--------------------- INTRO ---------------------------------*/}
          <p>
            À leurs débuts, les gyroroues ne possédaient aucune suspension. Le
            confort dépendait alors uniquement du pneu… et des jambes du wheeler
            😅
          </p>
          <p className="">
            Et des milliers de kilomètres ont été parcourus ainsi.
          </p>

          <div className="BlockSuspension">
            <p>
              Une fois habitué à une roue suspendue, difficile revenir en
              arrière.
            </p>
          </div>

          {/*------------- Gadget ou révolution -----------------------*/}
          <h4 className="mt-6 mb-2">➡️ Vraiment une révolution ?</h4>
          <p>
            L&apos;arrivée de la suspension (premier modèle fin 2020) a été une
            des évolutions les plus marquantes de la gyroroue. Elle est
            rapidement devenu{' '}
            <Link
              href={'/choisir-gyroroue#besoins'}
              className="text-olive-600 dark:text-olive-300 underline hover:text-blue-700 dark:hover:text-blue-400"
              target="_blank"
            >
              un critère essentiel pour choisir
            </Link>{' '}
            sa roue.
          </p>
          <p>
            Pourquoi un tel succès ? Parce qu&apos;elle améliore le confort et
            la stabilité en absorbant une grande partie des chocs et des
            vibrations&nbsp;: pavés, trous, racines, nids de poules, bosses...{' '}
            <strong className="text-olive-600 dark:text-olive-300">
              Tout devient beaucoup moins fatigants et plus agréable&nbsp;!
            </strong>
          </p>

          <p className="mt-2">
            Mais{' '}
            <strong className="text-olive-600 dark:text-olive-300">
              tout ce confort a un coût
            </strong>{' '}
            &nbsp;: prix, encombrement, poids, pédales hautes, usure
            mécanique...{' '}
          </p>

          <div className="BlockSuspension">
            <p className="mb-0">
              👉 La suspension n&apos;est pas toujours indispensable.
            </p>
            <p className="mt-1">
              La vraie question n&apos;est donc pas{' '}
              <span className="italic">
                &laquo;&nbsp;avec ou sans suspension&nbsp;?&nbsp;&raquo;
              </span>
              , mais plutôt&nbsp;:
              <strong>
                &laquo;&nbsp;mon usage justifie-t-il ces
                compromis&nbsp;?&nbsp;&raquo;
              </strong>
            </p>
          </div>

          {/*----------------------------Tableau-----------------------------------*/}
          <div className="overflow-x-auto p-1 mb-3">
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md dark:shadow-neutral-900">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800 text-white text-base bg-olive-500 dark:bg-taupe-900">
                  <th className="py-3 px-2 text-left">Situation</th>
                  <th className="py-3 px-2 text-center">Intérêt</th>
                  <th className="py-3 px-2 text-center">Pourquoi ?</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base text-gray-800 dark:text-gray-100 bg-olive-50 dark:bg-taupe-800">
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-taupe-700 transition">
                  <td className="p-2">🎓 Apprentissage</td>
                  <td className="p-2">🤔 Optionnel</td>
                  <td className="p-2 text-right">
                    Pas nécessaire pour débuter (surcoût peu utile)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-taupe-700 transition">
                  <td className="p-2">🚆 Multi-modalité, transports denses</td>
                  <td className="p-2">❌ Peu adapté</td>
                  <td className="p-2 text-right">
                    Elle augmente le poids et l&apos;encombrement
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-taupe-700 transition">
                  <td className="p-2">💰 Budget limité</td>
                  <td className="p-2">❌ Peu adapté</td>
                  <td className="p-2 text-right">
                    Généralement plus cher à performances équivalentes
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-taupe-700 transition">
                  <td className="p-2">🏙️ Trajet court / occasionnel</td>
                  <td className="p-2">🤔 Optionnel</td>
                  <td className="p-2 text-right">
                    Sans, c&apos;est plus simple, léger, compact et économique
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-taupe-700 transition">
                  <td className="p-2">🚗 Trajets longs / quotidiens</td>
                  <td className="p-2">✅ Très intéressant</td>
                  <td className="p-2 text-right">
                    Réduit la fatigue (mais aussi la place pour la batterie)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-taupe-700 transition">
                  <td className="p-2">🌲 Offroad / chemins dégradés</td>
                  <td className="p-2">✅ Très intéressant</td>
                  <td className="p-2 text-right">
                    Meilleure stabilité et contrôle (mais nécessite de
                    l&apos;entretien)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-taupe-700 transition">
                  <td className="p-2">⚡ Conduite sportive</td>
                  <td className="p-2">✅ Variable selon usage</td>
                  <td className="p-2 text-right">
                    Confort mais augmente la surconfiance et le centre de
                    gravité
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="font-bold mt-5 mb-0">🔧 Et l&apos;entretien&nbsp;?</h5>
          <p>
            Comme sur un vélo ou une moto, une suspension travaille en
            permanence et nécessite quelques vérifications régulières&nbsp;:
          </p>
          <ul className="compactlist2">
            <li>jeux mécaniques</li>
            <li>visseries</li>
            <li>bruits anormaux</li>
            <li>fuites éventuelles</li>
            <li>usure des pièces mobiles</li>
          </ul>
          <p>
            Une suspension mal entretenue peut perdre en efficacité, devenir
            inconfortable, voire dangereuse (généré des déséquilibres).
          </p>
          <div className="BlockSuspension">
            <p className="mb-0 font-bold">⚠️ Attention&nbsp;</p>
            <p className="mt-1">
              Youtube et internet permettent de voir les performances de
              certains wheelers : saut monstrueux, descente / monté de dizaine
              de marche ! Mais les suspensions ne sont pas conçues pour
              encaisser cela au quotidien.
            </p>
          </div>
          {/*------------------------------------------------------------*/}
          {/*------------------ IDEES RECUES ----------------------------*/}
          <h4 className="mt-8 mb-2">➡️ Attention aux idées reçues</h4>
          <p className="my-2">
            Comme souvent en gyroroue, il n&apos;existe pas de solution
            parfaite. <br />
            Le meilleur choix dépend avant tout de ton usage, du terrain et des
            sensations que tu recherches.
          </p>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            {/* Bloc 1 ------------------DEBATTEMENT----------------------------*/}
            <div className="bg-taupe-50 dark:bg-taupe-800 px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-2">
                🟠 Gros débattement = meilleure suspension
              </h4>
              <p className="text-sm">
                Le débattement (souvent entre 60mm à 90mm) correspond à la
                course maximale de la suspension.
              </p>
              <ul className="compactlist2">
                <li className="text-sm">
                  Sur le papier, un grand débattement permet d&apos;absorber des
                  chocs plus importants.
                </li>{' '}
                <li className="text-sm">
                  En pratique, le comportement dépend aussi&nbsp;:
                </li>
                <ul className="compactlist2">
                  <li className="text-sm">de la conception (la cinématique)</li>
                  <li className="text-sm">
                    des réglages disponibles (précharge, compression, détente…)
                  </li>
                  <li className="text-sm">
                    de la progressivité de l&apos;amortisseur
                  </li>
                  <li className="text-sm">
                    de sa rigidité et de l&apos;usure mécanique
                  </li>
                </ul>
              </ul>
              <div className="bg-taupe-100 dark:bg-taupe-700 py-1 px-3 my-2 rounded-lg">
                <p className="text-sm">
                  Le type et la taille du débattement necessaire dépend de
                  l&apos;usage. Pas grave non plus si une suspension talonne.
                </p>
              </div>
              <p className="text-sm">
                👉 Un grand débattement ne fait pas systématiquement une
                meilleure suspenion..
              </p>
            </div>

            {/* Bloc 2 ------------------CONDUITE---------------------------- */}
            <div className="bg-taupe-50 dark:bg-taupe-800 px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-2">
                🟠 Suspension ≠ conduite sans effort
              </h4>
              <p className="text-sm">
                Une roue suspendue absorbe une partie des irrégularités du
                terrain, ce qui améliore nettement le confort et la tolérance à
                certaines erreurs.
              </p>
              <p className="text-sm">
                Mais cet avantage peut aussi créer un faux sentiment de
                sécurité.
              </p>
              <ul className="compactlist2">
                <li className="text-sm">un nid-de-poule reste dangereux</li>
                <li className="text-sm">
                  un trottoir mal abordé peut provoquer une chute
                </li>
                <li className="text-sm">
                  la route demande une attention constante
                </li>
                <li className="text-sm">
                  une mauvaise trajectoire reste une mauvaise trajectoire
                </li>
              </ul>
              <p className="text-sm">
                La suspension doit être considérée comme un équipement
                complémentaire, pas comme une garantie de sécurité.
              </p>
              <div className="bg-taupe-100 dark:bg-taupe-700 py-1 px-3 my-2 rounded-lg">
                <p className="text-sm">
                  Les gyroroues n&apos;ont d&apos;ailleurs pas été conçues à
                  l&apos;origine pour dévaler des escaliers ou réaliser des
                  sauts comme un VTT de descente.
                </p>
                <p className="text-sm">
                  Certaines roues modernes en sont capables, mais cela reste une
                  pratique exigeante qui sollicite énormément le matériel.
                </p>
              </div>
              <p className="text-sm">
                👉 Le bon sens et la vigilance restent les meilleurs
                amortisseurs.
              </p>
            </div>
          </div>

          <div className="yellowBlock my-3">
            <p className="">
              ⚠️ La suspension améliore le confort et la stabilité, mais elle
              augmente aussi le risque de surconfiance.
              <br />
              Certains chercheurs parlent{' '}
              <strong>«&nbsp;d&apos;homéostasie du risque&nbsp;»</strong>&nbsp;:
              lorsqu&apos;un équipement nous semble plus sûr, nous avons parfois
              tendance à compenser en prenant davantage de risques.
            </p>
          </div>
          {/*----------------------------image-----------------------------------*/}
          <div className="relative max-w-4xl mx-auto order-first md:order-last">
            <Image
              src={Les3suspensions}
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
                  src={Les3suspensions}
                  alt="Image de pneus"
                  className="w-full rounded-xl shadow-lg border-medium border-blue-300"
                  priority
                />
              </div>
            </div>
          )}
          {/*------------------REGLAGE----------------------------*/}
          <h4 className="mt-8 mb-2">➡️ Bien régler sa suspension</h4>

          <p>
            Avant toute chose, il faut comprendre comment fonctionne la
            suspension de sa roue.
          </p>

          <p>
            Les premières gyroroues suspendues sont apparues au début des années
            2020. Depuis, les constructeurs ont multiplié les approches
            techniques et continuent encore aujourd&apos;hui à faire évoluer
            leurs systèmes.
          </p>
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
          <p>
            Chaque fabricant fait des choix différents selon l&apos;usage visé :
            roue urbaine, tout-terrain, randonnée ou pratique sportive.
          </p>

          <p>
            Certaines suspensions privilégient le confort, d&apos;autres la
            sportivité ou la simplicité mécanique.
          </p>

          <p>
            Un mauvais réglage peut rendre la roue inconfortable, imprécise ou
            fatigante.
          </p>

          <ul className="compactlist2">
            <li>trop souple : elle pompe et talonne facilement ;</li>
            <li>trop dure : elle absorbe mal les chocs.</li>
          </ul>

          <p>
            Comme pour la pression du pneu, plusieurs essais sont souvent
            nécessaires pour trouver le bon compromis.
          </p>

          <p>On retrouve notamment :</p>

          <ul className="compactlist2">
            <li>les systèmes centraux (V11, Sherman-S…) ;</li>
            <li>les systèmes déportés (S18…).</li>
          </ul>

          <h5 className="mt-6 mb-2">🔹 Amortisseur à ressort</h5>

          <p>À compléter.</p>

          <h5 className="mt-6 mb-2">🔹 Amortisseur à air</h5>

          <p>À compléter.</p>

          <h5 className="mt-6 mb-2">🔹 Amortisseur hydraulique</h5>

          <p>À compléter.</p>

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

export default Suspension
