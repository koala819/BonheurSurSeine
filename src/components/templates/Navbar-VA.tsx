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
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { ThemeSwitcher } from '@/src/components/util/ThemeSwitcher'

import logo from '@/public/BonheurSurSeine_logo.png'

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const path = usePathname()

  // Mobile : section ouverte (string = nom de la section ouverte ou null)
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

  // Gestion ouverture accordéon mobile avec animation
  function toggleSection(name: string) {
    setOpenSection((current) => (current === name ? null : name))
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
        {/* Idem version B, desktop identique */}
        {/* Réutilisation simplifiée, même contenu que version B */}
        {menuItems.map((item) => (
          <div key={item.name} className="relative group">
            <NavbarItem isActive={path.includes(item.path)}>
              <Link
                href={item.path}
                className="text-white hover:text-text-link whitespace-nowrap"
              >
                {item.name}
              </Link>
            </NavbarItem>
            {item.children && (
              <div className="absolute left-0 top-full pt-1 w-44 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 pointer-events-none delay-50 dark:border-cyan-900 border-1">
                <ul className="italic flex flex-col p-1 text-sm text-gray-800 dark:text-gray-100">
                  {item.children.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        href={sub.path}
                        className="text-inherit text-sm hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full"
                      >
                        🔸{sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
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

      {/* Menu mobile version A */}
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

                  {isOpen && (
                    <ul
                      id={`${item.name}-submenu`}
                      className="flex flex-col p-2 text-sm text-gray-800 dark:text-gray-100"
                    >
                      {item.children?.map((sub) => (
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
                  )}
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
