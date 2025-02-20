import type { Metadata } from 'next'

import Dico from '@/src/components/atoms/Practical_Dico'
import Video from '@/src/components/atoms/Practical_Video'

export const metadata: Metadata = {
  title: 'Pour en savoir plus sur la roue électrique - Infos pratiques',
  description:
    'Découvrez quelques trucs et astuce pour mieux comprendre la roue électrique. Roulez en toute confiance.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/practical`,
  },
}

const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <h1>Savoir utile</h1>
      <p>
        Cette page regroupe quelques <strong>informations pratiques</strong> et{' '}
        <strong>définitions utiles</strong> concernant la roue électrique et
        leur utilisation.
      </p>

      <div className="blueBlock">
        <h3>
          💙 &laquo; Le Bonheur de rouler, c&apos;est se mettre dans les
          meilleures conditions pour pouvoir en profiter&nbsp;!&nbsp;&raquo;
        </h3>
      </div>

      <Video />
      <Dico />

      <div className="yellowBlock">
        <h3>
          ❤️ Et si tu croises un autre passionné,{' '}
          <strong>n’oublie pas de le saluer !</strong>
        </h3>
      </div>
    </div>
  )
}

export default Page
