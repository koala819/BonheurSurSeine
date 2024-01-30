'use client'

import { Checkbox } from '@nextui-org/react'

const Needs = () => {
  return (
    <section className="my-8 space-y-4">
      <h2 className="text-4xl font-semibold mb-4">
        Bien identifier ses besoins
      </h2>
      <div className="flex flex-col gap-4">
        <Checkbox color="primary">
          Je recherche une roue pour : essayer/apprendre ? pratiquer
          régulièrement ?
        </Checkbox>
        <Checkbox color="primary">
          Je recherche une roue pour : compléter/remplacer les transports en
          commun (aller du point A au point B) ? le loisir et se balader ? faire
          de très longs trajets ?
        </Checkbox>
        <Checkbox color="primary">
          Je recherche en priorité : le confort ? les équipements ? la
          performance ?
        </Checkbox>
        <Checkbox color="primary">
          Je recherche une roue avant tout munie d’une suspension ?
        </Checkbox>
        <Checkbox color="primary">
          Je recherche une roue : simple à entretenir ? ou suis-je prêt à
          bricoler ?
        </Checkbox>
        <Checkbox color="primary">
          Vais-je devoir souvent porter ma roue ? combien suis-je capable de
          soulever : 20kg ? 30kg ?
        </Checkbox>
        <Checkbox color="primary">
          Quel est mon budget : &lt;1500€ ? &lt;2500€ ? ou plus ?
        </Checkbox>
      </div>
    </section>
  )
}

export default Needs
