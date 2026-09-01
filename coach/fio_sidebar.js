// RS.Coaching - Sidebar area Fiorentina - Premium Glass, ember + viola
// Espone gli stessi nomi globali della sidebar coach (SIDEBAR_HTML / SIDEBAR_CSS /
// markActiveNav / initSidebarToggle) cosi' le pagine Fiorentina la montano allo stesso modo.

/* ==========================================================================
   ACCESSO ALL'AREA FIORENTINA
   Quattro persone, quattro chiavi diverse: mister, secondo, preparatore e
   Raoul. Si entra con email e password, poi con un codice di sei cifre che
   cambia ogni trenta secondi e si legge sull'app dell'autenticazione
   (Google Authenticator, Authy, le password dell'iPhone: vanno tutte bene).
   Questo file sta in ogni pagina Fiorentina, percio' il controllo vale anche
   per chi arriva da un indirizzo diretto senza passare dalla home.

   Una cosa va detta chiara. Qui sotto non c'e' nessun server: il sito e' un
   pacco di file appoggiati su GitHub, e il controllo gira dentro il browser.
   Tiene separate le quattro persone, chiude la porta a chi capita di qua per
   caso e a chi ha visto la password da sopra la spalla senza avere il
   telefono. Ma chi sa leggere il codice sorgente della pagina lo aggira.
   Per una porta vera serve un servizio di accesso esterno oppure il sito
   dentro un archivio privato: e' il passo dopo, non questo.

   ADESSO L'ACCESSO E' SPENTO. Il codice resta tutto qui sotto, intero e
   funzionante, ma nessuno lo incontra: si apre l'area e si entra. E' una
   scelta, non una dimenticanza. Una porta va bene solo se ti riconosce e ti
   lascia in pace per un mese: finche' rischia di chiedere email, password e
   codice a ogni apertura, da' piu' fastidio che protezione. Si riaccende
   cambiando la riga qui sotto in "true", e sara' il giorno in cui il
   riconoscimento dura davvero trenta giorni.
   ========================================================================== */
