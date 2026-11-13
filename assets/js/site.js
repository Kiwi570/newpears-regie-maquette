/* NEWPEARS — effets propres au client (direction « La régie »). Le socle gère l'ouverture, les transitions,
   l'en-tête, le menu, les boucles, les mesures et la bibliothèque d'effets. Chaque effet propre porte data-effet. */
import { demarrer, boucle, versObjet, quand } from './socle/index.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const html = document.documentElement;
const tactile = matchMedia('(hover: none)').matches;
/* Allumage des faisceaux de la régie (0 pendant l'intro, 1 ensuite). */
const regie = { allumage: 0, salle: 1, majSalle: null, cible: { x: 0, y: 0 }, vise: null, inactif: 0, tenue: 1.6, serre: 0, co2: null, faisceaux: 4, force: 1, fumee: 0.5 };

/* ---------- Ma demande : le panier du devis (même source dans tous les onglets) ---------- */
const CLE = 'newpears-demande';
function lireDemande() {
  try { const v = JSON.parse(localStorage.getItem(CLE) || '[]'); return Array.isArray(v) ? v.filter((x) => x && x.id && x.nom) : []; }
  catch { try { localStorage.removeItem(CLE); } catch {} return []; }
}
function ecrireDemande(l) { try { localStorage.setItem(CLE, JSON.stringify(l)); } catch {} majDemande(); }
function majDemande() {
  const l = lireDemande();
  $$('[data-demande-compte]').forEach((e) => { e.textContent = String(l.length); e.setAttribute('aria-label', l.length ? `${l.length} article${l.length > 1 ? 's' : ''}` : 'aucun article'); });
  $$('[data-ajouter]').forEach((b) => {
    const dedans = l.some((x) => x.id === b.dataset.ajouter);
    b.toggleAttribute('data-ajoute', dedans);
    if (!b.dataset.texte) b.dataset.texte = b.textContent.trim();
    b.textContent = dedans ? 'Dans ma demande ✓' : b.dataset.texte;
  });
  document.dispatchEvent(new CustomEvent('demande:maj', { detail: l }));
}
window.addEventListener('storage', (e) => { if (e.key === CLE) majDemande(); });

/* L'article s'envole jusqu'au flight case de l'en-tête, qui se referme dessus (grille wouahou, point 7). */
function envol(depuis, image) {
  const cible = $('[data-demande-cible]');
  if (!cible || !depuis) return;
  html.classList.remove('entete-cache');
  const a = depuis.getBoundingClientRect(), b = cible.getBoundingClientRect();
  if (!b.width) { cible.classList.add('recoit'); return; }
  const img = document.createElement('img');
  img.src = image; img.alt = ''; img.className = 'envol'; img.setAttribute('aria-hidden', 'true');
  img.style.left = `${a.left + a.width / 2 - 45}px`; img.style.top = `${a.top + a.height / 2 - 45}px`;
  document.body.appendChild(img);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
  const anim = img.animate([
    { transform: 'translate(0,0) scale(1) rotate(0deg)', opacity: 1 },
    { transform: `translate(${dx * 0.45}px, ${dy * 0.45 - 120}px) scale(.9) rotate(-12deg)`, opacity: 1, offset: 0.5 },
    { transform: `translate(${dx}px, ${dy}px) scale(.18) rotate(8deg)`, opacity: 0.2 },
  ], { duration: 820, easing: 'cubic-bezier(.5,0,.3,1)' });
  anim.finished.catch(() => {}).then(() => { img.remove(); cible.classList.remove('recoit'); void cible.offsetWidth; cible.classList.add('recoit'); });
}
function initDemande() {
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ajouter]');
    if (!b) return;
    const l = lireDemande();
    if (!l.some((x) => x.id === b.dataset.ajouter)) {
      l.push({ id: b.dataset.ajouter, nom: b.dataset.ajouterNom, image: b.dataset.ajouterImage });
      if (b.dataset.ajouterAussi) { const [id, nom, image] = b.dataset.ajouterAussi.split('|'); if (!l.some((x) => x.id === id)) l.push({ id, nom, image }); }
      ecrireDemande(l);
      envol(b.closest('[data-envol-depuis]') || b, b.dataset.ajouterImage);
    }
  });
  majDemande();
}
export function retirerDemande(id) { ecrireDemande(lireDemande().filter((x) => x.id !== id)); }
export { lireDemande };

/* ---------- Jet de CO2 (temps fort) : quatre colonnes blanches qui montent puis se dissipent ---------- */
export function jetCO2(dans = document.body) {
  const j = document.createElement('div');
  j.className = 'jet-co2'; j.setAttribute('aria-hidden', 'true'); j.dataset.auditIgnorer = '';
  [8, 30, 58, 80].forEach((x, i) => { const s = document.createElement('i'); s.style.setProperty('--x', `${x - 13}%`); j.appendChild(s); });
  dans.appendChild(j);
  const fins = $$('i', j).map((s, i) => s.animate([
    { transform: 'scaleY(.05) scaleX(.6)', opacity: 0 },
    { transform: 'scaleY(.9) scaleX(1)', opacity: 0.85, offset: 0.35 },
    { transform: 'scaleY(1.05) scaleX(1.5)', opacity: 0 },
  ], { duration: 1500, delay: i * 70, easing: 'cubic-bezier(.2,.7,.3,1)' }).finished.catch(() => {}));
  Promise.all(fins).then(() => j.remove());
}

