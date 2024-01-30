const Choice = () => {
  return (
    <section>
      <h1>Choisir sa roue</h1>
      <div className="mb-8 flex flex-col md:flex-row items-center">
        <aside className="md:w-1/2 space-y-4 ">
          <p>
            L&apos;important est d&apos;avoir une roue adaptée à son
            utilisation.<strong> Le piège</strong>, ce serait de{' '}
            <strong>ne regarder que les spécifications techniques</strong> et de{' '}
            <strong>
              n&apos;être attiré que par les nouvelles roues qui arrivent
            </strong>{' '}
            sur le marché.
          </p>
          <p>
            Or, le choix se fait en fonction de ses goûts, de sa sensibilité, de
            sa situation, de son style de conduite et d&apos;autres{' '}
            <strong>critères personnels.</strong>
          </p>
        </aside>
        <aside className="md:w-1/2 blueBlock">
          <h3>
            📢 &quot;La meilleure roue, c’est celle qu’on a sous les pieds
            !&quot;
          </h3>
          <p>
            Pas besoin d’avoir la dernière roue du marché pour ressentir le
            bonheur de rouler.
          </p>
        </aside>
      </div>
      <p>
        J&apos;invite chacun, quand il le peut, à tester les roues pour se faire
        son propre avis.
      </p>
    </section>
  )
}

export default Choice
