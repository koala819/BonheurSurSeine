'use client'

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Tooltip,
} from '@nextui-org/react'
import { PrismicRichText } from '@prismicio/react'
import { useState } from 'react'
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

  /*PREPARATION DES LISTES DES 2 FILTRES = valeurs uniques et triées*/
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const categoryOrder = ['Urbaine', 'Hybride', 'Loisir']

  const uniqueBrands = Array.from(
    new Set(gyroroues.map((g) => g.data.constructeur).sort()),
  )
  const uniqueCategories = Array.from(
    new Set(
      gyroroues
        .map((g) => g.data.profil)
        .filter((p): p is string => p !== null)
        .sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)),
    ),
  )

  /*DEFINITION DU FILTRE*/
  const filteredGyroroues = gyroroues.filter(
    (g) =>
      (selectedBrand ? g.data.constructeur === selectedBrand : true) &&
      (selectedCategory ? g.data.profil === selectedCategory : true),
  )

  /*PAGE BONHEURSCORE*/
  return (
    // <div className="container mx-auto p-4">
    <>
      <div className="py-1 px-4 sm:px-6 lg:px-8 space-y-1">
        <h1 className="whitespace-break-spaces mb-6 mt-9">
          BonheurScore - tests et reviews
        </h1>

        {/*CAPSULES D'INTRODUCTION*/}
        <footer className="blueBlocknoteBSS space-y-0 p-2">
          <h3 className="mb-3">
            📢 Ces notes ne sont le fruit que de ma vision, de mon usage et de
            ma sensibilité.
          </h3>
          <p>
            Pour en savoir plus sur la{' '}
            <span className="text-fuchsia-700 dark:text-fuchsia-400">
              <strong>notation</strong>
            </span>
            , je t&apos;invite à voir{' '}
            <Link
              href="https://www.youtube.com/watch?v=-oyKpFbDgR8"
              target="_blank"
              className="link-style"
            >
              <span className="text-fuchsia-700 dark:text-fuchsia-400">
                <strong>cette vidéo</strong>
              </span>
            </Link>
            .😉
          </p>
          <ul className="ml-8">
            <li className="list-disc">
              Mes notes ne sont pas une vérité en soi : elles illustrent juste
              du mieux possible{' '}
              <span className="text-fuchsia-700 dark:text-fuchsia-400">
                <strong>ce que j&apos;ai pensé</strong>
              </span>{' '}
              (mon avis personnel et mes ressentis).
            </li>
            <li className="list-disc">
              Dans toutes mes vidéos, je donne{' '}
              <span className="text-fuchsia-700 dark:text-fuchsia-400">
                <strong>librement mon avis</strong>
              </span>
              , et j&apos;identifie au mieux les{' '}
              <span className="text-fuchsia-700 dark:text-fuchsia-400">
                <strong>usages</strong>
              </span>{' '}
              pour lesquels la roue excelle.
            </li>
            <li className="list-disc">
              Même la roue la moins bien notée m&apos;a procuré, à chaque fois,
              le{' '}
              <span className="text-fuchsia-700 dark:text-fuchsia-400">
                <strong>bonheur de rouler</strong>
              </span>
              .
            </li>
          </ul>

          <p className="">
            <br />
            Tu souhaites également me partager ton avis&nbsp;?{' '}
            <Link
              href="https://forms.office.com/r/5k7QAax6Xu"
              target="_blank"
              className="link-style"
            >
              Remplis ce formulaire
            </Link>{' '}
            &nbsp;!&nbsp;📒
          </p>

          <p className="mb-0">
            🆙 Et pour avoir un éventail complet des roues que je teste, je
            t&apos;invite à revenir régulièrement.
          </p>
        </footer>
        <p className="text-center text-gray-600 dark:text-gray-300 ml-2 mr-2">
          <i>
            Je remercie tous mes tipeurs et partenaires (ponctuel, régulier,
            passé, présent et futur) de me permettre de pouvoir faire tous ces
            tests.
            <br />(
            <Link
              href="https://fr.tipeee.com/bonheur-sur-seine"
              target="_blank"
              className="link-style"
            >
              Ne clique pas ici
            </Link>
            )
          </i>
        </p>
        {/*AFFICHAGE DES 2 FILTES : MARQUES ET CATEGORIES*/}
        <div className="mb-2 flex justify-between items-center">
          <div>
            <label
              htmlFor="brand-filter"
              className="block text-xs font-medium text-gray-700 dark:text-gray-400"
            >
              Filtrer par marque :
            </label>
            <select
              id="brand-filter"
              className="mt-1 p-1.5 border border-gray-300 rounded-md shadow-sm text-small"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">Toutes les marques</option>
              {uniqueBrands.map((constructeur) => (
                <option key={constructeur ?? ''} value={constructeur ?? ''}>
                  {constructeur}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="category-filter"
              className="block text-xs font-medium text-gray-700 text-right dark:text-gray-400"
            >
              Filtrer par catégorie :
            </label>
            <select
              id="category-filter"
              className="mt-1 p-1.5 border border-gray-300 rounded-md shadow-sm text-right text-small"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Toutes les catégories</option>
              {uniqueCategories.map((profil) => (
                <option key={profil ?? ''} value={profil ?? ''}>
                  {profil}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/*SECONDE PARTIE AVEC LES NOTATIONS*/}
      <div className="py-1 px-4 sm:px-6 lg:px-8 space-y-8">
        {/*AFFICHAGE DES ROUES*/}
        {filteredGyroroues.map((gyroroue, index) => (
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-0 mb-0 items-center">
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
                  <span className="text-gray-600 dark:text-gray-200 text-sm sm:text-base md:text-base">
                    {/*{gyroroue.data.commentaire}*/}
                    <PrismicRichText field={gyroroue.data.commentaire_new} />
                  </span>
                </div>
              </div>
            </CardBody>
            {/*TROISIEME PARTIE : NOTE ET POINTS*/}
            <CardFooter className="flex flex-col md:flex-col lg:flex-row gap-0 ml-1 mr-1 items-center">
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
                      <p className="text-2xl lg:text-3xl font-semibold text-red-600">
                        {/*NOTE GLOBALE SUR 10*/}
                        {gyroroue.data.note}/10
                      </p>
                    </div>
                  </div>
                </picture>
              </aside>
              {/*3 COLONNES AVEC TOUS POINTS-EQUIPPEMENT-PRATICITE-VILLE-ROUTE-SUSPENSION*/}
              <aside className="w-2/3 lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 my-0">
                {[
                  {
                    icon: FaTrophy,
                    label: 'Total Points',
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
                          item.label === 'Suspension' &&
                          !gyroroue.data.suspension
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
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
