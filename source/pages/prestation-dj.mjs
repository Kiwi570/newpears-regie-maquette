/* Prestation DJ : grand titre centré puis bandeau photo, ce qui est compris (rack de voyants), la playlist
   (incontournables et titres à éviter), les temps forts, Mattéo et Sacha, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { POIRE } from '../gabarits/commun.mjs';

export const page = { cle: 'prestation-dj', fichier: 'prestation-dj', imagePartage: 'grok/dj-ouverture-1280.webp' };


/* Platines dessinées (SVG) : nettes à toutes les tailles. Les deux plateaux tournent (data-jog), la lumière reste fixe. */
const plateau = (cx, cy, cote) => {
  const k = 0.062, px = cx - 250 * k, py = cy - 380 * k;
  return `<g class="ctl-jog" data-jog${cote === 'g' ? ' data-effet="jogs"' : ''}>
    <circle cx="${cx}" cy="${cy}" r="135" class="ctl-plateau"/>
    <circle cx="${cx}" cy="${cy}" r="124" class="ctl-grip"/>
    ${[110, 98, 86, 74, 62].map((r) => `<circle cx="${cx}" cy="${cy}" r="${r}" class="ctl-sillon"/>`).join('')}
    <circle cx="${cx}" cy="${cy}" r="44" class="ctl-etiquette"/>
    <path d="${POIRE}" class="ctl-poire" transform="translate(${px.toFixed(1)} ${py.toFixed(1)}) scale(${k})"/>
    <line x1="${cx}" y1="${cy - 121}" x2="${cx}" y2="${cy - 98}" class="ctl-repere"/>
  </g>
  <path d="M ${cx - 118} ${cy - 40} A 125 125 0 0 1 ${cx - 40} ${cy - 118}" class="ctl-reflet"/>`;
};
const controleurSvg = (label) => {
  const pads = (x0, cls) => [0, 1, 2, 3].map((i) => `<rect x="${x0 + i * 52}" y="392" width="42" height="34" rx="6" class="ctl-pad ${cls}"/>`).join('');
  const boutons = (x) => `<circle cx="${x}" cy="300" r="15" class="ctl-bouton"/><path d="M ${x - 4} 293 L ${x + 6} 300 L ${x - 4} 307 Z" class="ctl-icone-vert"/><circle cx="${x}" cy="344" r="15" class="ctl-bouton"/><rect x="${x - 6}" y="338" width="12" height="12" rx="2" class="ctl-icone"/>`;
  const vu = (x) => Array.from({ length: 11 }, (_, i) => `<rect x="${x}" y="${246 - i * 14}" width="12" height="9" rx="2" class="ctl-led ${i > 9 ? 'ctl-led--rouge' : i > 7 ? 'ctl-led--ambre' : 'ctl-led--vert'}${i > 6 ? ' ctl-led--eteinte' : ''}"/>`).join('');
  const bouton = (x, y) => `<circle cx="${x}" cy="${y}" r="13" class="ctl-molette"/><line x1="${x}" y1="${y}" x2="${x}" y2="${y - 10}" class="ctl-trait"/>`;
  return brut(`<svg class="controleur-svg" viewBox="0 0 1084 480" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="ctl-corps" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1924"/><stop offset="1" stop-color="#0c0b12"/></linearGradient>
    <linearGradient id="ctl-anneau" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b49bff"/><stop offset="1" stop-color="#6fe3bd"/></linearGradient>
    <radialGradient id="ctl-disque" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="#1d1b28"/><stop offset="1" stop-color="#0d0c14"/></radialGradient>
  </defs>
  <rect x="8" y="8" width="1068" height="464" rx="28" class="ctl-corps"/>
  <rect x="70" y="34" width="250" height="26" rx="7" class="ctl-ecran"/><path d="M 82 47 ${Array.from({ length: 28 }, (_, i) => `L ${88 + i * 8} ${47 + (i % 2 ? -1 : 1) * (2 + ((i * 7) % 9))}`).join(' ')}" class="ctl-onde ctl-onde--violet"/>
  <rect x="764" y="34" width="250" height="26" rx="7" class="ctl-ecran"/><path d="M 776 47 ${Array.from({ length: 28 }, (_, i) => `L ${782 + i * 8} ${47 + (i % 2 ? 1 : -1) * (2 + ((i * 5) % 9))}`).join(' ')}" class="ctl-onde ctl-onde--vert"/>
  <rect x="38" y="110" width="6" height="240" rx="3" class="ctl-rail"/><rect x="28" y="214" width="26" height="14" rx="3" class="ctl-curseur"/>
  <rect x="1040" y="110" width="6" height="240" rx="3" class="ctl-rail"/><rect x="1030" y="246" width="26" height="14" rx="3" class="ctl-curseur"/>
  ${plateau(222, 225, 'g')}
  ${plateau(862, 225, 'd')}
  ${pads(118, 'ctl-pad--violet')}${pads(758, 'ctl-pad--vert')}
  ${boutons(388)}${boutons(696)}
  <rect x="420" y="30" width="244" height="420" rx="16" class="ctl-table"/>
  <text x="542" y="62" text-anchor="middle" class="ctl-marque">NEWPEARS</text>
  ${[100, 145, 190].map((y) => bouton(462, y) + bouton(622, y)).join('')}
  ${vu(520)}${vu(552)}
  <rect x="459" y="262" width="6" height="110" rx="3" class="ctl-rail"/><rect x="445" y="300" width="34" height="16" rx="3" class="ctl-curseur"/>
  <rect x="619" y="262" width="6" height="110" rx="3" class="ctl-rail"/><rect x="605" y="326" width="34" height="16" rx="3" class="ctl-curseur"/>
  <rect x="492" y="409" width="100" height="6" rx="3" class="ctl-rail"/><rect x="533" y="396" width="18" height="32" rx="3" class="ctl-curseur ctl-curseur--x"/>
</svg>`);
};

