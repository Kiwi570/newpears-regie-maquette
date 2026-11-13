/* Carte de la zone d'intervention : projection simple autour de Saint-Quentin (km), 1 km = 4,4 unités. */
import { html } from '../../outils/gabarit.mjs';
export function carte(c, villes, titre) {
  const o = villes.find((v) => v.centre), k = 4.4, cx = 300, cy = 300;
  const pos = (v) => ({ x: cx + (v.lon - o.lon) * Math.cos(o.lat * Math.PI / 180) * 111.32 * k, y: cy - (v.lat - o.lat) * 110.57 * k });
  return html`<svg class="carte-zone" viewBox="0 0 600 600" role="img" aria-label="${titre}">
  <circle class="zone-50" cx="300" cy="300" r="${50 * k}" data-fx-trait/>
  <circle class="zone-10" cx="300" cy="300" r="${10 * k}" data-fx-trait/>
  ${villes.map((v) => { const p = pos(v); return html`<g class="ville${v.centre ? ' ville--centre' : ''}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})"><circle r="${v.centre ? 7 : 4.5}"/><text x="${v.centre ? 12 : 9}" y="4">${v.nom}</text></g>`; })}
</svg>
<ul class="zone-legendes"><li><i class="pastille-10"></i>${c.s('accueil.zone.offerte')}</li><li><i class="pastille-50"></i>${c.s('accueil.zone.zone')}</li></ul>`;
}