/* ---------- Fil : deux lyres fixes visent le titre de la section en cours ---------- */
function initFil() {
  const lyres = $$('.fil-lyre');
  if (!lyres.length) return;
  let titres = [], W = innerWidth, H = innerHeight, courant = null, regieH = 0;
  const mesurer = () => {
    W = innerWidth; H = innerHeight;
    const rg = document.getElementById('regie'); regieH = rg ? rg.offsetHeight : 0;
    titres = $$('main h1, main h2').filter((t) => t.offsetParent).map((t) => {
      const r = t.getBoundingClientRect();
      return { y: r.top + scrollY + Math.min(r.height, 120) / 2, x: r.left + Math.min(r.width, W * 0.5) / 2 };
    });
    viser();
  };
  const viser = () => {
    const milieu = scrollY + H * 0.42;
    let meilleur = null, d = Infinity;
    titres.forEach((t) => { const e = Math.abs(t.y - milieu); if (e < d) { d = e; meilleur = t; } });
    if (!meilleur) return;
    const yEcran = meilleur.y - scrollY;
    lyres.forEach((l, i) => {
      const ox = i === 0 ? 33 : W - 33, oy = 70;
      const dx = meilleur.x - ox, dy = Math.max(40, yEcran - oy);
      const angle = (Math.atan2(dx, dy) * 180) / Math.PI;
      l.style.setProperty('--angle', `${(-angle).toFixed(1)}deg`);
      l.style.setProperty('--echelle', (Math.min(H * 1.1, Math.hypot(dx, dy)) / H).toFixed(3));
      l.style.setProperty('--force', yEcran > -60 && yEcran < H ? '.26' : '.08');
    });
    courant = meilleur;
    /* Sur l'accueil, les lyres du pont font déjà le travail dans le premier écran. */
    html.classList.toggle('fil-repos', !!regieH && scrollY < regieH * 0.7);
  };
  let att = 0;
  addEventListener('scroll', () => { if (!att) att = requestAnimationFrame(() => { att = 0; viser(); }); }, { passive: true });
  if (window.ScrollTrigger) window.ScrollTrigger.addEventListener('refresh', mesurer);
  addEventListener('resize', mesurer);
  quand('pret', mesurer);
  mesurer();
}

