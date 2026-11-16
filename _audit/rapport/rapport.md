# Rapport d’audit

Projet : `np-v7` · 16/11/2026 18:04:40 · 5 min · 1 page(s) · audit standard ciblé sur /

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-165925-standard-cible` · version ?v=7
- Échecs : **0**
- À regarder : **1**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (11), balayage (1), films d’ouverture (2), films de transition (2), bords de l’écran (2), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (12), liens vers la page en cours (1), changements de hauteur (1), parcours du projet (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (15), vitesse (1), captures (1)

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

Aucun.

## À regarder

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (5.9 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=7
- Journal v7 : 1 étape(s) notée(s), 14 min de travail pour 25 min de budget, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2815 ms depuis le premier octet
- Ouverture / (390×844) : 2780 ms depuis le premier octet
- Bords de l’écran : 143 images d’intro, 5 de voile et 57 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 326, tâche la plus longue 50 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1407, tâche la plus longue 0 ms
- Vitesse / : 0.44 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
