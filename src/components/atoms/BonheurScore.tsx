'use client'

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Tooltip,
} from '@nextui-org/react'
import { Accordion, AccordionItem } from '@nextui-org/react'
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
  const categoryOrder = ['Centre-Ville', 'Agglomération', 'Loisir']

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
    <>
      <div className="px-4 sm:px-6 lg:px-8 mb-4">
        <h1 className="whitespace-break-spaces mb-6 mt-9">
          BonheurScore - Tests et Reviews
        </h1>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Bloc 1 */}
          <div className="bg-blue-50 dark:bg-cyan-900  px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-700">
            <h2 className="text-xl font-semibold text-fuchsia-700 dark:text-violet-400 mb-2">
              🔍 Quel modèle choisir&nbsp;?
            </h2>
            <p className="text-sm">
              Le{' '}
              <strong className="text-fuchsia-700 dark:text-violet-400">
                BonheurScore
              </strong>{' '}
              t&apos;aide à découvrir en un clin d&apos;œil ce que j&apos;ai
              pensé des{' '}
              <strong className="text-fuchsia-700 dark:text-violet-400">
                meilleures gyroroues
              </strong>{' '}
              du marché&nbsp;: notes,{' '}
              <Link
                href="https://www.youtube.com/c/BonheursurSeine"
                target="_blank"
                className="link-style font-bold text-fuchsia-700 dark:text-violet-400"
              >
                vidéos YouTube
              </Link>
              , usages, forces et faiblesses, praticité, équipements…
            </p>
            <p className="text-sm"></p>
          </div>

          {/* Bloc 2 */}
          <div className="bg-blue-50 dark:bg-cyan-900  px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-700">
            <h2 className="text-xl font-semibold text-fuchsia-700 dark:text-violet-400 mb-2">
              💬 Ton avis compte !
            </h2>
            <p className="text-sm">
              L&apos;objectif de mes tests est de t&apos;aider à trouver{' '}
              <strong className="text-fuchsia-700 dark:text-violet-400">
                la roue qui te conviendra le mieux
              </strong>
              , selon tes envies et ton usage.
            </p>
            <p className="mt-1 text-sm">
              Tu souhaites me partager ton ressenti&nbsp;?
            </p>
            <Link href="https://forms.office.com/r/5k7QAax6Xu" target="_blank">
              <button
                className="mt-2 px-4 py-2 text-white text-sm rounded-lg
                   bg-fuchsia-700     hover:bg-fuchsia-800
              dark:bg-violet-700 dark:hover:bg-violet-800 "
              >
                ✍️ Donne ton avis
              </button>
            </Link>
          </div>

          {/* Bloc 3 : Derniers ajouts ça se met à jour automatiquement*/}
          <div className="bg-blue-50 dark:bg-cyan-900 px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-700">
            <h2 className="text-xl font-semibold text-fuchsia-700 dark:text-violet-400 mb-2">
              📅 Derniers ajouts
            </h2>
            <ul className="list-disc ml-4 text-sm">
              {gyroroues
                .filter((g) => g.data.date) // on garde uniquement ceux avec date
                .sort(
                  (a, b) =>
                    new Date(b.data.date!).getTime() -
                    new Date(a.data.date!).getTime(),
                ) // on tri par date les plus récent (pas compris mais ça fonctionne)
                .slice(0, 3) // on garde uniquement 3 pour affichage ci-dessous
                .map((g) => (
                  <li
                    key={
                      g.data.constructeur || `${g.data.modele}-${g.data.date}`
                    }
                    className="text-sm"
                  >
                    {g.data.constructeur}&nbsp;
                    {g.data.modele} &ndash;{' '}
                    {moment(g.data.date).format('MMMM YYYY')}
                  </li>
                ))}
            </ul>
            <p className="mt-1 text-sm">
              🆙 Ce comparatif est mis à jour lors de mes essais. Pour découvrir
              toutes les gyroroues que je teste,{' '}
              <strong className=" text-fuchsia-700 dark:text-violet-400">
                reviens régulièrement
              </strong>
              .
              {/*t&apos;invite à <Link href="/eucgame"><strong className=" text-fuchsia-700 dark:text-fuchsia-400">régulièrement</strong>.</Link>*/}
            </p>
          </div>
        </div>

        {/*----------------------------------------------*/}
        {/*---------CAPSULES D'INTRODUCTION--------------*/}
        <section className="px-0 md:px-7 lg:px-14">
          <div className="mt-3 px-2 bg-blue-50 dark:bg-cyan-900 rounded-xl shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-700">
            <Accordion isCompact>
              <AccordionItem
                key="1"
                aria-label="Comment ça fonctionne ?"
                title={
                  <h4 className="ml-2 font-bold mt-1 mb-1">
                    📢 À propos du BonheurScore&nbsp;?
                  </h4>
                }
                indicator={
                  <strong className="chevronAccordionItem mr-4">
                    &lsaquo;
                  </strong>
                }
              >
                <div className="max-w-6xl mx-auto px-2 mb-1">
                  <p className="text-justify text-base mb-1">
                    Ces notes reflètent uniquement{' '}
                    <strong className="text-fuchsia-700 dark:text-violet-400">
                      ma vision
                    </strong>
                    ,{' '}
                    <strong className="text-fuchsia-700 dark:text-violet-400">
                      mon usage
                    </strong>{' '}
                    et{' '}
                    <strong className="text-fuchsia-700 dark:text-violet-400">
                      ma sensibilité
                    </strong>
                    . Je réalise mes tests terrain avec rigueur, centré sur
                    l&apos;expérience utilisateur en mobilité urbaine.
                  </p>
                  <ul className="compactlist2 ml-4 mb-1">
                    <li className="">
                      Mes notes ne sont pas une vérité en soi : elles illustrent
                      du mieux possible{' '}
                      <strong className="text-fuchsia-700 dark:text-violet-400">
                        mon avis et mes ressentis
                      </strong>
                      .
                    </li>
                    <li className="">
                      Dans toutes mes vidéos, je donne{' '}
                      <strong className="text-fuchsia-700 dark:text-violet-400">
                        librement mon avis
                      </strong>
                      , et j&apos;identifie au mieux les usages pour lesquels la
                      roue excelle.
                    </li>
                    <li className="">
                      Chaque roue, même la moins bien notée, m&apos;a offert de
                      vraies sensations de liberté.
                    </li>
                  </ul>
                  <p className="mt-1">
                    Pour en savoir plus sur la{' '}
                    <span className="text-fuchsia-700 dark:text-violet-400">
                      <strong>notation</strong>
                    </span>
                    , tu peux consulter :{' '}
                    <Link
                      href="https://www.youtube.com/watch?v=-oyKpFbDgR8"
                      target="_blank"
                      className="link-style text-fuchsia-700 dark:text-violet-400"
                    >
                      <strong>cette vidéo</strong> 🎥
                    </Link>
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/*--------------------------------------------------*/}
        {/*------------------REMERCIEMENTS-------------------*/}
        <section className="px-0 md:px-7 lg:px-14">
          <div className="mt-2 mb-4 bg-stone-50 dark:bg-zinc-700 rounded-lg shadow-md hover:shadow-lg transition-shadow pt-1 px-3">
            <p className="italic text-gray-900 dark:text-gray-300">
              <span className="mx-1 text-xs md:text-sm">
                Je remercie chaleureusement tous mes contributeurs et
                partenaires (ponctuels ou réguliers, passés, présents ou
                futurs). Grâce à ton soutien, je peux vivre cette belle aventure
                et réaliser ces tests avec enthousiasme et passion.
              </span>
            </p>
            <p className="text-center">
              (
              <a
                href="https://fr.tipeee.com/bonheur-sur-seine"
                target="_blank"
                rel="noopener noreferrer"
                className="underline italic text-gray-900 dark:text-gray-300 text-xs md:text-sm"
              >
                Ne clique pas ici
              </a>
              )
            </p>
          </div>
        </section>

        {/*----------------------------------------------*/}
        {/*AFFICHAGE DES 2 FILTES : MARQUES ET CATEGORIES*/}
        <div className="mt-4 flex justify-between items-center">
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
      <div className="py-1 px-2 sm:px-4 lg:px-6 space-y-2">
        {/*AFFICHAGE DES ROUES*/}
        {filteredGyroroues.map((gyroroue, index) => (
          <Card key={index} shadow="md" radius="lg" className="mb-1">
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
                <Chip
                  variant="shadow"
                  color="primary"
                  className="mr-0 mt-2 sm:mt-0 bg-indigo-600 text-white dark:bg-cyan-600 dark:text-white min-w-24 md:min-w-36"
                >
                  {/*CATEGORIE : Urbaine - Hybride - Loisir*/}
                  <p className="text-center">{gyroroue.data.profil}</p>
                </Chip>
              </div>
            </CardHeader>
            {/*SECONDE PARTIE : IMAGE ET COMMENTAIRE*/}
            <CardBody className="gap-0">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-0 mb-0 items-center">
                <div className="flex flex-col items-center sm:col-span-1">
                  {/*IMAGE DE LA ROUE*/}
                  <Image
                    priority={true}
                    src={gyroroue.data.photo.url!}
                    alt={gyroroue.data.photo.alt ?? 'Gyroroue Image'}
                    width={gyroroue.data.photo.dimensions?.width}
                    height={gyroroue.data.photo.dimensions?.height}
                    className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover bg-center"
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
                      className="center hover:font-semibold transition
                      hover:text-indigo-500
                      dark:hover:text-cyan-500"
                    >
                      Review&nbsp;Youtube
                    </Link>
                    ◀️
                  </p>
                </div>
                <div className="flex items-center sm:col-span-3">
                  {/*REVIEWS ET COMMENTAIRE SUR LA ROUE*/}
                  <div
                    className="ml-2 mr-2 text-gray-800 [&_strong]:text-indigo-500
                     dark:text-gray-50 dark:[&_strong]:text-cyan-500
                  [&_p]:text-xs [&_p]:sm:text-sm [&_p]:md:text-medium
                  [&_p]:text-justify "
                  >
                    {/*{gyroroue.data.commentaire}*/}
                    <PrismicRichText field={gyroroue.data.commentaire_new} />
                  </div>
                </div>
              </div>
            </CardBody>
            {/*TROISIEME PARTIE : NOTE ET POINTS*/}
            <CardFooter className="flex flex-col md:flex-row gap-1 items-center place-items-center mt-3 mb-2 p-0">
              {/* Colonne Note Globale */}
              <aside className="w-full md:w-1/3 flex items-center justify-center">
                <div className="relative rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                  <picture
                    className="absolute inset-0 rounded-full bg-transparent border-0"
                    style={{
                      backgroundImage: `url(${logo.src})`,
                      opacity: 0.2,
                      backgroundSize: 'cover',
                    }}
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 flex flex-col items-center w-full">
                    <p className="text-xs lg:text-xl font-extrabold text-black dark:text-gray-100">
                      Note Globale
                    </p>
                    <p className="text-2xl lg:text-3xl font-semibold text-red-600 dark:text-red-400">
                      {gyroroue.data.note}/10
                    </p>
                  </div>
                </div>
              </aside>
              {/* Colonne Critères */}
              <aside className="w-2/3 md:w-2/3 lg:w-3/5 grid grid-cols-3 gap-2 my-0 mb-1">
                {[
                  {
                    icon: FaTrophy,
                    label: 'Total Points',
                    survol: 'Total Points',
                    value: gyroroue.data.points,
                  },
                  {
                    icon: FaTools,
                    label: 'Equipement',
                    survol: 'Design, matériaux, éclairage, écran',
                    value: gyroroue.data.equipement,
                  },
                  {
                    icon: FaMagic,
                    label: 'Praticité',
                    survol: 'Trolley, discrétion, ergonomie, béquille',
                    value: gyroroue.data.praticite,
                  },
                  {
                    icon: FaCity,
                    label: 'En Ville',
                    survol: 'Au quotidien, maniabilité et conduite',
                    value: gyroroue.data.en_ville,
                  },
                  {
                    icon: FaRoad,
                    label: 'Sur Route',
                    survol: 'En loisir, fun et plaisir de conduite',
                    value: gyroroue.data.sur_route,
                  },
                  {
                    icon: SiSpringCreators,
                    label: 'Suspension',
                    survol: 'Oui / Non',
                    value: gyroroue.data.suspension ? 'Oui' : 'Non',
                  },
                ].map((item, idx) => (
                  <Tooltip
                    key={idx}
                    content={item.survol}
                    className="w-[150px] text-center text-xs shadow-lg py-1
                     bg-slate-100   dark:bg-cyan-700
                     text-indigo-600  dark:text-white"
                    offset={-17}
                  >
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
                            : 'text-indigo-600 dark:text-cyan-500'
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