/* ---------- 1. La régie : faisceaux au pointeur, faders, pack conseillé ---------- */
function initRegie() {
  const section = $('#regie');
  if (!section) return;
  const canvas = $('.regie-faisceaux', section), ctx = canvas.getContext('2d');
  const lyres = [];
  /* Lyres visibles sur le pont de la photo de la salle (coordonnées dans l'image d'origine, 1600 × 900). */
  const LYRES = [[0.296, 0.116], [0.417, 0.111], [0.49, 0.126], [0.567, 0.144], [0.721, 0.108], [0.79, 0.081], [0.91, 0.07]];
  const photo = $('.regie-photo img', section);
  const salle = $('.regie-salle', section);
  const packs = JSON.parse(($('[data-packs]', section) || {}).textContent || '[]');
  const lum = $('[data-regie-lumiere]', section), lumPhoto = lum && lum.firstElementChild;
  let lumVisible = false;
  let W = 0, H = 0, dpr = 1, origines = [], proj = (x, y) => ({ x, y }), sol = { haut: 0, bas: 0, gauche: 0 };
  const mesurer = () => {
    const r = (salle || section).getBoundingClientRect();
    dpr = innerWidth < 760 ? 0.5 : 0.6; /* faisceaux et fumée sont flous : une demi-résolution suffit et allège le rendu */
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    /* Projection des lyres de la photo sur l'écran (object-fit: cover, object-position 50 % 55 %) ; sur téléphone,
       la version en 9:16 est un recadrage centré de l'original. */
    const iw = 1600, ih = 900, x0 = 0;
    const pos = (photo ? getComputedStyle(photo).objectPosition : '62% 70%').split(' ').map((v) => (/%$/.test(v) ? parseFloat(v) / 100 : 0.5));
    const k = Math.max(W / iw, H / ih), dw = iw * k, dh = ih * k, ox = (W - dw) * pos[0], oy = (H - dh) * (pos[1] ?? 0.7);
    proj = (x, y) => ({ x: ox + x * dw, y: oy + y * dh });
    sol = { haut: oy + 0.7 * dh, bas: Math.min(H - 24, oy + 0.95 * dh), gauche: innerWidth < 760 ? ox + 0.3 * dw : Math.max(W * 0.44, ox + 0.32 * dw), droite: Math.min(W - 40, ox + 0.86 * dw) };
    if (lumPhoto) { lumPhoto.style.width = `${W}px`; lumPhoto.style.height = `${H}px`; lumPhoto.style.backgroundPosition = photo ? getComputedStyle(photo).objectPosition : '100% 70%'; }
    origines = LYRES.map(([x, y]) => ({ x: ox + ((x * 1600 - x0) / iw) * dw, y: oy + y * dh }))
      .filter((o) => o.x > -20 && o.x < W + 20);
    if (!regie.vise) regie.cible = { x: W * 0.62, y: H * 0.62 };
  };
  mesurer();
  if (photo && !photo.complete) photo.addEventListener('load', mesurer, { once: true });
  addEventListener('resize', mesurer);
  if (window.ScrollTrigger) window.ScrollTrigger.addEventListener('refresh', mesurer);
  quand('pret', mesurer);
  let haut = 0;
  const trace = [];
  const pointe = (x, y, tenue = 1.6) => { const r = (salle || section).getBoundingClientRect(); haut = r.top; regie.vise = { x: x - r.left, y: Math.max(0, Math.min(r.height, y - r.top)) }; regie.inactif = 0; regie.tenue = tenue;
    const d = trace[trace.length - 1]; if (!d || Math.hypot(d.x - regie.vise.x, d.y - regie.vise.y) > 24) { trace.push({ x: regie.vise.x, y: regie.vise.y, t: t0 }); if (trace.length > 60) trace.shift(); } };
  /* Poursuite : sous la souris, le voile sombre s'ouvre et laisse voir la salle (mur de briques, tables, bougies). */
  let rp = null;
  const poursuite = (e) => { if (rp) return; rp = requestAnimationFrame(() => { rp = null; const r = section.getBoundingClientRect(); section.style.setProperty('--px', `${Math.round(e.clientX - r.left)}px`); section.style.setProperty('--py', `${Math.round(e.clientY - r.top)}px`); }); };
  section.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' || e.buttons) { pointe(e.clientX, e.clientY); if (e.pointerType === 'mouse') poursuite(e); } }, { passive: true });
  section.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse' && !e.target.closest('.console, a, button, input, label')) pointe(e.clientX, e.clientY, 2.6); }, { passive: true });
  section.addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t && !e.target.closest('.console')) pointe(t.clientX, t.clientY, 2.6); }, { passive: true });
  section.addEventListener('pointerleave', () => { regie.vise = null; section.style.removeProperty('--px'); section.style.removeProperty('--py'); });

  /* Brume : particules lentes, plus nombreuses avec la fumée. */
  const brume = Array.from({ length: 30 }, () => ({ x: Math.random(), y: 0.2 + Math.random() * 0.6, r: 60 + Math.random() * 140, v: 0.004 + Math.random() * 0.01, a: Math.random() * 6.28 }));
  const couleurs = [[180, 155, 255], [111, 227, 189], [180, 155, 255], [111, 227, 189]];
  let t0 = 0;
  boucle(canvas, (dt, t) => {
    t0 = t;
    if (!W) return;
    /* Sans pointeur, les faisceaux balayent seuls la piste (ils bougent dès l'arrivée). */
    regie.inactif += dt;
    const auto = { x: W * (0.6 + 0.26 * Math.sin(t * 0.9)), y: H * (0.6 + 0.1 * Math.sin(t * 1.3 + 1)) };
    const main = regie.vise && regie.inactif < (regie.tenue || 1.6);
    /* Avec la main, la tache de gobos se pose sur le parquet sous le pointeur, partout dans la salle. */
    const but = main ? { x: Math.max(sol.gauche, Math.min(sol.droite, regie.vise.x)), y: Math.max(sol.haut, Math.min(sol.bas, regie.vise.y)) } : auto;
    const k = 1 - Math.pow(0.002, dt);
    regie.cible.x += (but.x - regie.cible.x) * k; regie.cible.y += (but.y - regie.cible.y) * k;
    regie.serre += ((main ? 1 : 0) - regie.serre) * (1 - Math.pow(0.02, dt));
    /* Sous la main, la salle elle-même s'éclaire : une version plus lumineuse de la photo, révélée en ellipse sur le parquet. */
    if (lum) {
      if (main !== lumVisible) { lumVisible = !!main; lum.classList.toggle('actif', lumVisible); }
      if (regie.serre > 0.01) { const lx = Math.round(regie.cible.x - 230), ly = Math.round(regie.cible.y - 85); lum.style.transform = `translate3d(${lx}px,${ly}px,0)`; lumPhoto.style.transform = `translate3d(${-lx}px,${-ly}px,0)`; }
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const A = regie.allumage;
    if (A <= 0.01) return;
    ctx.globalCompositeOperation = 'lighter';
    /* Fumée. */
    if (regie.fumee > 0) {
      brume.forEach((p) => {
        p.x += p.v * dt * 3; if (p.x > 1.2) p.x = -0.2;
        const x = p.x * W, y = p.y * H + Math.sin(t * 0.3 + p.a) * 14;
        const g = ctx.createRadialGradient(x, y, 0, x, y, p.r);
        g.addColorStop(0, `rgba(185,175,235,${0.085 * regie.fumee * A})`); g.addColorStop(1, 'rgba(185,175,235,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, p.r, 0, 6.29); ctx.fill();
      });
    }
    /* Faisceaux : chaque lyre vise un point autour de la cible. */
    origines.forEach((o, i) => {
      if (i >= regie.faisceaux) return;
      const libre = 1 - regie.serre;
      const ecart = (i - 1.5) * (34 + 60 * (0.5 + 0.5 * Math.sin(t * 0.7))) * libre + (i - (regie.faisceaux - 1) / 2) * 14 * regie.serre;
      const tx = regie.cible.x + ecart + Math.sin(t * 1.3 + i * 1.7) * 46 * libre, ty = regie.cible.y + Math.cos(t * 1.1 + i) * (26 * libre + 6);
      const dx = tx - o.x, dy = ty - o.y, L = Math.hypot(dx, dy) * 1.08, ang = Math.atan2(dy, dx);
      const largeur = (0.085 + 0.025 * Math.sin(t + i)) * (1 + 0.9 * regie.serre);
      const [r, g, b] = couleurs[i % 4];
      const grad = ctx.createLinearGradient(o.x, o.y, o.x + Math.cos(ang) * L, o.y + Math.sin(ang) * L);
      const f = (0.36 + 0.2 * regie.fumee) * regie.force * A;
      grad.addColorStop(0, `rgba(255,255,255,${0.85 * f})`);
      grad.addColorStop(0.06, `rgba(${r},${g},${b},${0.7 * f})`);
      grad.addColorStop(0.7, `rgba(${r},${g},${b},${0.18 * f})`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(o.x + Math.cos(ang + 1.57) * 5, o.y + Math.sin(ang + 1.57) * 5);
      ctx.lineTo(o.x + Math.cos(ang - largeur) * L, o.y + Math.sin(ang - largeur) * L);
      ctx.lineTo(o.x + Math.cos(ang + largeur) * L, o.y + Math.sin(ang + largeur) * L);
      ctx.lineTo(o.x + Math.cos(ang - 1.57) * 5, o.y + Math.sin(ang - 1.57) * 5);
      ctx.closePath(); ctx.fill();
      /* Halo autour du faisceau, dans la fumée. */
      const g2 = ctx.createLinearGradient(o.x, o.y, o.x + Math.cos(ang) * L, o.y + Math.sin(ang) * L);
      g2.addColorStop(0, `rgba(${r},${g},${b},${0.22 * f})`); g2.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = g2; ctx.beginPath();
      ctx.moveTo(o.x, o.y);
      ctx.lineTo(o.x + Math.cos(ang - largeur * 2.4) * L, o.y + Math.sin(ang - largeur * 2.4) * L);
      ctx.lineTo(o.x + Math.cos(ang + largeur * 2.4) * L, o.y + Math.sin(ang + largeur * 2.4) * L);
      ctx.closePath(); ctx.fill();
      const tache = ctx.createRadialGradient(tx, ty, 0, tx, ty, 70);
      tache.addColorStop(0, `rgba(${r},${g},${b},${0.5 * f})`); tache.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = tache; ctx.beginPath(); ctx.ellipse(tx, ty, 110, 40, 0, 0, 6.29); ctx.fill();
      /* Gobos : sous la main, la tache devient un motif de petits ronds qui tourne sur le parquet. */
      /* La lyre suit son faisceau. */
      const l = lyres[i];
      if (l) l.style.setProperty('--r', `${(90 - (ang * 180) / Math.PI).toFixed(1)}deg`);
    });
    /* Poursuite : un cercle de lumière sous la main, et une trace qui s'efface dans la brume en 1,4 s. */
    while (trace.length && t - trace[0].t > 1.4) trace.shift();
    trace.forEach((p, n) => {
      const vie = 1 - (t - p.t) / 1.4, R = 190;
      const gp = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R);
      gp.addColorStop(0, `rgba(255,236,214,${0.12 * vie * A})`); gp.addColorStop(0.55, `rgba(220,200,255,${0.05 * vie * A})`); gp.addColorStop(1, 'rgba(220,200,255,0)');
      ctx.fillStyle = gp; ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, 6.29); ctx.fill();
    });
    /* Jets de CO2 depuis le devant de la scène quand EFFETS est au maximum. */
    if (regie.fumee >= 1) { regie.co2 = (regie.co2 ?? 4.2) + dt; if (regie.co2 > 4.6) regie.co2 = 0; } else regie.co2 = null;
    if (regie.co2 != null && regie.co2 < 1.5) {
      const q = regie.co2 / 1.5, haut = Math.sin(Math.min(1, q * 1.6) * 1.571), alpha = q < 0.3 ? q / 0.3 : 1 - (q - 0.3) / 0.7;
      [0.47, 0.77].forEach((x) => {
        const b = proj(x, 0.64), h = 0.42 * (proj(0, 1).y - proj(0, 0).y) * haut, l = 26 + 60 * q;
        const gj = ctx.createLinearGradient(b.x, b.y, b.x, b.y - h);
        gj.addColorStop(0, `rgba(255,255,255,${0.75 * alpha * A})`); gj.addColorStop(0.6, `rgba(230,240,255,${0.35 * alpha * A})`); gj.addColorStop(1, 'rgba(230,240,255,0)');
        ctx.fillStyle = gj; ctx.beginPath(); ctx.moveTo(b.x - 8, b.y); ctx.quadraticCurveTo(b.x - l, b.y - h * 0.6, b.x - l * 0.7, b.y - h); ctx.lineTo(b.x + l * 0.7, b.y - h); ctx.quadraticCurveTo(b.x + l, b.y - h * 0.6, b.x + 8, b.y); ctx.closePath(); ctx.fill();
      });
    }
    ctx.globalCompositeOperation = 'source-over';
  }, { lourde: true });

  /* Faders : le pack conseillé suit les invités, la lumière et les effets. */
  const f = Object.fromEntries($$('[data-fader]', section).map((i) => [i.dataset.fader, i]));
  const sorties = Object.fromEntries($$('[data-sortie]', section).map((o) => [o.dataset.sortie, o]));
  const nom = $('[data-pack-nom]', section), pour = $('[data-pack-pour]', section), bouton = $('[data-ajouter]', section);
  const mariage = $('[data-mariage]', section);
  if (mariage) mariage.addEventListener('change', () => { if (regie.tween) { regie.tween.kill(); regie.tween = null; lumC = null; } regler(); });
  const plateau = $$('[data-plateau]', section);
  let lumC = null;
  const allumee = $('.regie-photo--allumee', section);
  const niveauSalle = () => (allumee ? allumee.style.setProperty('--allume', (regie.allumage * regie.salle).toFixed(3)) : null);
  regie.majSalle = niveauSalle;
  let effetsAvant = +(f.effets && f.effets.value);
  const regler = (e) => {
    if (!f.invites || !packs.length) return;
    const inv = +f.invites.value, lum = +f.lumiere.value, eff = +f.effets.value;
    let idx = inv <= 40 ? 0 : inv <= 80 ? 1 : inv <= 150 ? 2 : inv <= 220 ? 3 : 4;
    idx = Math.max(0, Math.min(4, idx + (lum === 2 ? 1 : lum === 0 ? -1 : 0)));
    /* Un mariage : le pack le plus complet, comme le conseille le site. */
    if (mariage && mariage.checked) idx = 4;
    if (lumC === null) { try { localStorage.setItem('newpears-invites', String(inv)); } catch {} }
    const p = packs[idx];
    sorties.invites.textContent = String(inv);
    [['lumiere', lum], ['effets', eff]].forEach(([k, v]) => { const l = (f[k].dataset.libelles || '').split('|'); sorties[k].textContent = l[v] || v; f[k].setAttribute('aria-valuetext', l[v] || v); });
    f.invites.setAttribute('aria-valuetext', `${inv} invités`);
    nom.textContent = p.nom;
    pour.textContent = p.pour + (eff === 2 ? ' Option : jet de CO2 pour les temps forts.' : '');
    bouton.dataset.ajouter = p.id; bouton.dataset.ajouterNom = p.nom; bouton.dataset.ajouterImage = `/assets/images/materiel/${p.image}-360.webp`;
    if (eff === 2) bouton.dataset.ajouterAussi = 'co2|Machine à effet CO2|/assets/images/materiel/machine-effet-co2-360.webp'; else delete bouton.dataset.ajouterAussi;
    delete bouton.dataset.texte;
    if (lumC === null) plateau.forEach((im) => im.classList.toggle('actif', im.dataset.plateau === p.id));
    regie.faisceaux = Math.max(1, p.faisceaux - (lum === 0 ? 1 : 0));
    regie.force = [0.55, 0.85, 1.1][lum];
    regie.fumee = [0, 0.6, 1][eff];
    const l = lumC === null ? lum : lumC;
    regie.salle = Math.min(1, (0.08 + 0.46 * l) * (0.8 + 0.2 * Math.min(1, inv / 150)));
    niveauSalle();
    majDemande();
    if (e && eff === 2 && effetsAvant !== 2) regie.co2 = 0;
    effetsAvant = eff;
  };
  Object.values(f).forEach((i) => i.addEventListener('input', (e) => { if (regie.tween) { regie.tween.kill(); regie.tween = null; lumC = null; } regler(e); }));
  /* Réglage automatique à l'arrivée : les faders montent seuls et la salle s'allume, puis tout s'arrête sur Pack Club. */
  regie.auto = () => {
    if (!gsap) return;
    const v = { inv: 10, lum: 0, eff: 0 };
    const poser = () => { f.invites.value = String(Math.round(v.inv / 10) * 10); f.lumiere.value = String(Math.round(v.lum)); f.effets.value = String(Math.round(v.eff)); lumC = v.lum; regler(); };
    poser();
    regie.tween = gsap.to(v, { inv: 150, lum: 2, eff: 1, duration: 1.9, ease: 'power2.inOut', onUpdate: poser, onComplete: () => { lumC = null; regie.tween = null; regler(); } });
  };
  regie.final = () => { if (regie.tween) regie.tween.kill(); regie.tween = null; lumC = null; f.invites.value = '150'; f.lumiere.value = '2'; f.effets.value = '1'; regler(); };
  regler();
}

