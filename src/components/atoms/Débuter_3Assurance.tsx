'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Image_assurance from '@/public/Image_assurance.jpg'

const Assurance = () => {
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'assurance') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('assurance')
      }
    } // Appel initial

    handleHashChange() // Écoute les changements de hash (clics internes)
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
  //CODE POUR SCROLL VERS L'ANCRAGE DEPUIS LA NAVBARBAR
  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    }
  }, [scrollTarget])

  return (
    <section
      id="assurance"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-600 rounded-lg p-4 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="L'assurance"
          title={<h3>🛡️ L&apos;assurance</h3>}
          indicator={
            <strong className="transition-transform">
              <svg
                className="mx-2 w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </strong>
          }
          classNames={{
            indicator: 'data-[open=true]:rotate-180 transition-transform',
          }}
        >
          <div className="mb-8 flex flex-col md:flex-row items-center">
            <aside className="md:w-3/5 space-y-4 mr-4">
              <div className="pinkBlock mb-0">
                <h3>
                  ✅ L&apos;assurance est{' '}
                  <span className="text-xl sm:text-xl md:text-2xl underline text-rose-600 dark:text-black font-semibold">
                    obligatoire&nbsp;!
                  </span>
                </h3>
                <span>
                  Si quelqu&apos;un te dit autre chose, soit il ment, soit il
                  est incompétent (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025043014"
                    target="_blank"
                    className="link-style"
                  >
                    L324-1
                  </Link>{' '}
                  du Code de la route).
                </span>
              </div>
            </aside>
            <aside className="md:w-2/5 text-center text-xs mt-3 mb-1">
              <Image
                src={Image_assurance}
                alt="Image_assurance"
                width={320}
                height={195}
                className="rounded-lg cursor-pointer shadow-md transition-shadow"
              />
            </aside>
          </div>

          <h3>À retenir :</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-left">
              <strong className="text-rose-600 dark:text-rose-500">
                La roue est un véhicule
              </strong>{' '}
              terrestre à moteur qui doit être assurée. Le type de contrat est
              au minimum en{' '}
              <strong className="text-rose-600 dark:text-rose-500">
                responsabilité civile
              </strong>
              .
            </li>

            <li className="">
              <i>Attention</i>, les contrats d&apos;assurance habitation ne
              couvrent généralement pas les EDPM, catégorie à laquelle
              appartiennent les roues. Il faut un{' '}
              <strong className="text-rose-600 dark:text-rose-500">
                contrat d&apos;assurance dédié
              </strong>{' '}
              (comme pour une moto ou une voiture).
            </li>
            <li className="">
              Chaque roue doit être assurée individuellement.{' '}
              <strong className="text-rose-600 dark:text-rose-500">
                Le contrat est lié au véhicule
              </strong>
              , pas à la personne&nbsp;:{' '}
              <strong className="text-rose-600 dark:text-rose-500">
                2&nbsp;véhicules = 2&nbsp;contrats
              </strong>
              . Les packs ou formules multi-roues sont rares, et il
              n&apos;existe pas d&apos;assurance &laquo;&nbsp;par
              personne&nbsp;&raquo; qui couvre automatiquement toutes les roues
              que vous utilisez.
            </li>
            <li className="">
              En l&apos;absence d&apos;assurance, tu risques une amende
              (jusqu&apos;à 3750€ -{' '}
              <Link
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025043014"
                target="_blank"
                className="link-style"
              >
                L324-2
              </Link>
              ), la confiscation du véhicule, et surtout des dizaines de
              milliers d&apos;euros à charge en cas de collision/blessure
              d&apos;un autre usager.
            </li>

            <li className="">
              En France, la carte verte (i.e. attestation d&apos;assurance) et
              la vignette verte (i.e. papillon vert) ont été officiellement
              supprimées le 1er avril 2024 (
              <Link
                href="https://www.service-public.fr/particuliers/actualites/A17230"
                target="_blank"
                className="link-style"
              >
                <i>pour les véhicules immatriculés</i>
              </Link>
              ).
              <br />
              Les EDPM (trottinettes, gyroroues) n&apos;ayant pas de plaque
              d&apos;immatriculation, ils n&apos;y sont pas enregistrés&nbsp;:
              la vignette{' '}
              <Link
                href="https://www.service-public.fr/particuliers/vosdroits/F1362"
                target="_blank"
                className="link-style"
              >
                doit être affichée
              </Link>{' '}
              sur le véhicule (
              <Link
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006812169"
                target="_blank"
                className="link-style"
              >
                R211-21-1
              </Link>{' '}
              et{' '}
              <Link
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006812176"
                target="_blank"
                className="link-style"
              >
                R211-21-5
              </Link>
              ), et il faut{' '}
              <strong className="text-rose-600 dark:text-rose-500">
                avoir sur soi l&apos;attestation d&apos;assurance
              </strong>{' '}
              (
              <Link
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048547657"
                target="_blank"
                className="link-style"
              >
                R211-21-14
              </Link>
              ).
            </li>
          </ul>
          {/*-----------------------------------------------------------*/}
          <div className="pinkBlock mb-4">
            <h4>
              📢 &laquo;&nbsp;S&apos;assurer, ce n&apos;est pas une question de
              sécurité, c&apos;est une question de
              responsabilité&nbsp;!&nbsp;&raquo;
            </h4>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            {/* Bloc 1 - Accident */}
            <div className="bg-stone-100 dark:bg-zinc-800 px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">
                🚨 Que faire en cas d&apos;accident&nbsp;?
              </h3>
              <p className="text-sm">
                Un accident génère toujours du stress. Même sans gravité,
                remplis systématiquement un constat amiable (l&apos;idéal est
                d&apos;en avoir un prérempli avec ses informations).
                <br />
                Pour savoir comment réagir, consulte cet{' '}
                <Link
                  href="https://www.anumme.fr/2020/02/29/edpm-nvei-que-faire-en-cas-daccident-guide-du-constat-amiable/"
                  target="_blank"
                  className="link-style text-sm font-semibold"
                >
                  article très complet rédigé par l&apos;ANUMME
                </Link>
                &nbsp;!
              </p>
            </div>

            {/* Bloc 2 - Assurance */}
            <div className="bg-stone-100 dark:bg-zinc-800 px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">
                💰 Le budget assurance
              </h3>
              <p className="text-sm">
                L&apos;assurance d&apos;un EDPM est accessible{' '}
                <span className="text-rose-600 dark:text-rose-500 text-sm font-semibold">
                  à partir de 5-10€/mois
                </span>{' '}
                (couverture RC). La majorité des compagnies proposent des
                formules variées, avec des niveaux de couverture adaptés aux
                besoins de chacun.
              </p>
            </div>
          </div>

          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            rédigé par{' '}
            <Link
              href={'https://linktr.ee/fabien.wheel'}
              passHref
              target="_blank"
              className="link-style"
            >
              Fabien.Wheel
            </Link>
            <br />
            dernière mise à jour : avril 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Assurance
