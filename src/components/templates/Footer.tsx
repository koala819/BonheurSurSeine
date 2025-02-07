'use client'

import { Tooltip } from '@nextui-org/react'
import { BsYoutube } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'

import Image from 'next/image'
import Link from 'next/link'

import { Article } from '@/src/components/molecules/Article'
import { DoubleColumn } from '@/src/components/molecules/DoubleColumns'
import { FooterColumn } from '@/src/components/molecules/FooterColumn'

import logo from '@/public/BonheurSurSeine_logo.png'
import Discord from '@/public/Discord.png'
import Patreon from '@/public/Patreon.svg'
import Tipeee from '@/public/Tipeee.svg'
import dix31 from '@/public/white_DIX31.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-nav-light dark:bg-nav-dark pt-8 w-full text-white">
      <nav className="space-y-8 md:space-y-0 md:flex md:flex-row lg:px-0 xl:px-4 mb-12">
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
                <picture className="flex space-x-4 items-center justify-center mt-2 w-full">
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

        <aside className="flex justify-center md:justify-end  md:w-1/2">
          <FooterColumn
            title="entreprise"
            items={[{ text: 'Mentions légales', link: '/mentions' }]}
          />
        </aside>
      </nav>
      <legend className="w-full px-4 mx-auto text-center bg-[#47464D] text-white">
        <div className="py-4 flex flex-col md:flex-row space-y-8 md:space-y-0">
          <aside className="flex w-full flex-col md:flex-row items-center text-xs tracking-widest space-y-4 md:space-y-0">
            <text className="flex">
              {currentYear} Created by
              <Link
                href="https://www.dix31.com"
                target="_blank"
                className="mx-1 hover:underline"
              >
                <picture className="flex justify-center md:justify-end text-white pr-1 mt-1">
                  <Image
                    src={dix31}
                    alt="Logo DIX31.com"
                    height={15}
                    className="text-white"
                  />
                </picture>
              </Link>
            </text>
          </aside>
        </div>
      </legend>
    </footer>
  )
}
