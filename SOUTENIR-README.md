# Module « Soutenir » — Bonheur sur Seine

## Objectif

Ce module prépare une plateforme de soutien autonome au sein du site Bonheur sur Seine. Le contenu public reste accessible gratuitement. Le parcours local permet de choisir un soutien ponctuel ou mensuel, d'ouvrir Stripe Checkout en mode test et de préfigurer l'espace contributeurs.

La base contributeurs est dédiée au module et locale par défaut. Elle n'utilise pas la base Turso historique.

## Fichiers du module

- `src/app/soutenir/page.tsx` : page publique et point d'entrée du parcours.
- `src/app/soutenir/merci/page.tsx` : retour de Stripe Checkout et état de validation.
- `src/app/soutenir/contributeurs/page.tsx` : espace contributeurs protégé par une session locale.
- `src/app/soutenir/connexion/page.tsx` : demande de connexion par lien magique.
- `src/app/soutenir/auth/verification/route.ts` : consommation du lien à usage unique et création de la session.
- `src/app/soutenir/discord/connexion/route.ts` : démarrage du parcours OAuth2 Discord depuis une session vérifiée.
- `src/app/soutenir/discord/callback/route.ts` : validation du retour OAuth2 et association du profil Discord.
- `src/app/soutenir/discord/dissocier/route.ts` : suppression de l'association Discord du contributeur connecté.
- `src/app/soutenir/stripe/portail/route.ts` : ouverture du portail Stripe de test pour un abonnement mensuel vérifié.
- `src/app/soutenir/administration/connexion/page.tsx` : demande locale d'un lien d'administration des vidéos.
- `src/app/soutenir/administration/demander/route.ts` : envoi du lien d'administration à l'adresse autorisée.
- `src/app/soutenir/administration/verification/route.ts` : vérification à usage unique et ouverture d'une session administrateur.
- `src/app/soutenir/administration/videos/page.tsx` : formulaire local d'ajout et liste des vidéos.
- `src/app/soutenir/administration/contributeurs/page.tsx` : liste locale paginée des contributeurs et de leurs soutiens, réservée à l'administrateur.
- `src/app/soutenir/administration/contributeurs/pseudos/route.ts` : export texte des pseudos de remerciement explicitement autorisés.
- `src/app/soutenir/administration/videos/ajouter/route.ts` : ajout d'une vidéo après contrôle de la session administrateur.
- `src/app/soutenir/administration/deconnexion/route.ts` : révocation de la session administrateur.
- `src/app/api/soutenir/discord/reconcile/route.ts` : synchronisation périodique des rôles, protégée par un secret.
- `src/app/api/soutenir/checkout/route.ts` : validation de la demande et création d'une session Stripe Checkout de test.
- `src/app/api/soutenir/webhook/route.ts` : réception des événements Stripe signés.
- `src/app/api/soutenir/auth/request-link/route.ts` : création d'un lien magique pour un contributeur actif ou l'administrateur local.
- `src/app/soutenir/auth/logout/route.ts` : révocation des sessions contributeur et administrateur et suppression des cookies.
- `src/app/soutenir/remerciements/enregistrer/route.ts` : enregistrement ou retrait du pseudo public et de l'accord du contributeur connecté.
- `src/features/soutenir/components/SoutenirPageShell.tsx` : structure visuelle autonome des pages.
- `src/features/soutenir/components/SupportContributionForm.tsx` : choix du type, du montant et de l'adresse e-mail.
- `src/features/soutenir/components/MagicLinkForm.tsx` : demande de lien de connexion, par aperçu local ou e-mail SMTP.
- `src/features/soutenir/components/ContributorVideos.tsx` : affichage partagé des vidéos dans l'espace contributeur.
- `src/features/soutenir/types/contribution.ts` : types partagés du domaine contribution.
- `src/features/soutenir/server/database.ts` : client libSQL et initialisation du schéma dédié.
- `src/features/soutenir/server/contributions.ts` : accès aux contributeurs et contributions locales.
- `src/features/soutenir/server/auth.ts` : jetons à usage unique, sessions hachées et contrôle d'accès.
- `src/features/soutenir/server/magic-link-email.ts` : envoi SMTP dédié des liens de connexion.
- `src/features/soutenir/server/videos.ts` : lecture et validation des liens YouTube, depuis le fichier local ou la base dédiée configurée.
- `src/features/soutenir/server/video-admin.ts` : liens et sessions administrateur indépendants des contributions payantes.
- `src/features/soutenir/server/admin-contributors.ts` : lecture paginée des contributeurs, contributions et associations Discord locales pour l'administration.
- `src/features/soutenir/server/thanks.ts` : lecture et mise à jour des pseudos de remerciement, et sélection des pseudos autorisés.
- `src/features/soutenir/server/stripe.ts` : création des sessions Stripe Checkout via l'API officielle.
- `src/features/soutenir/server/stripe-portal.ts` : sélection d'un abonnement actif et création d'une session Customer Portal de test.
- `src/features/soutenir/server/stripe-webhook.ts` : vérification cryptographique des signatures Stripe.
- `src/features/soutenir/server/stripe-webhook-events.ts` : traitement idempotent des événements de paiement et d'abonnement.
- `src/features/soutenir/server/discord.ts` : état OAuth2, échange du code, lecture du profil et association locale.
- `src/features/soutenir/server/discord-role.ts` : attribution, retrait et synchronisation du rôle contributeur sur un serveur Discord.
- `src/features/soutenir/scripts/reconcile-local.ps1` : déclenchement local de la synchronisation, ponctuel ou périodique.
- `src/features/soutenir/data/.gitignore` : empêche de commiter le fichier local des vidéos.
- `src/features/soutenir/data/videos.local.json` : liste locale des vidéos, exclue de Git et modifiée via le formulaire d'administration.
- `SOUTENIR-README.md` : présente documentation.

