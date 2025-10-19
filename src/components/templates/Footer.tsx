'use client'

import { Tooltip } from '@nextui-org/react'
import { BsYoutube } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'

import Image from 'next/image'
import Link from 'next/link'

import { Article } from '@/src/components/molecules/Article'
import { DoubleColumn } from '@/src/components/molecules/DoubleColumns'

//import { FooterColumn } from '@/src/components/molecules/FooterColumn'
import logo from '@/public/BonheurSurSeine_logo.png'
import Discord from '@/public/Discord.png'
import Patreon from '@/public/Patreon.svg'
import Tipeee from '@/public/Tipeee.svg'

//import dix31 from '@/public/white_DIX31.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-nav-light dark:bg-nav-dark pt-2 w-full text-white">
      <nav className="space-y-0 md:flex md:flex-row lg:px-0 xl:px-4 mt-2 mb-2">
        <aside className="flex justify-center md:basis-1/2">
          <DoubleColumn
            sectionClassName="md:flex w-full"
            leftClassName="w-full"
            rightClassName="flex justify-center"
            left={
              <picture className="w-full flex justify-center md:justify-end pr-4">
                <Image src={logo} alt="Logo Bonheur Sur Seine" height={80} />
              </picture>
            }
            right={
              <div className="flex flex-col items-center md:items-start">
                <Article
                  title="Bonheur Sur Seine"
                  classNameTitle="md:text-xl lg:text-4xl"
                  button={{ display: false }}
                />
                <span className="text-xs text-cyan-50 dark:text-sky-50">
                  {/*<span className="text-xs text-cyan-600 dark:text-sky-950">*/}
                  Vidéaste et Spécialiste gyroroue
                </span>
                <picture className="flex space-x-4 items-center justify-center mt-0 w-full">
                  <Tooltip showArrow={true} color="danger" content="Youtube">
                    <Link
                      href="https://www.youtube.com/c/BonheursurSeine"
                      target="_blank"
                      className="text-red-600 hover:text-red-500 flex items-centerrounded-2xl p-2"
                    >
                      <BsYoutube size={38} />
                    </Link>
                  </Tooltip>

                  <Tooltip showArrow={true} color="default" content="Patreon">
                    <Link
                      href="https://www.patreon.com/c/BonheursurSeine"
                      target="_blank"
                      className="flex items-centerrounded-2xl p-2"
                    >
                      <picture className="w-8 h-8">
                        <Image
                          alt="Patreon logo"
                          src={Patreon}
                          className="opacity-80 hover:opacity-100"
                        />
                      </picture>
                    </Link>
                  </Tooltip>

                  <Tooltip showArrow={true} color="primary" content="Discord">
                    <Link
                      href="https://discord.com/invite/Jhgw7C96Jf"
                      target="_blank"
                      className="w-16 h-16 transition-transform transform hover:scale-110 flex items-center"
                    >
                      <Image
                        alt="Discord logo"
                        src={Discord}
                        width={64}
                        height={64}
                        className="rounded-full opacity-80 hover:opacity-100"
                      />
                    </Link>
                  </Tooltip>

                  <Tooltip
                    showArrow={true}
                    color={'danger'}
                    content="Instagram"
                  >
                    <Link
                      href="https://www.instagram.com/bonheursurseine/"
                      target="_blank"
                      className="text-rose-500 hover:text-rose-400 flex items-center justify-center rounded-2xl p-2"
                    >
                      <FiInstagram size={32} />
                    </Link>
                  </Tooltip>
                  <Tooltip showArrow={true} color={'danger'} content="Tipee">
                    <Link
                      href="https://fr.tipeee.com/bonheur-sur-seine"
                      target="_blank"
                      className="text-rose-500 hover:text-rose-400 flex items-center justify-centerrounded-2xl p-2"
                    >
                      <picture className="w-8 h-8">
                        <Image
                          alt="Tipee logo"
                          src={Tipeee}
                          className="opacity-80 hover:opacity-100"
                        />
                      </picture>
                    </Link>
                  </Tooltip>
                </picture>
              </div>
            }
          />
        </aside>

        <aside className="flex justify-center items-center md:w-1/2">
          <div className="">
            <p>
              <Link
                href="/mentions"
                className="tracking-widest hover:cursor-pointer hover:underline text-xs xl:text-base"
              >
                Mentions légales
              </Link>
              {' - '}
              <Link
                href="/plan-du-site"
                className="tracking-widest hover:cursor-pointer hover:underline text-xs xl:text-base"
              >
                Plan du Site
              </Link>
            </p>
            <p className="text-xs md:text-sm">
              © {currentYear} Bonheur Sur Seine — Tous droits réservés
            </p>
          </div>
        </aside>
      </nav>
    </footer>
  )
}
