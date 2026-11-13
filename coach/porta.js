/* ==========================================================================
   PORTA DEL LATO COACH
   Ogni pagina coach parte chiusa: niente codice della pagina e niente dati
   finche' non entri con il tuo account Google. Il controllo vero non e' qui
   ma nel database: le regole di Firebase fanno leggere e scrivere il lato
   coach solo al tuo account. Questa pagina chiede soltanto chi sei e poi
   avvia il resto, quindi leggere il codice non apre niente.

   - Gli script della pagina sono scritti come type="text/rs-dopo": il browser
     non li esegue. Si eseguono qui, in ordine, dopo l'accesso.
   - I dati Fiorentina (carico, calendario, esercitazioni, forza) non sono
     piu' file pubblici: stanno nel database in fio_dati/<nome>, leggibili
     solo da te. Le pagine li ricevono come prima (window.SNAP, window.CAL...).
   - Le chiamate dirette al database (fetch .../x.json) ricevono da sole il
     lasciapassare dell'accesso.
   - In anteprima sul Mac (localhost o file) non chiede niente e legge i file
     locali, come prima.
   ========================================================================== */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const cfg={apiKey:"AIzaSyAayWDWvUQqtAfIlm7qA8kMKxJu2-_y7k4",authDomain:"rscoaching-a6c61.firebaseapp.com",databaseURL:"https://rscoaching-a6c61-default-rtdb.europe-west1.firebasedatabase.app",projectId:"rscoaching-a6c61",storageBucket:"rscoaching-a6c61.firebasestorage.app",messagingSenderId:"499942544251",appId:"1:499942544251:web:bd246cc6846b0fad89e3de"};
