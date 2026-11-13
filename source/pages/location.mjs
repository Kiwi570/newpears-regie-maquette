/* Location (page de catégorie) : ouverture scindée, les 5 packs, le flight case qui s'ouvre (scène du métier),
   le catalogue filtrable, les étapes, bon à savoir. */
import { html, brut } from '../../outils/gabarit.mjs';

export const page = { cle: 'location', fichier: 'location', imagePartage: 'grok/location-flight-case-1280.webp' };

export default (c) => {
  const packs = c.donnees.packs, fam = c.donnees.familles, cat = c.donnees.catalogue;
  const nomFam = Object.fromEntries(fam.map((f) => [f.id, f.nom]));
  return html`
<section class="tete tete--location" id="debut">
  <div class="tete-texte">
    <p class="sur" data-anime="gsap">${c.t('location.tete.sur')}</p>
    <h1 data-grille="typo"><span class="ligne-masque"><span class="tete-ligne">Le matériel,</span></span><span class="ligne-masque"><span class="tete-ligne"><em>livré</em> et installé</span></span></h1>
    <p class="masque-ecran-tres-bas" data-anime="gsap">${c.t('location.tete.texte')}</p>
    <p class="tete-actions" data-anime="gsap">
      <a class="bouton" href="#packs" data-action-principale>${c.t('location.packs.sur')}</a>
      ${c.lien('contact', { ancre: 'demande', classe: 'bouton bouton--contour', texte: c.t('commun.devis') })}
    </p>
    <p class="tete-info" data-info-cle data-anime="gsap">${c.t('location.tete.info')}</p>
  </div>
  <div class="tete-ecran" data-iris-centre>
    ${c.media({ nom: 'grok/salle-eteinte', alt: c.s('accueil.regie.alt'), priorite: true, classe: 'tete-media', cadrage: '50% 55%', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
    <ul class="tete-packs" aria-hidden="true">${packs.map((p) => html`<li><img src="/assets/images/materiel/${p.image}-360.webp" alt="" loading="lazy"></li>`)}</ul>
  </div>
</section>

<section class="packs" id="packs">
  <div class="conteneur">
    <p class="sur">${c.t('location.packs.sur')}</p>
    <h2 data-anime="lignes">${c.t('location.packs.titre')}</h2>
    <p class="packs-texte">${c.t('location.packs.texte')}</p>
    <div class="packs-choix" role="tablist" aria-label="${c.s('location.packs.sur')}" data-anime="cascade">
      ${packs.map((p, i) => html`<button type="button" role="tab" id="onglet-${p.id}" aria-controls="pack-${p.id}" aria-selected="${i === 3 ? 'true' : 'false'}" tabindex="${i === 3 ? '0' : '-1'}" data-pack-onglet="${p.id}"><span class="led-point" aria-hidden="true"></span>${p.nom.replace('Pack ', '')}</button>`)}
    </div>
    <div class="packs-scene">
      ${packs.map((p, i) => html`<article class="pack-fiche${i === 3 ? ' actif' : ''}" id="pack-${p.id}" role="tabpanel" aria-labelledby="onglet-${p.id}"${i === 3 ? '' : brut(' hidden')}>
        <div class="pack-visuel" data-visuel data-envol-depuis><img data-effet="packs-selecteur" src="/assets/images/materiel/${p.image}-720.webp" alt="${p.nom} : ${p.contenu.join(', ')}" loading="lazy"></div>
        <div class="pack-texte">
          <h3>${p.nom}</h3>
          <p class="pack-pour"><strong>${c.t('location.packs.pour')}</strong> ${p.pour}</p>
          <p class="pack-photo">${c.t('location.packs.photo')}</p>
          <ul>${p.contenu.map((x) => html`<li>${x}</li>`)}</ul>
          <p class="pack-prix">${c.t('location.packs.prix')}</p>
          <button type="button" class="bouton" data-ajouter="${p.id}" data-ajouter-nom="${p.nom}" data-ajouter-image="/assets/images/materiel/${p.image}-360.webp"${p.id === 'club' ? brut(' data-grille="retour"') : ''}>${c.t('commun.ajouter')}</button>
        </div>
      </article>`)}
    </div>
  </div>
</section>

<section class="case" id="flight-case" data-scene data-grille="scene">
  <div class="case-collant" data-collant>
    <div class="case-fond">${c.media({ nom: 'grok/location-flight-case', alt: c.s('location.case.alt'), classe: 'case-photo', sizes: '100vw' })}</div>
    <div class="case-texte conteneur">
      <p class="sur">${c.t('location.case.sur')}</p>
      <h2>${c.t('location.case.titre')}</h2>
    </div>
    <ol class="case-familles">
      ${fam.map((f, i) => html`<li class="case-famille${i === 0 ? ' actif' : ''}" data-famille-case="${f.id}" data-effet="flight-case">
        <img class="case-objet" src="/assets/images/materiel/${f.image}-720.webp" alt="" loading="lazy">
        <div class="case-legende"><span class="case-n">0${i + 1}</span><h3>${f.nom}</h3><p>${f.phrase}</p><p class="case-prix">${f.prix}</p>
        <a class="lien-fleche" href="?famille=${f.id}#catalogue" data-sans-transition data-filtre-lien="${f.id}">Voir la famille</a></div>
      </li>`)}
    </ol>
  </div>
</section>

<section class="catalogue" id="catalogue">
  <div class="conteneur">
    <p class="sur">${c.t('location.catalogue.sur')}</p>
    <h2 data-anime="lignes">${c.t('location.catalogue.titre')}</h2>
    <div class="catalogue-outils">
      <div class="filtres" role="group" aria-label="Familles">
        <button type="button" data-filtre="tout" aria-pressed="true">${c.t('location.catalogue.tout')}</button>
        ${fam.map((f) => html`<button type="button" data-filtre="${f.id}" aria-pressed="false">${f.nom}</button>`)}
      </div>
      <label class="recherche"><span class="visuellement-cache">${c.t('location.catalogue.chercher')}</span><input type="search" data-recherche placeholder="${c.s('location.catalogue.exemple')}"></label>
    </div>
    <ul class="grille-cat" data-anime="cascade" data-effet="catalogue-filtre" aria-label="${c.s('location.catalogue.region')}">
      ${cat.map((a) => html`<li class="article" data-famille="${a.famille}" data-mots="${(a.nom + ' ' + a.detail + ' ' + nomFam[a.famille]).toLowerCase()}">
        <div class="article-visuel" data-visuel data-envol-depuis><img src="/assets/images/catalogue/${a.image}-480.webp" alt="${a.nom}" loading="lazy" width="480" height="360"></div>
        <p class="article-famille">${nomFam[a.famille]}${a.prix ? html` · <span data-prix>${a.prix}</span>` : ''}</p>
        <h3>${a.nom}</h3>
        <p class="article-detail">${a.detail}</p>
        <button type="button" class="bouton bouton--petit bouton--contour" data-ajouter="${a.id}" data-ajouter-nom="${a.nom}" data-ajouter-image="/assets/images/catalogue/${a.image}-480.webp">${c.t('commun.ajouter')}</button>
      </li>`)}
    </ul>
    <p class="catalogue-vide" data-catalogue-vide hidden>${c.t('location.catalogue.aucun')}</p>
  </div>
</section>

<section class="etapes conteneur" id="etapes">
  <h2 data-anime="lignes">${c.t('location.etapes.titre')}</h2>
  <div class="etapes-grille">
    <ol class="etapes-liste" data-anime="cascade">${[1, 2, 3, 4].map((n) => html`<li><span class="etape-n">0${n}</span><h3>${c.t(`location.etapes.e${n}t`)}</h3><p>${c.t(`location.etapes.e${n}`)}</p></li>`)}</ol>
    ${c.media({ nom: 'grok/location-livraison', alt: c.s('location.etapes.alt'), classe: 'etapes-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="bon conteneur" id="bon-a-savoir">
  <div class="bon-tete"><h2 data-anime="lignes">${c.t('location.bon.titre')}</h2><img class="bon-visuel" src="/assets/images/materiel/machine-fumee-900w-720.webp" alt="" loading="lazy" data-visuel></div>
  <ul class="bon-liste" data-anime="cascade">
    ${c.donnees.faq.slice(0, 5).map((f) => html`<li><h3>${f.q}</h3><p>${f.r}</p></li>`)}
    <li><h3>Effets</h3><p>${c.t('location.bon.effets')}</p></li>
  </ul>
  <p class="bon-conseil">${c.t('location.bon.conseil')} ${c.lien('contact', { ancre: 'demande', params: 'souhait=aide', classe: 'lien-fleche', texte: c.t('commun.devis') })}</p>
</section>
`;
};
