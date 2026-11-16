# Rapport d’audit

Projet : `newpears-maquette` · 13/11/2026 17:13:02 · 22 min · 6 page(s) · audit complet

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261113-155043-complet` · version ?v=2
- Échecs : **4**
- À regarder : **2**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (4), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (15), vitesse (5), captures (1)

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

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-150439-standard | standard | toutes | toutes | 56 | 1 | 1 | échecs |
| 20261113-152451-standard-cible-partiel | standard | /,/contact,/evenements,/location,/prestation-dj | fichiers, mesures, films, parcours | 21 | 1 | 0 | échecs |
| 20261113-153408-standard-cible-partiel | standard | /,/contact,/evenements,/location,/prestation-dj | fichiers, mesures, films | 9 | 1 | 0 | échecs |
| 20261113-153851-standard-cible-partiel | standard | /,/location | fichiers, mesures | 0 | 0 | 0 | complet |
| **20261113-155043-complet** (celle-ci) | complet | toutes | toutes | 4 | 2 | 1 | échecs |

## Échecs

### pages générées (1)

- **pages générées** — pas régénérées depuis la dernière modification des données (node outils/generer.mjs) : 404.html, contact.html, evenements.html, index.html, location.html, prestation-dj.html

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#regie > div.regie-texte:nth-of-type(2) > p.regie-info:nth-of-type(4) « Devis gratuit sous 24 h, 7 j/7 · Packs dès 169 € l » _(844×390 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.tete-texte.conteneur:nth-of-type(1) > p.tete-actions:nth-of-type(2) > span.tete-info « Réponse sous 24 h, 7 j/7, y compris pour les deman » _(1000×560 sansJs)_

### stabilité au chargement (CLS) (1)

- **stabilité au chargement (CLS)** — `/location` — p.etal-legende ; img ; button.etal-pack — 0.171 (0 visé, 0,05 au plus) _(1366×768 premier chargement)_

## À regarder

### numéro de version (1)

- **numéro de version** — ?v=2 est celui de la dernière livraison : à changer avant de livrer

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
- Journal v2 : 3 étape(s) notée(s), 57 min de travail pour 85 min de budget, 7 min d’attente de l’utilisateur.
- Journal : « audit et corrections » 35 min pour 20 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2752 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2560 ms depuis le premier octet
- Ouverture /evenements (1366×768) : 2558 ms depuis le premier octet
- Ouverture /location (1366×768) : 2622 ms depuis le premier octet
- Ouverture /prestation-dj (1366×768) : 2509 ms depuis le premier octet
- film de l'ouverture /prestation-dj 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2740 ms depuis le premier octet
- Ouverture /contact (390×844) : 2612 ms depuis le premier octet
- Ouverture /evenements (390×844) : 2537 ms depuis le premier octet
- Ouverture /location (390×844) : 2710 ms depuis le premier octet
- film de l'ouverture /location 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /prestation-dj (390×844) : 2620 ms depuis le premier octet
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 439 images d’intro, 11 de voile et 175 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /evenements : aucun effet ScrollTrigger, rien à recalculer.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /evenements : aucune section épinglée ou plein écran.
- Tient dans l'écran /location : aucune section épinglée ou plein écran.
- Tient dans l'écran /prestation-dj : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 311, tâche la plus longue 75 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 221, tâche la plus longue 0 ms
- Fluidité /evenements 1366×768 (molette) : 0 % d'images lentes sur 361, tâche la plus longue 0 ms
- Fluidité /location 1366×768 (molette) : 2 % d'images lentes sur 430, tâche la plus longue 0 ms
- Fluidité /prestation-dj 1366×768 (molette) : 0 % d'images lentes sur 236, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1417, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1359, tâche la plus longue 0 ms
- Fluidité /evenements 390×844 (doigt) : 0 % d'images lentes sur 1364, tâche la plus longue 0 ms
- Fluidité /location 390×844 (doigt) : 0 % d'images lentes sur 1358, tâche la plus longue 0 ms
- Fluidité /prestation-dj 390×844 (doigt) : 0 % d'images lentes sur 1417, tâche la plus longue 0 ms
- Vitesse / : 0.47 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /evenements : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /location : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /prestation-dj : 0.24 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --seulement=fichiers,mesures,films
```
