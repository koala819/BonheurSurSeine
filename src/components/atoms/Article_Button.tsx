"use client";
import { Button as ButtonNextUI } from "@nextui-org/react";
import Link from "next/link";

export function Button({
  text,
  className,
  link,
}: {
  text: string | undefined;
  className?: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <ButtonNextUI variant='solid' className={className}>
        {text}
      </ButtonNextUI>
    </Link>
  );
}
