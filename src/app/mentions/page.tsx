import Link from "next/link";

export default function Page() {
  return (
    <section className='text-gray-700 dark:text-white '>
      <div className='container px-4 mb-20 mt-20 mx-auto '>
        <h1 className='text-blue-500 dark:text-cyan-500 text-2xl text-center mb-12 uppercase font-bold'>
          Mentions légales
        </h1>

        <div className='flex flex-col space-y-4'>
          <p>
            <span className='font-bold underline'>Nom du site web :</span>{" "}
            Bonheur Sur Seine
          </p>
          <p>
            <span className='font-bold underline'>Numéro de Siret :</span>{" "}
            80294141900011
          </p>
          <p>
            <span className='font-bold underline'>
              Directeur de la publication :
            </span>{" "}
            Raphaël L.
          </p>
          <p>
            <span className='font-bold underline'>Activité :</span> Se déplacer
            en roue change la perception de la mobilité !!
          </p>
          <p>
            <span className='font-bold underline'>URL :</span>{" "}
            www.bonheur-sur-seine.com
          </p>
          <p>
            <span className='font-bold underline'>Localisation :</span> 75000
            Paris - France
          </p>
        </div>

        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Hébergement
        </h1>
        <div className='flex flex-col space-y-4'>
          <p>
            <span className='font-bold underline'>Nom :</span> Vercel
          </p>
        </div>

        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Cookies
        </h1>
        <p className='text-justify mb-4'>
          En poursuivant votre navigation sur ce site internet, vous acceptez
          l’utilisation de cookies. Un cookie est un petit fichier texte créé
          par un serveur web du site internet visité. Les cookies sont stockés
          sur le PC de l&apos;internaute. Les cookies permettent durant une
          durée de vie qui varie de reconnaître la machine qui se connecte.
        </p>
        <p>Sur ce site web, les cookies sont utilisés pour :</p>
        <ul className='list-disc' role='list'>
          <li className='mx-12' role='listitem'>
            Réaliser des statistiques de visites avec Google Analytics,
          </li>
          <li className='mx-12' role='listitem'>
            Vous offrir une meilleure expérience utilisateur.
          </li>
        </ul>
        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Liens Hypertextes
        </h1>
        <p className='text-justify mb-4'>
          Ce site web peut comporter des hyperliens vers d&apos;autres sites
          internet. Il est important de noter que notre entreprise ne peut être
          tenue responsable du contenu de ces sites ni des pratiques de
          confidentialité qu&apos;ils adoptent.
        </p>
        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Données Personnelles
        </h1>
        <p className='text-justify mb-4'>
          Les données personnelles collectées sur ce site sont strictement
          réservées à l&apos;usage interne de notre entreprise. En aucun cas,
          elles ne seront vendues, échangées ou louées à des tiers. Conformément
          à la loi Informatique et Libertés du 6 janvier 1978, vous avez le
          droit d&apos;accéder à vos données, de les rectifier et de les
          supprimer. Pour exercer ce droit, veuillez{" "}
          <Link href='/contact' className='underline hover:text-blue-700'>
            nous contacter
          </Link>
          . Nous nous engageons à respecter votre confidentialité et à protéger
          vos données personnelles.
        </p>
        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Propriété Intellectuelle
        </h1>
        <p className='text-justify mb-4'>
          Tous les éléments de ce site sont protégés par des licences de
          copyleft, ce qui signifie que leur reproduction, leur distribution et
          leur modification sont autorisées sous certaines conditions
          spécifiques. Ces licences sont conçues pour promouvoir la libre
          circulation des idées et du contenu, tout en garantissant que les
          droits de l&apos;auteur sont respectés. Vous êtes invités à consulter
          les termes et conditions de chaque licence applicable à ces éléments
          pour comprendre les droits et les restrictions qui s&apos;y
          rapportent. L&apos;utilisation de contenus sous copyleft doit se
          conformer aux exigences de ces licences, et toute reproduction,
          distribution ou modification doit être effectuée en accord avec les
          conditions spécifiées dans ces licences.
        </p>
      </div>
    </section>
  );
}