(function() {
  'use strict';

  var ACCESSO = false;   // porta spenta: metti true per rimetterla in funzione

  var CHIAVE  = 'fio_accesso_v1';
  var TENTATI = 'fio_accesso_tentativi';
  var SEGRETO = 'rs-coaching-fiorentina-2627';

  // Le quattro chiavi. La password non e' scritta da nessuna parte: c'e' solo
  // l'impronta, che si ottiene dalla password ma non si rivolta indietro.
  var UTENTI = [
    { em: 'raoul@rscoaching.it',   nome: 'Raoul Simon', ruolo: 'Preparatore atletico',   liv: 'admin',
      salt: 'T3DTHRLAGOIRCWHD',
      pw:   'dtnOmwwt1qoNJJ7+AB0eTMl+lHTyew5BQveSCRjKn/w=',
      sec:  'R5Z3HJZCCX7ZLZN4H22B3N5Y6OW23V4X' },
    { em: 'mister@rscoaching.it',  nome: 'Mister',      ruolo: 'Allenatore',             liv: 'staff',
      salt: 'UCDUX2WEKNGBNPZO',
      pw:   'VNIKtFUHFlYNCtU/D+47iqiezZW9mVuZeo3OK4hBFjM=',
      sec:  'G4L7UY3AFF677VODIV3W3NEBLUYEXKE7' },
    { em: 'secondo@rscoaching.it', nome: 'Secondo',     ruolo: 'Allenatore in seconda',  liv: 'staff',
      salt: '6IJBKHSIVYMWNVVH',
      pw:   'jxOPpTV1bk7MKGHHLGCKP40LzC60ZJNla9zIU+ZQI/c=',
      sec:  'CZ6GQWH72LPZBJUMG66RJUO2LPZTISP4' },
    { em: 'prof@rscoaching.it',    nome: 'Preparatore', ruolo: 'Preparatore atletico',   liv: 'staff',
      salt: 'GLJ6DUHXAIAZVBZ3',
      pw:   'lNDPfreyqJixkLtdv0ZQFFMaVBG0bdQ+5xcTQs1O8Ic=',
      sec:  '553NDK6MXWVIX2Q77PCS5HGOO5RGWDES' }
  ];

  // ---- I conti che servono, scritti a mano -------------------------------
  // Il browser ne avrebbe di suoi, ma funzionano solo sugli indirizzi https.
  // Da telefono, sulla copia locale in wifi, l'indirizzo e' http e quelli
  // spariscono: allora l'accesso non funzionerebbe piu'. Scritti qui vanno
  // sempre, ovunque si apra la pagina.

  function testo(s) {
    var a = [], i, c;
    for (i = 0; i < s.length; i++) {
      c = s.charCodeAt(i);
      if (c < 128) a.push(c);
      else if (c < 2048) { a.push(192 | (c >> 6), 128 | (c & 63)); }
      else { a.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63)); }
    }
    return new Uint8Array(a);
  }

  var K256 = [
    0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];

  function sha256(b) {
    var H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    var len = b.length, tot = ((len + 9 + 63) >> 6) << 6;
    var m = new Uint8Array(tot);
    m.set(b); m[len] = 0x80;
    var bit = len * 8;
    m[tot-4]=(bit>>>24)&255; m[tot-3]=(bit>>>16)&255; m[tot-2]=(bit>>>8)&255; m[tot-1]=bit&255;
    var w = new Int32Array(64), off, i, x, y, s0, s1, a, c, d, e, f, g, h, S0, S1, ch, mj, t1, t2, bb;
    for (off = 0; off < tot; off += 64) {
      for (i = 0; i < 16; i++) {
        w[i] = (m[off+i*4] << 24) | (m[off+i*4+1] << 16) | (m[off+i*4+2] << 8) | m[off+i*4+3];
      }
      for (i = 16; i < 64; i++) {
        x = w[i-15]; y = w[i-2];
        s0 = ((x>>>7)|(x<<25)) ^ ((x>>>18)|(x<<14)) ^ (x>>>3);
        s1 = ((y>>>17)|(y<<15)) ^ ((y>>>19)|(y<<13)) ^ (y>>>10);
        w[i] = (w[i-16] + s0 + w[i-7] + s1) | 0;
      }
      a=H[0]; bb=H[1]; c=H[2]; d=H[3]; e=H[4]; f=H[5]; g=H[6]; h=H[7];
      for (i = 0; i < 64; i++) {
        S1 = ((e>>>6)|(e<<26)) ^ ((e>>>11)|(e<<21)) ^ ((e>>>25)|(e<<7));
        ch = (e & f) ^ (~e & g);
        t1 = (h + S1 + ch + K256[i] + w[i]) | 0;
        S0 = ((a>>>2)|(a<<30)) ^ ((a>>>13)|(a<<19)) ^ ((a>>>22)|(a<<10));
        mj = (a & bb) ^ (a & c) ^ (bb & c);
        t2 = (S0 + mj) | 0;
        h=g; g=f; f=e; e=(d+t1)|0; d=c; c=bb; bb=a; a=(t1+t2)|0;
      }
      H[0]=(H[0]+a)|0;  H[1]=(H[1]+bb)|0; H[2]=(H[2]+c)|0; H[3]=(H[3]+d)|0;
      H[4]=(H[4]+e)|0;  H[5]=(H[5]+f)|0;  H[6]=(H[6]+g)|0; H[7]=(H[7]+h)|0;
    }
    var out = new Uint8Array(32);
    for (i = 0; i < 8; i++) {
      out[i*4]=(H[i]>>>24)&255; out[i*4+1]=(H[i]>>>16)&255;
      out[i*4+2]=(H[i]>>>8)&255; out[i*4+3]=H[i]&255;
    }
    return out;
  }

  function sha1(b) {
    var H = [0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];
    var len = b.length, tot = ((len + 9 + 63) >> 6) << 6;
    var m = new Uint8Array(tot);
    m.set(b); m[len] = 0x80;
    var bit = len * 8;
    m[tot-4]=(bit>>>24)&255; m[tot-3]=(bit>>>16)&255; m[tot-2]=(bit>>>8)&255; m[tot-1]=bit&255;
    var w = new Int32Array(80), off, i, v, a, bb, c, d, e, f, k, t;
    for (off = 0; off < tot; off += 64) {
      for (i = 0; i < 16; i++) {
        w[i] = (m[off+i*4] << 24) | (m[off+i*4+1] << 16) | (m[off+i*4+2] << 8) | m[off+i*4+3];
      }
      for (i = 16; i < 80; i++) {
        v = w[i-3] ^ w[i-8] ^ w[i-14] ^ w[i-16];
        w[i] = (v << 1) | (v >>> 31);
      }
      a=H[0]; bb=H[1]; c=H[2]; d=H[3]; e=H[4];
      for (i = 0; i < 80; i++) {
        if (i < 20)      { f = (bb & c) | (~bb & d);              k = 0x5a827999; }
        else if (i < 40) { f = bb ^ c ^ d;                        k = 0x6ed9eba1; }
        else if (i < 60) { f = (bb & c) | (bb & d) | (c & d);     k = 0x8f1bbcdc; }
        else             { f = bb ^ c ^ d;                        k = 0xca62c1d6; }
        t = (((a << 5) | (a >>> 27)) + f + e + k + w[i]) | 0;
        e=d; d=c; c=(bb << 30) | (bb >>> 2); bb=a; a=t;
      }
      H[0]=(H[0]+a)|0; H[1]=(H[1]+bb)|0; H[2]=(H[2]+c)|0; H[3]=(H[3]+d)|0; H[4]=(H[4]+e)|0;
    }
    var out = new Uint8Array(20);
    for (i = 0; i < 5; i++) {
      out[i*4]=(H[i]>>>24)&255; out[i*4+1]=(H[i]>>>16)&255;
      out[i*4+2]=(H[i]>>>8)&255; out[i*4+3]=H[i]&255;
    }
    return out;
  }

  function hmac(fn, misura, chiave, msg) {
    if (chiave.length > 64) chiave = fn(chiave);
    var k = new Uint8Array(64); k.set(chiave);
    var dentro = new Uint8Array(64 + msg.length);
    var fuori  = new Uint8Array(64 + misura), i;
    for (i = 0; i < 64; i++) { dentro[i] = k[i] ^ 0x36; fuori[i] = k[i] ^ 0x5c; }
    dentro.set(msg, 64);
    fuori.set(fn(dentro), 64);
    return fn(fuori);
  }

  // L'impronta della password: la stessa operazione ripetuta sessantamila
  // volte, cosi' provarle tutte a tentativi costa tempo davvero.
  function impronta(pw, sale, giri) {
    var P = testo(pw), S = testo(sale);
    var b = new Uint8Array(S.length + 4);
    b.set(S); b[S.length+3] = 1;
    var u = hmac(sha256, 32, P, b), acc = u.slice(), i, j;
    for (i = 1; i < giri; i++) {
      u = hmac(sha256, 32, P, u);
      for (j = 0; j < 32; j++) acc[j] ^= u[j];
    }
    var s = '';
    for (i = 0; i < 32; i++) s += String.fromCharCode(acc[i]);
    return btoa(s);
  }

  var ALFA32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

  function da32(s) {
    s = String(s).toUpperCase().replace(/[^A-Z2-7]/g, '');
    var bit = 0, val = 0, out = [], i;
    for (i = 0; i < s.length; i++) {
      val = (val << 5) | ALFA32.indexOf(s.charAt(i));
      bit += 5;
      if (bit >= 8) { out.push((val >>> (bit - 8)) & 255); bit -= 8; }
    }
    return new Uint8Array(out);
  }

  // Il codice a sei cifre: dipende solo dalla chiave e dal minuto corrente,
  // percio' l'app sul telefono e questa pagina arrivano allo stesso numero
  // senza essersi mai parlate.
  function codice(chiave, passo) {
    var k = da32(chiave), msg = new Uint8Array(8), c = passo, i;
    for (i = 7; i >= 0; i--) { msg[i] = c & 255; c = Math.floor(c / 256); }
    var h = hmac(sha1, 20, k, msg);
    var o = h[19] & 15;
    var n = ((h[o] & 127) << 24) | (h[o+1] << 16) | (h[o+2] << 8) | h[o+3];
    var s = String(n % 1000000);
    while (s.length < 6) s = '0' + s;
    return s;
  }

  function codiceGiusto(chiave, digitato) {
    var ora = Math.floor(Date.now() / 30000), i;
    // Trenta secondi di margine avanti e indietro: gli orologi non vanno
    // mai perfettamente d'accordo e non e' il caso di litigarci.
    for (i = -1; i <= 1; i++) {
      if (codice(chiave, ora + i) === digitato) return true;
    }
    return false;
  }

  function sigillo(em, fino) {
    var h = hmac(sha256, 32, testo(SEGRETO), testo(em + '|' + fino)), s = '', i;
    for (i = 0; i < 16; i++) s += ('0' + h[i].toString(16)).slice(-2);
    return s;
  }

  // ---- La sessione -------------------------------------------------------

  function leggi() {
    var g;
    try { g = JSON.parse(localStorage.getItem(CHIAVE) || 'null'); } catch (e) { return null; }
    if (!g || !g.em || !g.fino) return null;
    if (Date.now() > g.fino) { pulisci(); return null; }
    if (g.sig !== sigillo(g.em, g.fino)) { pulisci(); return null; }
    var u = trova(g.em);
    return u ? u : null;
  }

  function scrivi(em, giorni) {
    var fino = Date.now() + giorni * 86400000;
    try {
      localStorage.setItem(CHIAVE, JSON.stringify({ em: em, fino: fino, sig: sigillo(em, fino) }));
    } catch (e) {}
  }

  function pulisci() {
    try { localStorage.removeItem(CHIAVE); } catch (e) {}
  }

  function trova(em) {
    em = String(em || '').trim().toLowerCase();
    for (var i = 0; i < UTENTI.length; i++) {
      if (UTENTI[i].em === em) return UTENTI[i];
    }
    return null;
  }

  // Dopo cinque password sbagliate si aspetta un minuto. Non ferma nessuno
  // per sempre, ma toglie voglia a chi prova a indovinare a raffica.
  function bloccatoFino() {
    var g;
    try { g = JSON.parse(localStorage.getItem(TENTATI) || 'null'); } catch (e) { return 0; }
    if (!g || (g.n || 0) < 5) return 0;
    return (g.quando || 0) + 60000;
  }

  function segnaErrore() {
    var g;
    try { g = JSON.parse(localStorage.getItem(TENTATI) || 'null'); } catch (e) { g = null; }
    if (!g || Date.now() > (g.quando || 0) + 60000) g = { n: 0, quando: 0 };
    g.n = (g.n || 0) + 1;
    g.quando = Date.now();
    try { localStorage.setItem(TENTATI, JSON.stringify(g)); } catch (e) {}
  }

  function azzeraErrori() {
    try { localStorage.removeItem(TENTATI); } catch (e) {}
  }

  window.fioAccessoAttivo = ACCESSO;
  window.fioUtente = function() { return ACCESSO ? leggi() : null; };
  window.fioEsci = function() { pulisci(); location.replace('../index.html'); };

  // ---- La schermata ------------------------------------------------------

  var CSS = ''
    + 'html.fio-serrato{overflow:hidden;}'
    + 'html.fio-serrato body > *:not(#fio-gate){display:none !important;}'
    + '#fio-gate{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;'
    + 'justify-content:center;padding:22px;overflow:auto;'
    + 'background:radial-gradient(120% 90% at 50% 0%,rgba(94,44,140,.24),transparent 62%),#0F0C12;'
    + 'font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#F4F1EC;}'
    + '#fio-gate .g-card{width:100%;max-width:340px;}'
    + '#fio-gate .g-brand{display:flex;align-items:center;gap:10px;margin-bottom:22px;}'
    + '#fio-gate .g-crest{width:34px;height:34px;object-fit:contain;}'
    + '#fio-gate .g-crest-fb{width:34px;height:34px;border-radius:8px;display:flex;'
    + 'align-items:center;justify-content:center;font-size:11px;font-weight:700;'
    + 'background:rgba(94,44,140,.3);color:#C9A6F0;}'
    + '#fio-gate .g-word{font-size:15px;font-weight:700;letter-spacing:.12em;line-height:1.15;}'
    + '#fio-gate .g-word span{display:block;font-size:9.5px;font-weight:500;letter-spacing:.06em;'
    + 'color:rgba(248,250,255,.34);}'
    + '#fio-gate h1{font-size:20px;font-weight:600;letter-spacing:-.01em;margin:0 0 6px;}'
    + '#fio-gate .g-hint{font-size:12px;line-height:1.6;color:rgba(248,250,255,.42);margin:0 0 20px;}'
    + '#fio-gate label{display:block;font-size:10.5px;font-weight:600;letter-spacing:.05em;'
    + 'text-transform:uppercase;color:rgba(248,250,255,.42);margin:0 0 6px;}'
    + '#fio-gate input[type=email],#fio-gate input[type=password],#fio-gate input[type=text]{'
    + 'width:100%;box-sizing:border-box;padding:11px 13px;margin:0 0 14px;border-radius:10px;'
    + 'font-family:inherit;font-size:15px;color:#F4F1EC;background:rgba(255,255,255,.05);'
    + 'border:1px solid rgba(255,255,255,.10);transition:border-color .18s ease,background .18s ease;}'
    + '#fio-gate input:focus{outline:none;border-color:rgba(255,106,46,.55);'
    + 'background:rgba(255,255,255,.07);}'
    + '#fio-gate input::placeholder{color:rgba(248,250,255,.24);}'
    + '#fio-gate .g-cifre{letter-spacing:.42em;text-align:center;font-size:20px;font-weight:600;}'
    + '#fio-gate .g-ok{width:100%;padding:12px;border-radius:10px;font-family:inherit;'
    + 'font-size:13.5px;font-weight:600;cursor:pointer;color:#170A03;'
    + 'background:linear-gradient(135deg,#FF8A3D,#F2621E);border:none;'
    + 'transition:filter .18s ease,transform .1s ease;}'
    + '#fio-gate .g-ok:hover{filter:brightness(1.08);}'
    + '#fio-gate .g-ok:active{transform:scale(.985);}'
    + '#fio-gate .g-ok[disabled]{cursor:progress;filter:saturate(.4);}'
    + '#fio-gate .g-riga{display:flex;align-items:center;gap:8px;margin:2px 0 16px;'
    + 'font-size:11.5px;color:rgba(248,250,255,.5);}'
    + '#fio-gate .g-riga input{width:15px;height:15px;margin:0;accent-color:#F2621E;}'
    + '#fio-gate .g-link{display:block;width:100%;margin-top:12px;padding:0;border:none;'
    + 'background:none;font-family:inherit;font-size:11.5px;color:rgba(248,250,255,.42);'
    + 'cursor:pointer;text-align:center;transition:color .18s ease;}'
    + '#fio-gate .g-link:hover{color:rgba(248,250,255,.72);}'
    + '#fio-gate .g-err{min-height:16px;margin:0 0 12px;font-size:11.5px;line-height:1.5;'
    + 'color:rgba(255,150,120,.9);}'
    + '#fio-gate .g-chiave{margin-top:14px;padding:12px 13px;border-radius:10px;'
    + 'background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);'
    + 'font-size:11.5px;line-height:1.65;color:rgba(248,250,255,.5);}'
    + '#fio-gate .g-chiave b{display:block;margin-top:7px;font-family:ui-monospace,Menlo,monospace;'
    + 'font-size:12.5px;letter-spacing:.08em;color:#FFC79B;word-break:break-all;}'
    + '#fio-gate .g-foot{margin-top:22px;font-size:10.5px;line-height:1.65;'
    + 'color:rgba(248,250,255,.22);}'
    + '@media (prefers-reduced-motion:reduce){#fio-gate *{transition:none !important;}}';

  var HTML = ''
    + '<div class="g-card">'
    + '  <div class="g-brand">'
    + '    <img class="g-crest" src="./fiorentina.png" alt="Stemma Fiorentina"'
    + '      onerror="this.replaceWith(Object.assign(document.createElement(&#39;div&#39;),'
    + '{className:&#39;g-crest-fb&#39;,textContent:&#39;ACF&#39;}))">'
    + '    <div class="g-word">FIORENTINA<span>Primavera U19 F</span></div>'
    + '  </div>'
    + '  <h1 id="g-tit">Area riservata</h1>'
    + '  <p class="g-hint" id="g-sub">Entra con la tua email e la tua password.</p>'
    + '  <div id="g-p1">'
    + '    <label for="g-em">Email</label>'
    + '    <input type="email" id="g-em" autocomplete="username" placeholder="nome@rscoaching.it"'
    + '      spellcheck="false" autocapitalize="off">'
    + '    <label for="g-pw">Password</label>'
    + '    <input type="password" id="g-pw" autocomplete="current-password" placeholder="La tua password">'
    + '    <p class="g-err" id="g-err"></p>'
    + '    <button class="g-ok" id="g-avanti" type="button">Continua</button>'
    + '  </div>'
    + '  <div id="g-p2" style="display:none">'
    + '    <label for="g-cd">Codice di sei cifre</label>'
    + '    <input type="text" id="g-cd" class="g-cifre" inputmode="numeric" maxlength="6"'
    + '      autocomplete="one-time-code" placeholder="000000">'
    + '    <div class="g-riga"><input type="checkbox" id="g-resta">'
    + '      <label for="g-resta" style="margin:0;text-transform:none;letter-spacing:0;'
    + 'font-size:11.5px;font-weight:400;color:inherit">Resta connesso su questo dispositivo</label></div>'
    + '    <p class="g-err" id="g-err2"></p>'
    + '    <button class="g-ok" id="g-entra" type="button">Entra</button>'
    + '    <button class="g-link" id="g-primo" type="button">Prima volta? Mostra la chiave per l&#39;app</button>'
    + '    <button class="g-link" id="g-back" type="button">Cambia utente</button>'
    + '    <div class="g-chiave" id="g-box" style="display:none">'
    + '      Apri l&#39;app dell&#39;autenticazione, scegli di aggiungere un account a mano e'
    + '      copia questa chiave. Da quel momento l&#39;app mostra il codice giusto.'
    + '      <b id="g-sec"></b>'
    + '    </div>'
    + '  </div>'
    + '  <p class="g-foot">Il controllo gira dentro il browser. Tiene separati i quattro accessi,'
    + '  non sostituisce una porta con la serratura.</p>'
    + '</div>';

  function mostra() {
    document.documentElement.classList.add('fio-serrato');
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    var g = document.createElement('div');
    g.id = 'fio-gate';
    g.innerHTML = HTML;
    document.body.appendChild(g);

    var em = g.querySelector('#g-em'), pw = g.querySelector('#g-pw');
    var cd = g.querySelector('#g-cd'), err = g.querySelector('#g-err');
    var err2 = g.querySelector('#g-err2');
    var p1 = g.querySelector('#g-p1'), p2 = g.querySelector('#g-p2');
    var avanti = g.querySelector('#g-avanti'), entra = g.querySelector('#g-entra');
    var utente = null;

    setTimeout(function() { em.focus(); }, 60);

    function attesa() {
      var fino = bloccatoFino();
      if (Date.now() >= fino) return 0;
      return Math.ceil((fino - Date.now()) / 1000);
    }

    function passo1() {
      var resta = attesa();
      if (resta) {
        err.textContent = 'Troppi tentativi. Riprova fra ' + resta + ' secondi.';
        return;
      }
      var u = trova(em.value);
      if (!u || !pw.value) {
        segnaErrore();
        err.textContent = 'Email o password non corrispondono.';
        return;
      }
      err.textContent = 'Controllo in corso...';
      avanti.disabled = true;
      // Il conto sulla password prende qualche decimo di secondo e nel
      // frattempo la pagina si fermerebbe: gli lascio prima il tempo di
      // scrivere la riga qui sopra.
      setTimeout(function() {
        var giusta = false;
        try { giusta = impronta(pw.value, u.salt, 60000) === u.pw; } catch (e) {}
        avanti.disabled = false;
        if (!giusta) {
          segnaErrore();
          err.textContent = 'Email o password non corrispondono.';
          return;
        }
        azzeraErrori();
        utente = u;
        err.textContent = '';
        pw.value = '';
        p1.style.display = 'none';
        p2.style.display = '';
        g.querySelector('#g-tit').textContent = 'Ciao ' + u.nome.split(' ')[0];
        g.querySelector('#g-sub').textContent =
          'Apri l' + "'" + 'app dell' + "'" + 'autenticazione e copia il codice del momento.';
        g.querySelector('#g-sec').textContent = u.sec;
        setTimeout(function() { cd.focus(); }, 60);
      }, 40);
    }

    function passo2() {
      if (!utente) return;
      var n = cd.value.replace(/[^0-9]/g, '');
      if (n.length !== 6) { err2.textContent = 'Servono le sei cifre del codice.'; return; }
      if (!codiceGiusto(utente.sec, n)) {
        err2.textContent = 'Codice non valido. Controlla che sia quello di adesso.';
        return;
      }
      scrivi(utente.em, g.querySelector('#g-resta').checked ? 30 : 1);
      // Ricarico: cosi' la pagina riparte da zero con l'accesso gia' fatto e
      // non resta niente a meta'.
      location.reload();
    }

    avanti.addEventListener('click', passo1);
    entra.addEventListener('click', passo2);
    pw.addEventListener('keydown', function(e) { if (e.key === 'Enter') passo1(); });
    em.addEventListener('keydown', function(e) { if (e.key === 'Enter') pw.focus(); });
    cd.addEventListener('keydown', function(e) { if (e.key === 'Enter') passo2(); });
    cd.addEventListener('input', function() {
      cd.value = cd.value.replace(/[^0-9]/g, '').slice(0, 6);
      if (cd.value.length === 6) passo2();
    });
    g.querySelector('#g-primo').addEventListener('click', function() {
      var box = g.querySelector('#g-box');
      box.style.display = box.style.display === 'none' ? '' : 'none';
    });
    g.querySelector('#g-back').addEventListener('click', function() {
      utente = null;
      p2.style.display = 'none';
      p1.style.display = '';
      err2.textContent = '';
      cd.value = '';
      g.querySelector('#g-tit').textContent = 'Area riservata';
      g.querySelector('#g-sub').textContent = 'Entra con la tua email e la tua password.';
      em.focus();
    });
  }

  if (ACCESSO && !leggi()) mostra();
})();

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
    <button class="sb-sync" id="fio-sync-btn" type="button" aria-label="Rileggi i dati pubblicati" title="Rilegge i file dati pubblicati e ricarica la pagina se c&#39;e&#39; qualcosa di nuovo. La cartella della stagione sul Mac viene sorvegliata da sola: quando aggiungi un file i dati si rigenerano e si pubblicano nel giro di un minuto, poi basta questo pulsante. Qui sotto c&#39;e&#39; la data del dato online.">
      <svg class="sb-sync-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-7.6-4.2"/><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 7.6 4.2"/><path d="M20 3v5h-5"/><path d="M4 21v-5h5"/></svg>
      <span class="sb-sync-txt"><b>Aggiorna dati</b><em id="fio-sync-when">--</em></span>
    </button>
    <a class="sb-switch" href="../index.html" aria-label="Torna alla scelta dell'area">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
      <span>Cambia area</span>
    </a>
    <div class="sb-who" id="fio-who">
      <div class="sb-cred" id="fio-cred"><strong>Raoul Simon</strong>Preparatore Atletico</div>
      <button class="sb-esci" id="fio-esci" type="button" aria-label="Esci dall&#39;area Fiorentina" title="Esci">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M15 17l5-5-5-5"/><path d="M20 12H9"/><path d="M13 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7"/></svg>
      </button>
    </div>
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

