'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Les3suspensions from '@/public/4.guide/Suspension1-les_amortisseurs.jpg'

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

          {/*----------------------------------------------------------------*/}
          {/*----------------- Vraiment une révolution ? --------------------*/}
          <h4 className="mt-6 mb-2">➡️ Le confort... au prix fort&nbsp;?</h4>
          <p>
            L&apos;arrivée de la suspension (premier modèle fin 2020) a été une
            des évolutions les plus marquantes de la gyroroue. Elle s&apos;est
            très vite généralisée et est rapidement devenue{' '}
            <Link
              href={'/choisir-gyroroue#besoins'}
              className="text-olive-600 dark:text-olive-300 underline hover:text-blue-700 dark:hover:text-blue-400"
              target="_blank"
            >
              un critère essentiel pour choisir
            </Link>{' '}
            sa roue.
          </p>
          <p className="mt-2">
            Pourquoi un tel succès ? Parce qu&apos;elle améliore le confort et
            la stabilité en absorbant une grande partie des chocs et des
            vibrations&nbsp;: pavés, trous, racines, nids de poules, bosses...{' '}
            <strong className="text-olive-600 dark:text-olive-300">
              Tout devient beaucoup moins fatigant et plus stable&nbsp;!
            </strong>
          </p>
          <p>
            Et malgré les milliers de kilomètres parcourus sans, une fois
            habitué à la suspension, difficile revenir en arrière.
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
                <tr className="border-b border-gray-200 dark:border-gray-800 text-white text-base bg-olive-500 dark:bg-olive-900">
                  <th className="py-2 px-2 text-left">Situation</th>
                  <th className="py-2 px-2 text-center">Intérêt</th>
                  <th className="py-2 px-2 text-center">Pourquoi ?</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base text-gray-800 dark:text-gray-100 bg-c-50 dark:bg-olive-800">
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-olive-700 transition">
                  <td className="p-1">🎓 Apprentissage</td>
                  <td className="p-1 text-center">🤔 Optionnel</td>
                  <td className="p-1 text-right">
                    Peu utile pour débuter (surcoût, alourdit la roue, éléments
                    exposés aux chutes)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-olive-700 transition">
                  <td className="p-1">🚆 Multi-modalité, transports denses</td>
                  <td className="p-1 text-center">❌ Peu adapté</td>
                  <td className="p-1 text-right">
                    Elle augmente le poids et l&apos;encombrement
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-olive-700 transition">
                  <td className="p-1">💰 Budget limité</td>
                  <td className="p-1 text-center">❌ Peu adapté</td>
                  <td className="p-1 text-right">
                    Généralement plus cher à performances équivalentes
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-olive-700 transition">
                  <td className="p-1">🚶Trajet court / occasionnel</td>
                  <td className="p-1 text-center">🤔 Optionnel</td>
                  <td className="p-1 text-right">
                    Sans, c&apos;est plus simple, léger, compact et économique
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-olive-700 transition">
                  <td className="p-1">🚴 Trajets réguliers</td>
                  <td className="p-1 text-center">✅ Un vrai plus</td>
                  <td className="p-1 text-right">
                    Le confort donne encore plus envie d&apos;utiliser sa roue
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-olive-700 transition">
                  <td className="p-1">🚗 Trajets longs / quotidiens</td>
                  <td className="p-1 text-center">✅ Très intéressant</td>
                  <td className="p-1 text-right">
                    Réduit la fatigue (mais aussi la place pour la batterie)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-olive-700 transition">
                  <td className="p-1">🌲 Offroad / chemins dégradés</td>
                  <td className="p-1 text-center">✅ Très intéressant</td>
                  <td className="p-1 text-right">
                    Meilleure stabilité et contrôle (mais nécessite de
                    l&apos;entretien)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-olive-100 dark:hover:bg-olive-700 transition">
                  <td className="p-1">⚡ Conduite sportive</td>
                  <td className="p-1 text-center">✅ Selon usage</td>
                  <td className="p-1 text-right">
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
            mobiles qui travaillent en permanence, et qui{' '}
            <strong className="text-olive-600 dark:text-olive-300">
              nécessitent des contrôles réguliers
            </strong>{' '}
            (jeux mécaniques, vis desserrées, bruits anormaux, fuites
            éventuelles, usure des pièces mobiles).
          </p>
          <p>
            Une{' '}
            <strong className="text-olive-600 dark:text-olive-300">
              suspension mal entretenue
            </strong>{' '}
            peut perdre en efficacité, être inconfortable, voire{' '}
            <strong className="text-olive-600 dark:text-olive-300">
              devenir dangereuse
            </strong>{' '}
            (générant des déséquilibres).
          </p>
          <div className="BlockSuspension">
            <p className="mb-0 font-bold">
              ⚠️ Plus la pratique est engagée, plus l&apos;entretien devient
              important.
            </p>
            <p className="mt-1">
              Les vidéos de{' '}
              <strong>sauts, d&apos;escaliers ou d&apos;offroad</strong> extrême
              sont impressionnantes. Certaines roues modernes en sont capables,
              mais cela sollicite énormément le matériel (car{' '}
              <strong>les roues ne sont pas conçues pour </strong>encaisser cela
              au quotidien).
            </p>
          </div>

          {/*-----------------------------------------------------*/}
          {/*------------------CONCEPTION-------------------------*/}
          <h4 className="mt-8 mb-2">➡️ Les principaux éléments</h4>
          <div className="mb-2 md:mb-4">
            <p>
              Certains modèles ont privilégié la performance, d&apos;autres le
              confort, la simplicité mécanique ou la robustesse.
            </p>
            <p>
              Pour cela, les fabricants ont testé et développé différents
              systèmes de suspension.
            </p>
            <p className="mt-2">
              Une suspension se compose de plusieurs éléments&nbsp;:
            </p>
            <ul className="compactlist2">
              <li className="">
                un système de guidage (glissières, bras, biellettes...) qui
                permet le mouvement
              </li>
              <li className="">
                le(s) amortisseur(s) qui absorbent les chocs provoqués par les
                irrégularités du terrain
              </li>
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
              <div className="bg-taupe-50 dark:bg-taupe-900 px-3 py-2 rounded-xl shadow-md dark:shadow-neutral-900 dark:hover:shadow-neutral-950">
                <h6 className="font-semibold mb-1">⚙️ Suspension déportée</h6>
                <p className="text-sm">
                  L&apos;amortisseur est visible sur l&apos;arrière de la roue,
                  faciliant l&apos;accès aux réglages mais l&apos;exposant à la
                  saleté.
                </p>
                <p className="text-sm">
                  Exemples : S16, S18, Master, Extreme...
                </p>
              </div>
              <div className="bg-taupe-50 dark:bg-taupe-900 px-3 py-2 rounded-xl shadow-md dark:shadow-neutral-900 dark:hover:shadow-neutral-950">
                <h6 className="font-semibold mb-1">⚙️ Suspension centrale</h6>
                <p className="text-sm">
                  Visuellement plutôt discret, les amortisseurs sont placés sur
                  les côtés de la roue.
                </p>
                <p className="text-sm place-content-end">
                  Exemples : Falcon, V11Y, Sherman-S, Lynx...
                </p>
              </div>
            </div>
            <p>
              Elle ne permet pas, à elle seule, de juger la qualité d&apos;une
              suspension. Les performances dépendent aussi de la qualité du
              guidage, de la cinématique, de l&apos;amortisseur, et des
              réglages.
            </p>
          </div>

          {/*----------------- TYPE D'AMORTISSEUR ---------------------*/}
          <h5 className="mt-4 font-semibold">
            🔸 Les technologies des amortisseurs
          </h5>
          <div className="mx-4 mb-2 md:mb-4">
            <p className="mb-2">
              Un amortisseur utilise une ou plusieurs technologies combinées
              (parfois les trois) pour supporter le poids et contrôler les
              mouvements de la roue.
            </p>
            <div className="grid gap-2 md:gap-3 md:grid-cols-3 mb-4">
              {/* BLOC 1: RESSORT */}
              <div
                className="bg-taupe-50 dark:bg-taupe-900 px-2 py-2 rounded-xl
                shadow-md hover:shadow-lg transition-shadow
                dark:shadow-neutral-900 dark:hover:shadow-neutral-950
                flex flex-col h-full border-t-4 border-1 border-taupe-600"
              >
                <h6 className="font-semibold mb-1">
                  🟤 Le Ressort (Mécanique)
                </h6>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  Un ressort hélicoïdal métallique.
                </p>
                <ul className="compactlist2 [&>li]:text-sm flex-1">
                  <li>
                    <strong>Comportement :</strong> prévisible
                  </li>
                  <li>
                    <strong>Réglage : </strong>limité (il faut changer le
                    ressort pour changer la dureté)
                  </li>
                  <li>
                    <strong>Contrainte : </strong>simple (fait l&apos;essentiel)
                  </li>
                </ul>
                <div
                  className="bg-taupe-100 dark:bg-taupe-800 rounded-md
                p-1.5 mt-3 text-center text-sm font-medium"
                >
                  🎯 Robuste / réactivité brute
                </div>
              </div>

              {/* BLOC 2: AIR */}
              <div
                className="bg-taupe-50 dark:bg-taupe-900 px-2 py-2 rounded-xl
                shadow-md hover:shadow-lg transition-shadow
                dark:shadow-neutral-900 dark:hover:shadow-neutral-950
                flex flex-col h-full border-t-4 border-1 border-taupe-600"
              >
                <h6 className="font-semibold mb-1">
                  🟤 L&apos;Air (Pneumatique)
                </h6>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  Une cartouche d&apos;air sous haute pression.
                </p>
                <ul className="compactlist2 [&>li]:text-sm flex-1">
                  <li>
                    <strong>Comportement : </strong>naturellement progressif
                    (devient plus dur en s&apos;enfonçant pour éviter de
                    talonner)
                  </li>
                  <li>
                    <strong>Réglage : </strong>grande plage d&apos;ajustement
                    (via une pompe haute pression)
                  </li>
                  <li>
                    <strong>Contrainte :</strong> pression à vérifier et ajuster
                    régulièrement
                  </li>
                </ul>
                <div
                  className="bg-taupe-100 dark:bg-taupe-800 rounded-md
                p-1.5 mt-3 text-center text-sm font-medium"
                >
                  🎯 Polyvalente / ajustable
                </div>
              </div>
              {/* BLOC 3: HYDRAULIQUE */}
              <div
                className="bg-taupe-50 dark:bg-taupe-900 px-2 py-2 rounded-xl
                shadow-md hover:shadow-lg transition-shadow
                dark:shadow-neutral-900 dark:hover:shadow-neutral-950
                flex flex-col h-full border-t-4 border-1 border-taupe-600"
              >
                <h6 className="font-semibold mb-1">
                  🟤 L&apos;Hydraulique (Huile)
                </h6>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  Un circuit d&apos;huile interne.
                </p>
                <ul className="compactlist2 [&>li]:text-sm flex-1">
                  <li>
                    <strong>Rôle : </strong>Le cerveau du système. L&apos;huile
                    freine, dompte et stabilise l&apos;énergie du ressort (métal
                    ou air) pour éliminer l&apos;effet pogo / trampoline.
                  </li>
                  <li>
                    <strong>Réglage : </strong>Permet d&apos;ajuster précisément
                    la vitesse de <em>Compression</em> (absorption du choc) et
                    de <em>Rebond</em> (vitesse de retour).
                  </li>
                  <li>
                    <strong>Contrainte : </strong>Mécanique plus complexe.
                    Nécessite une étanchéité parfaite pour éviter les fuites
                    d&apos;huile au fil des ans.
                  </li>
                </ul>
                <div
                  className="bg-taupe-100 dark:bg-taupe-800 rounded-md
                p-1.5 mt-3 text-center text-sm font-medium text-olive-700 dark:text-olive-300"
                >
                  🎯 Maîtrise / contrôle du mouvement
                </div>
              </div>
            </div>
          </div>
          {/*--------------------------------------------------------------------*/}
          {/*----------------------------image-----------------------------------*/}
          <div className="relative max-w-4xl mx-auto order-first md:order-last">
            <Image
              src={Les3suspensions}
              alt="Les 3 types d'amortisseurs pour gyroroue : ressort, air et hydraulique"
              className="w-full max-w-3xl mx-auto rounded-2xl object-cover object-center cursor-pointer shadow-md hover:shadow-lg dark:shadow-slate-600"
              priority
              placeholder="blur"
              onClick={() => setIsOpen1(true)} // 👈 ouvre la lightbox
            />
          </div>
          {/* Lightbox */}
          {isOpen1 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
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
                  alt="Les 3 types d'amortisseurs pour gyroroue : ressort, air et hydraulique"
                  className="w-full rounded-xl shadow-lg border-medium border-blue-300"
                  priority
                />
              </div>
            </div>
          )}

          {/*------------------------------------------------------------*/}
          {/*------------------ IDEES RECUES ----------------------------*/}
          <h4 className="mt-8 mb-2">➡️ Attention aux idées reçues</h4>
          <p className="my-2">
            Comme souvent en gyroroue,{' '}
            <strong className="text-olive-600 dark:text-olive-300">
              les chiffres seuls ne racontent pas toute l&apos;histoire
            </strong>
            .
            <br />
            Une suspension ne se résume pas à son débattement ou à sa
            technologie.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-4 items-stretch">
            {/* ===================== CARD 1 ===================== */}
            <div
              className="h-full group bg-olive-50 dark:bg-olive-900 px-2 py-2 rounded-2xl border border-transparent hover:border-olive-300/40 dark:hover:border-olive-700 shadow-sm hover:shadow-lg ease-out flex flex-col
            dark:shadow-neutral-900 dark:hover:shadow-neutral-950"
            >
              <h4 className="text-lg font-semibold mb-3">
                🟠 Gros débattement = meilleure suspension
              </h4>
              {/* CONTENU HAUT */}
              <div className="flex-1">
                <p className="text-sm">
                  Le débattement (souvent entre 60mm à 90mm) correspond à la
                  course maximale de la suspension.
                </p>
                <ul className="compactlist2">
                  <li className="text-sm">
                    Sur le papier, un grand débattement permet d&apos;absorber
                    des chocs plus importants
                  </li>
                  <li className="text-sm">
                    En pratique, le comportement dépend de la cinématique, de la
                    progressivité de l&apos;amortisseur, de sa rigidité et des
                    réglages
                  </li>
                </ul>
              </div>
              {/* FOOTER BLOCK */}
              <div className="mt-4">
                <div className="bg-olive-100 dark:bg-olive-800 py-1 px-3 rounded-lg">
                  <p className="text-sm">
                    Un talonnage occasionnel n&apos;est pas problématique. En
                    revanche, un talonnage fréquent indique un réglage inadapté.
                  </p>
                </div>
                <p className="text-sm font-semibold">
                  👉 Un grand débattement ne fait pas systématiquement une
                  meilleure suspension.
                </p>
              </div>
            </div>

            {/* ===================== CARD 2 ===================== */}
            <div
              className="h-full group bg-olive-50 dark:bg-olive-900 px-2 py-2 rounded-2xl border border-transparent hover:border-olive-300/40 dark:hover:border-olive-700 shadow-sm hover:shadow-lg ease-out flex flex-col
            dark:shadow-neutral-900 dark:hover:shadow-neutral-950"
            >
              <h4 className="text-lg font-semibold mb-3">
                🟠 Suspension ≠ conduite sans effort
              </h4>
              {/* CONTENU HAUT */}
              <div className="flex-1">
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
              </div>
              {/* FOOTER BLOCK */}
              <div className="mt-4">
                <div className="bg-olive-100 dark:bg-olive-800 py-1 px-3 rounded-lg">
                  <p className="text-sm">
                    La suspension doit être considérée comme un équipement
                    complémentaire, pas comme une garantie de sécurité.
                  </p>
                </div>
                <p className="text-sm font-semibold">
                  👉 Le bon sens et la vigilance restent les meilleurs
                  amortisseurs.
                </p>
              </div>
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

          {/*---------------------------------------------------------------------*/}
          {/*------------------ Bien régler sa suspension ------------------------*/}
          <h4 className="mt-8 mb-2">➡️ Bien régler sa suspension</h4>
          <div className="mb-2 md:mb-4">
            <p>
              Comme pour la pression du pneu, il n&apos;existe pas de réglage
              universel. Le bon compromis dépend notamment :
            </p>
            <ul className="compactlist2">
              <li>du poids du wheeler ;</li>
              <li>du terrain pratiqué ;</li>
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
            <p>
              <span className="font-semibold">👉 Et le SAG&nbsp;? </span>
              Il s&apos;agit de la conséquence du réglage de précharge. Une
              suspension trop enfoncée manquera de réserve pour absorber
              certains chocs (et risque davantage de talonner).
            </p>
            <p className="mb-0">
              Généralement, on cherche un SAG compris entre 20% et 30% du
              débattement total.
            </p>
          </div>

          {/*--------------- Trouver le bon réglage -------------------*/}
          <h5 className="mt-4 font-semibold">🔹 Trouver le bon réglage</h5>
          <div className="mx-4 mb-2 md:mb-4">
            <p>
              L&apos;objectif est simple&nbsp;: permettre à la suspension de
              travailler. Comme pour la pression d&apos;un pneu, plusieurs
              essais sont souvent nécessaires avant de trouver le réglage qui
              convient.
            </p>
            <p className="mb-0">
              Tes choix et tes réglages dépendront avant tout de ton usage, de
              ton poids, et des sensations que tu recherches (le meilleur
              réglage n&apos;est pas celui d&apos;un autre wheeler sur YouTube).
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

          {/*--------------------------------------------------------------*/}
          {/*--------------------------------------------------------------*/}
          <div className="BlockSuspension">
            <p className="font-bold">💡 En résumé :</p>
            <ul className="compactlist2">
              <li>
                Mal réglée, la suspension sera inefficace et désagréable !
              </li>
              <li>
                Débutant ou budget serré ? Une roue non suspendue reste un
                excellent choix (plus léger et plus fiable).
              </li>
              <li>
                Gros rouleur ou adepte du confort ? La suspension changera votre
                vie, à condition de prendre 5 minutes pour effectuer les
                réglages et les vérifier régulièrement.
              </li>
            </ul>
          </div>

          {/*--------------------------------------------------------------*/}
          {/*--------------------------------------------------------------*/}
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
