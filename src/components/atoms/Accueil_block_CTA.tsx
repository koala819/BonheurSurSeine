import Image from 'next/image'
import Link from 'next/link'

import Discord from '@/public/block_CTA/Discord.png'
import Patreon from '@/public/block_CTA/Patreon.svg'
import Tipeee from '@/public/block_CTA/Tipeee.svg'

const Quote = () => {
  return (
    <div className="bg-white dark:bg-cyan-900/40 border border-gray-100 dark:border-cyan-800 p-4 rounded-2xl shadow-lg text-center max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl space-y-4">
      {/* En-tête court */}
      <div>
        <h3 className="text-emerald-600 dark:text-emerald-400 text-xl font-bold">
          Merci d&apos;être là&nbsp;!
        </h3>
        <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base mt-1">
          <strong className="text-gray-900 dark:text-white">
            Bonheur sur Seine
          </strong>{' '}
          vit grâce à la passion, au partage et à l&apos;entraide. <br />
          Pour soutenir mon travail, voici comment faire&nbsp;:
        </p>
      </div>

      {/* Blocs d'action rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
        {/* Soutien financier */}
        <div className="bg-gray-50 dark:bg-gray-800/60 py-2 px-3 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between space-y-1">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
              ☕ Le Soutien Financier
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Contenus supplémentaires & chatter en privé
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Link
              href="https://fr.tipeee.com/bonheur-sur-seine"
              target="_blank"
              className="text-rose-500 hover:text-rose-400 flex items-center justify-center rounded-2xl p-2 transition-transform transform hover:scale-150"
            >
              <Image
                alt="Tipee logo"
                src={Tipeee}
                width={40}
                height={40}
                className="opacity-80 hover:opacity-100"
              />
            </Link>

            <Link
              href="https://www.patreon.com/c/BonheursurSeine"
              target="_blank"
              className="flex p-2 transition-transform transform hover:scale-150"
            >
              <Image
                alt="Patreon logo"
                src={Patreon}
                width={40}
                height={40}
                className="opacity-80 hover:opacity-100"
              />
            </Link>
          </div>
        </div>

        {/* Communauté Discord */}
        <div className="bg-gray-50 dark:bg-gray-800/60 py-2 px-3 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between space-y-1">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
              💬 La Communauté
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Partager ta passion & échanger <br />
              avec d&apos;autres wheelers
            </p>
          </div>
          <Link
            href="https://discord.com/invite/Jhgw7C96Jf"
            target="_blank"
            className="flex items-center"
          >
            <Image
              alt="Discord logo"
              src={Discord}
              width={56}
              height={56}
              className="rounded-full opacity-80 hover:opacity-100 transition-transform transform hover:scale-150 max-h-48 w-auto h-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Quote
