import Link from 'next/link'

import RexEUC from '@/src/components/gameEUCBSS/gameEUC'

// Ajuste le chemin si nécessaire

export default function GamePage() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="h-screen bg-gray-700 rounded-lg">
        <div className="text-white text-center mt-4">
          <br />
          <h4>😁Bonheur sur Seine versus Wild😁</h4>
        </div>
        <p className="text-yellow-400 text-xs text-center mb-4">
          <span className="text-large"> Bravo&nbsp;! </span>
          <br />
          🎁<i>Tu as trouvé le petit contenu bonus de mon site&nbsp;!</i> 🎁
        </p>
        <RexEUC />
        <p className="mt-8 text-white text-center mb-8">
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
        <div className="blueBlock text-small mt-4 italic">
          🔸 « L&apos;abus de ce jeu n&apos;est pas dangereux pour la santé, à
          consommer sans modération ». <br />
          🔸 « La roue électrique comporte des risques : pertes d&apos;argent,
          dépendance, addiction, conflits familiaux… Retrouvez tous mes conseils
          sur bonheursurseine.com ». <br />
          🔸 « Pour se protéger et protéger les autres, appliquons les gestes
          barrières : casque, gants, et vitesse maitrisée ».
        </div>
      </div>
    </section>
  )
}
