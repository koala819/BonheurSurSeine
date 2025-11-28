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

      <div className="blueBlock">
        <h3 className="mb-2">
          📢 &laquo;&nbsp;Choisir, c&apos;est aussi renoncer…&nbsp;&raquo;
        </h3>
        <p>
          Pour faire un choix éclairé, il faut peser les avantages et les
          inconvénients, et tenir compte de ses contraintes.
        </p>
      </div>
      {/*---------------------CONSTATS--------------------------- */}
      <div className="pt-4">
        <h4>➡️ Pas si simple</h4>
        <ul className="list-disc pl-12 space-y-1">
          <li>
            Bien que très petit, le marché propose énormément de modèles.
            Certaines marques{' '}
            <strong className="text-brown-500">
              enchaînent les &quot;nouveautés&quot;
            </strong>{' '}
            et renouvellent constamment leur gamme.
          </li>
          <li>
            Les fabricants et les magasins affichent parfois des spécifications
            différentes (valeurs, formats ou unités de mesure).
          </li>
          <li>
            Les chiffres sont parfois trompeurs, et{' '}
            <strong className="text-brown-500">
              les autonomies annoncées sont souvent surévaluées
            </strong>{' '}
            (il faut parfois diviser par 2). <i>Important</i> : l&apos;autonomie
            est fonction de nombreux paramètres (poids du wheeler,
            accélérations, vitesse, pression et type de pneu, vent, température
            ambiante, profil et nature du trajet…).
          </li>
          <li>
            Certains modèles changent légèrement avec le temps (esthétique ou
            technique) selon le lot de production (on appelle ça les
            <span className="italic ml-1">batchs</span>).
          </li>
        </ul>
      </div>
      {/*---------------------REVIEWS--------------------------- */}
      <div className="pt-4">
        <h4>
          ➡️ Mes reviews et le{' '}
          <span className="text-xl sm:text-xl md:text-xl text-fuchsia-700 dark:text-fuchsia-400">
            BonheurScore
          </span>
        </h4>
        <ul className="list-disc pl-12 space-y-1">
          <li>
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
          <li>
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
      {/*---------------------EUC FINDER--------------------------- */}
      <div className="pt-4">
        <h4>➡️ EUC Finder</h4>
        <div className="flex flex-col md:flex-row gap-6 mt-4 mb-4">
          <aside className="md:w-1/5 flex items-center justify-center">
            <Link href="https://www.eucfinder.com/fr" passHref target="_blank">
              <Image
                src={logo}
                alt="EUC Finder Logo"
                width={100}
                height={100}
                className="rounded-lg cursor-pointer"
              />
            </Link>
          </aside>

          <aside className="md:w-4/5">
            <ul className="list-disc pl-6 space-y-2 text-justify">
              <li>
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
              <li>
                C&apos;est actuellement <strong>le meilleur outil</strong> pour
                faire des comparaisons. 👉&nbsp;
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
        <div className="flex justify-center mt-4">
          <Link href="https://www.eucfinder.com/fr" passHref target="_blank">
            <Image
              src={EUCFinder}
              alt="EUCFinder Screenshot"
              width={500}
              height={500}
              className="rounded-lg cursor-pointer"
            />
          </Link>
        </div>
      </div>
      {/*--------------------------------------------------------*/}
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
        dernière mise à jour : juin 2025
      </p>
    </section>
  )
}

export default Compare
