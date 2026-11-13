/* Gabarit commun : head, en-tête, menu, pied de page, barre fixe du téléphone, voile.
   Les conventions data-* sont celles que lisent le socle JavaScript et l'audit (voir le README). */
import { html, brut } from '../../outils/gabarit.mjs';

/* Poire du logo, tracée d'un seul trait (squelette du logo du client) : intro, voile, fil. */
export const POIRE = 'M247,142 L224,145 L206,151 L189,161 L173,179 L167,191 L152,245 L141,272 L119,313 L69,392 L48,432 L36,467 L31,502 L32,543 L39,576 L46,596 L57,619 L82,655 L113,685 L143,705 L186,723 L228,731 L268,731 L311,723 L355,704 L393,677 L417,652 L442,614 L456,580 L463,550 L466,519 L462,477 L456,453 L448,432 L428,393 L381,319 L356,274 L348,255 L334,204 L325,181 L319,172 L308,161 L295,153 L268,144 L249,142 M241,50 L240,43 L232,29 L212,22 L172,19 L152,21 L130,27 L116,33 L91,48 L77,59 L54,82 L31,113 L26,133 M390,497 L386,527 L376,558 L362,583 L352,596 L336,612 L309,631 L285,642 L259,649 L232,651 M240,51 L234,57 L221,61 L187,90 L163,106 L134,122 L108,133 L68,141 L30,139 L26,134 M248,141 L248,57 L242,51';
const poire = (classe, attrs = '') => brut(`<svg class="${classe}" viewBox="-30 -30 580 811" aria-hidden="true"${attrs}><defs><linearGradient id="grad-${classe}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9b74ff"/><stop offset="1" stop-color="#46f0b0"/></linearGradient></defs><path class="poire-halo" d="${POIRE}" stroke="url(#grad-${classe})"/><path class="poire-trait" d="${POIRE}" stroke="url(#grad-${classe})" pathLength="1"/></svg>`);

const navigation = (c) => c.site.navigation.filter((cle) => c.pages[cle] && (c.pages[cle].langues || c.langues).includes(c.l));

function tete(c) {
  const p = c.page, cle = p.cle;
  const titre = c.s(`pages.${cle}.titre`), description = c.s(`pages.${cle}.description`);
  const ici = c.abs(c.url(cle));
  const imagePartage = c.abs(`/assets/partage/${p.partage === false ? 'accueil' : cle}-${c.l}.jpg`);
  const autres = c.alternatives(cle);
  const structure = c.donnees.structure ? JSON.stringify(c.donnees.structure).replace(/</g, '\\u003c') : '';
  return html`<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${titre}</title>
<meta name="description" content="${description}">
<meta name="robots" content="noindex, nofollow">
<link rel="canonical" href="${ici}">
${autres.length > 1 ? autres.map((a) => html`<link rel="alternate" hreflang="${a.l}" href="${c.abs(a.url)}">\n`) : ''}${autres.length > 1 ? html`<link rel="alternate" hreflang="x-default" href="${c.abs(c.alternatives(cle)[0].url)}">` : ''}
<style>${brut(c.critique.css)}</style>
<script>${brut(c.critique.js)}</script>
${(c.site.polices || []).map((f) => html`<link rel="preload" href="${f}" as="font" type="font/woff2" crossorigin>\n`)}<link rel="stylesheet" href="${c.asset('css/socle.css')}">
<link rel="stylesheet" href="${c.asset('css/site.css')}">
<link rel="modulepreload" href="${c.asset('js/site.js')}">
<link rel="modulepreload" href="${c.asset('js/socle/index.js')}">
<script src="/assets/vendor/gsap.min.js" defer></script>
<script src="/assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="/assets/vendor/SplitText.min.js" defer></script>
<script type="module" src="${c.asset('js/site.js')}"></script>
<meta name="theme-color" content="${c.site.couleurs.theme || c.site.couleurs.fond}">
<link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${c.site.nom}">
<meta property="og:locale" content="${c.l === 'fr' ? 'fr_FR' : c.l === 'en' ? 'en_GB' : c.l}">
<meta property="og:title" content="${titre}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${ici}">
<meta property="og:image" content="${imagePartage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${c.s(`pages.${p.partage === false ? 'accueil' : cle}.partageAlt`)}">
<meta name="twitter:card" content="summary_large_image">
${structure ? html`<script type="application/ld+json">${brut(structure)}</script>` : ''}
</head>`;
}

