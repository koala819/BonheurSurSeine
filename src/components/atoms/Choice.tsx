const Choice = () => {
  return (
    <section className="mb-8">
      <h1 className="text-4xl font-semibold mb-4">Choisir sa roue</h1>
      <div className="mb-8 flex flex-col-reverse md:flex-row items-center">
        <aside className="md:w-1/2 text-center md:text-left space-y-4 ">
          <p>
            L&apos;important est d&apos;avoir une roue adaptée à son
            utilisation.<span className="font-semibold"> Le piège</span>, ce
            serait de{' '}
            <span className="font-semibold">
              ne regarder que les spécifications techniques
            </span>{' '}
            et de{' '}
            <span className="font-semibold">
              n&apos;être attiré que par les nouvelles roues qui arrivent
            </span>{' '}
            sur le marché.
          </p>
          <p>
            Or, le choix se fait en fonction de ses goûts, de sa sensibilité, de
            sa situation, de son style de conduite et d&apos;autres{' '}
            <span className="font-semibold">critères personnels.</span>
          </p>
        </aside>
        <aside className="md:w-1/2 md:ml-6 mt-4 md:mt-0 bg-blue-100 dark:bg-cyan-800 p-4 rounded space-y-8">
          <p className="font-semibold">
            📢 &quot;La meilleure roue, c’est celle qu’on a sous les pieds
            !&quot;
          </p>
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
