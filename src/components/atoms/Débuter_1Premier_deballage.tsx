'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

import powerpads from '@/public/3.debuter/Powerpads - Patton Beidou orange.jpg'
import logo_app_begode from '@/public/3.debuter/marques/logo_app_begode.webp'
import logo_app_darknessbot from '@/public/3.debuter/marques/logo_app_darknessbot.webp'
import logo_app_eucworld from '@/public/3.debuter/marques/logo_app_eucworld.webp'
import logo_app_inmotion from '@/public/3.debuter/marques/logo_app_inmotion.webp'
import logo_app_kingsong from '@/public/3.debuter/marques/logo_app_kingsong.webp'
import logo_app_leaperkim from '@/public/3.debuter/marques/logo_app_leaperkim.webp'
import logo_app_nosfet from '@/public/3.debuter/marques/logo_app_nosfet.png'
import logo_app_wheelLog from '@/public/3.debuter/marques/logo_app_wheelLog.webp'

const Begin_premier_deballage = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'deballage') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('deballage')
      }
      if (hash === 'powerpads') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('powerpads')
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
      id="deballage"
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
          aria-label="Premier déballage"
          title={<h3>📦 Le premier déballage</h3>}
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
          {/*---------------------------------------------------------------------*/}
          <div className="blueBlockdeballage mt-0 mb-6 relative border-l-4 border-blue-400 pl-6">
            <h4 className="mb-2">🎁 À la réception du carton :</h4>
            {[
              {
                title: "Vérifie l'aspect général",
                text: "Refuse la livraison si le carton est endommagé ou présente des traces d'eau/d'humidité.",
              },
              {
                title: 'Contrôle le contenu',
                text: 'Notice, chargeur et câble doivent être présents.',
              },
              {
                title: 'Vérifie le pneu',
                text: 'Gonfle-le suffisamment.',
              },
              {
                title: 'Ajuste la suspension',
                text: 'Prends le temps de comprendre les réglages, et assure-toi que les pièces mobiles fonctionnent correctement.',
              },
              {
                title: 'Fais quelques photos',
                text: "Utile pour conserver le numéro de série (nécessaire pour l'assurance), en cas de vol et… frimer auprès des copains. 😁",
              },
            ].map(({ title, text }, i) => (
              <div key={i} className="mb-2 relative">
                <div className="absolute left-[-26px] top-2 w-4 h-4 bg-blue-400 rounded-full border-1 border-white"></div>
                <p className="text-base font-semibold mb-0">{title}</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  {text}
                </p>
              </div>
            ))}
          </div>
          {/*---------------------------------------------------------------------*/}
          <h4 className="mt-4 mb-1">
            ➡️ Sortir la roue du mode transport&nbsp;:
          </h4>
          <p className="mb-1">
            Lorsque tu ouvres le carton, il est normal que la roue ne
            s&apos;équilibre pas lorsque tu l&apos;allumes.
          </p>
          <div className="blueBlock mb-2 space-y-0">
            <h4 className="mt-0 mb-1">
              🚚 Le &laquo;&nbsp;mode transport&nbsp;&raquo; c&apos;est
              quoi&nbsp;?
            </h4>
            <p>
              En usine, les roues sont verrouillées dans ce mode afin
              d&apos;éviter qu&apos;elles ne s&apos;allument de manière inopinée
              durant le transport, ce qui pourrait causer de sérieux dégâts.
              <br />
              Nb : Le mode transport est réversible.
            </p>
          </div>
          <p className="ml-2 mt-3 mb-0">
            🔒 Voici comment faire <b>pour sortir du mode transport </b>(les
            étapes varient en fonction du fabricant)&nbsp;:
          </p>
          <ul className="compactlist2 ml-3 mt-0 mb-6 leading-tight">
            <li className="">
              Généralement, <strong>le plus simple</strong> est de{' '}
              <strong>brancher le chargeur</strong> et le connecter à la roue.
            </li>
            <li className="">
              Chez Begode, la manipulation est parfaitement décrite{' '}
              <Link
                href="https://www.youtube.com/watch?v=8HJws4b_Dtw"
                target="_blank"
                className="link-style"
              >
                dans cette vidéo
              </Link>{' '}
              🎥 des WheelersPro.
            </li>
            <li className="">
              Chez LeaperKim, la manipulation est visible{' '}
              <Link
                href="https://youtu.be/K2Y33w_8SsE"
                target="_blank"
                className="link-style"
              >
                dans cette vidéo
              </Link>{' '}
              🎥.
            </li>
            <li className="">
              Les applications mobiles permettent aussi de désactiver/activer le
              mode transport.
            </li>
          </ul>
          {/*---------------------------------------------------------------------*/}
          <h4 className="mt-4 mb-1">➡️ Les applications mobiles&nbsp;:</h4>
          <p className="mb-0">
            La plupart des roues électriques sont prévues pour être connectées
            et configurées grâce à un smartphone connecté en Bluetooth.
          </p>
          <div className="mt-0 ml-3 overflow-x-auto">
            <p className="mt-2">
              <strong>Applications Constructeurs</strong>
            </p>
            <table className="min-w-full text-left border border-gray-300 dark:border-gray-700">
              <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                <tr className="bg-gray-100 dark:bg-gray-900 divide-x divide-gray-300 dark:divide-gray-700">
                  <td className="w-[130px] px-2 py-1 flex items-center center gap-1">
                    <div className="flex items-center gap-1">
                      <Image
                        src={logo_app_begode}
                        alt="logo_app_begode"
                        width={32}
                        height={32}
                        className="rounded-lg"
                      />
                      <strong>Begode</strong>
                    </div>
                  </td>
                  <td className="w-[25%] px-2 py-1">
                    <a
                      /* href="https://apps.apple.com/us/app/begode/id1549181193" */
                      href="https://apps.apple.com/us/app/begode/id6762254331"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-1"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="w-[35%] px-2 py-1">
                    <a
                      /* href="https://www.begode.com/pages/app" */
                      href="https://begode.fr.softonic.com/android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 gap-1"
                    >
                      <FaAndroid className="shrink-0" />

                      <div className="flex flex-col leading-tight">
                        <span className="underline">Android</span>
                        <span className="text-xs text-gray-500 dark:text-gray-300">
                          via Softonic (lien Begode KO)
                        </span>
                      </div>
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-900 divide-x divide-gray-300 dark:divide-gray-700">
                  <td className="px-2 py-1">
                    <div className="flex items-center gap-1">
                      <Image
                        src={logo_app_inmotion}
                        alt="logo_app_inmotion"
                        width={32}
                        height={32}
                        className="rounded-lg"
                      />
                      <strong>Inmotion</strong>
                    </div>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      href="https://apps.apple.com/us/app/inmotion-life-in-motion/id1452771445"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-1"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.inmotion.android.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-1"
                    >
                      <FaAndroid /> Android
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-900 divide-x divide-gray-300 dark:divide-gray-700">
                  <td className="px-2 py-1">
                    <div className="flex items-center gap-1">
                      <Image
                        src={logo_app_kingsong}
                        alt="logo_app_kingsong"
                        width={32}
                        height={32}
                        className="rounded-lg"
                      />
                      <strong>Kingsong</strong>
                    </div>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      href="https://apps.apple.com/us/app/king-song/id1497491652"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-1"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.kingsong.dlc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-1"
                    >
                      <FaAndroid /> Android
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-900 divide-x divide-gray-300 dark:divide-gray-700">
                  <td className="px-2 py-1">
                    <div className="flex items-center gap-1">
                      <Image
                        src={logo_app_leaperkim}
                        alt="logo_app_leaperkim"
                        width={32}
                        height={32}
                        className="rounded-lg"
                      />
                      <strong>LeaperKim</strong>
                    </div>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      href="https://apps.apple.com/us/app/leaperkim/id6466134098"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-1"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.laoniao.leaperkim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-1"
                    >
                      <FaAndroid /> Android
                    </a>
                  </td>
                </tr>

                <tr className="bg-gray-100 dark:bg-gray-900 divide-x divide-gray-300 dark:divide-gray-700">
                  <td className="px-2 py-1">
                    <div className="flex items-center gap-1">
                      <Image
                        src={logo_app_nosfet}
                        alt="logo_app_nosfet"
                        width={32}
                        height={32}
                        className="rounded-lg"
                      />
                      <strong>Nosfet</strong>
                    </div>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      href="https://apps.apple.com/us/app/nosfet/id6754307336"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-1"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      href="https://www.nosfet.com/support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 gap-1"
                    >
                      <FaAndroid className="shrink-0" />

                      <div className="flex flex-col leading-tight">
                        <span className="underline">Android</span>
                        <span className="text-xs text-gray-500 dark:text-gray-300">
                          APK sur site Nosfet
                        </span>
                      </div>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            {/*--------------------------------------------*/}
            <p className="mt-2">
              <strong>Applications Universelles</strong>
            </p>

            <table className="min-w-full text-left border border-gray-300 dark:border-gray-700">
              <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                <tr className="bg-gray-100 dark:bg-gray-900 divide-x divide-gray-300 dark:divide-gray-700">
                  <td className="w-[150px] px-2 py-1 flex items-center center gap-1">
                    <Image
                      src={logo_app_darknessbot}
                      alt="logo_app_darknessbot"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>DarknessBot</strong>
                  </td>
                  <td className="w-[30%] px-2 py-1">
                    <a
                      href="https://apps.apple.com/fr/app/darknessbot/id1108403878"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-1"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="w-[30%] px-2 py-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.darknessproduction.darknessbot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-1"
                    >
                      <FaAndroid className="shrink-0" />
                      <span className="truncate">Android</span>
                    </a>
                  </td>
                </tr>

                <tr className="bg-gray-100 dark:bg-gray-900 divide-x divide-gray-300 dark:divide-gray-700">
                  <td className="px-2 py-1 flex items-center gap-1">
                    <Image
                      src={logo_app_eucworld}
                      alt="logo_app_eucworld"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>EUC World</strong>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <FaApple className="shrink-0" />
                      <span className="hidden sm:inline">indisponible</span>
                      <span className="sm:hidden">—</span>
                    </a>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=net.lastowski.eucworld"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-1"
                    >
                      <FaAndroid className="shrink-0" />
                      <span className="truncate">Android</span>
                    </a>
                  </td>
                </tr>

                <tr className="bg-gray-100 dark:bg-gray-900 divide-x divide-gray-300 dark:divide-gray-700">
                  <td className="px-2 py-1 flex items-center gap-1">
                    <Image
                      src={logo_app_wheelLog}
                      alt="logo_app_wheelLog"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>WheelLog</strong>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <FaApple className="shrink-0" />
                      <span className="hidden sm:inline">indisponible</span>
                      <span className="sm:hidden">—</span>
                    </a>
                  </td>
                  <td className="px-2 py-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.cooper.wheellog&pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-1"
                    >
                      <FaAndroid className="shrink-0" />
                      <span className="truncate">Android</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 dark:text-gray-300 mt-2 text-right text-sm">
            <i>
              Aucun favoritisme, les marques sont citées par ordre alphabétique.
            </i>
            😉
          </p>
          {/*---------------------------------------------------------------------*/}
          <h4 className="mt-4 mb-1 scroll-mt-24" id="powerpads">
            ➡️ Et les powerpads&nbsp;?
          </h4>
          <div className="flex flex-col sm:flex-row items-center mb-1 gap-1">
            {/* TEXTE */}
            <aside className="flex-1">
              <p>
                Difficile de s&apos;y retrouver tant les modèles et formats se
                sont multipliés (cf.{' '}
                <Link
                  href="/guide-utile-gyroroue#dico"
                  className="link-style hover:text-cyan-700 dark:hover:text-cyan-200"
                >
                  Le P&apos;tit Dico du Bonheur
                </Link>
                ).
              </p>

              <p className="mb-0">
                Et à force d&apos;en voir partout (vidéos, réseaux sociaux,
                etc.), on pourrait penser à tort qu&apos;ils sont absolument
                nécessaires…
              </p>
              <p className="mb-3">
                Ils sont aussi parfois inclus dans le carton. Et leur usage
                s&apos;est généralisé à mesure que les roues ont gagné en poids
                et en performances.
              </p>
              <p className="mb-1">
                La réponse courte est simple&nbsp;:{' '}
                <strong>
                  pas obligatoires mais parfois indispensables&nbsp;!
                </strong>
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
                  src={powerpads}
                  alt="Assemblage d'une batterie lithium-ion"
                  className="rounded-lg w-full object-cover shadow-sm
                            min-w-[90px] max-w-[250px]"
                  priority={false}
                />
              </div>
            </aside>
          </div>

          <p className="ml-4 mb-1">
            🟢 <strong>Bien positionnés</strong>, les powerpads améliorent le
            confort et le contrôle. Par effet de levier, ils facilitent la
            transmission de puissance, rendant accélérations et freinages
            (notamment d&apos;urgence) plus efficaces. Ils prennent tout leur
            sens sur des roues puissantes (pour en tirer un maximum de
            performance) ou lourdes (≈30kg et plus) dont il faut maitriser
            l&apos;inertie. <br />
            Résultat&nbsp;: une conduite plus précise, plus dynamique, plus
            réactive… et souvent moins fatigante et plus sécurisante dans les
            manœuvres délicates.
            <br />
            🟠 <strong>À l&apos;inverse, </strong>sur une roue relativement
            légère par rapport au gabarit du wheeler, les powerpads sont
            superflus (et même <b>dangereux </b>si la roue n&apos;a pas la
            puissance pour répondre à l&apos;effet de levier généré). Mal
            positionnés, ils peuvent gêner la liberté de mouvement et nuire aux
            sensations de pilotage. <br />
            Sans eux, la roue conserve aussi une allure plus discrète et une
            silhouette plus fine, un point apprécié par certains wheelers
            urbains.
          </p>
          <p className="mb-0">
            <strong>En résumé</strong>, inutile de se sentir obligé d&apos;en
            installer, surtout quand on débute ou que la roue est légère.{' '}
            <strong>
              Les powerpads sont un outil au service d&apos;un usage, pas une
              obligation&nbsp;!
            </strong>
          </p>
          {/*---------------------------------------------------------------------*/}
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
            dernière mise à jour : février 2026
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Begin_premier_deballage
