/* Images provisoires pour construire avant la réception des images Grok : remplacées par produire.mjs. Jamais livrées. */
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require('/usr/local/lib/node_modules_global/sharp');
import fs from 'node:fs';
const plan = JSON.parse(fs.readFileSync('plan-images.json', 'utf8'));
for (const e of plan) {
  if (!e.nom.startsWith('grok/')) continue;
  const r = (e.ratio || (e.role === 'ouverture' || e.role === '404' ? '16:9' : '3:2')).split(':').map(Number);
  for (const w of [640, 1280]) {
    const h = Math.round(w * r[1] / r[0]);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><radialGradient id="g" cx="60%" cy="35%" r="80%"><stop offset="0" stop-color="#3a2a66"/><stop offset=".5" stop-color="#12101e"/><stop offset="1" stop-color="#07070c"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`;
    const f = `assets/images/${e.nom}-${w}.webp`;
    fs.mkdirSync(f.replace(/\/[^/]+$/, ''), { recursive: true });
    await sharp(Buffer.from(svg)).webp({ quality: 60 }).toFile(f);
  }
}
console.log('provisoires écrites');
