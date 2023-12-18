"use client";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { MdLoyalty } from "react-icons/md";
import { Partner } from "@/src/types/models";

export default function CardPromo({
  name,
  logo,
  alt,
  website,
  description,
  code,
  montant,
}: Partner) {
  return (
    <section className='relative bg-gray-300 dark:bg-gray-800 shadow-md rounded-3xl p-2 mx-1 my-3'>
      <div className='flex justify-center overflow-x-hidden rounded-2xl relative'>
        <Image className='h-20 object-center' alt={alt} src={logo} />
      </div>
      <div className='mt-4 pl-2 mb-2'>
        <h1 className='text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2'>
          {name}
        </h1>
        <p className='text-md text-gray-800 dark:text-gray-300'>
          {description}
        </p>

        <Link
          href={website}
          target='_blank'
          className='flex items-center mb-1 mt-4 mr-4 group cursor-pointer text-gray-800 dark:text-gray-300'
        >
          <MdLoyalty className='h-32 w-32 text-bg-light dark:text-bg-dark mr-2' />
          {/* <p dangerouslySetInnerHTML={{ __html: reduction }} /> */}
          <p>
            Et avec le code Promo
            <span className='bold color-[#fbbf24]'>{code}</span> bénéficie
            d&apos;une réduction {montant}.
          </p>
        </Link>
      </div>
    </section>
  );
}
