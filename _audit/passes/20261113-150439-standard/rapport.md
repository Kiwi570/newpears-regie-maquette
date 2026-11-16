# Rapport d’audit

Projet : `newpears-maquette` · 13/11/2026 16:22:58 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **56 échec(s)**
- Passe : `20261113-150439-standard` · version ?v=2
- Échecs : **56**
- À regarder : **1**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (4), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (15), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en faisceau |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur /, /location |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact, /, /location, /prestation-dj |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### zone tactile sous 44 px (12)

- **zone tactile sous 44 px** — `/` — section#regie > div.conseil:nth-of-type(4) > label.conseil-invites:nth-of-type(1) > input « Invités » — 140 × 28 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(1) > a « MARIAGE » — 86 × 26 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(2) > a « ANNIVERSAIRE » — 139 × 26 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(3) > a.actif « BAPTÊME ET FAMILLE » — 196 × 26 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(4) > a « ENTREPRISES » — 129 × 26 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(5) > a « SÉMINAIRES ET CONFÉRENCES » — 287 × 26 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(6) > a « FESTIVALS ET CONCERTS EN PLEIN AIR » — 358 × 26 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(7) > a « ASSOCIATIONS » — 144 × 26 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(8) > a « BARS ET RESTAURANTS » — 221 × 26 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(9) > a « MAIRIES ET COLLECTIVITÉS » — 254 × 26 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(10) > a « FÊTES DE FIN D'ANNÉE » — 204 × 26 px _(768×1024 normal, 844×390 normal)_
- **zone tactile sous 44 px** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(11) > a « AUTRE ÉVÉNEMENT » — 180 × 26 px _(768×1024 normal, 844×390 normal)_

### texte coupé (12)

- **texte coupé** — `/` — section#regie > div.conseil:nth-of-type(4) > label.conseil-invites:nth-of-type(1) > span.conseil-unite:nth-of-type(2) « invités » — coupé par section#regie « LA SOIRÉE, ON LA RÈGLE AVEC VOUS. Demander un devi » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(1) > a « MARIAGE » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(2) > a « ANNIVERSAIRE » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(3) > a.actif « BAPTÊME ET FAMILLE » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(4) > a « ENTREPRISES » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(5) > a « SÉMINAIRES ET CONFÉRENCES » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(6) > a « FESTIVALS ET CONCERTS EN PLEIN AIR » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(7) > a « ASSOCIATIONS » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(8) > a « BARS ET RESTAURANTS » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(9) > a « MAIRIES ET COLLECTIVITÉS » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(10) > a « FÊTES DE FIN D'ANNÉE » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_
- **texte coupé** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(11) > a « AUTRE ÉVÉNEMENT » — coupé par section#debut « Illustration générée ÉVÉNEMENTS CHAQUE ÉVÉNEMENT A » _(768×1024 normal)_

### élément recouvert (5)

- **élément recouvert** — `/contact` — section#demande > div.conteneur.demande-grille > form.devis > h2 « QUATRE ÉTAPES, UNE MINUTE » — par section#demande > div.conteneur.demande-grille > form.devis > div.tampon:nth-of-type(2) « DEMANDE REÇUE » _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(2) > button.etal-pack « CONFORT » — par ul.etal-packs > li:nth-of-type(1) > button.etal-pack.actif > img _(390×844 normal, 768×1024 normal, 1366×768 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(3) > button.etal-pack « AMBIANCE » — par ul.etal-packs > li:nth-of-type(4) > button.etal-pack > img _(390×844 normal, 768×1024 normal, 1920×1080 normal, 1366×768 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(4) > button.etal-pack « CLUB » — par ul.etal-packs > li:nth-of-type(5) > button.etal-pack > img _(390×844 normal, 768×1024 normal, 1920×1080 normal, 1366×768 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(2) > button.etal-pack « CONFORT » — par ul.etal-packs > li:nth-of-type(3) > button.etal-pack > img _(1920×1080 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/evenements` — section#debut > div.tete-texte.conteneur:nth-of-type(2) > p.tete-actions:nth-of-type(3) > a.bouton « Choisissez votre événement » _(320×568 normal, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/evenements` — section#debut > div.tete-texte.conteneur:nth-of-type(2) > p.tete-actions:nth-of-type(3) > span.tete-info « Devis sous 24 h, 7 j/7 » _(320×568 normal, 320×568 sansJs)_

### textes qui se chevauchent (14)

- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(1) > a « MARIAGE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(2) > a « ANNIVERSAIRE » _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(2) > a « ANNIVERSAIRE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(3) > a.actif « BAPTÊME ET FAMILLE » _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(3) > a.actif « BAPTÊME ET FAMILLE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(4) > a « ENTREPRISES » _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(4) > a « ENTREPRISES » — avec section#debut > ul.ambiances-noms > li:nth-of-type(5) > a « SÉMINAIRES ET CONFÉRENCES » _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(5) > a « SÉMINAIRES ET CONFÉRENCES » — avec section#debut > ul.ambiances-noms > li:nth-of-type(6) > a « FESTIVALS ET CONCERTS EN PLEIN AIR » _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(6) > a « FESTIVALS ET CONCERTS EN PLEIN AIR » — avec section#debut > ul.ambiances-noms > li:nth-of-type(7) > a « ASSOCIATIONS » _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(7) > a « ASSOCIATIONS » — avec section#debut > ul.ambiances-noms > li:nth-of-type(8) > a « BARS ET RESTAURANTS » _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(8) > a « BARS ET RESTAURANTS » — avec section#debut > ul.ambiances-noms > li:nth-of-type(9) > a « MAIRIES ET COLLECTIVITÉS » _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(9) > a « MAIRIES ET COLLECTIVITÉS » — avec section#debut > ul.ambiances-noms > li:nth-of-type(10) > a « FÊTES DE FIN D'ANNÉE » _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(10) > a « FÊTES DE FIN D'ANNÉE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(11) > a « AUTRE ÉVÉNEMENT » _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(1) > a.actif « MARIAGE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(2) > a « ANNIVERSAIRE » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(2) > a « ANNIVERSAIRE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(3) > a « BAPTÊME ET FAMILLE » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(3) > a « BAPTÊME ET FAMILLE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(4) > a « ENTREPRISES » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/prestation-dj` — section#debut > div.controleur:nth-of-type(2) > p.controleur-consigne > span.consigne-souris:nth-of-type(1) « Faites tourner les platines. » — avec section#debut > p.tete-texte-bas.conteneur « Mattéo et Sacha installent le son et la lumière av » _(1920×1080 normal)_

### contraste sur image (2)

- **contraste sur image** — `/evenements` — div.tete-texte.conteneur:nth-of-type(2) > h1 > span.ligne-masque:nth-of-type(2) > span.tete-ligne « A SON AMBIANCE » — 1.67:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/evenements` — h1 > span.ligne-masque:nth-of-type(2) > span.tete-ligne > em « AMBIANCE » — 1.04:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### texte sous 12 px (7)

- **texte sous 12 px** — `/location` — ul.etal-packs > li:nth-of-type(1) > button.etal-pack.actif > span.etal-nom « ESSENTIEL » — 9.9 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/location` — ul.etal-packs > li:nth-of-type(2) > button.etal-pack > span.etal-nom « CONFORT » — 9.9 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/location` — ul.etal-packs > li:nth-of-type(3) > button.etal-pack > span.etal-nom « AMBIANCE » — 9.9 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/location` — ul.etal-packs > li:nth-of-type(4) > button.etal-pack > span.etal-nom « CLUB » — 9.9 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/location` — ul.etal-packs > li:nth-of-type(5) > button.etal-pack > span.etal-nom « PROFESSIONNEL » — 9.9 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/location` — ul.etal-packs > li:nth-of-type(1) > button.etal-pack > span.etal-nom « ESSENTIEL » — 9.9 px _(390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/location` — ul.etal-packs > li:nth-of-type(4) > button.etal-pack.actif > span.etal-nom « CLUB » — 9.9 px _(390×844 sansJs, 320×568 sansJs)_

### stabilité au chargement (CLS) (1)

- **stabilité au chargement (CLS)** — `/location` — img ; img ; button.etal-pack.actif — 0.161 (0 visé, 0,05 au plus) _(1366×768 premier chargement)_

### clavier (1)

- **clavier** — `/` — input «  » — le focus arrive sur un élément caché _(1366×768)_

## À regarder

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/prestation-dj` — div.temps-grille > figure.media.temps-grand:nth-of-type(1) > picture > img « Cabine DJ prête, casque et ordinateur, faisceaux d » — grok/accueil-cabine (3/5, 44 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 0 étape(s) notée(s), 0 min de travail, 5 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /evenements, /location, /prestation-dj.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2647 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2602 ms depuis le premier octet
- Ouverture /evenements (1366×768) : 2528 ms depuis le premier octet
- film de l'ouverture /evenements 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /location (1366×768) : 2578 ms depuis le premier octet
- Ouverture /prestation-dj (1366×768) : 2546 ms depuis le premier octet
- Ouverture / (390×844) : 2715 ms depuis le premier octet
- Ouverture /contact (390×844) : 2588 ms depuis le premier octet
- Ouverture /evenements (390×844) : 2516 ms depuis le premier octet
- film de l'ouverture /evenements 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /location (390×844) : 2703 ms depuis le premier octet
- Ouverture /prestation-dj (390×844) : 2536 ms depuis le premier octet
- film de l'ouverture /prestation-dj 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 478 images d’intro, 9 de voile et 180 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /evenements : aucun effet ScrollTrigger, rien à recalculer.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /evenements : aucune section épinglée ou plein écran.
- Tient dans l'écran /location : aucune section épinglée ou plein écran.
- Tient dans l'écran /prestation-dj : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 334, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 232, tâche la plus longue 0 ms
- Fluidité /evenements 1366×768 (molette) : 0 % d'images lentes sur 372, tâche la plus longue 0 ms
- Fluidité /location 1366×768 (molette) : 1 % d'images lentes sur 440, tâche la plus longue 0 ms
- Fluidité /prestation-dj 1366×768 (molette) : 0 % d'images lentes sur 230, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1395, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1353, tâche la plus longue 0 ms
- Fluidité /evenements 390×844 (doigt) : 0 % d'images lentes sur 1365, tâche la plus longue 0 ms
- Fluidité /location 390×844 (doigt) : 0 % d'images lentes sur 1357, tâche la plus longue 0 ms
- Fluidité /prestation-dj 390×844 (doigt) : 0 % d'images lentes sur 1407, tâche la plus longue 0 ms
- Vitesse / : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /evenements : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /location : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /prestation-dj : 0.21 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/contact,/evenements,/location,/prestation-dj --seulement=fichiers,mesures,films,parcours
```
