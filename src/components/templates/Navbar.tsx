'use client'

import {
  Link,
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
    { name: 'Choisir sa Roue', path: '/choix' },
    { name: 'Bien Démarrer', path: '/begin' },
    { name: 'Savoir Utile', path: '/savoir_utile' },
    { name: 'Remerciements', path: '/contact' },
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
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
              className="max-w-[50px] object-fill"
              width={50}
              height={30}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex " justify="center">
        <div className="relative group">
          <NavbarItem isActive={path.includes('/BonheurScore')}>
            <Link
              href="/BonheurScore"
              className="text-white hover:text-text-link"
            >
              BonheurScore
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full mt-2 hidden w-48 rounded-lg bg-white dark:text-white dark:bg-gray-800 shadow-lg group-hover:block z-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>🔸Les roues</li>
              <li>🔸Mes tests</li>
              <li>🔸Mes vidéos</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <NavbarItem isActive={path.includes('/promo')}>
            <Link href="/promo" className="text-white hover:text-text-link">
              Codes Promo
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full mt-2 hidden w-48 rounded-lg bg-white dark:text-white dark:bg-gray-800 shadow-lg group-hover:block z-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>🔸Mes Partenaires</li>
              <li>🔸Offres Exclusives</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <NavbarItem isActive={path.includes('/choix')}>
            <Link href="/choix" className="text-white hover:text-text-link">
              Choisir sa Roue
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full mt-2 hidden w-48 rounded-lg bg-white dark:text-white dark:bg-gray-800 shadow-lg group-hover:block z-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>🔸Le marché</li>
              <li>🔸Les marques</li>
              <li>🔸Ses besoins</li>
              <li>🔸Comparer</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <NavbarItem isActive={path.includes('/begin')}>
            <Link href="/begin" className="text-white hover:text-text-link">
              Bien Démarrer
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full mt-2 hidden w-56 rounded-lg bg-white dark:text-white dark:bg-gray-800 shadow-lg group-hover:block z-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>🔸Le bon sens</li>
              <li>🔸L&apos;assurance</li>
              <li>🔸Le code de la route</li>
              <li>🔸Groupe & associations</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <NavbarItem isActive={path.includes('/savoir_utile')}>
            <Link
              href="/savoir_utile"
              className="text-white hover:text-text-link"
            >
              Savoir Utile
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full mt-2 hidden w-60 rounded-lg bg-white dark:text-white dark:bg-gray-800 shadow-lg group-hover:block z-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>🔸L&apos;entretien</li>
              <li>🔸Le p&apos;tit Dico du Bonheur</li>
              <li>🔸Trouver son chemin</li>
              <li>🔸Batterie et autonomie</li>
              <li>🔸Savoir en vrac</li>
              <li>🔸Infos officiels constructeurs</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <NavbarItem isActive={path.includes('/contact')}>
            <Link href="/contact" className="text-white hover:text-text-link">
              Remerciements
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full mt-2 hidden w-56 rounded-lg bg-white dark:text-white dark:bg-gray-800 shadow-lg group-hover:block z-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>🔸Dire Merci !</li>
              <li>🔸Soutenir mon travail</li>
            </ul>
          </div>
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />
      </NavbarContent>
      <NavbarMenu
        className="mt-8"
        style={{ maxHeight: '370px', overflowY: 'auto' }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={'foreground'}
              className="w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-2/3 "
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
