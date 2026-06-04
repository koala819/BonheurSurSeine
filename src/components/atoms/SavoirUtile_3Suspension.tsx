'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Les3suspensions from '@/public/4.guide/Pneus1_les_structures.jpg'

const Pneu = () => {
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
          aria-label="Choisir et régler la suspension"
          title={<h3>🦿 La suspension : comprendre, choisir et régler</h3>}
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
          <p>
            Mais il faut reconnaître qu&apos;une fois habitué à une roue
            suspendue, difficile revenir en arrière.
          </p>
          <div className="blueBlock">
            <p className="">
              Et pourtant, des milliers de kilomètres ont été parcourus ainsi.
              <br />
              La suspension n&apos;est donc pas absolument indispensable.
            </p>
          </div>

          {/*------------- Gadget ou révolution -----------------------*/}
          <h4 className="mt-6 mb-2">➡️ Vraiment une révolution ?</h4>
          <p>
            L&apos;ajout d&apos;une suspension a été une des évolutions les plus
            marquantes de la gyroroue. C&apos;en est devenu{' '}
            <Link href={'/choisir-gyroroue#besoins'} target="_blank">
              un véritable critère de choix{' '}
            </Link>
            lors de l&apos;achat d&apos;une roue.
          </p>
          <p>
            Pourquoi un tel succès ? Parce qu&apos;elle améliore le confort et
            la stabilité en absorbant une grande partie des chocs et des
            vibrations du terrain&nbsp;: pavés, trous, racines, nids de poules,
            bosses... Tout devient beaucoup moins fatigants et plus
            agréable&nbsp;!
          </p>

          <p className="mt-2">
            Mais cette amélioration du confort a un coût&nbsp;: prix,
            encombrement, poids, usure, pièces mécaniques, entretien...{' '}
          </p>

          <div className="blueBlock my-4">
            <p className="mb-0">
              👉 La vraie question n&apos;est donc pas juste « avec ou sans
              suspension&nbsp;? », mais plutôt&nbsp;:{' '}
              <strong>mon usage justifie-t-il ces compromis ?</strong>
            </p>
          </div>

          {/*----------------------------Tableau-----------------------------------*/}
          <div className="overflow-x-auto p-1">
            <table
              className="w-full border-collapse rounded-lg overflow-hidden shadow-md
            dark:shadow-neutral-900"
            >
              <thead>
                <tr className="bg-sky-700 text-white text-base">
                  <th className="py-3 px-2 text-left">Situation</th>
                  <th className="py-3 px-2 text-center">Intérêt</th>
                  <th className="py-3 px-2 text-right">Gains / compromis</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr className="border-b dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50">
                  <td className="p-2">🏙️ Urbain court / occasionnel</td>
                  <td className="p-2">🤔 Faible</td>
                  <td className="p-2">
                    + simplicité, légèreté, coût réduit <br />− confort limité
                    sur routes dégradées
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600 bg-blue-50 dark:bg-sky-800/30">
                  <td className="p-2">🎓 Apprentissage</td>
                  <td className="p-2">🤔 Optionnelle</td>
                  <td className="p-2">
                    + tolérance aux irrégularités <br />− complexité et coût non
                    essentiels
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50">
                  <td className="p-2">🎒 Légèreté / compacité</td>
                  <td className="p-2">❌ Peu adaptée</td>
                  <td className="p-2">
                    + confort supplémentaire <br />− poids, encombrement,
                    multi-modalité réduite
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600 bg-blue-50 dark:bg-sky-800/30">
                  <td className="p-2">💰 Budget limité</td>
                  <td className="p-2">❌ Peu adaptée</td>
                  <td className="p-2">
                    + confort et sécurité <br />− prix élevé, entretien,
                    complexité
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50">
                  <td className="p-2">🚗 Trajets longs / quotidiens</td>
                  <td className="p-2">✅ Très intéressante</td>
                  <td className="p-2">
                    + forte réduction de fatigue, confort <br />− poids et coût
                    supérieurs
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600 bg-blue-50 dark:bg-sky-800/30">
                  <td className="p-2">🌲 Offroad / chemins dégradés</td>
                  <td className="p-2">✅ Recommandée</td>
                  <td className="p-2">
                    + absorption des chocs, stabilité, sécurité <br />−
                    entretien plus important
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50">
                  <td className="p-2">⚡ Conduite sportive</td>
                  <td className="p-2">👍 Variable selon usage</td>
                  <td className="p-2">
                    + contrôle et confort à haute vitesse <br />− risque de
                    surconfiance, poids
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="yellowBlock">
            <p className="">
              ⚠️ Une suspension améliore le confort et la stabilité, mais elle
              peut aussi donner davantage confiance.
              <br />
              Certains chercheurs parlent{' '}
              <strong>«&nbsp;d&apos;homéostasie du risque&nbsp;»</strong>&nbsp;:
              lorsqu&apos;un équipement nous semble plus sûr, nous avons parfois
              tendance à compenser en prenant davantage de risques.
            </p>
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

          {/*------------------------------------------------------------*/}
          {/*------------------ IDEES RECUES ----------------------------*/}
          <h4 className="mt-8 mb-2">➡️ Attention aux idées reçues</h4>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            {/* Bloc 1 ------------------DEBATTEMENT----------------------------*/}
            <div className="bg-stone-100 dark:bg-zinc-800 px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-2">
                🟠 Le débattement : un indicateur parmi d&apos;autres
              </h4>
              <p className="text-sm">
                Le débattement correspond à la course maximale de la suspension.
                On parle généralement de 60 mm, 70 mm, 90 mm ou davantage.
              </p>
              <p className="text-sm">
                Sur le papier, un grand débattement permet d&apos;absorber des
                chocs plus importants.
              </p>
              <p className="text-sm">
                Mais un débattement de 90 mm n&apos;est pas automatiquement
                meilleur qu&apos;un débattement de 60 mm. La qualité d&apos;une
                suspension dépend aussi :
              </p>
              <ul className="compactlist2">
                <li className="text-sm">de sa conception ;</li>
                <li className="text-sm">de ses réglages ;</li>
                <li className="text-sm">de sa progressivité ;</li>
                <li className="text-sm">de sa rigidité ;</li>
                <li className="text-sm">du comportement global de la roue.</li>
              </ul>
              <p className="text-sm">
                Une suspension bien conçue avec peu de débattement peut parfois
                être plus efficace qu&apos;une suspension mal conçue avec une
                grande course.
              </p>
              <p className="text-sm">
                Comme souvent, les chiffres seuls ne racontent pas toute
                l&apos;histoire.
              </p>
            </div>

            {/* Bloc 2 ------------------CONDUITE---------------------------- */}
            <div className="bg-stone-100 dark:bg-zinc-800 px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-2">
                🟠 Suspension ≠ conduite sans effort
              </h4>
              <p className="text-sm">
                Une roue suspendue pardonne davantage certaines imperfections du
                terrain.
              </p>
              <p className="text-sm">
                Mais cela peut aussi créer un faux sentiment de sécurité.
              </p>
              <ul className="compactlist2">
                <li className="text-sm">un nid-de-poule reste dangereux ;</li>
                <li className="text-sm">
                  un trottoir mal abordé peut provoquer une chute ;
                </li>
                <li className="text-sm">
                  une mauvaise trajectoire reste une mauvaise trajectoire.
                </li>
              </ul>
              <p className="text-sm">
                La suspension doit être considérée comme un équipement
                complémentaire, pas comme une solution miracle.
              </p>
              <p className="text-sm">
                Les gyroroues n&apos;ont d&apos;ailleurs pas été conçues à
                l&apos;origine pour dévaler des escaliers ou réaliser des sauts
                comme un VTT de descente.
              </p>
              <p className="text-sm">
                Certaines roues modernes en sont capables, mais cela reste une
                pratique exigeante qui sollicite énormément le matériel.
              </p>
              <div className="greenBlock my-4">
                <p className="mb-0">
                  👉 Le bon sens reste le meilleur amortisseur 😉
                </p>
              </div>
            </div>
          </div>

          <div className="blueBlock mb-4">
            <p className="mb-0">
              👉 Comme souvent en gyroroue, il n&apos;existe pas de solution
              parfaite. Le meilleur choix dépend avant tout de ton usage, de ton
              terrain et des sensations que tu recherches.
            </p>
          </div>

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

export default Pneu
