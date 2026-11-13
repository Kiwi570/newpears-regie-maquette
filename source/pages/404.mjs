/* Page 404 : la piste est vide, une seule lyre allumée. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="tete tete--404" id="debut">
  ${c.media({ nom: 'grok/salle-eteinte', alt: c.s('accueil.regie.alt'), priorite: true, classe: 'tete-fond', sizes: '100vw', attrs: 'data-fx="zoom"' })}
  <div class="tete-texte conteneur">
    <p class="sur">404</p>
    <h1 data-grille="typo"><span class="ligne-masque"><span class="tete-ligne">${c.t('introuvable.titre')}</span></span></h1>
    <p data-anime="gsap">${c.t('introuvable.texte')}</p>
    <p data-anime="gsap" data-iris-centre class="tete-actions">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} <span data-info-cle>${c.t('commun.dispo')}</span></p>
  </div>
</section>
`;
