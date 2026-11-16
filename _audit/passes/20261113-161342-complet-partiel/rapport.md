# Rapport d’audit

Projet : `newpears-maquette` · 13/11/2026 17:21:57 · 8 min · 6 page(s) · audit complet (étapes : fichiers, mesures, films)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261113-161342-complet-partiel` · version ?v=3
- Échecs : **3**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (234), balayage (5), films d’ouverture (10), films de transition (10)

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#regie > div.regie-texte:nth-of-type(2) > p.regie-info:nth-of-type(4) « Devis gratuit sous 24 h, 7 j/7 · Packs dès 169 € l » _(844×390 sansJs)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/contact` — section#debut > div.tete-texte.conteneur:nth-of-type(1) > a.numero-led « 06 26 15 24 54 » — 312 × 38 px _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/evenements` — a[href$="#autre"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

## À regarder

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 3 de donnees/site.json

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=3
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2763 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2588 ms depuis le premier octet
- Ouverture /evenements (1366×768) : 2603 ms depuis le premier octet
- film de l'ouverture /evenements 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /location (1366×768) : 2650 ms depuis le premier octet
- Ouverture /prestation-dj (1366×768) : 2529 ms depuis le premier octet
- Ouverture / (390×844) : 2737 ms depuis le premier octet
- Ouverture /contact (390×844) : 2615 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /evenements (390×844) : 2623 ms depuis le premier octet
- film de l'ouverture /evenements 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /location (390×844) : 2679 ms depuis le premier octet
- Ouverture /prestation-dj (390×844) : 2615 ms depuis le premier octet
- film de l'ouverture /prestation-dj 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact,/evenements --seulement=fichiers,mesures
```
