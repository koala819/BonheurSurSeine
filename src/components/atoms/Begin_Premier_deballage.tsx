'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { FaAndroid, FaApple } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

import logo_app_begode from '@/public/logo_app_begode.webp'
import logo_app_darknessbot from '@/public/logo_app_darknessbot.webp'
import logo_app_eucworld from '@/public/logo_app_eucworld.webp'
import logo_app_inmotion from '@/public/logo_app_inmotion.webp'
import logo_app_kingsong from '@/public/logo_app_kingsong.webp'
import logo_app_leaperkim from '@/public/logo_app_leaperkim.webp'
import logo_app_wheelLog from '@/public/logo_app_wheelLog.webp'

const Begin_premier_deballage = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Premier déballage"
          title={<h3>📦 Premier déballage</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
          //indicator={<strong className="chevronAccordionItem">&lt;</strong>}
          //</Accordion>indicator={<strong className="chevronAccordionItem">◀</strong>}
        >
          <p className="mb-4">
            Lorsque que tu ouvres le carton, il est normal que la roue ne
            s&apos;équilibre pas lorsque tu l&apos;allumes. <br />
            La roue est en <strong>mode transport</strong>.
          </p>
          <div className="blueBlock mb-8">
            <h4 className="mt-0 mb-1">
              🚚 Le &laquo;&nbsp;mode transport&nbsp;&raquo; c&apos;est
              quoi&nbsp;?
            </h4>
            🔒 Lors de leur mise en carton en usine, les roues sont verrouillées
            dans ce mode afin d&apos;éviter qu&apos;elles ne s&apos;allument de
            manière inopinée durant le transport, ce qui pourrait causer de
            sérieux dégâts.
            <br />
            Le mode transport est réversible.
          </div>
          <h4 className="mt-4 mb-1">
            ➡️ Pour sortir la roue du mode transport, les étapes varient en
            fonction du fabricant&nbsp;:
          </h4>
          <ul className="compactlist mt-0 mb-6 leading-tight">
            <li>
              Généralement, le plus simple est de brancher le chargeur et de le
              connecter à la roue.
            </li>
            <li>
              Chez Begode, la manipulation est{' '}
              <Link
                href="https://www.youtube.com/watch?v=8HJws4b_Dtw"
                target="_blank"
                className="link-style"
              >
                parfaitement décrite dans cette vidéo
              </Link>
              .
            </li>
            <li>
              Chez Inmotion, Kingsong ou Leaperkim&nbsp;: l&apos;application
              mobile permet de désactiver/activer le mode transport.
            </li>
          </ul>
          <div className="blueBlock mb-8">
            <h4 className="mt-0 mb-0">🎁 À la réception du carton :</h4>
            <ul className="compactlist">
              <li>
                Vérifie l&apos;aspect général du carton (refuse la livraison si
                le carton est endommagé ou des traces
                d&apos;eau/d&apos;humidité).
              </li>
              <li>
                Vérifie que le carton comprend la notice, le chargeur et son
                câble électrique.
              </li>
              <li>Vérifie le pneu et gonfle le suffisamment.</li>
              <li>Vérifie la suspension.</li>
            </ul>
          </div>
          <h4 className="mt-4 mb-1">➡️ Les applications mobiles&nbsp;:</h4>
          <p>
            La plupart des roues électriques sont prévues pour être connectées
            et configurées grâce à un smartphone connecté en Bluetooth.
            <br />
            Voici la liste des principales applications&nbsp;:
          </p>
          <p className="text-gray-500 dark:text-gray-300 mt-0 text-right">
            <i>
              Aucun favoritisme de ma part, les marques sont citées par ordre
              alphabétique.
            </i>
            😉
          </p>
          <p className="mt-3">
            <strong>Applications Constructeurs</strong>
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
              <tbody>
                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="px-4 py-2 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_begode}
                      alt="logo_app_begode"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>Begode</strong>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://apps.apple.com/us/app/begode/id1549181193"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-2"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
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
                  <td className="px-4 py-2 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_inmotion}
                      alt="logo_app_inmotion"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>Inmotion</strong>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://apps.apple.com/us/app/inmotion-life-in-motion/id1452771445"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-2"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
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
                  <td className="px-4 py-2 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_kingsong}
                      alt="logo_app_Kingsong"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>Kingsong</strong>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://apps.apple.com/us/app/king-song/id1497491652"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-2"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
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
                  <td className="px-4 py-2 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_leaperkim}
                      alt="logo_app_leaperkim"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>LeaperKim</strong>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://apps.apple.com/us/app/leaperkim/id6466134098"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-2"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
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
              </tbody>
            </table>

            <p className="mt-3">
              <strong>Applications Universelles</strong>
            </p>
            <table className="min-w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
              <tbody>
                <tr className="bg-gray-100 dark:bg-gray-900">
                  <td className="px-4 py-2 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_darknessbot}
                      alt="logo_app_darknessbot"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>DarknessBot</strong>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    <a
                      href="https://apps.apple.com/fr/app/darknessbot/id1108403878"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline gap-2"
                    >
                      <FaApple /> iOS
                    </a>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
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
                  <td className="px-4 py-2 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_eucworld}
                      alt="logo_app_eucworld"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>EUC World</strong>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    <a
                      rel="noopener noreferrer"
                      className="flex items-center  gap-2"
                    >
                      <FaApple /> indisponible
                    </a>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
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
                  <td className="px-4 py-2 flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                    <Image
                      src={logo_app_wheelLog}
                      alt="logo_app_wheelLog"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    <strong>WheelLog</strong>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    <a
                      rel="noopener noreferrer"
                      className="flex items-center  gap-2"
                    >
                      <FaApple /> indisponible
                    </a>
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
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
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en avril 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Begin_premier_deballage
