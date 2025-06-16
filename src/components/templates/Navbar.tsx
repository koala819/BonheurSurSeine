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
          <div className="absolute left-0 top-full pt-2 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="text-md italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
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
          <div className="absolute left-0 top-full pt-2 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="text-md italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
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
          <div className="absolute left-0 top-full pt-2 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="text-md italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>
                <Link
                  href="/choix#marche"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Le marché
                </Link>
              </li>
              <li>
                <Link
                  href="/choix#marques"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Les marques
                </Link>
              </li>
              <li>
                <Link
                  href="/choix#besoins"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Ses besoins
                </Link>
              </li>
              <li>
                <Link
                  href="/choix#comparer"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Comparer
                </Link>
              </li>
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
          <div className="absolute left-0 top-full pt-2 w-52 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="text-md italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>
                <Link
                  href="/begin#deballage"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Premier déballage
                </Link>
              </li>
              <li>
                <Link
                  href="/begin#bonsens"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Le bon sens
                </Link>
              </li>
              <li>
                <Link
                  href="/begin#assurance"
                  className="text-md text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="/begin#code"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Code de la route
                </Link>
              </li>
              <li>
                <Link
                  href="/begin#asso"
                  className="text-md text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Groupes & associations
                </Link>
              </li>
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
          <div className="absolute left-0 top-full pt-2 w-52 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="text-md italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>
                <Link
                  href="/savoir_utile#entretien"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸L&apos;entretien
                </Link>
              </li>
              <li>
                <Link
                  href="/savoir_utile#dico"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Le p&apos;tit Dico du Bonheur
                </Link>
              </li>
              <li>
                <Link
                  href="/savoir_utile#navi"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Trouver son chemin
                </Link>
              </li>
              <li>
                <Link
                  href="/savoir_utile#batterie"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Batterie et autonomie
                </Link>
              </li>
              <li>
                <Link
                  href="/savoir_utile#vrac"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Savoir en vrac
                </Link>
              </li>
              <li>
                <Link
                  href="/savoir_utile#infos"
                  className="text-inherit hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  🔸Infos constructeurs
                </Link>
              </li>
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
          <div className="absolute left-0 top-full pt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="text-md italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
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
