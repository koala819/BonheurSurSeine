'use client'

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Tooltip,
} from '@nextui-org/react'
import { FaCity, FaMagic, FaRoad, FaTools, FaTrophy } from 'react-icons/fa'
import { SiSpringCreators } from 'react-icons/si'

import Image from 'next/image'
import Link from 'next/link'

import { BonheurScoreProps } from '@/src/types/models'

import logo from '@/public/BonheurSurSeine_logo.png'
import moment from 'moment'
import 'moment/locale/fr'

export function BonheurScore({
  gyroroues,
}: {
  gyroroues: BonheurScoreProps[]
}) {
  moment.locale('fr')
  return (
    <div className="container mx-auto p-4">
      <div className="blueBlock mb-8">
        <h3>
          📢 Cette page nécessite beaucoup de travail pour être mise à jour
        </h3>
        <p>
          Pour avoir un éventail complet de toutes les roues que j&apos;ai pu
          tester, je t&apos;invite à revenir bientôt.
        </p>
      </div>
      {gyroroues.map((gyroroue, index) => (
        <Card key={index} shadow="md" radius="lg" className="mb-4">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <text className="flex-col">
                <div className="flex items-center justify-center">
                  <h3>{gyroroue.data.modele}</h3>
                  <h3 className="ml-2">{gyroroue.data.constructeur}</h3>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium text-xs">
                  {moment(gyroroue.data.date).format('DD MMMM YYYY')}
                </span>
              </text>
              <Chip color="primary" variant="shadow" className="ml-auto">
                {gyroroue.data.profil}
              </Chip>
            </div>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[25%_65%] gap-4">
              <div className="flex justify-center p-8">
                <Image
                  priority={true}
                  src={gyroroue.data.photo.url!}
                  alt={gyroroue.data.photo.alt ?? 'Gyroroue Image'}
                  width={gyroroue.data.photo.dimensions?.width}
                  height={gyroroue.data.photo.dimensions?.height}
                  className="rounded-full w-48 h-48 object-cover"
                />
              </div>
              <div className="flex items-center">
                <p className="text-gray-600 dark:text-gray-200 text-sm md:text-base my-2 mb-8">
                  {gyroroue.data.commentaire}
                </p>
              </div>
            </div>
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <Tooltip content="Nombre de points">
                <div className="flex flex-col items-center">
                  <FaTrophy className="hidden sm:block" />
                  <span className="sm:hidden font-black">Nombre de points</span>
                  <span>{gyroroue.data.points}</span>
                </div>
              </Tooltip>
              <Tooltip content="Equipement">
                <div className="flex flex-col items-center">
                  <FaTools className="hidden sm:block" />
                  <span className="sm:hidden font-black">Equipement</span>
                  <span>{gyroroue.data.equipement}</span>
                </div>
              </Tooltip>
              <Tooltip content="Praticité">
                <div className="flex flex-col items-center">
                  <FaMagic className="hidden sm:block" />
                  <span className="sm:hidden font-black">Praticité</span>
                  <span>{gyroroue.data.praticite}</span>
                </div>
              </Tooltip>
              <Tooltip content="En Ville">
                <div className="flex flex-col items-center">
                  <FaCity className="hidden sm:block" />
                  <span className="sm:hidden font-black">En Ville</span>
                  <span>{gyroroue.data.en_ville}</span>
                </div>
              </Tooltip>
              <Tooltip content="Sur Route">
                <div className="flex flex-col items-center">
                  <FaRoad className="hidden sm:block" />
                  <span className="sm:hidden font-black">Sur Route</span>
                  <span>{gyroroue.data.sur_route}</span>
                </div>
              </Tooltip>
              <Tooltip content="Suspension">
                <div className="flex flex-col items-center">
                  <SiSpringCreators className="hidden sm:block" />
                  <span className="sm:hidden font-black">Suspension</span>
                  <span
                    className={
                      gyroroue.data.suspension
                        ? 'text-green-500'
                        : 'text-red-500'
                    }
                  >
                    {gyroroue.data.suspension ? 'Oui' : 'Non'}
                  </span>
                </div>
              </Tooltip>
            </section>
          </CardBody>
          <CardFooter>
            <div className="flex-col items-center justify-center w-full space-y-8">
              <picture className="flex items-center justify-center w-full ">
                <div className="relative rounded-full w-28 h-28 md:w-44 md:h-44">
                  <picture
                    className="absolute inset-0 rounded-full bg-transparent border-0"
                    style={{
                      backgroundImage: `url(${logo.src})`,
                      opacity: 0.2,
                      backgroundSize: 'cover',
                    }}
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full flex flex-col justify-center items-center">
                    <p className="text-sm md:text-xl font-extrabold text-black dark:text-gray-200">
                      Note Globale
                    </p>
                    <p className="text-3xl md:text-5xl font-semibold text-red-500">
                      {gyroroue.data.note}
                    </p>
                  </div>
                </div>
              </picture>
              <Link
                href={
                  gyroroue.data.lien_video_youtube?.url || 'https://dix31.com'
                }
                target="_blank"
                className="link-style flex justify-center w-full"
              >
                <p className=" text-center">
                  Retrouve l&apos;essai de cette roue sur ma chaîne Youtube
                </p>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
      <footer className="blueBlock mb-8">
        <h3>
          📢 &quot;Ces notes sont le fruit de ma vision, de mon usage et de ma
          sensibilité. &quot;
        </h3>
        <p>
          Maintenant, tu peux cliquer{' '}
          <Link
            href="https://forms.office.com/r/5k7QAax6Xu"
            target="_blank"
            className="link-style"
          >
            ICI
          </Link>{' '}
          pour donner ton avis, à toi !
        </p>
        <ul className="list mt-8">
          <li>
            Pour en savoir plus sur la notation, je t’invite à voir{' '}
            <Link
              href="https://www.youtube.com/watch?v=-oyKpFbDgR8"
              target="_blank"
              className="link-style"
            >
              cette vidéo
            </Link>
            .
          </li>
          <li>
            Mes notes ne représentent donc pas une vérité en soi : elles
            illustrent du mieux possible mon avis personnel et mes ressentis.
          </li>
          <li>
            Même la moins bien notée d&apos;entre elles m&apos;a, à chaque fois,
            procuré le bonheur de rouler.
          </li>
        </ul>
      </footer>
      <p className="text-center">
        Je remercie tous mes partenaires (ponctuel ou régulier, passé, présent
        et futur) de m&apos;avoir donner la chance de tester ces merveilleuses
        machines.
      </p>
    </div>
  )
}