/* ---------- 2. Le flight case : on tire le couvercle, le matériel en sort ---------- */
const caseJeu = { final: null };
function initCase() {
  const scene = $('[data-case]');
  if (!scene) return;
  const couvercle = $('[data-couvercle]', scene), bouton = $('[data-case-bouton]', scene), liste = $('.case-produits', scene);
  const produits = $$('.case-produit', scene);
  let p = 0, main = false, H = scene.offsetHeight;
  const poser = (v) => {
    p = Math.max(0, Math.min(1, v));
    couvercle.style.setProperty('--ouvert', p.toFixed(3));
    couvercle.style.pointerEvents = p > 0.9 ? 'none' : '';
    produits.forEach((el, i) => el.style.setProperty('--sortie', Math.max(0, Math.min(1, (p - (0.28 + i * 0.09)) / 0.26)).toFixed(3)));
    const ouvert = p > 0.6;
    liste.inert = !ouvert;
    bouton.setAttribute('aria-pressed', String(ouvert));
    bouton.textContent = ouvert ? 'Refermer le flight case' : 'Ouvrir le flight case';
  };
  const vers = (v) => gsap ? gsap.to({ x: p }, { x: v, duration: 0.7, ease: 'power3.out', onUpdate() { poser(this.targets()[0].x); } }) : poser(v);
  poser(0);
  /* Le visiteur tire le couvercle vers le haut. À l'arrivée, le couvercle se soulève un peu pour inviter au geste ;
     il ne s'ouvre seul que si personne n'y a touché au bout de 3,5 s à l'écran. */
  let attente = null;
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((en) => {
      if (main) return;
      if (en.isIntersecting) {
        if (!couvercle.dataset.invite) { couvercle.dataset.invite = '1'; couvercle.classList.add('invite'); couvercle.addEventListener('animationend', () => couvercle.classList.remove('invite'), { once: true }); }
        /* Sur téléphone, le couvercle s'ouvre dès qu'il est entier à l'écran ; sur ordinateur, après 3,5 s sans geste. */
        const tel = matchMedia('(max-width: 760px)').matches;
        if (en.intersectionRatio >= 0.95) { if (attente) clearTimeout(attente); attente = setTimeout(() => { if (!main) { main = true; vers(1); } }, tel ? 350 : 1000); }
        else if (!attente && !tel) attente = setTimeout(() => { if (!main) { main = true; vers(1); } }, 3500);
      } else if (attente) { clearTimeout(attente); attente = null; }
    }), { threshold: [0.55, 0.95] });
    io.observe(scene);
  }
  let y0 = 0, p0 = 0, glisse = false;
  couvercle.addEventListener('pointerdown', (e) => {
    main = true; if (attente) { clearTimeout(attente); attente = null; } couvercle.classList.remove('invite');
    y0 = e.clientY; p0 = p; glisse = false; H = scene.offsetHeight;
    if (e.pointerType === 'mouse' || e.pointerType === 'pen') couvercle.setPointerCapture(e.pointerId);
  });
  couvercle.addEventListener('pointermove', (e) => { if (couvercle.hasPointerCapture(e.pointerId)) { if (Math.abs(y0 - e.clientY) > 4) glisse = true; poser(p0 + (y0 - e.clientY) / (H * 0.55)); } });
  /* Au doigt, la page défile normalement : un toucher ouvre ou referme le couvercle. */
  couvercle.addEventListener('click', () => { if (!glisse) vers(p > 0.5 ? 0 : 1); });
  const lacher = (e) => { if (couvercle.hasPointerCapture && couvercle.hasPointerCapture(e.pointerId)) { couvercle.releasePointerCapture(e.pointerId); if (glisse) vers(p > 0.4 ? 1 : 0); } };
  couvercle.addEventListener('pointerup', lacher);
  couvercle.addEventListener('pointercancel', lacher);
  bouton.addEventListener('click', () => { main = true; vers(p > 0.6 ? 0 : 1); });
  caseJeu.final = () => { main = true; poser(1); };
}

