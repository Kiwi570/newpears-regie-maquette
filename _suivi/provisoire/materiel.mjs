/* Matériel détouré (photos du client sur fond blanc) en WebP avec transparence, et logo. */
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require('/usr/local/lib/node_modules_global/sharp');
import fs from 'node:fs';
const src = '_suivi/detoures/';
fs.mkdirSync('assets/images/materiel', { recursive: true });
for (const f of fs.readdirSync(src).filter((f) => f.endsWith('.png') && !f.startsWith('logo'))) {
  const nom = f.replace('.png', '');
  const m = await sharp(src + f).metadata();
  for (const w of [360, 720]) {
    await sharp(src + f).resize({ width: Math.min(w, m.width) }).webp({ quality: 82, alphaQuality: 90 }).toFile(`assets/images/materiel/${nom}-${w}.webp`);
  }
}
const d = fs.readFileSync('_suivi/detoures/poire.d', 'utf8');
const poire = (trait, fond) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-30 -30 580 811">${fond ? `<rect x="-30" y="-30" width="580" height="811" fill="${fond}"/>` : ''}<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b66d6"/><stop offset="1" stop-color="#3cc39a"/></linearGradient></defs><path d="${d}" fill="none" stroke="url(#g)" stroke-width="${trait}" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
fs.writeFileSync('assets/images/favicon.svg', poire(46));
fs.writeFileSync('assets/images/poire.svg', poire(30));
await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><rect width="180" height="180" fill="#07070c"/></svg>`)).composite([{ input: await sharp(Buffer.from(poire(40))).resize({ height: 140 }).png().toBuffer(), gravity: 'center' }]).png().toFile('assets/images/apple-touch-icon.png');
await sharp('_suivi/detoures/logo.png').resize({ width: 480 }).webp({ quality: 90 }).toFile('assets/images/logo-480.webp');
await sharp('_suivi/detoures/logo.png').resize({ width: 960 }).webp({ quality: 90 }).toFile('assets/images/logo-960.webp');
await sharp('_suivi/detoures/logo.png').resize({ width: 960 }).png().toFile('assets/images/logo.png');
console.log('ok');
