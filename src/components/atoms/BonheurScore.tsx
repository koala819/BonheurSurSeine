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
      <h1 className="whitespace-break-spaces">
        BonheurScore - tests et reviews
      </h1>
      <footer className="blueBlock mb-2">
        <h3 className="mb-4">
          📢 Ces notes ne sont le fruit que de ma vision, de mon usage et de ma
          sensibilité.
        </h3>
        Tu souhaites également me partager ton avis ?{' '}
        <Link
          href="https://forms.office.com/r/5k7QAax6Xu"
          target="_blank"
          className="link-style"
        >
          Remplis ce formulaire
        </Link>{' '}
        ! 📒
        <ul className="mt-0 mb-0">
          😉 Pour en savoir plus sur la <strong>notation</strong>, je
          t&apos;invite à voir cette{' '}
          <Link
            href="https://www.youtube.com/watch?v=-oyKpFbDgR8"
            target="_blank"
            className="link-style"
          >
            <strong>vidéo</strong>
          </Link>
          .
          <li className="list mt-2">
            Mes notes ne représentent pas une vérité en soi : elles illustrent
            juste du mieux possible mon avis personnel et mes ressentis.
          </li>
          <li className="list mt-1 mb-4">
            Même la roue la moins bien notée m&apos;a procuré, à chaque fois, le{' '}
            <strong>bonheur de rouler</strong>.
          </li>
        </ul>
        Pour avoir un éventail complet de toutes les roues que j&apos;ai pu
        tester, je t&apos;invite à revenir régulièrement.
      </footer>
      <p className="text-center mb-8 text-gray-600 dark:text-gray-300 ml-2 mr-2">
        <i>
          Je remercie tous mes partenaires (ponctuel ou régulier, passé, présent
          et futur) de m&apos;avoir donné la chance de tester ces merveilleuses
          machines.
        </i>
      </p>

      {gyroroues.map((gyroroue, index) => (
        <Card key={index} shadow="md" radius="lg" className="mb-3">
          {/*PREMIERE PARTIE : NOM, DATE ET CATEGORIE*/}
          <CardHeader className="gap-0">
            <div className="flex sm:flex-row justify-between items-center w-full">
              <div className="text-left sm:text-left">
                <h3 className="mb-0 font-semibold">
                  {/*NOM DU FABRICANT*/} {/*NOM DU MODELE*/}
                  {gyroroue.data.constructeur} {gyroroue.data.modele}
                </h3>
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  {/*DATE DU TEST*/}
                  {moment(gyroroue.data.date).format('DD MMMM YYYY')}
                </span>
              </div>
              <Chip color="primary" variant="shadow" className="mt-2 sm:mt-0">
                {/*CATEGORIE : Urbaine - Hybride - Loisir*/}
                {gyroroue.data.profil}
              </Chip>
            </div>
          </CardHeader>
          {/*SECONDE PARTIE : IMAGE ET COMMENTAIRE*/}
          <CardBody className="gap-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-0 mb-0 items-center">
              <div className="flex flex-col items-center sm:col-span-1">
                {/*IMAGE DE LA ROUE*/}
                <Image
                  priority={true}
                  src={gyroroue.data.photo.url!}
                  alt={gyroroue.data.photo.alt ?? 'Gyroroue Image'}
                  width={gyroroue.data.photo.dimensions?.width}
                  height={gyroroue.data.photo.dimensions?.height}
                  className="rounded-full w-40 h-40 sm:w-48 sm:h-48 object-cover bg-center"
                />
                {/*LIEN VERS LA VIDEO YOUTUBE*/}
                <p className="text-center mt-1 mb-0">
                  ▶️
                  <Link
                    href={
                      gyroroue.data.lien_video_youtube?.url ||
                      'https://dix31.com'
                    }
                    target="_blank"
                    className="link-style center"
                  >
                    Review Youtube
                  </Link>
                  ◀️
                </p>
              </div>
              <div className="flex items-center sm:col-span-2">
                {/*REVIEWS ET COMMENTAIRE SUR LA ROUE*/}
                <span className="text-gray-600 dark:text-gray-200 text-sm md:text-base">
                  {gyroroue.data.commentaire}
                </span>
              </div>
            </div>
          </CardBody>
          {/*TROISIEME PARTIE : NOTE ET POINTS*/}
          <CardFooter className="flex flex-col md:flex-col lg:flex-row gap-0 ml-2 mr-2 items-center">
            {/*COLONNE AVEC LA NOTE GLOBALE*/}
            <aside className="w-full lg:w-1/3 flex items-center justify-center mt-0 mb-1">
              <picture className="flex items-center justify-center w-full mt-0 mb-0">
                <div className="relative rounded-full w-24 h-24 lg:w-40 lg:h-40 mt-0">
                  <picture
                    className="absolute inset-0 rounded-full bg-transparent border-0"
                    style={{
                      backgroundImage: `url(${logo.src})`,
                      opacity: 0.2,
                      backgroundSize: 'cover',
                    }}
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 flex flex-col justify-center items-center w-full">
                    <p className="text-xs lg:text-xl font-extrabold text-black dark:text-gray-200">
                      Note Globale
                    </p>
                    <p className="text-3xl lg:text-4xl font-semibold text-red-600">
                      {/*NOTE GLOBALE SUR 10*/}
                      {gyroroue.data.note}
                    </p>
                  </div>
                </div>
              </picture>
            </aside>
            {/*3 COLONNES AVEC TOUS POINTS-EQUIPPEMENT-PRATICITE-VILLE-ROUTE-SUSPENSION*/}
            <aside className="w-1/2 lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 my-0 ">
              {[
                {
                  icon: FaTrophy,
                  label: 'Nbre de points',
                  value: gyroroue.data.points,
                },
                {
                  icon: FaTools,
                  label: 'Equipement',
                  value: gyroroue.data.equipement,
                },
                {
                  icon: FaMagic,
                  label: 'Praticité',
                  value: gyroroue.data.praticite,
                },
                {
                  icon: FaCity,
                  label: 'En Ville',
                  value: gyroroue.data.en_ville,
                },
                {
                  icon: FaRoad,
                  label: 'Sur Route',
                  value: gyroroue.data.sur_route,
                },
                {
                  icon: SiSpringCreators,
                  label: 'Suspension',
                  value: gyroroue.data.suspension ? 'Oui' : 'Non',
                },
              ].map((item, idx) => (
                <Tooltip key={idx} content={item.label}>
                  <div className="flex flex-col items-center">
                    <item.icon className="text-lg" />
                    <span className="text-xs font-semibold text-center">
                      {item.label}
                    </span>
                    <span
                      className={
                        item.label === 'Suspension' && !gyroroue.data.suspension
                          ? 'text-gray-500'
                          : 'text-green-700'
                      }
                    >
                      {item.value}
                    </span>
                  </div>
                </Tooltip>
              ))}
            </aside>
            {/*
            <aside className="lg:w-4/5 pt-8 lg:pt-0 lg:pl-8">
              <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                <Tooltip content="Nombre de points">
                  <div className="flex flex-col items-center">
                    <FaTrophy className="hidden sm:block" />
                    <span className="sm:hidden font-black">
                      Nombre de points
                    </span>
                    <span className="mb-4">

                      {gyroroue.data.points}
                    </span>
                  </div>
                </Tooltip>
                <Tooltip content="Equipement">
                  <div className="flex flex-col items-center">
                    <FaTools className="hidden sm:block" />
                    <span className="sm:hidden font-black">Equipement</span>
                    <span>

                      {gyroroue.data.equipement}
                    </span>
                  </div>
                </Tooltip>
                <Tooltip content="Praticité">
                  <div className="flex flex-col items-center">
                    <FaMagic className="hidden sm:block" />
                    <span className="sm:hidden font-black">Praticité</span>
                    <span>

                      {gyroroue.data.praticite}
                    </span>
                  </div>
                </Tooltip>
              </section>
              <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                <Tooltip content="En Ville">
                  <div className="flex flex-col items-center">
                    <FaCity className="hidden sm:block" />
                    <span className="sm:hidden font-black">En Ville</span>
                    <span>

                      {gyroroue.data.en_ville}
                    </span>
                  </div>
                </Tooltip>
                <Tooltip content="Sur Route">
                  <div className="flex flex-col items-center">
                    <FaRoad className="hidden sm:block" />
                    <span className="sm:hidden font-black">Sur Route</span>
                    <span>

                      {gyroroue.data.sur_route}
                    </span>
                  </div>
                </Tooltip>
                <Tooltip content="Suspension">
                  <div className="flex flex-col items-center">
                    <SiSpringCreators className="hidden sm:block" />
                    <span className="sm:hidden font-black">Suspension</span>
                    <span
                      className={
                        gyroroue.data.suspension
                          ? 'text-green-700'
                          : 'text-gray-500'
                      }
                    >

                      {gyroroue.data.suspension ? 'Oui' : 'Non'}
                    </span>
                  </div>
                </Tooltip>
              </section>
            </aside>
            {/*</div>*/}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
