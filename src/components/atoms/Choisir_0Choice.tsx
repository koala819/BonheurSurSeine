const Choice = () => {
  return (
    <section>
      <h1>Choisir sa roue</h1>
      <div className="mb-8 flex flex-col md:flex-row items-center">
        <aside className="md:w-1/2 space-y-4 mr-4">
          <p className="text-justify">
            <strong className="text-blue-800 dark:text-blue-300">
              L&apos;important est d&apos;avoir une roue adaptée à son
              utilisation
            </strong>
            . <br /> Le <strong>piège</strong> serait de ne{' '}
            <strong>regarder que les spécifications techniques</strong> et de
            n&apos;être attiré <strong>que par les nouvelles roues</strong> qui
            arrivent sur le marché.
            <br />
            <br /> D&apos;anciens modèles, sortis il y a déjà plusieurs années,
            constituent encore aujourd&apos;hui des choix tout à fait
            pertinents.
          </p>
          <p className="text-justify">
            Le choix se fait en fonction de ses goûts, de son{' '}
            <strong>utilisation</strong>, de sa sensibilité, de sa situation, de
            son style de conduite, et d&apos;autres{' '}
            <strong>critères personnels.</strong>
          </p>
        </aside>
        <aside className="md:w-1/2 blueBlock">
          <h3 className="mb-4">
            📢 &laquo;&nbsp;La meilleure roue, c&apos;est celle qu&apos;on a
            sous les pieds&nbsp;!&nbsp;&raquo;
          </h3>
          {'  '}
          😉 Pas besoin d&apos;avoir la dernière roue pour ressentir le{' '}
          <strong>bonheur de rouler</strong>. <br />
          {'  '}⚠️ L&apos;important est d&apos;avoir une{' '}
          <strong className="text-blue-800 dark:text-blue-300">
            roue adaptée à son usage
          </strong>
          .
        </aside>
      </div>
      <p>
        ➡️ J&apos;invite chacun, quand il le peut, à{' '}
        <strong className="text-blue-800 dark:text-blue-300">
          tester les roues pour se faire son propre avis
        </strong>
        .
      </p>
    </section>
  )
}

export default Choice
