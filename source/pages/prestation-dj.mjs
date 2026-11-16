/* Prestation DJ : grand titre centré puis bandeau photo, ce qui est compris (rack de voyants), la playlist
   (incontournables et titres à éviter), les temps forts, Mattéo et Sacha, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

export const page = { cle: 'prestation-dj', fichier: 'prestation-dj', imagePartage: 'grok/dj-ouverture-1280.webp' };

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
    <img class="controleur-photo" src="/assets/images/materiel/controleur-dj-1100.webp" alt="${c.s('dj.controleur.alt')}" width="1084" height="480" fetchpriority="high" decoding="async">
    <span class="jog jog--g" data-jog data-effet="jogs" aria-hidden="true"></span>
    <span class="jog jog--d" data-jog aria-hidden="true"></span>
    <p class="controleur-consigne" aria-hidden="true"><span class="consigne-souris">${c.t('dj.controleur.consigne')}</span><span class="consigne-tactile">${c.t('dj.controleur.consigneTactile')}</span></p>
  </div>
  <p class="tete-texte-bas conteneur masque-ecran-bas" data-anime="gsap">${c.t('dj.tete.texte')}</p>
</section>

<section class="inclus conteneur" id="inclus">
  <p class="sur">${c.t('dj.inclus.sur')}</p>
  <div class="inclus-tete"><h2 data-anime="lignes">${c.t('dj.inclus.titre')}</h2><img class="inclus-visuel" src="/assets/images/materiel/controleur-dj-720.webp" alt="" loading="lazy" data-visuel></div>
  <ul class="inclus-liste" data-anime="cascade">
    ${[1, 2, 3, 4, 5, 6, 7].map((n) => html`<li><span class="voyant" data-effet="inclus-led" aria-hidden="true"></span><span>${c.t(`dj.inclus.i${n}`)}</span></li>`)}
  </ul>
</section>

<section class="playlist" id="playlist">
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

<section class="temps conteneur" id="temps-forts">
  <p class="sur">${c.t('dj.temps.sur')}</p>
  <h2 data-anime="lignes">${c.t('dj.temps.titre')}</h2>
  <p class="temps-texte">${c.t('dj.temps.texte')}</p>
  <div class="temps-grille">
    ${c.media({ nom: 'grok/dj-ouverture', alt: c.s('dj.tete.alt'), classe: 'temps-grand', sizes: '(max-width: 760px) 100vw, 60vw', attrs: 'data-anime="rideau"' })}
    <ol class="temps-liste" data-anime="cascade">${[1, 2, 3, 4].map((n) => html`<li><span class="etape-n">0${n}</span>${c.t(`dj.temps.t${n}`)}</li>`)}</ol>
    ${c.media({ nom: 'grok/dj-micro-gateau', alt: c.s('dj.temps.altMicro'), classe: 'temps-petit', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="duo" id="duo">
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
