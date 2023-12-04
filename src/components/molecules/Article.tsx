"use client";
import { Image } from "@nextui-org/react";
import { Button } from "@/src/components/atoms/Button";
import { Text } from "@/src/components/atoms/Text";

export function Article({
  button,
  description,
  classNameDescription,
  image,
  overline,
  title,
  classNameTitle,
}: {
  button: { display: boolean; text?: string };
  description?: string;
  classNameDescription?: string;
  image?: { src: { src: string; height: number; width: number }; alt: string };
  overline?: string;
  title: string;
  classNameTitle?: string;
}) {
  return (
    <>
      {overline ? (
        <Text text={overline} className='text-xs sm:text-base uppercase' />
      ) : null}
      {image ? <Image src={image?.src.src} alt={image.alt} /> : null}
      <Text text={title} className={`title ${classNameTitle}`} />
      {description ? (
        <Text
          text={description}
          className={`text-description ${classNameDescription}`}
        />
      ) : null}
      {button.display ? (
        <div className='flex justify-center md:justify-start'>
          <Button text={button.text} className='black-button' link='/contact' />
        </div>
      ) : null}
    </>
  );
}
