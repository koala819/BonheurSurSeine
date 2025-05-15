'use client'

import { Checkbox } from '@nextui-org/react'

const Needs = () => {
  return (
    <section className="my-8 space-y-2 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
      <h2>Bien identifier ses besoins</h2>
      <div className="blueBlock mb-8 mt-0">
        <h3 className="mb-4">
          ⚠️ &laquo; La roue parfaite n&apos;existe pas. &raquo;
        </h3>
        D&apos;expérience, chaque modèle excelle pour un usage précis, avec ses
        forces, ses qualités et ses faiblesses.
      </div>{' '}
      <p className="">
        Le choix est plus facile une fois ses{' '}
        <span className="text-emerald-600">
          <strong>besoins</strong>{' '}
        </span>
        et ses{' '}
        <span className="text-emerald-600">
          <strong>usages</strong>
        </span>{' '}
        correctement{' '}
        <span className="text-emerald-600">
          <strong>identifiés</strong>
        </span>
        .
      </p>
      <p>
        Voici{' '}
        <span className="text-emerald-600">
          <strong>
            <u>7 questions</u>
          </strong>
        </span>{' '}
        essentielles à se poser&nbsp;:
      </p>
      <div className="flex flex-col gap-4 ml-4">
        <Checkbox color="success">
          Je recherche une roue pour&nbsp;: essayer/apprendre&nbsp;? pratiquer
          régulièrement&nbsp;?
        </Checkbox>
        <Checkbox color="success">
          Je recherche une roue pour : compléter/remplacer les transports en
          commun (aller du point A au point B)&nbsp;? le loisir et se
          balader&nbsp;? faire de très longs trajets&nbsp;?
        </Checkbox>
        <Checkbox color="success">
          Je recherche en priorité&nbsp;: le confort&nbsp;? les
          équipements&nbsp;? la performance&nbsp;? la praticité&nbsp;?
        </Checkbox>
        <Checkbox color="success">
          Je recherche une roue avant tout munie d’une suspension&nbsp;?
        </Checkbox>
        <Checkbox color="success">
          Je recherche une roue&nbsp;: simple à entretenir&nbsp;? ou suis-je
          prêt à bricoler&nbsp;?
        </Checkbox>
        <Checkbox color="success">
          Vais-je devoir souvent porter ma roue&nbsp;? combien suis-je capable
          de soulever&nbsp;: 20kg&nbsp;? 30kg&nbsp;?
        </Checkbox>
        <Checkbox color="success">
          Quel est mon budget&nbsp;: &lt;1500€&nbsp;? &lt;2500€&nbsp;? ou
          plus&nbsp;?
        </Checkbox>
      </div>
      <div className="blueBlock mb-4 mt-4">
        <h3 className="mb-4">
          🔎 Cela va de soit, mais non, on ne peut pas tout avoir !
        </h3>
        Si l&apos;on souhaite conserver un objet compact/léger, il faudra
        forcément accepter de faire des concessions : batteries, suspension,
        puissance, équipements, matériaux…
      </div>{' '}
      <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
        <br />
        article mis à jour en février 2025
      </p>
    </section>
  )
}

export default Needs
