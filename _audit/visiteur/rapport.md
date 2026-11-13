# Test « vrai visiteur » : NEWPEARS

**Persona** : Camille, 29 ans. Elle se marie en juin dans une salle des fêtes près de Saint-Quentin, avec environ 120 invités. Elle hésite entre louer du matériel et prendre un DJ, et veut un devis.
**Formats** : téléphone 390×844 (tactile) et ordinateur 1440×900.
**Outil** : `node _audit/visiteur.mjs`. Chaque parcours repart de l'accueil.
**Barème** : la mission 1 se fait sans aucun geste. Les autres se font en 3 gestes au plus (un clic ou un écran défilé compte pour un geste) et en 30 s au plus.

**Comment lire les chiffres** :
- « Gestes » compte les clics et les défilements. Les champs remplis sont comptés à part, en « saisies ». Le script, lui, compte aussi chaque saisie comme un geste.
- Les « secondes » sont celles que mesure le script. Une vraie visiteuse met plus longtemps, parce qu'elle lit et qu'elle tape.
- Toutes les captures sont rangées dans `_audit/visiteur/<mission>-<taille>/`.

## Bilan

| Mission | Téléphone | Ordinateur |
|---|---|---|
| 1. Premier écran | Réussie, 0 geste (le « pour qui » reste implicite) | Réussie, 0 geste (une fois l'intro finie, la ligne de prix est masquée) |
| 2. Prix | Réussie, 0 geste (tarif d'appel « dès 169 € ») | Réussie, 1 geste (sur l'accueil, la ligne de prix est recouverte) |
| 3. Devis | Réussie mais hors barème : formulaire atteint en 1 geste, envoi en 10 gestes et 9 saisies | Réussie mais hors barème : formulaire atteint en 1 geste, envoi en 8 gestes et 9 saisies |
| 4. Contact | Partielle : téléphone 0 geste, WhatsApp 2, e-mail 4, zone détaillée 5 | Réussie, 3 gestes |
| 5. Différence | Partielle : arguments trouvés mais génériques, aucune preuve dans les 3 premiers écrans | Partielle, même constat |
| 6. DJ | Partielle : contenu en 3 gestes ; la date n'est pas vraiment vérifiée, et le Menu est inaccessible sur cette page | Partielle : contenu en 2 gestes ; même problème de date |
| 7. Pack 120 invités | Ratée : la console donne « Pack Club » en 2 ou 3 gestes, mais le pack que le site conseille pour un mariage (Professionnel) demande 6 gestes | Ratée : 2 gestes (Pack Club) ou 5 gestes (Professionnel), même contradiction |

---

## 1. Premier écran (sans geste)

**Téléphone : réussie.** 0 geste, 3,4 s.
- Ce que je comprends : « SON · LUMIÈRE · DJ — SAINT-QUENTIN (02) », puis « La soirée, on la règle avec vous », « Devis gratuit sous 24 h, 7 j/7 · Packs dès 169 € la journée », les boutons « Demander un devis » et le numéro, et une console qui conseille un pack. Le quoi et le où sont clairs.
- Ce qui gêne :
  - Le « pour qui » n'est jamais dit : pas de « mariage », pas de « particuliers ». Seule la photo de salle avec tables et chaises le suggère.
  - Sur téléphone, il n'y a pas la phrase de présentation qu'on trouve sur ordinateur (« location à la journée ou deux DJ clé en main, jusqu'à 50 km »).
  - Environ 1 s après l'arrivée, toute la disposition change : la photo passe en haut et la console descend sous la ligne de flottaison.
  - L'icône de mallette « 0 » n'a pas de libellé : on ne devine pas que c'est « Ma demande ».
- Captures : `premier-ecran-390x844/etape-0.png` (à l'arrivée) et `premier-ecran-attente-390x844/etape-2.png` (après la bascule).

**Ordinateur : réussie.** 0 geste, 3,6 s.
- Ce que je comprends : la phrase de présentation est complète (« Location de son et de lumière à la journée, ou deux DJ clé en main. Jusqu'à 50 km autour de Saint-Quentin »).
- Ce qui gêne :
  - Une fois l'intro finie (vers 4 à 5 s), la console se replie dans une colonne à gauche et **recouvre la ligne « Devis gratuit sous 24 h, 7 j/7 · Packs dès 169 € la journée »**, qui devient illisible.
  - Le mot « mariage » n'apparaît pas non plus.
- Captures : `premier-ecran-1440x900/etape-0.png` (à l'arrivée) et `premier-ecran-attente-1440x900/etape-6.png` (ligne barrée par la console).

## 2. Prix

**Téléphone : réussie pour le tarif d'appel.** 0 geste, 3,4 s.
- Ce que je trouve : « Packs dès 169 € la journée » et « Devis gratuit sous 24 h » sont lisibles dès l'arrivée.
- Ce qui gêne :
  - Le prix d'un pack précis n'existe nulle part. Chaque fiche dit « Tarif du pack donné dans le devis · dès 169 € la journée », que ce soit Club ou Professionnel, le pack « le plus complet ». On croit donc que le Pack Professionnel coûte 169 €.
  - La prestation DJ n'a aucun tarif d'appel (« tarif sur devis »). Camille ne peut pas comparer location et DJ, alors que c'est sa vraie question.
  - Pour atteindre la fiche du pack, il faut 4 gestes (Menu, Location, Les packs, défiler).
- Captures : `prix-390x844/etape-0.png`, `prix-suite-390x844/etape-5.png`, `pack-explo-390x844/etape-7.png`, `dj-390x844/etape-3.png`.

**Ordinateur : réussie en 1 geste.** 5,9 s.
- Ce que je trouve : comme la ligne de prix de l'accueil est recouverte (voir la mission 1), je passe par la page Location. Elle affiche « Packs dès 169 € la journée · livraison offerte dans 10 km » et « Prix TTC à la journée, hors livraison et options ; week-end sur devis ».
- Ce qui gêne : les mêmes remarques que sur téléphone. En plus, après l'ancre « Les packs », le prix et le bouton du pack sont sous la ligne de flottaison, ce qui coûte 1 défilement de plus.
- Captures : `prix-1440x900/etape-3.png` et `prix-1440x900/etape-6.png`.

## 3. Devis (jusqu'à la confirmation)

**Téléphone : réussie, hors barème.**
- Le formulaire s'ouvre en 1 geste (« Demander un devis », 5,9 s). L'envoi demande 10 gestes et 9 saisies, pour 22,5 s au total.
- La confirmation affichée : « Demande simulée : rien n'a été envoyé. Sur le site final, elle partira chez NEWPEARS, qui répond sous 24 h. »
- Ce qui gêne :
  - **Le passage de l'étape 3 à l'étape 4 laisse la page en bas.** On arrive sur la case de consentement et sur « Envoyer », alors que les champs Prénom, Nom, E-mail et Téléphone sont au-dessus, hors de l'écran. Il faut remonter (`devis-390x844/etape-12.png`).
  - À l'étape 3, le bouton « Continuer » est sous la ligne de flottaison (`etape-10.png`).
  - **À 390 px, les champs Nom et Téléphone débordent à droite de la carte** et sont coupés (`etape-20.png`).
  - Les choix de l'étape 3 sont exclusifs : on ne peut pas cocher à la fois « Une prestation DJ » et « Une location de matériel ». Heureusement, « De l'aide pour choisir » existe.
  - Le texte « Politique de confidentialité : à compléter. » est visible (`etape-25.png`).
  - On lit « … depuis la page Location. Location → », avec le mot en double (`etape-10.png`).
  - Le récapitulatif montre la photo d'un pack alors que la ligne « Sélection » est vide.
  - Les 120 invités réglés sur la console de l'accueil ne sont pas repris dans le formulaire (`pack-console-390x844/etape-6.png`).
  - La confirmation est discrète : un encadré sous le bouton, et le formulaire reste affiché.

**Ordinateur : réussie, hors barème.**
- Le formulaire s'ouvre en 1 geste (6,1 s). L'envoi demande 8 gestes et 9 saisies, pour 19,8 s.
- Le récapitulatif, en colonne à droite, se met à jour au fil des étapes, ce qui rassure.
- Ce qui gêne :
  - À l'étape 4, le bouton « Envoyer ma demande » est sous la ligne de flottaison : 1 défilement de plus.
  - On retrouve « Politique de confidentialité : à compléter » et l'image de pack sans sélection.
- Captures : `devis-1440x900/etape-18.png` et `devis-1440x900/etape-21.png` (confirmation).

## 4. Contact et zone d'intervention

**Téléphone : partielle.**
- Ce que je trouve :
  - Le téléphone, à 0 geste : il est dans le premier écran, et la barre fixe « Appeler » est toujours là.
  - WhatsApp, en 2 gestes (Menu, Contact ; 6,8 s).
  - L'e-mail, en **4 gestes** (Menu, Contact, 2 défilements ; 9,2 s).
  - La zone détaillée (« Où nous intervenons » : livraison offerte dans 10 km, carte jusqu'à 50 km), en **5 gestes** (10,4 s). Seul « Saint-Quentin (02) » se voit dès l'arrivée.
- Ce qui gêne :
  - Le menu ne propose que « Appeler ». WhatsApp et l'e-mail n'y sont pas.
  - Le haut de la page Contact montre le numéro en très grand et WhatsApp, mais pas l'e-mail.
- Captures : `contact-390x844/etape-3.png`, `etape-5.png` et `etape-7.png`.

**Ordinateur : réussie en 3 gestes.** 8,0 s.
- Ce que je trouve :
  - La zone « Jusqu'à 50 km autour de Saint-Quentin » est déjà sur l'accueil (0 geste).
  - WhatsApp est en 1 geste (Contact).
  - L'e-mail et « Où nous intervenons » sont en 3 gestes (Contact, puis 2 défilements).
- Ce qui gêne : l'e-mail est absent du haut de la page Contact.
- Captures : `contact-1440x900/etape-2.png`, `etape-6.png` et `etape-8.png`.

## 5. Ce qui distingue NEWPEARS (après 30 s)

**Téléphone : partielle.** 3 défilements (7 s pour le script, environ 30 s de lecture).
- Ce que je retiens :
  - Le matériel est livré et installé.
  - Le devis est gratuit, sous 24 h, 7 j/7.
  - Les packs démarrent à 169 €.
  - Plus de 200 références, « entretenues et testées avant chaque prestation ».
  - Deux métiers : la location et le DJ.
  - La console qui conseille un pack.
- Ce qui gêne :
  - Tous ces arguments, un concurrent peut les écrire aussi.
  - Ce qui ferait vraiment la différence arrive trop tard. « L'electro house dans l'ADN » est à environ 4 écrans. La carte « Mariage » est à environ 5 écrans. Le seul élément de preuve, « Lire nos avis Google », est à environ 7 écrans.
  - Aucun chiffre (nombre d'années, nombre de mariages) et aucun avis n'apparaissent dans les 3 premiers écrans.
- Captures : `difference-390x844/etape-2.png`, `etape-4.png` et `etape-6.png`. La position des sections vient de `tour-accueil-1440x900/journal.json`.

**Ordinateur : partielle.** 3 défilements, 5,6 s.
- Même constat que sur téléphone.
- En plus, une large bande vide apparaît sous les 4 étapes (« Votre demande → Le jour J »), avant « Nos deux métiers ».
- Captures : `difference-1440x900/etape-2.png`, `etape-4.png` et `etape-6.png`.

## 6. Prestation DJ et vérification de la date

**Téléphone : partielle.**
- Ce que je trouve : la liste « Ce que nous apportons » arrive en 3 gestes (Menu, Prestation DJ, défiler ; 7,4 s). Elle compte 7 points clairs : sono adaptée à la salle, lumières, micro pour les discours, playlist construite avec vous, installation et démontage, déplacement, durée selon la demande.
- La date :
  - « Vérifier ma date » n'interroge aucune disponibilité. Le bouton ouvre le formulaire général à l'étape 1 (type d'événement). Le souhait « DJ » est bien prérempli.
  - Le champ date n'arrive qu'à l'étape 2. Depuis le contenu, il faut remonter, cliquer « Vérifier ma date », choisir le type puis cliquer « Continuer » : 6 gestes et 1 saisie (13,1 s).
  - La réponse ne viendra que sous 24 h.
- Ce qui gêne aussi :
  - **Sur cette page, le bouton Menu est poussé hors de l'écran à droite et devient impossible à atteindre.** Le script répond « bouton Menu hors de portée ». Captures : `dj-direct-390x844/etape-2.png` et `dj-390x844/etape-3.png`.
  - Les barres de l'égaliseur passent sur l'étiquette « Illustration générée ».
- Captures : `dj-390x844/etape-3.png`, `etape-5.png`, `etape-8.png` et `etape-11.png`.

**Ordinateur : partielle.**
- Ce que je trouve : le contenu arrive en 2 gestes (Prestation DJ, défiler ; 7,3 s).
- La date : « Vérifier ma date » ouvre l'étape 1, et le champ date arrive à l'étape 2, en 5 gestes et 1 saisie (12,7 s). Il n'y a pas de vérification réelle.
- Captures : `dj-1440x900/etape-2.png`, `etape-4.png` et `etape-10.png`.

## 7. Pack pour un mariage de 120 invités, puis ajout à la demande

**Téléphone : ratée.**
- **Voie rapide** (la console de l'accueil) : je règle le curseur « Invités » sur 120, puis je clique « Ajouter à ma demande ». Cela fait 2 gestes (5,5 s), 3 si l'intro est finie, car la console est alors sous la ligne de flottaison. Le badge passe à 1 et le bouton devient « Dans ma demande ✓ » : la réaction est bonne.
- **Mais le conseil est « Pack Club ».** Or la page Événements dit « Mariage — Notre formule : DJ ou Pack Professionnel », et la fiche du Pack Professionnel dit « Pour qui : Mariages et grands événements ». La console ne demande pas le type d'événement. Camille ne sait plus quel pack prendre.
- **Voie sûre** (le Pack Professionnel) : Menu, Location, Les packs, onglet Professionnel, défiler, Ajouter. Cela fait 6 gestes (14,3 s), et il faut avoir lu la page Événements avant (3 gestes de plus).
- Aucun pack n'indique pour combien d'invités il est prévu.
- Captures : `pack-console-390x844/etape-4.png`, `pack-evenements-390x844/etape-4.png`, `pack-explo-390x844/etape-7.png` et `pack-390x844/etape-7.png`.

**Ordinateur : ratée.**
- **Voie rapide** (la console) : 2 gestes (5,5 s), et le conseil est toujours « Pack Club ».
- **Voie sûre** : Location, Les packs, Professionnel, défiler, Ajouter. Cela fait 5 gestes (13,1 s). Le bouton « Ajouter » est sous la ligne de flottaison après l'ancre.
- On retrouve la même contradiction entre le conseil de la console et la page Événements.
- Captures : `pack-console-1440x900/etape-4.png`, `pack-1440x900/etape-4.png` et `pack-1440x900/etape-8.png`.

---

## Corrections, par ordre d'importance

1. **Le bouton Menu est inaccessible sur `/prestation-dj` en téléphone.** L'en-tête déborde et pousse le bouton hors de l'écran. Sur cette page, on ne peut plus naviguer.
2. **Sur ordinateur, la console de l'accueil recouvre la ligne « Devis gratuit sous 24 h · Packs dès 169 € » une fois l'intro terminée.** C'est le tarif d'appel qui disparaît.
3. **Le conseil de pack se contredit pour un mariage.** La console répond « Club », la page Événements et la fiche répondent « Professionnel ». Il faut ajouter un choix « type d'événement » (ou « Mariage ») à la console. Il faut aussi indiquer pour combien d'invités chaque pack est prévu. Enfin, la carte « Mariage » (page Événements et accueil) doit avoir un bouton « Ajouter le Pack Professionnel ».
4. **Le formulaire sur téléphone** :
   - remonter en haut de l'étape à chaque « Continuer » (l'étape 4 s'ouvre aujourd'hui en bas de page) ;
   - passer Prénom/Nom et E-mail/Téléphone sur une seule colonne en dessous de 400 px environ, car aujourd'hui ces champs débordent ;
   - garder « Continuer » visible à l'étape 3.
5. **« Vérifier ma date » ne tient pas sa promesse.** Il faut soit ouvrir directement sur la date (souhait DJ prérempli, type d'événement après), soit renommer le bouton en « Demander ma date ». Il serait utile de pouvoir cocher à la fois DJ et location à l'étape 3.
6. **Les prix sont peu clairs.** La mention « dès 169 € » est répétée sur chaque pack, ce qui fait croire que le Pack Professionnel coûte 169 €. Il faut un « à partir de » propre à chaque pack, ou retirer la mention des packs supérieurs. Il faut aussi un tarif d'appel pour le DJ (« soirée DJ dès … € »), pour que Camille puisse comparer.
7. **Les moyens de contact sont trop loin.** Il faut ajouter l'e-mail en haut de la page Contact, et WhatsApp et l'e-mail dans le menu du téléphone. La phrase « jusqu'à 50 km autour de Saint-Quentin » doit aussi figurer dans le premier écran du téléphone.
8. **La différence n'apparaît pas assez tôt.** Il faut remonter les avis Google (ou une preuve chiffrée), la carte « Mariage » et l'angle « deux DJ, electro house » dans les 2 ou 3 premiers écrans. Il faut aussi écrire « mariages » dans la phrase de présentation du premier écran.
9. **Les petites finitions** :
   - le texte « Politique de confidentialité : à compléter » ;
   - le mot en double « Location. Location → » ;
   - la photo de pack dans le récapitulatif quand rien n'est sélectionné ;
   - les 120 invités de la console qui ne sont pas reportés dans le formulaire ;
   - l'égaliseur qui passe sur « Illustration générée » (page DJ) ;
   - la bande vide sous les 4 étapes de l'accueil (ordinateur) ;
   - l'icône « Ma demande » sans libellé sur téléphone ;
   - le changement de disposition 1 s après l'arrivée sur téléphone ;
   - le format du champ date, affiché mm/dd/yyyy dans le navigateur de test, à vérifier sur un vrai téléphone réglé en français.

*Remarque sur l'outil, pas sur le site* : `remplir Nom=` vise d'abord « Nombre d'invités », car son étiquette contient « Nom ». Il faut écrire `remplir (?<!é)Nom$=…`.
