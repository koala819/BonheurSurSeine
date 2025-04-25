import Image from 'next/image'
import Link from 'next/link'

import Discord from '@/public/Discord.png'
import Patreon from '@/public/Patreon.svg'
import Tipeee from '@/public/Tipeee.svg'

const Quote = () => {
  return (
    <div className="bg-white dark:bg-cyan-800 p-6 rounded-lg shadow-md text-center max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl">
      <p className="text-center md:text-lg lg:text-xl font-medium leading-relaxed">
        Pour soutenir mon travail, accéder à des contenus supplémentaires
        et chatter en privé, rejoins-moi sur
      </p>

      <div className="flex flex-row justify-center items-center gap-4 mt-4">
        <Link
          href="https://fr.tipeee.com/bonheur-sur-seine"
          target="_blank"
          className="text-rose-500 hover:text-rose-400 flex items-center justify-center rounded-2xl p-2 transition-transform transform hover:scale-110"
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
          className="flex p-2 transition-transform transform hover:scale-110"
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

      <div className="flex flex-wrap items-center justify-center mt-6 gap-3">
        <p className="text-sm md:text-base font-medium">
          Tu peux aussi rejoindre la communauté sur le serveur Discord
        </p>
        <Link
          href="https://discord.com/invite/Jhgw7C96Jf"
          target="_blank"
          className="w-12 h-12 md:w-16 md:h-16 transition-transform transform hover:scale-110 flex items-center"
        >
          <Image
            alt="Discord logo"
            src={Discord}
            width={48}
            height={48}
            className="rounded-full opacity-80 hover:opacity-100"
          />
        </Link>
      </div>
    </div>
  )
}

export default Quote