Le fichier `src/features/soutenir/data/soutenir-local.db` est créé automatiquement. Il est exclu de Git par le `.gitignore` du module, y compris ses fichiers annexes, et ne doit jamais être commité.

## Base dédiée pour la préversion

Les variables `BSS_SOUTENIR_DATABASE_URL` et `BSS_SOUTENIR_DATABASE_AUTH_TOKEN` désignent une base libSQL propre au module. Elles ne remplacent pas les variables `TURSO_DATABASE_URL` et `TURSO_AUTH_TOKEN` du site historique. Sur Vercel, le module refuse d'utiliser le fichier SQLite local si l'URL de sa base dédiée manque.

Quand `BSS_SOUTENIR_DATABASE_URL` est configurée, les contributions, sessions et liens vidéo du module utilisent cette base. Les vidéos du fichier local `videos.local.json` ne sont pas importées automatiquement. La branche `dev` est publiée en Preview avec les deux variables de la base dédiée, mais le parcours de paiement en ligne reste fermé tant que la préparation Stripe test n'est pas terminée. L'administration peut être ouverte sur cette préversion seulement si toutes les conditions ci-dessous sont réunies ; elle reste fermée par défaut en ligne.

### Ouverture graduelle de Stripe test en Preview

Le paiement test fonctionne déjà en local sans nouveau drapeau. Sur Vercel, la clé Stripe de test seule ne suffit pas à ouvrir le parcours : le serveur exige `VERCEL=1`, `VERCEL_ENV=preview`, la branche `dev`, `BSS_SOUTENIR_APP_URL`, les deux variables de la base dédiée, `BSS_SOUTENIR_STRIPE_WEBHOOK_SECRET` et `BSS_SOUTENIR_ENABLE_PREVIEW_CHECKOUT=1`. Les clés `sk_live_` et `rk_live_` restent refusées.

