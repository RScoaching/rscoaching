/* ==========================================================================
   ACCESSO ATLETA
   Il link personale (?id=...) apre l'app come sempre. Se il preparatore ha
   messo l'email dell'atleta nella sua scheda, il database risponde solo a chi
   ha fatto l'accesso con quella email: la prima volta l'atleta scrive la sua
   email, riceve un link, lo apre ed e' dentro. Il telefono se lo ricorda.
   Senza email nella scheda tutto resta come prima (basta il link).

   Chi apre l'app dall'icona sulla schermata Home (iPhone) puo' copiare il link
   dell'email e incollarlo qui: l'icona ha una memoria separata da Safari.
   ========================================================================== */
import { getAuth, onAuthStateChanged, sendSignInLinkToEmail, isSignInWithEmailLink,
         signInWithEmailLink, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const CHIAVE_EMAIL = 'rs_email_accesso';
const leggi = k => { try { return localStorage.getItem(k) || ''; } catch (e) { return ''; } };
const scrivi = (k, v) => { try { v ? localStorage.setItem(k, v) : localStorage.removeItem(k); } catch (e) {} };
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function schermo(html) {
  let v = document.getElementById('rs-accesso');
  if (!v) {
    v = document.createElement('div');
    v.id = 'rs-accesso';
    v.style.cssText = 'position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;' +
      'background:#140b08;color:#f4ece8;font:16px/1.5 Inter,-apple-system,system-ui,sans-serif;padding:24px 16px;overflow:auto';
    document.documentElement.appendChild(v);
  }
  v.innerHTML = '<div style="max-width:380px;width:100%">' + html + '</div>';
  return v;
}
const INP = 'width:100%;box-sizing:border-box;margin-top:8px;padding:14px;border-radius:12px;border:1px solid #4a302a;background:#21130f;color:#f4ece8;font:16px Inter,system-ui,sans-serif';
const BTN = 'width:100%;margin-top:12px;min-height:48px;border:0;border-radius:12px;background:#ff6a2e;color:#1a0d08;font:700 16px Inter,system-ui,sans-serif;cursor:pointer';
const LNK = 'background:none;border:0;color:#c9a99c;font:14px Inter,system-ui,sans-serif;text-decoration:underline;cursor:pointer;margin-top:14px;padding:8px 0';
const TIT = 'font:800 26px Inter,system-ui,sans-serif;letter-spacing:.01em';
const SUB = 'margin-top:8px;color:#c9a99c';
const ERR = 'margin-top:10px;color:#ff8a7a;min-height:1em';

function chiudi() { const v = document.getElementById('rs-accesso'); if (v) v.remove(); }

function chiediEmail(auth, aid, msg) {
  const v = schermo(
    '<div style="' + TIT + '">Accedi</div>' +
    '<div style="' + SUB + '">Per vedere i tuoi allenamenti scrivi la tua email: ti mandiamo un link, lo apri e sei dentro. Serve solo la prima volta.</div>' +
    '<input id="rsa-email" type="email" inputmode="email" autocomplete="email" autocapitalize="off" placeholder="nome@email.it" style="' + INP + '" value="' + esc(leggi(CHIAVE_EMAIL)) + '">' +
    '<button id="rsa-invia" style="' + BTN + '">Mandami il link</button>' +
    '<div id="rsa-err" style="' + ERR + '">' + esc(msg || '') + '</div>' +
    '<button id="rsa-incolla" style="' + LNK + '">Ho gia\' il link nell\'email</button>');
  const invia = async () => {
    const email = v.querySelector('#rsa-email').value.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { v.querySelector('#rsa-err').textContent = 'Controlla l\'email.'; return; }
    v.querySelector('#rsa-invia').disabled = true;
    v.querySelector('#rsa-invia').textContent = 'Invio...';
    try {
      await sendSignInLinkToEmail(auth, email, { url: location.origin + location.pathname.replace(/[^/]*$/, '') + '?id=' + encodeURIComponent(aid), handleCodeInApp: true });
      scrivi(CHIAVE_EMAIL, email);
      linkInviato(auth, aid, email);
    } catch (e) {
      v.querySelector('#rsa-invia').disabled = false;
      v.querySelector('#rsa-invia').textContent = 'Mandami il link';
      v.querySelector('#rsa-err').textContent = 'Invio non riuscito, riprova tra poco.';
    }
  };
  v.querySelector('#rsa-invia').onclick = invia;
  v.querySelector('#rsa-email').onkeydown = e => { if (e.key === 'Enter') invia(); };
  v.querySelector('#rsa-incolla').onclick = () => linkInviato(auth, aid, leggi(CHIAVE_EMAIL));
}

function linkInviato(auth, aid, email) {
  const v = schermo(
    '<div style="' + TIT + '">Controlla l\'email</div>' +
    (email ? '<div style="' + SUB + '">Ti abbiamo mandato un link a <b>' + esc(email) + '</b>. Aprilo da questo telefono. Se non arriva guarda nello spam.</div>'
           : '<div style="' + SUB + '">Apri il link che hai ricevuto via email da questo telefono.</div>') +
    '<div style="margin-top:22px;color:#c9a99c;font-size:14px">Usi l\'app dall\'icona sulla schermata Home? Tieni premuto sul link nell\'email, copialo e incollalo qui:</div>' +
    '<input id="rsa-link" type="url" autocapitalize="off" placeholder="Incolla il link" style="' + INP + '">' +
    (email ? '' : '<input id="rsa-email2" type="email" inputmode="email" autocapitalize="off" placeholder="La tua email" style="' + INP + '">') +
    '<button id="rsa-entra" style="' + BTN + '">Entra</button>' +
    '<div id="rsa-err" style="' + ERR + '"></div>' +
    '<button id="rsa-indietro" style="' + LNK + '">Usa un\'altra email</button>');
  v.querySelector('#rsa-indietro').onclick = () => chiediEmail(auth, aid);
  v.querySelector('#rsa-entra').onclick = async () => {
    const link = v.querySelector('#rsa-link').value.trim();
    const em = (email || (v.querySelector('#rsa-email2') || {}).value || '').trim().toLowerCase();
    if (!link || !isSignInWithEmailLink(auth, link)) { v.querySelector('#rsa-err').textContent = 'Questo non sembra il link dell\'email.'; return; }
    if (!em) { v.querySelector('#rsa-err').textContent = 'Scrivi la tua email.'; return; }
    try { await signInWithEmailLink(auth, em, link); scrivi(CHIAVE_EMAIL, em); location.reload(); }
    catch (e) { v.querySelector('#rsa-err').textContent = 'Link scaduto o gia\' usato: chiedine uno nuovo.'; }
  };
}

function chiediEmailPerLink(auth, aid, href) {
  const v = schermo(
    '<div style="' + TIT + '">Quasi fatto</div>' +
    '<div style="' + SUB + '">Conferma la tua email per entrare.</div>' +
    '<input id="rsa-email" type="email" inputmode="email" autocapitalize="off" placeholder="nome@email.it" style="' + INP + '">' +
    '<button id="rsa-ok" style="' + BTN + '">Entra</button><div id="rsa-err" style="' + ERR + '"></div>');
  return new Promise(ok => {
    v.querySelector('#rsa-ok').onclick = async () => {
      const em = v.querySelector('#rsa-email').value.trim().toLowerCase();
      try { await signInWithEmailLink(auth, em, href); scrivi(CHIAVE_EMAIL, em); ok(true); }
      catch (e) { v.querySelector('#rsa-err').textContent = 'Email diversa da quella del link, oppure link scaduto.'; }
    };
  });
}

// Da chiamare prima di leggere il database. Torna solo quando l'atleta puo' entrare.
export async function accessoAtleta(app, aid, opz) {
  opz = opz || {};
  const auth = getAuth(app);
  const DB = app.options.databaseURL;
  window.rsEsciAtleta = () => signOut(auth).then(() => { scrivi(CHIAVE_EMAIL, ''); location.reload(); });

  // arrivo dal link dell'email
  if (isSignInWithEmailLink(auth, location.href)) {
    const em = leggi(CHIAVE_EMAIL);
    try {
      if (em) await signInWithEmailLink(auth, em, location.href);
      else await chiediEmailPerLink(auth, aid, location.href);
    } catch (e) {
      chiediEmail(auth, aid, 'Link scaduto o gia\' usato: chiedine uno nuovo.');
    }
    history.replaceState(null, '', location.pathname + '?id=' + encodeURIComponent(aid || ''));
  }
  const utente = await new Promise(ok => { const stop = onAuthStateChanged(auth, u => { stop(); ok(u); }); });
  if (!aid) return;

  let tok = '';
  try { tok = utente ? await utente.getIdToken() : ''; } catch (e) {}
  let r;
  try { r = await fetch(DB + '/athletes/' + encodeURIComponent(aid) + '/name.json' + (tok ? '?auth=' + encodeURIComponent(tok) : ''), { cache: 'no-store' }); }
  catch (e) { return; } // senza rete: l'app mostra quello che ha in memoria, come prima
  if (r.ok) { chiudi(); return; }
  if (opz.altrove) { location.replace(opz.altrove); return new Promise(() => {}); }
  chiediEmail(auth, aid, utente && utente.email ? 'Questo link non e\' collegato a ' + utente.email + '.' : '');
  return new Promise(() => {}); // si resta sulla schermata di accesso
}
