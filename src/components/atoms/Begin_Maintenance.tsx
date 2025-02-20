'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

const Maintenance = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="L'entretien'"
          title={<h3>L&apos;entretien</h3>}
          indicator={<span className="chevronAccordionItem">&lt;</span>}
        >
          <div className="blueBlock mb-8">
            <h3>
              🛠 Conserve ton véhicule en bon état ! C’est ta sécurité qui en
              dépend…
            </h3>
          </div>
          <p className="mb-8">
            Comme tout véhicule, les roues électriques ont besoin d&apos;un
            <strong> entretien régulier</strong> pour garantir leur durabilité
            et leur bon fonctionnement.
          </p>
          <p className="mb-8">
            <strong>Rappel :</strong> pour être utilisée sur voie publique, la
            roue doit être <span className="underline">bridée à 25km/h</span>{' '}
            par construction.
          </p>

          <h4>À retenir :</h4>
          <ul className="list mb-8">
            <li>
              Il est important de <strong>vérifier</strong> son engin avant
              chaque trajet.
            </li>
            <li>
              Révise le <strong>régulièrement</strong>. Sois attentif à tout
              bruit suspect.
            </li>
            <li>
              <strong>Chaque élément est essentiel</strong> : usure du pneu,
              pédales, éclairages, électronique, état et charge de la batterie,
              poussières, visseries...
            </li>
            <li>
              Vérifie attentivement la coque : identifie tout risque
              d’infiltration ou toute trace d’humidité.
            </li>
            <li>
              Vérifie régulièrement la <strong>pression du pneu</strong>.
            </li>
            <li>
              <strong>Prends soin de la batterie</strong> :
              <ul className="list pl-8 mt-1">
                <li>
                  Évite de l’exposer à des températures extrêmes (froid ou
                  chaud).
                </li>
                <li>
                  Ne laisse jamais la batterie se décharger complètement
                  (stocker entre 20%-80% en cas d’immobilisation prolongée).
                </li>
                <li>
                  Ne recharge pas immédiatement à chaud, et ne laisse pas la
                  charge sans surveillance.
                </li>
              </ul>
            </li>
          </ul>

          <div className="blueBlock">
            <h3>
              📢 L’eau s’infiltre facilement partout. L’électronique et les
              batteries n’aiment pas ça. Les conséquences peuvent être 
              <strong>immédiates ou à plus long terme</strong> (rouille,
              surchauffe, court-circuit et risque d’incendie).
            </h3>
          </div>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Maintenance
