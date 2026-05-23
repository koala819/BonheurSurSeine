import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions Légales Bonheur Sur Seine - Transparence et Confiance',
  description:
    "BonheurSurSeine.com : informations sur l'entreprise, politique de confidentialité, et gestion des cookies.",
  alternates: {
    canonical: `${process.env.CLIENT_URL}/mentions`,
  },
}
export default function Page() {
  return (
    <section className="container px-4 my-20 mx-auto space-y-4 text-justify">
      <h1>Mentions légales</h1>
      {/***********************************************************************/}
      <p className="text-gray-500 dark:text-gray-300 mt-4 text-base">
        Dernière mise à jour&nbsp;: 30 novembre 2025
      </p>
      {/***********************************************************************/}
      <h3>Identification et publication</h3>
      <p>
        <strong>Nom du site web :</strong> Bonheur Sur Seine
        <br />
        <strong>URL :</strong> www.bonheursurseine.com
        <br />
        <strong>Directeur de la publication :</strong> Raphaël L.
        <br />
        <strong>SIRET : </strong>80294141900011
        <br />
        <strong>Activité : </strong>Se déplacer en roue change la perception de
        la mobilité !!
        <br />
        <strong>Localisation : </strong>75000 Paris - France
        <br />
        <strong>Contributions : </strong>Site développé avec l&apos;aide de deux
        personnes bénévoles.
      </p>
      {/***********************************************************************/}
      <h3>Hébergement</h3>
      <p>
        Ce site a vu le jour grâce à l&apos;implication active et aux précieux
        conseils de{' '}
        <Link
          href={'https://linktr.ee/fabien.wheel'}
          passHref
          target="_blank"
          className="link-style"
        >
          Fabien.Wheel
        </Link>
        , ainsi qu&apos;au soutien de{' '}
        <Link
          href={'https://www.dix31.com/'}
          passHref
          target="_blank"
          className="link-style"
        >
          DIX31
        </Link>{' '}
        spécialiste en création de sites web. <br />
        La gestion de l&apos;hébergement est assurée par l&apos;entreprise{' '}
        <Link
          href={'https://www.dix31.com/'}
          passHref
          target="_blank"
          className="link-style"
        >
          DIX31
        </Link>
        , immatriculée sous le numéro RCS 852 548 379 et dont le siège social
        est situé à Toulouse (CP 31300).
        <br />
        <strong>Hébergeur :</strong> Vercel Inc.
        <br />
        <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
        <br />
        <strong>Site web :</strong> https://vercel.com
      </p>
      {/***********************************************************************/}
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
        <br />
        Les informations fournies par ce site web (ci-après dénommées{' '}
        <i>Bonheur sur Seine</i>) et nos réseaux sociaux (tels que{' '}
        <Link
          href={'https://www.instagram.com/bonheursurseine/'}
          passHref
          target="_blank"
          className="link-style"
        >
          Instagram
        </Link>
        ) ne sont pas destinés à être distribués ou utilisés par une personne ou
        une entité dans un pays où une telle distribution ou utilisation serait
        contraire à la loi ou à la réglementation ou qui nous soumettrait à une
        obligation d&apos;enregistrement dans ce pays.
      </p>
      <p>
        Le site a pour objet de fournir des articles informatifs.{' '}
        <i>Bonheur sur Seine</i> s&apos;efforce de fournir sur le site des
        informations aussi précises que possible. Toutefois, il ne pourra être
        tenue responsable des omissions, des inexactitudes et des carences dans
        la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers
        partenaires qui lui fournissent ces informations.
        <br />
        <b>
          Toutes les informations indiquées sur le site sont données à titre
          indicatif, et sont susceptibles d&apos;évoluer.
        </b>
      </p>
      <p>
        L&apos;éditeur est propriétaire des droits de propriété intellectuelle
        ou détient les droits d&apos;usage sur tous les éléments accessibles sur
        le site, notamment les textes, graphismes, logo. Les photos qui sont
        publiées restent la propriété de leurs ayant droit respectifs.
      </p>
      <ul className="list">
        <li>
          <b>Usage des roues électriques</b>
        </li>
        <p>
          <b>
            <i>Bonheur sur Seine</i> ne saurait être tenu responsable des
            accidents ou problèmes occasionnés par la conduite d&apos;un
            véhicule électrique tels que ceux évoqués sur le site ou dans les
            vidéos publiées sur{' '}
            <Link
              href={'https://www.youtube.com/c/BonheursurSeine'}
              passHref
              target="_blank"
              className="link-style"
            >
              la chaine YouTube
            </Link>
            .
          </b>
          <br />
          Il est rappelé à l&apos;utilisateur qu&apos;il est tenu de respecter
          les lois en vigueur dans son pays, et que la modification d&apos;un
          engin de transport doit se faire en connaissance de cause, après avoir
          envisagé les conséquences possibles en termes de non respect des
          réglementations ou en termes de garantie commerciale.
        </p>
        <li>
          <b>Propriété Intellectuelle</b>
        </li>
        <p>
          <b>
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable de l&apos;éditeur.
          </b>{' '}
          Toute reproduction, représentation du site en partie ou en totalité,
          exploitation non autorisée du site ou de l&apos;un quelconque des
          éléments qu&apos;il contient sera considérée comme constitutive
          d&apos;une contrefaçon et poursuivie conformément aux dispositions des
          articles L.335-2 et suivants du Code de Propriété Intellectuelle.
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
        <li>
          <b>Activités interdites</b>
        </li>
        <p>
          Vous ne pouvez pas accéder au contenu du site <i>Bonheur sur Seine</i>{' '}
          ni l&apos;utiliser à d&apos;autres fins que celles pour lesquelles
          elles sont mises votre disposition. Le site web et/ou la marque{' '}
          <i>Bonheur sur Seine</i> ne peuvent être utilisés dans le cadre
          d&apos;activités commerciales, à l&apos;exception de celles que nous
          soutenons ou approuvons explicitement.
        </p>
        <li>
          <b>Gestion du site</b>
        </li>
        <p>
          Nous nous réservons le droit, mais non l&apos;obligation, de : <br />
          &emsp;1.&ensp; Surveiller le site <i>Bonheur sur Seine</i> pour
          repérer tout cas de violation des présentes conditions
          d&apos;utilisation. <br />
          &emsp;2.&ensp; Prendre les mesures juridiques qui s&apos;imposent à
          l&apos;encontre de toute personne qui, à notre seule discrétion,
          enfreint la loi ou les présentes conditions d&apos;utilisation. <br />
          &emsp;3.&ensp; Gérer le site <i>Bonheur sur Seine</i> de manière à
          protéger nos droits et nos biens et à faciliter le bon fonctionnement
          du site.
        </p>
        <li>
          <b>Liens Hypertextes</b>
        </li>
        <p>
          Ce site web peut comporter des hyperliens vers d&apos;autres sites
          internet. Il est important de noter que notre entreprise ne peut être
          tenue responsable du contenu de ces sites ni des pratiques de
          confidentialité qu&apos;ils adoptent.
        </p>
      </ul>
      {/***********************************************************************/}
      <h3>Données Personnelles</h3>
      <p>
        Aucune donnée personnelle n&apos;est collectée à votre insu.
        <br />
        Les propos haineux, discriminatoires ou offensants des commentaires sont
        supprimés sans préavis.
        <br />
        Conformément au RGPD et à la loi Informatique et Libertés du 6 janvier
        1978, vous pouvez demander l&apos;accès, la rectification ou la
        suppression de vos données. Pour exercer ce droit, veuillez
        <Link
          href={'mailto:bonheursurseine@gmail.com'}
          className="link-style ml-1"
        >
          nous contacter
        </Link>
        .
        <br />
        Nous nous engageons à respecter votre confidentialité et à protéger vos
        données personnelles.
      </p>
      {/***********************************************************************/}
      <h3>Politique relative aux cookies</h3>
      <p className="mb-0">
        En poursuivant votre navigation sur ce site internet, vous acceptez
        l&apos;utilisation de cookies. Un cookie est un petit fichier texte créé
        par un serveur web du site internet visité. Les cookies sont stockés sur
        le PC de l&apos;internaute. Les cookies permettent durant une durée de
        vie qui varie de reconnaître la machine qui se connecte.
        <br />
        Nous utilisons trois sortes de cookies : les cookies Fonctionnels,
        Statistiques, et Publicitaires.
        <br />
        Sur ce site web, les cookies sont utilisés pour :<br />
        &emsp;&bull;&ensp;Réaliser des statistiques de visites avec Google
        Analytics.
        <br />
        &emsp;&bull;&ensp;Vous offrir une meilleure expérience utilisateur.
      </p>
      {/***********************************************************************/}
    </section>
  )
}