Configurer d'abord une destination webhook Stripe en mode test pour l'URL Preview `dev`, puis placer **son propre** secret de signature dans `BSS_SOUTENIR_STRIPE_WEBHOOK_SECRET` : celui donné par `stripe listen` pour le poste local n'est pas le secret de cette destination en ligne. Si la Preview est protégée par Vercel Authentication, Stripe devra disposer d'un accès webhook spécifique sans rendre tout l'aperçu public. Ajouter les secrets Stripe au projet Vercel pour **Preview `dev` seulement** et redéployer. N'ajouter `BSS_SOUTENIR_ENABLE_PREVIEW_CHECKOUT=1` qu'après avoir vérifié la destination et la base ; redéployer encore une fois pour l'ouverture. Ne jamais ajouter ces variables à Production.

### Verrouillage de l'administration en Preview

En ligne, les pages et actions d'administration ne s'ouvrent que si `VERCEL=1`, `VERCEL_ENV=preview`, `VERCEL_GIT_COMMIT_REF=dev`, `BSS_SOUTENIR_ENABLE_PREVIEW_ADMIN=1`, les deux variables de la base dédiée, une configuration SMTP valide, `BSS_SOUTENIR_VIDEO_ADMIN_EMAIL` et `BSS_SOUTENIR_APP_URL` sont présents. L'URL configurée doit être en HTTPS et correspondre exactement à l'origine visitée. La branche de production et les autres branches Preview restent exclues même si les autres variables sont renseignées. Le lien administrateur expire après 15 minutes, sa session après 12 heures et le cookie de session est `Secure` sous HTTPS.

Les variables de la base dédiée, l'URL de la branche, l'adresse administrateur et les paramètres SMTP sont configurés pour Preview `dev` uniquement. Le drapeau d'activation de l'administration n'est pas configuré : cette interface demeure fermée en ligne. Ne jamais ajouter ces variables d'administration à Production.

## Vidéos contributeurs en local

Les publications écrites restent sur Discord. La page `/soutenir/contributeurs` affiche les vidéos après vérification d'une contribution active ou de la session administrateur locale. Sur ce poste, elles proviennent de `src/features/soutenir/data/videos.local.json` ; avec une base dédiée configurée, elles proviennent de cette base. Le fichier local est ignoré par Git ; aucun lien réel ne doit être mis dans le code source.

Pour ajouter une vidéo sur ce poste, ouvrir `http://127.0.0.1:3017/soutenir/connexion`, saisir l'adresse administrateur configurée, puis ouvrir le lien à usage unique reçu par e-mail. L'espace contributeur indique alors « Accès administrateur » et affiche le bouton « Ajouter une vidéo ». La page d'administration permet de saisir le titre, le lien YouTube et une description facultative. La session administrateur expire après 12 heures et peut être fermée avec « Se déconnecter ». Elle donne accès aux vidéos **sans contribution ni abonnement** et ne crée ni paiement Stripe ni rôle Discord. L'ancienne entrée `/soutenir/administration/connexion` reste disponible comme accès direct à la demande de lien administrateur. La variable locale suivante est nécessaire dans `.env.local` :

```dotenv
BSS_SOUTENIR_VIDEO_ADMIN_EMAIL=bonheursurseine@gmail.com
```

Le formulaire refuse les doublons et les URL autres que les liens HTTPS `youtube.com` ou `youtu.be` contenant un identifiant de vidéo valide. Les liens s'ouvrent dans de nouveaux onglets depuis l'espace contributeur. La page d'administration exige que `BSS_SOUTENIR_APP_URL` et l'URL demandée soient exactement la même origine : locale, ou Preview `dev` avec tous les garde-fous ci-dessus. La connexion utilise l'envoi SMTP du module et des jetons hachés, à usage unique, valables 15 minutes.

### Vue administrateur des contributeurs

Depuis l'espace contributeur ouvert avec l'adresse administrateur, « Voir les contributeurs » ouvre `/soutenir/administration/contributeurs`. La page, protégée par la même session administrateur, présente par pages de 25 les adresses enregistrées par ce module. Chaque ligne compacte montre le dernier soutien, le statut d'accès et le pseudo de remerciement éventuel. L'historique détaillé, les dates, Discord et les références Stripe de test restent accessibles en dépliant la ligne. La page distingue le nombre d'adresses enregistrées du nombre d'accès actuellement actifs. Un essai en attente ou simulé reste visible mais ne compte pas comme accès actif. La contrepartie n'est pas répétée pour chaque personne car elle est identique pour tous les montants.

