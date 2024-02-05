import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions Légales de Bonheur Sur Seine - Transparence et Confiance',
  description:
    "Découvrez les mentions légales de Bonheur Sur Seine : informations sur l'entreprise, politique de confidentialité, et gestion des cookies. Engagés pour votre sécurité.",
  alternates: {
    canonical: `${process.env.CLIENT_URL}/mentions`,
  },
}
export default function Page() {
  return (
    <section className="container px-4 my-20 mx-auto space-y-8">
      <h1>Mentions légales</h1>

      <h3>Identification et publication</h3>
      <p>
        <strong>Nom du site web :</strong> Bonheur Sur Seine
      </p>
      <p>
        <strong>Numéro de Siret :</strong> 80294141900011
      </p>
      <p>
        <strong>Directeur de la publication :</strong> Raphaël L.
      </p>
      <p>
        <strong>Activité :</strong> Se déplacer en roue change la perception de
        la mobilité !!
      </p>
      <p>
        <strong>URL :</strong> www.bonheur-sur-seine.com
      </p>
      <p>
        <strong>Localisation :</strong> 75000 Paris - France
      </p>

      <h3>Hébergement</h3>

      <p>
        Ce site a été réalisé par{' '}
        <Link
          href={'https://www.dix31.com/'}
          passHref
          target="_blank"
          className="link-style"
        >
          DIX31
        </Link>{' '}
        spécialiste en Création de sites web. La gestion de l&apos;hébergement
        est effectuée par l’entreprise{' '}
        <Link
          href={'https://www.dix31.com/'}
          passHref
          target="_blank"
          className="link-style"
        >
          DIX31
        </Link>
        , immatriculée à TOULOUSE sous le numéro RCS 852 548 379 et dont le
        siège social est situé à Toulouse (CP 31300).
      </p>
      <p>
        <strong>Nom :</strong> Vercel
      </p>

      <h3>Conditions d&apos;utilisation</h3>

      <p>
        En accédant au site, vous reconnaissez avoir lu, compris et accepté
        l&apos;ensemble de ces <strong>conditions d&apos;utilisation</strong>.
        Si vous n&apos;acceptez pas l&apos;ensemble de ces conditions
        d&apos;utilisation, il vous est{' '}
        <strong>
          expressément interdit d&apos;utiliser ce site et vous devez le quitter
          immédiatement
        </strong>
        .
      </p>
      <p>
        Ce document peut être mis à jour à tout moment, et il est de votre
        responsabilité de le vérifier fréquemment pour être à jour.
      </p>
      <p>
        Les informations fournies par ce site web (ci-après dénommées,
        <i>Bonheur sur Seine</i>) et nos réseaux sociaux, tels que{' '}
        <Link
          href={'https://www.instagram.com/bonheursurseine/'}
          passHref
          target="_blank"
          className="link-style"
        >
          Instagram
        </Link>{' '}
        ne sont pas destinés à être distribués ou utilisés par une personne ou
        une entité dans un pays où une telle distribution ou utilisation serait
        contraire à la loi ou à la réglementation ou qui nous soumettrait à une
        obligation d&apos;enregistrement dans ce pays.
      </p>
      <p>
        Le site a pour objet de fournir des articles informatifs.{' '}
        <i>Bonheur sur Seine</i> s&apos;efforce de fournir sur le site des
        informations aussi précises que possible. Toutefois, il ne pourra être
        tenue responsable des omissions, des inexactitudes et des carences dans
        la mise à jour, qu’elles soient de son fait ou du fait des tiers
        partenaires qui lui fournissent ces informations.
      </p>
      <p>
        Toutes les informations indiquées sur le site sont données à titre
        indicatif, et sont susceptibles d’évoluer.
      </p>
      <p>
        L&apos;éditeur est propriétaire des droits de propriété intellectuelle
        ou détient les droits d’usage sur tous les éléments accessibles sur le
        site, notamment les textes, graphismes, logo. Les photos qui sont
        publiées restent la propriété de leurs ayant droit respectifs.
      </p>
      <ul className="list">
        <li>Usage des roues électriques</li>
        <p>
          <i>Bonheur sur Seine</i> ne saurait être tenu responsable des
          accidents ou problèmes occasionnés par la conduite d’un véhicule
          électrique tels que ceux évoqués sur le site ou dans les vidéos
          publiées sur{' '}
          <Link
            href={'https://www.youtube.com/c/BonheursurSeine'}
            passHref
            target="_blank"
            className="link-style"
          >
            la chaine YouTube
          </Link>
          . Il est rappelé à l’utilisateur qu&apos;il est tenu de respecter les
          lois en vigueur dans son pays, et que la modification d&apos;un engin
          de transport doit se faire en connaissance de cause, après avoir
          envisagé les conséquences possibles en termes de non respect des
          réglementations ou en termes de garantie commerciale.
        </p>
        <li>Propriété Intellectuelle</li>
        <p>
          Tous les éléments de ce site sont protégés par des{' '}
          <Link
            href={'https://www.gnu.org/licenses/copyleft.fr.html'}
            passHref
            target="_blank"
            className="link-style"
          >
            licences de copyleft
          </Link>
          , ce qui signifie que leur reproduction, leur distribution et leur
          modification sont autorisées sous certaines conditions spécifiques.
          Ces licences sont conçues pour promouvoir la libre circulation des
          idées et du contenu, tout en garantissant que les droits de
          l&apos;auteur sont respectés. Vous êtes invités à consulter les termes
          et conditions de chaque licence applicable à ces éléments pour
          comprendre les droits et les restrictions qui s&apos;y rapportent.
          L&apos;utilisation de contenus sous{' '}
          <Link
            href={'https://www.gnu.org/licenses/copyleft.fr.html'}
            passHref
            target="_blank"
            className="link-style"
          >
            copyleft
          </Link>{' '}
          doit se conformer aux exigences de ces licences, et toute
          reproduction, distribution ou modification doit être effectuée en
          accord avec les conditions spécifiées dans ces licences.
        </p>
        <p>
          Tous les éléments graphiques, la structure et, plus généralement, le
          contenu du site sont protégés par le droit d&apos;auteur, le droit des
          marques et le droit des dessins et modèles.
        </p>
        <p>
          Toute personne qui recueille ou télécharge du contenu ou des
          informations diffusées sur le site ne dispose sur ceux-ci que
          d&apos;un droit d&apos;usage privé, personnel et non transmissible.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication,
          adaptation de tout ou partie des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
          préalable de l&apos;éditeur. Toute reproduction, représentation du
          site en partie ou en totalité, exploitation non autorisée du site ou
          de l&apos;un quelconque des éléments qu&apos;il contient sera
          considérée comme constitutive d&apos;une contrefaçon et poursuivie
          conformément aux dispositions des articles L.335-2 et suivants du Code
          de Propriété Intellectuelle.
        </p>
        <li>Activités interdites</li>
        <p>
          Vous ne pouvez pas accéder au contenu du site <i>Bonheur sur Seine</i>{' '}
          ni l&apos;utiliser à d&apos;autres fins que celles pour lesquelles
          elles sont mises votre disposition. Le site web et/ou la marque{' '}
          <i>Bonheur sur Seine</i> ne peuvent être utilisés dans le cadre
          d&apos;activités commerciales, à l&apos;exception de celles que nous
          soutenons ou approuvons explicitement.
        </p>
        <li>Gestion du site</li>
        <p>Nous nous réservons le droit, mais non l&apos;obligation, de :</p>
        <ul className="list-decimal ml-12 space-y-4">
          <li>
            Surveiller le site <i>Bonheur sur Seine</i> pour repérer tout cas de
            violation des présentes conditions d&apos;utilisation.
          </li>
          <li>
            Prendre les mesures juridiques qui s&apos;imposent à l&apos;encontre
            de toute personne qui, à notre seule discrétion, enfreint la loi ou
            les présentes conditions d’utilisation.
          </li>
          <li>
            Gérer le site <i>Bonheur sur Seine</i> de manière à protéger nos
            droits et nos biens et à faciliter le bon fonctionnement du site.
          </li>
        </ul>
        <li>Liens Hypertextes</li>
        <p>
          Ce site web peut comporter des hyperliens vers d&apos;autres sites
          internet. Il est important de noter que notre entreprise ne peut être
          tenue responsable du contenu de ces sites ni des pratiques de
          confidentialité qu&apos;ils adoptent.
        </p>
      </ul>

      <h3>Données Personnelles</h3>
      <p>
        Les données personnelles collectées sur ce site sont strictement
        réservées à l&apos;usage interne de notre entreprise. En aucun cas,
        elles ne seront vendues, échangées ou louées à des tiers.
      </p>
      <p>
        Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous
        avez le droit d&apos;accéder à vos données, de les rectifier et de les
        supprimer. Pour exercer ce droit, veuillez
        <Link href={'/contact'} className="link-style ml-1">
          nous contacter
        </Link>
        .
      </p>
      <p>
        Nous nous engageons à respecter votre confidentialité et à protéger vos
        données personnelles.
      </p>
      <h3>Politique relative aux cookies</h3>
      <p>
        En poursuivant votre navigation sur ce site internet, vous acceptez
        l&apos;utilisation de cookies. Un cookie est un petit fichier texte créé
        par un serveur web du site internet visité. Les cookies sont stockés sur
        le PC de l&apos;internaute. Les cookies permettent durant une durée de
        vie qui varie de reconnaître la machine qui se connecte.
      </p>
      <p>
        Nous utilisons trois sortes de cookies : les cookies Fonctionnels,
        Statistiques, et Publicitaires.
      </p>
      <p>Sur ce site web, les cookies sont utilisés pour :</p>
      <ul className="list">
        <li>Réaliser des statistiques de visites avec Google Analytics.</li>
        <li>Vous offrir une meilleure expérience utilisateur.</li>
      </ul>
      <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs">
        Mentions légales créées le <strong>30/01/2024</strong>
      </p>
    </section>
  )
}