// Chiave di memoria separata per stagione.
// Quello che si scrive a mano (ruoli, disponibilita', atlete aggiunte, note
// personali) non deve passare da un anno all'altro: chi era indisponibile a
// marzo non lo e' anche a settembre. La 25/26 tiene la chiave vecchia, cosi'
// il lavoro gia' fatto resta dov'e'; le stagioni nuove hanno la loro.
window.fioKey = function(base, st) {
  st = st || window.getStagione();
  return st === '25-26' ? base : base + '_' + st;
};

// Atlete scritte a mano in Atlete: "rs_fio_custom" e' una mappa {nome: ruolo}.
// Prima la leggeva soltanto la pagina Atlete, percio' un'atleta aggiunta li'
// non arrivava ne' alla Forza ne' alle altre sezioni. Adesso passa di qui e la
// vedono tutti.
window.fioCustom = function() {
  var o = {};
  try {
    var v = JSON.parse(localStorage.getItem(window.fioKey('rs_fio_custom')) || '{}');
    if (v && typeof v === 'object' && !Array.isArray(v)) o = v;
  } catch (e) {}
  return o;
};

// Anagrafica scritta in Atlete: peso, altezza, note, infortuni e il flag "off",
// che vuol dire fuori rosa. Chi e' fuori rosa resta nello storico ma non deve
// comparire nelle liste operative di nessuna pagina.
window.fioBio = function() {
  var o = {};
  try {
    var v = JSON.parse(localStorage.getItem(window.fioKey('rs_fio_bio')) || '{}');
    if (v && typeof v === 'object' && !Array.isArray(v)) o = v;
  } catch (e) {}
  return o;
};
window.fioFuoriRosa = function(name) {
  var b = window.fioBio()[String(name == null ? '' : name).trim()];
  return !!(b && b.off);
};

