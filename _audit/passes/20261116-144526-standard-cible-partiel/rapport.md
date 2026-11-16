# Rapport d’audit

Projet : `np-v5` · 16/11/2026 15:47:33 · 2 min · 3 page(s) · audit standard ciblé sur /,/evenements,/prestation-dj (étapes : fichiers, mesures, mouvement)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261116-144526-standard-cible-partiel` · version ?v=5
- Échecs : **1**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (33), balayage (3), mouvement (6), effets du plan (15)

## Passes de cette version (?v=5)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-142558-standard | standard | toutes | toutes | 22 | 19 | 1 | échecs |
| **20261116-144526-standard-cible-partiel** (celle-ci) | standard | /,/evenements,/prestation-dj | fichiers, mesures, mouvement | 1 | 0 | 0 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .media-legende — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=5
- Journal v5 : 1 étape(s) notée(s), 8 min de travail pour 40 min de budget, 2 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /evenements, /prestation-dj.
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
