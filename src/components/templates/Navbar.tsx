'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ThemeSwitcher } from '@/src/components/util/ThemeSwitcher'

import logo from '@/public/BonheurSurSeine_logo.png'

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const path = usePathname()

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'BonheurScore', path: '/BonheurScore' },
    { name: 'Codes Promo', path: '/promo' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="pb-4 mx-auto -px-4 py-5 bg-nav-light dark:bg-nav-dark"
      isBordered={true}
      position="sticky"
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-[#fbbf24]',
          'dark:data-[active=true]:after:bg-orange-600',
        ],
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" aria-current="page">
            <Image
              src={logo}
              alt="Bonheur Sur Seine logo"
              className="object-fill"
              width={50}
              height={30}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " justify="center">
        <NavbarItem isActive={path.includes('/BonheurScore')}>
          <Link
            href="/BonheurScore"
            className="text-white hover:text-text-link"
          >
            BonheurScore
          </Link>
        </NavbarItem>

        <NavbarItem isActive={path.includes('/promo')}>
          <Link href="/promo" className="text-white hover:text-text-link">
            Codes Promo
          </Link>
        </NavbarItem>

        <NavbarItem isActive={path.includes('/contact')}>
          <Link href="/contact" className="text-white hover:text-text-link">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="mt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={'foreground'}
              className="w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2 "
              href={item.path}
              // size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
