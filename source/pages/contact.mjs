/* Contact : numéro en très grand (matrice LED) et bandeau de la console lumière, demande en 4 étapes qui reprend
   la sélection (jet de CO2 et tampon « Demande reçue » à l'envoi), moyens directs, zone, questions. */
import { html, brut } from '../../outils/gabarit.mjs';
import { carte } from '../gabarits/carte.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/location-livraison-1280.webp' };

export default (c) => {
  const k = c.site.contact, f = (x) => c.t(`contact.form.${x}`);
  const champ = (id, type, lib, attrs = '') => html`<div class="champ"><label for="${id}">${lib}</label><input id="${id}" name="${id}" type="${type}"${brut(attrs ? ' ' + attrs : '')}></div>`;
  return html`
<section class="tete tete--contact tete--plan" id="debut">
  <div class="tete-texte conteneur">
    <p class="sur" data-anime="gsap">${c.t('contact.tete.sur')}</p>
    <h1 data-grille="typo"><span class="ligne-masque"><span class="tete-ligne">${c.t('contact.tete.titre')}</span></span></h1>
    <a class="numero-led" href="tel:${k.telephoneLien}" data-iris-centre data-anime="gsap" data-effet="numero-led" aria-label="Appeler le ${k.telephone}">${k.telephone}</a>
    <p class="tete-actions" data-anime="gsap"><a class="bouton" href="#demande" data-action-principale>${f('envoyer')}</a><a class="bouton bouton--contour" href="${k.whatsapp}" target="_blank" rel="noopener">${c.t('commun.whatsapp')}</a><a class="bouton bouton--contour" href="mailto:${k.email}">${k.email}</a><span class="tete-info" data-info-cle>${c.t('contact.tete.texte')}</span></p>
  </div>
  <div class="plan" data-plan data-visuel>
    <p class="plan-titre">${c.t('contact.plan.titre')}</p>
    <svg class="plan-svg" viewBox="0 0 640 440" role="img" aria-label="${c.s('contact.plan.aria')}">
      <defs>
        <pattern id="parquet" width="24" height="8" patternUnits="userSpaceOnUse"><rect width="24" height="8" fill="#1a1520"/><path d="M0 7.5H24M12 0V8" stroke="#3a2f45" stroke-width="1"/></pattern>
        <radialGradient id="faisceau-plan" cx="50%" cy="0%" r="100%"><stop offset="0" stop-color="#b49bff" stop-opacity=".55"/><stop offset="1" stop-color="#b49bff" stop-opacity="0"/></radialGradient>
      </defs>
      <rect class="plan-mur" x="12" y="12" width="616" height="416" rx="10"/>
      <rect class="plan-piste" x="200" y="150" width="240" height="170" rx="6" fill="url(#parquet)"/>
      <g class="plan-faisceaux" data-plan-faisceaux data-effet="plan">
        <path d="M232 92 L205 250 L265 250 Z"/><path d="M290 88 L262 250 L322 250 Z"/><path d="M350 88 L318 250 L378 250 Z"/><path d="M408 92 L375 250 L435 250 Z"/>
      </g>
      <line class="plan-pont" x1="210" y1="90" x2="430" y2="90"/>
      <g class="plan-lyres">${[232, 290, 350, 408].map((x) => html`<circle cx="${x}" cy="90" r="7"/>`)}</g>
      <rect class="plan-cabine" x="270" y="44" width="100" height="30" rx="4"/>
      <rect class="plan-enceinte" x="222" y="46" width="26" height="26" rx="3"/><rect class="plan-enceinte" x="392" y="46" width="26" height="26" rx="3"/>
      <text class="plan-etiquette" x="320" y="64" text-anchor="middle">${c.t('contact.plan.cabine')}</text>
      <text class="plan-etiquette plan-etiquette--piste" x="320" y="296" text-anchor="middle">${c.t('contact.plan.piste')}</text>
      <g class="plan-tables" data-plan-tables></g>
    </svg>
    <div class="plan-reglage">
      <button type="button" class="plan-bouton" data-plan-pas="-10" aria-label="${c.s('contact.plan.moins')}">−</button>
      <output class="plan-invites" data-plan-invites aria-live="polite">120 invités</output>
      <button type="button" class="plan-bouton" data-plan-pas="10" aria-label="${c.s('contact.plan.plus')}">+</button>
    </div>
    <p class="plan-legende">${c.t('contact.plan.legende')}</p>
  </div>
</section>

<section class="clair demande" id="demande">
  <div class="conteneur demande-grille">
    <form class="devis" data-formulaire data-devis novalidate>
      <p class="sur">${f('sur')}</p>
      <h2 data-anime="lignes">${f('titre')}</h2>
      <ol class="devis-etapes" aria-label="Étapes">${[1, 2, 3, 4].map((n) => html`<li data-pastille="${n}"${n === 1 ? brut(' aria-current="step"') : ''}><span>${n}</span>${f('e' + n)}</li>`)}</ol>
      <p class="devis-progression" data-progression aria-live="polite">Étape 1 sur 4</p>
      <fieldset class="devis-etape" data-etape="1">
        <legend>${f('e1')}</legend>
        <div class="champ"><label for="type">${f('type')}</label><select id="type" name="type" required><option value="">${f('choisir')}</option>${c.donnees.evenements.map((e) => html`<option value="${e.id}">${e.nom}</option>`)}</select></div>
        <div class="champ"><label for="invites">${f('invites')}</label><input id="invites" name="invites" type="number" min="1" inputmode="numeric"></div>
      </fieldset>
      <fieldset class="devis-etape" data-etape="2" hidden>
        <legend>${f('e2')}</legend>
        ${champ('date', 'date', f('date'), 'required')}
        ${champ('lieu', 'text', f('lieu'), 'required autocomplete="address-level2"')}
      </fieldset>
      <fieldset class="devis-etape" data-etape="3" hidden>
        <legend>${f('e3')}</legend>
        <div class="choix" role="radiogroup" aria-label="${c.s('contact.form.souhait')}">
          <label><input type="radio" name="souhait" value="dj" required> ${f('sDj')}</label>
          <label><input type="radio" name="souhait" value="location"> ${f('sLoc')}</label>
          <label><input type="radio" name="souhait" value="dj-location"> ${f('sDjLoc')}</label>
          <label><input type="radio" name="souhait" value="aide"> ${f('sAide')}</label>
        </div>
        <div class="choix" role="radiogroup" aria-label="${c.s('contact.form.livraison')}">
          <label><input type="radio" name="livraison" value="installation" checked> ${f('lInstall')}</label>
          <label><input type="radio" name="livraison" value="retrait"> ${f('lRetrait')}</label>
        </div>
        <div class="selection"><p class="selection-titre">${f('selection')}</p><ul data-selection></ul><p class="selection-vide" data-selection-vide>${f('selectionVide')} ${c.lien('location', { ancre: 'catalogue', classe: 'lien-fleche', texte: 'Catalogue' })}</p></div>
      </fieldset>
      <fieldset class="devis-etape" data-etape="4" hidden>
        <legend>${f('e4')}</legend>
        <div class="champs-2">${champ('prenom', 'text', f('prenom'), 'required autocomplete="given-name"')}${champ('nom', 'text', f('nom'), 'required autocomplete="family-name"')}</div>
        <div class="champs-2">${champ('email', 'email', f('email'), 'required autocomplete="email"')}${champ('tel', 'tel', f('tel'), 'required autocomplete="tel"')}</div>
        <div class="champ"><label for="message">${f('message')}</label><textarea id="message" name="message" rows="3"></textarea></div>
        <div class="champ champ--case"><label><input type="checkbox" name="consentement" required> ${f('consentement')}</label><p class="mention-donnees">${f('confidentialite')}</p></div>
      </fieldset>
      <div class="devis-boutons">
        <button type="button" class="bouton bouton--contour" data-precedent hidden>${f('precedent')}</button>
        <button type="button" class="bouton" data-suivant>${f('suivant')}</button>
        <button type="submit" class="bouton" data-envoyer data-grille="retour" hidden>${f('envoyer')}</button>
      </div>
      <p data-message-envoi data-texte="${c.s('contact.form.envoye')}" hidden tabindex="-1"></p>
      <div class="tampon" data-tampon aria-hidden="true">${f('recu')}</div>
    </form>
    <aside class="recap" data-recap>
      <p class="recap-titre">${f('recap')}</p>
      <dl data-recap-liste></dl>
      <img class="recap-case" src="/assets/images/materiel/pack-club-360.webp" alt="" loading="lazy" data-recap-image hidden>
      <div class="recap-vide" data-recap-vide>
        <p class="recap-vide-images" aria-hidden="true">${['enceinte-amplifiee', 'lyre-beam-100w', 'micro-sans-fil'].map((n) => html`<img src="/assets/images/materiel/${n}-360.webp" alt="" width="72" height="72" loading="lazy" decoding="async">`)}</p>
        <p class="recap-vide-texte">${c.lien('location', { ancre: 'catalogue', classe: 'lien-fleche', texte: f('ajouterMateriel') })}</p>
      </div>
    </aside>
  </div>
</section>

<section class="clair joindre conteneur" id="joindre">
  <div class="joindre-tete"><h2 data-anime="lignes">${c.t('contact.joindre.titre')}</h2><img class="joindre-visuel" src="/assets/images/materiel/table-mixage-6-voies-720.webp" alt="" loading="lazy" data-visuel></div>
  <ul class="joindre-liste" data-anime="cascade">
    <li><span>${c.t('contact.joindre.tel')}</span><a href="tel:${k.telephoneLien}">${k.telephone}</a></li>
    <li><span>${c.t('contact.joindre.whatsapp')}</span><a href="${k.whatsapp}" target="_blank" rel="noopener">06 26 15 24 54</a></li>
    <li><span>${c.t('contact.joindre.email')}</span><a href="mailto:${k.email}">${k.email}</a></li>
    <li><span>${c.t('contact.joindre.reseaux')}</span><span class="reseaux"><a href="${k.instagram}" target="_blank" rel="noopener">Instagram</a> <a href="${k.tiktok}" target="_blank" rel="noopener">TikTok</a> <a href="${k.facebook}" target="_blank" rel="noopener">Facebook</a></span></li>
  </ul>
</section>

<section class="clair zone" id="zone">
  <div class="conteneur zone-grille">
    <div>
      <h2 data-anime="lignes">${c.t('contact.zone.titre')}</h2>
      <p data-anime>${c.t('accueil.zone.texte')}</p>
    </div>
    <div class="zone-carte" data-visuel data-fx="trace">${carte(c, c.donnees.villes, c.s('contact.zone.titre'))}</div>
  </div>
</section>

<section class="clair questions conteneur" id="questions">
  <h2 data-anime="lignes">${c.t('contact.faq.titre')}</h2>
  <div class="questions-grille">
    <div class="questions-liste" data-anime="cascade">${c.donnees.faq.map((q) => html`<details class="faq-item"><summary>${q.q}</summary><p>${q.r}</p></details>`)}</div>
    <figure class="questions-media questions-media--produit" data-visuel><img src="/assets/images/catalogue/pack-ambiance-900.webp" alt="Le Pack Ambiance de NEWPEARS : enceintes, lumières et pieds" width="900" height="675" loading="lazy" decoding="async"></figure>
  </div>
</section>
`;
};
