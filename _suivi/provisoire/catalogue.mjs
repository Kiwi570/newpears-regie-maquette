import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require('/usr/local/lib/node_modules_global/sharp');
import fs from 'node:fs';
const noms = ['pack-essentiel','pack-confort','pack-ambiance','pack-club','pack-professionnel','pack','enceinte-amplifiee','caisson-basses','pied-enceinte','table-mixage-6-voies','micro-sans-fil','controleur-dj','platines-dj','rallonges-multiprises','lyre-beam-100w','lyre-wash-7x12w','laser-1000mw','laser-400mw','led','stroboscope','ludipocket-spider','lumiere-flower','lumiere-butterfly','machine-fumee','machine-fumee-900w','machine-effet-co2','structure-pont','portique-t','videoprojecteur-4-000-lumens','ecran-projection-150-pouces'];
fs.mkdirSync('assets/images/catalogue', { recursive: true });
for (const n of noms) for (const w of [480, 900]) await sharp(`recu/site/${n}.jpg`).resize({ width: w }).webp({ quality: 80 }).toFile(`assets/images/catalogue/${n}-${w}.webp`);
console.log('ok', noms.length);
