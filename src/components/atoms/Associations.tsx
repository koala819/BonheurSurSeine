'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import ReactPlayer from 'react-player'

import Image from 'next/image'
import Link from 'next/link'

import { UserProfile } from '@/src/types/models'

import Anumme from '@/public/Anumme.png'
import Wikiloc from '@/public/wikiloc_logo.svg'

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
          aria-label="Les groupes & associations"
          title={<h3>Les groupes & associations</h3>}
          indicator={<strong className="chevronAccordionItem">&lt;</strong>}
        >
          <section>
            <h2 className="capitalize">l&apos;anumme</h2>
            <div className="blueBlock mb-8">
              <h3>
                📢 En 2 mots : &quot;Voilà un site très complet et bourré
                d’informations utiles&quot;
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row">
              <aside className="lg:w-3/4 space-y-8">
                <p>
                  L&apos;
                  <strong>
                    Association Nationale des Utilisateurs de Micro-Mobilité
                    Électrique
                  </strong>{' '}
                  a été créée par des passionnés afin de promouvoir et défendre
                  l’utilisation des EDPM (roues, trottinettes, e-skate).
                </p>
                <p>Leur site est remplie d’informations utiles.</p>
              </aside>

              <aside className="lg:w-1/4 flex items-center justify-center">
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
              <h3>📢 En 2 mots : &quot;Allons rouler !&quot;</h3>
            </div>
            <div className="flex flex-col lg:flex-row mb-8">
              <aside className="lg:w-3/4 space-y-8">
                <p>
                  Ce site permet de <strong>partager des itinéraires</strong>,
                  de les enregistrer, de les documenter (textes, photos,
                  commentaires), et de télécharger les tracés GPS. Parfait pour
                  aider les autres, et bénéficier de leurs expériences pour
                  organiser ses propres sorties.
                </p>
                <p>
                  Il existe 2 catégories utilisées par la communauté :
                  “Monocycle de montagne” et “Segway”.
                </p>
              </aside>

              <aside className="lg:w-1/4 flex items-center justify-center">
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
            <p>
              Voici quelques contributeurs très actifs pour découvrir de
              supers parcours :
            </p>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {userProfiles.map((user) => (
                <Link
                  href={user.profileUrl}
                  target="_blank"
                  key={user.name}
                  className=" hover:bg-gray-300 hover:dark:bg-gray-600 rounded-xl p-8"
                >
                  <div className="flex flex-col w-full">
                    <h4 className="text-center mt-2">{user.name}</h4>
                    <div className=" flex justify-center w-full py-4">
                      <Image
                        src={
                          user.imageUrl || '/public/BonheurSurSeine_logo.png'
                        }
                        alt={user.name}
                        className="w-32 h-32 object-cover rounded-full"
                        width={500}
                        height={500}
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
              <h3>
                📢 En 2 mots : &quot;Le bonheur est réel seulement quand il est
                partagé.&quot;
              </h3>
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
              que je remercie)
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
                <p>Autant d’opportunité de : </p>
                <ul className="list my-8">
                  <li>Faire découvrir et promouvoir la roue électrique.</li>
                  <li>Rencontrer d’autres passionnés.</li>
                  <li>
                    Partager des expériences autour de cette passion commune.
                  </li>
                  <li>
                    Découvrir d’autres façons de faire de la roue (freestyle,
                    randonneurs, racer, off road, acrobates, etc.).
                  </li>
                  <li>Participer à l’organiser d’événements.</li>
                </ul>
                <ReactPlayer
                  controls={true}
                  url={'https://www.youtube.com/watch?v=iQzrhgo2XiM'}
                  width="100%"
                  height="40%"
                />
              </aside>
            </div>
          </section>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Associations
