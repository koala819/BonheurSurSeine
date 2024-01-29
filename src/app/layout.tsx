import { Analytics } from '@vercel/analytics/react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/src/components/templates/Footer'
import { Top as Navbar } from '@/src/components/templates/Navbar'
import GoogleAnalytics from '@/src/components/util/GoogleAnalytics'

import { Providers } from './providers'

import '@/src/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bonheur Sur Seine',
  description:
    'Salut à toi !  Ici, tu trouveras des informations complémentaires à ma chaine Youtube, et tout un tas d&#39;informations exclusives difficiles à partager sur les autres réseaux ! Enjoy, et surtout ce site est en construction. N&#39;hésite pas à me dire ce que tu en penses... comme dit mon papa : &quot;ce sont',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className}`}>
        <Providers>
          <div className="min-h-screen min-w-screen flex flex-col">
            <Navbar />

            <main className="flex-1 bg-bg-light dark:bg-bg-dark text-white">
              <div className="w-full px-4 mx-auto mt-6">
                <div className="flex flex-col min-w-0 break-words w-full mb-6 bg-gray-200 dark:bg-slate-500 rounded-lg border-0 ">
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