const STYLES = ['Electro House', 'Généraliste', 'Années 80–2000', 'Hits actuels', 'Rap / RnB', 'Latino / Afro', 'Variété française'];

export default (c) => html`
<section class="tete tete--dj tete--controleur" id="debut">
  <div class="tete-texte conteneur">
    <p class="sur" data-anime="gsap">${c.t('dj.tete.sur')}</p>
    <h1 data-grille="typo" class="titre-led"><span class="ligne-masque"><span class="tete-ligne">Deux DJ,</span></span><span class="ligne-masque"><span class="tete-ligne">toute la <em>soirée</em></span></span></h1>
    <p class="tete-actions" data-anime="gsap">
      ${c.lien('contact', { ancre: 'demande', params: 'souhait=dj', classe: 'bouton', texte: c.t('dj.fin.action'), attrs: 'data-action-principale' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      <span class="tete-info" data-info-cle>${c.t('dj.tete.info')} · tarif sur devis</span>
    </p>
  </div>
  <div class="controleur" data-controleur data-iris-centre data-visuel>
    ${controleurSvg(c.s('dj.controleur.alt'))}
    <p class="controleur-consigne" aria-hidden="true"><span class="consigne-souris">${c.t('dj.controleur.consigne')}</span><span class="consigne-tactile">${c.t('dj.controleur.consigneTactile')}</span></p>
  </div>
  <p class="tete-texte-bas conteneur masque-ecran-bas" data-anime="gsap">${c.t('dj.tete.texte')}</p>
</section>

<section class="clair inclus conteneur" id="inclus">
  <p class="sur">${c.t('dj.inclus.sur')}</p>
  <div class="inclus-tete"><h2 data-anime="lignes">${c.t('dj.inclus.titre')}</h2><img class="inclus-visuel" src="/assets/images/materiel/controleur-dj-720.webp" alt="" loading="lazy" data-visuel></div>
  <ul class="inclus-liste" data-anime="cascade">
    ${[1, 2, 3, 4, 5, 6, 7].map((n) => html`<li><span class="voyant" data-effet="inclus-led" aria-hidden="true"></span><span>${c.t(`dj.inclus.i${n}`)}</span></li>`)}
  </ul>
</section>

<section class="clair playlist" id="playlist">
  <div class="conteneur playlist-grille">
    <div>
      <p class="sur">${c.t('dj.playlist.sur')}</p>
      <h2 data-anime="lignes">${c.t('dj.playlist.titre')}</h2>
      <p>${c.t('dj.playlist.texte')}</p>
      <p class="playlist-consigne">${c.t('dj.playlist.consigne')}</p>
      <ul class="pastilles" data-anime="cascade">
        ${STYLES.map((s) => html`<li><button type="button" class="pastille" data-style="${s}" aria-pressed="false"><span class="pastille-etat" aria-hidden="true"></span>${s}</button></li>`)}
      </ul>
    </div>
    <div class="playlist-ecran" data-visuel>
      <div class="egaliseur" aria-hidden="true">${Array.from({ length: 24 }, (_, i) => html`<i style="--i:${i}"></i>`)}</div>
      <div class="playlist-colonnes" aria-live="polite">
        <div><p class="playlist-titre">${c.t('dj.playlist.garder')}</p><ul data-liste="garder"><li class="vide">${c.t('dj.playlist.vide')}</li></ul></div>
        <div><p class="playlist-titre playlist-titre--eviter">${c.t('dj.playlist.eviter')}</p><ul data-liste="eviter"><li class="vide">${c.t('dj.playlist.vide')}</li></ul></div>
      </div>
      <button type="button" class="bouton bouton--petit" data-joindre-playlist data-grille="retour">${c.t('dj.playlist.envoyer')}</button>
    </div>
  </div>
</section>

<section class="clair temps conteneur" id="temps-forts">
  <p class="sur">${c.t('dj.temps.sur')}</p>
  <h2 data-anime="lignes">${c.t('dj.temps.titre')}</h2>
  <p class="temps-texte">${c.t('dj.temps.texte')}</p>
  <div class="temps-grille">
    ${c.media({ nom: 'grok/dj-ouverture', alt: c.s('dj.tete.alt'), classe: 'temps-grand', sizes: '(max-width: 760px) 100vw, 60vw', attrs: 'data-anime="rideau"' })}
    <ol class="temps-liste" data-anime="cascade">${[1, 2, 3, 4].map((n) => html`<li><span class="etape-n">0${n}</span>${c.t(`dj.temps.t${n}`)}</li>`)}</ol>
    ${c.media({ nom: 'grok/dj-micro-gateau', alt: c.s('dj.temps.altMicro'), classe: 'temps-petit', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="clair duo" id="duo">
  <div class="conteneur duo-grille">
    ${c.media({ nom: 'duo-fete-musique', alt: c.s('dj.duo.alt'), classe: 'duo-photo', cadrage: '50% 50%', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-fx="zoom"' })}
    <div>
      <p class="sur">${c.t('dj.duo.sur')}</p>
      <h2 data-anime="lignes">${c.t('dj.duo.titre')}</h2>
      <p data-anime>${c.t('dj.duo.texte')}</p>
      <ul class="duo-reperes" data-anime="cascade">
        <li><strong>8 ans</strong> de mix</li><li><strong>+40</strong> prestations par an</li><li><strong>Avril 2025</strong> création de NEWPEARS</li>
      </ul>
    </div>
  </div>
</section>

<section class="fin fin--page" id="fin">
  <div class="fin-balayage" data-visuel aria-hidden="true"><span></span><span></span></div>
  <div class="conteneur fin-texte">
    <h2 data-anime="lignes">${c.t('dj.fin.titre')}</h2>
    <p data-anime>${c.t('dj.fin.texte')}</p>
    <p class="fin-actions">${c.lien('contact', { ancre: 'demande', params: 'souhait=dj', classe: 'bouton', texte: c.t('dj.fin.action') })}<a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
  </div>
</section>
`;
