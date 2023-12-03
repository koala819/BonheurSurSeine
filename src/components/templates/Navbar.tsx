"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/src/components/util/ThemeSwitcher";
import Image from "next/image";
import logo from "@/public/BonheurSurSeine_logo.png";

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "Codes Promo", path: "#" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='bg-bg-light dark:bg-bg-dark'
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/' aria-current='page' color='foreground'>
            <Image
              src={logo}
              alt='Bonheur Sur Seine logo'
              className='object-fill'
              width={50}
              height={30}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex ' justify='center'>
        <NavbarItem isActive={path.includes("#")}>
          <Link href='#' className='text-white hover:text-text-link'>
            Codes Promo
          </Link>
        </NavbarItem>

        <NavbarItem isActive={path.includes("/contact")}>
          <Link href='/contact' className='text-white hover:text-text-link'>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='mt-8'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className='w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2 '
              href={item.path}
              size='lg'
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