Dans son espace, un contributeur actif peut saisir librement un pseudo et cocher une case distincte pour accepter que ce pseudo soit cité publiquement dans les vidéos. Sans case cochée, aucun pseudo n'est publié ou exporté ; décocher puis enregistrer efface le pseudo et l'accord. Ni l'adresse e-mail ni le nom Discord ne sont repris automatiquement. Le bloc « Pseudos pour les remerciements » de l'administration et son export `.txt` ne comprennent que les pseudos des soutiens encore actifs ayant donné cet accord. L'export ne contient pas d'adresse e-mail. Ce mécanisme local ne constitue pas à lui seul une politique de confidentialité complète pour la production.

Cette vue lit la base locale alimentée par Checkout et les webhooks ; elle **n'est pas une copie du tableau de bord Stripe**. Elle n'importe ni les clients Stripe créés ailleurs, ni les factures de renouvellement, ni les coordonnées ou moyens de paiement. Le montant d'un soutien mensuel représente le tarif choisi, pas un total encaissé. Aucun compte Patreon ou Tipeee n'est importé. Une synchronisation Stripe en lecture seule et un stockage durable adaptés à la production seront à concevoir séparément si ces détails sont nécessaires.

**Limite importante :** une vidéo YouTube non répertoriée reste accessible à toute personne qui obtient son URL. La protection de la page ne contrôle pas l'accès directement sur YouTube. La base distante permet désormais de conserver les liens, mais le parcours Preview n'a pas encore été testé de bout en bout.

## Envoi des liens de connexion