// Aggregate: le ragazze che in rosa Primavera non ci sono ma si allenano con
// noi, di solito le U17 che salgono per una seduta. Si scrivono in Oggi, nella
// sezione aggregate, e restano li' sotto "rs_fio_agg", una mappa {nome: ruolo}.
// Fino a ieri quella chiave la leggeva soltanto Oggi: un'aggregata in Forza o
// in Prevenzione non arrivava, e li' bisognava riscriverla a mano. Adesso passa
// da qui con tipo 'sporadica', lo stesso che hanno le aggregate dei fogli,
// percio' le pagine che dividono la rosa in gruppi se la ritrovano gia' messa
// sotto "Aggregate" invece che sparsa in ordine alfabetico.
window.fioAgg = function() {
  var o = {};
  try {
    var v = JSON.parse(localStorage.getItem(window.fioKey('rs_fio_agg')) || '{}');
    if (v && typeof v === 'object' && !Array.isArray(v)) o = v;
  } catch (e) {}
  return o;
};

// L'interruttore delle aggregate. Spento vuol dire rosa Primavera e basta, ed
// e' il caso normale: una U17 sale una seduta ogni tanto, per il resto
// dell'anno non deve stare in mezzo ai nomi. Acceso le riporta dentro tutte
// insieme, senza doverle riscrivere una per una.
window.fioAggOn = function() {
  try { return localStorage.getItem(window.fioKey('rs_fio_agg_on')) === '1'; }
  catch (e) { return false; }
};
window.fioAggSet = function(on) {
  try {
    if (on) localStorage.setItem(window.fioKey('rs_fio_agg_on'), '1');
    else localStorage.removeItem(window.fioKey('rs_fio_agg_on'));
  } catch (e) {}
  try {
    document.dispatchEvent(new CustomEvent('fio:agg', { detail: { attive: !!on } }));
  } catch (e) {}
};

// Rosa completa della stagione attiva, in forma [{name, role, tipo}], comprese
// le atlete segnate fuori rosa. La usa Atlete, che deve poterle mostrare per
// rimetterle dentro; tutte le altre pagine usano fioRoster, che le toglie.
// Sulla 26/27 comanda il blocco rigenerato dai file della cartella: se
// un'atleta quest'anno non c'e', qui non compare, e le pagine che partono da
// questa lista non la mostrano piu'. Sulla 25/26 resta la rosa storica.
// In coda, sempre, le atlete aggiunte a mano in Atlete.
window.fioRosterFull = function() {
  var out = [], seen = {};
  function add(n, r, t) {
    n = String(n == null ? '' : n).trim();
    if (!n || seen[n]) return;
    r = String(r == null ? '' : r).trim();
    if (r.toLowerCase() === 'nan') r = '';
    seen[n] = 1;
    out.push({ name: n, role: r, tipo: String(t == null ? '' : t) });
  }
  if (window.getStagione() === '26-27') {
    var R = window.ROSTER_2627;
    if (R && R.players) R.players.forEach(function(p) { add(p.name, p.role, p.tipo); });
  } else {
    var F = window.FORZA;
    if (F && F.roster) F.roster.forEach(function(p) { add(p.name, p.role, p.tipo); });
    var S = window.SNAP;
    if (S && S.players) Object.keys(S.players).forEach(function(n) {
      add(n, (S.players[n] || {}).role, '');
    });
    // Il planner del calendario porta con se' la rosa 25-26 in forma breve
    // {n,r}: serve li' dove non vengono caricati ne' i dati forza ne' quelli
    // di carico.
    var L = window.RS_ROSTER;
    if (Array.isArray(L)) L.forEach(function(p) { add(p.n, p.r, ''); });
  }
  // Le aggregate entrano prima delle atlete scritte a mano e solo a
  // interruttore acceso: un nome che sta gia' in rosa non viene doppiato,
  // ci pensa il controllo dei nomi gia' visti.
  if (window.fioAggOn()) {
    var A = window.fioAgg();
    Object.keys(A).sort(function(a, b) { return a.localeCompare(b, 'it'); })
      .forEach(function(n) { add(n, A[n], 'sporadica'); });
  }
  var C = window.fioCustom();
  Object.keys(C).sort(function(a, b) { return a.localeCompare(b, 'it'); })
    .forEach(function(n) { add(n, C[n], 'manuale'); });
  return out;
};

// Rosa operativa: la rosa completa senza chi e' segnata fuori rosa. Questa e'
// l'unica rosa dell'applicazione, chi la usa vede le stesse atlete di tutti
// gli altri: un'atleta scritta a mano in Atlete arriva anche in Forza, e una
// messa fuori rosa sparisce da tutte le liste in una volta sola.
window.fioRoster = function() {
  var bio = window.fioBio();
  return window.fioRosterFull().filter(function(p) {
    var b = bio[p.name];
    return !(b && b.off);
  });
};

// Rosa dell'anno prima, in forma [{name, role}].
// Serve solo sulla stagione nuova: sono le atlete che c'erano e che quest'anno
// non hanno ancora un dato, tipo chi rientra piu' tardi o chi si e' allenata
// senza GPS. Vengono riproposte in Atlete per rimetterle in rosa con un click,
// invece di dover riscrivere il nome a mano.
window.fioRosterPrev = function() {
  var out = [], seen = {};
  function add(n, r) {
    n = String(n == null ? '' : n).trim();
    if (!n || seen[n]) return;
    r = String(r == null ? '' : r).trim();
    if (r.toLowerCase() === 'nan') r = '';
    seen[n] = 1;
    out.push({ name: n, role: r });
  }
  if (window.getStagione() !== '26-27') return out;
  var P = window.FIO_PREV_PLAYERS;
  if (Array.isArray(P)) P.forEach(function(p) { add(p.name, p.role); });
  var F = window.FORZA;
  if (F && F.roster) F.roster.forEach(function(p) { add(p.name, p.role); });
  var L = window.RS_ROSTER;
  if (Array.isArray(L)) L.forEach(function(p) { add(p.n, p.r); });
  return out.sort(function(a, b) { return a.name.localeCompare(b.name, 'it'); });
};

