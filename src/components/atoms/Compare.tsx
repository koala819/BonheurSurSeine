'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import whitelogo from '@/public/Logo_Claro.svg'
import blackLogo from '@/public/Logo_Oscuro.svg'

const Compare = () => {
  const { theme } = useTheme()
  const logo = theme === 'dark' ? blackLogo : whitelogo

  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700  shadow-md rounded-lg p-6 mb-6">
      <h2>Comparer</h2>
      <div className="md:ml-6 blueBlock">
        <h3>📢 &quot;Choisir, c’est aussi renoncer…&quot;</h3>
        <p>
          Pour faire un choix éclairé, il faut peser les avantages et les
          inconvénients, et tenir compte de ses contraintes.
        </p>
      </div>
      <div className="pt-8">
        <h4>➡️ Pas si simple</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Bien que petit, le marché propose énormément de modèles. Certaines
            marques enchaînent les nouveautés et renouvellent constamment leur
            gamme.
          </li>
          <li>
            Les fabricants et les magasins affichent parfois des spécifications
            différentes (valeurs, formats ou unités de mesure).
          </li>
          <li>
            Les chiffres fabricants sont parfois trompeurs, et les autonomies
            annoncées sont toujours surévaluées (il faut parfois diviser par 2).
            Rappel : l&apos;autonomie est tributaire de nombreux paramètres
            (poids du wheeler, vitesse, température, profil et nature du
            trajet…).
          </li>
          <li>
            Certains modèles changent légèrement avec le temps (esthétique ou
            technique) selon le lot de production (on appelle cela les
            <span className="italic ml-1">batchs</span>).
          </li>
        </ul>
      </div>

      <div className="pt-8">
        <h4>➡️ Mes reviews et le BonheurScore</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            La notation{' '}
            <Link
              href="/BonheurScore"
              className="underline hover:text-blue-500"
            >
              BonheurScore
            </Link>{' '}
            permet de savoir en synthèse ce que j&apos;ai pensé de chaque roue
            que j&apos;ai testée.
          </li>
          <li>
            Dans toutes{' '}
            <Link
              href="https://www.youtube.com/@BonheursurSeine"
              className="underline hover:text-blue-500"
              target="_blank"
            >
              mes vidéos
            </Link>
            , je donne librement mon avis et j&apos;identifie au mieux les
            usages pour lesquels la roue excelle.
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
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Ce projet (auquel je participe avec{' '}
                <Link
                  href="https://www.instagram.com/rafa.pgarcia"
                  className="underline hover:text-blue-500"
                  target="_blank"
                >
                  @rafa.pgarcia
                </Link>{' '}
                et{' '}
                <Link
                  href="https://www.instagram.com/fabien.wheel"
                  className="underline hover:text-blue-500"
                  target="_blank"
                >
                  @Fabien.Wheel
                </Link>
                ) permet de consulter l&apos;ensemble des modèles dans un format
                standardisé.
              </li>
              <li>
                C&apos;est actuellement le meilleur outil pour faire des
                comparaisons. ⇒{' '}
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
      </div>
    </section>
  )
}

export default Compare
