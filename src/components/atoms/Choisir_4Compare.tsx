'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import whitelogo from '@/public/EUCFinder/EUCFinder_Logo_Claro-ok.jpg'
import blackLogo from '@/public/EUCFinder/EUCFinder_Logo_Oscuro-ok.jpg'
import EUCFinder from '@/public/EUCFinder/EUCFinder_aperçu.png'

const Compare = () => {
  const { theme } = useTheme()
  const logo = theme === 'dark' ? blackLogo : whitelogo

  return (
    <section
      id="comparer"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700  shadow-md rounded-lg p-6 mb-6"
    >
      <h2>Comparer</h2>

      <div className="md:ml-6 blueBlock">
        <h3 className="mb-4">
          📢 &laquo;&nbsp;Choisir, c&apos;est aussi renoncer…&nbsp;&raquo;
        </h3>
        Pour faire un choix éclairé, il faut peser les avantages et les
        inconvénients, et tenir compte de ses contraintes.
      </div>
      <div className="pt-8">
        <h4>➡️ Pas si simple</h4>
        <ul className="list-disc pl-12 space-y-2">
          <li className="text-justify">
            Bien que très petit, le marché propose énormément de modèles.
            Certaines marques{' '}
            <strong className="text-brown-500">
              enchaînent les &quot;nouveautés&quot;
            </strong>{' '}
            et renouvellent constamment leur gamme.
          </li>
          <li className="text-justify">
            Les fabricants et les magasins affichent parfois des spécifications
            différentes (valeurs, formats ou unités de mesure).
          </li>
          <li className="text-justify">
            Les chiffres sont parfois trompeurs, et{' '}
            <strong className="text-brown-500">
              les autonomies annoncées sont toujours surévaluées
            </strong>{' '}
            (il faut parfois diviser par 2). <i>Rappel</i> : l&apos;autonomie
            est tributaire de nombreux paramètres (poids du wheeler, vitesse,
            température, profil et nature du trajet…).
          </li>
          <li className="text-justify">
            Certains modèles changent légèrement avec le temps (esthétique ou
            technique) selon le lot de production (on appelle ça les
            <span className="italic ml-1">batchs</span>).
          </li>
        </ul>
      </div>

      <div className="pt-8">
        <h4>
          ➡️ Mes reviews et le{' '}
          <span className="text-xl sm:text-xl md:text-xl text-fuchsia-700 dark:text-fuchsia-400">
            BonheurScore
          </span>
        </h4>
        <ul className="list-disc pl-12 space-y-2">
          <li className="text-justify">
            La{' '}
            <strong>
              <span className="text-fuchsia-700 dark:text-fuchsia-400">
                notation{' '}
                <Link
                  href="/BonheurScore"
                  className="underline hover:text-blue-500"
                >
                  BonheurScore
                </Link>
              </span>
            </strong>{' '}
            permet de savoir en synthèse{' '}
            <strong>
              <span className="text-fuchsia-700 dark:text-fuchsia-400">
                ce que j&apos;ai pensé
              </span>
            </strong>{' '}
            de chaque roue testée.
          </li>
          <li className="text-justify">
            Dans{' '}
            <strong>
              <span className="text-fuchsia-700 dark:text-fuchsia-400">
                <Link
                  href="https://www.youtube.com/@BonheursurSeine"
                  className="underline hover:text-blue-500"
                  target="_blank"
                >
                  toutes mes vidéos
                </Link>
              </span>
            </strong>
            , je donne librement mon avis, et j&apos;identifie au mieux{' '}
            <strong>
              <span className="text-fuchsia-700 dark:text-fuchsia-400">
                les usages
              </span>
            </strong>{' '}
            pour lesquels la roue excelle.
          </li>
        </ul>
      </div>

      <div className="pt-8">
        <h4>➡️ EUC Finder</h4>
        <div className="flex flex-col lg:flex-row">
          <aside className="lg:w-1/5 flex items-center justify-center">
            <Link
              href={'https://www.eucfinder.com/fr'}
              passHref
              target="_blank"
            >
              <Image
                src={logo}
                alt="Eeucfinder Logo"
                width={100}
                height={500}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          </aside>
          <aside className="lg:w-4/5 pt-8 lg:pt-0 lg:pl-8">
            <ul className="list-disc pl-12 space-y-2">
              <li className="text-justify">
                Ce <strong>projet</strong> mené par{' '}
                <Link
                  href="https://www.instagram.com/rafa.pgarcia"
                  className="underline hover:text-blue-500"
                  target="_blank"
                >
                  @rafa.pgarcia
                </Link>{' '}
                (et auquel{' '}
                <Link
                  href="https://linktr.ee/fabien.wheel"
                  className="underline hover:text-blue-500"
                  target="_blank"
                >
                  @Fabien.Wheel
                </Link>{' '}
                et moi participons) permet de consulter l&apos;ensemble des
                modèles du marché dans un format standardisé.
              </li>
              <li className="text-justify">
                C&apos;est actuellement <strong>le meilleur outil</strong> pour
                faire des comparaisons. ⇒{' '}
                <Link
                  href="https://finder.eucfinder.com/fr"
                  className="underline hover:text-blue-500"
                  target="_blank"
                >
                  Accès direct au comparateur
                </Link>
              </li>
            </ul>
          </aside>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="https://www.eucfinder.com/fr" passHref target="_blank">
            <Image
              src={EUCFinder}
              alt="EUCFinder"
              width={500}
              height={500}
              className="rounded-lg cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
        article mis à jour en février 2025
      </p>
    </section>
  )
}

export default Compare