Sans configuration SMTP, le lien magique reste affiché dans le navigateur **uniquement en local**. Pour envoyer de vrais e-mails, ajouter ces variables propres au module dans `.env.local` (ou dans les secrets de l'hébergement) :

```dotenv
BSS_SOUTENIR_SMTP_HOST=smtp.exemple.fr
BSS_SOUTENIR_SMTP_PORT=587
BSS_SOUTENIR_SMTP_USER=...
BSS_SOUTENIR_SMTP_PASSWORD=...
BSS_SOUTENIR_EMAIL_FROM=contact@exemple.fr
```

Utiliser le port 587 avec STARTTLS obligatoire, ou le port 465 avec TLS direct. L'expéditeur doit être autorisé par le fournisseur SMTP. Les identifiants SMTP ne doivent pas être commités ni transmis dans une conversation. Redémarrer Next.js après toute modification de `.env.local`. Ne pas réutiliser les variables `MAIL_*` des API historiques du site.

Une fois SMTP configuré, la réponse du formulaire reste volontairement identique pour une adresse connue ou inconnue et le lien n'est plus affiché dans le navigateur. Un nouveau lien pour le même compte n'est créé qu'après une minute si le précédent n'a pas été utilisé. Le lien expire au bout de 15 minutes et n'est valable qu'une fois. Sans SMTP, l'envoi en dehors du mode local est refusé.

## Routes

- `/soutenir`
- `/soutenir/merci`
- `/soutenir/contributeurs`
- `/soutenir/connexion`
- `/soutenir/administration/connexion` (local, ou Preview `dev` explicitement activée)
- `/soutenir/administration/videos` (session administrateur requise)
- `/soutenir/administration/contributeurs` (session administrateur requise)
- `GET /soutenir/administration/contributeurs/pseudos` (export administrateur uniquement)
- `POST /soutenir/administration/demander`
- `GET /soutenir/administration/verification?token=…`
- `POST /soutenir/administration/videos/ajouter`
- `POST /soutenir/administration/deconnexion`
- `POST /api/soutenir/checkout`
- `POST /api/soutenir/webhook`
- `POST /api/soutenir/auth/request-link`
- `POST /soutenir/auth/logout`
- `POST /soutenir/remerciements/enregistrer`
- `GET /soutenir/auth/verification?token=…`
- `GET /soutenir/discord/connexion`
- `GET /soutenir/discord/callback?code=…&state=…`
- `POST /soutenir/discord/dissocier`
- `POST /soutenir/stripe/portail`
- `POST /api/soutenir/discord/reconcile`

## Configuration locale de Stripe

Créer ou compléter le fichier `.env.local` à la racine du dépôt :

```dotenv
BSS_SOUTENIR_STRIPE_SECRET_KEY=sk_test_...
BSS_SOUTENIR_STRIPE_WEBHOOK_SECRET=whsec_...
BSS_SOUTENIR_APP_URL=http://127.0.0.1:3017
BSS_SOUTENIR_STRIPE_PORTAL_CONFIGURATION_ID=bpc_...
```

- Ne jamais commiter ni partager la clé secrète.
- Seules les clés Stripe de test `sk_test_…` ou `rk_test_…` sont acceptées par le module.
- `BSS_SOUTENIR_APP_URL` est facultative, mais recommandée pour fixer les URL de retour locales.
- Le serveur Next.js doit être redémarré après l'ajout ou la modification de `.env.local`.
- Le portail client doit être configuré dans Stripe **en mode test**. Utiliser une configuration dédiée avec la résiliation à la fin de la période payée ; son identifiant `bpc_…` est stocké dans `BSS_SOUTENIR_STRIPE_PORTAL_CONFIGURATION_ID`. Un soutien ponctuel n'a pas d'abonnement à résilier.

### Écoute locale des webhooks

Stripe ne peut pas appeler directement `localhost`. Installer et authentifier la CLI Stripe, puis conserver cette commande active dans un terminal séparé :

```powershell
stripe login
stripe listen --events checkout.session.completed,checkout.session.async_payment_succeeded,checkout.session.async_payment_failed,checkout.session.expired,invoice.paid,invoice.payment_failed,customer.subscription.updated,customer.subscription.deleted,charge.refunded --forward-to http://127.0.0.1:3017/api/soutenir/webhook
```

La commande affiche un secret commençant par `whsec_`. Le placer dans `BSS_SOUTENIR_STRIPE_WEBHOOK_SECRET`, redémarrer Next.js, puis relancer l'écoute si nécessaire. Ce secret est distinct de la clé API `sk_test_` et ne doit pas être partagé ou commité.

## Configuration locale de Discord

Créer une application dans le portail développeur Discord, puis ajouter cette URL exacte dans **OAuth2 > Redirects** :

```text
http://127.0.0.1:3017/soutenir/discord/callback
```

Compléter ensuite `.env.local` sans partager ni commiter les valeurs :

```dotenv
BSS_SOUTENIR_DISCORD_CLIENT_ID=...
BSS_SOUTENIR_DISCORD_CLIENT_SECRET=...
BSS_SOUTENIR_DISCORD_BOT_TOKEN=...
BSS_SOUTENIR_DISCORD_GUILD_ID=...
BSS_SOUTENIR_DISCORD_ROLE_ID=...
BSS_SOUTENIR_DISCORD_SYNC_SECRET=...
```

Le serveur Next.js doit être redémarré après cette modification. Le module demande uniquement le scope OAuth2 `identify`. Il ne demande pas l'accès aux messages ou à l'adresse e-mail Discord. Le compte associé doit déjà être membre du serveur pour recevoir le rôle.

Dans le serveur Discord, créer un **nouveau rôle dédié**, nommé exactement « Contributeur BSS ». Le rôle « Contributeur » déjà attribué par Patreon et Tipeee ne doit jamais être renseigné dans `BSS_SOUTENIR_DISCORD_ROLE_ID` : un même membre peut garder son droit d'accès par ces services après l'arrêt de son soutien Stripe. Le code vérifie le nom « Contributeur BSS » et refuse de modifier un rôle géré par une intégration. N'autoriser ce nouveau rôle que sur les salons souhaités ; dans le test actuel, il ouvre `contributeurs` et `le-bon-heur-coin`, mais pas `choisir-ses-rôles-contributeurs`.

Dans le portail développeur, ajouter le bot de la même application au serveur avec la permission **Gérer les rôles**. Dans la liste des rôles du serveur, placer le rôle du bot **au-dessus** du rôle « Contributeur BSS ». Les identifiants du serveur et du nouveau rôle s'obtiennent via **Copier l'identifiant** après activation du mode développeur Discord. Conserver le jeton du bot et le secret de synchronisation uniquement dans les variables d'environnement. Ne pas accorder la permission **Administrateur** au bot.

Pour les contributions ponctuelles, la date d'expiration n'émet pas d'événement Stripe. Il faut appeler `POST /api/soutenir/discord/reconcile` avec l'en-tête `Authorization: Bearer <BSS_SOUTENIR_DISCORD_SYNC_SECRET>` à intervalle régulier, par exemple chaque heure, avec un planificateur côté serveur. En local, `src/features/soutenir/scripts/reconcile-local.ps1 -Watch` le fait tant que **le script et le serveur Next.js restent ouverts** ; sans `-Watch`, il exécute une seule vérification. La synchronisation automatique en production nécessitera un planificateur sur l'hébergement : celui-ci n'est pas installé dans ce dépôt.

Depuis la racine du dépôt, lancer la surveillance locale dans un terminal séparé :

```powershell
& './src/features/soutenir/scripts/reconcile-local.ps1' -Watch
```

Elle vérifie immédiatement les rôles, puis toutes les heures. Fermer ce terminal arrête la surveillance. Le serveur local doit rester démarré lui aussi. Le secret de synchronisation reste uniquement dans `.env.local` et n'est jamais affiché par le script.

## Fonctionnement actuel

- Le serveur crée une contribution locale au statut `pending`, puis une session Stripe Checkout hébergée.
- Le navigateur est redirigé vers Stripe en mode test ; aucun paiement réel n'est autorisé par cette étape.
- Le retour réussi utilise `/soutenir/merci?session_id={CHECKOUT_SESSION_ID}`.
- Une simple redirection de retour ne valide pas la contribution et n'accorde aucun accès réel.
- Le webhook vérifie la signature `Stripe-Signature` sur le corps brut avant tout traitement et refuse les événements du mode réel.
- `checkout.session.completed` et `checkout.session.async_payment_succeeded` font passer une contribution vérifiée au statut `paid`.
- Une contribution ponctuelle payée ouvre un accès de 30 jours à partir de l'événement Stripe.
- Les événements de renouvellement, d'échec, d'annulation et de remboursement actualisent l'état de l'accès mensuel.
- Une résiliation programmée en fin de période conserve l'accès jusqu'à la date `cancel_at` fournie par Stripe. Cette date est enregistrée localement : l'espace contributeur refuse l'accès à son échéance, même si le webhook final est retardé. Le rôle Discord est retiré lors de la prochaine synchronisation périodique ; avec la surveillance locale horaire active, ce retrait peut prendre jusqu'à une heure. Une reprise de l'abonnement efface la date via `customer.subscription.updated`.
- Les identifiants d'événements traités sont enregistrés afin que les nouvelles livraisons d'un même webhook restent idempotentes.
- Une adresse liée à une contribution `paid` et encore active peut demander un lien magique valable 15 minutes.
- Le jeton du lien et le jeton de session sont générés aléatoirement et uniquement stockés sous forme de condensat SHA-256.
- Le lien magique est à usage unique. Il crée un cookie de session `HttpOnly`, `SameSite=Lax`, limité au chemin `/soutenir`.
- Chaque accès à `/soutenir/contributeurs` revérifie la session et l'état actuel de la contribution dans la base.
- En local, le lien magique est affiché directement dans le formulaire tant que SMTP n'est pas configuré. Avec SMTP, il est envoyé en texte brut par e-mail et n'est pas renvoyé au navigateur.
- Un contributeur connecté peut associer ou dissocier un compte Discord via OAuth2 après configuration du bot et du rôle.
- L'état OAuth2 est aléatoire, haché dans la base, valable 10 minutes, à usage unique et lié à la session active.
- Le jeton Discord sert uniquement à lire le profil public, puis sa révocation est demandée. Aucun jeton Discord n'est stocké.
- Le bot attribue le rôle dédié « Contributeur BSS » si une contribution payée donne encore accès, et retire uniquement ce rôle quand cet accès prend fin ou lors d'une dissociation. Les rôles Patreon et Tipeee restent intacts. Un membre absent du serveur reste associé, mais son rôle demeure en attente.
- Les webhooks Stripe synchronisent le rôle du contributeur concerné après changement de paiement ; la route de synchronisation périodique traite aussi les expirations sans webhook.
- Un abonnement mensuel payé et rattaché à un client Stripe ouvre le portail client hébergé, en mode test uniquement. Son URL est créée à la demande et n'est jamais conservée ; le webhook reste la source de vérité après une modification ou une résiliation.
- Le soutien ponctuel propose de soutenir à nouveau, sans fausse option de résiliation.
- Les cartes vidéo sont alimentées par le fichier local ignoré par Git, ou par la base dédiée lorsqu'elle est configurée. En l'absence de vidéo, un message d'attente remplace les anciennes démonstrations.

## Isolation

Les fichiers applicatifs se trouvent exclusivement dans `src/app/soutenir/`, `src/app/api/soutenir/` et `src/features/soutenir/`. La documentation est à la racine, comme convenu.

Cette étape ne modifie aucun fichier historique : ni accueil, ni navigation, ni footer, ni `/mille-merci`, ni API existante, ni configuration Next.js ou npm, ni Turso, ni Prismic, ni styles globaux.

## Avancement

1. Base contributeurs dédiée : fondation locale réalisée ; une base Turso distincte et ses deux variables secrètes sont préparées pour Preview sur `dev`, sans configuration en Production.
2. Stripe Checkout : intégration locale en mode test réalisée.
3. Webhooks Stripe : endpoint, signature et transitions d'état réalisés ; écoute Stripe CLI locale à connecter.
4. Sessions et connexion par magic link : réalisées localement.
5. Protection réelle de l'espace contributeurs : réalisée localement.
6. Envoi SMTP des liens : configuration Gmail locale et envoi réel d'un message de test confirmés. Le parcours complet de connexion par e-mail reste à vérifier avec une contribution de test associée à une adresse accessible ; la base actuelle reste locale.
7. Association Discord et rôle contributeur : test local réussi avec le bot et le rôle dédié. Retrait à l'expiration et rétablissement testés ; surveillance locale disponible. Un planificateur côté hébergement restera nécessaire pour la production.
8. Portail Stripe : configuration de test créée, session et résiliation en fin de période vérifiées sur un abonnement mensuel de test. La date de fin est prise en compte localement.
9. Vidéos contributeurs : lecture locale des liens YouTube sur une page protégée, avec stockage dans la base dédiée lorsque celle-ci est configurée. Un premier lien reste configuré seulement sur le poste de test ; le partage des textes reste sur Discord.
10. Administration des vidéos : formulaire réservé à l'adresse e-mail administrateur, sans modification manuelle du JSON. L'administrateur se connecte depuis le formulaire commun, accède aux vidéos sans payer et voit un bouton d'ajout dans l'espace contributeur. Le formulaire d'ajout a été testé localement ; son ouverture sur Preview `dev` est préparée mais désactivée par défaut, et il ne doit pas être exposé en production.
11. Vue administrateur des contributeurs : liste compacte et paginée depuis la base dédiée, avec accès, montant, statut et Discord ; lecture seule, locale et en mode test. Les détails de facturation Stripe non stockés localement restent consultables dans Stripe.
12. Pseudos de remerciement : choix et accord explicite dans l'espace contributeur, retrait possible, liste et export texte réservés à l'administrateur. Aucun pseudo Discord ou nom de paiement n'est importé automatiquement.
