'use client'

//import Link from 'next/link'

export default function Page() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8 flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-2xl font-bold text-gray-900">
        Formulaire de participation
      </h1>
      {/*<Link
        href="https://forms.gle/SKgYRJdYo1Tr8mje8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        Ouvrir le formulaire Google Forms
      </Link>*/}
      {/* Conteneur de l'iframe */}
      <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-white h-[600px] sm:h-[800px]">
        <iframe
          // Note : Remplacez cette URL par votre lien d'intégration réel si le lien raccourci bloque
          src="https://forms.gle/SKgYRJdYo1Tr8mje8"
          className="w-full h-full border-0"
          title="Google Form"
          loading="lazy"
        >
          Chargement du formulaire...
        </iframe>
      </div>
    </div>
  )
}
