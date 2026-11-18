'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import EUC1_fonctionnement from '@/public/4.guide/BSS_infographie1.png'
import EUC2_coupure from '@/public/4.guide/BSS_infographie2.png'

export default function InfographiesSection() {
  const [tooltip1, setTooltip1] = useState({ visible: false, x: 0, y: 0 })
  const [tooltip2, setTooltip2] = useState({ visible: false, x: 0, y: 0 })

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    setTooltip: React.Dispatch<
      React.SetStateAction<{ visible: boolean; x: number; y: number }>
    >,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Si on approche du bord droit (à moins de 200px du bord), on décale l'infobulle vers la gauche
    const offsetX = x > rect.width - 220 ? -210 : 15

    setTooltip({
      visible: true,
      x: x + offsetX,
      y: y + 15,
    })
  }

  return (
    <div className="scroll-mt-24" id="infocles">
      {/* Infographie 1 : fonctionnement */}
      <div
        onMouseMove={(e) => handleMouseMove(e, setTooltip1)}
        onMouseLeave={() => setTooltip1({ visible: false, x: 0, y: 0 })}
        className="relative mt-4 justify-center overflow-hidden
          bg-white rounded-lg pt-2 pb-2
          border border-gray-200 dark:border-gray-600
          shadow-md hover:shadow-lg transition-shadow duration-300
          shadow-gray-400 hover:shadow-gray-400
          dark:shadow-neutral-900 dark:hover:shadow-neutral-950"
      >
        <Link href={EUC1_fonctionnement.src} target="_blank" className="block">
          <Image
            src={EUC1_fonctionnement}
            alt="Comment fonctionne une gyroroue : les trois chaînes fonctionnelles et leurs composants"
            className="rounded-lg cursor-pointer w-full h-auto"
          />
        </Link>

        {/* Infobulle 1 */}
        {tooltip1.visible && (
          <div
            className="absolute z-50 pointer-events-none bg-neutral-900/95 dark:bg-neutral-100/95 text-white dark:text-neutral-900 text-xs px-3 py-1.5 rounded-md shadow-xl backdrop-blur-sm whitespace-nowrap transition-all duration-75 ease-out"
            style={{ top: tooltip1.y, left: tooltip1.x }}
          >
            Un terme technique ? <br />
            <strong className="font-semibold">
              Consulte Le P&apos;tit Dico du Bonheur.
            </strong>
          </div>
        )}
      </div>

      <p className="text-xs md:text-sm italic text-gray-600 dark:text-gray-400 text-center mt-1">
        Comment fonctionne une gyroroue ?
        <br />
        Les 3 chaînes de perception, de commande et de puissance sont
        complémentaires et limitées par leur maillon le plus faible.
      </p>

      {/* Infographie 2 : limites et coupures */}
      <div
        onMouseMove={(e) => handleMouseMove(e, setTooltip2)}
        onMouseLeave={() => setTooltip2({ visible: false, x: 0, y: 0 })}
        className="relative mt-4 justify-center overflow-hidden
          bg-white rounded-lg pt-2 pb-2
          border border-gray-200 dark:border-gray-600
          shadow-md hover:shadow-lg transition-shadow duration-300
          shadow-gray-400 hover:shadow-gray-400
          dark:shadow-neutral-900 dark:hover:shadow-neutral-950"
      >
        <Link href={EUC2_coupure.src} target="_blank" className="block">
          <Image
            src={EUC2_coupure}
            alt="Quand la gyroroue atteint ses limites : défaillance technique, surconduite et marge de sécurité"
            className="rounded-lg cursor-pointer w-full h-auto"
          />
        </Link>

        {/* Infobulle 2 */}
        {tooltip2.visible && (
          <div
            className="absolute z-50 pointer-events-none bg-neutral-900/95 dark:bg-neutral-100/95 text-white dark:text-neutral-900 text-xs px-3 py-1.5 rounded-md shadow-xl backdrop-blur-sm whitespace-nowrap transition-all duration-75 ease-out"
            style={{ top: tooltip2.y, left: tooltip2.x }}
          >
            Un terme technique ? <br />
            <strong className="font-semibold">
              Consulte Le P&apos;tit Dico du Bonheur.
            </strong>
          </div>
        )}
      </div>

      <p className="text-xs md:text-sm italic text-gray-600 dark:text-gray-400 text-center mt-1">
        Quand la roue atteint ses limites…
        <br />
        Comprendre les causes des coupures, le cumul des facteurs de risque et
        l&apos;importance de conserver une marge de sécurité.
      </p>
    </div>
  )
}
