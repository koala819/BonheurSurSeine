import type { Metadata } from 'next'
import Link from 'next/link'

import Cestquoi from '@/src/components/atoms/Apprendre_0Cestquoi'
import Apprendre from '@/src/components/atoms/Apprendre_1Apprendre'

export const metadata: Metadata = {
  title: 'Apprendre la gyroroue / monoroue / roue électrique - méthode simple',
  description:
    'Comment apprendre la gyroroue ? TUTORIEL pour progresser facilement : conseils, vidéo, initiation, apprentissage, erreurs à éviter, méthode simple.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/apprendre-gyroroue`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-2 sm:px-4 md:px-6 lg:px-8 space-y-8">
      <h1>Apprendre</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0 items-center">
        {/* Texte gauche */}
        <div>
          <p>
            Tu t&apos;intéresses à la gyroroue ou tu envisages
            d&apos;apprendre&nbsp;? Tu&nbsp;es motivé&nbsp;? <br />
            Bravo&nbsp;! Cette page t&apos;est entièrement dédiée.
          </p>
        </div>
        {/* Bloc bleu à droite */}
        <div className="blueBlock mt-0 mb-0">
          <h4 className="text-center mt-0 mb-0">
            ❤️ &laquo;&nbsp;Et c&apos;est parti&nbsp;!&nbsp;&raquo;
          </h4>
        </div>
      </div>

      <Cestquoi />

      <div className="pinkBlock_Formation scroll-mt-72" id="mes_formations">
        <p className="font-semibold mt-0 mb-3 text-base md:text-lg">
          Si tu veux apprendre la roue électrique mais que tu as peur de te
          lancer, je propose des{' '}
          <strong className="text-rose-800 dark:text-white">
            sessions de formation et d&apos;initiation
          </strong>{' '}
          <u>théorique et pratique</u>
          &nbsp;pour t&apos;accompagner et dédramatiser.&nbsp;😊
          <br />
          En seulement 1h🕐, tu auras un autre regard sur
          l&apos;objet.&nbsp;😎👍
        </p>
        <h4 className="mt-0 mb-0">
          ➡️ <strong>Demande un rendez-vous</strong>&nbsp;:{' '}
          <Link
            href={'mailto:bonheursurseine@gmail.com'}
            className="underline font-bold text-rose-800 dark:text-white"
          >
            bonheursurseine@gmail.com
          </Link>
        </h4>
      </div>

      <Apprendre />
      <div className="blueBlock">
        <h3>
          🥰 Et si tu croises un autre passionné,{' '}
          <strong>n&apos;oublie pas de le saluer&nbsp;!</strong>
        </h3>
      </div>
    </div>
  )
}

export default Page
