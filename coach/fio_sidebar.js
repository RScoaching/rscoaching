// RS.Coaching - Sidebar area Fiorentina - Premium Glass, ember + viola
// Espone gli stessi nomi globali della sidebar coach (SIDEBAR_HTML / SIDEBAR_CSS /
// markActiveNav / initSidebarToggle) cosi' le pagine Fiorentina la montano allo stesso modo.
window.SIDEBAR_HTML = `
<div class="sb-mob-bar" id="sb-mob-bar">
  <button class="sb-ham" id="sb-ham-btn" aria-label="Apri menu">&#9776;</button>
  <div class="fio-brand sm">
    <img class="fio-crest" src="./fiorentina.png" alt="Stemma Fiorentina"
      onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'fio-crest fio-crest-fb',textContent:'ACF'}))">
    <div class="fio-word">FIORENTINA</div>
  </div>
</div>
<div class="sb-mob-overlay" id="sb-mob-ov"></div>
<div class="sb-edge" id="sb-edge" aria-hidden="true"><span class="sb-edge-grip"></span></div>
<div class="sidebar" id="sb-sidebar">
  <div class="sb-top">
    <button class="fio-season-trigger" id="fio-season-trigger" aria-expanded="false" aria-controls="fio-season-menu" aria-label="Cambia stagione">
      <div class="fio-brand">
        <img class="fio-crest" src="./fiorentina.png" alt="Stemma Fiorentina"
          onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'fio-crest fio-crest-fb',textContent:'ACF'}))">
        <div class="fio-word">FIORENTINA</div>
      </div>
      <svg class="fio-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="logo-sub">Primavera U19 F <span class="ls-dot">&#183;</span> <span id="fio-season-tag">Stagione 2025/26</span></div>
    <div class="fio-season-menu" id="fio-season-menu" role="menu" hidden>
      <button class="fio-season-opt" data-season="25-26" role="menuitemradio" aria-checked="true">
        <span class="fso-body">
          <span class="fso-name">Stagione 2025/26</span>
          <span class="fso-note">Archivio completo</span>
        </span>
        <span class="fso-meta">Chiusa</span>
        <svg class="fso-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      </button>
      <button class="fio-season-opt" data-season="26-27" role="menuitemradio" aria-checked="false">
        <span class="fso-body">
          <span class="fso-name">Stagione 2026/27</span>
          <span class="fso-note">Si parte lunedi</span>
        </span>
        <span class="fso-meta live">Nuova</span>
        <svg class="fso-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      </button>
    </div>
  </div>
  <div class="nav-s">
    <div class="nav-lbl">Giornata</div>
    <a class="nav-item" aria-label="Oggi" href="./piano.html" data-page="oggi">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>
      <span class="nav-lbl-text">Oggi</span>
    </a>
    <div class="nav-lbl">Monitoraggio</div>
    <a class="nav-item" aria-label="Carico" href="./carico.html" data-page="carico">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg></span>
      <span class="nav-lbl-text">Carico</span>
    </a>
    <a class="nav-item" aria-label="Sessioni" href="./hybrid.html" data-page="sessioni">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="M9 12h6"/><path d="M9 16h4"/></svg></span>
      <span class="nav-lbl-text">Sessioni</span>
    </a>
    <div class="nav-lbl">Squadra</div>
    <a class="nav-item" aria-label="Atlete" href="./atlete.html" data-page="atlete">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3.2"/><path d="M15 6.2a3 3 0 0 1 0 5.6"/><path d="M4 20c0-3.3 2.2-5.6 5-5.6s5 2.3 5 5.6"/><path d="M17 14.6c1.9.6 3 2.6 3 5.4"/></svg></span>
      <span class="nav-lbl-text">Atlete</span>
    </a>
    <a class="nav-item" aria-label="Test" href="./piani.html" data-page="test">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4"/><path d="M12 14l3-3"/><circle cx="12" cy="14" r="8"/></svg></span>
      <span class="nav-lbl-text">Test</span>
    </a>
    <div class="nav-lbl">Programmazione</div>
    <a class="nav-item" aria-label="Esercitazioni" href="./esercitazioni.html" data-page="esercitazioni">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4v-.8A1.2 1.2 0 0 1 10.2 2h3.6A1.2 1.2 0 0 1 15 3.2V4"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h4"/></svg></span>
      <span class="nav-lbl-text">Esercitazioni</span>
    </a>
    <a class="nav-item" aria-label="Forza" href="./forza.html" data-page="forza">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9v6"/><path d="M6 7v10"/><path d="M18 7v10"/><path d="M21 9v6"/><path d="M6 12h12"/></svg></span>
      <span class="nav-lbl-text">Forza</span>
    </a>
    <a class="nav-item" aria-label="Prevenzione" href="./view.html" data-page="prevenzione">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg></span>
      <span class="nav-lbl-text">Prevenzione</span>
    </a>
    <a class="nav-item" aria-label="Calendario" href="./calendario.html" data-page="calendario">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M4 10h16"/></svg></span>
      <span class="nav-lbl-text">Calendario</span>
    </a>
    <div class="nav-lbl">Output</div>
    <a class="nav-item" aria-label="Report" href="./report.html" data-page="report">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg></span>
      <span class="nav-lbl-text">Report</span>
    </a>
  </div>
  <div class="sb-foot">
    <button class="sb-sync" id="fio-sync-btn" type="button" aria-label="Rileggi i dati dalla cartella">
      <svg class="sb-sync-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-7.6-4.2"/><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 7.6 4.2"/><path d="M20 3v5h-5"/><path d="M4 21v-5h5"/></svg>
      <span class="sb-sync-txt"><b>Aggiorna dati</b><em id="fio-sync-when">--</em></span>
    </button>
    <a class="sb-switch" href="../index.html" aria-label="Torna alla scelta dell'area">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
      <span>Cambia area</span>
    </a>
    <div class="sb-cred"><strong>Raoul Simon</strong>Preparatore Atletico</div>
  </div>
</div>`;

