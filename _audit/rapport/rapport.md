# Rapport d’audit

Projet : `np-v5` · 16/11/2026 16:08:12 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-144945-standard` · version ?v=5
- Échecs : **0**
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

## Passes de cette version (?v=5)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-142558-standard | standard | toutes | toutes | 22 | 19 | 1 | échecs |
| 20261116-144526-standard-cible-partiel | standard | /,/evenements,/prestation-dj | fichiers, mesures, mouvement | 1 | 0 | 0 | échecs |
| 20261116-144750-standard-cible-partiel | standard | / | fichiers, mesures | 1 | 0 | 0 | échecs |
| 20261116-144910-standard-cible-partiel | standard | / | fichiers, mesures | 0 | 0 | 0 | complet |
| **20261116-144945-standard** (celle-ci) | standard | toutes | toutes | 0 | 1 | 1 | complet |

## Échecs

Aucun.

## À regarder

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/location` — écran différent à la même position après rechargement (6.9 %), voir comparaisons/rechargement-location-*.png _(1366×768)_

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
- Ouverture / (1366×768) : 2777 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2648 ms depuis le premier octet
- Ouverture /evenements (1366×768) : 2668 ms depuis le premier octet
- film de l'ouverture /evenements 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /location (1366×768) : 2781 ms depuis le premier octet
- Ouverture /prestation-dj (1366×768) : 2591 ms depuis le premier octet
- Ouverture / (390×844) : 2770 ms depuis le premier octet
- Ouverture /contact (390×844) : 2600 ms depuis le premier octet
- Ouverture /evenements (390×844) : 2576 ms depuis le premier octet
- Ouverture /location (390×844) : 2694 ms depuis le premier octet
- Ouverture /prestation-dj (390×844) : 2622 ms depuis le premier octet
- film de l'ouverture /prestation-dj 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 406 images d’intro, 10 de voile et 183 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /evenements : aucun effet ScrollTrigger, rien à recalculer.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /evenements : aucune section épinglée ou plein écran.
- Tient dans l'écran /location : aucune section épinglée ou plein écran.
- Tient dans l'écran /prestation-dj : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 325, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 227, tâche la plus longue 0 ms
- Fluidité /evenements 1366×768 (molette) : 0 % d'images lentes sur 365, tâche la plus longue 0 ms
- Fluidité /location 1366×768 (molette) : 0 % d'images lentes sur 445, tâche la plus longue 0 ms
- Fluidité /prestation-dj 1366×768 (molette) : 0 % d'images lentes sur 233, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1412, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1362, tâche la plus longue 0 ms
- Fluidité /evenements 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /location 390×844 (doigt) : 0 % d'images lentes sur 1353, tâche la plus longue 0 ms
- Fluidité /prestation-dj 390×844 (doigt) : 0 % d'images lentes sur 1425, tâche la plus longue 0 ms
- Vitesse / : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.23 s de calcul au chargement (téléphone ralenti).
- Vitesse /evenements : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /location : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /prestation-dj : 0.26 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
