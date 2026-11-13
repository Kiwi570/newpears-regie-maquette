VERDICT : REFAIRE

# Regard du directeur artistique : accueil NEWPEARS, deuxième regard (13 novembre 2026)

Sources :
- les mosaïques refilmées `_audit/apercu/images-ordinateur.jpg` (22 images, 4 par ligne) et `images-telephone.jpg` (8 par ligne) ;
- `planche.jpg`, `vides.json` (ordinateur 7,8 écrans, téléphone 10,6, aucun écran presque vide) et `premier-ecran.json` (ordinateur : 30 % bouge seul et 3 % réagit à la souris ; téléphone : 11 % bouge seul).

J'ai extrait deux images par seconde des deux films pour suivre les mouvements et mesurer les textes. Le film est tourné en 1440 × 900, et les tailles données ci-dessous sont en pixels de la page. Côté client, j'ai lu le relevé, l'intention (« La régie ») et les planches `recu/site/planche*.jpg` et `recu/grok/planche*.jpg`.

Moyenne : **3,2 / 5** (29 / 9), contre 2,8 au premier regard. Le critère Images vaut 2 et la moyenne reste sous 3,5 : l'accueil doit encore être repris avant toute autre page.

C'est le deuxième regard sous 3,5, donc le problème n'est plus dans les détails. L'effet a maintenant la bonne taille. Mais c'est encore un fondu entre deux photos sous une console, et le cadrage coupe le sol, là où la lumière devrait tomber. Après le premier écran, la page redevient une suite de cartes. Il faut changer d'échelle et ne pas se contenter de retouches : une seule scène, la salle entière, qui réunit l'ouverture et le flight case (point 1 ci-dessous).

## Les points du regard précédent

| # | Point | État | Ce que montrent les nouvelles images |
|---|---|---|---|
| 1 | Effet signature sur tout le premier écran, rendu avec la vraie lumière | **À moitié fait** | **Fait :** la salle couvre tout le premier écran. La console passe en bas, sur toute la largeur : elle occupe environ un quart de l'écran, avec des curseurs de 64 px et des légendes d'environ 14 px. À l'arrivée, les faders montent seuls en moins de deux secondes : la salle s'allume et le conseil passe de Pack Confort à Pack Club (ligne 1, images 3 et 4). **Pas fait :** le cadrage s'arrête au bord de la scène et la console couvre le reste. On ne voit ni le parquet, ni les nappes, ni la lumière qui tombe dessus. La fumée d'EFFETS se réduit à un voile flou au pied de la cabine, et aucun jet de CO2 n'apparaît dans le film. Le texte promet « les lyres suivent », mais seuls 3 % de l'écran réagissent à la souris (13 % au premier regard). Sur téléphone, la salle n'est qu'une bande sombre derrière le titre et la console (téléphone ligne 1, image 3). |
| 2 | Packs qui font autocollant | Fait | Le pack conseillé est une vraie photo produit sur fond clair, dans la console (ligne 1, image 3). Il en va de même pour le pack Professionnel de la carte Location (ligne 3, image 1). Plus de triangles blancs, plus de collage sur un décor. |
| 3 | Produits qui débordent de leurs cartes | Fait | Chaque produit du flight case tient dans son cadre, au-dessus de son nom, avec le vrai prix : « dès 30 € la journée » pour l'enceinte, « dès 10 € la journée » pour l'éclairage (ligne 2, images 2 et 3 ; téléphone ligne 1, images 5 et 6). |
| 4 | Diaporama à côté d'une liste | Fait | Le diaporama épinglé a disparu. Le flight case s'ouvre et cinq vrais produits du catalogue en sortent. Les quatre étapes suivent sur une seule ligne, avec `location-livraison` pour le jour J (ligne 2, images 2 à 4). L'accueil passe de 10,3 à 7,8 écrans. Le rendu reste faible : le couvercle est un aplat dessiné avec quatre boules d'angle, et il s'ouvre seul au défilement avant que la main ait pu le tirer (ligne 2, images 1 et 2). |
| 5 | Grandes images floues et photo illisible des DJ | **À moitié fait** | **Fait :** la table de mixage et le contrôleur floues ont disparu. La photo de la Fête de la musique est en petit à côté du mur LED, avec sa légende (ligne 3, image 3). « Conseil indicatif » mesure environ 14 px. **Pas fait :** de grandes images floues restent en grand : le couple de « Prestation DJ » (ligne 3, image 1), l'arche du mariage (ligne 4, image 1), le gâteau (film, vers 19 s) et la foule de fin d'année (ligne 4, image 2). Ce sont `dj-premiere-danse`, `evt-mariage`, `evt-anniversaire` et `evt-fin-annee`, toutes marquées « floue » sur `recu/grok/planche.jpg`. « Illustration générée » mesure environ 12 à 13 px, et sur le héros allumé elle disparaît dans la lumière. Le fichier des corrections annonce pourtant ce point comme « fait ». |

