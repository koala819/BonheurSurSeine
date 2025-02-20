'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

const CommonSense = () => {
  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Le bon sens"
          title={<h3>Le bon sens</h3>}
          indicator={<strong className="chevronAccordionItem">&lt;</strong>}
        >
          <div className="blueBlock mb-8">
            <h3>
              🔥 Les protections n’évitent pas le danger, la vigilance, oui !
            </h3>
          </div>
          <h3>Prudence est mère de sûreté</h3>
          <ul className="list-disc pl-4 space-y-4 mb-4">
            <li>
              Respecte le <strong>code de la route</strong> (circulation,
              stationnement, équipement).
            </li>
            <li>
              Respecte les autres usagers (piétons, cyclistes, etc.), et met toi
              à leur place : pense à ce qu’ils peuvent ressentir en te voyant
              arriver.
            </li>
            <li>
              Anticipe les{' '}
              <strong>
                trajectoires (les tiennes et celles des autres usagers)
              </strong>
              .
            </li>
            <li>
              Maitrise toujours ta <strong>vitesse</strong> ! (Ne roule jamais
              plus vite que ce que tu peux freiner).
            </li>
          </ul>
          <div className="blueBlock mb-8">
            <h3>
              📢 Anticipe les situations à risque et fait preuve de prudence en
              toutes circonstances.
            </h3>
          </div>
          <h3>À retenir :</h3>
          <ul className="list-disc pl-4 space-y-4 mb-4">
            <li>
              <strong>Protège toi !</strong>
            </li>
            <li>
              Le port du <strong>casque</strong> (sans être obligatoire) est{' '}
              <strong>vivement recommandé</strong>. Porter des gants ou des
              genouillères permet également de se protéger.
            </li>
            <li>
              <strong>Sois visible</strong> mais n’aveugle pas les autres.
            </li>
            <li>
              Utilise une <strong>sonnette</strong> pour signaler{' '}
              <strong>amicalement</strong> ton approche et tes dépassements.
            </li>
            <li>
              Prend le temps de connaitre tes capacités, de{' '}
              <strong>connaitre ta roue</strong>, et
              <strong className="ml-1">respecte là</strong>.
            </li>
            <li>
              Je répète : connais bien les limites de ta roues et respecte les.
            </li>
          </ul>
          <div className="blueBlock">
            <h3>
              💟 Et n’oublie pas : bon comportement = bonne image = bonne route
              !
            </h3>
          </div>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default CommonSense