// ---------------------------------------------------------------------------
// RUOLI: fonte unica.
// Il ruolo di partenza arriva dai fogli del mister. Quello riscritto a mano in
// Atlete sta in localStorage sotto "rs_fio_roles" (chiave per stagione) e vince
// sempre, anche quando e' vuoto: la casella svuotata a mano vuol dire "questa
// atleta il ruolo non ce l'ha", non "riprendi quello del foglio".
// Prima ogni pagina si leggeva la chiave per conto suo, con tre regole diverse:
// Atlete e Calendario davano la precedenza all'override anche vuoto, il Piano
// solo se pieno, e Sessioni e Report la chiave non la leggevano proprio. Da qui
// il bug: un ruolo assegnato in Atlete non arrivava alle altre sezioni e il
// filtro per ruolo nei Report mostrava solo una parte della rosa.
// Adesso la regola sta scritta una volta sola e tutte le pagine passano di qui.
// ---------------------------------------------------------------------------
window.FIO_RUOLI = ['Portiere', 'Difensore centrale', 'Terzino', 'Play', 'Mezzala', 'Esterno', 'Punta'];
window.FIO_RUOLO_VUOTO = 'Da assegnare';

// Un ruolo scritto male vale come ruolo assente. Dal foglio arriva "nan" quando
// la casella e' vuota, e in qualche riga vecchia c'e' un trattino.
window.fioNormRuolo = function(r) {
  r = String(r == null ? '' : r).trim();
  if (!r || r.toLowerCase() === 'nan' || r === '-') return '';
  return r;
};

// Le due letture da localStorage sono in cache: il ruolo si chiede una volta per
// atleta per ogni tabella, e in Report sono 33 nomi per riga di calcolo.
var FIO_RUOLI_OV = null, FIO_RUOLI_OV_K = null;
var FIO_RUOLI_BASE = null, FIO_RUOLI_BASE_K = null;

window.fioRuoliChiave = function() { return window.fioKey('rs_fio_roles'); };

function fioRuoliLeggi() {
  var k = window.fioRuoliChiave();
  if (FIO_RUOLI_OV && FIO_RUOLI_OV_K === k) return FIO_RUOLI_OV;
  var o = {};
  try {
    var v = JSON.parse(localStorage.getItem(k) || '{}');
    if (v && typeof v === 'object' && !Array.isArray(v)) o = v;
  } catch (e) {}
  FIO_RUOLI_OV = o; FIO_RUOLI_OV_K = k;
  return o;
}

// Copia degli override, per chi deve mostrarli o contarli senza modificarli.
window.fioRuoliOverride = function() {
  var o = fioRuoliLeggi(), out = {};
  Object.keys(o).forEach(function(n) { out[n] = o[n]; });
  return out;
};
window.fioHaRuoloScritto = function(name) {
  return Object.prototype.hasOwnProperty.call(fioRuoliLeggi(), String(name == null ? '' : name).trim());
};

// Ruolo di partenza: quello dei fogli, piu' le atlete aggiunte a mano.
window.fioRuoloBase = function(name) {
  var k = window.getStagione();
  if (!FIO_RUOLI_BASE || FIO_RUOLI_BASE_K !== k) {
    var m = {};
    window.fioRoster().forEach(function(p) { if (m[p.name] == null) m[p.name] = p.role; });
    try {
      var c = JSON.parse(localStorage.getItem(window.fioKey('rs_fio_custom')) || '{}');
      if (c && typeof c === 'object' && !Array.isArray(c)) {
        Object.keys(c).forEach(function(n) { if (m[n] == null) m[n] = c[n]; });
      }
    } catch (e) {}
    FIO_RUOLI_BASE = m; FIO_RUOLI_BASE_K = k;
  }
  return window.fioNormRuolo(FIO_RUOLI_BASE[String(name == null ? '' : name).trim()]);
};

// Il ruolo buono di un'atleta. Il secondo argomento e' il ruolo del foglio, per
// chi ce l'ha gia' sotto mano e non vuole farlo ricercare; se manca si cerca.
window.fioRuolo = function(name, base) {
  name = String(name == null ? '' : name).trim();
  if (!name) return '';
  var o = fioRuoliLeggi();
  if (Object.prototype.hasOwnProperty.call(o, name)) return window.fioNormRuolo(o[name]);
  return window.fioNormRuolo(base === undefined ? window.fioRuoloBase(name) : base);
};

// Rosa della stagione con il ruolo e il nome da mostrare gia' risolti.
// `name` e' sempre la chiave vera del dato, quella con cui il GPS e i fogli
// scrivono l'atleta: va usata per salvare. `nome` e' come si legge a schermo.
window.fioRosterRuoli = function() {
  return window.fioRoster().map(function(p) {
    return {
      name: p.name,
      nome: window.fioNome(p.name),
      role: window.fioRuolo(p.name, p.role),
      tipo: p.tipo
    };
  });
};

// Scrittura: la usa Atlete. Se il ruolo torna a essere quello del foglio
// l'override sparisce, cosi' la chiave non si riempie di righe inutili e se
// domani il foglio cambia il dato nuovo passa.
window.fioSetRuolo = function(name, role) {
  name = String(name == null ? '' : name).trim();
  if (!name) return '';
  var v = window.fioNormRuolo(role);
  var o = window.fioRuoliOverride();
  if (v === window.fioRuoloBase(name)) delete o[name];
  else o[name] = v;
  try { localStorage.setItem(window.fioRuoliChiave(), JSON.stringify(o)); } catch (e) {}
  FIO_RUOLI_OV = o; FIO_RUOLI_OV_K = window.fioRuoliChiave();
  try {
    document.dispatchEvent(new CustomEvent('fio:ruoli', { detail: { nome: name, ruolo: v } }));
  } catch (e) {}
  return v;
};

// Da chiamare quando la chiave viene riscritta in blocco (import, ripristino,
// cambio stagione): la prossima lettura riparte da localStorage.
window.fioRuoliRicarica = function() {
  FIO_RUOLI_OV = null; FIO_RUOLI_OV_K = null;
  FIO_RUOLI_BASE = null; FIO_RUOLI_BASE_K = null;
  // Anche i nomi mostrati partono dalla rosa: se cambia la rosa, cambiano.
  if (typeof window.fioNomiRicarica === 'function') window.fioNomiRicarica();
};

// Ordine di lettura di una rosa divisa per ruolo: prima i ruoli canonici nel
// loro ordine di campo, poi eventuali ruoli scritti a mano, poi chi non ne ha.
window.fioOrdineRuoli = function(chiavi) {
  var pres = {}, out = [];
  (chiavi || []).forEach(function(r) { pres[r] = 1; });
  window.FIO_RUOLI.forEach(function(r) { if (pres[r]) { out.push(r); delete pres[r]; } });
  Object.keys(pres)
    .filter(function(r) { return r !== window.FIO_RUOLO_VUOTO; })
    .sort(function(a, b) { return a.localeCompare(b, 'it'); })
    .forEach(function(r) { out.push(r); });
  if (pres[window.FIO_RUOLO_VUOTO]) out.push(window.FIO_RUOLO_VUOTO);
  return out;
};

// Il ruolo cambiato in un'altra scheda del browser vale anche qui.
window.addEventListener('storage', function(ev) {
  if (!ev || ev.key !== window.fioRuoliChiave()) return;
  window.fioRuoliRicarica();
  try { document.dispatchEvent(new CustomEvent('fio:ruoli', { detail: { nome: '', ruolo: '' } })); } catch (e) {}
});

// ---------------------------------------------------------------------------
// NOME MOSTRATO: fonte unica.
// I file GPS scrivono nome e cognome quando in rosa ci sono due atlete che si
// chiamano uguale: e' successo l'anno scorso con le due Pieri, e da li' sono
// rimasti "Pieri Viola" e "Faggioli Federica". Il nome scritto nel dato non si
// tocca, altrimenti il carico non si aggancia piu' all'atleta: cambia solo
// quello che si legge a schermo e sui fogli stampati.
// Regola: se il cognome da solo basta a distinguerla, si legge il cognome. Le
// particelle fanno parte del cognome, quindi "De Gregorio" resta intero, e se
// due atlete hanno lo stesso cognome restano tutte e due col nome per esteso.
// Chi vuole un nome diverso lo scrive in Atlete e quello vince sempre.
// ---------------------------------------------------------------------------
window.FIO_PARTICELLE = ['de', 'di', 'da', 'del', 'della', 'dello', 'dei', 'degli',
  'dal', 'dalla', 'lo', 'la', 'li', 'van', 'von', 'der', 'den', 'mc', 'mac',
  'san', 'santa', 'sant', 'saint', 'st'];