window.markActiveNav = function(pageId) {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.remove('active');
    if (el.dataset.page === pageId && !el.classList.contains('soon')) el.classList.add('active');
  });
};

// Stagione attiva (condivisa fra tutte le pagine, persistita solo su questo dispositivo).
window.FIO_STAGIONI = ['25-26', '26-27'];
window.getStagione = function() {
  var s = null;
  try { s = localStorage.getItem('fio_stagione'); } catch (e) {}
  return (window.FIO_STAGIONI.indexOf(s) >= 0) ? s : '25-26';
};
window.setStagione = function(v) {
  if (window.FIO_STAGIONI.indexOf(v) < 0) return;
  try { localStorage.setItem('fio_stagione', v); } catch (e) {}
  document.dispatchEvent(new CustomEvent('fio:stagione', { detail: { stagione: v } }));
};
window.stagioneLabel = function(v) {
  v = v || window.getStagione();
  return v === '26-27' ? 'Stagione 2026/27' : 'Stagione 2025/26';
};

// ---------------------------------------------------------------------------
// Controllo di plausibilita' dei dati GPS.
// Ogni tanto un giubbotto sbaglia una lettura e restituisce un valore
// impossibile: il 15/11 Fontana risulta a 43,3 km/h, quando in tutta la
// stagione nessuna supera i 30,6. Un solo dato sballato alza la media della
// settimana, del mese e della squadra, e resta li' come record personale.
// Qui i valori fuori scala si tolgono e le righe di totale che li contenevano
// si rifanno con la stessa formula del file (somma per le metriche cumulate,
// media per le altre). I file nella cartella non si toccano: la pulizia vive
// nell'app e resta valida anche dopo aver rigenerato i dati.
// ---------------------------------------------------------------------------
window.FIO_LIMITI = {
  'Minuti': 200,
  'Dist tot': 20000,
  'Dist (m/min)': 250,
  'D>20 W/kg': 8000,
  '%Dist PM>20W/Kg': 100,
  'DIST > 23km/h': 2000,
  'N az. int. /min': 40,
  'N ACC > 3 m/s^2': 200,
  'N DEC < -3 m/s^2': 200,
  'SMax (kmh)': 34,
  '% Dist Eq': 100,
  '%Dist Acc>3m/s2': 100,
  '%DIst Dec <-3 m/s2': 100,
  'Dist 20-23 Km/h': 3000
};
window.FIO_ANOMALIE = [];
window.fioSanitizeGPS = function() {
  var S = window.SNAP;
  if (!S || !S.metrics_full || S.fio_pulito) return window.FIO_ANOMALIE;
  S.fio_pulito = true;

  var SF = S.sum_flags || [];
  var MS = S.metrics_short || S.metrics_full;
  var MOD = S.model || [];

  var lim = [];
  S.metrics_full.forEach(function(nome, i) {
    var mx = window.FIO_LIMITI[nome];
    if (typeof mx === 'number') lim.push({ i: i, max: mx, lab: MS[i] || nome });
  });
  if (!lim.length) return window.FIO_ANOMALIE;

  var out = window.FIO_ANOMALIE;
  var sessSporche = {};    // 'chiaveMese|giorno' -> indici da rifare sulla riga squadra
  var mesiSporchi = {};    // 'atleta|chiaveMese' -> indici da rifare nei totali

  function segna(mappa, chiave, i) {
    if (!mappa[chiave]) mappa[chiave] = {};
    mappa[chiave][i] = true;
  }
  function indici(o) {
    return Object.keys(o || {}).map(function(k) { return +k; });
  }

  // marchia la riga: serve a rifare solo i totali che contenevano quel valore,
  // tutto il resto del file resta identico a come lo ha scritto lo script
  function marca(r, i) {
    if (!r.fio_out) r.fio_out = {};
    r.fio_out[i] = true;
  }
  function tocca(src, i) {
    for (var k = 0; k < src.length; k++) { if (src[k].fio_out && src[k].fio_out[i]) return true; }
    return false;
  }

  // 1. si tolgono i valori fuori scala dalle righe di seduta e di partita
  function pulisci(rows, chi, mkey, mese) {
    (rows || []).forEach(function(r) {
      if (!r || !r.v || (r.type !== 'day' && r.type !== 'match')) return;
      lim.forEach(function(L) {
        var v = r.v[L.i];
        if (v == null || !(v > L.max)) return;
        r.v[L.i] = null;
        marca(r, L.i);
        out.push({ atleta: chi, mese: mese, giorno: r.label || '', metrica: L.lab, valore: v, limite: L.max });
        segna(mesiSporchi, chi + '|' + mkey, L.i);
        segna(sessSporche, mkey + '|' + (r.label || ''), L.i);
      });
    });
  }

  // 2. si rifanno i totali di settimana, di mese e i rapporti sul modello
  function ricalcola(rows, idx) {
    if (!idx.length) return;
    var wkDay = [], wkAll = [], moAll = [], ultimo = {};
    (rows || []).forEach(function(r) {
      if (!r || !r.v) return;
      if (r.type === 'wk_header') { wkDay = []; wkAll = []; return; }
      if (r.type === 'day') { wkDay.push(r); wkAll.push(r); moAll.push(r); return; }
      if (r.type === 'match') { wkAll.push(r); moAll.push(r); return; }
      var src = null;
      if (r.type === 'tot_train') src = wkDay;
      else if (r.type === 'tot_week') src = wkAll;
      else if (r.type === 'tot_month') src = moAll;
      if (src) {
        idx.forEach(function(i) {
          if (!tocca(src, i)) return;
          var s = 0, n = 0;
          src.forEach(function(x) { if (x.v[i] != null) { s += x.v[i]; n++; } });
          r.v[i] = n ? Math.round((SF[i] ? s : s / n) * 10) / 10 : null;
          marca(r, i);
        });
        ultimo[r.type] = r;
        return;
      }
      var base = null;
      if (r.type === 'valmatch_train') base = ultimo.tot_train;
      else if (r.type === 'valmatch_week') base = ultimo.tot_week;
      else if (r.type === 'valmatch_month') base = ultimo.tot_month;
      if (!base) return;
      idx.forEach(function(i) {
        if (!base.fio_out || !base.fio_out[i]) return;
        var b = base.v[i], m = MOD[i];
        r.v[i] = (b == null || !m) ? null : Math.round(b / m * 100) / 100;
      });
    });
  }

  // atlete
  Object.keys(S.players || {}).forEach(function(nome) {
    (S.players[nome].months || []).forEach(function(m) {
      pulisci(m.rows, nome, m.key || '', m.title || '');
    });
  });
  // squadra: righe di seduta e archivio partite
  (S.team && S.team.months || []).forEach(function(m) {
    pulisci(m.rows, 'Squadra', m.key || '', m.title || '');
  });
  (S.team && S.team.matches || []).forEach(function(g) {
    if (!g || !g.v) return;
    lim.forEach(function(L) {
      var v = g.v[L.i];
      if (v == null || !(v > L.max)) return;
      g.v[L.i] = null;
      out.push({ atleta: 'Squadra', mese: '', giorno: g.sigla || g.data || '', metrica: L.lab, valore: v, limite: L.max });
    });
  });

  if (!out.length) return out;

  // 3. la riga di squadra e' la media delle atlete di quella seduta:
  //    se e' saltato un valore va rifatta, anche quando il totale sembrava normale
  Object.keys(sessSporche).forEach(function(k) {
    var p = k.split('|'), mkey = p[0], lab = p[1];
    var tm = (S.team && S.team.months || []).filter(function(m) { return (m.key || '') === mkey; })[0];
    if (!tm) return;
    var riga = (tm.rows || []).filter(function(r) {
      return (r.type === 'day' || r.type === 'match') && (r.label || '') === lab;
    })[0];
    if (!riga || !riga.v) return;
    indici(sessSporche[k]).forEach(function(i) {
      var s = 0, n = 0;
      Object.keys(S.players || {}).forEach(function(nome) {
        var pm = (S.players[nome].months || []).filter(function(m) { return (m.key || '') === mkey; })[0];
        if (!pm) return;
        (pm.rows || []).forEach(function(r) {
          if ((r.type !== 'day' && r.type !== 'match') || (r.label || '') !== lab) return;
          if (r.v && r.v[i] != null) { s += r.v[i]; n++; }
        });
      });
      riga.v[i] = n ? Math.round(s / n * 10) / 10 : null;
      marca(riga, i);
      segna(mesiSporchi, 'Squadra|' + mkey, i);
    });
  });

  // 4. totali rifatti solo nei mesi toccati, il resto del file resta com'era
  Object.keys(mesiSporchi).forEach(function(k) {
    var p = k.split('|'), chi = p[0], mkey = p[1];
    var mesi = chi === 'Squadra'
      ? (S.team && S.team.months || [])
      : ((S.players && S.players[chi] && S.players[chi].months) || []);
    var m = mesi.filter(function(x) { return (x.key || '') === mkey; })[0];
    if (m) ricalcola(m.rows, indici(mesiSporchi[k]));
  });

  return out;
};
window.fioSanitizeGPS();