## Les neuf critères

| # | Critère | Note | Pourquoi |
|---|---|---|---|
| 1 | Fidélité au vrai lieu et au métier | 3 | Le métier est plus juste qu'au premier regard. On voit les vrais packs, et cinq vrais produits du catalogue avec leurs prix (ligne 2, image 3). Le conseil « Pack Club, une salle des fêtes qui veut une vraie piste de club » est juste. Le texte cite le Joy, les clubs lillois et la Fête de la musique (ligne 3, image 4), et les chiffres viennent du relevé : 8 ans, +40, +200, 5/5 (ligne 4, image 4). En revanche, le lieu est une salle de réception générée, vue seulement au niveau de la scène (ligne 1, image 3). Mattéo et Sacha ne sont toujours visibles nulle part : la seule photo d'eux est une bande sombre où on les voit de dos (ligne 3, image 3). |
| 2 | Effet signature, dans les cinq premières secondes | 3 | Le premier écran est maintenant l'effet : la salle s'allume, les faders montent seuls (30 % de l'écran bouge seul) et la console fait environ un quart de l'écran (ligne 1, images 3 et 4). La lumière vient de vraies photos. Mais la manipulation se résume à un fondu entre deux photos sous trois curseurs, et la souris ne fait réagir que 3 % de l'écran. On ne voit jamais où la lumière tombe. L'effet vaudrait 4 : il perd un point parce que le point 1 n'est fait qu'à moitié. |
| 3 | Images | 2 | Les photos produit sont nettes et bien posées (ligne 2, images 2 et 3 ; ligne 3, image 1). La salle du héros est correcte, un peu molle sous le voile de fumée (ligne 1, image 3). Mais quatre grandes images générées sont floues : le couple (ligne 3, image 1), l'arche (ligne 4, image 1), la foule (ligne 4, image 2) et le gâteau (film, vers 19 s). La photo du flight case est presque noire sous les cartes (ligne 2, image 2). Le critère vaudrait 3 : il perd un point parce que le point 5 n'est fait qu'à moitié. |
| 4 | Composition et finition | 3 | Un seul langage du haut en bas : la nuit, le dégradé violet vers vert d'eau, Big Shoulders et les points LED. Le premier écran est net, avec le titre à gauche et une seule console en bas. Ensuite, la page redevient une suite de cartes à bordure : cinq produits, puis quatre étapes dont la moitié basse est vide. Par exemple, « Votre devis sous 24 h » tient en deux lignes dans une carte trois fois plus haute (ligne 2, image 4). Suivent deux cartes « métiers » (ligne 3, image 1) et quatre tuiles de chiffres (ligne 4, image 4). Le couvercle du flight case est un aplat avec quatre boules d'angle (ligne 2, image 1). La photo des DJ coupe le mur LED au milieu des mots (« LA · », « RNB A », ligne 3, images 3 et 4). |
| 5 | Rythme, sans vides | 4 | L'accueil fait 7,8 écrans sur ordinateur et 10,6 sur téléphone, sans écran presque vide (`vides.json`), et le diaporama épinglé a disparu. Il reste deux pauses un peu longues : environ un tiers d'écran noir sous les étapes (ligne 2, image 4) et sous « Tous les événements » (ligne 4, image 3). |
| 6 | Typographie et lisibilité | 4 | Les polices sont choisies pour ce client et les titres tiennent (« La soirée, on la règle avec vous », « Ouvrez le flight case »). Les légendes de la console, les surtitres et les textes des cartes font environ 14 à 15 px. Mais « Illustration générée » fait environ 12 à 13 px et devient illisible sur la photo allumée (ligne 1, image 3). Le mur LED est aussi tronqué par la photo (ligne 3, image 3). |
| 7 | Niveau par rapport à la vitrine | 3 | L'ouverture est désormais au même niveau que la vitrine : une scène photographique en plein écran, comme Good Life ou Nelis. Elle n'est pas au-dessus pour autant. Dans la vitrine, les objets sont nets et l'effet transforme la matière (givre, palmes, cadre irisé) ; ici, c'est un fondu entre deux photos molles. L'ouverture ne ressemble à aucune de celles de la vitrine. |
| 8 | Envie d'agir | 4 | Dès l'arrivée, on voit « Demander un devis », le téléphone et « Devis gratuit sous 24 h, 7 j/7 · Packs dès 169 € la journée ». Le panier « Ma demande » est dans le menu et, sur téléphone, la barre « Appeler / Devis sous 24 h » reste fixe en bas. L'appel final est clair (ligne 5, image 2). Mais dans le héros, « Ajouter à ma demande », en dégradé plein et plus large, fait toujours concurrence à « Demander un devis » (ligne 1, image 3). |
| 9 | Jeu | 3 | Une seule vraie manipulation : les faders, qui rallument la salle et changent le pack. La seconde n'en est pas vraiment une : le flight case s'ouvre seul au défilement, entre 7 et 7,5 s de film (ligne 2, images 1 et 2). Le visiteur n'a donc rien à tirer, et ce qui sort du flight case est une rangée de cartes. Viser avec les lyres ne fait réagir que 3 % de l'écran. |

## Ce qui doit changer

1. **Une seule scène, la salle entière, de l'arrivée au flight case.** C'est le point 1 repris, à moitié fait. Comme c'est le deuxième regard sous 3,5, il faut une autre échelle, pas une retouche. Aujourd'hui (ligne 1, image 3 ; ligne 2, images 1 et 2) :
   - la salle est coupée au bord de la scène et la console couvre le sol ;
   - la souris ne fait bouger que 3 % de l'écran ;
   - le flight case est une deuxième section, avec un couvercle dessiné.

   À la place :
   - Cadrer `salle-eteinte` puis `salle-allumee` en entier : le pont et ses lyres en haut, la scène, le parquet avec ses taches de gobos, puis les tables et les nappes au premier plan à gauche. S'il faut couper, on coupe le plafond, jamais le sol.
   - Sortir la console du bas de la photo. Le titre et les faders passent à gauche, sur le mur de briques sombre de la photo, avec des faders verticaux aussi grands qu'aujourd'hui. Les deux tiers droits de l'écran montrent la salle sans rien posé dessus.
   - Faire du pointeur (du doigt sur téléphone) le point visé : les faisceaux des lyres du pont convergent vers lui, et la tache de lumière glisse sur le parquet. C'est toute la moitié haute de l'écran qui doit réagir, pas 3 %.
   - EFFETS fait monter une vraie nappe de fumée dans les faisceaux, et lance le jet de CO2 quand on le pousse au maximum.
   - Au défilement, la même scène reste épinglée sur environ deux écrans. La vue descend vers la piste et le flight case de `location-flight-case.jpg` arrive au pied de la scène. Son couvercle est photographique (aluminium, cornières, ombre), pas un aplat. Le visiteur le tire pour l'ouvrir, et les produits du pack conseillé sortent de la mousse. Le flight case ne s'ouvre seul que si personne ne l'a touché.
   - Sur téléphone, la salle occupe la moitié haute de l'écran, sans texte dessus ; le titre et les faders passent dessous.

2. **Les grandes images floues.** C'est le point 5 repris, à moitié fait. Le couple de « Prestation DJ » (ligne 3, image 1), l'arche du mariage (ligne 4, image 1), le gâteau (film, vers 19 s) et la foule de fin d'année (ligne 4, image 2) sont tous marqués « floue » sur `recu/grok/planche.jpg`. Aucune image marquée floue ne doit plus être montrée en grand. À la place :
   - Pour la carte « Prestation DJ » : `accueil-cabine.jpg`, qui est nette et montre la vue depuis la cabine, sur la lyre et les tables.
   - Pour les événements : quatre images régénérées nettes, dans la même salle que le héros et avec le même cadrage que `salle-allumee`. On y met une arche de fleurs devant la cabine, un gâteau aux fontaines sur une table ronde, un écran et un pupitre pour les entreprises, des guirlandes pour la fin d'année. Le visiteur reconnaît la même salle, préparée pour chaque événement.
   - « Illustration générée » passe à 13 px au moins, sur une pastille sombre, y compris sur le héros.

3. **Sortir des cartes à bordure.** Aujourd'hui, la page enchaîne cinq cartes produits, quatre cartes d'étapes à moitié vides, deux cartes « métiers » et quatre tuiles de chiffres (ligne 2, images 3 et 4 ; ligne 3, image 1 ; ligne 4, image 4). À la place :
   - Les étapes deviennent la frise de la soirée, sans cadre : un seul trait, les numéros en points LED et une ligne de texte par étape.
   - Les deux métiers deviennent deux grandes moitiés d'image sans bordure : le pack Professionnel sur fond clair à gauche, `accueil-cabine.jpg` à droite, avec le titre posé dessous.
   - Les chiffres passent en grands chiffres LED, sans tuiles, directement à côté de la carte de Saint-Quentin.

4. **La photo des DJ coupe le mur LED, et Mattéo et Sacha restent invisibles** (ligne 3, images 3 et 4). La bande sombre tranche « LA · » et « RNB A ». À la place :
   - La photo devient un panneau du mur : elle prend la hauteur de ses trois lignes, avec une marge, et se place sous le mur ou à côté du texte « Mattéo et Sacha… ».
   - Avant la livraison, demander au client une photo des deux DJ éclairés, visages visibles. Elle prendra cette place, en plus grand.

5. **Les finitions du premier écran.**
   - Sur téléphone, à 2 s, l'iris de l'intro s'ouvre sur un morceau de console tronqué (« OTRE CONSEIL / PACK / SSENTIEL », téléphone ligne 1, image 2). Il doit s'ouvrir sur le titre ou sur la salle.
   - Dans le héros, « Ajouter à ma demande » passe en bouton secondaire, à contour : « Demander un devis » doit rester le seul bouton plein (ligne 1, image 3).

## Ce qui est réussi

- **Le premier écran est devenu l'effet.** La salle s'allume, les faders montent seuls et s'arrêtent sur Pack Club, la console fait toute la largeur et ses légendes sont lisibles (ligne 1, images 3 et 4). C'est la bonne base pour la scène du point 1.
- **Le vrai catalogue est au premier plan.** Les packs sont montrés franchement en photo produit. Les cinq produits du flight case ont leur vrai prix et leur bouton « Ajouter à ma demande », et plus rien ne déborde (ligne 2, image 3).
- **Une page courte et cohérente.** L'accueil tient en 7,8 écrans, sans vide ni diaporama. L'identité « cabine DJ » tient du haut en bas : la poire en néon, le dégradé violet vers vert d'eau, Big Shoulders et le mur LED des styles (ligne 3, image 3). L'appel final « Une date, un lieu ? » est clair (ligne 5, image 2).
