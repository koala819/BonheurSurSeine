'use client'

import { Tooltip } from '@nextui-org/react'
import { BsFacebook, BsYoutube } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'

import Image from 'next/image'
import Link from 'next/link'

import { Article } from '@/src/components/molecules/Article'
import { DoubleColumn } from '@/src/components/molecules/DoubleColumns'
import { FooterColumn } from '@/src/components/molecules/FooterColumn'

import logo from '@/public/BonheurSurSeine_logo.png'
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
              <picture className="w-full flex justify-center md:justify-end">
                <Image src={logo} alt="Logo Bonheur Sur Seine" height={80} />
              </picture>
            }
            right={
              <div className="flex flex-col items-center md:items-start">
                <Article
                  title="Bonheur Sur Seine"
                  classNameTitle="md:text-xl lg:text-3xl"
                  button={{ display: false }}
                />
                <picture className="flex space-x-4 items-center mt-2">
                  <Tooltip showArrow={true} color="danger" content="Youtube">
                    <Link
                      href="https://www.youtube.com/c/BonheursurSeine"
                      target="_blank"
                      className="text-red-600 hover:text-red-500 flex items-centerrounded-2xl p-2"
                    >
                      <BsYoutube size={38} />
                    </Link>
                  </Tooltip>

                  <Tooltip showArrow={true} color="primary" content="Facebook">
                    <Link
                      href="https://www.facebook.com/bonheursurseine/"
                      target="_blank"
                      className="text-blue-700 hover:text-blue-600 flex items-center justify-center rounded-2xl p-2"
                    >
                      <BsFacebook size={30} />
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
                      className="text-rose-500 hover:text-rose-400 flex items-center justify-centerrounded-2xl p-2"
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
                      <Image
                        alt="Tipee logo"
                        src={Tipeee}
                        width={32}
                        height={32}
                        className="opacity-80 hover:opacity-100"
                      />
                    </Link>
                  </Tooltip>
                </picture>
              </div>
            }
          />
        </aside>
        {/* <aside className="md:basis-1/4 flex justify-center">
          <FooterColumn
            title="social"
            items={[
              {
                text: 'Youtube',
                link: 'https://www.youtube.com/c/BonheursurSeine',
              },
              {
                text: 'Facebook',
                link: 'https://www.facebook.com/bonheursurseine/',
              },
              {
                text: 'Instagram',
                link: 'https://www.instagram.com/bonheursurseine/',
              },
            ]}
          />
        </aside> */}
        <aside className="md:basis-1/4 flex justify-center">
          <FooterColumn
            title="entreprise"
            items={[{ text: 'Mentions légales', link: '/mentions' }]}
          />
        </aside>
        <aside className="md:basis-1/4 flex justify-center">
          <FooterColumn
            title="contact"
            items={[
              {
                text: 'Messenger',
                link: 'https://www.facebook.com/bonheursurseine',
              },
              {
                text: 'Instagram',
                link: 'https://www.instagram.com/bonheursurseine/',
              },
              {
                text: 'bonheursurseine@gmail.com',
                link: 'mailto:bonheursurseine@gmail.com',
              },
            ]}
          />
        </aside>
      </nav>
      <legend className="w-full px-4 mx-auto text-center bg-[#47464D] text-white">
        <div className="py-4 flex flex-col md:flex-row space-y-8 md:space-y-0">
          <aside className="flex w-full flex-col md:flex-row items-center text-sm tracking-widest space-y-4 md:space-y-0">
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

          {/* <aside className="flex w-full justify-center text-sm tracking-widest">
            Design by
            <Link
              href="https://github.com/koala819/"
              target="_blank"
              className="ml-1 hover:underline"
            >
              Xavier
            </Link>
          </aside> */}
        </div>
      </legend>
    </footer>
  )
}
