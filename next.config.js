/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    MAIL_FROM: process.env.MAIL_FROM,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_PWD: process.env.MAIL_PWD,
    MAIL_USER: process.env.MAIL_USER,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh6.googleusercontent.com' },
      { protocol: 'https', hostname: 'images.prismic.io' },
      { protocol: 'https', hostname: 'bonheursurseine.cdn.prismic.io' },
      { protocol: 'https', hostname: 's2.wklcdn.com' },
      { protocol: 'https', hostname: 's0.wklcdn.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,

  async redirects() {
    return [
      // --- Anciennes URLs obsolètes ---
      {
        source: '/promo',
        destination: '/codes-promo',
        permanent: true,
      },
      {
        source: '/CodePromo',
        destination: '/codes-promo',
        permanent: true,
      },
      {
        source: '/codes-promo_1',
        destination: '/codes-promo',
        permanent: true,
      },
      {
        source: '/choix',
        destination: '/choisir-gyroroue',
        permanent: true,
      },
      {
        source: '/Choisir',
        destination: '/choisir-gyroroue',
        permanent: true,
      },
      {
        source: '/begin',
        destination: '/debuter-gyroroue',
        permanent: true,
      },
      {
        source: '/Debuter',
        destination: '/debuter-gyroroue',
        permanent: true,
      },
      {
        source: '/Savoir_Utile',
        destination: '/guide-utile-gyroroue',
        permanent: true,
      },
      {
        source: '/SavoirUtile',
        destination: '/guide-utile-gyroroue',
        permanent: true,
      },
      {
        source: '/Merci',
        destination: '/mille-merci',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/mille-merci',
        permanent: true,
      },
      {
        source: '/mention',
        destination: '/mentions',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