/* ---------- 2 bis. La salle s'allume au fil des étapes (ancienne scène, plus utilisée sur l'accueil) ---------- */
function initDeroule() {
  const s = $('#deroule');
  if (!s || !window.ScrollTrigger) return;
  const images = $$('[data-etape-image]', s), etapes = $$('.deroule-etapes li', s), jauge = $('.deroule-jauge', s);
  const faisceaux = $$('.salle-faisceaux span', s);
  let avant = -1;
  window.ScrollTrigger.create({
    trigger: s, start: 'top top', end: 'bottom bottom',
    onUpdate: (st) => {
      const p = st.progress, n = Math.min(3, Math.floor(p * 4.0001));
      jauge.style.setProperty('--p', p.toFixed(3));
      faisceaux.forEach((f, i) => { f.style.opacity = n === 0 ? '0' : n === 1 ? (i === 1 ? '.7' : '0') : n === 2 ? (i % 2 ? '.75' : '.25') : '.85'; });
      if (n !== avant) { etapes.forEach((li, i) => { li.classList.toggle('actif', i === n); li.classList.toggle('passe', i < n); }); images.forEach((im, i) => im.classList.toggle('actif', i === n)); avant = n; }
    },
  });
}

/* ---------- 4. Le matériel s'allume en entrant ---------- */
function initRack() {
  const items = $$('.rack-item');
  if (!items.length) return;
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    const i = items.indexOf(e.target);
    setTimeout(() => e.target.classList.add('allume'), 120 * (i % 6));
    io.unobserve(e.target);
  }), { rootMargin: '0px 0px -20% 0px' });
  items.forEach((i) => io.observe(i));
}

