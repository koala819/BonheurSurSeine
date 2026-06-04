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
          {/*---------------------------------------------------------------*/}
          <p>
            À leurs débuts, les gyroroues ne possédaient aucune suspension. Le
            confort dépendait alors uniquement du pneu, de sa pression… et des
            jambes du wheeler 😅
          </p>
          <p>
            Mais il faut reconnaître qu&apos;une fois habitués à une roue
            suspendue, beaucoup de wheelers ont du mal à revenir en arrière.
          </p>
          <div className="blueBlock">
            <p className="">
              Et pourtant, des milliers de kilomètres ont été parcourus ainsi.
              La suspension n&apos;est donc pas indispensable. D&apos;ailleurs,
              les roues les plus compactes, légères et pratiques du quotidien en
              sont souvent dépourvues.
            </p>
          </div>

          {/*------------------CHOIX SUSPENSION----------------------------*/}
          <h4 className="mt-6 mb-2">➡️ Gadget ou révolution ?</h4>

          <p>
            La suspension est devenue un véritable critère lors du choix
            d&apos;une roue.
          </p>
          <p>
            Pourquoi un tel succès ? Parce qu&apos;elle améliore fortement le
            confort et la stabilité en absorbant une partie des irrégularités du
            terrain : pavés, trous, racines, bosses ou défauts du bitume.
          </p>
          <p>
            Le wheeler est moins secoué et les longs trajets deviennent souvent
            beaucoup plus agréables.
          </p>
          <p>Pour autant, une roue suspendue n&apos;est pas obligatoire.</p>
          <p>
            Pour les petits trajets urbains, l&apos;apprentissage, un budget
            réduit ou une conduite tranquille, une roue sans suspension peut
            largement suffire.
          </p>

          <p>Elle sera souvent :</p>
          <ul className="compactlist2">
            <li>plus légère ;</li>
            <li>plus compacte ;</li>
            <li>plus simple mécaniquement ;</li>
            <li>parfois plus joueuse.</li>
          </ul>

          <p>La suspension devient particulièrement intéressante :</p>
          <ul className="compactlist2">
            <li>sur mauvais revêtements ;</li>
            <li>en offroad ;</li>
            <li>en conduite sportive ;</li>
            <li>pour améliorer le confort au quotidien.</li>
          </ul>

          <p>En contrepartie, elle apporte aussi quelques inconvénients :</p>
          <ol className="compactlist2">
            <li>
              davantage de pièces mécaniques et donc une complexité supérieure ;
            </li>
            <li>
              un prix et un poids plus élevés à batterie et puissance égales ;
            </li>
            <li>un entretien régulier indispensable.</li>
          </ol>

          <p>
            À poids équivalent, il faut souvent choisir entre davantage de
            batterie ou la présence d&apos;une suspension.
          </p>

          <h5 className="mt-4 mb-2">🔧 Entretien d&apos;une suspension</h5>

          <p>
            Comme sur un vélo ou une moto, une suspension travaille énormément.
          </p>

          <p>Il faut surveiller régulièrement :</p>

          <ul className="compactlist2">
            <li>les jeux mécaniques ;</li>
            <li>les visseries ;</li>
            <li>les bruits anormaux ;</li>
            <li>les éventuelles fuites ;</li>
            <li>l&apos;usure des pièces mobiles.</li>
          </ul>

          <p>
            Une suspension mal entretenue peut perdre en efficacité, devenir
            inconfortable, voire dangereuse.
          </p>

          <p>
            Quelques contrôles réguliers valent mieux qu&apos;une panne ou un
            problème de sécurité.
          </p>

          <div className="blueBlock my-4">
            <p className="mb-0">
              👉 Une suspension n&apos;est ni indispensable… ni inutile. Tout
              dépend avant tout de ton usage.
            </p>
          </div>

          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr>
                  <th className="border p-2">Avantages</th>
                  <th className="border p-2">Inconvénients / limites</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Confort</td>
                  <td className="border p-2">Prix plus élevé</td>
                </tr>
                <tr>
                  <td className="border p-2">Réduction de la fatigue</td>
                  <td className="border p-2">Poids supérieur</td>
                </tr>
                <tr>
                  <td className="border p-2">Meilleure absorption des chocs</td>
                  <td className="border p-2">Entretien supplémentaire</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    Plus polyvalente (ville, chemin, offroad)
                  </td>
                  <td className="border p-2">Complexité mécanique</td>
                </tr>
                <tr>
                  <td className="border p-2">Plus de stabilité</td>
                  <td className="border p-2">
                    Risque de prise de confiance excessive
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Certains chercheurs parlent d&apos;homéostasie du risque :
            lorsqu&apos;un équipement nous donne un sentiment de sécurité
            supplémentaire, nous avons parfois tendance à prendre davantage de
            risques.
          </p>

          <p>
            Une suspension peut donc améliorer le confort et la stabilité tout
            en encourageant certains wheelers à rouler plus vite ou sur des
            terrains plus engagés.
          </p>
          {/*---------------------------------------------------------------*/}
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
          {/*------------------IDEES RECUES----------------------------*/}
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