// Il cognome di un nome scritto "Cognome Nome".
window.fioCognome = function(name) {
  var p = String(name == null ? '' : name).trim().split(/\s+/).filter(Boolean);
  if (p.length < 2) return p.join(' ');
  var n = 1;
  while (n < p.length) {
    var t = p[n - 1].toLowerCase().replace(/[.'’`]/g, '');
    if (window.FIO_PARTICELLE.indexOf(t) < 0) break;
    n++;
  }
  return p.slice(0, n).join(' ');
};

var FIO_NOMI_OV = null, FIO_NOMI_OV_K = null;
var FIO_NOMI_AUTO = null, FIO_NOMI_AUTO_K = null;

window.fioNomiChiave = function() { return window.fioKey('rs_fio_nomi'); };

function fioNomiLeggi() {
  var k = window.fioNomiChiave();
  if (FIO_NOMI_OV && FIO_NOMI_OV_K === k) return FIO_NOMI_OV;
  var o = {};
  try {
    var v = JSON.parse(localStorage.getItem(k) || '{}');
    if (v && typeof v === 'object' && !Array.isArray(v)) o = v;
  } catch (e) {}
  FIO_NOMI_OV = o; FIO_NOMI_OV_K = k;
  return o;
}

// Copia degli override, per chi deve mostrarli o contarli senza modificarli.
window.fioNomiOverride = function() {
  var o = fioNomiLeggi(), out = {};
  Object.keys(o).forEach(function(n) { out[n] = o[n]; });
  return out;
};

// Nome accorciato in automatico, calcolato sulla rosa di quest'anno: il cognome
// se e' l'unico in rosa, il nome per esteso se e' condiviso.
// Si guarda la rosa completa, fuori rosa comprese: se una si legge "Pieri" non
// deve diventare "Pieri Viola" solo perche' un'altra Pieri e' stata messa
// fuori rosa a meta' stagione. Il nome sui fogli gia' stampati resta valido.
function fioNomiAuto() {
  var k = window.getStagione();
  if (FIO_NOMI_AUTO && FIO_NOMI_AUTO_K === k) return FIO_NOMI_AUTO;
  var conta = {}, m = {}, rosa = window.fioRosterFull();
  rosa.forEach(function(p) {
    var c = window.fioCognome(p.name);
    conta[c] = (conta[c] || 0) + 1;
  });
  rosa.forEach(function(p) {
    var c = window.fioCognome(p.name);
    m[p.name] = (c && conta[c] === 1) ? c : p.name;
  });
  FIO_NOMI_AUTO = m; FIO_NOMI_AUTO_K = k;
  return m;
}

// Come si legge un'atleta. Il nome scritto a mano vince; se non c'e', vale
// l'accorciamento automatico; se l'atleta non e' in rosa resta com'e'.
window.fioNome = function(name) {
  name = String(name == null ? '' : name).trim();
  if (!name) return '';
  var o = fioNomiLeggi();
  if (Object.prototype.hasOwnProperty.call(o, name)) {
    var v = String(o[name] == null ? '' : o[name]).trim();
    if (v) return v;
  }
  return fioNomiAuto()[name] || name;
};

// Nome automatico da solo, senza guardare quello scritto a mano: serve in
// Atlete per mostrare che cosa comparirebbe lasciando la casella vuota.
window.fioNomeAuto = function(name) {
  name = String(name == null ? '' : name).trim();
  if (!name) return '';
  return fioNomiAuto()[name] || name;
};

// Scrittura: la usa Atlete. Se il nome torna a essere quello automatico
// l'override sparisce, cosi' la chiave non si riempie di righe inutili.
window.fioSetNome = function(name, alias) {
  name = String(name == null ? '' : name).trim();
  if (!name) return '';
  var v = String(alias == null ? '' : alias).trim().replace(/\s+/g, ' ');
  var o = window.fioNomiOverride();
  if (!v || v === window.fioNomeAuto(name)) delete o[name];
  else o[name] = v;
  try { localStorage.setItem(window.fioNomiChiave(), JSON.stringify(o)); } catch (e) {}
  FIO_NOMI_OV = o; FIO_NOMI_OV_K = window.fioNomiChiave();
  try {
    document.dispatchEvent(new CustomEvent('fio:nomi', { detail: { nome: name, mostrato: window.fioNome(name) } }));
  } catch (e) {}
  return window.fioNome(name);
};

// Da chiamare quando la rosa cambia sotto i piedi: atleta aggiunta o tolta,
// cambio stagione, ripristino di un salvataggio.
window.fioNomiRicarica = function() {
  FIO_NOMI_OV = null; FIO_NOMI_OV_K = null;
  FIO_NOMI_AUTO = null; FIO_NOMI_AUTO_K = null;
};

// Ordinamento della rosa per come si legge, non per come e' scritta nel dato.
window.fioOrdinaNomi = function(lista, chiave) {
  var k = chiave || 'name';
  return (lista || []).slice().sort(function(a, b) {
    var na = window.fioNome(typeof a === 'string' ? a : a[k]);
    var nb = window.fioNome(typeof b === 'string' ? b : b[k]);
    return na.localeCompare(nb, 'it');
  });
};

// Il nome cambiato in un'altra scheda del browser vale anche qui.
window.addEventListener('storage', function(ev) {
  if (!ev) return;
  if (ev.key !== window.fioNomiChiave() && ev.key !== window.fioKey('rs_fio_custom')
      && ev.key !== window.fioKey('rs_fio_bio')) return;
  window.fioNomiRicarica();
  try { document.dispatchEvent(new CustomEvent('fio:nomi', { detail: { nome: '', mostrato: '' } })); } catch (e) {}
});

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

  // Fotografia della rosa vecchia PRIMA di sovrascrivere i dati: serve per
  // riproporre in Atlete le atlete dell'anno scorso che quest'anno non si sono
  // ancora allenate. Senza questa copia sparirebbero e non ci sarebbe modo di
  // rimetterle dentro se non riscrivendo il nome a mano.
  window.FIO_PREV_PLAYERS = [];
  if (window.SNAP && window.SNAP.players) {
    Object.keys(window.SNAP.players).forEach(function(n) {
      window.FIO_PREV_PLAYERS.push({ name: n, role: (window.SNAP.players[n] || {}).role || '' });
    });
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

  // La rosa di partenza dei ruoli e' appena cambiata sotto i piedi: la cache va
  // buttata, altrimenti resta quella costruita sui dati della 25/26.
  window.fioRuoliRicarica();
};

// Test presi dal foglio nella cartella della stagione.
// Il foglio comanda: a ogni Aggiorna i valori che contiene vengono riscritti nel
// registro e le atlete nuove compaiono. Quello inserito a mano resta per tutte
// le prove che nel foglio non ci sono. Il registro e' lo stesso usato dalle
// pagine Test, Atleta e Sintesi, quindi il dato arriva ovunque.
// Il campo "t" e' il testo originale del foglio: la V, la G, la R del fisio e la D
// dei test di caviglia. Il registro sa tenere solo numeri, quindi il valore viaggia
// come 2, 1, 0 e la lettera viaggia a fianco: a video si legge la lettera.
// Una batteria di test si spalma su piu' giorni (i salti il 3, il VBT il 6, l' FMS
// il 10) ma resta una rilevazione sola: le sessioni si chiamano col mese. Il registro
// 26/27 nato con le etichette a giorno si accorpa qui, una volta per etichetta.
var FIO_MESI = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
                'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
var FIO_MESI_AB = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu',
                   'lug', 'ago', 'set', 'ott', 'nov', 'dic'];

function fioMeseSessioni(reg) {
  function mese(d) {
    var m = String(d == null ? '' : d).trim().toLowerCase().match(/^(\d{1,2})\s+([a-z]{3})$/);
    if (!m) return d || '';
    var i = FIO_MESI_AB.indexOf(m[2]);
    return i < 0 ? d : FIO_MESI[i];
  }
  Object.keys(reg).forEach(function(k) {
    var bag = reg[k];
    if (!bag || typeof bag !== 'object') return;
    Object.keys(bag).forEach(function(n) {
      var e = bag[n];
      if (!e || typeof e !== 'object' || !Array.isArray(e.h)) return;
      var out = [];
      e.h.forEach(function(x) {
        if (!x) return;
        x.d = mese(x.d);
        var i = -1, j;
        for (j = 0; j < out.length; j++) { if (out[j].d === x.d) { i = j; break; } }
        if (i >= 0) out[i] = x; else out.push(x);
      });
      e.h = out;
      var last = out[out.length - 1];
      if (last) { e.v = last.v; e.d = last.d; e.t = last.t || ''; }
    });
  });
}

window.fioSeedTestRegister = function() {
  var T = window.TEST_2627;
  if (!T || !T.reg) return;
  var key = 'fio_test_register_v2_26-27';
  var reg = {};
  try {
    var raw = JSON.parse(localStorage.getItem(key));
    if (raw && typeof raw === 'object') reg = raw;
  } catch (e) {}
  fioMeseSessioni(reg);
  Object.keys(T.reg).forEach(function(k) {
    var src = T.reg[k] || {};
    var bag = reg[k] || (reg[k] = {});
    Object.keys(src).forEach(function(n) {
      var e = src[n];
      if (!e || e.v === null || e.v === undefined) return;
      var m = { v: e.v, d: e.d || '', t: e.t || '' };
      var old = bag[n];
      // se la casella c'e' gia' si aggiorna solo la rilevazione con la stessa data,
      // cosi' le altre misure prese a mano nella stagione non si perdono
      if (old && Array.isArray(old.h) && old.h.length) {
        var i = -1, j;
        for (j = 0; j < old.h.length; j++) { if (old.h[j] && old.h[j].d === m.d) { i = j; break; } }
        if (i >= 0) old.h[i] = m; else old.h.push(m);
        old.v = m.v; old.d = m.d; old.t = m.t;
      } else {
        m.h = [{ v: m.v, d: m.d, t: m.t }];
        bag[n] = m;
      }
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
// I file dati sono statici: li rigenera lo script locale leggendo la cartella
// della stagione e li mette online la pubblicazione. Il problema era il modo in
// cui il pulsante li rileggeva: chiedeva 'carico_data.js?ts=1234', cioe' un
// indirizzo diverso da quello che la pagina carica davvero, percio' la copia in
// cache restava quella vecchia e dopo il ricaricamento ricompariva lo stesso
// dato di prima. Adesso il giro e' in tre passi: si legge il file online
// saltando ogni cache, si confronta il timbro di generazione con quello gia' in
// memoria e, solo se e' cambiato, si riscarica proprio l'indirizzo usato dalla
// pagina prima di ricaricare. Cosi' il dato nuovo entra davvero, e quando non
// c'e' niente di nuovo lo si dice invece di ricaricare a vuoto.
// Sul Mac un servizio in sottofondo tiene d'occhio la cartella della stagione:
// appena arriva un file nuovo rigenera i dati e li pubblica da solo, senza
// aprire niente. Il pulsante qui e' quindi solo l'ultimo passo, la rilettura.
// ---------------------------------------------------------------------------
window.FIO_DATA_FILES = [
  'carico_data.js',
  'calendario_data.js',
  'esercitazioni_data.js',
  'forza_data.js'
];
// Da "05/08/2026 14:13" a "oggi 14:13", "ieri 09:20", "3 giorni fa". Sotto il
// pulsante c'e' poco spazio e la data per esteso non dice niente a colpo
// d'occhio: quello che serve sapere e' se il dato online e' di oggi.
// I blocchi scritti dallo script locale usano due formati: "06/08/2026 13:52" e
// "2026-08-06T13:52:10". Qui si riporta tutto al primo, cosi' il resto del
// codice ne conosce uno solo.
window.fioNormStamp = function(s) {
  var t = String(s || '').trim();
  var m = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})/.exec(t);
  return m ? (m[3] + '/' + m[2] + '/' + m[1] + ' ' + m[4] + ':' + m[5]) : t;
};
window.fioAgeTxt = function(s) {
  var m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:[ ,]+(\d{1,2}):(\d{2}))?/.exec(window.fioNormStamp(s));
  if (!m) return String(s || '');
  var ora = m[4] ? (('0' + m[4]).slice(-2) + ':' + m[5]) : '';
  var gg = window.fioAgeDays(s);
  if (gg <= 0) return ora ? ('oggi ' + ora) : 'oggi';
  if (gg === 1) return ora ? ('ieri ' + ora) : 'ieri';
  if (gg < 8) return gg + ' giorni fa';
  return m[1] + '/' + m[2];
};
window.fioAgeDays = function(s) {
  var m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(window.fioNormStamp(s));
  if (!m) return 0;
  var g = new Date(+m[3], +m[2] - 1, +m[1]);
  if (isNaN(g.getTime())) return 0;
  var o = new Date();
  o.setHours(0, 0, 0, 0);
  return Math.round((o.getTime() - g.getTime()) / 86400000);
};

// Timbro del dato caricato: testo breve per la riga sotto il pulsante, data per
// esteso per il suggerimento, eta' in giorni per capire se e' rimasto indietro.
window.fioStampInfo = function() {
  if (window.FIO_CLEAN_SEASON) return { raw: '', txt: 'archivio vuoto', gg: 0 };
  var src = [window.SNAP, window.CAL, window.ESERC, window.FORZA];
  var s = '';
  for (var i = 0; i < src.length && !s; i++) {
    if (src[i] && src[i].generato) s = String(src[i].generato).trim();
  }
  if (!s) return { raw: '', txt: 'nessun dato letto', gg: 0 };
  return { raw: s, txt: 'agg. ' + window.fioAgeTxt(s), gg: window.fioAgeDays(s) };
};
window.fioDataStamp = function() {
  return window.fioStampInfo().txt;
};

// Scrive lo stato del dato sotto il pulsante. Se non e' di oggi la riga si
// accende: il tasto ha fatto il suo lavoro, e' la pubblicazione sul Mac che
// manca.
window.fioPaintStamp = function() {
  var btn = document.getElementById('fio-sync-btn');
  var lab = document.getElementById('fio-sync-when');
  var inf = window.fioStampInfo();
  if (lab) {
    lab.textContent = inf.txt;
    lab.title = inf.raw ? ('Dati generati il ' + inf.raw) : '';
  }
  if (btn) {
    if (inf.gg >= 1) btn.classList.add('vecchio');
    else btn.classList.remove('vecchio');
  }
};

// Timbri di generazione di tutti i blocchi dentro il testo del file appena
// scaricato. Si scorre blocco per blocco, cosi' non si prende per sbaglio il
// timbro di quello che viene dopo, e si tiene solo la stagione 26-27: i blocchi
// base (SNAP, CAL, ESERC) vengono riscritti in memoria da applyStagioneData e
// confrontarli darebbe una differenza finta che non sparisce mai.
window.fioStampsIn = function(txt) {
  var out = {};
  var re = /window\.([A-Za-z0-9_]+)\s*=/g;
  var m;
  var punti = [];
  while ((m = re.exec(txt))) punti.push({ v: m[1], i: m.index });
  punti.forEach(function(p, k) {
    if (!/_2627$/.test(p.v)) return;
    var fine = k + 1 < punti.length ? punti[k + 1].i : txt.length;
    var g = /"generato":"([^"]*)"/.exec(txt.slice(p.i, fine));
    out[p.v] = g ? g[1] : '';
  });
  return out;
};

// Quali file dati carica davvero questa pagina. Si guardano i tag script veri e
// propri invece di indovinarlo dalle variabili in memoria: un file puo' esserci
// senza portare la variabile che ci si aspetta, e in quel caso prima veniva
// saltato in silenzio.
window.fioPageDataFiles = function() {
  var tag = document.querySelectorAll('script[src]');
  var out = [];
  for (var i = 0; i < tag.length; i++) {
    var src = String(tag[i].getAttribute('src') || '').split('?')[0];
    var nome = src.slice(src.lastIndexOf('/') + 1);
    if (window.FIO_DATA_FILES.indexOf(nome) >= 0 && out.indexOf(nome) < 0) out.push(nome);
  }
  return out;
};

// Legge i file dati online senza passare dalla cache e dice quali sono cambiati
// rispetto a quelli caricati adesso.
window.fioProbeData = function() {
  if (location.protocol === 'file:') return Promise.reject(new Error('file'));
  var t = Date.now();
  var pagina = window.fioPageDataFiles();
  // Si guardano tutti i file dati, non solo quelli che questa pagina carica: il
  // timbro piu' fresco racconta com'e' messo il sito per intero, anche quando
  // la pagina aperta ne usa uno solo. Cambiati restano comunque solo quelli che
  // la pagina ha davvero in memoria, percio' non si ricarica a vuoto.
  var lista = pagina.slice();
  window.FIO_DATA_FILES.forEach(function(f) {
    if (lista.indexOf(f) < 0) lista.push(f);
  });
  var jobs = lista.map(function(f) {
    return fetch('./' + f + '?ts=' + t, { cache: 'no-store' })
      .then(function(r) { return r.ok ? r.text() : ''; })
      .then(function(txt) {
        if (!txt) return null;
        var st = window.fioStampsIn(txt);
        var vv = Object.keys(st);
        if (!vv.length) return null;
        var cambiato = false;
        var sign = '';
        var primo = '';
        vv.sort().forEach(function(v) {
          sign += v + '=' + st[v] + ';';
          if (!primo && st[v]) primo = st[v];
          var vecchio = String((window[v] || {}).generato || '');
          if (vecchio && st[v] !== vecchio) cambiato = true;
        });
        return { file: f, sign: sign, stamp: primo, cambiato: cambiato };
      })['catch'](function() { return null; });
  });
  return Promise.all(jobs).then(function(res) {
    var out = { attesi: pagina.length, letti: 0, cambiati: [], sign: '', stamp: '' };
    res.forEach(function(r) {
      if (!r) return;
      out.letti++;
      out.sign += r.file + ':' + r.sign;
      if (!out.stamp && r.stamp) out.stamp = r.stamp;
      if (r.cambiato) out.cambiati.push(r.file);
    });
    return out;
  });
};

// Riscarica i file all'indirizzo esatto che la pagina usa negli script, cosi' la
// copia vecchia in cache viene sostituita, e solo dopo ricarica la pagina.
window.fioApplyRefresh = function(files) {
  var jobs = files.map(function(f) { return fetch('./' + f, { cache: 'reload' }); });
  return Promise.all(jobs).then(function() { location.reload(); });
};

// Quando online risulta ancora il dato di ieri il tasto ha fatto il suo lavoro:
// e' la pubblicazione che deve ancora girare per la rete, GitHub ci mette anche
// un minuto buono a far vedere in giro il file appena caricato. Prima qui ci si
// fermava e toccava ripigiare a mano senza sapere quando. Adesso il controllo si
// ripete da solo ogni venti secondi per un paio di minuti e appena il dato nuovo
// compare la pagina si aggiorna da sola, senza che tu stia li' a premere.
window.FIO_RIPROVE = 0;
window.fioRiprovaPiuTardi = function() {
  if (window.FIO_RIPROVE >= 6) return;
  window.FIO_RIPROVE++;
  setTimeout(function() {
    window.fioProbeData().then(function(p) {
      if (!p.cambiati.length) { window.fioRiprovaPiuTardi(); return; }
      var lab = document.getElementById('fio-sync-when');
      if (lab) lab.textContent = 'dato nuovo, ricarico';
      try {
        sessionStorage.setItem('fio_sync_try', p.sign);
        sessionStorage.setItem('fio_sync_n', '1');
      } catch (e) {}
      window.fioApplyRefresh(p.cambiati);
    })['catch'](function() {});
  }, 20000);
};

window.fioRefreshData = function() {
  var btn = document.getElementById('fio-sync-btn');
  var lab = document.getElementById('fio-sync-when');
  if (!btn || btn.classList.contains('busy')) return;
  // Premendo il tasto a mano si riparte da zero con le riprove: e' il segnale
  // che stai aspettando un dato adesso, non un controllo di sottofondo.
  window.FIO_RIPROVE = 0;
  btn.classList.remove('vecchio');
  btn.classList.add('busy');
  btn.disabled = true;
  if (lab) lab.textContent = 'rilettura in corso';
  var fine = function(msg) {
    btn.classList.remove('busy');
    btn.disabled = false;
    if (lab) lab.textContent = msg;
    setTimeout(window.fioPaintStamp, 4200);
  };
  window.fioProbeData().then(function(p) {
    if (!p.attesi) { fine('nessun dato in questa pagina'); return; }
    if (!p.letti) { fine('rilettura fallita, riprova'); return; }
    if (!p.cambiati.length) {
      if (!p.stamp) { fine('nessun dato nuovo'); return; }
      // Distinzione che oggi e' mancata: se online c'e' ancora il dato di ieri
      // il tasto ha fatto il suo lavoro ed e' la pubblicazione a essere rimasta
      // indietro. Dirlo chiaro evita di ripigiare aspettando la seduta di oggi.
      if (window.fioAgeDays(p.stamp) >= 1) {
        btn.classList.add('vecchio');
        fine('online fermo a ' + window.fioAgeTxt(p.stamp) + ', ricontrollo');
        window.fioRiprovaPiuTardi();
      } else {
        fine('gia' + "'" + ' aggiornato, ' + window.fioAgeTxt(p.stamp));
      }
      return;
    }
    try {
      sessionStorage.setItem('fio_sync_try', p.sign);
      sessionStorage.setItem('fio_sync_n', '1');
    } catch (e) {}
    return window.fioApplyRefresh(p.cambiati);
  })['catch'](function(e) {
    fine(e && e.message === 'file' ? 'apri il sito online' : 'rilettura fallita, riprova');
  });
};

// Controllo automatico all'apertura della pagina: se online c'e' un dato piu'
// nuovo di quello caricato, la pagina si aggiorna da sola. Si tiene memoria del
// tentativo cosi' il ricaricamento avviene una volta sola: se il dato risulta
// ancora vecchio vuol dire che il browser sta tenendo la copia sua e lo si dice,
// invece di ricaricare all'infinito.
window.fioAutoCheck = function() {
  var lab = document.getElementById('fio-sync-when');
  window.fioProbeData().then(function(p) {
    if (!p.cambiati.length) return;
    var tried = '';
    try { tried = sessionStorage.getItem('fio_sync_try') || ''; } catch (e) {}
    if (tried === p.sign) {
      // Un ricaricamento e' gia' stato fatto e il dato vecchio e' ancora qui:
      // vuol dire che il browser sta tenendo stretta la copia sua. Arrendersi
      // al primo colpo, come si faceva prima, lasciava la pagina ferma al
      // giorno vecchio proprio quando il dato nuovo c'era gia'. Un secondo giro
      // riscrive la copia in cache e quasi sempre basta. Il conto sta in
      // sessionStorage, quindi sopravvive al ricaricamento e si ferma da solo:
      // niente pagina che si ricarica all'infinito.
      var n = 0;
      try { n = parseInt(sessionStorage.getItem('fio_sync_n') || '0', 10) || 0; } catch (e) {}
      if (n >= 3) {
        if (lab) lab.textContent = 'dato nuovo, ricarica a mano';
        return;
      }
      try { sessionStorage.setItem('fio_sync_n', String(n + 1)); } catch (e) {}
      if (lab) lab.textContent = 'dato nuovo, ricarico';
      window.fioApplyRefresh(p.cambiati);
      return;
    }
    try {
      sessionStorage.setItem('fio_sync_try', p.sign);
      sessionStorage.setItem('fio_sync_n', '1');
    } catch (e) {}
    window.fioApplyRefresh(p.cambiati);
  })['catch'](function() {});
};

window.initSidebarToggle = function() {
  window.applyStagioneData();
  window.paintSeasonBanner();
  // In fondo alla sidebar sta scritto chi e' entrato: con quattro accessi
  // diversi serve saperlo a colpo d'occhio prima di toccare qualcosa.
  // Con la porta spenta non c'e' nessun nome da mostrare e nessun posto da cui
  // uscire: la riga sparisce invece di restare li' a dire una cosa non vera.
  const chi  = window.fioUtente ? window.fioUtente() : null;
  const who  = document.getElementById('fio-who');
  if (window.fioAccessoAttivo === false) {
    if (who) who.remove();
  }
  const cred = document.getElementById('fio-cred');
  const esci = document.getElementById('fio-esci');
  if (cred && chi) {
    cred.innerHTML = '';
    const nome = document.createElement('strong');
    nome.textContent = chi.nome;
    cred.appendChild(nome);
    cred.appendChild(document.createTextNode(chi.ruolo));
  }
  if (esci) esci.addEventListener('click', function() {
    if (window.fioEsci) window.fioEsci();
  });
  const sync = document.getElementById('fio-sync-btn');
  if (sync) {
    window.fioPaintStamp();
    sync.addEventListener('click', window.fioRefreshData);
    document.addEventListener('fio:stagione', window.fioPaintStamp);
    window.fioAutoCheck();
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
/* Se il dato pubblicato non e' di oggi la riga sotto il pulsante si accende:
   vuol dire che sul Mac manca il passaggio di rigenerazione, non che il tasto
   non funziona. */
.sb-sync.vecchio .sb-sync-txt em{color:rgba(255,178,122,.72);}
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
.sb-who{display:flex;align-items:center;gap:8px;}
.sb-cred{font-size:10px;color:rgba(248,250,255,.18);line-height:1.7;padding:0 4px;min-width:0;flex:1;}
.sb-cred strong{color:rgba(248,250,255,.34);display:block;font-size:11px;font-weight:600;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.sb-esci{
  flex-shrink:0;display:flex;align-items:center;justify-content:center;
  width:28px;height:28px;border-radius:8px;cursor:pointer;
  color:rgba(248,250,255,.3);background:none;border:1px solid rgba(255,255,255,.06);
  transition:color .18s ease,background .18s ease,border-color .18s ease;
}
.sb-esci svg{width:15px;height:15px;}
.sb-esci:hover{color:rgba(255,178,122,.9);background:rgba(255,106,46,.10);border-color:rgba(255,106,46,.26);}
.sb-esci:active{transform:scale(.94);}
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
