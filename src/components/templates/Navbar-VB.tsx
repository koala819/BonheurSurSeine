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
import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { ThemeSwitcher } from '@/src/components/util/ThemeSwitcher'

import logo from '@/public/BonheurSurSeine_logo.png'

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const path = usePathname()

  // Mobile : état accordéon ouvert, string = nom de la section ouverte ou null
  const [openSection, setOpenSection] = useState<string | null>(null)

  // Initialisation ouverture accordéon mobile selon path
  useEffect(() => {
    if (path.includes('/BonheurScore')) setOpenSection('BonheurScore')
    else if (path.includes('/codes-promo')) setOpenSection('Codes Promo')
    else if (path.includes('/apprendre-gyroroue')) setOpenSection('Apprendre')
    else if (path.includes('/choisir-gyroroue')) setOpenSection('Choisir')
    else if (path.includes('/debuter-gyroroue')) setOpenSection('Bien Démarrer')
    else if (path.includes('/guide-utile-gyroroue'))
      setOpenSection('Savoir Utile')
    else if (path.includes('/mille-merci')) setOpenSection('Remerciements')
    else setOpenSection(null)
  }, [path])

  // Menu items (desktop + mobile)
  const menuItems = [
    { name: 'Accueil', path: '/' },
    {
      name: 'BonheurScore',
      path: '/BonheurScore',
      children: [
        { name: 'À propos', path: '/BonheurScore' },
        { name: 'Tous mes Tests', path: '/BonheurScore#liste-tests' },
      ],
    },
    {
      name: 'Codes Promo',
      path: '/codes-promo',
      children: [
        { name: 'Mes Partenaires', path: '/codes-promo' },
        { name: 'Offres Exclusives', path: '/codes-promo' },
      ],
    },
    {
      name: 'Apprendre',
      path: '/apprendre-gyroroue',
      children: [
        { name: 'Comment ça fonctionne', path: '/apprendre-gyroroue#cestquoi' },
        {
          name: 'Apprendre la gyroroue',
          path: '/apprendre-gyroroue#apprendre',
        },
      ],
    },
    {
      name: 'Choisir',
      path: '/choisir-gyroroue',
      children: [
        { name: 'Le marché', path: '/choisir-gyroroue#marche' },
        { name: 'Les marques', path: '/choisir-gyroroue#marques' },
        { name: 'Ses besoins', path: '/choisir-gyroroue#besoins' },
        { name: 'Comparer', path: '/choisir-gyroroue#comparer' },
      ],
    },
    {
      name: 'Bien Démarrer',
      path: '/debuter-gyroroue',
      children: [
        { name: 'Premier déballage', path: '/debuter-gyroroue#deballage' },
        { name: 'Le bon sens', path: '/debuter-gyroroue#bonsens' },
        { name: 'Assurance', path: '/debuter-gyroroue#assurance' },
        { name: 'Code de la route', path: '/debuter-gyroroue#code' },
        { name: 'Groupes & associations', path: '/debuter-gyroroue#asso' },
      ],
    },
    {
      name: 'Savoir Utile',
      path: '/guide-utile-gyroroue',
      children: [
        {
          name: "Le p'tit Dico du Bonheur",
          path: '/guide-utile-gyroroue#dico',
        },
        { name: "L'entretien", path: '/guide-utile-gyroroue#entretien' },
        { name: 'La batterie', path: '/guide-utile-gyroroue#batterie' },
        { name: 'Trouver son chemin', path: '/guide-utile-gyroroue#navi' },
        { name: 'Savoir en vrac', path: '/guide-utile-gyroroue#vrac' },
        { name: 'Infos constructeurs', path: '/guide-utile-gyroroue#infos' },
      ],
    },
    {
      name: 'Remerciements',
      path: '/mille-merci',
      children: [
        { name: 'Soutenir mon travail', path: '/mille-merci#soutien' },
        { name: 'Merci !', path: '/mille-merci#copains' },
      ],
    },
  ]

  // Ref pour animation accordéon mobile
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Gestion ouverture accordéon mobile avec animation
  function toggleSection(name: string) {
    if (openSection === name) {
      setOpenSection(null)
    } else {
      setOpenSection(name)
    }
  }

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
      {/* Logo */}
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

      {/* Menu desktop */}
      <NavbarContent className="hidden md:flex gap-3" justify="center">
        {/* --- Réutilisation partielle des items avec sous-menus --- */}
        {/* BonheurScore */}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/BonheurScore')}>
            <Link
              href="/BonheurScore"
              className="text-white hover:text-text-link whitespace-nowrap"
            >
              BonheurScore
            </Link>
          </NavbarItem>
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
        {/* Codes Promo */}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/codes-promo')}>
            <Link
              href="/codes-promo"
              className="text-white hover:text-text-link whitespace-nowrap"
            >
              Codes Promo
            </Link>
          </NavbarItem>
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
        {/* Apprendre */}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/apprendre-gyroroue')}>
            <Link
              href="/apprendre-gyroroue"
              className="text-white hover:text-text-link whitespace-nowrap"
            >
              Apprendre
            </Link>
          </NavbarItem>
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
                  href="/apprendre-gyroroue#apprendre"
                  className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                >
                  🔸Apprendre la gyroroue
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Choisir */}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/choisir-gyroroue')}>
            <Link
              href="/choisir-gyroroue"
              className="text-white hover:text-text-link whitespace-nowrap"
            >
              Choisir
            </Link>
          </NavbarItem>
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
        {/* Bien Démarrer */}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/debuter-gyroroue')}>
            <Link
              href="/debuter-gyroroue"
              className="text-white hover:text-text-link whitespace-nowrap"
            >
              Bien Démarrer
            </Link>
          </NavbarItem>
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
        {/* Savoir Utile */}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/guide-utile-gyroroue')}>
            <Link
              href="/guide-utile-gyroroue"
              className="text-white hover:text-text-link whitespace-nowrap"
            >
              Savoir Utile
            </Link>
          </NavbarItem>
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
        {/* Remerciements */}
        <div className="relative group">
          <NavbarItem isActive={path.includes('/mille-merci')}>
            <Link
              href="/mille-merci"
              className="text-white hover:text-text-link whitespace-nowrap"
            >
              Remerciements
            </Link>
          </NavbarItem>
          <div className="absolute left-0 top-full pt-1 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50 dark:border-cyan-900 border-1">
            <ul className="italic flex flex-col p-1 text-sm text-gray-800 dark:text-gray-100">
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
                  🔸Merci !
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </NavbarContent>

      {/* Actions droite */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />
      </NavbarContent>

      {/* Menu mobile accordéon animé */}
      <NavbarMenu
        className="mt-8 items-end text-right pr-4"
        style={{ maxHeight: '370px', overflowY: 'auto' }}
      >
        {menuItems.map((item) => {
          const hasChildren = !!item.children?.length
          const isOpen = openSection === item.name

          return (
            <div key={item.name} className="w-full">
              {hasChildren ? (
                <>
                  {/* Titre parent : toggle sur clic */}
                  <button
                    onClick={() => toggleSection(item.name)}
                    className="w-full flex justify-between items-center px-2 py-1 rounded-xl hover:bg-rose-500 hover:text-white text-lg font-semibold"
                    aria-expanded={isOpen}
                    aria-controls={`${item.name}-submenu`}
                    type="button"
                  >
                    {item.name}
                    <svg
                      className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Contenu accordéon animé */}
                  <div
                    id={`${item.name}-submenu`}
                    ref={(el) => (contentRefs.current[item.name] = el)}
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen
                        ? contentRefs.current[item.name]?.scrollHeight ?? 0
                        : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <ul className="flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100">
                      {item.children.map((sub) => (
                        <li key={sub.name} className="py-1">
                          <Link
                            href={sub.path}
                            className="block rounded hover:bg-rose-500 hover:text-white px-2 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <NavbarMenuItem className="w-full flex justify-end">
                  <Link
                    color={'foreground'}
                    className="justify-end w-full rounded-xl hover:bg-rose-500 hover:text-white px-2 py-1"
                    href={item.path}
                    size="lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              )}
            </div>
          )
        })}
      </NavbarMenu>
    </Navbar>
  )
}
