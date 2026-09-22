# Module « Soutenir » — Bonheur sur Seine

## Objectif

Ce module prépare une plateforme de soutien autonome au sein du site Bonheur sur Seine. Cette première étape est une maquette front-end : elle permet de parcourir le futur parcours de contribution, la confirmation, l'espace contributeurs et la connexion par lien magique, sans brancher de service externe ni stocker de données.

Le contenu public de Bonheur sur Seine reste accessible gratuitement. Le module propose simplement un moyen facultatif de soutenir le travail et préfigure les contenus réservés aux contributeurs.

## Fichiers ajoutés

La liste ci-dessous est exhaustive pour cette première étape :

- `src/app/soutenir/page.tsx` : page publique principale et point d'entrée du parcours de soutien.
- `src/app/soutenir/merci/page.tsx` : confirmation de contribution simulée et accès à l'aperçu contributeur.
- `src/app/soutenir/contributeurs/page.tsx` : prototype non protégé de l'espace contributeurs, avec cartes vidéo fictives, zone coulisses et état d'accès.
- `src/app/soutenir/connexion/page.tsx` : prototype de récupération d'accès par lien magique.
- `src/features/soutenir/components/SoutenirPageShell.tsx` : structure visuelle commune et autonome des pages du module.
- `src/features/soutenir/components/SupportContributionForm.tsx` : choix interactif du type et du montant de contribution, puis redirection de démonstration.
- `src/features/soutenir/components/MagicLinkForm.tsx` : formulaire e-mail local avec confirmation simulée, sans envoi réseau.
- `SOUTENIR-README.md` : documentation technique et fonctionnelle du module.

Aucun fichier n'a été ajouté dans `src/app/api/soutenir/` à ce stade, car cette version n'effectue aucun appel serveur.

## Routes créées

- `/soutenir`
- `/soutenir/merci`
- `/soutenir/contributeurs`
- `/soutenir/connexion`

## Isolation du module

Tous les fichiers applicatifs du module se trouvent exclusivement dans `src/app/soutenir/` et `src/features/soutenir/`. La documentation se trouve à la racine, comme convenu.

Cette étape n'a modifié aucun fichier historique du projet. Elle ne modifie notamment ni la page d'accueil, ni la navigation, ni le footer, ni `/mille-merci`, ni les API existantes, ni la configuration Next.js ou npm, ni Turso, ni Prismic, ni les composants existants, ni les styles globaux, ni les variables d'environnement.

## Fonctionnalités simulées

- Le choix entre contribution ponctuelle et mensuelle est local à la page.
- Les montants de 5 €, 10 €, 20 € et le montant libre sont uniquement visuels.
- Le bouton « Contribuer » ne déclenche aucun paiement et redirige vers `/soutenir/merci`.
- L'accès contributeur affiché n'est pas protégé.
- Les cartes vidéo sont des emplacements fictifs et ne contiennent aucune URL YouTube privée ou non répertoriée.
- Le statut et la date d'accès sont des exemples statiques.
- Les actions Discord et de gestion de contribution ne sont pas connectées.
- Le formulaire de connexion n'envoie aucun e-mail et ne crée aucune session.

## Étapes prévues ensuite

1. Créer une base contributeurs dédiée.
2. Intégrer Stripe Checkout.
3. Traiter les webhooks Stripe.
4. Ajouter les sessions et la connexion par magic link.
5. Protéger réellement l'espace contributeurs.
6. Ajouter l'association Discord facultative.
