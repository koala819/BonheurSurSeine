import { RichText } from 'prismic-reactjs'

import Image from 'next/image'

import { ImageField, KeyTextField } from '@prismicio/types'

export default function Hero({
  photo_back,
  photo_front,
  text,
  titre,
}: {
  photo_back: ImageField
  photo_front: ImageField
  text: any
  titre: KeyTextField
}) {
  return (
    <section className="mx-auto px-4 md:px-6 lg:px-8 mt-8 mb-2 sm:mb-4 md:mb-8 lg:mb-10">
      <div className="flex flex-wrap justify-between">
        <aside className="flex w-full md:w-5/12 lg:w-1/3 flex-col justify-center">
          <h1 className="text-3xl font-bold">{titre}</h1>
          <div className="prose">{RichText.render(text)}</div>
        </aside>

        <aside className="mt-2 flex w-full relative md:w-7/12 lg:w-2/3 h-[200px] sm:h-[300px] md:h-[500px] lg:h-[400px]">
          {/* Image de Derrière */}
          <div className="absolute inset-0 lg:m-10 overflow-hidden rounded-lg shadow-lg w-full h-full lg:min-w-full">
            <Image
              src={photo_back.url || ''}
              alt={photo_back.alt || ''}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>

          {/* Image de Devant */}
          <div className="z-10 relative w-1/4 md:w-1/3 lg:w-1/6 aspect-square lg:ml-12 mt-auto mb-2">
            <Image
              src={photo_front.url || ''}
              alt={photo_front.alt || ''}
              className="object-cover rounded-full"
              fill
              sizes="(max-width: 768px) 30vw, 20vw"
            />
          </div>
        </aside>
      </div>
    </section>
  )
}
