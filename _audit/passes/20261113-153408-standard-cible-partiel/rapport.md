# Rapport d’audit

Projet : `newpears-maquette` · 13/11/2026 16:38:31 · 4 min · 5 page(s) · audit standard ciblé sur /,/contact,/evenements,/location,/prestation-dj (étapes : fichiers, mesures, films)

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261113-153408-standard-cible-partiel` · version ?v=2
- Échecs : **9**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (55), balayage (5), films d’ouverture (10), films de transition (10)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-150439-standard | standard | toutes | toutes | 56 | 1 | 1 | échecs |
| 20261113-152451-standard-cible-partiel | standard | /,/contact,/evenements,/location,/prestation-dj | fichiers, mesures, films, parcours | 21 | 1 | 0 | échecs |
| **20261113-153408-standard-cible-partiel** (celle-ci) | standard | /,/contact,/evenements,/location,/prestation-dj | fichiers, mesures, films | 9 | 1 | 0 | échecs |

## Échecs

### texte coupé (3)

- **texte coupé** — `/location` — section#debut > div.etal:nth-of-type(2) > p.etal-legende:nth-of-type(1) > span « Un petit moment à la maison, un repas de famille. » — coupé par section#debut > div.etal:nth-of-type(2) > p.etal-legende:nth-of-type(1) « PACK ESSENTIEL Un petit moment à la maison, un rep » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte coupé** — `/location` — section#debut > div.etal:nth-of-type(2) > p.etal-legende:nth-of-type(1) > a.lien-fleche « Voir ce pack » — coupé par section#debut > div.etal:nth-of-type(2) > p.etal-legende:nth-of-type(1) « PACK ESSENTIEL Un petit moment à la maison, un rep » _(768×1024 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte coupé** — `/location` — section#debut > div.etal:nth-of-type(2) > p.etal-legende:nth-of-type(1) > span « Une salle des fêtes qui veut une vraie piste de cl » — coupé par section#debut > div.etal:nth-of-type(2) > p.etal-legende:nth-of-type(1) « PACK CLUB Une salle des fêtes qui veut une vraie p » _(390×844 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/location` — section#debut > div.etal:nth-of-type(2) > p.etal-legende:nth-of-type(1) > a.lien-fleche « Voir ce pack » — avec section#debut > div.etal:nth-of-type(2) > p.etal-consigne:nth-of-type(2) > span.consigne-tactile:nth-of-type(2) « Touchez un pack pour l'éclairer. » _(768×1024 normal)_
- **textes qui se chevauchent** — `/location` — section#debut > div.etal:nth-of-type(2) > p.etal-legende:nth-of-type(1) > a.lien-fleche « Voir ce pack » — avec section#debut > div.etal:nth-of-type(2) > p.etal-consigne:nth-of-type(2) > span.consigne-souris:nth-of-type(1) « Passez sur un pack : la poursuite l'éclaire. » _(1366×768 normal, 1366×768 sansWebgl)_

### élément recouvert (4)

- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(2) > button.etal-pack « CONFORT » — par ul.etal-packs > li:nth-of-type(1) > button.etal-pack.actif > img _(768×1024 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(3) > button.etal-pack « AMBIANCE » — par ul.etal-packs > li:nth-of-type(4) > button.etal-pack > img _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(4) > button.etal-pack « CLUB » — par ul.etal-packs > li:nth-of-type(5) > button.etal-pack > img _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(2) > button.etal-pack « CONFORT » — par ul.etal-packs > li:nth-of-type(3) > button.etal-pack > img _(1366×768 normal)_

## À regarder

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/prestation-dj` — div.temps-grille > figure.media.temps-grand:nth-of-type(1) > picture > img « Cabine DJ prête, casque et ordinateur, faisceaux d » — grok/accueil-cabine (3/5, 44 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 0 étape(s) notée(s), 0 min de travail, 5 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /evenements, /location, /prestation-dj.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2789 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2634 ms depuis le premier octet
- Ouverture /evenements (1366×768) : 2552 ms depuis le premier octet
- film de l'ouverture /evenements 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /location (1366×768) : 2752 ms depuis le premier octet
- Ouverture /prestation-dj (1366×768) : 2548 ms depuis le premier octet
- Ouverture / (390×844) : 2728 ms depuis le premier octet
- Ouverture /contact (390×844) : 2600 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /evenements (390×844) : 2575 ms depuis le premier octet
- Ouverture /location (390×844) : 2708 ms depuis le premier octet
- film de l'ouverture /location 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /prestation-dj (390×844) : 2581 ms depuis le premier octet
- film de l'ouverture /prestation-dj 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)

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
