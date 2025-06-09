'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

//import ReactPlayer from 'react-player'
import Image from 'next/image'
import Link from 'next/link'

import { UserProfile } from '@/src/types/models'

import Anumme from '@/public/marques/Anumme.png'
import Wikiloc from '@/public/marques/wikiloc_logo.svg'

const Associations = () => {
  const userProfiles: UserProfile[] = [
    {
      name: 'Fabien',
      profileUrl: 'https://fr.wikiloc.com/wikiloc/user.do?id=5325392',
      imageUrl:
        'https://s2.wklcdn.com/image_177/5325392/photo.jpg?1595180668172',
    },
    {
      name: 'Olig',
      profileUrl: 'https://fr.wikiloc.com/wikiloc/user.do?id=2126120',
      imageUrl:
        'https://s2.wklcdn.com/image_70/2126120/photo.jpg?1605908986646',
    },
    {
      name: 'Tonton Polo',
      profileUrl: 'https://fr.wikiloc.com/wikiloc/user.do?id=7067439',
      imageUrl:
        'https://s0.wklcdn.com/image_235/7067439/photo.jpg?1682195125259',
    },
    {
      name: 'Marko',
      profileUrl: 'https://fr.wikiloc.com/wikiloc/user.do?id=3131352',
      imageUrl:
        'https://s0.wklcdn.com/image_104/3131352/photo.jpg?1529266630389',
    },
  ]

  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Groupes & associations"
          title={<h3>🌍 Groupes & associations</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          <section>
            <h2>L&apos;ANUMME</h2>
            <div className="blueBlock mb-8">
              <h4>
                ℹ️ Leur site est très complet et bourré d&apos;informations
              </h4>
            </div>
            <div className="flex flex-col lg:flex-row">
              <aside className="lg:w-7/12 space-y-8">
                <p>
                  L&apos;
                  <strong>
                    Association Nationale des Utilisateurs de Micro-Mobilité
                    Électrique
                  </strong>{' '}
                  a été créée par des passionnés afin de promouvoir et défendre
                  l&apos;utilisation des EDPM (roues, trottinettes, e-skate).
                  <br /> <br />
                  Leur site est rempli d&apos;informations utiles.
                </p>
              </aside>

              <aside className="lg:w-5/12 flex items-center justify-center">
                <Link href={'https://www.anumme.fr/'} passHref target="_blank">
                  <Image
                    src={Anumme}
                    alt="Anumme Logo"
                    width={300}
                    height={500}
                    className="rounded-lg cursor-pointer"
                  />
                </Link>
              </aside>
            </div>
          </section>

          <section className="pt-8">
            <h2>Wikiloc</h2>
            <div className="blueBlock mb-8">
              <h4>
                📢 En 2 mots&nbsp;: &laquo;&nbsp;Allons rouler !&nbsp;&raquo;
              </h4>
            </div>
            <div className="flex flex-col lg:flex-row mb-8">
              <aside className="lg:w-7/12 space-y-8 mb-1">
                <p>
                  Ce site permet de <strong>partager des itinéraires</strong>,
                  de les enregistrer et les documenter (textes, photos,
                  commentaires), et de télécharger les tracés GPS. Parfait pour
                  aider les autres, et bénéficier de leurs expériences afin
                  d&apos;organiser ses propres sorties.
                  <br />
                  Il existe 2 catégories utilisées par la communauté :
                  <i>“Monocycle de montagne”</i> et <i>“Segway”</i>.
                </p>
              </aside>

              <aside className="lg:w-5/12 flex items-center justify-center">
                <Link href={'https://fr.wikiloc.com/'} passHref target="_blank">
                  <Image
                    src={Wikiloc}
                    alt="Wikiloc Logo"
                    width={300}
                    height={500}
                    className="rounded-lg cursor-pointer"
                  />
                </Link>
              </aside>
            </div>
            <p className="mb-0">
              Voici quelques contributeurs très actifs pour{' '}
              <strong>découvrir de supers parcours</strong>&nbsp;:
            </p>
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {userProfiles.map((user) => (
                <Link
                  href={user.profileUrl}
                  target="_blank"
                  key={user.name}
                  className=" hover:bg-gray-300 hover:dark:bg-gray-600 rounded-xl p-8"
                >
                  <div className="flex flex-col w-full">
                    <h4 className="text-center mt-2">{user.name}</h4>
                    <div className=" flex justify-center w-full py-2">
                      <Image
                        src={
                          user.imageUrl || '/public/BonheurSurSeine_logo.png'
                        }
                        alt={user.name}
                        className="w-28 h-28 object-cover rounded-full"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="pt-8">
            <h2>Les associations</h2>
            <div className="blueBlock mb-8">
              <h4>
                📢 &laquo;&nbsp;Le bonheur n&apos;est réel que lorsqu&apos;il
                est partagé.&nbsp;&raquo;
              </h4>
            </div>
            <p>
              On trouve des associations un peu partout. Tu en trouveras plein
              sur cette carte (magnifique travail réalisé par{' '}
              <Link
                href={'https://leswheelerssarthois.fr/'}
                passHref
                target="_blank"
                className="link-style"
              >
                Les Wheelers Sarthois
              </Link>{' '}
              que je remercie) :
            </p>
            <div className="flex flex-col lg:flex-row mt-8">
              <aside className="lg:w-1/2 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1Y9MEriN0xb-_4wEnTdJdRho7BXps4cy1&ehbc=2E312F"
                  width="640"
                  height="480"
                ></iframe>
              </aside>

              <aside className="lg:w-1/2 pt-8 lg:pt-0 lg:pl-8">
                <p>Autant d&apos;opportunités de : </p>
                <ul className="compactlist mt-1 mb-4">
                  <li>Faire découvrir la roue électrique.</li>
                  <li>Rencontrer d&apos;autres passionnés.</li>
                  <li>
                    Partager des expériences autour de cette passion commune.
                  </li>
                  <li>
                    Découvrir d&apos;autres façons de faire de la roue
                    (freestyle, randonneurs, racer, off road, acrobates, etc.).
                  </li>
                  <li>Participer à l&apos;organisation d&apos;événements.</li>
                </ul>
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/iQzrhgo2XiM?si=k2ZEL-ZZFjGE6YJq"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </aside>
            </div>
          </section>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en juin 2024
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Associations
