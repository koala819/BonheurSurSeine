const Choice = () => {
  return (
    <section>
      <h1>Choisir sa roue</h1>
      <div className="mb-8 flex flex-col md:flex-row items-center">
        <aside className="md:w-1/2 space-y-4 mr-4">
          <p>
            L&apos;important est d&apos;avoir une roue adaptée à son
            utilisation. <br /> Le <strong>piège</strong>, ce ne serait que de{' '}
            <strong>regarder que les spécifications techniques</strong> et de
            n&apos;être attiré <strong>que par les nouvelles roues</strong> qui
            arrivent sur le marché.
          </p>
          <p>
            Le choix se fait en fonction de ses goûts, de son{' '}
            <strong>utilisation</strong>, de sa sensibilité, de sa situation, de
            son style de conduite, et d&apos;autres{' '}
            <strong>critères personnels.</strong>
          </p>
        </aside>
        <aside className="md:w-1/2 blueBlock">
          <h3 className="mb-4">
            📢 &laquo;&nbsp;La meilleure roue, c&apos;est celle qu&apos;on a
            sous les pieds !&nbsp;&raquo;
          </h3>
          {'  '}
          😉 Pas besoin d&apos;avoir la dernière roue pour ressentir le{' '}
          <strong>bonheur de rouler</strong>. <br />
          {'  '}⚠️ L&apos;important est d&apos;avoir une{' '}
          <strong>roue adaptée</strong> à son usage.
        </aside>
      </div>
      <p>
        ➡️ J&apos;invite chacun, quand il le peut,{' '}
        <strong className="text-blue-800 dark:text-blue-200">
          à tester les roues pour se faire son propre avis
        </strong>
        .
      </p>
    </section>
  )
}

export default Choice
