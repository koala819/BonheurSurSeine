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
    <section className="mx-auto px-4 lg:px-8 mt-8">
      <div className="flex flex-wrap justify-between md:mb-16">
        <div className="flex w-full flex-col justify-center lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
            {titre}
          </h1>
          <div className="mt-4 mb-8 leading-relaxed text-gray-500 dark:text-gray-300 xl:text-lg">
            {RichText.render(text)}
          </div>
        </div>

        <div className="flex w-full relative md:mb-16 lg:w-2/3">
          {/* Image de Derrière */}
          <div className="absolute inset-0 m-4 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={photo_back.url || ''}
              alt={photo_back.alt || ''}
              className="object-cover"
              layout="fill"
            />
          </div>

          {/* Image de Devant */}
          <picture className="z-10 w-1/2">
            <Image
              src={photo_front.url || ''}
              alt={photo_front.alt || ''}
              className="object-cover object-center rounded-full"
              layout="responsive"
              width={50}
              height={50}
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
