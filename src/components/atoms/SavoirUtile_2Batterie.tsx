'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

import Image from 'next/image'
import Link from 'next/link'

import Graphique_diminution from '@/public/BSS-Batterie_et_diminution_v20250419.png'
import Tableaux_tensions from '@/public/BSS-Batterie_et_tension_v20250419.png'

const Practical_Battery = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Pourcentage batterie"
          title={<h3> ⚡ Le pourcentage batterie</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          <p className="mb-2">
            Pour rouler en sécurité et arriver à destination, il est{' '}
            <strong>essentiel d&apos;avoir suffisamment d&apos;énergie</strong>{' '}
            dans la batterie.
            <br />
            Si le moteur demande plus d&apos;énergie que ne peut en fournir la
            batterie, la roue sera sans énergie et s&apos;arrêtera de
            fonctionner&nbsp;! <br /> Il est donc <strong>vitale</strong> de
            veiller à ce que <strong>la batterie</strong>,{' '}
            <strong>à tout moment</strong>, ait suffisamment d&apos;énergie{' '}
            <strong>pour répondre à la demande du moteur</strong>.
          </p>
          <div className="pinkBlock mb-4">
            <h3>
              ⚠️ On ne sollicite pas sa roue de la même manière (accélération,
              vitesse) à 100% de batterie, qu&apos;à 50%, ou qu&apos;à 20% de
              batterie...
            </h3>
          </div>
          <h4 className="mt-6">➡️ En quelques mots&nbsp;:</h4>
          <div className="mb-8 flex flex-col md:flex-row items-center">
            <aside className="md:w-3/5 space-y-4 mr-4">
              <p>
                🔋 100% correspond à la tension maximale. <br />
                🪫 0% correspond à la tension minimum. <br />
                🤔 Entre les 2&nbsp;? <br />
                C&apos;est selon les choix du fabricant qui décide de la manière
                dont le % évolue, ainsi que des tensions maximum et minimum
                (pour avoir une <strong>marge de sécurité</strong> et ne pas
                abimer les cellules de la batteries). <br />
                <br />
                La diminution peut prendre une forme&nbsp;:
                <br />
                <span className="  mt-0 mb-0">
                  &bull; Linéaire (le % diminue de manière régulière, en même
                  temps que la tension).
                  <br />
                  &bull; Convexe (le % diminue doucement au début, puis
                  rapidement sur la fin de batterie).
                  <br />
                  &bull; Concave (le % diminue rapidement au début, puis
                  doucement sur la fin de batterie).
                </span>
                <br />
              </p>
            </aside>
            <aside className="md:w-2/5 text-center text-xs">
              <Link href={Graphique_diminution.src} passHref target="_blank">
                <Image
                  src={Graphique_diminution}
                  alt="Graphique_diminution"
                  width={632}
                  height={472}
                  className="rounded-lg cursor-pointer"
                />
              </Link>
              Le graphique ci-dessus illustre ce phénomène
              <br />
              <i> (volontairement exagéré)</i>.
            </aside>
          </div>
          <div className="blueBlock mb-2">
            <h4 className="mt-0 mb-0"> Ce qu&apos;il faut savoir&nbsp;:</h4>
            🔸 La batterie a une tension max (ex.&nbsp;: 84.0v, 100.8v, 126v,
            151.2v…) et une tension min de fonctionnement. <br />
            🔸 Le BMS (Battery Management System) mesure en temps réel la
            tension qui diminuera au fur et à mesure de l&apos;utilisation.
            <br />
            🔸 C&apos;est un calcul qui convertit cette tension instantanée en
            un pourcentage approximatif (de 100% à 0%). <br />
          </div>
          <h4 className="mt-6">➡️ Tension minimale</h4>
          <p>
            Beaucoup de wheelers préfèrent donc{' '}
            <strong>surveiller directement la tension</strong> de la batterie
            pour connaitre son état, et{' '}
            <strong>décider dans quelle mesure solliciter la roue</strong>.{' '}
            <br />
            Voici quelques chiffres utiles :
          </p>
          <div className="mt-2 flex justify-center">
            <Link href={Tableaux_tensions.src} passHref target="_blank">
              <Image
                src={Tableaux_tensions}
                alt="Tableaux des tensions"
                width={768}
                height={432}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          </div>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en avril 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Battery
