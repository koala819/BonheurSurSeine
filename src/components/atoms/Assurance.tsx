'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

import Link from 'next/link'

const Assurance = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="L'assurance"
          title={<h3>L&apos;assurance</h3>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <div className="blueBlock mb-8">
            <h3>
              🛡️ L&apos;assurance est{' '}
              <span className="text-xl sm:text-xl md:text-2xl underline">
                obligatoire
              </span>{' '}
              !
              <Link
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025043014"
                target="_blank"
                className="link-style"
              >
                (L324-1)
              </Link>
            </h3>
            <span>
              Si quelqu&apos;un te dit autre chose, soit il ment, soit il est
              incompétent.
            </span>
          </div>
          <h3>À retenir :</h3>
          <ul className="list-disc pl-4 space-y-4 mb-4">
            <li>
              La roue est un <strong>véhicule terrestre à moteur</strong> et,
              elle doit être assurée. Le type de contrat est au minimum en{' '}
              <strong className="text-brown-500">responsabilité civile</strong>.
            </li>
            <li>La vignette (papillon vert) doit être affichée.</li>
            <li>
              Attention, les contrats d’assurance habitation ne couvrent
              généralement pas les EDPM, catégorie à laquelle appartiennent les
              roues. Il faut un contrat d’assurance dédié (comme pour une moto
              ou une voiture).
            </li>
            <li>
              En l&apos;absence d’assurance, tu risques une amende (jusqu’à
              3750€ -
              <Link
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025043014"
                target="_blank"
                className="link-style"
              >
                L324-2
              </Link>
              ), la confiscation du véhicule, et surtout des dizaines de
              milliers d’euros à charge en cas de collision/blessure d’un autre
              usager.
            </li>
          </ul>
          <div className="blueBlock mb-8">
            <h3>
              📢 “S&apos;assurer, ce n&apos;est pas une question de sécurité,
              c&apos;est une question de responsabilité !”
            </h3>
          </div>
          <p>
            Assurer un EDPM coûte 5-10€/mois. La quasi totalité des assureurs
            propose des contrats d’assurance adaptés. Tu trouveras un{' '}
            <Link href="/promo" className="link-style">
              code Promo
            </Link>{' '}
            à utiliser chez Wizzas, un courtier en assurance spécialisé et
            partenaire de la chaine.
          </p>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
            article rédigé en janvier 2024
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Assurance