// ---------------------------------------------------------------------------
// Dati per stagione.
// I file dati contengono due blocchi: la 25/26 in testa e la 26/27 dopo il
// marcatore, rigenerata dallo script locale che legge la cartella dei GPS.
// Quando la stagione attiva e' la 26/27 si sostituiscono i dati in memoria con
// il blocco nuovo; se quel blocco non c'e' ancora, o e' vuoto, si azzera tutto
// e resta soltanto il modello prestativo, cioe' la media partite della 25/26.
// Questa funzione viene eseguita prima degli script di pagina, quindi ogni
// pagina legge automaticamente i dati giusti senza modifiche locali.
// ---------------------------------------------------------------------------
window.FIO_CLEAN_SEASON = false;
window.applyStagioneData = function() {
  var st = window.getStagione();
  if (st !== '26-27') { window.FIO_CLEAN_SEASON = false; return; }
  if (window.FIO_SEASON_APPLIED === st) return;
  window.FIO_SEASON_APPLIED = st;
  var id = '2026-27';

  // Copia il blocco nuovo dentro l'oggetto gia' in uso, cosi' i riferimenti
  // presi dalle pagine restano validi.
  function overlay(dst, src) {
    if (!dst || !src) return false;
    Object.keys(src).forEach(function(k) { dst[k] = src[k]; });
    return true;
  }

  var S = window.SNAP;
  if (S) {
    if (!overlay(S, window.SNAP_2627)) {
      S.generato = '';
      S.model_from = '2025-26';         // provenienza del modello prestativo
      if (S.team) { S.team.months = []; S.team.matches = []; }
      if (S.players) {
        Object.keys(S.players).forEach(function(n) {
          if (S.players[n]) S.players[n].months = [];
        });
      }
      // S.model NON si tocca: e' il modello prestativo di riferimento.
    }
    S.stagione = id;
  }

  var C = window.CAL;
  if (C) {
    if (!overlay(C, window.CAL_2627)) {
      C.generato = '';
      C.days = []; C.fixtures = [];
      C.n_sedute = 0; C.n_partite_giocate = 0; C.n_fixtures = 0;
      C.range = { min: '2026-07-27', max: '2027-05-31' };
    }
    C.stagione = id;
  }

  var E = window.ESERC;
  if (E) {
    if (!overlay(E, window.ESERC_2627)) {
      E.generato = '';
      E.sessions = []; E.n_sessions = 0; E.n_drills = 0;
    }
    E.stagione = id;
  }

  var F = window.FORZA;
  if (F) {
    F.stagione = id; F.generato = '';
    F.entries = []; F.n_entries = 0; F.n_sessions = 0;
    // F.patterns e F.roster restano: sono libreria, non dati di stagione.
    var T = window.TEST_2627;
    if (T && T.generato) F.generato = T.generato;
  }

  window.fioSeedTestRegister();

  // L'avviso di archivio vuoto resta solo finche' non arriva il primo dato.
  // Ogni pagina carica solo i file che le servono, quindi si contano soltanto i
  // blocchi 26/27 effettivamente presenti.
  var n = 0;
  if (window.SNAP_2627 && window.SNAP_2627.team) {
    n += (window.SNAP_2627.team.months || []).length;
  }
  if (window.CAL_2627)   n += (window.CAL_2627.days || []).length;
  if (window.ESERC_2627) n += (window.ESERC_2627.sessions || []).length;
  if (window.TEST_2627)  n += (window.TEST_2627.n_valori || 0);
  window.FIO_CLEAN_SEASON = (n === 0);
};

