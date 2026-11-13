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
  v.querySelector('#rs-esci').onclick = () => svuotaCopia().then(() => signOut(auth));
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
// Gli script partono a pagina gia' caricata: chi aspetta "DOMContentLoaded" o
// "load" verrebbe saltato, quindi li si chiama subito dopo.
function eventiTardivi() {
  const tardi = (bersaglio, tipo, pronto) => {
    const orig = bersaglio.addEventListener.bind(bersaglio);
    bersaglio.addEventListener = function(t, fn, opt) {
      if (t === tipo && pronto() && typeof fn === 'function') { setTimeout(() => fn.call(bersaglio, new Event(t)), 0); return; }
      return orig(t, fn, opt);
    };
  };
  tardi(document, 'DOMContentLoaded', () => document.readyState !== 'loading');
  tardi(window, 'load', () => document.readyState === 'complete');
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
  // si parte con tutti gli scaricamenti insieme (prima uno dopo l'altro)
  for (const el of lista) {
    if (el.getAttribute('data-fio')) datoFio(el.getAttribute('data-fio'));
    else if (privatoDi(el)) testoPrivato(privatoDi(el));
  }
  for (const vecchio of lista) {
    const tipo = vecchio.getAttribute('data-tipo') || '';
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
  document.documentElement.classList.remove('rs-chiuso');
  const v = document.getElementById('rs-porta');
  if (v) v.remove();
  try { performance.mark('rs-pronto'); } catch (e) {}
}

// Indice dei programmi per le atlete: ognuna legge solo i propri.
// programs/<id>/assignedTo/<atleta> -> prog_idx/<atleta>/<id> = true.
// Lo tiene aggiornato la pagina coach dove si assegnano i programmi.
async function indiceProgrammi() {
  if (SENZA_LOGIN || !/\/(index|builder)\.html$|\/coach\/?$/.test(location.pathname)) return;
  const giro = async () => {
    try {
      const t = await gettone();
      const r = await fetchVero(DB + '/programs.json?auth=' + encodeURIComponent(t), { cache: 'no-store' });
      if (!r.ok) return;
      const P = (await r.json()) || {};
      const idx = {};
      Object.entries(P).forEach(([pid, p]) => {
        Object.entries((p && p.assignedTo) || {}).forEach(([aid, on]) => {
          if (on) (idx[aid] = idx[aid] || {})[pid] = true;
        });
      });
      const firma = JSON.stringify(idx);
      if (firma === indiceProgrammi.ultimo) return;
      await fetchVero(DB + '/prog_idx.json?auth=' + encodeURIComponent(t), { method: 'PUT', body: firma });
      indiceProgrammi.ultimo = firma;
    } catch (e) {}
  };
  setTimeout(giro, 5000);
  setInterval(giro, 300000);
  window.addEventListener('pagehide', giro);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') giro(); });
}

if (SENZA_LOGIN) {
  avvia();
} else {
  velo('<div style="color:#a0a0b8">Controllo accesso...</div>');
  onAuthStateChanged(auth, async user => {
    if (!user) { chiediAccesso(''); return; }
    try {
      await user.getIdToken();
      VERSIONI = await caricaVersioni();
      if (VERSIONI === null) { await svuotaCopia(); negato(user); return; }
    } catch (e) {
      velo('<div>Rete non raggiungibile.</div><button style="' + BTN + '" onclick="location.reload()">Riprova</button>');
      return;
    }
    window.rsEsci = () => svuotaCopia().then(() => signOut(auth)).then(() => location.reload());
    if (GUSCIO) {
      try { await montaPagina(); }
      catch (e) { velo('<div>Pagina non disponibile.</div><button style="' + BTN + '" onclick="location.reload()">Riprova</button>'); return; }
    }
    await avvia();
    indiceProgrammi();
  });
}
