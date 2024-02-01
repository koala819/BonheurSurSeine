import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.CLIENT_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.CLIENT_URL}/BonheurScore`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.CLIENT_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.CLIENT_URL}/mentions`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.CLIENT_URL}/promo`,
      lastModified: new Date(),
    },
  ]
}
