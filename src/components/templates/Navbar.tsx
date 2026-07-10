'use client'

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react'
import { useState } from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { ThemeSwitcher } from '@/src/components/util/ThemeSwitcher'

import logo from '@/public/BonheurSurSeine_logo.png'
import PlanSite from '@/public/BonheurSurSeine_plandusite.png'

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const path = usePathname()

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'BonheurScore', path: '/BonheurScore' },
    { name: 'Codes Promo', path: '/codes-promo' },
    { name: 'Apprendre la roue', path: '/apprendre-gyroroue' },
    { name: 'Choisir sa roue', path: '/choisir-gyroroue' },
    { name: "L'essentiel pour bien démarrer", path: '/debuter-gyroroue' },
    { name: 'Guide pratique', path: '/guide-utile-gyroroue' },
    { name: 'Merci', path: '/mille-merci' },
  ]

  /* --------------------------------------------- */
  return (
    <Navbar
      className="py-4 px-0 bg-nav-light dark:bg-nav-dark"
      isBordered={true}
      position="static"
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
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
        {/* ----------------------------- */}
        {/*           Menu desktop        */}
        {/* ----------------------------- */}
        <NavbarContent className="mr-1" justify="center">
          {/* Logo */}
          <NavbarBrand>
            <Link href="/" aria-current="page">
              <Image
                src={logo}
                alt="Bonheur Sur Seine logo"
                className="max-w-[60px] object-fill"
                width={60}
                height={60}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        {/*--------------------------------------------*/}
        {/* Menus */}
        <NavbarContent
          className="hidden md:flex gap-1 md:gap-1 lg:gap-3"
          justify="center"
        >
          <div className="relative group">
            <NavbarItem isActive={path.includes('/BonheurScore')}>
              <Link
                href="/BonheurScore"
                className="text-white hover:text-text-link whitespace-nowrap"
              >
                BonheurScore
              </Link>
            </NavbarItem>
            {/* Sous-menu */}
            <div className="absolute left-0 top-full pt-1 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50 dark:border-cyan-900 border-1">
              <ul className="italic flex flex-col p-1 text-sm text-gray-800 dark:text-gray-100">
                <li>
                  <Link
                    href="/BonheurScore"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/BonheurScore#liste-tests"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸Tous mes Tests
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*--------------------------------------------*/}
          <div className="relative group">
            <NavbarItem isActive={path.includes('/codes-promo')}>
              <Link
                href="/codes-promo"
                className="text-white hover:text-text-link whitespace-nowrap"
              >
                Codes Promo
              </Link>
            </NavbarItem>
            {/* Sous-menu */}
            <div className="absolute left-0 top-full pt-1 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50 dark:border-cyan-900 border-1">
              <ul className="italic flex flex-col p-1 text-sm text-gray-800 dark:text-gray-100">
                <li>
                  <Link
                    href="/codes-promo"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸Mes Partenaires
                  </Link>
                </li>
                <li>
                  <Link
                    href="/codes-promo"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸Offres Exclusives
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/*--------------------------------------------*/}
          <div className="relative group">
            <NavbarItem isActive={path.includes('/apprendre-gyroroue')}>
              <Link
                href="/apprendre-gyroroue"
                className="text-white hover:text-text-link whitespace-nowrap"
              >
                Apprendre
              </Link>
            </NavbarItem>
            {/* Sous-menu */}
            <div className="absolute left-0 top-full pt-1 w-52 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50 dark:border-cyan-900 border-1">
              <ul className="italic flex flex-col p-1 text-sm text-gray-800 dark:text-gray-100">
                <li>
                  <Link
                    href="/apprendre-gyroroue#cestquoi"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸Comment ça fonctionne
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apprendre-gyroroue#mes_formations"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸Mes formations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apprendre-gyroroue#apprendre"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸Apprendre la gyroroue
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
                className="text-white hover:text-text-link whitespace-nowrap"
              >
                Choisir
              </Link>
            </NavbarItem>
            {/* Sous-menu */}
            <div className="absolute left-0 top-full pt-1 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50 dark:border-cyan-900 border-1">
              <ul className="italic flex flex-col p-1 text-sm text-gray-800 dark:text-gray-100">
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
                className="text-white hover:text-text-link whitespace-nowrap"
              >
                L&apos;essentiel
              </Link>
            </NavbarItem>
            {/* Sous-menu */}
            <div className="absolute left-0 top-full pt-1 w-52 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50 dark:border-cyan-900 border-1">
              <ul className="italic flex flex-col p-1 text-sm text-gray-800 dark:text-gray-100">
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
                className="text-white hover:text-text-link whitespace-nowrap"
              >
                Guide pratique
              </Link>
            </NavbarItem>
            {/* Sous-menu */}
            <div className="absolute left-0 top-full pt-1 w-52 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50 dark:border-cyan-900 border-1">
              <ul className="italic flex flex-col p-1 text-sm text-gray-800 dark:text-gray-100">
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
                    🔸La batterie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guide-utile-gyroroue#pneu"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸Le pneu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guide-utile-gyroroue#suspension"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸La suspension
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
              </ul>
            </div>
          </div>

          {/*--------------------------------------------*/}
          <div className="relative group">
            <NavbarItem isActive={path.includes('/mille-merci')}>
              <Link
                href="/mille-merci"
                className="text-white hover:text-text-link whitespace-nowrap"
              >
                Merci
              </Link>
            </NavbarItem>
            {/* Sous-menu */}
            <div className="absolute left-0 top-full pt-1 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50 dark:border-cyan-900 border-1">
              <ul className="italic flex flex-col p-1 text-sm text-gray-800 dark:text-gray-100">
                <li>
                  <Link
                    href="/mille-merci#tonavis"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸Donner ton avis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mille-merci#soutien"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸Soutenir mon travail
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mille-merci#copains"
                    className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                  >
                    🔸Remerciements
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </NavbarContent>

        {/* Actions droite */}
        <NavbarContent className="" justify="end">
          <NavbarItem className="hidden md:inline-flex ml-1">
            <Button
              title="Plan du site"
              variant="outline"
              size="icon"
              className="dark:bg-cyan-800 p-0.5"
            >
              <Link href="/plan-du-site" aria-current="page">
                <Image
                  src={PlanSite}
                  alt="Plan du Site"
                  className="object-fill dark:invert"
                  width={60}
                  height={60}
                />
              </Link>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
          <button
            type="button"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </NavbarContent>

        {/* ----------------------------- */}
        {/*           Menu mobile         */}
        {/* ----------------------------- */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-[100] bg-nav-light dark:bg-nav-dark shadow-lg flex flex-col py-2 px-4 max-h-[370px] overflow-y-auto">
            {menuItems.map((item, index) => (
              <Link
                key={`${item.name}-${index}`}
                href={item.path}
                className="w-full rounded-xl hover:bg-rose-700 hover:text-white px-3 py-2 font-semibold transition-colors text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                🔵&nbsp;&nbsp;{item.name}
              </Link>
            ))}
            <p className="text-right font-medium">
              <Link
                href="/plan-du-site"
                className="tracking-widest hover:cursor-pointer hover:underline text-xs xl:text-base text-white"
              >
                Plan du Site
              </Link>
            </p>
          </div>
        )}
      </div>
    </Navbar>
  )
}