const DB = cfg.databaseURL;
const LOCALE = location.protocol === 'file:' || /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
// In anteprima sul Mac (localhost) i dati Fiorentina arrivano dai file locali, ma il login serve lo stesso:
// il database e' chiuso. Solo aprendo il file direttamente (file://) non c'e' login possibile.
const SENZA_LOGIN = location.protocol === 'file:';
const DATI = ['carico', 'calendario', 'esercitazioni', 'forza'];
// Librerie esterne con impronta: se il file sul CDN venisse alterato, il browser non lo esegue.
const SRI = { 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js': 'sha384-bs/nf9FbdNouRbMiFcrcZfLXYPKiPaGVGplVbv7dLGECccEXDW+S3zjqSKR5ZEaD' };
const RE_DATI = /(?:^|\/)(carico|calendario|esercitazioni|forza)_data\.js(?:[?#].*)?$/;
// File del lato coach che online non ci sono (o ci sono senza i dati delle giocatrici):
// arrivano dal database, in pagine/<nome>, dopo l'accesso.
const PRIVATI = ['fio_sidebar.js', 'prevenzione_data.js'];
const GUSCIO = document.querySelector('meta[name="rs-guscio"]');
const chiave = n => n.replace(/[.#$\[\]\/]/g, '_');

// Il lato coach non si apre dentro pagine di altri siti (clickjacking): niente login in un riquadro.
if (window.top !== window.self) {
  document.documentElement.innerHTML = '';
  try { window.top.location = window.self.location.href; } catch (e) {}
  throw new Error('pagina aperta dentro un riquadro');
}

const app = initializeApp(cfg);
const auth = getAuth(app);
const fetchVero = window.fetch.bind(window);

// ---------- avvisi a schermo ----------
function velo(html) {
  let v = document.getElementById('rs-porta');
  if (!v) {
    v = document.createElement('div');
    v.id = 'rs-porta';
    v.style.cssText = 'position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;' +
      'background:#0b0b12;color:#e8e8f0;font:15px/1.5 Inter,-apple-system,system-ui,sans-serif;padding:16px;visibility:visible';
    document.documentElement.appendChild(v);
  }
  v.innerHTML = '<div style="max-width:360px;width:100%;text-align:center">' + html + '</div>';
  return v;
}
const BTN = 'display:inline-block;margin-top:18px;padding:12px 22px;border-radius:10px;border:0;cursor:pointer;' +
  'font:600 15px Inter,-apple-system,system-ui,sans-serif;background:#7c3aed;color:#fff';
const BTN2 = BTN.replace('background:#7c3aed;color:#fff', 'background:transparent;color:#a0a0b8;border:1px solid #33334a');

function chiediAccesso(errore) {
  const v = velo('<div style="font:700 20px Inter,system-ui,sans-serif;letter-spacing:.02em">RS Coaching</div>' +
    '<div style="margin-top:6px;color:#a0a0b8">Area riservata. Entra con il tuo account Google.</div>' +
    (errore ? '<div style="margin-top:12px;color:#f87171">' + errore + '</div>' : '') +
    '<button id="rs-entra" style="' + BTN + '">Entra con Google</button>');
  v.querySelector('#rs-entra').onclick = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).catch(e => {
      // a volte il browser segnala "finestra chiusa" anche se l'accesso e' riuscito: in quel caso si ignora
      if (auth.currentUser || avviata) return;
      chiediAccesso(e && e.code === 'auth/popup-blocked' ? 'Il browser ha bloccato la finestra: consenti i popup per questo sito.' :
        (e && e.code === 'auth/popup-closed-by-user' ? '' : 'Accesso non riuscito (' + ((e && e.code) || 'errore') + ').'));
    });
  };
}

function negato(user) {
  const v = velo('<div style="font:700 20px Inter,system-ui,sans-serif">Accesso negato</div>' +
    '<div style="margin-top:6px;color:#a0a0b8">Questo account non ha accesso all\'area coach.</div>' +
    '<div style="margin-top:10px;color:#6b6b85;font-size:12px;word-break:break-all">' + (user.email || '') + '<br>' + user.uid + '</div>' +
    '<button id="rs-esci" style="' + BTN2 + '">Esci e cambia account</button>');
  v.querySelector('#rs-esci').onclick = () => { try { localStorage.removeItem('rs_versioni'); localStorage.removeItem('rs_versioni_uid'); } catch (e) {} svuotaCopia().then(() => signOut(auth)); };
}

// ---------- lasciapassare per le chiamate dirette al database ----------
async function gettone() {
  return auth.currentUser ? auth.currentUser.getIdToken() : null;
}
// ---------- copia in memoria nel browser ----------
// Pagine e dati privati restano nel browser (come prima i file dal sito) e si
// riscaricano solo se sono cambiati: versioni/<tipo>/<nome> e' un'impronta corta
// scritta da carica_dati_fio.py. All'uscita dall'account la copia si cancella.
const CACHE = 'rs-privati-v1';
let VERSIONI = null;
const MEMO = new Map();
async function caricaVersioni() {
  const t = await gettone();
  const r = await fetchVero(DB + '/versioni.json?auth=' + encodeURIComponent(t), { cache: 'no-store' });
  if (!r.ok) return null;
  return (await r.json()) || {};
}
async function scaricaPrivato(tipo, k) {
  const ver = VERSIONI && VERSIONI[tipo] && VERSIONI[tipo][k];
  const url = 'https://rs-cache.invalid/' + tipo + '/' + k;
  let c = null;
  try { c = await caches.open(CACHE); } catch (e) {}
  if (ver && c) {
    try { const m = await c.match(url); if (m && m.headers.get('x-ver') === ver) return await m.text(); } catch (e) {}
  }
  const t = await gettone();
  const r = await fetchVero(DB + '/' + tipo + '/' + k + '.json?auth=' + encodeURIComponent(t), { cache: 'no-store' });
  if (!r.ok) return '';
  const v = await r.json();
  const testo = typeof v === 'string' ? v : '';
  if (testo && ver && c) { try { await c.put(url, new Response(testo, { headers: { 'x-ver': ver, 'Content-Type': 'text/plain' } })); } catch (e) {} }
  return testo;
}
function privato(tipo, k) {
  const id = tipo + '/' + k;
  if (!MEMO.has(id)) MEMO.set(id, scaricaPrivato(tipo, k));
  return MEMO.get(id);
}
function svuotaCopia() { try { return caches.delete(CACHE); } catch (e) { return Promise.resolve(); } }

async function datoFio(nome, fresco) {
  if (LOCALE) {
    const r = await fetchVero('./' + nome + '_data.js', { cache: 'no-store' });
    return r.ok ? r.text() : '';
  }
  if (fresco) { const v = await caricaVersioni(); if (v) VERSIONI = v; MEMO.delete('fio_dati/' + nome); }
  return privato('fio_dati', nome);
}
function installaFetch() {
  window.fetch = async function(input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || String(input);
    const m = RE_DATI.exec(url.split('#')[0]);
    if (m && (url.indexOf('://') < 0 || url.indexOf(location.origin + '/') === 0)) {
      const testo = await datoFio(m[1], /[?&]ts=/.test(url));
      return new Response(testo, { status: testo ? 200 : 404, headers: { 'Content-Type': 'text/javascript' } });
    }
    if (!SENZA_LOGIN && typeof input === 'string' && input.indexOf(DB + '/') === 0) {
      const t = await gettone();
      if (t) input += (input.indexOf('?') < 0 ? '?' : '&') + 'auth=' + encodeURIComponent(t);
    }
    return fetchVero(input, init);
  };
}

function testoPrivato(nome) {
  return privato('pagine', chiave(nome));
}

// Online la pagina coach e' solo un guscio vuoto: il contenuto vero (codice, rosa,
// valori) arriva dal database dopo l'accesso e viene montato qui. Gli script restano
// spenti (text/rs-dopo) e li avvia avvia(), nell'ordine della pagina.
function spento(doc, s) {
  if (s.getAttribute('type') === 'text/rs-dopo') return s;
  if (/porta\.js/.test(s.getAttribute('src') || '') || /rs-chiuso/.test(s.textContent)) return null;
  const p = doc.createElement('script');
  p.type = 'text/rs-dopo';
  const t = s.getAttribute('type');
  if (t && t !== 'text/javascript') p.setAttribute('data-tipo', t);
  if (s.getAttribute('src')) p.setAttribute('data-src', s.getAttribute('src'));
  else p.textContent = s.textContent;
  return p;
}
async function montaPagina() {
  const html = await testoPrivato(GUSCIO.content);
  if (!html) throw new Error('pagina non trovata');
  const doc = new DOMParser().parseFromString(html, 'text/html');
  document.title = doc.title || document.title;
  for (const a of Array.from(doc.documentElement.attributes)) if (a.name !== 'class') document.documentElement.setAttribute(a.name, a.value);
  for (const n of Array.from(doc.head.childNodes)) {
    if (n.nodeName === 'SCRIPT') { const p = spento(doc, n); if (p) document.head.appendChild(document.importNode(p, true)); }
    else document.head.appendChild(document.importNode(n, true));
  }
  for (const s of Array.from(doc.body.querySelectorAll('script'))) { const p = spento(doc, s); if (p) { if (p !== s) s.replaceWith(p); } else s.remove(); }
  const corpo = document.importNode(doc.body, true);
  document.body.replaceWith(corpo);
}

// ---------- avvio della pagina ----------
// La pagina vera parte qui, nello stesso ordine in cui il browser l'avrebbe fatta
// partire da sola: prima gli script normali in ordine, poi i moduli (type=module)
// uno dopo l'altro, e solo alla fine gli eventi "pagina pronta" (DOMContentLoaded)
// e "pagina caricata" (load). Chi si registra a quegli eventi mentre la pagina
// parte viene chiamato al momento giusto, non prima (es. la sidebar del Builder,
// che si monta su DOMContentLoaded e ha bisogno di sidebar.js gia' caricato).
let inAvvio = true;
const inAttesa = { DOMContentLoaded: [], load: [] };
function eventiTardivi() {
  const tardi = (bersaglio, tipo) => {
    const orig = bersaglio.addEventListener.bind(bersaglio);
    bersaglio.addEventListener = function(t, fn, opt) {
      if (t === tipo && (typeof fn === 'function' || (fn && typeof fn.handleEvent === 'function'))) {
        const chiama = () => { try { typeof fn === 'function' ? fn.call(bersaglio, new Event(t)) : fn.handleEvent(new Event(t)); } catch (e) { setTimeout(() => { throw e; }); } };
        if (inAvvio) { inAttesa[tipo].push(chiama); return; }
        if (tipo === 'DOMContentLoaded' || document.readyState === 'complete') { setTimeout(chiama, 0); return; }
      }
      return orig(t, fn, opt);
    };
  };
  tardi(document, 'DOMContentLoaded');
  tardi(window, 'load');
}

function carica(src, tipo) {
  return new Promise(ok => {
    const s = document.createElement('script');
    if (tipo) s.type = tipo;
    s.async = false;
    if (SRI[src]) { s.integrity = SRI[src]; s.crossOrigin = 'anonymous'; s.referrerPolicy = 'no-referrer'; }
    s.src = src;
    s.onload = s.onerror = () => ok();
    document.body.appendChild(s);
  });
}
// Un modulo scritto nella pagina: si aspetta che abbia finito (anche le sue attese iniziali).
let nModulo = 0;
function moduloInline(vecchio) {
  return new Promise(ok => {
    const id = '__rsMod' + (++nModulo);
    let fatto = false;
    const fine = () => { if (!fatto) { fatto = true; try { delete window[id]; } catch (e) {} ok(); } };
    window[id] = fine;
    const s = document.createElement('script');
    s.type = 'module';
    s.textContent = vecchio.textContent + '\n;window.' + id + '&&window.' + id + '();';
    vecchio.replaceWith(s);
    setTimeout(fine, 15000); // se il modulo si ferma per un errore non si blocca tutta la pagina
  });
}

let avviata = false;
async function avvia() {
  if (avviata) return;
  avviata = true;
  installaFetch();
  eventiTardivi();
  const lista = Array.from(document.querySelectorAll('script[type="text/rs-dopo"]'));
  const privatoDi = el => {
    const src = el.getAttribute('data-src');
    const base = src ? src.split('?')[0].split('/').pop() : '';
    return (src && !LOCALE && src.indexOf('://') < 0 && PRIVATI.indexOf(base) >= 0) ? base : '';
  };
  // si parte con tutti gli scaricamenti insieme
  for (const el of lista) {
    if (el.getAttribute('data-fio')) datoFio(el.getAttribute('data-fio'));
    else if (privatoDi(el)) testoPrivato(privatoDi(el));
  }
  const moduli = [];
  // 1) script normali, in ordine (come durante la lettura della pagina)
  for (const vecchio of lista) {
    const tipo = vecchio.getAttribute('data-tipo') || '';
    if (tipo === 'module') { moduli.push(vecchio); continue; }
    const fio = vecchio.getAttribute('data-fio');
    if (fio) {
      const testo = await datoFio(fio);
      const s = document.createElement('script');
      s.setAttribute('data-fio', fio);
      s.textContent = testo || '';
      vecchio.replaceWith(s);
      continue;
    }
    const src = vecchio.getAttribute('data-src');
    const base = privatoDi(vecchio);
    if (base) {
      const s = document.createElement('script');
      s.textContent = await testoPrivato(base);
      vecchio.replaceWith(s);
      continue;
    }
    if (src) {
      vecchio.remove();
      await carica(src, tipo);
      continue;
    }
    const s = document.createElement('script');
    if (tipo) s.type = tipo;
    s.textContent = vecchio.textContent;
    vecchio.replaceWith(s);
  }
  // 2) moduli, uno alla volta (il browser li esegue dopo la lettura della pagina)
  for (const vecchio of moduli) {
    const src = vecchio.getAttribute('data-src');
    if (src) { vecchio.remove(); await carica(src, 'module'); }
    else await moduloInline(vecchio);
  }
  document.documentElement.classList.remove('rs-chiuso');
  const v = document.getElementById('rs-porta');
  if (v) v.remove();
  // 3) "pagina pronta" e poi "pagina caricata", come farebbe il browser
  inAvvio = false;
  inAttesa.DOMContentLoaded.splice(0).forEach(f => f());
  await new Promise(r => setTimeout(r, 0));
  inAttesa.load.splice(0).forEach(f => f());
  try { performance.mark('rs-pronto'); } catch (e) {}
}

// Indice dei programmi per le atlete: ognuna legge solo i propri.
// programs/<id>/assignedTo/<atleta> -> prog_idx/<atleta>/<id> = true.
// Lo tiene aggiornato la pagina coach dove si assegnano i programmi.
async function indiceProgrammi() {
  if (SENZA_LOGIN || !/\/(index|builder)\.html$|\/coach\/?$/.test(location.pathname)) return;
  // Stessa connessione al database della pagina: i programmi che la pagina ha gia' ricevuto
  // non si riscaricano una seconda volta.
  const { getDatabase, ref, onValue } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js");
  const db = getDatabase(app);
  let attesa = null;
  const scrivi = async P => {
    const idx = {};
    Object.entries(P || {}).forEach(([pid, p]) => {
      Object.entries((p && p.assignedTo) || {}).forEach(([aid, on]) => {
        if (on) (idx[aid] = idx[aid] || {})[pid] = true;
      });
    });
    const firma = JSON.stringify(idx);
    if (firma === indiceProgrammi.ultimo) return;
    try {
      const t = await gettone();
      const r = await fetchVero(DB + '/prog_idx.json?auth=' + encodeURIComponent(t), { method: 'PUT', body: firma });
      if (r.ok) indiceProgrammi.ultimo = firma;
    } catch (e) {}
  };
  onValue(ref(db, 'programs'), snap => {
    const P = snap.val();
    clearTimeout(attesa);
    attesa = setTimeout(() => scrivi(P), 2000); // si aspetta che le modifiche finiscano
  }, () => {});
}

// ---------- partenza veloce ----------
// Se questo browser ha gia' aperto la pagina con lo stesso account, la pagina si
// monta subito dalla copia in memoria (niente schermata "Controllo accesso") e
// parte appena il login e' pronto (di solito pochi decimi di secondo, senza rete).
// Intanto si controlla online che l'account sia ancora quello del coach e che non
// ci sia una versione nuova: se l'accesso non e' piu' valido si cancella tutto, se
// c'e' una versione nuova compare un avviso per ricaricare.
const K_VER = 'rs_versioni', K_UID = 'rs_versioni_uid';
const leggiLS = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const scriviLS = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) {} };
const svuotaTutto = () => { scriviLS(K_VER, null); scriviLS(K_UID, null); return svuotaCopia(); };
async function inCopia(tipo, k) {
  const ver = VERSIONI && VERSIONI[tipo] && VERSIONI[tipo][k];
  if (!ver) return false;
  try { const c = await caches.open(CACHE); const m = await c.match('https://rs-cache.invalid/' + tipo + '/' + k); return !!(m && m.headers.get('x-ver') === ver); }
  catch (e) { return false; }
}
function avvisoNuovo() {
  if (document.getElementById('rs-nuovo')) return;
  const b = document.createElement('button');
  b.id = 'rs-nuovo';
  b.textContent = 'Aggiornamento disponibile · Ricarica';
  b.style.cssText = 'position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:2147483646;padding:10px 16px;border-radius:999px;border:0;' +
    'background:#7c3aed;color:#fff;font:600 13px Inter,system-ui,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.35);cursor:pointer';
  b.onclick = () => location.reload();
  document.documentElement.appendChild(b);
}
// cosa usa questa pagina: la pagina stessa, i dati Fiorentina e i file privati che carica
function usatiDallaPagina() {
  const u = [];
  if (GUSCIO) u.push(['pagine', chiave(GUSCIO.content)]);
  document.querySelectorAll('script[data-fio]').forEach(s => u.push(['fio_dati', s.getAttribute('data-fio')]));
  document.querySelectorAll('script[type="text/rs-dopo"][data-fio]').forEach(s => u.push(['fio_dati', s.getAttribute('data-fio')]));
  PRIVATI.forEach(n => u.push(['pagine', chiave(n)]));
  return u;
}

if (SENZA_LOGIN) {
  avvia();
} else {
  let montata = null;
  try { const v = JSON.parse(leggiLS(K_VER) || 'null'); if (v && typeof v === 'object') VERSIONI = v; } catch (e) {}
  const uidCopia = leggiLS(K_UID);
  // la pagina si prepara subito dalla copia (senza far partire nulla) mentre il login si carica
  if (GUSCIO && VERSIONI && uidCopia) {
    montata = inCopia('pagine', chiave(GUSCIO.content)).then(ok => ok ? montaPagina().then(() => true) : false).catch(() => false);
  } else {
    velo('<div style="color:#a0a0b8">Controllo accesso...</div>');
  }
  onAuthStateChanged(auth, async user => {
    if (!user) { await svuotaTutto(); if (montata) { location.reload(); return; } chiediAccesso(''); return; }
    window.rsEsci = () => svuotaTutto().then(() => signOut(auth)).then(() => location.reload());
    const veloce = !!(VERSIONI && uidCopia && uidCopia === user.uid);
    let nuove = null;
    const controllo = (async () => {
      const v = await caricaVersioni();
      if (v === null) return 'negato';
      nuove = v;
      const prima = VERSIONI;
      scriviLS(K_VER, JSON.stringify(v)); scriviLS(K_UID, user.uid);
      if (prima) {
        const cambiato = usatiDallaPagina().some(([t, k]) => ((prima[t] || {})[k] || '') !== ((v[t] || {})[k] || ''));
        if (cambiato) return 'nuovo';
      }
      VERSIONI = v;
      return 'ok';
    })().catch(() => 'rete');

    if (!veloce) {
      const esito = await controllo;
      if (esito === 'negato') { await svuotaTutto(); if (montata) { location.reload(); return; } negato(user); return; }
      if (esito === 'nuovo' && montata && await montata) { location.reload(); return; }
      if (nuove) VERSIONI = nuove;
      if (esito === 'rete' && !VERSIONI) { velo('<div>Rete non raggiungibile.</div><button style="' + BTN + '" onclick="location.reload()">Riprova</button>'); return; }
      if (montata) await montata.catch(() => {});
      montata = null;
    } else {
      // il controllo online continua da solo: se l'accesso non vale piu' si chiude tutto
      controllo.then(async esito => {
        if (esito === 'negato') { await svuotaTutto(); location.reload(); }
        else if (esito === 'nuovo') avvisoNuovo();
      });
    }
    if (GUSCIO) {
      let ok = montata ? await montata : false;
      if (!ok) {
        try { await montaPagina(); }
        catch (e) { velo('<div>Pagina non disponibile.</div><button style="' + BTN + '" onclick="location.reload()">Riprova</button>'); return; }
      }
    }
    await avvia();
    indiceProgrammi();
  });
}
