/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.CLIENT_URL || 'https://www.bonheursurseine.com', // remplace si besoin
  generateRobotsTxt: true,
  sitemapSize: 5000, // par défaut
  changefreq: 'weekly',
  priority: 0.7,
}
