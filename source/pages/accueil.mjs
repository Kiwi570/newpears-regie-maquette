/* Accueil NEWPEARS — direction « La régie » (plan : outil d'abord).
   1. La régie : le visiteur vise avec les lyres du pont et règle trois faders qui montent le vrai pack.
   2. La salle s'allume au fil des quatre étapes de la demande (scène collante).
   3. Deux métiers. 4. Le matériel le plus demandé. 5. Côté platines (styles en matrice LED).
   6. Les événements (la lumière de la section change). 7. Chiffres. 8. Zone de 50 km. 9. Appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { carte as carteZone } from '../gabarits/carte.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/salle-allumee-1280.webp' };

const mat = (nom, alt = '', classe = '', taille = 720) => html`<img class="${classe}" src="/assets/images/materiel/${nom}-${taille}.webp" alt="${alt}" loading="lazy" decoding="async">`;


export default (c) => {
  const packs = c.donnees.packs;
  const club = packs.find((p) => p.id === 'club');
  const rack = ['enceinte', 'lyre-beam', 'laser-1000', 'fumee', 'micro'].map((id) => c.donnees.catalogue.find((x) => x.id === id));
  const familles = Object.fromEntries(c.donnees.familles.map((f) => [f.id, f.nom]));
  const evts = c.donnees.evenements.filter((e) => e.image);
  const styles = [['ELECTRO HOUSE', 'HITS ACTUELS'], ['ANNÉES 80–2000', 'RAP · RNB'], ['LATINO · AFRO', 'VARIÉTÉ FRANÇAISE']];
  return html`
<section class="regie regie--sobre" id="regie" data-section>
  <div class="regie-faisceau" data-regie-faisceau data-effet="regie-faisceau" aria-hidden="true"><span class="regie-cone"></span></div>
  <span class="regie-halo" data-regie-halo aria-hidden="true"></span>
  <div class="regie-texte">
    <p class="sur" data-anime="gsap">${c.t('accueil.regie.sur')}</p>
    <h1 class="regie-titre" data-grille="typo" data-iris-centre>
      <span class="ligne-masque"><span class="regie-ligne">${c.t('accueil.regie.titre1')}</span></span>
      <span class="ligne-masque"><span class="regie-ligne">${c.t('accueil.regie.titre2')} <em>${c.t('accueil.regie.titre2b')}</em></span></span>
      <span class="ligne-masque"><span class="regie-ligne">${c.t('accueil.regie.titre3')}</span></span>
    </h1>
    <p class="regie-intro" data-anime="gsap">${c.t('accueil.regie.texte')}</p>
    <p class="regie-actions" data-anime="gsap">
      ${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.regie.action'), attrs: 'data-action-principale' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
    </p>
    <p class="regie-info" data-info-cle data-anime="gsap">${c.t('accueil.regie.info')} · ${c.t('accueil.regie.prix')}</p>
    <p class="regie-preuve" data-anime="gsap"><a href="${c.site.contact.avis}" target="_blank" rel="noopener"><span class="etoiles" aria-hidden="true">★★★★★</span> ${c.t('accueil.regie.preuve')}</a></p>
  </div>
  <div class="regie-scene" data-visuel>
    <div class="regie-pack" data-envol-depuis>${packs.map((p) => html`<img class="fiche-pack${p.id === 'club' ? ' actif' : ''}" data-plateau="${p.id}" src="/assets/images/materiel/${p.image}-720.webp" alt="${p.id === 'club' ? p.nom : ''}" width="720" height="640" decoding="async"${p.id === 'club' ? brut(' fetchpriority="high"') : brut(' loading="lazy"')}>`)}</div>
    <span class="regie-sol" aria-hidden="true"></span>
  </div>
  <div class="conseil" data-grille="manipuler" data-anime="gsap">
    <label class="conseil-invites"><span class="conseil-libelle">${c.t('accueil.regie.pour')}</span><input type="range" min="10" max="300" step="10" value="150" data-fader="invites" aria-label="${c.s('accueil.regie.invites')}"><output data-sortie="invites">150</output><span class="conseil-unite">${c.t('accueil.regie.invitesUnite')}</span></label>
    <p class="conseil-pack"><span class="conseil-libelle">${c.t('accueil.regie.conseilCourt')}</span> <strong data-pack-nom aria-live="polite">${club.nom}</strong></p>
    <label class="console-mariage"><input type="checkbox" class="interrupteur-case" data-mariage>${c.t('accueil.regie.mariage')}</label>
    <button type="button" class="bouton bouton--petit bouton--contour" data-ajouter="${club.id}" data-ajouter-nom="${club.nom}" data-ajouter-image="/assets/images/materiel/${club.image}-360.webp" data-grille="retour">${c.t('commun.ajouter')}</button>
  </div>
  <script type="application/json" data-packs>${brut(JSON.stringify(packs.map((p) => ({ id: p.id, nom: p.nom, pour: p.pour, image: p.image }))))}</script>
</section>

<section class="clair case-jeu" id="flight-case" data-grille="scene" data-section>
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
      <span class="couvercle-logo"><img src="/assets/images/logo-entete-clair-480.webp" alt="" width="480" height="182" loading="lazy"></span>
      <span class="couvercle-poignee"></span>
      
    </div>
  </div>
  <ol class="conteneur frise" data-anime="cascade">
    ${[1, 2, 3, 4].map((n) => html`<li><span class="frise-n">0${n}</span><h3>${c.t(`accueil.deroule.e${n}t`)}</h3><p>${c.t(`accueil.frise.e${n}`)}</p></li>`)}
  </ol>
</section>

<section class="clair metiers conteneur" id="metiers">
  <p class="sur">${c.t('accueil.metiers.sur')}</p>
  <h2 data-anime="lignes">${c.t('accueil.metiers.titre')}</h2>
  <div class="metiers-grille" data-anime="cascade">
    <article class="metier metier--loc">
      <div class="metier-visuel metier-visuel--produit" data-visuel><img class="metier-produit" src="/assets/images/catalogue/pack-professionnel-900.webp" alt="" loading="lazy" width="900" height="675"></div>
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

<section class="clair dj" id="dj">
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

<section class="clair evts" id="evenements" data-effet="evts-ambiance">
  <div class="conteneur" data-grok>
    <p class="sur">${c.t('accueil.evenements.sur')}</p>
    <h2 data-anime="lignes">${c.t('accueil.evenements.titre')}</h2>
    <ul class="evts-liste">
      ${evts.map((e, i) => html`<li${i === 0 ? brut(' class="actif"') : ''} data-evt="${e.id}" style="--teinte:${e.teinte}">${c.lien('evenements', { ancre: e.id, classe: 'evt-lien', texte: html`<span class="evt-vignette" aria-hidden="true"><img src="/assets/images/${e.image}-640.webp" alt="" loading="lazy" width="640" height="427"></span><span class="evt-nom">${e.nom}</span><span class="evt-formule">${e.formule}</span>` })}</li>`)}
    </ul>
    <p class="evts-pied">${c.lien('evenements', { classe: 'lien-fleche', texte: c.t('accueil.evenements.tout') })}<span class="mention-ia mention-ia--liste">${c.t('accueil.evenements.mentionVignettes')}</span></p>
  </div>
</section>

<section class="clair zone" id="zone">
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
  <div class="fin-balayage" data-visuel aria-hidden="true"><span></span><span></span></div>
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