// Test presi dal foglio nella cartella della stagione.
// Il foglio comanda: a ogni Aggiorna i valori che contiene vengono riscritti nel
// registro e le atlete nuove compaiono. Quello inserito a mano resta per tutte
// le prove che nel foglio non ci sono. Il registro e' lo stesso usato dalle
// pagine Test, Atleta e Sintesi, quindi il dato arriva ovunque.
window.fioSeedTestRegister = function() {
  var T = window.TEST_2627;
  if (!T || !T.reg) return;
  var key = 'fio_test_register_v2_26-27';
  var reg = {};
  try {
    var raw = JSON.parse(localStorage.getItem(key));
    if (raw && typeof raw === 'object') reg = raw;
  } catch (e) {}
  Object.keys(T.reg).forEach(function(k) {
    var src = T.reg[k] || {};
    var bag = reg[k] || (reg[k] = {});
    Object.keys(src).forEach(function(n) {
      var e = src[n];
      if (e && e.v !== null && e.v !== undefined) bag[n] = { v: e.v, d: e.d || '' };
    });
  });
  try { localStorage.setItem(key, JSON.stringify(reg)); } catch (e) {}
};

// Avviso in cima alla pagina quando la stagione e' ancora vuota.
window.paintSeasonBanner = function() {
  var host = document.querySelector('.wrap');
  var old  = document.getElementById('fio-season-banner');
  if (old) old.parentNode.removeChild(old);
  if (!host || !window.FIO_CLEAN_SEASON) return;
  var b = document.createElement('div');
  b.id = 'fio-season-banner';
  b.className = 'fio-season-banner';
  b.innerHTML =
    '<span class="fsb-tag">26/27</span>' +
    '<span class="fsb-txt"><b>Stagione nuova, archivio vuoto.</b> ' +
    'Carico, sedute, calendario ed esercitazioni si popolano man mano che inserisci gli allenamenti. ' +
    'Resta attivo il modello prestativo, cioe\' la media partite della 25/26.</span>';
  host.insertBefore(b, host.firstChild);
};

