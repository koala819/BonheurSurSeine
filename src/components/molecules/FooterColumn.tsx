import Link from "next/link";
import { Text } from "@/src/components/atoms/Text";

export function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { text: string; link: string }[];
}) {
  return (
    <nav className='flex flex-col space-y-4 items-center md:items-start'>
      <Text
        text={title}
        className='font-bold text-xl tracking-widest capitalize'
      />
      {items.map((item, index) => {
        const words = item.text.split(" ");
        const hasMultipleWords = words.length > 1;
        const hasAtSymbol = item.text.includes("@");
        return (
          <Link key={index} href={item.link}>
            <Text
              text={item.text}
              className={
                hasMultipleWords || hasAtSymbol
                  ? "tracking-widest hover:cursor-pointer hover:underline text-xs xl:text-base"
                  : "tracking-widest hover:cursor-pointer hover:underline text-sm xl:text-base capitalize"
              }
              //   className='tracking-widest capitalize hover:cursor-pointer hover:underline'
            />
          </Link>
        );
      })}
    </nav>
  );
}
