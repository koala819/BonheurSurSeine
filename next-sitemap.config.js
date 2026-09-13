/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.CLIENT_URL || 'https://www.bonheursurseine.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7, // priorité par défaut pour toutes les pages non spécifiées
  transform: async (config, url) => {
    let priority = 0.9 // valeur par défaut

    // Page d'accueil
    if (url === '/') {
      priority = 1.0
    }
    // Pages /mentions et /mille-merci
    else if (url === '/mentions' || url === '/mille-merci') {
      priority = 0.5
    }

    return {
      loc: url,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
