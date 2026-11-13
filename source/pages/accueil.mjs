/* Accueil NEWPEARS — direction « La régie » (plan : outil d'abord).
   1. La régie : le visiteur vise avec les lyres du pont et règle trois faders qui montent le vrai pack.
   2. La salle s'allume au fil des quatre étapes de la demande (scène collante).
   3. Deux métiers. 4. Le matériel le plus demandé. 5. Côté platines (styles en matrice LED).
   6. Les événements (la lumière de la section change). 7. Chiffres. 8. Zone de 50 km. 9. Appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { carte as carteZone } from '../gabarits/carte.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/salle-allumee-1280.webp' };

const mat = (nom, alt = '', classe = '', taille = 720) => html`<img class="${classe}" src="/assets/images/materiel/${nom}-${taille}.webp" alt="${alt}" loading="lazy" decoding="async">`;


/* La salle éteinte et la salle allumée dans une seule figure : une seule mention « Illustration générée », au-dessus des deux photos. */
const texte = (v) => v[Object.getOwnPropertySymbols(v)[0]];
const salle = (c) => {
  const eteinte = texte(c.media({ nom: 'grok/salle-eteinte', alt: c.s('accueil.regie.alt'), cadrage: '100% 70%', cadrageMobile: '62% 70%', priorite: true, classe: 'regie-photo', sizes: '100vw' }));
  const allumee = texte(c.media({ nom: 'grok/salle-allumee', alt: c.s('accueil.regie.altAllumee'), cadrage: '100% 70%', cadrageMobile: '62% 70%', priorite: true, classe: 'x', sizes: '100vw' }));
  const image = allumee.slice(allumee.indexOf('<picture>'), allumee.indexOf('</picture>') + 10).replace('<picture>', '<picture class="regie-photo--allumee" data-effet="salle-allume">');
  const fin = eteinte.indexOf('</picture>') + 10;
  return brut(eteinte.slice(0, fin) + image + eteinte.slice(fin));
};