// ---------------------------------------------------------------------------
// Aggiornamento dati dall'app.
// I file dati sono statici e vengono rigenerati in locale dallo script Python
// quando si scaricano i GPS nella cartella. Il browser pero' li tiene in cache,
// quindi qui li si rilegge forzando il bypass della cache e poi si ricarica la
// pagina, cosi' il dato nuovo si vede senza svuotare la cronologia a mano.
// ---------------------------------------------------------------------------
window.FIO_DATA_FILES = [
  'carico_data.js', 'calendario_data.js', 'esercitazioni_data.js', 'forza_data.js'
];
window.fioDataStamp = function() {
  if (window.FIO_CLEAN_SEASON) return 'archivio vuoto';
  var src = [window.SNAP, window.CAL, window.ESERC, window.FORZA];
  var s = '';
  for (var i = 0; i < src.length && !s; i++) {
    if (src[i] && src[i].generato) s = String(src[i].generato).trim();
  }
  return s ? ('agg. ' + s) : 'rileggi dalla cartella';
};
window.fioRefreshData = function() {
  var btn = document.getElementById('fio-sync-btn');
  var lab = document.getElementById('fio-sync-when');
  if (!btn || btn.classList.contains('busy')) return;
  btn.classList.add('busy');
  btn.disabled = true;
  if (lab) lab.textContent = 'rilettura in corso';
  var t = Date.now();
  var jobs = window.FIO_DATA_FILES.map(function(f) {
    return fetch('./' + f + '?ts=' + t, { cache: 'reload' });
  });
  Promise.all(jobs).then(function() {
    location.reload();
  })['catch'](function() {
    btn.classList.remove('busy');
    btn.disabled = false;
    if (lab) lab.textContent = 'rilettura fallita, riprova';
    setTimeout(function() { if (lab) lab.textContent = window.fioDataStamp(); }, 3200);
  });
};

