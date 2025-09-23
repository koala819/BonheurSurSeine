'use client'

import Image from 'next/image'
import Link from 'next/link'

import Discord from '@/public/Discord.png'
import HeroPhoto from '@/public/contact.jpg'

const Choice = () => {
  return (
    <section className="px-4">
      {/* Titre */}
      <h1 className="">Choisir sa roue</h1>
      {/* Image avec citation */}

      {/* Contenu en 2 colonnes */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-2 items-start">
        {/* Colonne de gauche */}
        <div className="space-y-2 text-justify text-gray-800 dark:text-gray-200 leading-relaxed">
          <p className="">
            Avec la diversité des fabricants et des modèles, il est normal
            d&apos;hésiter avant de se décider. D&apos;expérience, chaque modèle
            excelle pour un usage précis, avec ses forces, ses qualités et ses
            faiblesses.
          </p>
          <p className="">
            <strong className="text-blue-800 dark:text-blue-300">
              L&apos;important, c&apos;est d&apos;avoir une roue adaptée à son
              utilisation
            </strong>
            .
          </p>
          <p className="">
            Le choix se fait en fonction de ses goûts, de son{' '}
            <strong>usage</strong>, de sa sensibilité, de sa situation, de son
            style de conduite, et d&apos;autres{' '}
            <strong>critères personnels.</strong>
          </p>
          <div>
            <div className="blueBlock p-6 rounded-2xl shadow text-center space-y-1">
              <p>
                ➡️ J&apos;invite chacun, quand il le peut, à{' '}
                <strong className="text-blue-800 dark:text-blue-300">
                  tester les roues pour se faire son propre avis
                </strong>
                .
              </p>
              <p>
                ⚠️ Pour t&apos;aider, tu trouveras ci-dessous{' '}
                <Link
                  href="/choisir-gyroroue#8questions"
                  className="link-style font-bold text-blue-800 dark:text-blue-300"
                >
                  8 questions <i>essentielles</i>
                </Link>{' '}
                à te poser pour faire ton choix.
              </p>
            </div>
          </div>
        </div>

        {/* Colonne de droite */}
        <div className="relative max-w-4xl mx-auto order-first md:order-last">
          <Image
            src={HeroPhoto}
            alt="Personne avec une roue"
            width={900}
            height={500}
            className="w-full max-w-lg mx-auto rounded-2xl object-cover object-center shadow-lg"
            priority
            placeholder="blur"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-cyan-800/80 text-white px-2 py-2 rounded-xl shadow-md max-w-lg text-center min-w-60 text-xs sm:text-sm font-bold">
            📢 «&nbsp;La meilleure roue, c&apos;est <br />
            celle qu&apos;on a sous les pieds&nbsp;!&nbsp;»
          </div>
        </div>
      </div>
      {/* Invitation Discord */}
      <div className="mt-4 text-center ">
        <Link
          href="https://discord.com/invite/Jhgw7C96Jf"
          target="_blank"
          className="inline-flex items-center gap-3 bg-blue-800 hover:bg-yellow-600 text-white font-semibold py-1 px-6 rounded-lg shadow-md transition"
        >
          <Image
            src={Discord}
            alt="Discord Logo"
            width={70}
            height={70}
            className="rounded-lg cursor-pointer transition-transform transform hover:scale-140"
          />
          Tu as besoin d&apos;échanger&nbsp;? Rejoins le salon Discord pour
          profiter de l&apos;expérience des autres.
        </Link>
      </div>
    </section>
  )
}

export default Choice
