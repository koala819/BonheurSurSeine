'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

import logo_app_begode from '@/public/marques/logo_app_begode.webp'
import logo_app_darknessbot from '@/public/marques/logo_app_darknessbot.webp'
import logo_app_eucworld from '@/public/marques/logo_app_eucworld.webp'
import logo_app_inmotion from '@/public/marques/logo_app_inmotion.webp'
import logo_app_kingsong from '@/public/marques/logo_app_kingsong.webp'
import logo_app_leaperkim from '@/public/marques/logo_app_leaperkim.webp'
import logo_app_nosfet from '@/public/marques/logo_app_nosfet.png'
import logo_app_wheelLog from '@/public/marques/logo_app_wheelLog.webp'

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
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Premier déballage"
          title={<h3>📦 Premier déballage</h3>}
          indicator={<span className="chevronAccordionItem">&lsaquo;</span>}
        >
          {/*---------------------------------------------------------------------*/}
          <div className="blueBlockdeballage mt-0 mb-6 relative border-l-4 border-blue-400 pl-6">
            <h4 className="mb-2">🎁 À la réception du carton :</h4>
            {[
              {
                title: "Vérifie l'aspect général du carton",
                text: "Refuse la livraison si le carton est endommagé ou présente des traces d'eau/d'humidité.",
              },
              {
                title: 'Vérifie le contenu du carton',
                text: 'Il doit contenir la notice, le chargeur et son câble électrique.',
              },
              {
                title: 'Vérifie le pneu',
                text: 'Gonfle-le suffisamment.',
              },
              {
                title: 'Ajuste la suspension',
                text: 'Prend le temps de comprendre les réglages. Vérifie son fonctionnement et les pièces mobiles.',
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
          <p className="mb-1 text-justify">
            Lorsque que tu ouvres le carton, il est normal que la roue ne
            s&apos;équilibre pas lorsque tu l&apos;allumes.
          </p>
          <div className="greenBlock mb-2 text-justify">
            <h4 className="mt-0 mb-1">
              🚚 Le &laquo;&nbsp;mode transport&nbsp;&raquo; c&apos;est
              quoi&nbsp;?
            </h4>
            En usine, les roues sont verrouillées dans ce mode afin
            d&apos;éviter qu&apos;elles ne s&apos;allument de manière inopinée
            durant le transport, ce qui pourrait causer de sérieux dégâts.
            <br />
            Nb : Le mode transport est réversible.
          </div>
          <h5 className="mt-2 mb-2">
            &nbsp;&nbsp;🔒{' '}
            <b>Voici comment faire pour sortir du mode transport</b> (les étapes
            varient en fonction du fabricant)&nbsp;:
          </h5>
          <ul className="compactlist mt-0 mb-6 leading-tight">
            <li className="text-justify">
              Généralement, <strong>le plus simple</strong> est de{' '}
              <strong>brancher le chargeur</strong> et le connecter à la roue.
            </li>
            <li className="text-justify">
              Chez Begode, la manipulation est parfaitement décrite{' '}
              <Link
                href="https://www.youtube.com/watch?v=8HJws4b_Dtw"
                target="_blank"
                className="link-style"
              >
                dans cette vidéo
              </Link>{' '}
              des WheelersPro.
            </li>
            <li className="text-justify">
              Chez LeaperKim, la manipulation est visible{' '}
              <Link
                href="https://youtu.be/K2Y33w_8SsE"
                target="_blank"
                className="link-style"
              >
                dans cette vidéo
              </Link>
              .
            </li>
            <li className="text-justify">
              Les applications mobiles permettent de désactiver/activer le mode
              transport.
            </li>
          </ul>

          {/*---------------------------------------------------------------------*/}
          <h4 className="mt-4 mb-1">➡️ Les applications mobiles&nbsp;:</h4>
          <p className="text-justify mb-0">
            La plupart des roues électriques sont prévues pour être connectées
            et configurées grâce à un smartphone connecté en Bluetooth.
            <br />
            Voici les principales applications&nbsp;:
          </p>
          <div className="mt-0 ml-3 overflow-x-auto">
            <p className="mt-2">
              <strong>Applications Constructeurs</strong>
            </p>
            <table className="min-w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
              <tbody>
                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="px-2 py-1 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_begode}
                      alt="logo_app_begode"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>Begode</strong>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://apps.apple.com/us/app/begode/id1549181193"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-2"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://www.begode.com/pages/app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-2"
                    >
                      <FaAndroid /> Android
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="px-2 py-1 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_inmotion}
                      alt="logo_app_inmotion"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>Inmotion</strong>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://apps.apple.com/us/app/inmotion-life-in-motion/id1452771445"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-2"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.inmotion.android.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-2"
                    >
                      <FaAndroid /> Android
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="px-2 py-1 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_kingsong}
                      alt="logo_app_Kingsong"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>Kingsong</strong>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://apps.apple.com/us/app/king-song/id1497491652"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-2"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.kingsong.dlc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-2"
                    >
                      <FaAndroid /> Android
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="px-2 py-1 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_leaperkim}
                      alt="logo_app_leaperkim"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>LeaperKim</strong>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://apps.apple.com/us/app/leaperkim/id6466134098"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-2"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.laoniao.leaperkim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-2"
                    >
                      <FaAndroid /> Android
                    </a>
                  </td>
                </tr>

                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="px-2 py-1 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_nosfet}
                      alt="logo_app_nosfet"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>Nosfet</strong>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      rel="noopener noreferrer"
                      className="flex items-center  gap-2"
                    >
                      <FaApple /> indisponible
                    </a>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://www.nosfet.com/support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-2"
                    >
                      <FaAndroid /> Android
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-2">
              <strong>Applications Universelles</strong>
            </p>
            <table className="min-w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
              <tbody>
                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="px-2 py-1 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_darknessbot}
                      alt="logo_app_darknessbot"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>DarknessBot</strong>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://apps.apple.com/fr/app/darknessbot/id1108403878"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-2"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.darknessproduction.darknessbot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-2"
                    >
                      <FaAndroid /> Android
                    </a>
                  </td>
                </tr>

                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="px-2 py-1 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_eucworld}
                      alt="logo_app_eucworld"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>EUC World</strong>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      rel="noopener noreferrer"
                      className="flex items-center  gap-2"
                    >
                      <FaApple /> indisponible
                    </a>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://play.google.com/store/apps/details?id=net.lastowski.eucworld"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-2"
                    >
                      <FaAndroid /> Android
                    </a>
                  </td>
                </tr>

                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="px-2 py-1 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_wheelLog}
                      alt="logo_app_wheelLog"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>WheelLog</strong>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      rel="noopener noreferrer"
                      className="flex items-center  gap-2"
                    >
                      <FaApple /> indisponible
                    </a>
                  </td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.cooper.wheellog&pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 underline gap-2"
                    >
                      <FaAndroid /> Android
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
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en avril 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Begin_premier_deballage