window.initSidebarToggle = function() {
  window.applyStagioneData();
  window.paintSeasonBanner();
  const sync = document.getElementById('fio-sync-btn');
  const syncWhen = document.getElementById('fio-sync-when');
  if (sync) {
    if (syncWhen) syncWhen.textContent = window.fioDataStamp();
    sync.addEventListener('click', window.fioRefreshData);
    document.addEventListener('fio:stagione', function() {
      if (syncWhen) syncWhen.textContent = window.fioDataStamp();
    });
  }
  const ham = document.getElementById('sb-ham-btn');
  const ov  = document.getElementById('sb-mob-ov');
  const sb  = document.getElementById('sb-sidebar');
  if (ham && ov && sb) {
    const openSb  = () => { sb.classList.add('open'); ov.classList.add('open'); };
    const closeSb = () => { sb.classList.remove('open'); ov.classList.remove('open'); };
    ham.addEventListener('click', openSb);
    ov.addEventListener('click', closeSb);
  }
  // Selettore stagione
  const trg  = document.getElementById('fio-season-trigger');
  const menu = document.getElementById('fio-season-menu');
  if (trg && menu) {
    const opts = menu.querySelectorAll('.fio-season-opt');
    const tag  = document.getElementById('fio-season-tag');
    const paint = () => {
      const s = window.getStagione();
      if (tag) tag.textContent = window.stagioneLabel(s);
      opts.forEach(o => {
        const on = o.dataset.season === s;
        o.classList.toggle('on', on);
        o.setAttribute('aria-checked', on ? 'true' : 'false');
      });
    };
    const openMenu  = () => { menu.hidden = false; trg.setAttribute('aria-expanded', 'true'); };
    const closeMenu = () => { menu.hidden = true;  trg.setAttribute('aria-expanded', 'false'); };
    trg.addEventListener('click', (e) => { e.stopPropagation(); menu.hidden ? openMenu() : closeMenu(); });
    opts.forEach(o => o.addEventListener('click', () => {
      if (o.dataset.season === window.getStagione()) { closeMenu(); return; }
      window.setStagione(o.dataset.season);
      paint();
      closeMenu();
      // ricarico la pagina: i dati di stagione vanno riletti da zero
      setTimeout(function() { location.reload(); }, 120);
    }));
    document.addEventListener('click', (e) => {
      if (!menu.hidden && !menu.contains(e.target) && !trg.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) closeMenu(); });
    document.addEventListener('fio:stagione', paint);
    paint();
  }
};

