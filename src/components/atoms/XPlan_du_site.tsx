'use client'

import Link from 'next/link'

const sections = [
  {
    title: 'Accueil',
    items: [
      { label: '🏠 Présentation', href: '/' },
      {
        label: '📹 Chaîne YouTube',
        href: 'https://www.youtube.com/c/BonheursurSeine',
      },
      { label: 'ℹ️ Le projet', href: '/#projet' },
    ],
  },
  {
    title: 'BonheurScore',
    items: [
      { label: "⭐ C'est quoi le BonheurScore ?", href: '/BonheurScore' },
      {
        label: '📅 Mes Tests et mes Reviews',
        href: '/BonheurScore#liste-tests',
      },
    ],
  },
  {
    title: 'Profiter des Codes Promo',
    items: [
      { label: '🛒 Boutiques & Partenaires', href: '/codes-promo' },
      { label: '🏷️ Codes promo & Réductions', href: '/codes-promo' },
    ],
  },
  {
    title: 'Apprendre la gyroroue',
    items: [
      {
        label: '🚀 Fonctionnement',
        href: '/apprendre-gyroroue#cestquoi',
      },
      {
        label: '👉 Mes Formations',
        href: '/apprendre-gyroroue#mes_formations',
      },
      {
        label: '🎓 Tutoriel',
        href: '/apprendre-gyroroue#apprendre',
      },
      {
        label: '💡 7 conseils pour apprendre',
        href: '/apprendre-gyroroue#conseils',
      },
      {
        label: '⚠️ 7 pièges à éviter',
        href: '/apprendre-gyroroue#pièges',
      },
    ],
  },
  {
    title: 'Choisir sa gyroroue',
    items: [
      { label: '🧭 Le marché', href: '/choisir-gyroroue#marche' },
      {
        label: '🛞 Les principales marques',
        href: '/choisir-gyroroue#marques',
      },
      { label: '🆕 Infos constructeurs', href: '/choisir-gyroroue#infos' },
      {
        label: '👉 Faire son choix',
        href: '/choisir-gyroroue#besoins',
      },
      {
        label: '❓ 8 questions à se poser',
        href: '/choisir-gyroroue#8questions',
      },
      {
        label: '🎯 Quiz : découvre ton profil',
        href: '/choisir-gyroroue#quiz_profil',
      },
      { label: '🪄 Comparer les modèles', href: '/choisir-gyroroue#comparer' },
    ],
  },
  {
    title: "L'essentiel pour bien démarrer",
    items: [
      { label: '📦 Le premier déballage', href: '/debuter-gyroroue#deballage' },
      { label: '📱 Les applications', href: '/debuter-gyroroue#applis' },
      { label: '🦿 Les powerpads', href: '/debuter-gyroroue#powerpads' },
      { label: '🧠 Le bon sens du wheeler', href: '/debuter-gyroroue#bonsens' },
      { label: "🪖 Comment s'équiper ?", href: '/debuter-gyroroue#equipement' },
      { label: "🛡️ L'assurance", href: '/debuter-gyroroue#assurance' },
      { label: '🚦 Le code de la route', href: '/debuter-gyroroue#code' },
      {
        label: '🛠️ Bien entretenir sa gyroroue',
        href: '/debuter-gyroroue#entretien',
      },
      {
        label: '🌍 Les groupes & associations',
        href: '/debuter-gyroroue#asso',
      },
    ],
  },
  {
    title: 'Aller plus loin',
    items: [
      {
        label: "👁️ Comprendre sa roue en un coup d'oeil",
        href: '/guide-utile-gyroroue#infocles',
      },
      {
        label: "📖 Le p'tit Dico du Bonheur",
        href: '/guide-utile-gyroroue#dico',
      },
      {
        label: '⚡ Batterie - fonctionnement, autonomie',
        href: '/guide-utile-gyroroue#batterie',
      },
      {
        label: '🔋 Batterie - tensions min des cellules',
        href: '/guide-utile-gyroroue#cells',
      },
      {
        label: '🛞 Pneu - types de pneus',
        href: '/guide-utile-gyroroue#pneu',
      },
      {
        label: '🌀 Pneu - pression et entretien',
        href: '/guide-utile-gyroroue#pneu_pression',
      },
      {
        label: '🦿 Suspension - choix et conseils',
        href: '/guide-utile-gyroroue#suspension',
      },
      {
        label: '↕️ Suspension - réglages',
        href: '/guide-utile-gyroroue#suspension_reglages',
      },
      {
        label: '🛣️ Trouver son chemin - applis GPS & cartes',
        href: '/guide-utile-gyroroue#navi',
      },
      { label: '😉 Savoir en vrac', href: '/guide-utile-gyroroue#vrac' },
    ],
  },
  {
    title: 'Remerciements',
    items: [
      {
        label: '💬 Donner ton avis',
        href: '/mille-merci#tonavis',
      },
      {
        label: '💲 Me soutenir (Tipeee, Patreon, etc.)',
        href: 'https://fr.tipeee.com/bonheur-sur-seine',
        isExternal: true,
      },
      {
        label: '🌐 Rejoindre la communauté Discord',
        href: 'https://discord.com/invite/Jhgw7C96Jf',
        isExternal: true,
      },
      { label: '🙂 Les copains', href: '/mille-merci#copains' },
    ],
  },
  {
    title: 'Informations légales',
    items: [
      { label: '⚖️ Mentions légales', href: '/mentions' },
      {
        label: '#️⃣ Plan du site XML (Sitemap)',
        href: '/sitemap.xml',
      },
    ],
  },
]

export default function Page() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <h1 className="">Plan du site</h1>

      <header className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500 mt-1">
          Navigation & accès rapides à toutes les rubriques du site
        </p>
      </header>

      {/* 🔍 Recherche Google sur tout le site */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const q = e.currentTarget.query.value.trim()
          if (q)
            window.open(
              `https://www.google.com/search?q=site:bonheursurseine.com+${encodeURIComponent(q)}`,
              '_blank',
            )
        }}
        className="max-w-2xl mx-auto"
      >
        <input
          type="search"
          name="query"
          placeholder="🔍 Rechercher sur tout le site via Google..."
          className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-300 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
        />
      </form>

      {/* 🧭 Sections du plan du site */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2 sm:mb-5">
            <h2 className="text-2xl font-semibold mb-1 border-b pb-1 border-gray-300 dark:border-gray-700">
              {section.title}
            </h2>
            <ul className="ml-3 list-disc list-inside space-y-0.5">
              {section.items.map((it) => (
                <p key={it.label} className="text-base">
                  <Link
                    href={it.href}
                    target="_blank"
                    className="text-green-700 hover:underline dark:text-green-600"
                  >
                    {it.label}
                  </Link>
                </p>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* 🧑‍💻 À propos */}
      <section className="max-w-6xl mx-auto bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8 shadow-sm dark:bg-green-950/40 dark:border-green-800">
        <h2 className="text-2xl font-semibold mb-2">🧑‍💻 À propos</h2>
        <p className="text-sm text-justify">
          <strong>Bonheur Sur Seine</strong> est un site indépendant dédié à la
          gyroroue et à la mobilité électrique. Tu y trouveras guides, tests,
          retours d’expérience et conseils pratiques pour bien choisir,
          entretenir et rouler en toute sécurité.
        </p>
        <p className="mt-3 text-sm text-justify">
          Pour contribuer, participer et soutenir mon travail, rejoins-moi sur
          Tipeee ou Patreon. Tu peux aussi rejoindre la communauté sur le
          serveur Discord.
        </p>
      </section>
    </div>
  )
}
