import Link from 'next/link'

import RexEUC from '@/src/components/gameEUCBSS/gameEUC'

// Ajuste le chemin si nécessaire
export const metadata = {
  title: 'Bonheur sur Seine - Jeu caché',
  robots: {
    index: false,
    follow: false,
  },
}
export default function GamePage() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="bg-gray-700 rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-white text-center mt-4">
            Bonheur sur Seine vs. City Wild
          </h2>
          <p className="text-yellow-400 text-xs text-center mb-4">
            <span className="text-large"> 😁Bravo&nbsp;!😁 </span>
            <br />
            🎁<i>Tu as trouvé le petit contenu bonus de mon site&nbsp;!</i> 🎁
          </p>
          <p
            className="mt-4 space-y-6 rounded-lg bg-yellow-500 p-4 shadow-md transition-shadow dark:bg-yellow-800 md:ml-2 md:mr-2 md:mt-0
           font-semibold ml-8 mr-8 text-small"
          >
            Tu penses être parmi les 5 premiers à découvrir cette page&nbsp;?
            <br />
            Contacte-moi à <i>jeuxbss@gmail.com</i>.
          </p>
        </div>

        <RexEUC />

        <p className="mt-4 text-white text-center mb-4">
          ▶️&nbsp;
          <i>
            <Link
              href="https://fr.tipeee.com/bonheur-sur-seine"
              target="_blank"
              className="link-style text-small"
            >
              Ne clique pas ici
            </Link>
          </i>
          &nbsp;◀️
        </p>
        <div className="blueBlock ml-8 mr-8 text-small mt-2">
          😁 «&nbsp;
          <i>
            L&apos;abus de ce jeu n&apos;est pas dangereux pour la santé, à
            consommer sans modération
          </i>
          &nbsp;». <br />
          😁 «&nbsp;
          <i>
            La roue électrique comporte des risques&nbsp;: pertes d&apos;argent,
            addiction, conflits familiaux… Retrouvez tous mes conseils sur
            www.bonheursurseine.com
          </i>
          &nbsp;». <br />
          😁 «&nbsp;
          <i>
            Pour se protéger et protéger les autres, appliquons les gestes
            barrières&nbsp;: prudence, casque, gants, et vitesse maitrisée
          </i>
          &nbsp;».
        </div>
      </div>
    </div>
  )
}
