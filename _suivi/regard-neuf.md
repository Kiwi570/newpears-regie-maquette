# Regard neuf : maquette NEWPEARS (13 novembre 2026, 15 h)

Sources :
- mes captures des 6 pages, en 1440×900 et en 390×844 (premier écran et 4 à 7 positions de défilement) ;
- `_audit/apercu/images-ordinateur.jpg` ;
- le rapport d'audit (`/tmp/np-audit/_audit/rapport/rapport.md`, un audit rapide sur `/` seulement) ;
- `site.js`, lu pour ce que les captures ne montrent pas : le voile, l'envoi et le fil ;
- le relevé, les regards du DA, les planches du palmarès et les accueils de Red-Act, QD2A et Lo Componairo.

Note : la bande sombre de 15 px au bord droit des captures est la barre de défilement du navigateur sans écran, pas un défaut.

## Les cinq questions

1. **Ce que le visiteur peut toucher.**
   - Accueil : trois faders (INVITÉS, LUMIÈRE, EFFETS) et l'interrupteur Mariage, qui conseillent un pack ; les faisceaux et les gobos suivent le pointeur ; on peut ajouter le pack ; on ouvre le couvercle du flight case.
   - Location : les onglets des 5 packs, les filtres et la recherche du catalogue, et « Ajouter à ma demande » partout ; l'article s'envole vers le flight case de l'en-tête.
   - Prestation DJ : la playlist, où l'on touche un style une fois pour « à jouer », deux fois pour « à éviter », avec un vumètre.
   - Événements : l'index des événements, dont la lumière de section prend la teinte de l'événement survolé.
   - Contact : le formulaire en 4 étapes, avec un récapitulatif en direct.
   - 404 : rien à toucher.
2. **Ce qui relie les pages.**
   - L'intro : une poire néon se dessine, puis vole jusqu'au logo.
   - Le voile : un faisceau en forme de pinceau de lumière, entre deux pages.
   - Le fil : deux lyres fixes dans les coins hauts visent le titre de la section en cours.
   - Le panier « Ma demande », en forme de flight case, présent dans tous les onglets.
   - Mais le fil est presque invisible : les faisceaux sont à 26 % d'opacité et les lyres font environ 30 px, collées aux coins.
3. **La demande de devis.**
   - Chaque « Ajouter » envoie l'article vers le panier de l'en-tête.
   - Le contact reprend la sélection, avec des vignettes, dans un formulaire en 4 étapes (événement, date et lieu, souhait, coordonnées) et un récapitulatif qui se remplit en direct.
   - À l'envoi : un jet de CO2 (4 colonnes blanches pendant 1,5 s), le tampon « Demande reçue », puis le panier se vide.
   - C'est un bon retour physique, mais je ne l'ai pas vu dans un film : je l'ai lu dans le code.
