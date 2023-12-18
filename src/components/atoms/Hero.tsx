import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { ImageField, KeyTextField } from "@prismicio/types";

export default function Hero({
  photo_back,
  photo_front,
  text,
  titre,
}: {
  photo_back: ImageField;
  photo_front: ImageField;
  text: any;
  titre: KeyTextField;
}) {
  return (
    <section className='mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 mt-8'>
      <div className='flex flex-wrap justify-between md:mb-16'>
        <div className='flex w-full flex-col justify-center lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
          <h1 className='text-4xl font-bold text-black dark:text-white sm:text-5xl md:mb-8 md:text-6xl'>
            {titre}
          </h1>
          <text className='max-w-md leading-relaxed text-gray-500 dark:text-gray-300 xl:text-lg'>
            {RichText.render(text)}
          </text>
        </div>

        <div className='flex w-full md:mb-16 lg:w-2/3'>
          <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
            <Image
              src={photo_front.url || ""}
              alt={photo_front.alt || ""}
              className='h-full w-full object-cover object-center'
              priority
              width={500}
              height={500}
            />
          </div>

          <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
            <Image
              src={photo_back.url || ""}
              alt={photo_back.alt || ""}
              className='h-full w-full object-cover object-center'
              priority
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
