/* Parcours propres à NEWPEARS : « Ma demande » (ajout, deux onglets, donnée abîmée), conseil de la régie,
   filtres du catalogue, demande en quatre étapes. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    /* Donnée abîmée : nettoyée sans bloquer le site. */
    await page.goto(BASE + '/location', { waitUntil: 'load' });
    await page.evaluate(() => localStorage.setItem('newpears-demande', '{abîmé'));
    await page.reload({ waitUntil: 'load' });
    if ((await attendrePret(page)) === 'jamais-pret') R.echec('ma demande', 'une donnée abîmée bloque le site', { page: '/location' });

    /* Ajout d'un article : le compteur passe à 1, et l'autre onglet le voit. */
    const autre = await ctx.newPage();
    await autre.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(autre);
    await page.locator('.article [data-ajouter]').first().scrollIntoViewIfNeeded();
    await page.locator('.article [data-ajouter]').first().click();
    await attendre(1200);
    const ici = await page.locator('[data-demande-compte]').first().textContent();
    const la = await autre.locator('[data-demande-compte]').first().textContent();
    if (ici.trim() !== '1') R.echec('ma demande', `compteur à ${ici} après un ajout`, { page: '/location', taille: '390×844' });
    if (la.trim() !== '1') R.echec('ma demande', `l'autre onglet affiche ${la} au lieu de 1`, { page: '/', taille: '390×844' });

    /* Filtre « Éclairage » : seuls les articles d'éclairage restent, et l'adresse garde le filtre. */
    await page.locator('[data-filtre="lumiere"]').click();
    await attendre(400);
    const f = await page.evaluate(() => ({
      autres: [...document.querySelectorAll('.article:not([hidden])')].filter((a) => a.dataset.famille !== 'lumiere').length,
      lum: document.querySelectorAll('.article:not([hidden])').length,
      url: location.search,
    }));
    if (f.autres || !f.lum) R.echec('catalogue', `filtre Éclairage : ${f.lum} visibles, ${f.autres} d'une autre famille`, { page: '/location' });
    if (!f.url.includes('famille=lumiere')) R.echec('catalogue', 'le filtre n’est pas gardé dans l’adresse', { page: '/location' });
    await page.locator('[data-recherche]').fill('lasers');
    await attendre(300);
    const lasers = await page.locator('.article:not([hidden])').count();
    if (lasers < 1) R.echec('catalogue', 'la recherche « lasers » (pluriel) ne trouve rien', { page: '/location' });

    /* Régie : 30 invités et lumière douce conseillent un petit pack. */
    await autre.locator('[data-fader="invites"]').evaluate((i) => { i.value = '30'; i.dispatchEvent(new Event('input', { bubbles: true })); });
    await autre.locator('[data-fader="lumiere"]').evaluate((i) => { i.value = '1'; i.dispatchEvent(new Event('input', { bubbles: true })); });
    const pack = (await autre.locator('[data-pack-nom]').textContent()).trim();
    if (pack !== 'Pack Essentiel') R.echec('régie', `30 invités, lumière « Piste » : ${pack} au lieu de Pack Essentiel`, { page: '/' });

    /* Demande en 4 étapes, préremplie depuis l'adresse, puis envoi simulé. */
    await page.goto(BASE + '/contact?type=mariage#demande', { waitUntil: 'load' });
    await attendrePret(page);
    const type = await page.locator('#type').inputValue();
    if (type !== 'mariage') R.echec('demande', `type prérempli : « ${type} » au lieu de mariage`, { page: '/contact' });
    await page.locator('[data-suivant]').click();
    await page.locator('#date').fill('2027-06-12');
    await page.locator('#lieu').fill('Saint-Quentin');
    await page.locator('[data-suivant]').click();
    await page.locator('input[name="souhait"][value="dj"]').check();
    await page.locator('[data-suivant]').click();
    await page.locator('#prenom').fill('Camille');
    await page.locator('#nom').fill('Martin');
    await page.locator('#email').fill('camille@exemple.fr');
    await page.locator('#tel').fill('06 00 00 00 00');
    await page.locator('input[name="consentement"]').check();
    await page.locator('[data-envoyer]').dblclick();
    await attendre(800);
    const fin = await page.evaluate(() => ({
      msg: !document.querySelector('[data-message-envoi]').hidden,
      off: document.querySelector('[data-envoyer]').disabled,
      tampon: document.querySelector('[data-tampon]').classList.contains('pose'),
    }));
    if (!fin.msg || !fin.off) R.echec('demande', 'envoi simulé : message absent ou bouton encore actif', { page: '/contact' });
    if (!fin.tampon) R.regarder('demande', 'le tampon « Demande reçue » ne s’est pas posé', { page: '/contact' });
  } finally { await ctx.close(); }
}
