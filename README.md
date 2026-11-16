# NEWPEARS — maquette (direction « La régie »)

Maquette de démonstration du futur site de NEWPEARS (location de son, de lumière et DJ à Saint-Quentin), faite à partir du site actuel newpears.fr. Adresse : https://newpears-regie.vercel.app

- Site statique (HTML, CSS, JavaScript), généré depuis `donnees/` et `source/` par `node outils/generer.mjs`. Ne jamais modifier les pages `.html` à la main.
- Pages : accueil, location (packs, flight case, catalogue), prestation DJ, événements, contact et devis, 404.
- Images : photos du client (logo, Mattéo et Sacha à la Fête de la musique, photos du matériel détourées, matière du flight case) et illustrations générées (mention « Illustration générée » sur chacune ; les vignettes d'événements de l'accueil portent une mention commune sous la liste).
- Les vignettes d'événements sont des illustrations générées un peu floues, montrées en petit seulement : à remplacer par de vraies photos ou à régénérer.

## Ce que le client doit fournir (à compléter)

| Information | Où elle sert |
|---|---|
| Mentions légales : raison sociale, SIRET, adresse, directeur de la publication | Pied de page de toutes les pages |
| Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (à vérifier au moment de la mise en ligne) | Mentions légales |
| Politique de confidentialité | Pied de page, formulaire de devis (« La politique de confidentialité sera publiée avec le site ») |
| Assurance responsabilité civile professionnelle (si le client souhaite l'afficher) | Pages Location et DJ |
| Crédits des illustrations générées (à garder sur le site final : « Illustration générée ») | Toutes les pages |
| Conditions générales de location (cgl.html du site actuel) à reprendre | Page Location, FAQ |
| Une photo éclairée de Mattéo et Sacha (de face ou de trois quarts, en soirée) | Accueil (côté platines), Prestation DJ |
| Photos réelles d'événements (mariage, anniversaire, entreprise…) pour remplacer les vignettes générées | Accueil, Événements |

### Retiré ou remplacé faute d'information

| Élément | Page | Ce qui est affiché à la place |
|---|---|---|
| Prix de chaque pack (seul « dès 169 € » est publié) | Location, accueil | « Tarif du pack donné dans le devis » ; « Packs dès 169 € la journée » |
| Prix du Pack Essentiel : l'accueil du site actuel annonce « dès 79 € », la page Packs « dès 169 € » | Location, accueil | « Packs dès 169 € » (choix validé), sans prix sur chaque pack ; à confirmer avec le client |
| Contenu exact des packs | Location | Décrit d'après la photo de chaque pack (« Sur la photo du pack ») |
| Prix à l'unité du catalogue | Location | Prix seulement par famille (enceintes dès 30 €, éclairage dès 10 €) |
| Seuils d'invités du conseil de pack (régie de l'accueil) | Accueil | Conseil indicatif ; seuils à valider : 40, 80, 120 et 200 invités ; l’interrupteur « Mariage » conseille toujours le Pack Professionnel (à valider) |
| Textes des avis Google | Accueil | Lien « Lire nos avis Google » |
| « 100 % de clients satisfaits » (sans source) | Accueil | Retiré |
| Dates 2018 et 2022 (« à confirmer » sur le site actuel) | Prestation DJ | Retirées toutes les deux ; « 8 ans de mix » et « création en avril 2025 » gardés |
| Adresse postale, horaires | Contact | « Saint-Quentin (Aisne) », « 7 j/7, devis sous 24 h » |

## Incohérences relevées sur le site actuel

- Packs « dès 79 € » (accueil) et « à partir de 169 € » (page Packs).
- « +5 ans d'expérience » (accueil), « 8 ans de mix » (à propos), création en avril 2025, dates « à confirmer » visibles en ligne.
- « ⚠ Taux et conditions à valider » visible sur l'accueil, alors que la FAQ annonce 5 %.
- Carrousel d'avis vide, lien « Voir tous nos avis » vers « # ».
- Zone : « jusqu'à 50 km » et « 40 à 50 km ».
- Photos de banque d'images (concerts géants, bébé dans une bouée, gâteau) : non reprises.

## À retirer à la mise en ligne définitive

- La consigne `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`).
- Le formulaire et « Ma demande » simulés (rien n'est envoyé) : à brancher sur un vrai envoi.
- Les mentions « à compléter » du pied de page, une fois les informations fournies.
- Le conseil de pack indicatif, à remplacer par les règles de NEWPEARS.

À garder : la mention « Illustration générée » sur les images créées par IA.
