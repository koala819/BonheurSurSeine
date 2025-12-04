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
      { label: '📢 À propos du BonheurScore', href: '/BonheurScore' },
      {
        label: '📅 Mes Tests et mes Reviews',
        href: '/BonheurScore#liste-tests',
      },
    ],
  },
  {
    title: 'Codes Promo',
    items: [
      { label: '🛒 Mes Partenaires', href: '/codes-promo' },
      { label: '💶 Offres Exclusives', href: '/codes-promo' },
    ],
  },
  {
    title: 'Apprendre la gyroroue',
    items: [
      {
        label: '🚀 Comment fonctionne une gyroroue',
        href: '/apprendre-gyroroue#cestquoi',
      },
      { label: '🎓 Mes Formations', href: '/apprendre-gyroroue#apprendre' },
      {
        label: '💡 Apprendre facilement',
        href: '/apprendre-gyroroue#apprendre',
      },
      {
        label: '⚠️ 6 pièges à éviter',
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
      {
        label: '🎯 8 questions essentielles à se poser',
        href: '/choisir-gyroroue#besoins',
      },
      { label: '🪄 Comparer les modèles', href: '/choisir-gyroroue#comparer' },
    ],
  },
  {
    title: 'Bien Démarrer',
    items: [
      { label: '📦 Le premier déballage', href: '/debuter-gyroroue#deballage' },
      { label: '😊 Le bon sens', href: '/debuter-gyroroue#bonsens' },
      { label: "🛡️ L'assurance", href: '/debuter-gyroroue#assurance' },
      { label: '🚦 Le code de la route', href: '/debuter-gyroroue#code' },
      {
        label: '🌍 Les groupes & associations',
        href: '/debuter-gyroroue#asso',
      },
    ],
  },
  {
    title: 'Savoir Utile',
    items: [
      {
        label: "📖 Le p'tit Dico du Bonheur",
        href: '/guide-utile-gyroroue#dico',
      },
      {
        label: '🛠️ Entretenir sa gyroroue',
        href: '/guide-utile-gyroroue#entretien',
      },
      {
        label: '⚡ Batterie et autonomie',
        href: '/guide-utile-gyroroue#batterie',
      },
      { label: '🛣️ Trouver son chemin', href: '/guide-utile-gyroroue#navi' },
      { label: '😉 Savoir en vrac', href: '/guide-utile-gyroroue#vrac' },
      { label: '🆕 Infos constructeurs', href: '/guide-utile-gyroroue#infos' },
    ],
  },
  {
    title: 'Remerciements',
    items: [
      {
        label: '💲 Me soutenir (Tipeee, Patreon, etc.)',
        href: 'https://fr.tipeee.com/bonheur-sur-seine',
      },
      {
        label: '💬 Rejoindre la communauté Discord',
        href: 'https://discord.com/invite/Jhgw7C96Jf',
      },
      { label: '🙂 Les copains', href: '/mille-merci#copains' },
    ],
  },
  {
    title: 'Informations légales',
    items: [
      { label: '⚖️ Mentions légales', href: '/mentions' },
      { label: '#️⃣ Sitemap XML (pour moteurs)', href: '/sitemap.xml' },
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
          className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-300"
        />
      </form>

      {/* 🧭 Sections du plan du site */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <ul className="list-disc list-inside space-y-1">
              {section.items.map((it) => (
                <p key={it.label}>
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
      <section className="max-w-6xl mx-auto bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8 shadow-sm dark:bg-green-950 dark:border-green-800 ">
        <h2 className="text-2xl font-semibold mb-2">🧑‍💻 À propos</h2>
        <p className="text-sm text-justify leading-relaxed">
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
