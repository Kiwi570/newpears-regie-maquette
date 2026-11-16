# Rapport d’audit

Projet : `np-v5` · 16/11/2026 15:48:16 · 0 min · 1 page(s) · audit standard ciblé sur / (étapes : fichiers, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261116-144750-standard-cible-partiel` · version ?v=5
- Échecs : **1**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (11), balayage (1)

## Passes de cette version (?v=5)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-142558-standard | standard | toutes | toutes | 22 | 19 | 1 | échecs |
| 20261116-144526-standard-cible-partiel | standard | /,/evenements,/prestation-dj | fichiers, mesures, mouvement | 1 | 0 | 0 | échecs |
| **20261116-144750-standard-cible-partiel** (celle-ci) | standard | / | fichiers, mesures | 1 | 0 | 0 | échecs |

## Échecs

### contraste insuffisant (1)

- **contraste insuffisant** — `/` — section#dj > div.conteneur.dj-grille:nth-of-type(2) > figure.media.dj-photo > figcaption.media-legende « Mattéo et Sacha aux platines, Fête de la musique,  » — 2.22:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=5
- Journal v5 : 1 étape(s) notée(s), 8 min de travail pour 40 min de budget, 2 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,mesures
```
