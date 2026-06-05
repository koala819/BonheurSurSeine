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
          {/*-------------------------------------------------------------*/}
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

          {/*----------------------------------------------------------------*/}
          {/*----------------- Vraiment une révolution ? --------------------*/}
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

          {/*-------------------------- Tableau -------------------------------*/}
          <div className="overflow-x-auto mb-3 md:mx-2">
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
            Comme sur un vélo ou une moto, une suspension comporte des pièces
            mobiles qui travaillent en permanence. <br />
            Elles nécessitent quelques contrôles réguliers&nbsp;:
          </p>
          <ul className="compactlist2">
            <li>les jeux mécaniques</li>
            <li>les vis desserrées</li>
            <li>les bruits anormaux</li>
            <li>les fuites éventuelles</li>
            <li>l&apos;usure des pièces mobiles</li>
          </ul>
          <p>
            Une suspension mal entretenue peut perdre en efficacité, devenir
            inconfortable, voire dangereuse (générant des déséquilibres).
          </p>
          <div className="BlockSuspension">
            <p className="mb-0 font-bold">
              ⚠️ Plus la pratique est engagée, plus l&apos;entretien devient
              important.
            </p>
            <p className="mt-1">
              Les vidéos de sauts, d&apos;escaliers ou d&apos;offroad extrême
              sont impressionnantes. Certaines roues modernes en sont capables,
              mais cela sollicite énormément le matériel (car les roues ne sont
              pas conçues pour encaisser cela au quotidien).
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
            <div className="bg-olive-50 dark:bg-olive-900 px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
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
                    des réglages (précharge, compression, détente…)
                  </li>
                  <li className="text-sm">
                    de la progressivité de l&apos;amortisseur
                  </li>
                  <li className="text-sm">
                    de sa rigidité et de l&apos;usure mécanique
                  </li>
                </ul>
              </ul>
              <div className="bg-olive-100 dark:bg-olive-800 py-1 px-3 my-2 rounded-lg">
                <p className="text-sm">
                  Le type et la taille du débattement nécessaire dépend de
                  l&apos;usage. Pas grave non plus si une suspension talonne.
                </p>
              </div>
              <p className="text-sm">
                👉 Un grand débattement ne fait pas systématiquement une
                meilleure suspension.
              </p>
            </div>

            {/* Bloc 2 ------------------CONDUITE---------------------------- */}
            <div className="bg-olive-50 dark:bg-olive-900 px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-2">
                🟠 Suspension ≠ conduite sans effort
              </h4>
              <p className="text-sm">
                La suspension absorbe une grande partie des irrégularités du
                terrain.
              </p>
              <p className="text-sm">
                Mais cet avantage peut aussi créer un faux sentiment de
                sécurité&nbsp;:
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
              <div className="bg-olive-100 dark:bg-olive-800 py-1 px-3 my-2 rounded-lg">
                <p className="text-sm">
                  La suspension doit être considérée comme un équipement
                  complémentaire, pas comme une garantie de sécurité.
                </p>
              </div>
              <p className="text-sm">
                👉 Le bon sens et la vigilance restent les meilleurs
                amortisseurs.
              </p>
            </div>
          </div>

          {/*-------------------------- bloc homéostasie -------------------------*/}
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

          {/*--------------------------------------------------------------------*/}
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

          {/*-----------------------------------------------------*/}
          {/*------------------CONCEPTION-------------------------*/}
          <h4 className="mt-8 mb-2">➡️ Les principaux éléments</h4>
          <div className="mb-2 md:mb-4">
            <p>
              Les premières gyroroues suspendues sont apparues au début des
              années 2020. Depuis, les fabricants ont testé et développé
              différentes architectures et systèmes de suspension.
            </p>
            <p>
              Certains systèmes privilégient le confort, d&apos;autres la
              simplicité mécanique ou la robustesse.
            </p>

            <p>Une suspension est composée de plusieurs éléments&nbsp;:</p>
            <ul className="compactlist2">
              <li className="">
                un système de guidage (glissières, bras, biellettes...)
              </li>
              <li className="">un amortisseur</li>
            </ul>
          </div>

          {/*----------------- ARCHITECTURE ---------------------------*/}
          <h5 className="mt-4 font-semibold">🔸 L&apos;architecture</h5>
          <div className="mx-4 mb-2 md:mb-4">
            <p className="mb-2">
              L&apos;architecture correspond à la façon dont la suspension est
              intégrée dans la roue.
            </p>
            <div className="grid gap-4 md:grid-cols-2 mb-4">
              <div className="bg-taupe-50 dark:bg-taupe-900 px-3 py-2 rounded-xl shadow-md">
                <h6 className="font-semibold mb-1">⚙️ Suspension déportée</h6>
                <p className="text-sm">
                  L&apos;amortisseur est visible sur l&apos;arrière de la roue,
                  faciliant l&apos;accès aux réglages mais l&apos;exposant à la
                  saleté.
                </p>
                <p className="text-sm">Exemples : S16, S18, Extreme...</p>
              </div>
              <div className="bg-taupe-50 dark:bg-taupe-900 px-3 py-2 rounded-xl shadow-md">
                <h6 className="font-semibold mb-1">⚙️ Suspension centrale</h6>
                <p className="text-sm">
                  Visuellement plutôt discret, les amortisseurs sont placés sur
                  les côtés de la roue.
                </p>
                <p className="text-sm place-content-end">
                  Exemples : V11Y, Sherman-S, Lynx...
                </p>
              </div>
            </div>
            <p>
              Une architecture ne permet pas, à elle seule, de juger la qualité
              d&apos;une suspension. Les performances dépendent aussi de la
              qualité du guidage, de la cinématique, de l&apos;amortisseur, et
              des réglages.
            </p>
          </div>

          {/*----------------- TYPE D'AMORTISSEUR ---------------------*/}
          <h5 className="mt-4 font-semibold">
            🔸 Les principaux types d&apos;amortisseurs
          </h5>
          <div className="mx-4 mb-2 md:mb-4">
            <p className="mb-2">
              L&apos;amortisseur peut prendre plusieurs formes.
            </p>

            <div className="grid gap-2 md:gap-4 md:grid-cols-3 mb-4">
              {/* Ressort */}
              <div className="bg-taupe-50 dark:bg-taupe-900 px-3 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
                <h6 className="font-semibold mb-1">🟤 Ressort</h6>
                <p className="text-sm">Utilise un ressort métallique.</p>
                <ul className="compactlist2 [&>li]:text-sm">
                  <li>simple (fait l&apos;essentiel)</li>
                  <li>peu sensible</li>
                  <li>réglage souvent plus limité</li>
                </ul>
                <div className="bg-taupe-100 dark:bg-taupe-800 rounded-md p-1 mt-auto">
                  <p className="text-sm mb-0">👍 Robuste</p>
                </div>
              </div>

              {/* Air */}
              <div className="bg-taupe-50 dark:bg-taupe-900 px-3 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
                <h6 className="font-semibold mb-1">🟤 Air</h6>
                <p className="text-sm">Utilise de l&apos;air comprimé.</p>
                <ul className="compactlist2 [&>li]:text-sm mb-1">
                  <li>grande plage d&apos;ajustement</li>
                  <li>pompe haute pression nécessairre</li>
                  <li>pression à vérifier régulièrement</li>
                </ul>
                <div className="bg-taupe-100 dark:bg-taupe-800 rounded-md p-1 mt-auto">
                  <p className="text-sm mb-0">👍 Polyvalente</p>
                </div>
              </div>

              {/* Hydraulique */}
              <div className="bg-taupe-50 dark:bg-taupe-900 px-3 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
                <h6 className="font-semibold mb-1">🟤 Hydraulique</h6>
                <p className="text-sm">Utilise un circuit d&apos;huile.</p>
                <ul className="compactlist2 [&>li]:text-sm">
                  <li>suspension plus progressive</li>
                  <li>limite les rebonds</li>
                </ul>
                <div className="bg-taupe-100 dark:bg-taupe-800 rounded-md p-1 mt-auto">
                  <p className="text-sm mb-0">👍 Dynamique</p>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------------------------*/}
          {/*------------------ Bien régler sa suspension ------------------------*/}
          <h4 className="mt-8 mb-2">➡️ Bien régler sa suspension</h4>
          <div className="mb-2 md:mb-4">
            <p>
              Une suspension ne se résume pas à son débattement ou à sa
              technologie. Mal réglée, elle sera innefficace ou inconfortable...
            </p>
            <p>
              Comme pour la pression du pneu, il n&apos;existe pas de réglage
              universel. Le bon compromis dépend notamment :
            </p>
            <ul className="compactlist2">
              <li>du poids du wheeler ;</li>
              <li>du terrain pratiqué ;</li>
              <li>de la vitesse habituelle ;</li>
              <li>du style de conduite ;</li>
              <li>du confort recherché.</li>
            </ul>
          </div>

          {/*--------------- REGLAGES POSSIBLES -----------------------*/}
          <h5 className="mt-4 font-semibold">🔹 Les 3 réglages possibles</h5>
          <div className="mx-4 mb-2 md:mb-4">
            <p>
              Selon les modèles, plusieurs réglages peuvent être disponibles,
              mais tous les amortisseurs n&apos;offrent pas forcément toutes ces
              possibilités.
            </p>
            <div className="grid gap-2 md:gap-4 md:grid-cols-3 mt-2 mb-2">
              <div className="bg-olive-50 dark:bg-olive-800 px-4 py-3 rounded-2xl shadow-md">
                <p className="font-semibold">⚙️ Précharge</p>
                <p className="text-sm">
                  Elle détermine l&apos;enfoncement initial de la suspension
                  sous le poids du pilote.
                </p>
                <p className="text-sm">
                  Plus elle est élevée, plus la suspension résiste à
                  l&apos;enfoncement.
                </p>
              </div>

              <div className="bg-olive-50 dark:bg-olive-800 px-4 py-3 rounded-2xl shadow-md">
                <p className="font-semibold">⚙️ Compression</p>
                <p className="text-sm">
                  Elle contrôle la vitesse/facilité avec laquelle la suspension
                  s&apos;enfonce lors d&apos;un choc.
                </p>
                <p className="text-sm">
                  Trop faible : sensation molle.
                  <br />
                  Trop forte : suspension sèche.
                </p>
              </div>

              <div className="bg-olive-50 dark:bg-olive-800 px-4 py-3 rounded-2xl shadow-md">
                <p className="font-semibold">⚙️ Rebond (détente)</p>
                <p className="text-sm">
                  C&apos;est la vitesse à laquelle la suspension revient à sa
                  position initiale après un choc.
                </p>
                <p className="text-sm">
                  Trop rapide : effet trampoline.
                  <br />
                  Trop lente : suspension paresseuse.
                </p>
              </div>
            </div>
            <p className="font-semibold">👉 Et le SAG ?</p>
            <p>
              Le SAG correspond à l&apos;enfoncement naturel de la suspension
              lorsque le wheeler monte sur la roue.
            </p>
            <p>
              Une suspension trop enfoncée manquera de réserve pour absorber les
              gros chocs. Une suspension trop peu enfoncée deviendra dure et
              inconfortable.
            </p>
            <p className="mb-0">
              Sur la plupart des gyroroues, on cherche généralement un SAG
              compris entre 20 % et 30 % du débattement total.
            </p>
            <div className="BlockSuspension">
              <p className="mb-0">
                👉 Une suspension bien réglée améliore le confort, le contrôle
                et la stabilité. Une suspension mal réglée peut au contraire
                rendre la roue fatigante, imprécise ou désagréable.
              </p>
            </div>
          </div>

          {/*--------------- Trouver le bon réglages ------------------*/}
          <h5 className="mt-4 font-semibold">🔹 Trouver le bon réglage</h5>
          <div className="mx-4 mb-2 md:mb-4">
            <p>
              L&apos;objectif est simple&nbsp;: permettre à la suspension de
              travailler. Comme pour la pression d&apos;un pneu, plusieurs
              essais sont souvent nécessaires avant de trouver le réglage qui
              convient.
            </p>
            <p className="mb-0">
              Le meilleur réglage n&apos;est pas celui d&apos;un autre wheeler
              sur YouTube, mais celui qui correspond à ton poids et à ta façon
              de rouler.
            </p>
            <div className="grid gap-2 md:gap-4 md:grid-cols-2 mt-2">
              <div
                className="bg-red-50 dark:bg-red-900/50 px-3 py-2 rounded-xl
              border border-red-200 dark:border-red-800"
              >
                <p className="font-semibold mb-1">🔴 Suspension trop souple</p>
                <ul className="compactlist2 [&>li]:text-sm">
                  <li>pompage excessif ;</li>
                  <li>talonnage fréquent ;</li>
                  <li>manque de précision ;</li>
                  <li>perte d&apos;efficacité à haute vitesse.</li>
                </ul>
              </div>
              <div
                className="bg-orange-50 dark:bg-orange-900/60 px-3 py-2 rounded-xl
              border border-orange-200 dark:border-orange-800"
              >
                <p className="font-semibold">🟠 Suspension trop dure</p>
                <ul className="compactlist2 [&>li]:text-sm">
                  <li>absorbe mal les chocs ;</li>
                  <li>perte de confort ;</li>
                  <li>adhérence dégradée sur terrain irrégulier ;</li>
                  <li>suspension sous-exploitée.</li>
                </ul>
              </div>
            </div>
            <div
              className="bg-green-50 dark:bg-green-900/50 px-3 py-2 rounded-xl
            border border-green-200 dark:border-green-800 mt-2 md:mt-4"
            >
              <p className="font-semibold">🟢 Bon réglage</p>
              <p className="text-sm mb-0">
                La suspension utilise une partie significative de son
                débattement sans talonner fréquemment. La roue reste
                confortable, stable et prévisible, quelles que soient les
                irrégularités rencontrées.
              </p>
            </div>
          </div>

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

export default Suspension