export default (c) => {
  const packs = c.donnees.packs;
  const club = packs.find((p) => p.id === 'club');
  const rack = ['enceinte', 'lyre-beam', 'laser-1000', 'fumee', 'micro'].map((id) => c.donnees.catalogue.find((x) => x.id === id));
  const familles = Object.fromEntries(c.donnees.familles.map((f) => [f.id, f.nom]));
  const evts = c.donnees.evenements.filter((e) => e.image);
  const styles = [['ELECTRO HOUSE', 'HITS ACTUELS'], ['ANNÉES 80–2000', 'RAP · RNB'], ['LATINO · AFRO', 'VARIÉTÉ FRANÇAISE']];
  return html`
<section class="regie" id="regie" data-section>
  <div class="regie-salle" data-visuel>
    ${salle(c)}
    <div class="regie-lumiere" data-regie-lumiere aria-hidden="true"><div class="regie-lumiere-photo"></div></div>
    <canvas class="regie-faisceaux" data-effet="regie-faisceaux" data-audit-ignorer aria-hidden="true"></canvas>
  </div>
  <div class="regie-texte">
    <p class="sur" data-anime="gsap">${c.t('accueil.regie.sur')}</p>
    <h1 class="regie-titre" data-grille="typo" data-iris-centre>
      <span class="ligne-masque"><span class="regie-ligne">${c.t('accueil.regie.titre1')}</span></span>
      <span class="ligne-masque"><span class="regie-ligne">${c.t('accueil.regie.titre2')} <em>${c.t('accueil.regie.titre2b')}</em></span></span>
      <span class="ligne-masque"><span class="regie-ligne">${c.t('accueil.regie.titre3')}</span></span>
    </h1>
    <p class="regie-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.regie.texte')}</p>
    <p class="regie-actions" data-anime="gsap">
      ${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.regie.action'), attrs: 'data-action-principale' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
    </p>
    <p class="regie-info" data-info-cle data-anime="gsap">${c.t('accueil.regie.info')} · ${c.t('accueil.regie.prix')}</p>
    <p class="regie-preuve" data-anime="gsap"><a href="${c.site.contact.avis}" target="_blank" rel="noopener"><span class="etoiles" aria-hidden="true">★★★★★</span> ${c.t('accueil.regie.preuve')}</a></p>
  </div>
  <div class="console" data-grille="manipuler" data-anime="gsap">
    <div class="faders">
      <label class="fader"><span class="fader-nom">${c.t('accueil.regie.invites')}</span><span class="fader-rail"><input type="range" min="10" max="300" step="10" value="150" data-fader="invites"></span><output data-sortie="invites">150</output></label>
      <label class="fader fader--lumiere"><span class="fader-nom">${c.t('accueil.regie.lumiere')}</span><span class="fader-rail"><input type="range" min="0" max="2" step="1" value="2" data-fader="lumiere" data-libelles="${c.s('accueil.regie.lumiere0')}|${c.s('accueil.regie.lumiere1')}|${c.s('accueil.regie.lumiere2')}"></span><output data-sortie="lumiere">${c.t('accueil.regie.lumiere2')}</output></label>
      <label class="fader fader--effets"><span class="fader-nom">${c.t('accueil.regie.effets')}</span><span class="fader-rail"><input type="range" min="0" max="2" step="1" value="1" data-fader="effets" data-libelles="${c.s('accueil.regie.effets0')}|${c.s('accueil.regie.effets1')}|${c.s('accueil.regie.effets2')}"></span><output data-sortie="effets">${c.t('accueil.regie.effets1')}</output></label>
    </div>
    <div class="console-ecran">
      <p class="console-conseil">${c.t('accueil.regie.conseil')}</p>
      <p class="console-pack" data-pack-nom aria-live="polite">${club.nom}</p>
      <p class="console-pour" data-pack-pour>${club.pour}</p>
      <label class="console-mariage"><input type="checkbox" data-mariage> <span class="interrupteur" aria-hidden="true"></span>${c.t('accueil.regie.mariage')}</label>
      <div class="console-vu" data-effet="console-vu" aria-hidden="true">${Array.from({ length: 14 }, (_, i) => html`<i style="--i:${i}"></i>`)}</div>
      <p class="console-consigne"><span class="consigne-souris">${c.t('accueil.regie.consigne')}</span><span class="consigne-tactile">${c.t('accueil.regie.consigneTactile')}</span></p>
    </div>
    <div class="console-fiche">
      <div class="console-photo" data-envol-depuis>${packs.map((p) => html`<img class="fiche-pack${p.id === 'club' ? ' actif' : ''}" data-plateau="${p.id}" src="/assets/images/catalogue/${p.image}-480.webp" alt="${p.nom}" width="480" height="360" decoding="async"${p.id === 'club' ? '' : brut(' loading="lazy"')}>`)}</div>
      <button type="button" class="bouton bouton--petit bouton--contour" data-ajouter="${club.id}" data-ajouter-nom="${club.nom}" data-ajouter-image="/assets/images/materiel/${club.image}-360.webp" data-grille="retour">${c.t('commun.ajouter')}</button>
      <p class="console-note">${c.t('accueil.regie.indicatif')}</p>
    </div>
  </div>
  <script type="application/json" data-packs>${brut(JSON.stringify(packs.map((p) => ({ id: p.id, nom: p.nom, pour: p.pour, image: p.image, faisceaux: p.faisceaux }))))}</script>
</section>

<section class="case-jeu" id="flight-case" data-grille="scene" data-section>
  <div class="conteneur case-tete">
    <div>
      <p class="sur">${c.t('accueil.case.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.case.titre')}</h2>
    </div>
    <p class="case-intro">${c.t('accueil.case.texte')}</p>
  </div>
  <div class="case-scene conteneur" data-case>
    ${c.media({ nom: 'grok/location-flight-case', alt: c.s('location.case.alt'), classe: 'case-fond', sizes: '(max-width: 760px) 100vw, 1240px', cadrage: '50% 60%' })}
    <ul class="case-produits">
      ${rack.map((a, i) => html`<li class="case-produit" style="--i:${i}">
        <div class="case-cadre" data-visuel data-envol-depuis><img src="/assets/images/materiel/${a.image}-360.webp" alt="" loading="lazy" decoding="async"></div>
        <h3>${a.nom}</h3>
        <p class="case-prix">${c.t('accueil.case.prix_' + (a.id === 'enceinte' ? 'enceinte' : a.famille))}</p>
        <button type="button" class="bouton bouton--petit bouton--contour" data-ajouter="${a.id}" data-ajouter-nom="${a.nom}" data-ajouter-image="/assets/images/materiel/${a.image}-360.webp">${c.t('commun.ajouter')}</button>
      </li>`)}
    </ul>
    <div class="couvercle" data-couvercle data-effet="couvercle" aria-hidden="true">
      <span class="couvercle-panneau"></span>
      <span class="corniere corniere--h"></span><span class="corniere corniere--b"></span><span class="corniere corniere--g"></span><span class="corniere corniere--d"></span>
      <span class="couvercle-coin couvercle-coin--hg"></span><span class="couvercle-coin couvercle-coin--hd"></span><span class="couvercle-coin couvercle-coin--bg"></span><span class="couvercle-coin couvercle-coin--bd"></span>
      <img class="couvercle-loquet couvercle-loquet--g" src="/assets/images/case-loquet.webp" alt="" width="180" height="240" loading="lazy" decoding="async">
      <img class="couvercle-loquet couvercle-loquet--d" src="/assets/images/case-loquet.webp" alt="" width="180" height="240" loading="lazy" decoding="async">
      <span class="couvercle-logo"><img src="/assets/images/logo-entete-480.webp" alt="" width="480" height="182" loading="lazy"></span>
      <span class="couvercle-poignee"></span>
      <span class="couvercle-consigne"><span class="consigne-souris">${c.t('accueil.case.tirez')}</span><span class="consigne-tactile">${c.t('accueil.case.touchez')}</span></span>
    </div>
    <button type="button" class="case-bouton" data-case-bouton aria-pressed="false">${c.t('accueil.case.ouvrir')}</button>
  </div>
  <ol class="conteneur frise" data-anime="cascade">
    ${[1, 2, 3, 4].map((n) => html`<li><span class="frise-n">0${n}</span><h3>${c.t(`accueil.deroule.e${n}t`)}</h3><p>${c.t(`accueil.frise.e${n}`)}</p></li>`)}
  </ol>
</section>

<section class="metiers conteneur" id="metiers">
  <p class="sur">${c.t('accueil.metiers.sur')}</p>
  <h2 data-anime="lignes">${c.t('accueil.metiers.titre')}</h2>
  <div class="metiers-grille" data-anime="cascade">
    <article class="metier metier--loc">
      <div class="metier-visuel metier-visuel--produit" data-visuel><img class="metier-produit" src="/assets/images/catalogue/pack-professionnel-900.webp" alt="" loading="lazy" width="900" height="675"><span class="metier-halo" data-effet="metier-pack" aria-hidden="true"></span></div>
      <h3>${c.t('accueil.metiers.locT')}</h3>
      <p>${c.t('accueil.metiers.loc')}</p>
      ${c.lien('location', { classe: 'lien-fleche', texte: c.t('accueil.metiers.locLien') })}
    </article>
    <article class="metier metier--dj">
      ${c.media({ nom: 'grok/accueil-cabine', alt: c.s('accueil.deroule.alt2'), classe: 'metier-photo', cadrage: '60% 50%', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
      <h3>${c.t('accueil.metiers.djT')}</h3>
      <p>${c.t('accueil.metiers.dj')}</p>
      ${c.lien('prestation-dj', { classe: 'lien-fleche', texte: c.t('accueil.metiers.djLien') })}
    </article>
  </div>
</section>

<section class="dj" id="dj">
  <div class="dj-mur">
    <div class="dj-led" data-grille="typo" aria-hidden="true" data-ruban data-audit-ignorer>
      ${styles.map((r, i) => html`<p class="led-rangee" data-effet="led-styles" data-sens="${i % 2 ? -1 : 1}">${[...r, ...r, ...r].map((m) => html`<span>${m}</span>`)}</p>`)}
    </div>
  </div>
  <div class="conteneur dj-grille">
    ${c.media({ nom: 'duo-platines', alt: c.s('accueil.metiers.altDuo'), classe: 'dj-photo', cadrage: '50% 50%', sizes: '(max-width: 760px) 100vw, 46vw', legende: c.s('accueil.dj.legende'), attrs: 'data-anime' })}
    <div class="dj-texte">
      <p class="sur">${c.t('accueil.dj.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.dj.titre')}</h2>
      <p data-anime>${c.t('accueil.dj.texte')}</p>
      <p class="dj-styles-titre">${c.t('accueil.dj.styles')}</p>
      <ul class="dj-styles" data-anime="cascade">${['Electro House', 'Généraliste', 'Années 80–2000', 'Hits actuels', 'Rap / RnB', 'Latino / Afro', 'Variété française'].map((x) => html`<li>${x}</li>`)}</ul>
      <p class="dj-actions">
        ${c.lien('prestation-dj', { classe: 'bouton', texte: c.t('accueil.dj.lien') })}
        ${c.lien('contact', { ancre: 'demande', params: 'souhait=dj', classe: 'bouton bouton--contour', texte: c.t('accueil.dj.date') })}
      </p>
    </div>
  </div>
</section>

<section class="evts" id="evenements" data-effet="evts-ambiance">
  <div class="conteneur" data-grok>
    <p class="sur">${c.t('accueil.evenements.sur')}</p>
    <h2 data-anime="lignes">${c.t('accueil.evenements.titre')}</h2>
    <ul class="evts-liste">
      ${evts.map((e, i) => html`<li${i === 0 ? brut(' class="actif"') : ''} data-evt="${e.id}" style="--teinte:${e.teinte}">${c.lien('evenements', { ancre: e.id, classe: 'evt-lien', texte: html`<span class="evt-vignette" aria-hidden="true"><img src="/assets/images/${e.image}-640.webp" alt="" loading="lazy" width="640" height="427"></span><span class="evt-nom">${e.nom}</span><span class="evt-formule">${e.formule}</span>` })}</li>`)}
    </ul>
    <p class="evts-pied">${c.lien('evenements', { classe: 'lien-fleche', texte: c.t('accueil.evenements.tout') })}<span class="mention-ia mention-ia--liste">${c.t('accueil.evenements.mentionVignettes')}</span></p>
  </div>
</section>

<section class="zone" id="zone">
  <div class="conteneur zone-grille">
    <div>
      <p class="sur">${c.t('accueil.zone.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.zone.titre')}</h2>
      <p data-anime>${c.t('accueil.zone.texte')}</p>
      <ul class="chiffres-liste chiffres-liste--led" data-anime="cascade" aria-label="${c.s('accueil.chiffres.titre')}">
        ${c.donnees.chiffres.map((x) => html`<li><strong class="chiffre">${x.prefixe}<span data-compteur="${x.valeur}">${x.valeur}</span>${x.suffixe}</strong><span>${c.t('accueil.chiffres.' + x.cle)}</span></li>`)}
      </ul>
      <p><a class="lien-fleche" href="${c.site.contact.avis}" target="_blank" rel="noopener">${c.t('commun.voirAvis')}</a></p>
    </div>
    <div class="zone-carte" data-visuel data-fx="trace">${carteZone(c, c.donnees.villes, c.s('accueil.zone.titre'))}</div>
  </div>
</section>

<section class="fin" id="fin">
  <div class="fin-balayage" data-boucle-css data-visuel aria-hidden="true"><span data-effet="fin-balayage"></span><span></span></div>
  <div class="conteneur fin-texte">
    <h2 data-anime="lignes">${c.t('accueil.fin.titre')}</h2>
    <p data-anime>${c.t('accueil.fin.texte')}</p>
    <p class="fin-actions">
      ${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: c.t('commun.devis') })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      <a class="bouton bouton--contour" href="${c.site.contact.whatsapp}" target="_blank" rel="noopener">${c.t('commun.whatsapp')}</a>
    </p>
  </div>
</section>
`;
};
