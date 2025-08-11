import type { Metadata } from 'next'
import Link from 'next/link'

/*import Apprendre from '@/src/components/atoms/Débuter_0Apprendre'*/
import Premier_deballage from '@/src/components/atoms/Débuter_1Premier_deballage'
import CommonSense from '@/src/components/atoms/Débuter_2Bonsens'
import Assurance from '@/src/components/atoms/Débuter_3Assurance'
import HighwayCode from '@/src/components/atoms/Débuter_4HighwayCode'
import Associations from '@/src/components/atoms/Débuter_5Associations'

export const metadata: Metadata = {
  title:
    'Bonheur Sur Seine - Conseils pour bien démarrer en gyroroue, monoroue, roue électrique',
  description:
    'Apprendre la gyroroue : conseils, initiation, sécurité, assurance, code de la route, et plus encore. Débuter en toute confiance.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/Debuter`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <h1>Bien démarrer</h1>
      <div className="space-y-2">
        <div className="mt-0 mb-4 flex flex-col md:flex-row items-center gap-x-2 gap-y-0">
          <aside className="md:w-1/2 mt-0 mb-0">
            <p className="text-justify mt-0 mb-0">
              Tu viens d&apos;acheter une gyroroue ou tu envisages
              d&apos;apprendre&nbsp;? Cette page t&apos;est dédiée.
              <br />
              Elle regroupe les <strong>bases indispensables</strong> et{' '}
              <strong>rappels essentiels</strong> pour bien débuter en roue
              électrique, et t&apos;offrir{' '}
              <strong>tout ce qu&apos;il faut savoir</strong> pour commencer la
              gyroroue sereinement <strong>en France</strong>.
            </p>
          </aside>
          <aside className="md:w-1/2 blueBlock mt-0 mb-0">
            <h4 className="mt-0 mb-0">
              💙 &laquo; Le Bonheur de rouler, c&apos;est se mettre dans les
              meilleures conditions pour pouvoir en profiter&nbsp;!&nbsp;&raquo;
            </h4>
          </aside>
        </div>

        <div className="pinkBlock_Formation font-medium">
          <h4 className="text-justify mt-0 mb-3 text-lg">
            Si tu veux apprendre la roue électrique mais que tu as peur de te
            lancer, sache que je propose des{' '}
            <strong>sessions de formation</strong> théorique <u>et</u> pratique
            pour t&apos;accompagner et dédramatiser.&nbsp;😊
            <br />
            En seulement 1h🕐, tu auras un autre regard sur
            l&apos;objet.&nbsp;😎
          </h4>
          <h4 className="mt-0 mb-0">
            ➡️ Pour <strong>prendre rendez-vous</strong> :{' '}
            <Link
              href={'mailto:bonheursurseine@gmail.com'}
              className="underline text-rose-800 dark:text-black"
            >
              bonheursurseine@gmail.com{' '}
            </Link>
          </h4>
        </div>
      </div>
      {/*<Apprendre />*/}
      <Premier_deballage />
      <CommonSense />
      <Assurance />
      <HighwayCode />
      <Associations />
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
