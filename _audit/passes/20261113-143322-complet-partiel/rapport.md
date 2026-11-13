# Rapport d’audit

Projet : `newpears-maquette` · 13/11/2026 15:39:27 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261113-143322-complet-partiel` · version ?v=1
- Échecs : **3**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-115219-rapide-cible | rapide | / | toutes | 57 | 7 | 1 | échecs |
| 20261113-141242-standard | standard | toutes | toutes | 4 | 4 | 1 | échecs |
| 20261113-143223-standard-cible-partiel | standard | /,/location | fichiers, mesures | 0 | 0 | 0 | complet |
| **20261113-143322-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 3 | 1 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#regie > div.regie-texte:nth-of-type(2) > p.regie-info:nth-of-type(4) « Devis gratuit sous 24 h, 7 j/7 · Packs dès 169 € l » _(375×667 normal, 375×667 sansJs, 375×667 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/location` — section#debut > div.tete-texte:nth-of-type(1) > p.tete-info:nth-of-type(4) « Packs dès 169 € la journée · livraison offerte dan » _(1000×560 sansJs)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/` — section#regie > div.regie-texte:nth-of-type(2) > p.regie-preuve:nth-of-type(5) > a « ★★★★★ 5/5 sur Google · 8 ans de mix · +40 prestati » — 469 × 32 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_

## À regarder

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/prestation-dj` — div.temps-grille > figure.media.temps-grand:nth-of-type(1) > picture > img « Cabine DJ prête, casque et ordinateur, faisceaux d » — grok/accueil-cabine (3/5, 44 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /evenements : aucune section épinglée ou plein écran.
- Tient dans l'écran /location : aucune section épinglée ou plein écran.
- Tient dans l'écran /prestation-dj : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/location --seulement=fichiers,mesures
```