/* ---------- 5. Styles en matrice LED : les rangées filent, celle du milieu s'allume ---------- */
function initLed() {
  const zone = $('.dj-led');
  if (!zone || !window.ScrollTrigger) return;
  const rangees = $$('.led-rangee', zone);
  rangees.forEach((r) => {
    const sens = +r.dataset.sens || 1;
    gsap.fromTo(r, { xPercent: sens > 0 ? 0 : -22 }, { xPercent: sens > 0 ? -22 : 0, ease: 'none', scrollTrigger: { trigger: zone, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
    window.ScrollTrigger.create({ trigger: r, start: 'top 72%', end: 'bottom 28%', toggleClass: { targets: r, className: 'allumee' } });
  });
}

/* ---------- 6. Événements : la lumière de la section suit l'événement ---------- */
function initEvts() {
  const s = $('#evenements.evts');
  if (!s) return;
  const items = $$('[data-evt]', s), visuels = $$('[data-evt-visuel]', s);
  const choisir = (li) => {
    items.forEach((x) => x.classList.toggle('actif', x === li));
    visuels.forEach((v) => v.classList.toggle('actif', v.dataset.evtVisuel === li.dataset.evt));
    s.style.setProperty('--teinte', li.style.getPropertyValue('--teinte'));
  };
  items.forEach((li) => { li.addEventListener('pointerenter', () => choisir(li)); li.addEventListener('focusin', () => choisir(li)); });
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) choisir(e.target); }), { rootMargin: '-48% 0px -48% 0px' });
  items.forEach((li) => io.observe(li));
}

/* ---------- Intro ---------- */
function introPartieAccueil(tl, debut) {
  if (!$('.regie-ligne')) return;
  /* Les lignes du titre partent sous leur masque dès la création de la timeline. */
  tl.fromTo('.regie .sur', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, debut)
    .fromTo('.regie-ligne', { yPercent: 105, opacity: 1 }, { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out' }, debut)
    .fromTo('.regie-intro, .regie-actions, .regie-info, .regie-preuve', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 }, debut + 0.2)
    .fromTo('.console', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.6 }, debut + 0.25)
    .to(regie, { allumage: 1, duration: 0.8, ease: 'power2.out', onUpdate: () => regie.majSalle && regie.majSalle() }, debut)
    .call(() => regie.auto && regie.auto(), null, debut);
}
function etatFinalPages() {
  if (!gsap) return;
  gsap.set('.regie .sur, .regie-ligne, .regie-intro, .regie-actions, .regie-info, .regie-preuve, .console, [data-anime="gsap"]', { clearProps: 'transform,opacity' });
  regie.allumage = 1;
  if (regie.final) regie.final();
  if (regie.majSalle) regie.majSalle();
  if (caseJeu.final) caseJeu.final();
}

demarrer({
  preparer() {
    /* Titres : les lignes partent sous leur masque avant que l'intro ou le voile ne découvre la page. */
    if (gsap && /^(intro|voile)$/.test(html.dataset.arrivee || '')) gsap.set('.regie-ligne, .tete-ligne', { yPercent: 105 });
    initDemande();
    initFil();
    initRegie();
    initCase();
    initLed();
    initEvts();
    initPages();
  },
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-poire .poire-trait', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.95, ease: 'power2.inOut' }, 0.05)
      .fromTo('.ouverture-poire .poire-halo', { opacity: 0 }, { opacity: 0.4, duration: 0.4 }, 0.6)
      .fromTo('.ouverture-mot', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, 0.55)
      .fromTo('.ouverture-ligne', { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0.7)
      .to('.ouverture-mot, .ouverture-ligne', { opacity: 0, duration: 0.25 }, 1.0);
    versObjet(tl, { a: 1.05 });
    introPartieAccueil(tl, 1.55);
    introPartiePages(tl, 1.55);
    return tl;
  },
  etatFinal() { etatFinalPages(); },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });
    introPartieAccueil(tl, 0);
    introPartiePages(tl, 0);
  },
});

/* ---------- Pages intérieures (location, DJ, événements, contact) ---------- */
function introPartiePages(tl, debut) {
  if (!$('.tete-ligne')) return;
  tl.fromTo('.tete-ligne', { yPercent: 105, opacity: 1 }, { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.1 }, debut)
    .fromTo('.tete [data-anime="gsap"]:not(.tete-ligne)', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.07 }, debut + 0.2);
}
function initPages() {
  initCatalogue();
  initFlightCase();
  initPlaylist();
  initIndexEvts();
  initDevis();
  initTetes();
}
function initTetes() {}