window.SIDEBAR_CSS = `
.sidebar{
  width:218px;
  background:rgba(20,16,23,.90);
  backdrop-filter:blur(28px) saturate(1.6);
  -webkit-backdrop-filter:blur(28px) saturate(1.6);
  border-right:1px solid rgba(255,255,255,.06);
  display:flex;flex-direction:column;
  position:sticky;top:0;height:100vh;
  flex-shrink:0;overflow-y:auto;z-index:10;
}
.sb-top{
  padding:22px 18px 16px;
  border-bottom:1px solid rgba(255,255,255,.05);
  flex-shrink:0;
}
/* Fiorentina brand lockup (crest + wordmark) */
.fio-brand{display:flex;align-items:center;gap:10px;}
.fio-crest{width:32px;height:32px;flex-shrink:0;object-fit:contain;
  filter:drop-shadow(0 2px 9px rgba(139,92,246,.45));}
.fio-crest-fb{display:grid;place-items:center;border-radius:9px;
  background:rgba(139,92,246,.14);border:1px solid rgba(139,92,246,.32);
  color:#A78BFA;font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:1px;
  filter:none;}
.fio-word{font-family:'Bebas Neue',sans-serif;line-height:1;letter-spacing:1.6px;
  font-size:20px;color:#F4F1EC;white-space:nowrap;}
.fio-brand.sm .fio-crest{width:26px;height:26px;}
.fio-brand.sm .fio-word{font-size:17px;letter-spacing:1.2px;}
.logo-sub{
  font-size:9px;color:rgba(244,241,236,.4);
  letter-spacing:1.4px;margin-top:8px;text-transform:uppercase;
}
.logo-sub .ls-dot{color:rgba(255,106,46,.7);margin:0 2px;}
#fio-season-tag{color:rgba(255,178,122,.85);}
/* Selettore stagione */
.fio-season-trigger{
  display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;
  padding:0;margin:0;border:0;background:none;color:inherit;font:inherit;text-align:left;
  cursor:pointer;transition:opacity .2s ease;
}
.fio-season-trigger:hover{opacity:.9;}
.fio-caret{width:15px;height:15px;flex-shrink:0;color:rgba(248,250,255,.32);
  transition:transform .26s cubic-bezier(.4,0,.2,1),color .2s ease;}
.fio-season-trigger:hover .fio-caret{color:rgba(248,250,255,.6);}
.fio-season-trigger[aria-expanded="true"] .fio-caret{transform:rotate(180deg);color:#FF6A2E;}
.fio-season-menu{
  margin-top:12px;display:flex;flex-direction:column;gap:5px;
  animation:fio-season-in .26s cubic-bezier(.16,1,.3,1);
}
.fio-season-menu[hidden]{display:none;}
@keyframes fio-season-in{from{opacity:0;transform:translateY(-5px);}to{opacity:1;transform:translateY(0);}}
.fio-season-opt{
  display:flex;align-items:center;gap:8px;width:100%;
  padding:8px 10px;border-radius:9px;cursor:pointer;text-align:left;
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);
  transition:background .18s ease,border-color .18s ease,transform .18s ease;
}
.fio-season-opt:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.13);}
.fio-season-opt:active{transform:scale(.985);}
.fio-season-opt.on{
  background:linear-gradient(90deg,rgba(255,106,46,.15),rgba(255,106,46,.04));
  border-color:rgba(255,106,46,.28);
}
.fso-body{flex:1;display:flex;flex-direction:column;gap:2px;min-width:0;}
.fso-name{font-size:12px;font-weight:600;color:rgba(248,250,255,.68);line-height:1.15;letter-spacing:.2px;}
.fio-season-opt.on .fso-name{color:#F4F1EC;}
.fso-note{font-size:9.5px;color:rgba(248,250,255,.32);line-height:1.1;}
.fio-season-opt.on .fso-note{color:rgba(255,178,122,.7);}
.fso-meta{font-size:8.5px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;
  color:rgba(248,250,255,.34);padding:2px 6px;border-radius:999px;
  background:rgba(255,255,255,.05);flex-shrink:0;}
.fso-meta.live{color:#C4B5FD;background:rgba(139,92,246,.16);border:1px solid rgba(139,92,246,.24);}
.fio-season-opt.on .fso-meta:not(.live){color:#FFB27A;background:rgba(255,106,46,.14);}
.fso-check{width:15px;height:15px;flex-shrink:0;color:#FF6A2E;opacity:0;transition:opacity .18s ease;}
.fio-season-opt.on .fso-check{opacity:1;}
@media(prefers-reduced-motion:reduce){
  .fio-season-menu{animation:none;}
  .fio-caret,.fio-season-opt{transition:none;}
}
/* Avviso stagione vuota (iniettato in cima a .wrap) */
.fio-season-banner{
  display:flex;align-items:flex-start;gap:11px;
  padding:12px 15px;margin:0 0 20px;border-radius:12px;
  background:rgba(139,92,246,.07);border:1px solid rgba(139,92,246,.22);
}
.fsb-tag{
  flex-shrink:0;font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:1px;
  line-height:1;padding:6px 8px 4px;border-radius:7px;
  color:#C4B5FD;background:rgba(139,92,246,.16);border:1px solid rgba(139,92,246,.26);
}
.fsb-txt{font-size:12.5px;line-height:1.55;color:rgba(248,250,255,.56);}
.fsb-txt b{color:rgba(248,250,255,.86);font-weight:600;}
@media print{ .fio-season-banner{display:none !important;} }
.nav-s{padding:10px 8px 0;flex:1;}
.nav-lbl{
  font-size:9px;font-weight:700;text-transform:uppercase;
  letter-spacing:2px;color:rgba(248,250,255,.16);
  padding:0 8px 4px;margin-top:16px;
}
.nav-item{
  display:flex;align-items:center;gap:10px;
  padding:9px 10px;font-size:12.5px;font-weight:500;
  color:rgba(248,250,255,.42);
  cursor:pointer;border-radius:10px;margin-bottom:2px;
  border-left:2px solid transparent;
  text-decoration:none;
  transition:color .2s cubic-bezier(.4,0,.2,1),background .2s cubic-bezier(.4,0,.2,1),transform .2s cubic-bezier(.4,0,.2,1);
}
.nav-item:not(.soon):hover{
  color:rgba(248,250,255,.82);
  background:rgba(255,255,255,.06);
  transform:translateX(2px);
}
.nav-item.active{
  color:#fff;
  background:linear-gradient(90deg,rgba(255,106,46,.16),rgba(255,106,46,.04));
  border-left-color:#FF6A2E;
  font-weight:600;
  box-shadow:inset 0 0 0 1px rgba(255,106,46,.14);
}
.nav-icon{display:inline-flex;align-items:center;justify-content:center;
  width:18px;height:18px;flex-shrink:0;opacity:.6;transition:opacity .2s;}
.nav-icon svg{width:17px;height:17px;}
.nav-item.active .nav-icon,.nav-item:not(.soon):hover .nav-icon{opacity:1;}
.nav-lbl-text{flex:1;}
/* voci future non attive */
.nav-item.soon{cursor:default;color:rgba(248,250,255,.28);}
.nav-item.soon .nav-icon{opacity:.4;}
.soon-pill{
  font-size:8.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;
  color:rgba(167,139,250,.9);background:rgba(139,92,246,.12);
  border:1px solid rgba(139,92,246,.26);border-radius:999px;padding:2px 7px;flex-shrink:0;
}
.sb-foot{
  padding:12px 14px 14px;
  border-top:1px solid rgba(255,255,255,.05);
  flex-shrink:0;display:flex;flex-direction:column;gap:10px;
}
.sb-sync{
  display:flex;align-items:center;gap:9px;width:100%;
  padding:9px 11px;border-radius:10px;text-align:left;
  font-family:inherit;cursor:pointer;
  color:rgba(255,178,122,.86);
  background:rgba(255,106,46,.09);border:1px solid rgba(255,106,46,.22);
  transition:color .18s ease,background .18s ease,border-color .18s ease,transform .1s ease;
}
.sb-sync:hover{color:#FFD2B4;background:rgba(255,106,46,.15);border-color:rgba(255,106,46,.34);}
.sb-sync:active{transform:scale(.98);}
.sb-sync[disabled]{cursor:progress;color:rgba(255,178,122,.55);}
.sb-sync-ic{width:16px;height:16px;flex-shrink:0;opacity:.9;}
.sb-sync.busy .sb-sync-ic{animation:fio-spin .9s linear infinite;}
@keyframes fio-spin{to{transform:rotate(360deg);}}
@media (prefers-reduced-motion:reduce){
  .sb-sync.busy .sb-sync-ic{animation:none;opacity:.5;}
  .sb-sync{transition:none;}
}
.sb-sync-txt{display:flex;flex-direction:column;gap:1px;min-width:0;}
.sb-sync-txt b{font-size:12px;font-weight:600;letter-spacing:.01em;}
.sb-sync-txt em{
  font-style:normal;font-size:9.5px;letter-spacing:.02em;
  color:rgba(248,250,255,.34);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
.sb-switch{
  display:flex;align-items:center;gap:9px;
  padding:9px 11px;border-radius:10px;
  font-size:12px;font-weight:600;color:rgba(248,250,255,.6);
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);
  text-decoration:none;
  transition:color .18s ease,background .18s ease,border-color .18s ease;
}
.sb-switch svg{width:16px;height:16px;opacity:.8;flex-shrink:0;}
.sb-switch:hover{color:#F4F1EC;background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.12);}
.sb-switch:active{transform:scale(.98);}
.sb-cred{font-size:10px;color:rgba(248,250,255,.18);line-height:1.7;padding:0 4px;}
.sb-cred strong{color:rgba(248,250,255,.34);display:block;font-size:11px;font-weight:600;}
/* -- Mobile bar -- */
.sb-mob-bar{
  display:none;position:fixed;top:0;left:0;right:0;height:52px;
  background:rgba(20,16,23,.96);backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(255,255,255,.06);
  align-items:center;padding:0 14px;gap:12px;z-index:600;
}
.sb-ham{
  background:none;border:none;color:rgba(248,250,255,.7);
  font-size:20px;cursor:pointer;padding:4px 6px;line-height:1;
  border-radius:6px;transition:background .15s;
}
.sb-ham:hover{background:rgba(255,255,255,.08);}
.sb-mob-overlay{
  display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:590;
}
.sb-mob-overlay.open{display:block;}
@media(max-width:900px){
  .sb-mob-bar{display:flex;}
  #sb-sidebar{
    display:none;position:fixed;top:0;left:0;height:100vh;
    z-index:595;transform:translateX(-100%);
    transition:transform .3s cubic-bezier(.4,0,.2,1);
  }
  #sb-sidebar.open{display:flex !important;transform:translateX(0);}
}
@media(min-width:901px){
  .sb-mob-bar{display:none !important;}
  .sb-mob-overlay{display:none !important;}
  /* dashboard a scomparsa: appare portando il mouse sul bordo sinistro */
  .sb-edge{
    display:block;position:fixed;left:0;top:0;width:20px;height:100vh;z-index:558;
  }
  .sb-edge-grip{
    position:absolute;left:0;top:50%;transform:translateY(-50%);
    width:5px;height:74px;border-radius:0 7px 7px 0;
    background:linear-gradient(180deg,rgba(255,106,46,.85),rgba(139,92,246,.85));
    box-shadow:0 0 16px rgba(255,106,46,.45);
    opacity:.5;transition:opacity .2s ease,width .2s ease;
  }
  .sb-edge:hover .sb-edge-grip{opacity:.95;width:6px;}
  #sb-sidebar{
    display:flex !important;position:fixed !important;left:0;top:0;height:100vh;
    transform:translateX(-102%);
    transition:transform .28s cubic-bezier(.4,0,.2,1),box-shadow .28s ease;
    box-shadow:0 0 0 rgba(0,0,0,0);z-index:560;
  }
  .sb-edge:hover ~ #sb-sidebar,
  #sb-sidebar:hover,
  #sb-sidebar:focus-within{
    transform:translateX(0);
    box-shadow:16px 0 48px rgba(0,0,0,.5);
  }
}
@media(max-width:900px){
  .sb-edge{display:none !important;}
}`;
