import Image from 'next/image'
import Link from 'next/link'

import Patreon from '@/public/Patreon.svg'
import Tipeee from '@/public/Tipeee.svg'

const Quote = () => {
  return (
    <div className="bg-white dark:bg-cyan-800 p-4 rounded-lg shadow-md text-center">
      Si tu veux soutenir mon travail, accéder à des contenus supplémentaires et
      chatter en privé, tu peux me rejoindre sur :
      <div className="flex justify-center gap-4">
        <div>
          <Link
            href="https://fr.tipeee.com/bonheur-sur-seine"
            target="_blank"
            className="text-rose-500 hover:text-rose-400 flex items-center justify-center rounded-2xl p-2"
          >
            <Image
              alt="Tipee logo"
              src={Tipeee}
              width={32}
              height={32}
              className="opacity-80 hover:opacity-100"
            />
          </Link>
        </div>
        <div>
          <Link
            href="https://www.patreon.com/c/BonheursurSeine"
            target="_blank"
            className=" flex p-2"
          >
            <Image
              alt="Patreon logo"
              src={Patreon}
              width={32}
              height={32}
              className="opacity-80 hover:opacity-100"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Quote
