'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
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
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="L'assurance"
          title={<h3>🛡️ Assurance</h3>}
          indicator={<span className="chevronAccordionItem">&lsaquo;</span>}
        >
          <div className="mb-8 flex flex-col md:flex-row items-center">
            <aside className="md:w-3/5 space-y-4 mr-4">
              <div className="blueBlock mb-0">
                <h3>
                  ☑️ L&apos;assurance est{' '}
                  <span className="text-xl sm:text-xl md:text-2xl underline text-brown-500">
                    obligatoire
                  </span>
                  &nbsp;! (
                  <Link
                    href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025043014"
                    target="_blank"
                    className="link-style"
                  >
                    L324-1
                  </Link>
                  )
                </h3>
                <span>
                  Si quelqu&apos;un te dit autre chose, soit il ment, soit il
                  est incompétent.
                </span>
              </div>
            </aside>
            <aside className="md:w-2/5 text-center text-xs mt-1 mb-1">
              <Image
                src={Image_assurance}
                alt="Image_assurance"
                width={320}
                height={195}
                className="rounded-lg cursor-pointer"
              />
            </aside>
          </div>

          <h3>À retenir :</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              La roue est un <strong>véhicule terrestre à moteur</strong> qui
              doit être assurée. Le type de contrat est au minimum en{' '}
              <strong className="text-brown-500">responsabilité civile</strong>.
            </li>

            <li>
              La vignette (papillon vert){' '}
              <Link
                href="https://www.service-public.fr/particuliers/vosdroits/F1362"
                target="_blank"
                className="link-style"
              >
                doit être affichée
              </Link>{' '}
              sur le véhicule (
              <Link
                href="https://www.service-public.fr/particuliers/actualites/A17230"
                target="_blank"
                className="link-style"
              >
                <i>à la différence des véhicules immatriculées</i>
              </Link>
              , articles{' '}
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
              ), en plus d’avoir sur soi l&apos;attestation d&apos;assurance
              (carte verte -{' '}
              <Link
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048547657"
                target="_blank"
                className="link-style"
              >
                R211-21-14
              </Link>
              ).
            </li>
            <li>
              <i>Attention</i>, les contrats d&apos;assurance habitation ne
              couvrent généralement pas les EDPM, catégorie à laquelle
              appartiennent les roues. Il faut un{' '}
              <strong className="text-brown-500">
                contrat d&apos;assurance dédié
              </strong>{' '}
              (comme pour une moto ou une voiture).
            </li>
            <li>
              Chaque roue doit être assurée individuellement.{' '}
              <strong>
                Le contrat est lié au véhicule, pas à la personne &nbsp;:
                2&nbsp;véhicules = 2&nbsp;contrats
              </strong>
              . Les packs ou formules multi-roue sont rares, et il n&apos;existe
              pas d&apos;assurance &laquo;&nbsp;par personne&nbsp;&raquo; qui
              couvre automatiquement toutes les roues que vous utilisez.
            </li>
            <li>
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
          </ul>
          <div className="yellowBlock mb-6">
            <h4>
              📢 &laquo;&nbsp;S&apos;assurer, ce n&apos;est pas une question de
              sécurité, c&apos;est une question de
              responsabilité&nbsp;!&nbsp;&raquo;
            </h4>
          </div>
          <p>
            🚨 <b>Comment réagir en cas d&apos;accident&nbsp;?</b> Même sans
            gravité, un accident génère toujours du stress : remplissez
            systématiquement un constat amiable (l&apos;idéal est d&apos;en
            avoir 1 prérempli avec ses informations d&apos;assurance).
            <br />
            Pour en savoir plus, consultez cet{' '}
            <Link
              href="https://www.anumme.fr/2020/02/29/edpm-nvei-que-faire-en-cas-daccident-guide-du-constat-amiable/"
              target="_blank"
              className="link-style"
            >
              article très complet rédigé par l&apos;ANUMME
            </Link>
            &nbsp;!
          </p>
          <p className="mt-3">
            💰 <b>Le budget ?</b> Assurer un EDPM coûte 5-10€/mois. La quasi
            totalité des assureurs propose des contrats adaptés. Tu trouveras un{' '}
            <Link href="/promo" className="link-style">
              code Promo
            </Link>{' '}
            à utiliser chez Wizzas, un courtier en assurance spécialisé et
            partenaire de la chaine.
          </p>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article mis à jour en avril 2025
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Assurance
