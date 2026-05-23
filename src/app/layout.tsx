import { Analytics } from '@vercel/analytics/react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ClientNavbar } from '@/src/components/templates/ClientNavbar'
import { Footer } from '@/src/components/templates/Footer'
import GoogleAnalytics from '@/src/components/util/GoogleAnalytics'

import { Providers } from './providers'

import '@/src/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bonheur Sur Seine',
  description:
    "Site web dédié à la roue électrique (aussi appelée gyroroue). Il s'adresse à un large public, et est pensé d'intérêt général pour partager au plus grand nombre et de manière simple des informations complémentaires à ma chaine Youtube.",
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
  },

  appleWebApp: {
    capable: true,
    title: 'Bonheur sur Seine',
    statusBarStyle: 'default',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>
          <div className="min-h-screen min-w-screen flex flex-col">
            <div className="sticky top-0 z-[100]">
              <ClientNavbar />
            </div>

            <main className="flex-1 bg-bg-light dark:bg-bg-dark text-black dark:text-white flex items-center justify-center">
              <div
                className="w-full px-2 sm:px-3 md:px-4
                                  my-2 sm:my-3 md:my-4
              mx-auto max-w-7xl"
              >
                <div className="flex flex-col min-w-0 break-words w-full bg-gray-200 dark:bg-slate-800 rounded-lg border-0">
                  <GoogleAnalytics />
                  {children}
                  <Analytics />
                </div>
              </div>
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
