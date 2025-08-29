import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.CLIENT_URL}/`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${process.env.CLIENT_URL}/BonheurScore`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${process.env.CLIENT_URL}/Choisir`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.CLIENT_URL}/Debuter`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.CLIENT_URL}/SavoirUtile`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.CLIENT_URL}/CodePromo`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${process.env.CLIENT_URL}/Merci`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${process.env.CLIENT_URL}/mentions`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}
