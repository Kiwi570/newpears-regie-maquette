/* NEWPEARS — effets propres au client (direction « La régie »). Le socle gère l'ouverture, les transitions,
   l'en-tête, le menu, les boucles, les mesures et la bibliothèque d'effets. Chaque effet propre porte data-effet. */
import { demarrer, boucle, versObjet, quand } from './socle/index.js?v=3';

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
  /* Fil sobre : une ligne de lumière sous l'en-tête suit la lecture de la page. */
  const fil = $('.fil-progression span');
  if (!fil) return;
  let rp = null;
  const maj = () => { rp = null; const h = document.documentElement.scrollHeight - innerHeight; fil.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h).toFixed(4) : 0})`; };
  addEventListener('scroll', () => { if (!rp) rp = requestAnimationFrame(maj); }, { passive: true });
  addEventListener('resize', maj);
  maj();
}

/* ---------- 1. La régie : faisceaux au pointeur, faders, pack conseillé ---------- */
function initRegie() {
  const section = $('#regie');
  if (!section) return;
  /* Un seul faisceau, accroché en haut : il suit la souris (ou le doigt), éclaire le titre au passage,
     et revient se poser sur le pack conseillé quand la main s'arrête. */
  const faisceau = $('[data-regie-faisceau]', section), halo = $('[data-regie-halo]', section), pack = $('.regie-pack', section);
  let ox = 0, oy = 0, cx = 0, cy = 0, vx = 0, vy = 0, main = -10;
  const mesurer = () => {
    const r = section.getBoundingClientRect();
    ox = r.width * (innerWidth < 761 ? 0.72 : 0.7); oy = -20;
    const q = pack.getBoundingClientRect();
    cx = q.left - r.left + q.width / 2; cy = q.top - r.top + q.height * 0.55;
    if (main < 0) { vx = cx; vy = cy; }
  };
  mesurer();
  addEventListener('resize', mesurer);
  quand('pret', mesurer);
  let tx = 0, ty = 0;
  const viser = (e) => { const r = section.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top; main = performance.now(); };
  section.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' || e.buttons) viser(e); }, { passive: true });
  section.addEventListener('pointerdown', (e) => { if (!e.target.closest('a, button, input, label')) viser(e); }, { passive: true });
  boucle(faisceau, (dt, t) => {
    const libre = performance.now() - main > 1800;
    const bx = libre ? cx + Math.sin(t * 0.6) * 26 : tx, by = libre ? cy : ty;
    const k = 1 - Math.pow(0.003, dt);
    vx += (bx - vx) * k; vy += (by - vy) * k;
    const dx = vx - ox, dy = vy - oy, L = Math.hypot(dx, dy) * 1.25, a = Math.atan2(dx, dy);
    faisceau.style.transform = `translate3d(${ox.toFixed(1)}px,${oy}px,0) rotate(${(-a * 180 / Math.PI).toFixed(2)}deg)`;
    faisceau.style.height = `${L.toFixed(0)}px`;
    halo.style.transform = `translate3d(${(vx - 260).toFixed(1)}px,${(vy - 200).toFixed(1)}px,0)`;
  });

  /* Le conseil : un curseur « invités » et l'interrupteur Mariage donnent le pack, qui s'ajoute à la demande. */
  const packs = JSON.parse(($('[data-packs]', section) || {}).textContent || '[]');
  const curseur = $('[data-fader="invites"]', section), sortie = $('[data-sortie="invites"]', section);
  const nom = $('[data-pack-nom]', section), bouton = $('[data-ajouter]', section), mariage = $('[data-mariage]', section);
  const plateau = $$('[data-plateau]', section);
  const regler = () => {
    if (!curseur || !packs.length) return;
    const inv = +curseur.value;
    let idx = inv <= 40 ? 0 : inv <= 80 ? 1 : inv <= 120 ? 2 : inv <= 200 ? 3 : 4;
    if (mariage && mariage.checked) idx = 4;
    const p = packs[idx];
    sortie.textContent = String(inv);
    curseur.setAttribute('aria-valuetext', `${inv} invités`);
    nom.textContent = p.nom;
    bouton.dataset.ajouter = p.id; bouton.dataset.ajouterNom = p.nom; bouton.dataset.ajouterImage = `/assets/images/materiel/${p.image}-360.webp`;
    delete bouton.dataset.texte;
    plateau.forEach((im) => { const oui = im.dataset.plateau === p.id; im.classList.toggle('actif', oui); im.alt = oui ? p.nom : ''; });
    try { localStorage.setItem('newpears-invites', String(inv)); } catch {}
    majDemande();
  };
  if (curseur) curseur.addEventListener('input', regler);
  if (mariage) mariage.addEventListener('change', regler);
  regie.final = regler;
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
    .fromTo('.conseil, .regie-scene', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, debut + 0.25);
}
function etatFinalPages() {
  if (!gsap) return;
  gsap.set('.regie .sur, .regie-ligne, .regie-intro, .regie-actions, .regie-info, .regie-preuve, .conseil, .regie-scene, [data-anime="gsap"]', { clearProps: 'transform,opacity' });
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
function initTetes() {
  initRackPacks();
  initControleur();
  initAmbiances();
  initPlan();
}

/* ---------- v2 · Location : la poursuite éclaire un pack du rack ---------- */
function initRackPacks() {
  const rack = $('[data-rack]');
  if (!rack) return;
  const boutons = $$('[data-rack-pack]', rack), spot = $('[data-rack-poursuite]', rack);
  const infos = JSON.parse(($('[data-rack-packs]', rack) || {}).textContent || '[]');
  const nom = $('[data-rack-nom]', rack), pour = $('[data-rack-pour]', rack), lien = $('[data-rack-lien]', rack);
  let actif = boutons.findIndex((b) => b.classList.contains('actif')), x = 0, cible = 0, main = 0, tenu = false;
  const centre = (b) => { const r = rack.getBoundingClientRect(), q = b.getBoundingClientRect(); return q.left - r.left + q.width / 2; };
  const allumer = (i) => {
    if (i === actif || i < 0) return;
    actif = i;
    boutons.forEach((b, k) => { b.classList.toggle('actif', k === i); b.setAttribute('aria-pressed', String(k === i)); });
    const p = infos[i]; if (!p) return;
    nom.textContent = p.nom; pour.textContent = p.pour; lien.dataset.pack = p.id;
  };
  const viser = () => { cible = centre(boutons[actif]); };
  viser(); x = cible;
  addEventListener('resize', viser);
  /* Sans geste, la poursuite passe d'un pack à l'autre ; la souris la prend, un toucher ou un clic la pose. */
  let dernier = 0;
  rack.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse' || tenu) return;
    main = performance.now();
    const r = rack.getBoundingClientRect(); cible = e.clientX - r.left;
    let meilleur = 0, d = Infinity; boutons.forEach((b, k) => { const dd = Math.abs(centre(b) - cible); if (dd < d) { d = dd; meilleur = k; } });
    allumer(meilleur);
  }, { passive: true });
  rack.addEventListener('pointerleave', () => { if (!tenu) viser(); });
  boutons.forEach((b, k) => {
    b.addEventListener('click', () => { tenu = true; main = performance.now(); allumer(k); viser(); setTimeout(() => { tenu = false; }, 4000); });
    b.addEventListener('focus', () => { main = performance.now(); allumer(k); viser(); });
  });
  if (lien) lien.addEventListener('click', () => { const o = $(`[data-pack-onglet="${lien.dataset.pack || infos[actif].id}"]`); if (o) o.click(); });
  boucle(spot, (dt, t) => {
    const libre = performance.now() - main > 2600;
    if (libre && t - dernier > 2.4) { dernier = t; allumer((actif + 1) % boutons.length); viser(); }
    x += (cible - x) * (1 - Math.pow(0.004, dt));
    spot.style.transform = `translate3d(${(x - spot.offsetWidth / 2).toFixed(1)}px,0,0)`;
  });
}

/* ---------- v2 · Prestation DJ : les deux jogs du contrôleur tournent ---------- */
function initControleur() {
  const ctl = $('[data-controleur]');
  if (!ctl) return;
  const jogs = $$('[data-jog]', ctl).map((el, i) => ({ el, a: i * 40, v: i ? -0.55 : 0.55, saisi: false, prec: 0 }));
  let vitesseDefil = 0, yPrec = scrollY;
  addEventListener('scroll', () => { vitesseDefil += (scrollY - yPrec) * 0.6; yPrec = scrollY; }, { passive: true });
  const angle = (el, e) => { const r = el.getBoundingClientRect(); return (Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180) / Math.PI; };
  jogs.forEach((j) => {
    j.el.addEventListener('pointerdown', (e) => { j.saisi = true; j.prec = angle(j.el, e); j.el.setPointerCapture(e.pointerId); ctl.classList.add('scratch'); });
    j.el.addEventListener('pointermove', (e) => { if (!j.saisi) return; const a = angle(j.el, e); let d = a - j.prec; if (d > 180) d -= 360; if (d < -180) d += 360; j.a += d; j.v = d * 6; j.prec = a; });
    const lacher = () => { j.saisi = false; ctl.classList.remove('scratch'); };
    j.el.addEventListener('pointerup', lacher); j.el.addEventListener('pointercancel', lacher);
  });
  /* Au repos, les plateaux tournent doucement (33 tours) ; le défilement les entraîne, la main les scratche. */
  boucle(ctl, (dt) => {
    vitesseDefil *= Math.pow(0.05, dt);
    jogs.forEach((j, i) => {
      if (!j.saisi) { const base = (i ? -1 : 1) * 70; j.v += (base - j.v) * (1 - Math.pow(0.2, dt)); j.a += (j.v + (i ? -1 : 1) * vitesseDefil) * dt; }
      j.el.style.setProperty('--a', `${(j.a % 360).toFixed(1)}deg`);
    });
  });
}

/* ---------- v2 · Événements : la salle prend la couleur de l'événement ---------- */
function initAmbiances() {
  const tete = $('[data-ambiances]');
  if (!tete) return;
  const liens = $$('[data-ambiance]', tete), actuel = $('[data-ambiance-actuel]', tete);
  let i = 0, main = 0;
  const choisir = (k) => {
    i = k; const a = liens[k];
    liens.forEach((l) => l.classList.toggle('actif', l === a));
    tete.style.setProperty('--teinte', a.style.getPropertyValue('--t'));
    if (actuel) actuel.textContent = a.textContent;
  };
  liens.forEach((l, k) => { l.addEventListener('pointerenter', () => { main = performance.now(); choisir(k); }); l.addEventListener('focus', () => { main = performance.now(); choisir(k); }); });
  /* Sans geste, les ambiances défilent seules, une toutes les 1,6 s. */
  let dernier = 0;
  boucle(tete, (dt, t) => { if (performance.now() - main > 3000 && t - dernier > 2.4) { dernier = t; choisir((i + 1) % liens.length); } });
}

/* ---------- v2 · Contact : le plan de salle se dessine et suit le nombre d'invités ---------- */
function initPlan() {
  const plan = $('[data-plan]');
  if (!plan) return;
  const svg = $('svg', plan), groupe = $('[data-plan-tables]', plan), sortie = $('[data-plan-invites]', plan);
  const champ = document.getElementById('invites');
  const NS = 'http://www.w3.org/2000/svg';
  /* Emplacements des tables rondes autour de la piste (de la plus proche à la plus lointaine). */
  const places = [];
  for (let r = 0; r < 4; r++) {
    const g = 168 - r * 46, d = 472 + r * 46;
    for (let y = 168; y <= 380; y += 52) { places.push([g, y]); places.push([d, y]); }
  }
  for (let x = 236; x <= 404; x += 56) places.push([x, 372]);
  for (let x = 236; x <= 404; x += 56) places.push([x, 410]);
  const tri = places.map((p) => ({ p, d: Math.hypot(p[0] - 320, p[1] - 235) })).sort((a, b) => a.d - b.d).map((o) => o.p);
  let n = 0;
  const regler = (inv, depuisChamp) => {
    inv = Math.max(10, Math.min(300, Math.round(inv / 10) * 10 || 120));
    const voulu = Math.min(tri.length, Math.ceil(inv / 10));
    while (n < voulu) { const [x, y] = tri[n]; const c = document.createElementNS(NS, 'circle'); c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 15); c.classList.add('nouvelle'); groupe.appendChild(c); n++; }
    while (n > voulu) { groupe.lastChild.remove(); n--; }
    sortie.textContent = `${inv} invités`;
    plan.dataset.invites = String(inv);
    if (champ && !depuisChamp) { champ.value = String(inv); champ.dispatchEvent(new Event('input', { bubbles: true })); }
    try { localStorage.setItem('newpears-invites', String(inv)); } catch {}
  };
  let depart = 120;
  try { depart = +localStorage.getItem('newpears-invites') || 120; } catch {}
  regler(depart, true);
  $$('[data-plan-pas]', plan).forEach((b) => b.addEventListener('click', () => regler((+plan.dataset.invites || 120) + +b.dataset.planPas)));
  if (champ) champ.addEventListener('input', (e) => { if (e.isTrusted && champ.value) regler(+champ.value, true); });
  /* Le plan se trace une fois à l'arrivée. */
  $$('.plan-mur, .plan-piste, .plan-pont, .plan-cabine, .plan-enceinte', svg).forEach((el) => { try { el.style.setProperty('--l', Math.ceil(el.getTotalLength())); } catch {} el.classList.add('plan-trace'); });
  quand('pret', () => requestAnimationFrame(() => plan.classList.add('trace')));
}

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