function entete(c) {
  const autreLangue = c.alternatives(c.page.cle).filter((a) => a.l !== c.l);
  return html`<header data-entete>
  <div class="entete-rangee">
    <a class="entete-logo" href="${c.url('accueil')}" aria-label="${c.s('commun.logo')}" data-libelle="${c.libelle('accueil')}"${c.page.cle === 'accueil' ? brut(' aria-current="page"') : ''}>
      <img src="/assets/images/logo-entete-480.webp" alt="${c.site.nom}" width="480" height="182">
    </a>
    <nav data-nav aria-label="${c.s('commun.navigation')}">
      <ul>${navigation(c).filter((k) => k !== 'accueil').map((k) => html`<li>${c.lien(k)}</li>`)}</ul>
    </nav>
    <div class="entete-actions">
      ${autreLangue.map((a) => html`<a class="entete-langue" href="${a.url}" hreflang="${a.l}" lang="${a.l}" data-langue="${a.l}" aria-label="${c.s('commun.langueAutre')}">${a.l}</a>`)}
      <a class="bouton bouton--case" href="${c.url('contact', 'demande')}" data-libelle="${c.libelle('contact')}" data-demande-cible><span class="case-icone" aria-hidden="true"><i></i></span><span class="case-texte">${c.t('commun.actionEntete')}</span> <span class="case-compte" data-demande-compte aria-label="${c.s('commun.demandeVide')}">0</span></a>
      <button type="button" data-menu-bouton aria-controls="menu" aria-expanded="false" data-libelle-ouvrir="${c.s('commun.menu')}" data-libelle-fermer="${c.s('commun.fermer')}"><span data-libelle-bouton>${c.t('commun.menu')}</span></button>
      <a class="menu-sansjs" href="#menu" data-menu-lien>${c.t('commun.menu')}</a>
    </div>
  </div>
</header>
<script>/* Avant le premier affichage : rangées de la navigation (même règle que ajusterNav dans assets/js/socle/entete.js)
   et hauteur réelle de l'en-tête, pour que rien ne saute quand le JavaScript du site prend la main. */
(function () {
  var h = document.documentElement, u = document.querySelector('[data-nav] ul'), e = document.querySelector('[data-entete]');
  if (u) {
    var deborde = function () { return u.scrollWidth > u.clientWidth + 1; }, c = deborde();
    if (c && window.matchMedia('(min-width: 900px)').matches) {
      h.classList.add('nav-deux-rangees'); c = deborde();
      if (c) { h.classList.add('nav-deux-lignes'); var a = u.querySelector('a'); c = !a || u.getBoundingClientRect().height > a.getBoundingClientRect().height * 2.5; }
      if (c) h.classList.remove('nav-deux-rangees', 'nav-deux-lignes');
    }
    if (c) h.classList.add('nav-compacte');
  }
  if (e) h.style.setProperty('--entete-h', Math.round(e.getBoundingClientRect().height) + 'px');
})();</script>
<span id="menu-ferme" aria-hidden="true"></span>
<div id="menu" data-menu role="dialog" aria-modal="true" aria-label="${c.s('commun.menu')}">
  <p class="menu-sansjs-fermer"><a href="#menu-ferme">${c.t('commun.fermer')}</a></p>
  <ul>${navigation(c).map((k, i) => html`<li style="--i:${i}">${c.lien(k, { classe: 'menu-lien' })}</li>`)}</ul>
  <p class="menu-contacts"><a class="bouton" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a> <a class="bouton bouton--contour" href="${c.site.contact.whatsapp}" target="_blank" rel="noopener">${c.t('commun.whatsapp')}</a> <a class="bouton bouton--contour" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
  ${autreLangue.map((a) => html`<p><a class="entete-langue" href="${a.url}" hreflang="${a.l}" lang="${a.l}" data-langue="${a.l}">${c.s('commun.langueAutre')}</a></p>`)}
</div>`;
}

