# Journal des versions — maquette NEWPEARS

## v3 — 13 novembre 2026

Corrections de l'audit complet, lancé quand la maquette a été validée.

- **Petits écrans couchés** (téléphone à l'horizontale, petit portable) : le premier écran de l'accueil et celui du contact se resserrent. Le titre est plus petit, et la phrase d'intro et la note Google sont cachées sur l'accueil. Le bouton principal et l'information clé restent visibles.
- **Contact** : le numéro LED garde une zone de 44 px au doigt.
- **Location** : la légende du pack éclairé a une hauteur réservée. Le rack ne saute plus quand la poursuite change de pack.
- **Événements** : la couleur de la salle change toujours en fondu. Elle est maintenant posée en image de fond, ce qui permet de bien lire le contraste des noms.
- **Prestation DJ** : la grande photo des temps forts devient la photo de la cabine sous les faisceaux, mieux notée.
- Le numéro de version passe à 3.

## v2 — 13 novembre 2026

Chaque page d'onglet a maintenant sa propre ouverture (série « régie »). Ce changement vient du regard neuf sur la v1, qui trouvait les quatre ouvertures trop semblables : titre, deux boutons, bandeau photo.

- **Location** : les cinq vrais packs du client sont alignés sur un plateau, du Pack Essentiel au Pack Professionnel.
  - Une poursuite passe seule d'un pack à l'autre. Sous la souris, elle suit la main ; au doigt ou au clic, elle se pose sur le pack touché.
  - Le pack éclairé affiche son nom, pour qui il est fait et « Voir ce pack ». Ce lien ouvre l'onglet du pack plus bas.
  - Le bandeau de la salle et la petite rangée de packs sont retirés.
- **Prestation DJ** : le vrai contrôleur DJ, en grand sous le titre.
  - Ses deux plateaux tournent seuls. Le défilement les entraîne, et on peut les faire tourner à la souris ou au doigt.
  - Le vumètre est posé dessous. Le bandeau photo est retiré.
- **Événements** : la salle prend la couleur de chaque événement.
  - Les onze événements sont listés en grand à droite. Ils défilent seuls et réagissent au survol.
  - Sur téléphone, le nom de l'événement en cours s'affiche sur la photo.
  - Le bandeau de la salle allumée est retiré.
- **Contact** : un plan de salle se dessine à l'arrivée : piste, cabine DJ, enceintes, quatre lyres qui balaient, et des tables rondes.
  - Les boutons − et + changent le nombre d'invités, à raison d'une table pour dix. Ce nombre suit celui du formulaire et celui réglé sur la console de l'accueil.
  - Le numéro LED est réduit pour tenir à côté du plan. Le bandeau photo est retiré.
- **Accueil, héros plus sobre** (à la demande du client)
  - La salle générée, les faisceaux multiples, la brume, le CO2 et la grande console sont retirés.
  - Le héros garde un fond presque noir uni, le grand titre, et un seul faisceau accroché en haut. Ce faisceau suit la souris ou le doigt, éclaire le titre au passage, puis revient se poser sur le pack conseillé.
  - À droite, la vraie photo du pack conseillé.
  - Le conseil tient sur une ligne : un curseur « invités », le pack conseillé, l'interrupteur Mariage et « Ajouter à ma demande ».
  - Les seuils deviennent 40, 80, 120 et 200 invités. La coupure « PACK PROFESSIONNE / L » disparaît.
- **Sections sur fond clair** (blanc cassé), pour casser le tout sombre :
  - accueil : les deux métiers, la zone et les chiffres ;
  - Location : le catalogue et le bon à savoir ;
  - Contact : le formulaire de demande et les questions.
- **Moins d'animations**
  - Les lyres des coins de l'écran sont remplacées par une fine ligne de lecture sous l'en-tête.
  - Ne bougent plus : les faisceaux de l'appel final, le halo des métiers, le vumètre et l'égaliseur de la page DJ, le défilement du mur LED.
  - Les ouvertures changent plus lentement (une ambiance ou un pack toutes les 2,4 s).
- **Commun** : l'adresse du site devient https://newpears-regie.vercel.app (adresse canonique et liens de partage). Le numéro de version passe à 2.

## v1 — 13 novembre 2026

Première version, direction « La régie » (plan : l'outil d'abord).

- **Accueil**
  - Le visiteur arrive à la régie, devant la vraie salle des fêtes, éteinte puis allumée. Les lyres du pont convergent sur la souris ou le doigt, et sous la main la salle elle-même s'éclaire sur le parquet. Sur la partie gauche, le voile sombre s'ouvre en poursuite sur le mur, les tables et les bougies.
  - Trois faders (invités, lumière, effets) et un interrupteur « Mariage » allument la salle et conseillent le pack, avec la vraie photo du pack. Le pack s'ajoute à « Ma demande ». Effets au maximum : jets de CO2 sur la scène.
  - Le flight case : le visiteur tire le couvercle, fait de la matière du vrai flight case ; s'il n'y touche pas, le couvercle s'ouvre seul. Cinq produits sont posés sur la mousse, chacun à ajouter à la demande. Une frise montre les quatre étapes, du premier message au jour J.
  - Puis :
    - les deux métiers ;
    - côté platines : styles en matrice LED, photo de Mattéo et Sacha à la Fête de la musique ;
    - les événements, où la lumière de la section change ;
    - les chiffres en LED et la zone de 50 km ;
    - l'appel final.
- **Location** : ouverture avec les cinq packs, fiches des packs, flight case qui s'ouvre famille par famille, catalogue de 25 articles filtrable (le filtre est gardé dans l'adresse, la recherche ignore les accents et les pluriels), étapes et bon à savoir.
- **Prestation DJ** : grand titre centré et vumètre, ce qui est compris, la playlist (incontournables et titres à éviter, jointe à la demande), les temps forts, Mattéo et Sacha.
- **Événements** : index des onze événements, chacun avec sa formule et un devis prérempli. Les cinq événements sans image montrent le matériel qu'on y apporte (vraies photos). Le mariage propose aussi d'ajouter le Pack Professionnel.
- **Contact**
  - Numéro en matrice LED ; WhatsApp et e-mail dès le haut de la page.
  - Demande en quatre étapes qui reprend la sélection et le nombre d'invités réglé à la régie ; choix « DJ et location ».
  - À l'envoi (simulé) : jet de CO2 et tampon « Demande reçue ».
  - Moyens directs, zone et questions.
- **Commun**
  - Intro : la poire du logo se trace comme un laser, puis se pose sur la régie.
  - Voile en faisceau de lumière ; deux lyres aux coins de l'écran visent le titre de chaque section.
  - « Ma demande » en flight case dans l'en-tête.
  - Menu avec appel, WhatsApp et e-mail.
