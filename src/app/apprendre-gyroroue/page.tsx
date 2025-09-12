import type { Metadata } from 'next'
import Link from 'next/link'

import Cestquoi from '@/src/components/atoms/Découvrir_0Cestquoi'
import Apprendre from '@/src/components/atoms/Découvrir_1Apprendre'

export const metadata: Metadata = {
  title:
    'Conseils pour bien apprendre la gyroroue / monoroue / roue électrique',
  description:
    'Apprendre facilement la gyroroue : conseils, initiation, sécurité, assurance, code de la route, et plus encore. Débuter en toute confiance.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/debuter-apprendre-gyroroue`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <h1>Apprendre</h1>
      <div className="space-y-2">
        <div className="mt-0 mb-4 flex flex-col md:flex-row items-center gap-x-2 gap-y-0">
          <aside className="md:w-1/2 mt-0 mb-0">
            <p className="mt-0 mb-0">
              Bravo&nbsp;! Tu viens d&apos;acheter une gyroroue ou tu envisages
              d&apos;apprendre&nbsp;? Tu es motivé&nbsp;? <br />
              Cette page t&apos;est entièrement dédiée.
              <br />
            </p>
          </aside>
          <aside className="md:w-1/2 blueBlock mt-0 mb-0">
            <h4 className="text-center mt-0 mb-0">
              ❤️ &laquo;&nbsp;C&apos;est parti&nbsp;!&nbsp;&raquo;
            </h4>
          </aside>
        </div>

        <div className="pinkBlock_Formation font-medium">
          <h4 className="text-justify mt-0 mb-3 text-base md:text-lg">
            Si tu veux apprendre la roue électrique mais que tu as peur de te
            lancer, sache que je propose des{' '}
            <strong className="text-rose-800 dark:text-white">
              sessions de formation
            </strong>{' '}
            théorique <u>et</u> pratique pour t&apos;accompagner et
            dédramatiser.&nbsp;😊
            <br />
            En seulement 1h🕐, tu auras un autre regard sur
            l&apos;objet.&nbsp;😎
          </h4>
          <h4 className="mt-0 mb-0">
            ➡️ Pour <strong>prendre rendez-vous</strong>&nbsp;:{' '}
            <Link
              href={'mailto:bonheursurseine@gmail.com'}
              className="underline text-rose-800 dark:text-black"
            >
              bonheursurseine@gmail.com
            </Link>
          </h4>
        </div>
      </div>
      <Cestquoi />
      <Apprendre />
      <div className="yellowBlock">
        <h3>
          🥰 Et si tu croises un autre passionné,{' '}
          <strong>n&apos;oublie pas de le saluer&nbsp;!</strong>
        </h3>
      </div>
    </div>
  )
}

export default Page
