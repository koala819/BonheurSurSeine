import { Inter } from 'next/font/google'

import '@/src/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className}`} suppressHydrationWarning>
        <div className="min-h-screen min-w-screen flex flex-col">
          <main className="flex-1 bg-bg-light text-white flex items-center justify-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