4. **Ce qui est spectaculaire au premier défilement de l'accueil.**
   - On trouve trois familles d'effets :
     - la lumière au pointeur (faisceaux, gobos, salle qui s'allume) ;
     - une scène pilotée par le défilement (le flight case qui s'ouvre et livre le matériel) ;
     - la typographie cinétique (titres révélés ligne à ligne, mur LED des styles qui défile).
   - Les onglets ont chacun au moins un effet :
     - Location : le flight case épinglé, une famille par pas de défilement ;
     - DJ : le vumètre de la playlist et une parallaxe ;
     - Événements : la lumière de section qui suit l'événement, mais à peine perceptible ;
     - Contact : le numéro en LED et le CO2.
5. **Une signature par page, ou des pages qui se ressemblent ?**
   - Après l'ouverture : l'accueil (la régie) et la location (le flight case épinglé, le catalogue) ont une vraie signature. Le DJ en a une petite (la playlist). Les événements (une liste de 11 rangées identiques) et le contact (un formulaire classique) n'en ont presque pas.
   - Surtout, **les quatre pages intérieures s'ouvrent sur le même gabarit** :
     - un surtitre en police mono ;
     - un titre condensé, avec un mot en dégradé (LIVRÉ, SOIRÉE, AMBIANCE) ;
     - deux boutons ;
     - un bandeau photo.
   - Sur téléphone, ces quatre ouvertures sont presque interchangeables.

**Ressemblance avec les trois dernières maquettes** : non, sauf un point. Le ton est nuit et club, et non crème et éditorial. Les modules sont propres au métier (console, flight case, playlist). Seul le héros de Location reprend leur plan : texte à gauche, photo à droite.

## Ce qu'un client exigeant ou un DA relèverait

| # | Page · format | Gravité | Constat | Correction |
|---|---|---|---|---|
| 1 | DJ · tous | **bloquant** | « 2018 premiers mix (date à confirmer avec le client) » est affiché tel quel. | Retirer la case, ou n'écrire « 2018 » qu'après confirmation du client ; sinon, mettre « Fête de la musique, Saint-Quentin » à la place. |
| 2 | Événements · tous | **bloquant** | 5 événements sur 11 n'ont pas d'image : une boîte vide avec le nom en LED (Baptême, Festivals, Mairies, Associations, Autre). La page a l'air inachevée. | Générer les 5 vignettes manquantes, ou passer toute la liste sans vignettes. |
| 3 | Location, DJ, Événements, Contact · tous | **à corriger** | Les quatre ouvertures sont identiques : surtitre, titre avec un mot en dégradé, 2 boutons, bandeau photo. | Donner à chaque page son objet d'ouverture :<br>– Location : le flight case fermé, qui s'ouvre en tête ;<br>– DJ : la playlist et le vumètre en plein écran ;<br>– Événements : un sélecteur des 10 événements qui change la salle ;<br>– Contact : le numéro en LED plein écran, avec l'étape 1 visible dès le premier écran. |
| 4 | Événements · tous | **à corriger** | Le bandeau du héros est la même salle allumée que le héros de l'accueil. Location et 404 reprennent la même salle éteinte. On voit la même salle 4 fois. | Ouvrir Événements sur une mosaïque mariage, anniversaire, entreprise, et garder la salle pour l'accueil seul. |
| 5 | Accueil · 390 | **à corriger** | Les faders sont sous le pli. Le premier écran montre la photo et le titre, mais pas la régie. | Remonter une console compacte (3 faders) sur le bas de la photo, avant le titre. |
| 6 | Accueil · tous | **à corriger** | L'audit compte 6 « textes coupés » et 4 « textes qui se chevauchent » : les lignes du h1 sont rognées par leur masque. « RÈGLE », violet sur la salle violette, tombe à 1,05:1 de contraste. | Agrandir le masque des lignes (padding-bottom ou line-height) ; ajouter une ombre portée ou un dégradé sombre sous le titre. |
| 7 | Accueil · 390 | **à corriger** | Les légendes INVITÉS, LUMIÈRE et EFFETS font 11,8 px et « Notre conseil » 11,5 px. Sur ordinateur, « Fumée » fait environ 12 px. | Passer toutes les légendes de la console à 13 ou 14 px. |
| 8 | Toutes · tous | **à corriger** | Le fil (deux lyres) ne se voit presque pas : il ne relie rien à l'œil. | Doubler l'opacité des faisceaux, poser une tache de lumière sur le titre visé et agrandir les lyres à environ 48 px. |
| 9 | Accueil · tous | **à corriger** | Le couvercle du flight case garde ses défauts (regard 3) : boules d'angle, tubes dessinés, texture répétée en grille. Sur téléphone, le couvercle fait presque un écran. | Appliquer les 3 points restants de `regard-da-3-verification.md` ; sur téléphone, couvercle en 3:2, ouvert dès qu'il est visible. |
| 10 | DJ · tous | **à corriger** | Le héros « Deux DJ » ne montre pas les DJ : c'est un contrôleur généré, générique. Plus bas, la photo du duo est sombre et reprend celle de l'accueil. | Demander au client une photo éclairée de Mattéo et Sacha pour le héros ; en attendant, mettre la photo de la Fête de la musique en grand dans le héros, avec sa légende. |
| 11 | DJ · 1440 | **à corriger** | Dans « Chaque moment a sa musique », la moitié gauche reste vide environ un écran, avec une seule image à droite. | Épingler le titre et la liste des 4 temps forts à gauche, en face de l'image. |
| 12 | Location · 390 | **à corriger** | Le catalogue est sur une seule colonne : environ 20 cartes, soit environ 12 écrans. | Passer en 2 colonnes, ou en un rail horizontal par famille. |
| 13 | Location · tous | **à corriger** | La scène du flight case reste épinglée environ 4 écrans, avec le même titre. Le texte des familles est posé sur une photo chargée et se lit mal. | Ramener l'épinglage à environ 2,5 écrans et poser un dégradé sombre derrière le texte des familles. |
| 14 | Location · tous | **à corriger** | La tête annonce « Packs dès 169 € la journée », mais chaque pack dit « Tarif du pack donné dans le devis ». Le relevé note aussi « dès 79 € » sur l'accueil du vrai site. | Faire confirmer le prix par le client, puis afficher « dès 169 € » sur le pack d'entrée, ou retirer le prix de la tête. |
| 15 | Contact · tous | **à corriger** | La même photo du flight case sert en héros et à côté de la FAQ. | Mettre `location-livraison.jpg` à côté de la FAQ. |
| 16 | Contact · 1440 | **à corriger** | « Ou directement » : un titre seul, un grand vide, et une table de mixage qui flotte en bas à droite. | Mettre les 4 cartes de contact en face du titre et retirer la table flottante. |
| 17 | Événements · 1440 | **à corriger** | 11 rangées identiques (image à gauche, texte court) sur environ 6 écrans : la page est monotone, et l'effet de lumière est trop sage. | Faire un index compact à gauche et une grande image qui change à droite, et rendre la teinte de la section franche. |
| 18 | Toutes · tous | **à corriger** | Il manque 5 images de partage (`/assets/partage/*-fr.jpg`), et le logo de l'en-tête n'a pas de nom accessible. | Générer les 5 images de partage, et ajouter `aria-label="NEWPEARS, accueil"` sur le logo. |
| 19 | Toutes · tous | **à corriger** | Le pied de page affiche « Mentions légales : à compléter · Politique de confidentialité : à compléter ». | Mettre un lien « Mentions légales » vers un texte provisoire (éditeur NEWPEARS, Saint-Quentin, SIRET à fournir). |
| 20 | Toutes · 1440 | mineur | Le mot NEWPEARS du logo est petit (environ 11 px) et gris-vert sur le noir. | Le passer en clair, à environ 16 px. |
| 21 | Location · 1440 | mineur | Les 5 vignettes de packs, d'environ 60 px, posées sur la photo du héros, sont illisibles. | Les retirer, ou les mettre en une vraie rangée sous la photo. |
| 22 | Accueil · tous | mineur | Le compteur de la note Google passe par « 3/5 » pendant qu'il compte. | Ne pas animer la note : afficher 5/5 tout de suite. |
| 23 | Accueil / Contact | mineur | La zone est annoncée « 50 km autour » sur l'accueil, et « 40 à 50 km » sur le contact (même incohérence que sur le vrai site). | Écrire partout « 40 à 50 km autour de Saint-Quentin ». |
| 24 | DJ · tous | mineur | « des clubs lillois au Joy » mélange deux choses : le relevé parle de clubs lillois, et de soirées étudiantes au Joy. | Écrire « des clubs lillois, des soirées étudiantes au Joy ». |
| 25 | Contact / Accueil | mineur | La carte « Où nous intervenons » est la même que sur l'accueil. | Sur le contact, faire réagir la carte au champ « Ville » (point allumé et distance). |
| 26 | 404 · 1440 | mineur | La phrase « Cette page n'existe pas… » est posée sur les chaises de la photo, sans fond. | Ajouter un dégradé sombre à gauche. |
| 27 | Accueil · tous | mineur | Les rangées éteintes du mur LED sont à 1,61:1 de contraste. C'est voulu, mais l'audit les compte. | Mettre ces rangées en `aria-hidden`, ou monter le contraste à 3:1. |

## Notes sur les neuf critères (1 à 5)

Critères : 1 Fidélité · 2 Effet signature · 3 Images · 4 Composition · 5 Rythme · 6 Typographie · 7 Niveau vitrine · 8 Envie d'agir · 9 Jeu.

| Page | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | Moyenne |
|---|---|---|---|---|---|---|---|---|---|---|
| Accueil | 4 | 4 | 4 | 4 | 4 | 3 | 3 | 5 | 3 | **3,8** |
| Location | 4 | 4 | 3 | 3 | 3 | 3 | 3 | 5 | 4 | **3,6** |
| Prestation DJ | 3 | 3 | 2 | 3 | 3 | 3 | 2 | 4 | 3 | **2,9** |
| Événements | 4 | 2 | 2 | 3 | 2 | 4 | 2 | 4 | 2 | **2,8** |
| Contact | 5 | 3 | 2 | 3 | 4 | 4 | 3 | 5 | 3 | **3,6** |
| 404 | 4 | 2 | 3 | 3 | 4 | 3 | 2 | 4 | 1 | **2,9** |

En résumé :
- **L'accueil et la location** tiennent la direction « La régie ».
- **Prestation DJ et Événements** sont nettement en dessous. Les ouvertures sont clonées, les images manquent ou sont reprises d'une autre page, et l'effet y est trop sage. Ce sont les deux pages à reprendre avant la livraison.