/* Location : onglets des packs (clavier compris). */
function initPacks() {
  const onglets = $$('[data-pack-onglet]');
  if (!onglets.length) return;
  const choisir = (b, focus) => {
    onglets.forEach((o) => { const oui = o === b; o.setAttribute('aria-selected', String(oui)); o.tabIndex = oui ? 0 : -1; });
    $$('.pack-fiche').forEach((f) => { const oui = f.id === `pack-${b.dataset.packOnglet}`; f.hidden = !oui; f.classList.toggle('actif', oui); if (oui) { f.classList.remove('entre'); void f.offsetWidth; f.classList.add('entre'); } });
    if (focus) b.focus();
  };
  const scene = $('.packs-scene');
  if (scene && window.ScrollTrigger) gsap.fromTo(scene, { '--decal': '40px' }, { '--decal': '-40px', ease: 'none', scrollTrigger: { trigger: scene, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
  onglets.forEach((b, i) => {
    b.addEventListener('click', () => choisir(b));
    b.addEventListener('keydown', (e) => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); choisir(onglets[(i + d + onglets.length) % onglets.length], true); }
    });
  });
}

/* Location : le flight case s'ouvre et une famille en sort à chaque pas de défilement (scène du métier). */
function initFlightCase() {
  initPacks();
  const s = $('#flight-case');
  if (!s || !window.ScrollTrigger) return;
  const familles = $$('.case-famille', s);
  let avant = -1;
  window.ScrollTrigger.create({
    trigger: s, start: 'top top', end: 'bottom bottom',
    onUpdate: (st) => {
      const n = Math.min(familles.length - 1, Math.floor(st.progress * familles.length * 0.9999));
      if (n !== avant) { familles.forEach((f, i) => f.classList.toggle('actif', i === n)); avant = n; }
    },
  });
}

/* Location : filtres (gardés dans l'adresse) et recherche sans accents ni pluriels. */
function initCatalogue() {
  const grille = $('.grille-cat');
  if (!grille) return;
  const articles = $$('.article', grille), boutons = $$('[data-filtre]'), champ = $('[data-recherche]'), vide = $('[data-catalogue-vide]');
  const norm = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/(s|x)\b/g, '');
  let famille = new URLSearchParams(location.search).get('famille') || 'tout';
  const appliquer = (pousser) => {
    const q = norm((champ && champ.value) || '').trim();
    let n = 0;
    articles.forEach((a) => {
      const ok = (famille === 'tout' || a.dataset.famille === famille) && (!q || q.split(/\s+/).every((m) => norm(a.dataset.mots).includes(m)));
      a.hidden = !ok; if (ok) n++;
    });
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === famille)));
    if (vide) vide.hidden = n > 0;
    if (pousser) { const u = new URL(location.href); if (famille === 'tout') u.searchParams.delete('famille'); else u.searchParams.set('famille', famille); history.replaceState(history.state, '', u); }
    if (window.ScrollTrigger) requestAnimationFrame(() => window.ScrollTrigger.refresh());
  };
  boutons.forEach((b) => b.addEventListener('click', () => { famille = b.dataset.filtre; appliquer(true); }));
  if (champ) champ.addEventListener('input', () => appliquer(false));
  $$('[data-filtre-lien]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault(); famille = a.dataset.filtreLien; appliquer(true);
    $('#catalogue').scrollIntoView({ behavior: 'auto', block: 'start' });
  }));
  appliquer(false);
}

/* Prestation DJ : la playlist (incontournables et titres à éviter). */
function initPlaylist() {
  const pastilles = $$('.pastille');
  if (!pastilles.length) return;
  const garder = $('[data-liste="garder"]'), eviter = $('[data-liste="eviter"]'), vide = garder.querySelector('.vide').textContent;
  const maj = () => {
    const g = pastilles.filter((p) => p.dataset.etat === 'garder').map((p) => p.dataset.style);
    const e = pastilles.filter((p) => p.dataset.etat === 'eviter').map((p) => p.dataset.style);
    const remplir = (ul, l) => { ul.replaceChildren(...(l.length ? l : [vide]).map((t) => { const li = document.createElement('li'); li.textContent = t; if (!l.length) li.className = 'vide'; return li; })); };
    remplir(garder, g); remplir(eviter, e);
    const b = $('[data-joindre-playlist]');
    b.dataset.ajouter = 'playlist';
    b.dataset.ajouterNom = `Playlist : ${g.length ? 'à jouer ' + g.join(', ') : ''}${g.length && e.length ? ' ; ' : ''}${e.length ? 'à éviter ' + e.join(', ') : ''}` || 'Playlist';
    b.dataset.ajouterImage = '/assets/images/materiel/platines-dj-360.webp';
  };
  pastilles.forEach((p) => p.addEventListener('click', () => {
    const suivant = { undefined: 'garder', '': 'garder', garder: 'eviter', eviter: '' }[p.dataset.etat];
    p.dataset.etat = suivant;
    p.setAttribute('aria-pressed', suivant ? 'true' : 'false');
    p.setAttribute('aria-label', `${p.dataset.style} : ${suivant === 'garder' ? 'à jouer' : suivant === 'eviter' ? 'à éviter' : 'sans préférence'}`);
    maj();
  }));
  maj();
}

/* Événements : l'index s'ouvre sur l'événement visé, la lumière de la section prend sa teinte. */
function initIndexEvts() {
  const s = $('.index-evts');
  if (!s) return;
  const items = $$('[data-index-evt]', s);
  const ouvrir = (li) => {
    items.forEach((x) => { x.classList.toggle('actif', x === li); x.classList.toggle('ouvert', x === li); });
    s.style.setProperty('--teinte', li.style.getPropertyValue('--teinte'));
  };
  items.forEach((li) => {
    li.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') ouvrir(li); });
    li.addEventListener('focusin', () => ouvrir(li));
    li.querySelector('.index-ligne').addEventListener('click', () => ouvrir(li));
  });
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting && tactile) ouvrir(e.target); }), { rootMargin: '-40% 0px -55% 0px' });
  items.forEach((li) => io.observe(li));
  const cible = location.hash && items.find((x) => '#' + x.id === location.hash);
  ouvrir(cible || items[0]);
}

