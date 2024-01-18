import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${process.env.CLIENT_URL}/sitemap.xml`,
    // sitemap: 'https://acme.com/sitemap.xml',
  }
}