function pied(c) {
  const k = c.site.contact;
  return html`<footer class="pied" id="pied">
  <div class="conteneur pied-grille">
    <div>
      <img class="pied-logo" src="/assets/images/logo-entete-480.webp" alt="${c.site.nom}" width="480" height="182" loading="lazy">
      <p>${c.t('commun.zone')}<br>${c.t('commun.dispo')}</p>
    </div>
    <div>
      <p><strong>Contact</strong></p>
      <ul>
        <li><a href="tel:${k.telephoneLien}">${k.telephone}</a></li>
        <li><a href="${k.whatsapp}" target="_blank" rel="noopener">${c.t('commun.whatsapp')}</a></li>
        <li><a href="mailto:${k.email}">${k.email}</a></li>
      </ul>
    </div>
    <nav aria-label="${c.s('commun.sommaire')}">
      <p><strong>${c.t('commun.sommaire')}</strong></p>
      <ul>${navigation(c).map((x) => html`<li>${c.lien(x)}</li>`)}</ul>
    </nav>
    <div>
      <p><strong>${c.t('commun.confort')}</strong></p>
      <ul>
        <li><a href="${k.instagram}" target="_blank" rel="noopener">Instagram</a></li>
        <li><a href="${k.tiktok}" target="_blank" rel="noopener">TikTok</a></li>
        <li><a href="${k.facebook}" target="_blank" rel="noopener">Facebook</a></li>
        <li><a href="#haut" data-sans-transition>${c.t('commun.retourHaut')}</a></li>
      </ul>
    </div>
  </div>
  <div class="conteneur pied-bas"><p>${c.t('commun.mentions')} · ${c.t('commun.confidentialite')}</p><p>${c.t('commun.maquette')}</p><p>© ${c.site.nom}</p></div>
</footer>`;
}

function barre(c) {
  const a = c.site.actionEntete;
  return html`<div data-barre-fixe>
  <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')}</a>
  ${a ? html`<a class="bouton" href="${c.url(a.page, a.ancre || '')}" data-libelle="${c.libelle(a.page)}">${c.t('commun.devisCourt')}</a>` : ''}
</div>`;
}

/* Voile : sa forme (glisse, iris, vague, rideau) vient de donnees/site.json (formeVoile) ; voir assets/js/socle/voile.js. */
const FORMES_VOILE = ['glisse', 'iris', 'vague', 'rideau', 'faisceau'];
function voile(c) {
  const forme = FORMES_VOILE.includes(c.site.formeVoile) ? c.site.formeVoile : 'glisse';
  const vagues = forme === 'vague'
    ? html`<svg class="voile-vague voile-vague--haut" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 120 C 240 20 480 20 720 70 S 1200 130 1440 40 V 120 H 0 Z"/></svg><svg class="voile-vague voile-vague--bas" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 C 240 100 480 100 720 50 S 1200 -10 1440 80 V 0 H 0 Z"/></svg>`
    : '';
  return html`<div data-voile data-forme="${forme}" aria-hidden="true">${vagues}<div class="voile-contenu">${poire('voile-poire')}<span data-voile-libelle>${c.libelle(c.page.cle)}</span></div></div>`;
}

export function page(c, contenu) {
  return html`<!doctype html>
<html lang="${c.l}" data-v="${c.v}"${c.site.curseur ? brut(' data-curseur') : ''}>
${tete(c)}
<body id="haut">
${voile(c)}
<div class="ouverture-panneau" data-ouverture aria-hidden="true">
  <div class="ouverture-objet" data-ouverture-objet>${poire('ouverture-poire')}</div>
  <img class="ouverture-mot" src="/assets/images/logo-mot.webp" alt="" width="900" height="136">
  <p class="ouverture-ligne">${c.t('commun.introLigne')}</p>
</div>
<a class="evitement" href="#contenu">${c.t('commun.evitement')}</a>
${entete(c)}
<div class="fil-lyres" data-grille="fil" data-effet="lyres-fil" aria-hidden="true">
  <div class="fil-lyre fil-lyre--g"><span class="fil-faisceau"></span><img src="/assets/images/materiel/lyre-beam-100w-360.webp" alt="" width="360" height="449"></div>
  <div class="fil-lyre fil-lyre--d"><span class="fil-faisceau"></span><img src="/assets/images/materiel/lyre-beam-100w-360.webp" alt="" width="360" height="449"></div>
</div>
<main id="contenu" tabindex="-1"${c.page.sansAction ? brut(' data-sans-action') : ''}${c.page.sansEffet ? brut(' data-sans-effet') : ''}>
${contenu}
</main>
${pied(c)}
${barre(c)}
</body>
</html>`;
}
