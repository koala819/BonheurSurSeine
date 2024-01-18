import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import ContactSection from '@/src/components/atoms/ContactSection'
import Hero from '@/src/components/atoms/Hero'
import Quote from '@/src/components/atoms/Quote'

import { createClient } from '@/prismicio'

export const metadata: Metadata = {
  title: 'Bonheur Sur Seine',
  description:
    'Salut à toi !  Ici, tu trouveras des informations complémentaires à ma chaine Youtube, et tout un tas d&#39;informations exclusives difficiles à partager sur les autres réseaux ! Enjoy, et surtout ce site est en construction. N&#39;hésite pas à me dire ce que tu en penses... comme dit mon papa : &quot;ce sont',
}
export default async function Page() {
  const client = createClient()
  const accueil = await client.getSingle('accueil').catch(() => notFound())

  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 text-gray-900 dark:text-white mb-8 space-y-8 ">
      <Hero
        photo_back={accueil.data.photo_back}
        photo_front={accueil.data.photo_front}
        text={accueil.data.text}
        titre={accueil.data.titre}
      />
      <Quote body={accueil.data.body} citation={accueil.data.citation} />
      <ContactSection text={accueil.data.fin} />
    </section>
  )
}
