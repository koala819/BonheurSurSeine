'use client'

import { Checkbox } from '@nextui-org/react'

const Needs = () => {
  return (
    <section className="my-8 space-y-2 bg-white  dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <h2>Bien identifier ses besoins</h2>
      <p>
        Le choix est plus facile une fois ses <strong>besoins</strong> et ses{' '}
        <strong>usages</strong> correctement <strong>identifiés</strong>.<br />
        Voici{' '}
        <strong>
          <u>7 questions</u>
        </strong>{' '}
        essentielles à se poser&nbsp;:
      </p>
      <div className="flex flex-col gap-4">
        <Checkbox color="primary">
          Je recherche une roue pour&nbsp;: essayer/apprendre&nbsp;? pratiquer
          régulièrement&nbsp;?
        </Checkbox>
        <Checkbox color="primary">
          Je recherche une roue pour : compléter/remplacer les transports en
          commun (aller du point A au point B)&nbsp;? le loisir et se
          balader&nbsp;? faire de très longs trajets&nbsp;?
        </Checkbox>
        <Checkbox color="primary">
          Je recherche en priorité&nbsp;: le confort&nbsp;? les
          équipements&nbsp;? la performance&nbsp;?
        </Checkbox>
        <Checkbox color="primary">
          Je recherche une roue avant tout munie d’une suspension&nbsp;?
        </Checkbox>
        <Checkbox color="primary">
          Je recherche une roue&nbsp;: simple à entretenir&nbsp;? ou suis-je
          prêt à bricoler&nbsp;?
        </Checkbox>
        <Checkbox color="primary">
          Vais-je devoir souvent porter ma roue&nbsp;? combien suis-je capable
          de soulever&nbsp;: 20kg&nbsp;? 30kg&nbsp;?
        </Checkbox>
        <Checkbox color="primary">
          Quel est mon budget&nbsp;: &lt;1500€&nbsp;? &lt;2500€&nbsp;? ou
          plus&nbsp;?
        </Checkbox>
      </div>
    </section>
  )
}

export default Needs
