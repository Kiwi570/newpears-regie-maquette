# Rapport d’audit

Projet : `np-v5` · 16/11/2026 15:44:28 · 19 min · 6 page(s) · audit standard

## Résumé

- Statut : **22 échec(s)**
- Passe : `20261116-142558-standard` · version ?v=5
- Échecs : **22**
- À regarder : **19**
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

### contraste insuffisant (16)

- **contraste insuffisant** — `/` — div.case-scene.conteneur:nth-of-type(2) > div.couvercle > span.couvercle-consigne:nth-of-type(12) > span.consigne-tactile:nth-of-type(2) « TOUCHEZ POUR OUVRIR » — 3.48:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/` — section#flight-case > div.case-scene.conteneur:nth-of-type(2) > button.case-bouton « Ouvrir le flight case » — 1.26:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/` — ul.evts-liste > li.actif:nth-of-type(3) > a.evt-lien > span.evt-nom:nth-of-type(2) « ENTREPRISES » — 1.35:1 (minimum 3:1) _(768×1024 normal, 320×568 normal)_
- **contraste insuffisant** — `/` — section#evenements > div.conteneur > p.evts-pied:nth-of-type(2) > span.mention-ia.mention-ia--liste « Vignettes : illustrations générées » — 2.09:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/` — ul.evts-liste > li.actif:nth-of-type(6) > a.evt-lien > span.evt-nom:nth-of-type(2) « FÊTES DE FIN D'ANNÉE » — 1.43:1 (minimum 3:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/` — ul.evts-liste > li.actif:nth-of-type(4) > a.evt-lien > span.evt-nom:nth-of-type(2) « SÉMINAIRES ET CONFÉRENCES » — 1.40:1 (minimum 3:1) _(844×390 normal)_
- **contraste insuffisant** — `/` — ul.evts-liste > li.actif:nth-of-type(1) > a.evt-lien > span.evt-nom:nth-of-type(2) « MARIAGE » — 1.79:1 (minimum 3:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — div.case-scene.conteneur:nth-of-type(2) > div.couvercle > span.couvercle-consigne:nth-of-type(12) > span.consigne-souris:nth-of-type(1) « TIREZ POUR OUVRIR » — 3.48:1 (minimum 4.5:1) _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/` — ul.evts-liste > li.actif:nth-of-type(5) > a.evt-lien > span.evt-nom:nth-of-type(2) « BARS ET RESTAURANTS » — 1.56:1 (minimum 3:1) _(1920×1080 normal)_
- **contraste insuffisant** — `/evenements` — li#autre > div.index-ligne:nth-of-type(1) > span.index-n « 11 » — 2.83:1 (minimum 4.5:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/evenements` — li#autre > div.index-ligne:nth-of-type(1) > h3 « AUTRE ÉVÉNEMENT » — 1.60:1 (minimum 3:1) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/evenements` — li#mariage > div.index-ligne:nth-of-type(1) > span.index-n « 01 » — 4.23:1 (minimum 4.5:1) _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/evenements` — li#mariage > div.index-ligne:nth-of-type(1) > h3 « MARIAGE » — 1.91:1 (minimum 3:1) _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **contraste insuffisant** — `/prestation-dj` — div.playlist-ecran:nth-of-type(2) > div.playlist-colonnes:nth-of-type(2) > div:nth-of-type(1) > p.playlist-titre « À JOUER » — 3.73:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/prestation-dj` — div.playlist-colonnes:nth-of-type(2) > div:nth-of-type(1) > ul > li.vide « Aucun choix pour l'instant. » — 2.91:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/prestation-dj` — div.playlist-colonnes:nth-of-type(2) > div:nth-of-type(2) > ul > li.vide « Aucun choix pour l'instant. » — 2.91:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### accessibilité (axe) : color-contrast (5)

- **accessibilité (axe) : color-contrast** — `/` — .case-bouton ; .led-rangee[data-sens="1"][data-effet="led-styles"]:nth-child(1) > span:nth-child(1) ; .led-rangee[data-sens="1"][data-effet="led-styles"]:nth-child(1) > span:nth-child(2) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/` — .led-rangee[data-sens="1"][data-effet="led-styles"]:nth-child(1) > span:nth-child(1) ; .led-rangee[data-sens="1"][data-effet="led-styles"]:nth-child(1) > span:nth-child(2) ; .led-rangee[data-sens="1"][data-effet="led-styles"]:nth-child(1) > span:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/evenements` — #autre > .index-ligne > .index-n ; #autre > .index-ligne > h3 — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/evenements` — #mariage > .index-ligne > .index-n ; #mariage > .index-ligne > h3 — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/prestation-dj` — div:nth-child(1) > .playlist-titre ; ul[data-liste="garder"] > .vide ; ul[data-liste="eviter"] > .vide — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/evenements` — section#debut.tete.tete--evts — ses effets (ambiances) ne bougent pas, ou sont cachés à cette taille _(1366×768 normal, 390×844 normal)_

## À regarder

### texte de contenu sous 13 px (ordinateur) (17)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#regie > div.regie-texte:nth-of-type(2) > p.sur:nth-of-type(1) « SON · LUMIÈRE · DJ POUR MARIAGES ET SOIRÉES — SAIN » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#metiers > p.sur « NOS DEUX MÉTIERS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#dj > div.conteneur.dj-grille:nth-of-type(2) > div.dj-texte > p.sur:nth-of-type(1) « CÔTÉ PLATINES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#evenements > div.conteneur > p.sur:nth-of-type(1) « NOS PRESTATIONS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#zone > div.conteneur.zone-grille > div:nth-of-type(1) > p.sur:nth-of-type(1) « OÙ NOUS INTERVENONS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.tete-texte.conteneur:nth-of-type(1) > p.sur:nth-of-type(1) « CONTACT ET DEVIS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#demande > div.conteneur.demande-grille > form.devis > p.sur:nth-of-type(1) « VOTRE DEMANDE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/evenements` — section#index > div.conteneur > p.sur « CHOISISSEZ VOTRE ÉVÉNEMENT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/evenements` — section#formules > p.sur « DEUX FORMULES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/location` — section#debut > div.tete-texte:nth-of-type(1) > p.sur:nth-of-type(1) « LOCATION À LA JOURNÉE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/location` — section#flight-case > div.case-collant > div.case-texte.conteneur:nth-of-type(2) > p.sur « DANS LE FLIGHT CASE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/location` — section#catalogue > div.conteneur > p.sur:nth-of-type(1) « LE CATALOGUE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/prestation-dj` — section#debut > div.tete-texte.conteneur:nth-of-type(1) > p.sur:nth-of-type(1) « PRESTATION DJ » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/prestation-dj` — section#inclus > p.sur « TOUT EST COMPRIS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/prestation-dj` — section#playlist > div.conteneur.playlist-grille > div:nth-of-type(1) > p.sur:nth-of-type(1) « VOTRE MUSIQUE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/prestation-dj` — section#temps-forts > p.sur:nth-of-type(1) « LES TEMPS FORTS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/prestation-dj` — section#duo > div.conteneur.duo-grille > div > p.sur:nth-of-type(1) « QUI SOMMES-NOUS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/location` — écran différent à la même position après rechargement (6.9 %), voir comparaisons/rechargement-location-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/evenements` — span.ambiances-lumiere — ambiances : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=5
- Journal v5 : 1 étape(s) notée(s), 8 min de travail pour 40 min de budget, 2 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /evenements, /location, /prestation-dj.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2822 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2623 ms depuis le premier octet
- Ouverture /evenements (1366×768) : 2590 ms depuis le premier octet
- Ouverture /location (1366×768) : 2637 ms depuis le premier octet
- film de l'ouverture /location 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /prestation-dj (1366×768) : 2649 ms depuis le premier octet
- Ouverture / (390×844) : 2784 ms depuis le premier octet
- Ouverture /contact (390×844) : 2611 ms depuis le premier octet
- Ouverture /evenements (390×844) : 2638 ms depuis le premier octet
- film de l'ouverture /evenements 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /location (390×844) : 2734 ms depuis le premier octet
- film de l'ouverture /location 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /prestation-dj (390×844) : 2606 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 370 images d’intro, 15 de voile et 163 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /evenements : aucun effet ScrollTrigger, rien à recalculer.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /evenements : aucune section épinglée ou plein écran.
- Tient dans l'écran /location : aucune section épinglée ou plein écran.
- Tient dans l'écran /prestation-dj : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 322, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 240, tâche la plus longue 0 ms
- Fluidité /evenements 1366×768 (molette) : 0 % d'images lentes sur 368, tâche la plus longue 0 ms
- Fluidité /location 1366×768 (molette) : 0 % d'images lentes sur 445, tâche la plus longue 0 ms
- Fluidité /prestation-dj 1366×768 (molette) : 0 % d'images lentes sur 232, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1407, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1369, tâche la plus longue 0 ms
- Fluidité /evenements 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /location 390×844 (doigt) : 0 % d'images lentes sur 1354, tâche la plus longue 0 ms
- Fluidité /prestation-dj 390×844 (doigt) : 0 % d'images lentes sur 1425, tâche la plus longue 0 ms
- Vitesse / : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /evenements : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /location : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /prestation-dj : 0.24 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/evenements,/prestation-dj --seulement=fichiers,mesures,mouvement
```
