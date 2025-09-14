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
    { name: 'Codes Promo', path: '/code-promo' },
    { name: 'Apprendre', path: '/apprendre-gyroroue' },
    { name: 'Choisir', path: '/choisir-gyroroue' },
    { name: 'Bien Démarrer', path: '/debuter-gyroroue' },
    { name: 'Savoir Utile', path: '/guide-utile-gyroroue' },
    { name: 'Remerciements', path: '/mille-merci' },
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
        {/*--------------------------------------------*/}
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
          <div className="absolute left-0 top-full pt-2 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-5">
            <ul className="text-s italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li className="text-sm">🔸Mes tests</li>
              <li className="text-sm">🔸Mes vidéos</li>
            </ul>
          </div>
        </div>

        {/*--------------------------------------------*/}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/code-promo')}>
            <Link
              href="/code-promo"
              className="text-white hover:text-text-link"
            >
              Codes Promo
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full pt-2 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li className="text-sm">🔸Mes Partenaires</li>
              <li className="text-sm">🔸Offres Exclusives</li>
            </ul>
          </div>
        </div>

        {/*--------------------------------------------*/}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/apprendre-gyroroue')}>
            <Link
              href="/apprendre-gyroroue"
              className="text-white hover:text-text-link"
            >
              Apprendre
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full pt-2 w-52 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>
                <Link
                  href="/apprendre-gyroroue#cestquoi"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸C&apos;est quoi une gyroroue
                </Link>
              </li>
              <li>
                <Link
                  href="/apprendre-gyroroue#apprendre"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Apprendre
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*--------------------------------------------*/}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/choisir-gyroroue')}>
            <Link
              href="/choisir-gyroroue"
              className="text-white hover:text-text-link"
            >
              Choisir
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full pt-2 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>
                <Link
                  href="/choisir-gyroroue#marche"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Le marché
                </Link>
              </li>
              <li>
                <Link
                  href="/choisir-gyroroue#marques"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Les marques
                </Link>
              </li>
              <li>
                <Link
                  href="/choisir-gyroroue#besoins"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Ses besoins
                </Link>
              </li>
              <li>
                <Link
                  href="/choisir-gyroroue#comparer"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Comparer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*--------------------------------------------*/}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/debuter-gyroroue')}>
            <Link
              href="/debuter-gyroroue"
              className="text-white hover:text-text-link"
            >
              Bien Démarrer
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full pt-2 w-52 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>
                <Link
                  href="/debuter-gyroroue#deballage"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Premier déballage
                </Link>
              </li>
              <li>
                <Link
                  href="/debuter-gyroroue#bonsens"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Le bon sens
                </Link>
              </li>
              <li>
                <Link
                  href="/debuter-gyroroue#assurance"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Assurance
                </Link>
              </li>
              <li>
                <Link
                  href="/debuter-gyroroue#code"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Code de la route
                </Link>
              </li>
              <li>
                <Link
                  href="/debuter-gyroroue#asso"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Groupes & associations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*--------------------------------------------*/}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/guide-utile-gyroroue')}>
            <Link
              href="/guide-utile-gyroroue"
              className="text-white hover:text-text-link"
            >
              Savoir Utile
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full pt-2 w-52 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li>
                <Link
                  href="/guide-utile-gyroroue#dico"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Le p&apos;tit Dico du Bonheur
                </Link>
              </li>
              <li>
                <Link
                  href="/guide-utile-gyroroue#entretien"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸L&apos;entretien
                </Link>
              </li>
              <li>
                <Link
                  href="/guide-utile-gyroroue#batterie"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Batterie et autonomie
                </Link>
              </li>
              <li>
                <Link
                  href="/guide-utile-gyroroue#navi"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Trouver son chemin
                </Link>
              </li>
              <li>
                <Link
                  href="/guide-utile-gyroroue#vrac"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Savoir en vrac
                </Link>
              </li>
              <li>
                <Link
                  href="/guide-utile-gyroroue#infos"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Infos constructeurs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*--------------------------------------------*/}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/mille-merci')}>
            <Link
              href="/mille-merci"
              className="text-white hover:text-text-link"
            >
              Remerciements
            </Link>
          </NavbarItem>
          {/* Sous-menu */}
          <div className="absolute left-0 top-full pt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50">
            <ul className="italic flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
              <li className="text-sm">🔸Merci !</li>
              <li className="text-sm">🔸Soutenir mon travail</li>
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
              className="w-full hover:bg-rose-500 hover:text-white px-2 py-1 hover:rounded-xl hover:w-2/3"
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
