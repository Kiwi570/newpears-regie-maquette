# Rapport d’audit

Projet : `newpears-maquette` · 13/11/2026 16:33:44 · 9 min · 5 page(s) · audit standard ciblé sur /,/contact,/evenements,/location,/prestation-dj (étapes : fichiers, mesures, films, parcours)

## Résumé

- Statut : **21 échec(s)**
- Passe : `20261113-152451-standard-cible-partiel` · version ?v=2
- Échecs : **21**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (55), balayage (5), films d’ouverture (10), films de transition (10), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (16), liens vers la page en cours (5), changements de hauteur (4), parcours du projet (1)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-150439-standard | standard | toutes | toutes | 56 | 1 | 1 | échecs |
| **20261113-152451-standard-cible-partiel** (celle-ci) | standard | /,/contact,/evenements,/location,/prestation-dj | fichiers, mesures, films, parcours | 21 | 1 | 0 | échecs |

## Échecs

### élément recouvert (8)

- **élément recouvert** — `/contact` — section#demande > div.conteneur.demande-grille > form.devis > h2 « QUATRE ÉTAPES, UNE MINUTE » — par section#demande > div.conteneur.demande-grille > form.devis > div.tampon:nth-of-type(2) « DEMANDE REÇUE » _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(2) > button.etal-pack « Pack Confort » — par ul.etal-packs > li:nth-of-type(3) > button.etal-pack > img _(390×844 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(3) > button.etal-pack « Pack Ambiance » — par ul.etal-packs > li:nth-of-type(4) > button.etal-pack > img _(390×844 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(4) > button.etal-pack « Pack Club » — par ul.etal-packs > li:nth-of-type(5) > button.etal-pack > img _(390×844 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(2) > button.etal-pack « CONFORT » — par ul.etal-packs > li:nth-of-type(1) > button.etal-pack.actif > img _(768×1024 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(3) > button.etal-pack « AMBIANCE » — par ul.etal-packs > li:nth-of-type(4) > button.etal-pack > img _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(4) > button.etal-pack « CLUB » — par ul.etal-packs > li:nth-of-type(5) > button.etal-pack > img _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/location` — div.etal:nth-of-type(2) > ul.etal-packs > li:nth-of-type(2) > button.etal-pack « CONFORT » — par ul.etal-packs > li:nth-of-type(3) > button.etal-pack > img _(1366×768 normal)_

### textes qui se chevauchent (10)

- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(1) > a « MARIAGE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(2) > a « ANNIVERSAIRE » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(2) > a « ANNIVERSAIRE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(3) > a.actif « BAPTÊME ET FAMILLE » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(3) > a.actif « BAPTÊME ET FAMILLE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(4) > a « ENTREPRISES » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(4) > a « ENTREPRISES » — avec section#debut > ul.ambiances-noms > li:nth-of-type(5) > a « SÉMINAIRES ET CONFÉRENCES » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(5) > a « SÉMINAIRES ET CONFÉRENCES » — avec section#debut > ul.ambiances-noms > li:nth-of-type(6) > a « FESTIVALS ET CONCERTS EN PLEIN AIR » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(6) > a « FESTIVALS ET CONCERTS EN PLEIN AIR » — avec section#debut > ul.ambiances-noms > li:nth-of-type(7) > a « ASSOCIATIONS » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(7) > a « ASSOCIATIONS » — avec section#debut > ul.ambiances-noms > li:nth-of-type(8) > a « BARS ET RESTAURANTS » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(8) > a « BARS ET RESTAURANTS » — avec section#debut > ul.ambiances-noms > li:nth-of-type(9) > a « MAIRIES ET COLLECTIVITÉS » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(9) > a « MAIRIES ET COLLECTIVITÉS » — avec section#debut > ul.ambiances-noms > li:nth-of-type(10) > a « FÊTES DE FIN D'ANNÉE » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/evenements` — section#debut > ul.ambiances-noms > li:nth-of-type(10) > a « FÊTES DE FIN D'ANNÉE » — avec section#debut > ul.ambiances-noms > li:nth-of-type(11) > a « AUTRE ÉVÉNEMENT » _(1920×1080 normal)_

### texte coupé (2)

- **texte coupé** — `/prestation-dj` — section#debut > div.controleur:nth-of-type(2) > p.controleur-consigne > span.consigne-tactile:nth-of-type(2) « Faites tourner les platines du doigt. » — coupé par section#debut « DEUX DJ, TOUTE LA SOIRÉE Demander un devis DJ 06 2 » _(844×390 normal)_
- **texte coupé** — `/prestation-dj` — section#debut > div.controleur:nth-of-type(2) > p.controleur-consigne > span.consigne-souris:nth-of-type(1) « Faites tourner les platines. » — coupé par section#debut « PRESTATION DJ DEUX DJ, TOUTE LA SOIRÉE Demander un » _(1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### stabilité au chargement (CLS) (1)

- **stabilité au chargement (CLS)** — `/location` — p.etal-legende ; img ; img — 0.178 (0 visé, 0,05 au plus) _(1366×768 premier chargement)_

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
- Ouverture / (1366×768) : 2769 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2616 ms depuis le premier octet
- Ouverture /evenements (1366×768) : 2545 ms depuis le premier octet
- Ouverture /location (1366×768) : 2673 ms depuis le premier octet
- film de l'ouverture /location 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /prestation-dj (1366×768) : 2544 ms depuis le premier octet
- Ouverture / (390×844) : 2683 ms depuis le premier octet
- Ouverture /contact (390×844) : 2630 ms depuis le premier octet
- Ouverture /evenements (390×844) : 2607 ms depuis le premier octet
- Ouverture /location (390×844) : 2692 ms depuis le premier octet
- Ouverture /prestation-dj (390×844) : 2610 ms depuis le premier octet
- Changements de hauteur /evenements : aucun effet ScrollTrigger, rien à recalculer.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/contact,/evenements,/location,/prestation-dj --seulement=fichiers,mesures,films
```
