# Rapport d’audit

Projet : `newpears-maquette` · 13/11/2026 15:30:58 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261113-141242-standard` · version ?v=1
- Échecs : **4**
- À regarder : **4**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (4), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (17), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-115219-rapide-cible | rapide | / | toutes | 57 | 7 | 1 | échecs |
| **20261113-141242-standard** (celle-ci) | standard | toutes | toutes | 4 | 4 | 1 | échecs |

## Échecs

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/` — section#regie > div.regie-salle:nth-of-type(1) > figure.media.regie-photo:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — avec section#regie > div.regie-salle:nth-of-type(1) > figure.media.regie-photo:nth-of-type(2) > figcaption.mention-ia « Illustration générée » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **textes qui se chevauchent** — `/` — section#flight-case > div.case-scene.conteneur:nth-of-type(2) > figure.media.case-fond > figcaption.mention-ia « Illustration générée » — avec div.case-scene.conteneur:nth-of-type(2) > ul.case-produits > li.case-produit:nth-of-type(1) > h3 « ENCEINTE AMPLIFIÉE » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#flight-case > div.case-scene.conteneur:nth-of-type(2) > figure.media.case-fond > figcaption.mention-ia « Illustration générée » — avec div.case-scene.conteneur:nth-of-type(2) > ul.case-produits > li.case-produit:nth-of-type(2) > h3 « LYRE BEAM 100W » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/location` — div.case-collant > div.case-fond:nth-of-type(1) > figure.media.case-photo > figcaption.mention-ia « Illustration générée » — avec section#flight-case > div.case-collant > div.case-texte.conteneur:nth-of-type(2) > p.sur « DANS LE FLIGHT CASE » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

## À regarder

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/prestation-dj` — div.temps-grille > figure.media.temps-grand:nth-of-type(1) > picture > img « Cabine DJ prête, casque et ordinateur, faisceaux d » — grok/accueil-cabine (3/5, 44 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### au retour arrière, élément qui réapparaît en s’animant (2)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — section#regie > div.regie-salle > figure.media.regie-photo « Illustration générée » _(1366×768 retour arrière, 390×844 retour arrière)_
- **au retour arrière, élément qui réapparaît en s’animant** — `/` — figure.media.regie-photo > picture > img « La même salle en pleine soirée, faisceau » _(1366×768 retour arrière, 390×844 retour arrière)_

### fluidité (1)

- **fluidité** — `/` — 4 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 125 min de travail pour 130 min de budget, 13 min d’attente de l’utilisateur.
- Journal : « construction : accueil » 77 min pour 45 prévues.
- Journal : « construction : contact et page de catégorie » 15 min pour 10 prévues.
- Audit standard : étapes lourdes sur /, /contact, /evenements, /location, /prestation-dj.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2679 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2634 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /evenements (1366×768) : 2621 ms depuis le premier octet
- Ouverture /location (1366×768) : 2725 ms depuis le premier octet
- Ouverture /prestation-dj (1366×768) : 2658 ms depuis le premier octet
- Ouverture / (390×844) : 2742 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2578 ms depuis le premier octet
- Ouverture /evenements (390×844) : 2536 ms depuis le premier octet
- Ouverture /location (390×844) : 2645 ms depuis le premier octet
- Ouverture /prestation-dj (390×844) : 2593 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 464 images d’intro, 13 de voile et 142 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /evenements : aucun effet ScrollTrigger, rien à recalculer.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /evenements : aucune section épinglée ou plein écran.
- Tient dans l'écran /location : aucune section épinglée ou plein écran.
- Tient dans l'écran /prestation-dj : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 160, tâche la plus longue 0 ms
- Fluidité /evenements 1366×768 (molette) : 0 % d'images lentes sur 361, tâche la plus longue 0 ms
- Fluidité /location 1366×768 (molette) : 0 % d'images lentes sur 430, tâche la plus longue 77 ms
- Fluidité /prestation-dj 1366×768 (molette) : 0 % d'images lentes sur 230, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1275, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /evenements 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /location 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /prestation-dj 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Vitesse / : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /evenements : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /location : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /prestation-dj : 0.29 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/location --seulement=fichiers,mesures
```
