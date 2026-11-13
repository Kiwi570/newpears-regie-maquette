# Rapport d’audit

Projet : `newpears-maquette` · 13/11/2026 12:57:35 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /

## Résumé

- Statut : **57 échec(s)**
- Passe : `20261113-115219-rapide-cible` · version ?v=1
- Échecs : **57**
- À regarder : **7**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (13), liens vers la page en cours (1), changements de hauteur (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (17), souris immobile (1), vitesse (1), captures (1)

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

### image de partage (5)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `evenements.html` — fichier introuvable : /assets/partage/evenements-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `location.html` — fichier introuvable : /assets/partage/location-fr.jpg
- **image de partage** — `prestation-dj.html` — fichier introuvable : /assets/partage/prestation-dj-fr.jpg

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/` — section#regie > div.regie-texte:nth-of-type(2) > h1.regie-titre « LA SOIRÉE, ON LA RÈGLE AVEC VOUS. » — haut 321 px, bas 431 px, zone 65–390 px _(844×390 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/` — section#regie > div.regie-texte:nth-of-type(2) > p.regie-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Demander un devis » _(844×390 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#regie > div.regie-texte:nth-of-type(2) > p.regie-info:nth-of-type(4) « Devis gratuit sous 24 h, 7 j/7 · Packs dès 169 € l » _(844×390 normal)_

### texte coupé (6)

- **texte coupé** — `/` — div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(1) > span.regie-ligne « LA SOIRÉE, » — coupé par section#regie > div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(1) « LA SOIRÉE, » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/` — div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(2) > span.regie-ligne « ON LA RÈGLE » — coupé par section#regie > div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(2) « ON LA RÈGLE » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/` — h1.regie-titre > span.ligne-masque:nth-of-type(2) > span.regie-ligne > em « RÈGLE » — coupé par section#regie > div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(2) « ON LA RÈGLE » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/` — div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(3) > span.regie-ligne « AVEC VOUS. » — coupé par section#regie > div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(3) « AVEC VOUS. » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/` — ol.deroule-etapes > li:nth-of-type(4) > div > p « Livraison et installation offertes dans 10 km, la  » — coupé par section#deroule > div.deroule-collant « Illustration générée Illustration générée COMMENT  » _(390×844 sansJs)_
- **texte coupé** — `/` — ol.deroule-etapes > li:nth-of-type(3) > div > p « On échange sur le déroulé et la musique. Le matéri » — coupé par section#deroule > div.deroule-collant « Illustration générée Illustration générée COMMENT  » _(320×568 sansJs)_

### textes qui se chevauchent (9)

- **textes qui se chevauchent** — `/` — div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(1) > span.regie-ligne « LA SOIRÉE, » — avec div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(2) > span.regie-ligne « ON LA RÈGLE » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(1) > span.regie-ligne « LA SOIRÉE, » — avec h1.regie-titre > span.ligne-masque:nth-of-type(2) > span.regie-ligne > em « RÈGLE » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(2) > span.regie-ligne « ON LA RÈGLE » — avec div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(3) > span.regie-ligne « AVEC VOUS. » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — h1.regie-titre > span.ligne-masque:nth-of-type(2) > span.regie-ligne > em « RÈGLE » — avec div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(3) > span.regie-ligne « AVEC VOUS. » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.zone-carte:nth-of-type(2) > svg.carte-zone > g.ville:nth-of-type(4) > text — avec div.conteneur.zone-grille > div.zone-carte:nth-of-type(2) > svg.carte-zone > text.zone-legende:nth-of-type(1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.zone-carte:nth-of-type(2) > svg.carte-zone > g.ville:nth-of-type(8) > text — avec div.conteneur.zone-grille > div.zone-carte:nth-of-type(2) > svg.carte-zone > text.zone-legende:nth-of-type(1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs)_
- **textes qui se chevauchent** — `/` — div.deroule-collant > div.deroule-salle:nth-of-type(1) > figure.media.salle:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — avec div.deroule-collant > div.deroule-salle:nth-of-type(1) > figure.media.salle:nth-of-type(2) > figcaption.mention-ia « Illustration générée » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ol.deroule-etapes > li:nth-of-type(4) > div > p « Livraison et installation offertes dans 10 km, la  » — avec section#metiers > p.sur « NOS DEUX MÉTIERS » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/` — ol.deroule-etapes > li:nth-of-type(4) > div > p « Livraison et installation offertes dans 10 km, la  » — avec section#metiers > h2 « VOUS LOUEZ. ON S'OCCUPE DE TOUT. » _(320×568 sansJs)_

### contraste insuffisant (18)

- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(1) > span:nth-of-type(1) « ELECTRO HOUSE » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(1) > span:nth-of-type(2) « HITS ACTUELS » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(1) > span:nth-of-type(3) « ELECTRO HOUSE » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(1) > span:nth-of-type(4) « HITS ACTUELS » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(1) > span:nth-of-type(5) « ELECTRO HOUSE » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(1) > span:nth-of-type(6) « HITS ACTUELS » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(2) > span:nth-of-type(1) « ANNÉES 80–2000 » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(2) > span:nth-of-type(2) « RAP · RNB » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(2) > span:nth-of-type(3) « ANNÉES 80–2000 » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(2) > span:nth-of-type(4) « RAP · RNB » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(2) > span:nth-of-type(5) « ANNÉES 80–2000 » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(2) > span:nth-of-type(6) « RAP · RNB » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(3) > span:nth-of-type(1) « LATINO · AFRO » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(3) > span:nth-of-type(2) « VARIÉTÉ FRANÇAISE » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(3) > span:nth-of-type(3) « LATINO · AFRO » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(3) > span:nth-of-type(4) « VARIÉTÉ FRANÇAISE » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(3) > span:nth-of-type(5) « LATINO · AFRO » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#dj > div.dj-led:nth-of-type(1) > p.led-rangee:nth-of-type(3) > span:nth-of-type(6) « VARIÉTÉ FRANÇAISE » — 1.61:1 (minimum 3:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### élément sans nom accessible (1)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(1366×768 normal, 390×844 normal, 390×844 sansJs)_

### section sans visuel (2)

- **section sans visuel** — `/` — section#confiance « EN QUELQUES CHIFFRES ILS NOUS ONT FAIT CONFIANCE 8 » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#fin « UNE DATE, UN LIEU ? Décrivez votre événement : dev » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/` — div.conteneur.dj-grille:nth-of-type(2) > figure.media.dj-photo > picture > img « Mattéo et Sacha de dos aux platines devant la foul » — duo-fete-musique (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — div.conteneur.dj-grille:nth-of-type(2) > figure.media.dj-photo > picture > img « Mattéo et Sacha de dos aux platines devant la foul » — duo-fete-musique (4/5, faible, 49 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### texte sous 12 px (5)

- **texte sous 12 px** — `/` — section#regie > div.regie-texte:nth-of-type(2) > p.sur:nth-of-type(1) « SON · LUMIÈRE · DJ — SAINT-QUENTIN (02) » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.console:nth-of-type(3) > div.faders:nth-of-type(1) > label.fader:nth-of-type(1) > span.fader-nom:nth-of-type(1) « INVITÉS » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.console:nth-of-type(3) > div.faders:nth-of-type(1) > label.fader:nth-of-type(2) > span.fader-nom:nth-of-type(1) « LUMIÈRE » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.console:nth-of-type(3) > div.faders:nth-of-type(1) > label.fader:nth-of-type(3) > span.fader-nom:nth-of-type(1) « EFFETS » — 11.8 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — section#regie > div.console:nth-of-type(3) > div.console-lecture:nth-of-type(2) > p.console-conseil:nth-of-type(1) « NOTRE CONSEIL » — 11.5 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### contraste sur image (4)

- **contraste sur image** — `/` — div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(2) > span.regie-ligne « ON LA RÈGLE » — 2.52:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/` — div.regie-texte:nth-of-type(2) > h1.regie-titre > span.ligne-masque:nth-of-type(2) > span.regie-ligne « ON LA RÈGLE » — 2.57:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/` — h1.regie-titre > span.ligne-masque:nth-of-type(2) > span.regie-ligne > em « RÈGLE » — 1.05:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/` — h1.regie-titre > span.ligne-masque:nth-of-type(2) > span.regie-ligne > em « RÈGLE » — 1.13:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/` — li[data-etape="2"] > .etape-n ; li[data-etape="2"] > div > h3 ; li[data-etape="3"] > .etape-n — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/` — li[data-etape="2"] > .etape-n ; li[data-etape="2"] > div > p ; li[data-etape="3"] > .etape-n — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### texte de contenu sous 13 px (ordinateur) (4)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#regie > figure.media.regie-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deroule-collant > div.deroule-salle:nth-of-type(1) > figure.media.salle:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.metiers-grille.fx-fini > article.metier.metier--dj:nth-of-type(2) > figure.media.metier-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.evts-grille > div.evts-visuels > figure.media.evt-visuel:nth-of-type(6) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — div.faders — regie-faders : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] magnetique — léger changement (0.3 %) 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

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
- Journal v1 : 2 étape(s) notée(s), 16 min de travail pour 50 min de budget, 4 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2656 ms depuis le premier octet
- Ouverture / (390×844) : 2684 ms depuis le premier octet
- Bords de l’écran : 65 images d’intro, 2 de voile et 23 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 461, tâche la plus longue 69 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1403, tâche la plus longue 0 ms
- Vitesse / : 0.43 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures
```
