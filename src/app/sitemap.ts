import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.CLIENT_URL}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${process.env.CLIENT_URL}/BonheurScore`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${process.env.CLIENT_URL}/code-promo`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${process.env.CLIENT_URL}/apprendre-gyroroue`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.CLIENT_URL}/choisir-gyroroue`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.CLIENT_URL}/debuter-gyroroue`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.CLIENT_URL}/guide-utile-gyroroue`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.CLIENT_URL}/mille-merci`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${process.env.CLIENT_URL}/mentions`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${process.env.CLIENT_URL}/plan-du-site`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}
