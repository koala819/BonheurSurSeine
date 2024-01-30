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
          indicator={<span className="text-primary">&lt;</span>}
        >
          <div className="blueBlock mb-8">
            <h3>
              🔥 Les protections n’évitent pas le danger, la vigilance, oui !
            </h3>
          </div>
          <h3>Prudence est mère de sûreté</h3>
          <ul className="list-disc pl-4 space-y-4 mb-4">
            <li>
              Respecte le{' '}
              <span className="font-semibold">code de la route</span>{' '}
              (circulation, stationnement, équipement).
            </li>
            <li>
              Respecte les autres usagers (piétons, cyclistes, etc.), et met toi
              à leur place : pense à ce qu’ils peuvent ressentir en te voyant
              arriver.
            </li>
            <li>
              Anticipe les{' '}
              <span className="font-semibold">
                trajectoires (les tiennes et celles des autres usagers)
              </span>
              .
            </li>
            <li>
              Maitrise toujours ta{' '}
              <span className="font-semibold">vitesse</span> ! (Ne roule jamais
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
              <span className="font-semibold">Protège toi !</span>
            </li>
            <li>
              Le port du <span className="font-semibold">casque</span> (sans
              être obligatoire) est{' '}
              <span className="font-semibold">vivement recommandé</span>. Porter
              des gants ou des genouillères permet également de se protéger.
            </li>
            <li>
              <span className="font-semibold">Sois visible</span> mais n’aveugle
              pas les autres.
            </li>
            <li>
              Utilise une <span className="font-semibold">sonnette</span> pour
              signaler <span className="font-semibold">amicalement</span> ton
              approche et tes dépassements.
            </li>
            <li>
              Prend le temps de connaitre tes capacités, de{' '}
              <span className="font-semibold">connaitre ta roue</span>, et
              <span className="font-semibold">respecte là</span>.
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