/* Contact : demande en 4 étapes, sélection reprise de « Ma demande », récapitulatif, CO2 et tampon à l'envoi. */
function initDevis() {
  const form = $('[data-devis]');
  if (!form) return;
  const etapes = $$('[data-etape]', form), pastilles = $$('[data-pastille]', form);
  const prec = $('[data-precedent]', form), suiv = $('[data-suivant]', form), env = $('[data-envoyer]', form), prog = $('[data-progression]', form);
  let n = 1;
  const montrer = (k) => {
    n = k;
    etapes.forEach((e) => { e.hidden = +e.dataset.etape !== k; });
    pastilles.forEach((p) => { const i = +p.dataset.pastille; if (i === k) p.setAttribute('aria-current', 'step'); else p.removeAttribute('aria-current'); p.classList.toggle('fait', i < k); });
    prec.hidden = k === 1; suiv.hidden = k === 4; env.hidden = k !== 4;
    prog.textContent = `Étape ${k} sur 4`;
    if (typeof deplacer !== 'undefined' && deplacer) { const r = form.getBoundingClientRect(); if (r.top < 0 || r.top > innerHeight * 0.4) scrollTo({ top: scrollY + r.top - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 64) - 8, behavior: 'auto' }); }
    if (window.ScrollTrigger) requestAnimationFrame(() => window.ScrollTrigger.refresh());
  };
  const valide = () => {
    const champs = $$('input, select, textarea', etapes[n - 1]).filter((c) => c.required);
    let premier = null;
    champs.forEach((c) => {
      const groupe = c.type === 'radio' ? $$(`[name="${c.name}"]`, form).some((r) => r.checked) : c.type === 'checkbox' ? c.checked : !!c.value.trim();
      c.setAttribute('aria-invalid', groupe ? 'false' : 'true');
      if (!groupe && !premier) premier = c;
    });
    if (premier) {
      let p = premier.closest('.champ, .choix').querySelector('.champ-erreur');
      if (!p) { p = document.createElement('p'); p.className = 'champ-erreur'; p.setAttribute('aria-live', 'polite'); premier.closest('.champ, .choix').appendChild(p); }
      p.textContent = 'Ce champ est à remplir.'; premier.focus(); return false;
    }
    $$('.champ-erreur', etapes[n - 1]).forEach((p) => { p.textContent = ''; });
    return true;
  };
  let deplacer = false;
  suiv.addEventListener('click', () => { if (valide()) { deplacer = true; montrer(n + 1); deplacer = false; recap(); const premier = $('input, select, textarea', etapes[n - 1]); if (premier) premier.focus({ preventScroll: true }); } });
  prec.addEventListener('click', () => { deplacer = true; montrer(n - 1); deplacer = false; });
  /* Sélection et récapitulatif. */
  const ul = $('[data-selection]', form), vide = $('[data-selection-vide]', form), dl = $('[data-recap-liste]'), img = $('[data-recap-image]');
  const selection = (l) => {
    ul.replaceChildren(...l.map((x) => {
      const li = document.createElement('li');
      li.innerHTML = `<img alt="" src="${x.image || ''}"><span></span><button type="button">Retirer</button>`;
      li.querySelector('span').textContent = x.nom;
      li.querySelector('button').setAttribute('aria-label', `Retirer ${x.nom}`);
      li.querySelector('button').addEventListener('click', () => retirerDemande(x.id));
      return li;
    }));
    vide.hidden = l.length > 0;
    if (img) { img.hidden = !l.length; if (l.length && l[l.length - 1].image) img.src = l[l.length - 1].image; }
    const recapVide = $('[data-recap-vide]'); if (recapVide) recapVide.hidden = l.length > 0;
    recap();
  };
  function recap() {
    if (!dl) return;
    const v = (nom) => { const c = form.elements[nom]; if (!c) return ''; if (c.length && c[0] && c[0].type === 'radio') { const r = [...c].find((x) => x.checked); return r ? r.parentElement.textContent.trim() : ''; } return c.tagName === 'SELECT' ? (c.value ? c.selectedOptions[0].textContent : '') : c.value; };
    const l = lireDemande();
    const lignes = [['Événement', v('type')], ['Invités', v('invites')], ['Date', v('date') ? new Date(v('date')).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : ''], ['Lieu', v('lieu')], ['Souhait', v('souhait')], ['Sélection', l.length ? `${l.length} article${l.length > 1 ? 's' : ''}` : '']];
    dl.replaceChildren(...lignes.flatMap(([k, val]) => { const dt = document.createElement('dt'), dd = document.createElement('dd'); dt.textContent = k; dd.textContent = val || '—'; return [dt, dd]; }));
  }
  form.addEventListener('input', recap);
  form.addEventListener('change', recap);
  document.addEventListener('demande:maj', (e) => selection(e.detail));
  selection(lireDemande());
  /* Préremplissage depuis l'adresse (type, souhait) : le socle remplit les champs, on ouvre l'étape utile. */
  const ps = new URLSearchParams(location.search);
  if (ps.get('souhait') && !ps.get('type')) recap();
  /* Envoi : le socle vérifie les champs et affiche le message « simulé » ; on ajoute le jet et le tampon. */
  form.addEventListener('submit', () => {
    setTimeout(() => {
      if (!env.disabled) return;
      jetCO2();
      $('[data-tampon]', form).classList.add('pose');
      try { localStorage.removeItem(CLE); } catch {}
      majDemande();
    }, 30);
  });
  try { const inv = localStorage.getItem('newpears-invites'); const ch = form.elements.invites; if (inv && ch && !ch.value) ch.value = inv; } catch {}
  montrer(1);
  recap();
}
