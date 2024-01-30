import Link from 'next/link'

const Compare = () => {
  return (
    <section className="my-8 space-y-4">
      <h2 className="text-4xl font-semibold mb-4">Comparer</h2>
      <div className="md:ml-6 mt-4 md:mt-0 bg-blue-100 dark:bg-cyan-800 p-4 rounded space-y-8">
        <p className="font-semibold">
          📢 &quot;Choisir, c’est aussi renoncer…&quot;
        </p>
        <p>
          Pour faire un choix éclairé, il faut peser les avantages et les
          inconvénients, et tenir compte de ses contraintes.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">➡️ Pas si simple</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Bien que petit, le marché propose énormément de modèles. Certaines
            marques enchaînent les nouveautés et renouvellent constamment leur
            gamme.
          </li>
          <li>
            Les fabricants et les magasins affichent parfois des spécifications
            différentes (valeurs, formats ou unités de mesure).
          </li>
          <li>
            Les chiffres fabricants sont parfois trompeurs, et les autonomies
            annoncées sont toujours surévaluées (il faut parfois diviser par 2).
            Rappel : l&apos;autonomie est tributaire de nombreux paramètres
            (poids du wheeler, vitesse, température, profil et nature du
            trajet…).
          </li>
          <li>
            Certains modèles changent légèrement avec le temps (esthétique ou
            technique) selon le lot de production (on appelle cela les
            *batchs*).
          </li>
        </ul>
      </div>

      <div className="pt-8">
        <h2 className="text-xl font-semibold mb-4">
          ➡️ Mes reviews et le BonheurScore
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            La notation{' '}
            <Link
              href="/BonheurScore"
              className="underline hover:text-blue-500"
            >
              BonheurScore
            </Link>{' '}
            permet de savoir en synthèse ce que j&apos;ai pensé de chaque roue
            que j&apos;ai testée.
          </li>
          <li>
            Dans toutes{' '}
            <Link
              href="https://www.youtube.com/@BonheursurSeine"
              className="underline hover:text-blue-500"
              target="_blank"
            >
              mes vidéos
            </Link>
            , je donne librement mon avis et j&apos;identifie au mieux les
            usages pour lesquels la roue excelle.
          </li>
        </ul>
      </div>

      <div className="pt-8">
        <h2 className="text-xl font-semibold mb-4">➡️ EUC Finder</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Ce projet (auquel je participe avec{' '}
            <Link
              href="https://www.instagram.com/rafa.pgarcia"
              className="underline hover:text-blue-500"
              target="_blank"
            >
              @rafa.pgarcia
            </Link>{' '}
            et{' '}
            <Link
              href="https://www.instagram.com/fabien.wheel"
              className="underline hover:text-blue-500"
              target="_blank"
            >
              @Fabien.Wheel
            </Link>
            ) permet de consulter l&apos;ensemble des modèles dans un format
            standardisé.
          </li>
          <li>
            C&apos;est actuellement le meilleur outil pour faire des
            comparaisons. ⇒{' '}
            <Link
              href="https://finder.eucfinder.com/fr"
              className="underline hover:text-blue-500"
              target="_blank"
            >
              Accès direct au comparateur
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Compare
