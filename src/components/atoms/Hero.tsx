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
        <aside className="flex w-3/4 lg:w-1/3 items-center flex-col justify-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl whitespace-nowrap">
            {titre}
          </h1>
          <span className="mt-4 mb-8 leading-relaxed text-gray-500 dark:text-gray-300 xl:text-lg">
            {RichText.render(text)}
          </span>
        </aside>

        <aside className="flex w-full relative lg:w-2/3 h-[200px] md:h-[400px]">
          {/* Image de Derrière */}
          <div className="absolute inset-0 lg:m-4 overflow-hidden rounded-lg shadow-lg w-full h-full lg:min-w-full">
            <Image
              src={photo_back.url || ''}
              alt={photo_back.alt || ''}
              className="object-cover"
              layout="fill"
            />
          </div>

          {/* Image de Devant */}
          <picture className="z-10 w-1/3 md:w-1/4 p-4 flex justify-center items-center">
            <Image
              src={photo_front.url || ''}
              alt={photo_front.alt || ''}
              className="object-cover object-center rounded-full"
              layout="responsive"
              width={30}
              height={30}
            />
          </picture>
        </aside>
      </div>
    </section>
  )
}
