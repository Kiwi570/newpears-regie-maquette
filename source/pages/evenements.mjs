/* Événements (plan index) : grand titre puis bandeau, l'index des 11 événements (image au survol ou au toucher),
   les deux formules, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

export const page = { cle: 'evenements', fichier: 'evenements', imagePartage: 'grok/salle-allumee-1280.webp' };

/* Événements sans image : le matériel que NEWPEARS y apporte (vraies photos du client), sur la couleur de l'événement. */
const OBJETS = { famille: 'micro-sans-fil', festival: 'lyre-beam-100w', associations: 'enceinte-amplifiee', mairies: 'videoprojecteur-4-000-lumens', autre: 'machine-fumee' };

export default (c) => {
  const evts = c.donnees.evenements;
  return html`
<section class="tete tete--evts" id="debut">
  <div class="tete-texte conteneur">
    <p class="sur" data-anime="gsap">${c.t('evenements.tete.sur')}</p>
    <h1 data-grille="typo"><span class="ligne-masque"><span class="tete-ligne">Chaque événement</span></span><span class="ligne-masque"><span class="tete-ligne">a son <em>ambiance</em></span></span></h1>
    <div class="tete-bas" data-anime="gsap">
      <p class="masque-ecran-tres-bas">${c.t('evenements.tete.texte')}</p>
      <p class="tete-actions"><a class="bouton" href="#index" data-action-principale>${c.t('evenements.index.sur')}</a><span class="tete-info" data-info-cle>${c.t('evenements.tete.info')}</span></p>
    </div>
  </div>
  <div class="tete-bandeau tete-bandeau--large" data-iris-centre>
    ${c.media({ nom: 'grok/salle-allumee', alt: c.s('accueil.regie.altAllumee'), priorite: true, classe: 'tete-media', cadrage: '50% 62%', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="16"' })}
  </div>
</section>

<section class="index-evts" id="index" data-effet="index-ambiance">
  <div class="conteneur">
    <p class="sur">${c.t('evenements.index.sur')}</p>
    <h2 data-anime="lignes">${c.t('evenements.index.titre')}</h2>
    <ol class="index-liste" aria-label="${c.s('evenements.index.region')}">
      ${evts.map((e, i) => html`<li class="index-item" id="${e.id}" style="--teinte:${e.teinte}" data-index-evt>
        <div class="index-ligne"><span class="index-n">${String(i + 1).padStart(2, '0')}</span><h3>${e.nom}</h3></div>
        <div class="index-detail">
          ${e.image ? c.media({ nom: e.image, alt: e.nom, classe: 'index-media', sizes: '(max-width: 760px) 100vw, 30vw' }) : html`<div class="index-media index-media--led index-media--objet" data-visuel aria-hidden="true"><img src="/assets/images/materiel/${OBJETS[e.id] || 'pack-club'}-360.webp" alt="" width="360" height="360" loading="lazy" decoding="async"><span>${e.nom}</span></div>`}
          <div><p>${e.phrase}</p><p class="index-formule">${c.t('evenements.index.formule')} <strong>${e.formule}</strong></p>
          <p class="index-actions">${c.lien('contact', { ancre: 'demande', params: `type=${e.id}`, classe: 'lien-fleche', texte: c.t('evenements.index.devis') })}${e.id === 'mariage' ? html` <button type="button" class="bouton bouton--petit bouton--contour" data-ajouter="professionnel" data-ajouter-nom="Pack Professionnel" data-ajouter-image="/assets/images/materiel/pack-professionnel-360.webp">Ajouter le Pack Professionnel</button>` : ''}</p></div>
        </div>
      </li>`)}
    </ol>
  </div>
</section>

<section class="formules conteneur" id="formules">
  <p class="sur">${c.t('evenements.formules.sur')}</p>
  <h2 data-anime="lignes">${c.t('evenements.formules.titre')}</h2>
  <div class="formules-grille" data-anime="cascade">
    <article class="formule"><img src="/assets/images/materiel/platines-dj-720.webp" alt="" loading="lazy"><h3>${c.t('evenements.formules.djT')}</h3><p>${c.t('evenements.formules.dj')}</p>${c.lien('prestation-dj', { classe: 'lien-fleche', texte: c.t('accueil.dj.lien') })}</article>
    <article class="formule"><img src="/assets/images/materiel/pack-club-720.webp" alt="" loading="lazy"><h3>${c.t('evenements.formules.locT')}</h3><p>${c.t('evenements.formules.loc')}</p>${c.lien('location', { classe: 'lien-fleche', texte: c.t('accueil.metiers.locLien') })}</article>
  </div>
</section>

<section class="fin fin--page" id="fin">
  <div class="fin-balayage" data-boucle-css data-visuel aria-hidden="true"><span data-effet="fin-balayage"></span><span></span></div>
  <div class="conteneur fin-texte">
    <h2 data-anime="lignes">${c.t('evenements.fin.titre')}</h2>
    <p data-anime>${c.t('evenements.fin.texte')}</p>
    <p class="fin-actions">${c.lien('contact', { ancre: 'demande', params: 'souhait=aide', classe: 'bouton', texte: c.t('commun.devis') })}<a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
  </div>
</section>
`;
};
