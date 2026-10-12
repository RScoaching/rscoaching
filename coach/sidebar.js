// RS.Coaching - Shared Sidebar · Premium Glass Design
// ── ICONE: un set solo, tratto 1,75, angoli arrotondati (disegno Lucide, licenza ISC) ──
// window.rsIcon('nome') restituisce l'SVG in linea, alto quanto il testo.
window.RSI = {
  dashboard:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
  atleti:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  gruppi:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  analytics:'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
  builder:'<path d="M14.4 14.4 9.6 9.6"/><path d="M18.66 21.49a2 2 0 1 1-2.83-2.83l-1.77 1.77a2 2 0 1 1-2.83-2.83l6.37-6.36a2 2 0 1 1 2.83 2.83l-1.77 1.76a2 2 0 1 1 2.83 2.83z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.4 12.77a2 2 0 1 1-2.83-2.83l1.77-1.77a2 2 0 1 1-2.83-2.83l2.83-2.83a2 2 0 1 1 2.83 2.83l1.77-1.77a2 2 0 1 1 2.83 2.83z"/>',
  planner:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  libreria:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  strumenti:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>',
  sedute:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>',
  questionari:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  cambia:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  casa:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>',
  profilo:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  invia:'<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/>',
  // tipi di seduta
  pesi:'<path d="M14.4 14.4 9.6 9.6"/><path d="M18.66 21.49a2 2 0 1 1-2.83-2.83l-1.77 1.77a2 2 0 1 1-2.83-2.83l6.37-6.36a2 2 0 1 1 2.83 2.83l-1.77 1.76a2 2 0 1 1 2.83 2.83z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.4 12.77a2 2 0 1 1-2.83-2.83l1.77-1.77a2 2 0 1 1-2.83-2.83l2.83-2.83a2 2 0 1 1 2.83 2.83l1.77-1.77a2 2 0 1 1 2.83 2.83z"/>',
  corsa:'<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  sprint:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  conditioning:'<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  recupero:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  sport:'<circle cx="12" cy="12" r="10"/><path d="m12 7 4.5 3.3-1.7 5.2H9.2l-1.7-5.2z"/><path d="M12 2v5M21.5 9.5l-5 .8M17.5 20l-2.7-4.5M6.5 20l2.7-4.5M2.5 9.5l5 .8"/>',
  ibrido:'<path d="M17 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2"/><path d="M7 21a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2"/><path d="M5 11h14"/><path d="M12 3v18"/>',
  // azioni comuni
  piu:'<path d="M12 5v14M5 12h14"/>',
  chiudi:'<path d="M18 6 6 18M6 6l12 12"/>',
  copia:'<rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  cestino:'<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  cerca:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  su:'<path d="m18 15-6-6-6 6"/>',
  giu:'<path d="m6 9 6 6 6-6"/>',
  sinistra:'<path d="m15 18-6-6 6-6"/>',
  destra:'<path d="m9 18 6-6-6-6"/>',
  avvisa:'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
  ok:'<path d="M20 6 9 17l-5-5"/>',
  test:'<path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/>'
};
window.rsIcon = function(n, cls) {
  const p = window.RSI[n]; if (!p) return '';
  return '<svg class="rsi' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
};
// ogni elemento con data-rsi="nome" riceve l'icona (anche quelli aggiunti dopo, con rsIconFill)
window.rsIconFill = function(root) {
  (root || document).querySelectorAll('[data-rsi]').forEach(function(el){ if (!el.firstElementChild) el.innerHTML = window.rsIcon(el.getAttribute('data-rsi')); });
};
if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', function(){ window.rsIconFill(); });
window.SIDEBAR_HTML = `
<div class="sb-mob-bar" id="sb-mob-bar">
  <button class="sb-ham" id="sb-ham-btn" aria-label="Apri menu">${window.rsIcon('menu')}</button>
  <div class="rs-logo rs-v2 sm"><span class="rs-img rs-mark" role="img" aria-label="RS"></span><div class="rs-word">COACHING</div>
  </div>
</div>
<div class="sb-mob-overlay" id="sb-mob-ov"></div>
<div class="sidebar" id="sb-sidebar">
  <div class="sb-top">
    <div class="rs-logo rs-v2"><span class="rs-img rs-mark" role="img" aria-label="RS"></span><div class="rs-word">COACHING</div>
    </div>
    <div class="logo-sub">Pannello Preparatore</div>
  </div>
  <div class="nav-s">
    <div class="nav-lbl">Panoramica</div>
    <a class="nav-item" aria-label="Dashboard" href="./index.html" data-page="dashboard">
      <span class="nav-icon">${window.rsIcon('dashboard')}</span><span class="nav-lbl-text">Dashboard</span>
    </a>
    <a class="nav-item" aria-label="Atleti" href="./index.html?goto=athletes" data-page="athletes">
      <span class="nav-icon">${window.rsIcon('atleti')}</span><span class="nav-lbl-text">Atleti</span>
    </a>
    <a class="nav-item" aria-label="Questionari" href="./index.html?goto=questionari" data-page="questionari">
      <span class="nav-icon">${window.rsIcon('questionari')}</span><span class="nav-lbl-text">Questionari</span>
    </a>
    <a class="nav-item" aria-label="Analytics" href="./index.html?goto=analytics" data-page="analytics">
      <span class="nav-icon">${window.rsIcon('analytics')}</span><span class="nav-lbl-text">Analytics</span>
    </a>
    <div class="nav-lbl">Programmazione</div>
    <a class="nav-item" aria-label="Program Builder" href="./builder.html" data-page="builder">
      <span class="nav-icon">${window.rsIcon('builder')}</span><span class="nav-lbl-text">Program Builder</span>
    </a>
    <div class="nav-lbl">Comunicazione</div>
    <a class="nav-item" aria-label="Chat" href="./index.html?goto=chat-global" data-page="chat">
      <span class="nav-icon">${window.rsIcon('chat')}</span><span class="nav-lbl-text">Chat</span>
    </a>
    <div class="nav-lbl">Risorse</div>
    <a class="nav-item" aria-label="Esercizi e strumenti" href="./index.html?goto=database" data-page="database">
      <span class="nav-icon">${window.rsIcon('libreria')}</span><span class="nav-lbl-text">Esercizi e strumenti</span>
    </a>
    <a class="nav-item" aria-label="Tutte le sedute" href="./index.html?goto=sessions" data-page="sessions">
      <span class="nav-icon">${window.rsIcon('sedute')}</span><span class="nav-lbl-text">Tutte le sedute</span>
    </a>
  </div>
  <div class="sb-foot">
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
    if (el.dataset.page === pageId) el.classList.add('active');
  });
};

window.initSidebarToggle = function() {
  const ham = document.getElementById('sb-ham-btn');
  const ov  = document.getElementById('sb-mob-ov');
  const sb  = document.getElementById('sb-sidebar');
  if (!ham || !ov || !sb) return;
  function openSb()  { sb.classList.add('open'); ov.classList.add('open'); }
  function closeSb() { sb.classList.remove('open'); ov.classList.remove('open'); }
  ham.addEventListener('click', openSb);
  ov.addEventListener('click', closeSb);
};

window.SIDEBAR_CSS = `
.sidebar{
  width:218px;
  background:#0A0909;
  border-right:1px solid rgba(255,255,255,.07);
  display:flex;flex-direction:column;
  position:sticky;top:0;height:100vh;
  flex-shrink:0;overflow-y:auto;z-index:10;
}
.sb-top{
  padding:24px 18px 16px;
  border-bottom:1px solid rgba(255,255,255,.05);
  flex-shrink:0;
}
/* RS logo lockup (mark + wordmark) */
.rs-logo{display:flex;align-items:center;gap:9px;}
.rs-mark{flex-shrink:0;width:30px;height:30px;}
.rs-word{font-family:'Bebas Neue',sans-serif;line-height:1;letter-spacing:1.5px;font-size:19px;white-space:nowrap;}
.rs-word b{font-weight:400;color:#FF6A2E;}
.rs-word span{font-weight:400;color:#F4F1EC;}
.rs-logo.sm{gap:8px;}
.rs-logo.sm .rs-mark{width:26px;height:26px;}
.rs-logo.sm .rs-word{font-size:16px;letter-spacing:1px;}
.logo-sub{
  font-size:11px;color:rgba(244,241,236,.38);margin-top:7px;
}
.nav-s{padding:10px 8px 0;flex:1;}
.nav-lbl{
  font-size:11px;font-weight:500;color:#77726E;
  padding:0 8px 4px;margin-top:18px;
}
.nav-item{
  display:flex;align-items:center;gap:9px;
  padding:9px 10px;font-size:13px;font-weight:500;
  color:#B9B4B0;
  cursor:pointer;border-radius:8px;margin-bottom:2px;
  text-decoration:none;
  transition:color .15s ease,background .15s ease;
}
.nav-item:hover{
  color:#fff;
  background:rgba(255,255,255,.05);
}
.nav-item.active{
  color:#fff;
  background:rgba(255,255,255,.08);
  font-weight:600;
}
.nav-icon{display:inline-flex;width:18px;height:18px;opacity:.6;flex-shrink:0;transition:opacity .2s;}
.nav-icon .rsi{width:18px;height:18px;}
.rsi{width:1.15em;height:1.15em;vertical-align:-.2em;flex-shrink:0;}
.sb-ham .rsi{width:22px;height:22px;vertical-align:middle;}
.nav-item.active .nav-icon,.nav-item:hover .nav-icon{opacity:1;}
.nav-item.active .nav-icon{color:#FF6A2E;}
.sb-foot{
  padding:12px 14px 14px;
  border-top:1px solid rgba(255,255,255,.05);
  flex-shrink:0;display:flex;flex-direction:column;gap:10px;
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
/* ── Mobile sidebar bar (shared pages) ── */
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
.sb-mob-logo{
  font-family:'Bebas Neue',sans-serif;font-size:20px;
  letter-spacing:3px;color:#F8FAFF;
}
.sb-mob-overlay{
  display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);
  z-index:590;
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
  #sb-sidebar{display:flex !important;transform:none !important;}
  /* da computer la barra e' una striscia di icone: passandoci sopra si apre sopra la pagina
     (larghezza in piu' compensata dal margine, cosi' il contenuto non si sposta) */
  #sb-sidebar{width:58px;overflow-x:hidden;z-index:700;margin-right:0;transition:width .18s ease .06s,margin-right .18s ease .06s,box-shadow .18s ease}
  #sb-sidebar:hover,#sb-sidebar:focus-within{width:218px;margin-right:-160px;box-shadow:12px 0 32px rgba(0,0,0,.45);transition-delay:.12s}
  #sb-sidebar .sb-top{padding:20px 14px 14px}
  #sb-sidebar .nav-s{padding:10px 9px 0}
  #sb-sidebar .nav-item{white-space:nowrap}
  #sb-sidebar .rs-word,#sb-sidebar .logo-sub,#sb-sidebar .nav-lbl,#sb-sidebar .nav-lbl-text,#sb-sidebar .sb-switch span,#sb-sidebar .sb-cred{opacity:0;transition:opacity .12s ease;white-space:nowrap}
  #sb-sidebar:hover .rs-word,#sb-sidebar:hover .logo-sub,#sb-sidebar:hover .nav-lbl,#sb-sidebar:hover .nav-lbl-text,#sb-sidebar:hover .sb-switch span,#sb-sidebar:hover .sb-cred,
  #sb-sidebar:focus-within .rs-word,#sb-sidebar:focus-within .logo-sub,#sb-sidebar:focus-within .nav-lbl,#sb-sidebar:focus-within .nav-lbl-text,#sb-sidebar:focus-within .sb-switch span,#sb-sidebar:focus-within .sb-cred{opacity:1;transition-delay:.14s}
  #sb-sidebar .sb-foot{padding:12px 9px 14px}
}`;

// ── RITMI DI CORSA DAI TEMPI (VDOT di Daniels) ────────────────────────
/* Un motore solo per Atleti, Builder e app atleta. Da un tempo di gara (5 km,
   10 km, mezza, maratona o una distanza qualsiasi) si ricava il VDOT con le
   formule di Daniels e Gilbert, e dal VDOT i cinque ritmi: E facile e lungo,
   M maratona, T soglia, I intervalli, R ripetute brevi. Se c'e' un ritmo di
   soglia misurato vince su quello stimato. RG e' il ritmo gara del programma:
   resta quello dell'obiettivo se il preparatore l'ha fissato.
   Nelle fasi di corsa il campo rit ('E','M','T','I','R','RG') lega il passo al
   ritmo dell'atleta: quando cambiano i tempi le fasi si ricalcolano da sole. */
window.RSRitmi = (function(){
  const DIST = {'5':5000,'10':10000,'21':21097.5,'42':42195};
  const DNOME = {'5':'5 km','10':'10 km','21':'Mezza','42':'Maratona'};
  const CODICI = ['E','M','T','I','R','RG'];
  const NOMI = {E:'Facile e lungo',M:'Maratona',T:'Soglia',I:'Intervalli',R:'Ripetute brevi',RG:'Ritmo gara'};
  const DESC = {E:'corsa facile, lungo, riscaldamento: si parla a frasi intere',M:'il passo della maratona',T:'sostenuto ma controllato, 20-60 minuti in tutto',I:'ripetute da 3-5 minuti, ritmo del 3000-5000',R:'ripetute brevi da 200-400 m, veloci e sciolte',RG:'il passo dell\'obiettivo di gara'};
  const vo2 = v => -4.60 + 0.182258*v + 0.000104*v*v;
  const pct = t => 0.8 + 0.1894393*Math.exp(-0.012778*t) + 0.2989558*Math.exp(-0.1932605*t);
  const vAt = o => (-0.182258 + Math.sqrt(0.182258*0.182258 + 4*0.000104*(o+4.60))) / (2*0.000104);
  function sec1(t){const p=String(t||'').trim().split(':').map(Number);if(!p.length||p.some(x=>!isFinite(x)))return null;return p.length===3?p[0]*3600+p[1]*60+p[2]:p.length===2?p[0]*60+p[1]:p.length===1&&p[0]>0?p[0]*60:null;}
  // "45:30", "1:32:10", "45'30\"", "1h32'10", "1h 32' 10\"", "5:20/km"
  function sec(t){
    t=String(t==null?'':t).trim().replace(/\s*(?:min\s*)?\/\s*km\b\.?/gi,'');
    if(!t)return null;
    const h=/^(\d+)\s*h\s*(\d{1,2})?\s*'?\s*(\d{1,2})?\s*"?$/i.exec(t);
    if(h)return (+h[1])*3600+(+(h[2]||0))*60+(+(h[3]||0));
    t=t.replace(/(\d+)\s*'\s*(\d{1,2})\s*"?/g,'$1:$2').replace(/'$/,'').replace(/[.,](\d{2})$/,':$1').trim();
    if(/\d\s*[-\u2013]\s*\d/.test(t)){const v=t.split(/\s*[-\u2013]\s*/).map(sec1).filter(x=>x!=null);return v.length?Math.round(v.reduce((x,y)=>x+y,0)/v.length):null;}
    return sec1(t);
  }
  function passo(s){if(!s||!isFinite(s))return '';const t=Math.round(s),m=Math.floor(t/60),x=t%60;return m+':'+String(x).padStart(2,'0');}
  function tempo(s){if(!s||!isFinite(s))return '';const t=Math.round(s),h=Math.floor(t/3600),m=Math.floor(t%3600/60),x=t%60;return (h?h+':'+String(m).padStart(2,'0'):m)+':'+String(x).padStart(2,'0');}
  function metri(d){if(DIST[d])return DIST[d];const x=parseFloat(String(d||'').replace(',','.'));return isFinite(x)&&x>0?(x<100?x*1000:x):null;}
  function distNome(d){return DNOME[d]||(metri(d)?(String(metri(d)/1000).replace('.',',')+' km'):String(d||''));}
  function vdot(m,s){if(!m||!s)return null;const t=s/60,v=m/t;const r=vo2(v)/pct(t);return isFinite(r)&&r>15&&r<90?r:null;}
  // tempo previsto su una distanza per un VDOT (bisezione)
  function previsto(V,m){let lo=m/1000*100,hi=m/1000*1200;for(let i=0;i<60;i++){const mid=(lo+hi)/2;if(vdot(m,mid)>V)lo=mid;else hi=mid;}return (lo+hi)/2;}
  const pAt = (V,f) => 60000/vAt(V*f);
  const r5 = s => Math.round(s/5)*5;
  // VDOT da un ritmo di soglia (T e' circa l'88% del massimo consumo)
  function vdotDaSoglia(sT){if(!sT)return null;let lo=20,hi=85;for(let i=0;i<50;i++){const mid=(lo+hi)/2;if(pAt(mid,0.88)>sT)lo=mid;else hi=mid;}return (lo+hi)/2;}
  function daVdot(V){
    const I=pAt(V,0.975);
    return {vdot:Math.round(V*10)/10,vx:V,E:[r5(pAt(V,0.70)),r5(pAt(V,0.62))],M:Math.round(previsto(V,42195)/42.195),T:Math.round(pAt(V,0.88)),I:Math.round(I),R:Math.round(I*0.955)};
  }
  function dataTs(d){const m=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(String(d||'').trim());if(m)return new Date(+m[3],+m[2]-1,+m[1]).getTime();const x=/^(\d{4})-(\d{2})-(\d{2})/.exec(String(d||''));return x?new Date(+x[1],+x[2]-1,+x[3]).getTime():0;}
  // elenco dei tempi { id: {tipo:'gara'|'soglia', dist, sec, fc, date, note} } -> ritmi
  // base: l'id scelto dal preparatore, se no la gara piu' recente (a parita' di data la migliore)
  function calcola(tempi,baseId){
    const L=Object.entries(tempi||{}).map(([id,x])=>Object.assign({id},x)).filter(x=>x&&(x.sec>0||x.fc>0));
    const gare=L.filter(x=>x.tipo!=='soglia'&&metri(x.dist)).map(x=>Object.assign(x,{V:vdot(metri(x.dist),x.sec),t:dataTs(x.date)})).filter(x=>x.V);
    gare.sort((a,b)=>b.t-a.t||b.V-a.V);
    const soglie=L.filter(x=>x.tipo==='soglia').map(x=>Object.assign(x,{t:dataTs(x.date)})).sort((a,b)=>b.t-a.t);
    const fcS=L.filter(x=>x.tipo==='soglia'&&x.fc).sort((a,b)=>dataTs(b.date)-dataTs(a.date))[0];
    let base=gare.find(x=>x.id===baseId)||gare[0];
    const sT=soglie.find(x=>x.sec>0&&x.sec<600);
    let R=null;
    if(base){R=daVdot(base.V);R.fonte=distNome(base.dist)+' in '+tempo(base.sec)+(base.date?' del '+base.date:'');R.baseId=base.id;}
    else if(sT){R=daVdot(vdotDaSoglia(sT.sec));R.fonte='soglia '+passo(sT.sec)+'/km'+(sT.date?' del '+sT.date:'');}
    if(!R)return fcS?{fcSoglia:+fcS.fc}:null;
    // la soglia misurata vince se non e' piu' vecchia della gara di base
    if(base&&sT&&sT.t>=base.t-90*864e5){R.T=Math.round(sT.sec);R.sogliaMisurata=true;}
    else if(!base&&sT)R.sogliaMisurata=true;
    if(fcS)R.fcSoglia=+fcS.fc;
    R.prev={};['5','10','21','42'].forEach(d=>{R.prev[d]=Math.round(previsto(R.vx||R.vdot,DIST[d]));});
    R.ts=Date.now();
    return R;
  }
  // zone di frequenza dalla FC di soglia (Friel, corsa)
  function zoneFc(fc){fc=+fc;if(!fc)return null;const p=x=>Math.round(fc*x);return {Z1:'<'+p(0.85),Z2:p(0.85)+'-'+p(0.89),Z3:p(0.90)+'-'+p(0.94),Z4:p(0.95)+'-'+p(1.0),Z5:'>'+p(1.0)};}
  // valore di un codice per un atleta e un programma (RG dal programma)
  function valore(R,cod,rg){if(cod==='RG')return rg||null;if(!R)return null;return R[cod]||null;}
  function testo(v){return Array.isArray(v)?passo(v[0])+'-'+passo(v[1]):passo(v);}
  // ritmo gara di un programma: tempo obiettivo della scheda, poi quello fissato, poi la previsione
  // ritmi fissati a mano dal preparatore per un programma (programs/{pid}/ritmi/fissi): valgono sui calcolati
  function conFissi(p,R){const P=p&&p.ritmi,F=P&&P.fissi;if(!F)return R;const o=Object.assign({},R||{});Object.keys(F).forEach(c=>{if(F[c]&&c!=='RG'&&P[c]!=null)o[c]=P[c];});return o;}
  function rgProgramma(p,R){
    const I0=p&&p.intake||{},I=I0.obiettivo==='ibrido'&&[5,10,21,42].includes(+I0.ibGara)?Object.assign({},I0,{obiettivo:'gara',garaDist:+I0.ibGara}):I0;const D=+I.garaDist;
    // un ritmo gara fissato da un piano importato (PDF del preparatore) e' la decisione piu' recente: vince sulla scheda
    if(p&&p.ritmi&&p.ritmi.RGfisso&&p.ritmi.RG)return p.ritmi.RG;
    if(I.obiettivo==='gara'&&D&&sec(I.garaTempo))return Math.round(sec(I.garaTempo)/(DIST[String(D)]||D*1000)*1000);
    if(I.obiettivo==='gara'&&D&&R&&R.vdot)return Math.round(previsto(R.vdot,DIST[String(D)]||D*1000)/((DIST[String(D)]||D*1000)/1000));
    return p&&p.ritmi&&p.ritmi.RG||null;
  }
  // che ritmo e' una fase, quando non e' scritto: dal tipo, dalla zona, dalle note
  function codice(f){
    if(!f)return null;if(f.rit&&CODICI.includes(f.rit))return f.rit;
    const t=((f.tipo||'')+' '+(f.note||'')).toLowerCase(),z=(/Z[1-5]/.exec(f.zona||'')||[])[0]||'';
    if(/progressiv|fartlek|salit|allung|sprint|test/.test(t))return null;
    if(/passo gara|ritmo gara|race pace/.test(t))return 'RG';
    if(/riscald|defatic|fondo lento|long run|lungo|corsa facile|rigenera|recupero|easy|lento/.test(t)||z==='Z1'||z==='Z2')return 'E';
    if(/soglia|threshold|cruise|tempo run/.test(t)||z==='Z4')return 'T';
    if(/maratona|medio/.test(t)&&(z==='Z3'||!z))return 'M';
    if(z==='Z5'||/interval|vo2|ripetut/.test(t)){const m=metri(String(f.repDist||'').replace(/\s*m$/,''));return (m&&m<=400)||/\b(200|300|400)\s*m/.test(f.repDist||'')?'R':'I';}
    return null;
  }
  // codice che corrisponde a un passo scritto, guardando i ritmi con cui il programma e' stato scritto
  function codiceDaPasso(pc,vecchi){
    if(!vecchi)return null;const s=sec(pc);if(!s)return null;
    let best=null,d=99;
    CODICI.forEach(c=>{const v=vecchi[c];if(!v)return;const x=Array.isArray(v)?(v[0]+v[1])/2:v;const dd=Math.abs(x-s);if(dd<d){d=dd;best=c;}});
    return d<=4?best:null;
  }
  // codice di una fase scritta: il campo rit, poi il tipo se il passo e' quello del suo ritmo,
  // poi il ritmo piu' vicino fra quelli con cui e' stato scritto il programma, poi il tipo
  function codiceFase(f,att,vecchi){
    if(f&&f.rit&&CODICI.includes(f.rit))return f.rit;
    const h=codice(f),s=sec(att);
    if(h&&vecchi&&vecchi[h]&&s){const v=vecchi[h],x=Array.isArray(v)?(v[0]+v[1])/2:v;if(Math.abs(x-s)<=4)return h;}
    return codiceDaPasso(att,vecchi)||h;
  }
  // ricalcola le fasi di un programma con i ritmi nuovi. Restituisce i cambi senza scrivere.
  // p: programma, R: ritmi nuovi dell'atleta, opz.vecchi: ritmi con cui erano scritti
  function ricalcola(p,R,opz){
    opz=opz||{};let vecchi=opz.vecchi||(p&&p.ritmi)||null;if(vecchi&&vecchi.prima)vecchi=Object.assign({},vecchi,vecchi.prima);R=conFissi(p,R);const rg=rgProgramma(p,R);
    const cambi=[];
    Object.entries(p&&p.weeks||{}).forEach(([wid,w])=>{
      Object.entries(w&&w.sessions||{}).forEach(([sid,s])=>{
        if(!s||s.type!=='corsa'||!Array.isArray(s.corsaFasi))return;
        s.corsaFasi.forEach((f,i)=>{
          if(!f)return;
          const campo=f.repPace!=null&&f.repPace!==''?'repPace':(f.pace!=null&&f.pace!==''?'pace':(f.rit?(f.reps||f.repDist?'repPace':'pace'):null));
          if(!campo)return;
          const att=String(f[campo]||'');
          if(att&&!sec(att)&&!f.rit)return;
          if(/fino a/.test(att)&&!f.rit)return;
          const cod=codiceFase(f,att,vecchi);
          if(!cod)return;
          const v=valore(R,cod,rg);if(!v)return;
          const nuovo=testo(v)+(/\/\s*km/.test(att)?' /km':'');
          if(nuovo===att&&f.rit===cod)return;
          cambi.push({wid,sid,i,campo,da:att,a:nuovo,cod,week:w.label||'',order:w.order||0,sess:s.name||'',tipo:f.tipo||''});
        });
      });
    });
    cambi.sort((a,b)=>a.order-b.order);
    return {cambi,rg};
  }
  // "6:15-7:00" -> [375,420], "5:20" -> 320: i ritmi di un file o di una tabella
  function daTesto(o){const r={};Object.keys(o||{}).forEach(k=>{const t=String(o[k]||'');const c=k==='L'?'E':k;if(!CODICI.includes(c))return;const p=t.split(/\s*-\s*/).map(sec).filter(Boolean);if(p.length===2)r[c]=p;else if(p.length===1)r[c]=p[0];});return r;}
  // mette il campo rit sulle fasi che corrispondono ai ritmi con cui sono state scritte
  function etichetta(fasi,vecchi){(fasi||[]).forEach(f=>{if(!f||f.rit)return;const campo=f.repPace?'repPace':(f.pace?'pace':null);if(!campo||/fino a/.test(f[campo]))return;const c=codiceFase(f,f[campo],vecchi);if(c&&vecchi[c]){const v=vecchi[c],x=Array.isArray(v)?(v[0]+v[1])/2:v;if(Math.abs(x-sec(f[campo]))<=6)f.rit=c;}});return fasi;}
  // ritmi da salvare nel programma dopo un ricalcolo, per riconoscere i passi la volta dopo
  function istantanea(R,rg,fisso,p){R=conFissi(p,R);const o={};['E','M','T','I','R'].forEach(c=>{if(R&&R[c])o[c]=R[c];});if(rg)o.RG=rg;if(fisso)o.RGfisso=true;if(R&&R.vdot)o.vdot=R.vdot;const F=p&&p.ritmi&&p.ritmi.fissi;if(F)o.fissi=Object.assign({},F);o.ts=Date.now();return o;}
  // passo di una fase per l'app atleta: se la fase ha un codice e l'atleta ha i suoi ritmi, i suoi
  function passoFase(f,R,campo){const v=f&&f.rit&&f.rit!=='RG'&&R?R[f.rit]:null;return v?testo(v):(f?f[campo]||'':'');}
  return {DIST,DNOME,CODICI,NOMI,DESC,sec,passo,tempo,metri,distNome,vdot,previsto,daVdot,vdotDaSoglia,calcola,zoneFc,valore,testo,rgProgramma,conFissi,codice,codiceDaPasso,codiceFase,daTesto,etichetta,ricalcola,istantanea,passoFase,dataTs};
})();

// ── OROLOGIO: SEDUTE DI CORSA IN FILE E ATTIVITA' DAI FILE ─────────────
/* Una seduta di corsa (corsaFasi) diventa una lista di passi strutturati: durata a
   distanza o a tempo (o al tasto lap), passo come fascia di velocita', ripetute con
   recupero. Dai passi escono: il workout .FIT (Garmin: cavo USB, cartella
   GARMIN/NewFiles; intervals.icu lo importa e lo manda a Garmin Connect e COROS),
   il testo per il costruttore di intervals.icu e il pacchetto JSON che Claude passa
   al connettore Garmin (MCP). Al contrario, un'attivita' .FIT o .GPX dell'orologio
   (o esportata da Strava) da' km, tempo, passo, FC e giri per il confronto. */
window.RSOrologio = (function(){
  const RR = () => window.RSRitmi;
  const FIT_EPOCH = 631065600; // 31/12/1989 in secondi Unix
  // ── durate: "2 km", "1,5 km", "400 m", "15'", "1h 20'", "90\"", "3:00", "6" (km)
  function durata(t){
    t=String(t==null?'':t).toLowerCase().replace(/,/g,'.').trim();
    if(!t)return null;
    let m;
    if((m=/(\d+(?:\.\d+)?)\s*km\b/.exec(t)))return {tipo:'dist',m:Math.round(+m[1]*1000)};
    if((m=/(\d+(?:\.\d+)?)\s*(?:m|mt|mtr|metri)\b(?!in)/.exec(t))&&!/'|"/.test(t))return {tipo:'dist',m:Math.round(+m[1])};
    let s=0,ok=false;
    if((m=/(\d+)\s*h/.exec(t))){s+=+m[1]*3600;ok=true;}
    if((m=/(\d+(?:\.\d+)?)\s*(?:'|min\b|minuti|′)(?!')/.exec(t))){s+=+m[1]*60;ok=true;}
    if((m=/(\d+)\s*(?:"|''|sec\b|secondi|s\b|″)/.exec(t))&&!/^\d+\s*'\s*$/.test(t)){const mm=/(\d+)\s*'\s*(\d+)\s*("|'')/.exec(t);s+=mm?+mm[2]:+m[1];ok=true;}
    if(ok&&s>0)return {tipo:'time',s:Math.round(s)};
    if((m=/^(\d{1,2}):(\d{2})$/.exec(t)))return {tipo:'time',s:+m[1]*60+(+m[2])};
    if((m=/^(\d+(?:\.\d+)?)$/.exec(t))){const x=+m[1];if(x>0&&x<=45)return {tipo:'dist',m:Math.round(x*1000)};if(x>=100)return {tipo:'dist',m:Math.round(x)};}
    return null;
  }
  // pezzi di una piramide: "400-800-1200-800-400 m", "1'-2'-3'-2'-1'"
  function pezzi(t){
    const s=String(t||'').replace(/\(.*?\)/g,'').trim();
    if(!/\d\s*['"m]?\s*-\s*\d/.test(s)||/^\d+\s*-\s*\d+\s*"/.test(s))return null;
    const unita=(/\s*(km|m)\s*$/i.exec(s)||[])[1]||'';
    const p=s.replace(/\s*(km|m)\s*$/i,'').split(/\s*-\s*/).map(x=>durata(x+(/['"]/.test(x)?'':(unita?' '+unita:''))));
    return p.length>1&&p.every(Boolean)?p:null;
  }
  // fascia di passo (secondi al km): [lento, veloce]
  function fascia(txt){
    const r=RR();const t=String(txt||'');if(!t||/fino a/.test(t))return null;
    const p=t.replace(/\s*\/\s*km/i,'').split(/\s*-\s*/).map(r.sec).filter(x=>x&&x>=150&&x<=900);
    if(p.length===2)return [Math.max(p[0],p[1]),Math.min(p[0],p[1])];
    if(p.length===1)return [p[0]+5,p[0]-5];
    return null;
  }
  function passoDi(f,campo,R){const r=RR();return r&&f.rit&&f.rit!=='RG'&&R?r.passoFase(f,R,campo):(f[campo]||'');}
  function fcDi(f,R){const z=(/Z[1-5]/.exec(f.zona||'')||[])[0];if(!z||!R||!R.fcSoglia)return null;const fc=+R.fcSoglia,P={Z1:[0.70,0.85],Z2:[0.85,0.89],Z3:[0.90,0.94],Z4:[0.95,1.0],Z5:[1.0,1.06]}[z];return [Math.round(fc*P[0]),Math.round(fc*P[1])];}
  /* Bersagli sull'orologio: le parti facili (fondo lento, lungo facile, riscaldamento,
     defaticamento, ritmo E) non hanno passo ne' FC; i passi di lavoro hanno sempre una fascia
     di 20" sopra e 20" sotto il passo indicato (passo gara 5:30 -> 5:10-5:50): il passo giusto
     resta nella nota, la fascia evita che l'orologio suoni a ogni oscillazione. */
  const FACILE_OR=/fondo lento|long run|lungo|rigener|riscald|defatic|attivaz|corsa facile|easy|recupero|camminat/i;
  function facileOr(f){return f&&(FACILE_OR.test(f.tipo||'')||f.rit==='E'||/^Z[12]$/.test(f.zona||'')&&!/passo gara|soglia|ripet|interv|progress|fartlek/i.test(f.tipo||''));}
  function target(f,campo,R,preciso){
    if(preciso){const fp=fascia(passoDi(f,campo,R));if(fp)return {tipo:'pace',lo:fp[0],hi:fp[1]};const h=fcDi(f,R);return h?{tipo:'hr',lo:h[0],hi:h[1]}:null;}
    if(facileOr(f))return null;
    const fa=fascia(passoDi(f,campo,R));
    if(fa){const c=(fa[0]+fa[1])/2;return {tipo:'pace',lo:c+20,hi:c-20,centro:c};}
    const hr=fcDi(f,R);return hr?{tipo:'hr',lo:hr[0],hi:hr[1]}:null;
  }
  function intens(tipo){const t=String(tipo||'').toLowerCase();return /riscald|attivaz/.test(t)?'warmup':/defatic/.test(t)?'cooldown':'active';}
  // recupero: "90\"", "2' trotto", "1 km lento", "500 m", "discesa", "ritorno al passo"
  function recupero(f){
    const txt=[f.recDist,f.recTime,f.rec].filter(Boolean).join(' ');const p=String(f.recPace||'');
    const d=durata(txt);const fermo=/fermo|camminat|passo\b/.test(txt+' '+p)&&!/trotto/.test(txt+' '+p);
    const nome=(txt+(p&&!txt.includes(p)?' '+p:'')).trim()||'Recupero';
    if(!txt&&!p)return null;
    return {kind:'step',nome:'Recupero',note:nome,intens:fermo?'rest':'recovery',dur:d||{tipo:'open'},target:null};
  }
  // ── da una seduta ai passi
  // preciso: il passo esatto del programma (per il confronto con la corsa fatta), senza fasce ne' parti facili scoperte
  // passo previsto, solo per stimare km e minuti (anche dove sull'orologio non c'e' bersaglio)
  function pStima(f,campo,R){const fp=fascia(passoDi(f,campo,R));return fp?(fp[0]+fp[1])/2:null;}
  function passi(s,R,preciso){
    const out=[];const arr=Array.isArray(s&&s.corsaFasi)?s.corsaFasi:Object.values(s&&s.corsaFasi||{});
    arr.forEach(f=>{
      if(!f)return;
      const nome=String(f.tipo||'Corsa').slice(0,30),note=[f.zona,f.note].filter(Boolean).join(' - ');
      const intv=f.reps||f.repDist||f.repPace;
      if(!intv){
        // sull'orologio le parti facili si chiamano solo Easy, senza passo ne' FC
        out.push({kind:'step',nome:!preciso&&facileOr(f)?'Easy':nome,note:!preciso&&facileOr(f)?'':note,intens:intens(f.tipo),dur:durata(f.dist)||{tipo:'open'},target:target(f,'pace',R,preciso),ps:pStima(f,'pace',R)});
        return;
      }
      const n=Math.max(1,parseInt(f.reps,10)||1),ser=Math.max(1,parseInt(f.serie,10)||1);
      const tg=target(f,'repPace',R,preciso),ps=pStima(f,'repPace',R),rec=recupero(f),pz=pezzi(f.repDist);
      const lavoro=pz?pz.map((d,i)=>({kind:'step',nome:nome+' '+(i+1),note,intens:'active',dur:d,target:tg,ps})):[{kind:'step',nome,note,intens:'active',dur:durata(f.repDist)||{tipo:'open'},target:tg,ps}];
      const blocco=[];lavoro.forEach((x,i)=>{blocco.push(x);if(rec&&(pz?i<lavoro.length-1||n>1:true))blocco.push(Object.assign({},rec));});
      for(let k=0;k<ser;k++){
        if(n>1)out.push({kind:'repeat',n,steps:blocco.map(x=>Object.assign({},x))});
        else blocco.forEach(x=>out.push(Object.assign({},x)));
        if(k<ser-1)out.push({kind:'step',nome:'Fra le serie',note:String(f.recSerie||''),intens:'rest',dur:durata(f.recSerie)||{tipo:'open'},target:null});
      }
    });
    return out;
  }
  // passi in fila, con le ripetizioni srotolate: per i conti e per il confronto coi giri
  function inFila(P){const o=[];P.forEach(x=>{if(x.kind==='repeat'){for(let i=0;i<x.n;i++)x.steps.forEach(y=>o.push(y));}else o.push(x);});return o;}
  // stima di km e minuti: a tempo col passo del bersaglio (o 6:00), a distanza idem
  function stima(P){
    let m=0,s=0;inFila(P).forEach(x=>{const pc=x.ps?x.ps:x.target&&x.target.tipo==='pace'?(x.target.lo+x.target.hi)/2:(x.intens==='rest'?900:x.intens==='recovery'?420:360);
      if(x.dur.tipo==='dist'){m+=x.dur.m;s+=x.dur.m/1000*pc;}else if(x.dur.tipo==='time'){s+=x.dur.s;if(x.intens!=='rest')m+=x.dur.s/pc*1000;}});
    return {km:Math.round(m/100)/10,min:Math.round(s/60)};
  }
  const pTxt=s=>RR().passo(s);
  function durTxt(d){if(!d||d.tipo==='open')return 'tasto lap';if(d.tipo==='dist')return d.m>=1000?String(Math.round(d.m/100)/10).replace('.',',')+' km':d.m+' m';const m=Math.floor(d.s/60),x=d.s%60;return m?(m+'\''+(x?String(x).padStart(2,'0')+'"':'')):x+'"';}
  function tgTxt(t){if(!t)return '';if(t.tipo==='pace')return pTxt(t.hi)+'-'+pTxt(t.lo)+' /km';return 'FC '+t.lo+'-'+t.hi;}
  // righe leggibili, come le vedra' l'orologio
  function righe(P){const o=[];P.forEach(x=>{if(x.kind==='repeat'){o.push({rip:x.n,righe:x.steps.map(y=>({nome:y.nome,dur:durTxt(y.dur),tg:tgTxt(y.target),intens:y.intens}))});}else o.push({nome:x.nome,dur:durTxt(x.dur),tg:tgTxt(x.target),intens:x.intens});});return o;}

  // ── FIT: scrittura
  const CRC_T=[0x0000,0xCC01,0xD801,0x1400,0xF001,0x3C00,0x2800,0xE401,0xA001,0x6C00,0x7800,0xB401,0x5000,0x9C01,0x8801,0x4400];
  function crc16(bytes,crc){crc=crc||0;for(let i=0;i<bytes.length;i++){const b=bytes[i];let t=CRC_T[crc&0xF];crc=(crc>>4)&0x0FFF;crc=crc^t^CRC_T[b&0xF];t=CRC_T[crc&0xF];crc=(crc>>4)&0x0FFF;crc=crc^t^CRC_T[(b>>4)&0xF];}return crc;}
  function utf8(s){return new TextEncoder().encode(String(s||''));}
  // passi nell'ordine del file FIT: la ripetizione e' un passo in piu' dopo il blocco
  function fitLista(P){const st=[];P.forEach(x=>{if(x.kind==='repeat'){const da=st.length;x.steps.forEach(y=>st.push(y));st.push({rep:true,da,n:x.n});}else st.push(x);});return st;}
  function fitWorkout(nome,P){
    const B=[];const u8=v=>B.push(v&0xFF),u16=v=>{u8(v);u8(v>>8);},u32=v=>{v=v>>>0;u8(v);u8(v>>>8);u8(v>>>16);u8(v>>>24);};
    const str=(s,n)=>{let b=utf8(s);if(b.length>n-1){b=b.slice(0,n-1);while(b.length&&(b[b.length-1]&0xC0)===0x80)b=b.slice(0,-1);if(b.length&&b[b.length-1]>=0xC0)b=b.slice(0,-1);}for(let i=0;i<n;i++)u8(i<b.length?b[i]:0);};
    const def=(loc,glob,fields)=>{u8(0x40|loc);u8(0);u8(0);u16(glob);u8(fields.length);fields.forEach(([n,s,t])=>{u8(n);u8(s);u8(t);});};
    // passi FIT: le ripetizioni diventano un passo "ripeti dal passo k per n volte"
    const st=fitLista(P);
    const now=Math.floor(Date.now()/1000)-FIT_EPOCH;
    // file_id
    def(0,0,[[0,1,0x00],[1,2,0x84],[2,2,0x84],[3,4,0x8C],[4,4,0x86]]);
    u8(0);u8(5);u16(255);u16(0);u32((Math.random()*0xFFFFFFF)|1);u32(now);
    // workout
    def(1,26,[[8,40,0x07],[4,1,0x00],[11,1,0x00],[6,2,0x84]]);
    u8(1);str(nome,40);u8(1);u8(0);u16(st.length);
    // workout_step
    def(2,27,[[254,2,0x84],[0,32,0x07],[1,1,0x00],[2,4,0x86],[3,1,0x00],[4,4,0x86],[5,4,0x86],[6,4,0x86],[7,1,0x00],[8,64,0x07]]);
    const INT={active:0,rest:1,warmup:2,cooldown:3,recovery:4};
    st.forEach((x,i)=>{
      u8(2);u16(i);
      if(x.rep){str('',32);u8(6);u32(x.da);u8(0xFF);u32(x.n);u32(0);u32(0);u8(0);str('',64);return;}
      str(x.nome,32);
      if(x.dur.tipo==='dist'){u8(1);u32(Math.round(x.dur.m*100));}
      else if(x.dur.tipo==='time'){u8(0);u32(Math.round(x.dur.s*1000));}
      else{u8(5);u32(0);}
      if(x.target&&x.target.tipo==='pace'){u8(0);u32(0);u32(Math.round(1000/x.target.lo*1000));u32(Math.round(1000/x.target.hi*1000));}
      else if(x.target&&x.target.tipo==='hr'){u8(1);u32(0);u32(x.target.lo+100);u32(x.target.hi+100);}
      else{u8(2);u32(0);u32(0);u32(0);}
      u8(INT[x.intens]!=null?INT[x.intens]:0);
      str(x.note||'',64);
    });
    const data=new Uint8Array(B);
    const h=[];const w16=v=>{h.push(v&0xFF,(v>>8)&0xFF);};
    h.push(14,0x10);w16(2132);const ds=data.length;h.push(ds&0xFF,(ds>>8)&0xFF,(ds>>16)&0xFF,(ds>>>24)&0xFF);h.push(46,70,73,84);
    const hc=crc16(new Uint8Array(h));w16(hc);
    const out=new Uint8Array(14+ds+2);out.set(h,0);out.set(data,14);
    const c=crc16(out.subarray(0,14+ds));out[14+ds]=c&0xFF;out[15+ds]=(c>>8)&0xFF;
    return out;
  }
  // ── testo per il costruttore di intervals.icu
  function icu(P){
    const L=[];const d=x=>x.dur.tipo==='dist'?(x.dur.m>=1000&&x.dur.m%100===0?String(x.dur.m/1000)+'km':x.dur.m+'mtr'):x.dur.tipo==='time'?(Math.floor(x.dur.s/60)?Math.floor(x.dur.s/60)+'m':'')+(x.dur.s%60?x.dur.s%60+'s':''):'';
    const t=x=>x.target&&x.target.tipo==='pace'?' '+pTxt(x.target.hi)+'/km-'+pTxt(x.target.lo)+'/km Pace':x.target&&x.target.tipo==='hr'?' '+x.target.lo+'-'+x.target.hi+'bpm HR':'';
    const riga=x=>'- '+(d(x)?'':'Press lap ')+(x.intens==='warmup'?'Warmup ':x.intens==='cooldown'?'Cooldown ':'')+String(x.nome).replace(/[-\n]/g,' ')+' '+(d(x)||(x.intens==='rest'?'3m':x.intens==='recovery'?'2m':'5m'))+t(x);
    P.forEach(x=>{if(x.kind==='repeat'){if(L.length&&L[L.length-1]!=='')L.push('');L.push(x.n+'x');x.steps.forEach(y=>L.push(riga(y)));L.push('');}else L.push(riga(x));});
    return L.join('\n').replace(/\n{3,}/g,'\n\n').trim();
  }
  // ── passi in JSON neutro (velocita' in m/s), per il connettore Garmin
  function jsonPassi(P){
    const one=x=>({nome:x.nome,note:x.note||'',tipo:x.intens,durata:x.dur.tipo==='dist'?{metri:x.dur.m}:x.dur.tipo==='time'?{secondi:x.dur.s}:{lap:true},
      bersaglio:x.target?(x.target.tipo==='pace'?{passo:pTxt(x.target.hi)+'-'+pTxt(x.target.lo),ms_min:Math.round(1000/x.target.lo*1000)/1000,ms_max:Math.round(1000/x.target.hi*1000)/1000}:{fc_min:x.target.lo,fc_max:x.target.hi}):null});
    return P.map(x=>x.kind==='repeat'?{ripeti:x.n,passi:x.steps.map(one)}:one(x));
  }
  // ── ZIP senza compressione (piu' file .fit in uno)
  let CRC32=null;
  function crc32(b){if(!CRC32){CRC32=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;CRC32[n]=c>>>0;}}let c=0xFFFFFFFF;for(let i=0;i<b.length;i++)c=CRC32[(c^b[i])&0xFF]^(c>>>8);return (c^0xFFFFFFFF)>>>0;}
  function zip(files){
    const parti=[],centr=[];let off=0;
    const le=(n,v)=>{const a=[];for(let i=0;i<n;i++)a.push((v>>>(8*i))&0xFF);return a;};
    const d=new Date(),dt=((d.getHours()<<11)|(d.getMinutes()<<5)|(d.getSeconds()>>1)),dd=(((d.getFullYear()-1980)<<9)|((d.getMonth()+1)<<5)|d.getDate());
    files.forEach(f=>{
      const nm=utf8(f.nome),c=crc32(f.dati),n=f.dati.length;
      const h=[].concat(le(4,0x04034b50),le(2,20),le(2,0x0800),le(2,0),le(2,dt),le(2,dd),le(4,c),le(4,n),le(4,n),le(2,nm.length),le(2,0));
      parti.push(new Uint8Array(h),nm,f.dati);
      centr.push(new Uint8Array([].concat(le(4,0x02014b50),le(2,20),le(2,20),le(2,0x0800),le(2,0),le(2,dt),le(2,dd),le(4,c),le(4,n),le(4,n),le(2,nm.length),le(2,0),le(2,0),le(2,0),le(2,0),le(4,0),le(4,off))),nm);
      off+=h.length+nm.length+n;
    });
    const cs=centr.reduce((t,x)=>t+x.length,0);
    const fine=new Uint8Array([].concat(le(4,0x06054b50),le(2,0),le(2,0),le(2,files.length),le(2,files.length),le(4,cs),le(4,off),le(2,0)));
    const tot=parti.concat(centr,[fine]);const out=new Uint8Array(tot.reduce((t,x)=>t+x.length,0));let p=0;tot.forEach(x=>{out.set(x,p);p+=x.length;});
    return out;
  }
  function scarica(nome,dati,mime){
    const b=dati instanceof Uint8Array?new Blob([dati],{type:mime||'application/octet-stream'}):new Blob([dati],{type:mime||'text/plain;charset=utf-8'});
    const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=nome;document.body.appendChild(a);a.click();
    setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1500);
  }
  function nomeFile(s){return String(s||'seduta').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^A-Za-z0-9]+/g,'_').replace(/^_|_$/g,'').slice(0,48)||'seduta';}
  // giorno di una seduta: lunedi' della data di inizio + settimane + giorno
  function giorno(p,wi,dow){
    const t=String(p&&p.startDate||'');const m=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(t)||null;const x=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);
    const d=m?new Date(+m[3],+m[2]-1,+m[1]):x?new Date(+x[1],+x[2]-1,+x[3]):null;if(!d||dow==null)return null;
    d.setDate(d.getDate()-((d.getDay()+6)%7)+wi*7+(+dow));return d;
  }
  function iso(d){return d?d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'):null;}

  // ── FIT: lettura di un'attivita'
  function leggiFit(buf){
    const v=new DataView(buf),hs=v.getUint8(0);
    if(buf.byteLength<14||String.fromCharCode(v.getUint8(8),v.getUint8(9),v.getUint8(10),v.getUint8(11))!=='.FIT')throw new Error('Non e\' un file FIT');
    const fine=Math.min(buf.byteLength-2,hs+v.getUint32(4,true));
    const defs={},sess=[],laps=[],recs=[];let p=hs,lastTs=0,sport=null;
    const leggi=(t,le,o,s)=>{const b=t&0x1F;
      try{switch(b){case 0:case 2:case 10:case 13:return s===1?v.getUint8(o):null;case 1:return v.getInt8(o);
        case 3:return s===2?v.getInt16(o,le):null;case 4:case 11:return s===2?v.getUint16(o,le):null;case 5:return s===4?v.getInt32(o,le):null;case 6:case 12:return s===4?v.getUint32(o,le):null;case 8:return s===4?v.getFloat32(o,le):null;default:return null;}}catch(e){return null;}};
    const INV={1:0xFF,2:0xFFFF,4:0xFFFFFFFF};
    while(p<fine){
      const h=v.getUint8(p++);
      if(h&0x80){const loc=(h>>5)&3,d=defs[loc];if(!d)break;const off=h&0x1F;lastTs=(lastTs&~0x1F)+off+((off<(lastTs&0x1F))?0x20:0);const o=leggiMsg(d,p);o[253]=o[253]||lastTs;p+=d.size;salva(d.g,o);continue;}
      if(h&0x40){
        const dev=!!(h&0x20),loc=h&0x0F;p++;const le=v.getUint8(p++)===0;const g=v.getUint16(p,le);p+=2;const n=v.getUint8(p++);
        const f=[];let size=0;for(let i=0;i<n;i++){f.push({n:v.getUint8(p),s:v.getUint8(p+1),t:v.getUint8(p+2)});size+=v.getUint8(p+1);p+=3;}
        if(dev){const nd=v.getUint8(p++);for(let i=0;i<nd;i++){size+=v.getUint8(p+1);p+=3;}}
        defs[loc]={g,le,f,size};continue;
      }
      const d=defs[h&0x0F];if(!d)break;const o=leggiMsg(d,p);p+=d.size;if(o[253])lastTs=o[253];salva(d.g,o);
    }
    function leggiMsg(d,o){const r={};let q=o;d.f.forEach(f=>{const x=leggi(f.t,d.le,q,f.s);if(x!=null&&!(INV[f.s]!=null&&x===INV[f.s]&&(f.t&0x1F)!==1))r[f.n]=x;q+=f.s;});return r;}
    function salva(g,o){if(g===18)sess.push(o);else if(g===19)laps.push(o);else if(g===20)recs.push(o);else if(g===12&&o[0]!=null)sport=o[0];}
    const S=sess[0]||{};
    const ms=x=>x==null?null:x/1000;
    const lp=laps.map(l=>({m:l[9]!=null?l[9]/100:null,s:ms(l[8]!=null?l[8]:l[7]),fc:l[15]||null,fcMax:l[16]||null,step:l[71]!=null?l[71]:null})).filter(l=>l.s>0);
    let km=S[9]!=null?S[9]/100000:null,sec=ms(S[8]!=null?S[8]:S[7]),tot=ms(S[7]),fc=S[16]||null,fcMax=S[17]||null,dsl=S[22]||null,start=S[2]!=null?S[2]:(recs[0]&&recs[0][253]);
    if(km==null&&recs.length){const dd=recs.filter(r=>r[5]!=null);if(dd.length)km=dd[dd.length-1][5]/100000;const ts=recs.filter(r=>r[253]);if(ts.length){sec=sec||ts[ts.length-1][253]-ts[0][253];}const hr=recs.filter(r=>r[3]);if(hr.length&&!fc){fc=Math.round(hr.reduce((t,r)=>t+r[3],0)/hr.length);fcMax=Math.max(...hr.map(r=>r[3]));}}
    return {fonte:'fit',sport:S[5]!=null?S[5]:sport,start:start?(start+FIT_EPOCH)*1000:null,km:km!=null?Math.round(km*100)/100:null,sec:sec?Math.round(sec):null,tot:tot?Math.round(tot):null,fc,fcMax,dsl,laps:lp};
  }
  // ── GPX: lettura (Strava, Garmin, Coros, Suunto esportano tutti GPX)
  function leggiGpx(txt){
    const doc=new DOMParser().parseFromString(txt,'application/xml');
    const pts=[...doc.getElementsByTagName('trkpt')].map(e=>{const t=e.getElementsByTagName('time')[0],hr=e.getElementsByTagNameNS('*','hr')[0],el=e.getElementsByTagName('ele')[0];return {lat:+e.getAttribute('lat'),lon:+e.getAttribute('lon'),t:t?Date.parse(t.textContent):null,hr:hr?+hr.textContent:null,ele:el?+el.textContent:null};}).filter(x=>isFinite(x.lat)&&isFinite(x.lon));
    if(pts.length<2)throw new Error('Nessun punto nel file GPX');
    const R=6371000,rad=x=>x*Math.PI/180;
    let m=0,mov=0,dsl=0,kmL=[],lm=0,lt=pts[0].t,lhr=[];const hrs=[];
    for(let i=1;i<pts.length;i++){
      const a=pts[i-1],b=pts[i];const dlat=rad(b.lat-a.lat),dlon=rad(b.lon-a.lon);
      const h=Math.sin(dlat/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dlon/2)**2;const d=2*R*Math.asin(Math.sqrt(h));
      const dt=a.t&&b.t?(b.t-a.t)/1000:0;
      m+=d;if(dt>0&&dt<30&&d/dt>0.5)mov+=dt;
      if(a.ele!=null&&b.ele!=null&&b.ele>a.ele)dsl+=b.ele-a.ele;
      if(b.hr){hrs.push(b.hr);lhr.push(b.hr);}
      if(m-lm>=1000){kmL.push({m:Math.round(m-lm),s:Math.round((b.t-lt)/1000),fc:lhr.length?Math.round(lhr.reduce((t,x)=>t+x,0)/lhr.length):null});lm=m;lt=b.t;lhr=[];}
    }
    const t0=pts[0].t,t1=pts[pts.length-1].t;
    if(m-lm>200&&t1&&lt)kmL.push({m:Math.round(m-lm),s:Math.round((t1-lt)/1000),fc:lhr.length?Math.round(lhr.reduce((t,x)=>t+x,0)/lhr.length):null});
    return {fonte:'gpx',sport:null,start:t0||null,km:Math.round(m/10)/100,sec:Math.round(mov||(t1-t0)/1000),tot:t0&&t1?Math.round((t1-t0)/1000):null,fc:hrs.length?Math.round(hrs.reduce((t,x)=>t+x,0)/hrs.length):null,fcMax:hrs.length?Math.max(...hrs):null,dsl:Math.round(dsl)||null,laps:kmL,auto:true};
  }
  async function leggiFile(file){
    const n=String(file&&file.name||'').toLowerCase();
    if(/\.gpx$/.test(n))return leggiGpx(await file.text());
    if(/\.fit$/.test(n))return leggiFit(await file.arrayBuffer());
    if(/\.tcx$/.test(n))throw new Error('Il .TCX non e\' letto: esporta .FIT o .GPX');
    // senza estensione: prova FIT poi GPX
    const b=await file.arrayBuffer();try{return leggiFit(b);}catch(e){return leggiGpx(new TextDecoder().decode(b));}
  }
  // ── confronto fra seduta in programma e attivita' fatta
  function confronta(s,att,R){
    const P=passi(s,R,true),pr=stima(P),fila=inFila(P);
    const out={prev:pr,fatto:{km:att.km,min:att.sec?Math.round(att.sec/60):null,passo:att.km&&att.sec?att.sec/att.km:null,fc:att.fc},giri:[]};
    // giri dell'orologio con il passo del workout (lap a ogni passo): si mettono accanto ai bersagli
    const L=(att.laps||[]).filter(l=>l.s>0);
    const perPasso=L.length&&L.some(l=>l.step!=null);
    const fl=fitLista(P);
    const coppie=perPasso?L.map(l=>({l,x:fl[l.step]&&!fl[l.step].rep?fl[l.step]:null})):(!att.auto&&Math.abs(L.length-fila.length)<=1?L.map((l,i)=>({l,x:fila[i]||null})):[]);
    out.giri=coppie.filter(c=>c.x).map(c=>{const pc=c.l.m>0?c.l.s/(c.l.m/1000):null;const t=c.x.target;let esito='';
      if(t&&t.tipo==='pace'&&pc){esito=pc>t.lo+3?'lento':pc<t.hi-3?'veloce':'ok';}
      return {nome:c.x.nome,intens:c.x.intens,bersaglio:tgTxt(t),m:c.l.m,s:c.l.s,passo:pc,fc:c.l.fc,esito};});
    const q=out.giri.filter(g=>g.intens==='active'&&g.esito);
    out.centrati=q.length?{ok:q.filter(g=>g.esito==='ok').length,n:q.length}:null;
    return out;
  }
  // giri dell'orologio (per km o per passo dell'allenamento) -> blocchi: per passo se l'orologio lo dice,
  // se no per cambio di ritmo (oltre 12" o 4% dal blocco in corso). Fuori i giri sotto i 50 m.
  function blocchi(laps){
    const L=(laps||[]).filter(l=>l&&+l.s>0&&+l.m>=50);if(!L.length)return [];
    const conStep=L.some(l=>l.step!=null),pc=x=>x.s/(x.m/1000),out=[];
    L.forEach(l=>{const b=out[out.length-1];
      const stesso=b&&(conStep?b.step===l.step:(Math.abs(pc(l)-pc(b))<=Math.max(12,0.04*pc(l))&&!!l.tipo===!!b.tipo));
      if(stesso){b.ft+=(+l.fc||0)*l.s;b.fs+=l.fc?l.s:0;b.m+=+l.m;b.s+=+l.s;b.n++;}
      else out.push({m:+l.m,s:+l.s,ft:(+l.fc||0)*l.s,fs:l.fc?+l.s:0,step:l.step,tipo:l.tipo||null,n:1});});
    return out.map(b=>({m:b.m,s:b.s,passo:b.s/(b.m/1000),fc:b.fs?Math.round(b.ft/b.fs):null,n:b.n,step:b.step}));
  }
  // confronto fra le fasi in programma e i blocchi corsi: si accoppiano in ordine quando sono tanti quanti
  function confrontaGiri(s,laps,R){
    const B=blocchi(laps);if(!B.length)return null;
    const fila=inFila(passi(s,R,true)).filter(x=>x.dur.tipo!=='open'||x.intens==='active');
    if(B.length!==fila.length)return {blocchi:B,giri:[],centrati:null};
    const giri=B.map((b,i)=>{const x=fila[i],t=x.target;let e='';
      if(t&&t.tipo==='pace')e=b.passo>t.lo+3?'lento':b.passo<t.hi-3?'veloce':'ok';
      return {nome:x.nome,intens:x.intens,bersaglio:tgTxt(t),m:b.m,s:b.s,passo:b.passo,fc:b.fc,esito:e};});
    const q=giri.filter(g=>g.intens==='active'&&g.esito);
    return {blocchi:B,giri,centrati:q.length?{ok:q.filter(g=>g.esito==='ok').length,n:q.length}:null};
  }
  /* Coda per Garmin Connect: le corse dei programmi di un atleta nei prossimi giorni, con i
     passi gia' calcolati come per il file .FIT (ritmi personali solo nei programmi di gruppo,
     come nell'app). Lo script Garmin sul Mac la legge e mette gli allenamenti in calendario. */
  function codaHash(t){let h=5381;for(let i=0;i<t.length;i++)h=((h<<5)+h+t.charCodeAt(i))|0;return (h>>>0).toString(36);}
  function coda(aid,progs,Ra,giorni){
    const RR=window.RSRitmi,oggi=new Date();oggi.setHours(0,0,0,0);const fine=oggi.getTime()+(giorni||21)*864e5,items={};
    Object.entries(progs||{}).forEach(([pid,p])=>{
      if(!p||p.archived||!p.assignedTo||!p.assignedTo[aid])return;
      const gruppo=Object.keys(p.assignedTo).filter(k=>p.assignedTo[k]).length>1,R=gruppo&&RR?RR.conFissi(p,Ra):null;
      Object.entries(p.weeks||{}).sort((a,b)=>(a[1].order||0)-(b[1].order||0)).forEach(([wid,w],wi)=>Object.entries(w&&w.sessions||{}).forEach(([sid,x])=>{
        if(!x||x.type!=='corsa'||x.dayOfWeek==null||!x.corsaFasi||!Object.keys(x.corsaFasi).length)return;
        const d=giorno(p,wi,x.dayOfWeek);if(!d||d.getTime()<oggi.getTime()||d.getTime()>fine)return;
        const P=passi(x,R);if(!P.length)return;const st=stima(P);
        const it={data:iso(d),nome:'RS '+String(x.name||'Corsa').slice(0,60),passi:jsonPassi(P),km:st.km||0,min:st.min||0,nota:String(p.name||'').slice(0,60)};
        it.hash=codaHash(JSON.stringify([it.data,it.nome,it.passi]));
        items[(pid+'_'+wid+'_'+sid).replace(/[.#$\[\]\/]/g,'_')]=JSON.parse(JSON.stringify(it));
      }));
    });
    return items;
  }
  return {coda,codaHash,durata,passi,inFila,stima,righe,durTxt,tgTxt,fitWorkout,icu,jsonPassi,zip,scarica,nomeFile,giorno,iso,crc16,leggiFit,leggiGpx,leggiFile,confronta,blocchi,confrontaGiri};
})();

// ── DATI DELL'OROLOGIO (garmin_data) DENTRO L'APP ──────────────────────
/* Gli script sul Mac scrivono garmin_data/{aid}: days/{AAAA-MM-GG} (sonno, HRV,
   FC a riposo, body battery, readiness, CTL/ATL) e activities/{id} da Garmin
   Connect e da intervals.icu. Qui non nasce una sezione nuova: le attivita' diventano
   sedute fatte (agganciate a quella in programma o a quella gia' registrata) e i dati
   del giorno entrano nella prontezza al posto delle risposte quando ci sono.
   Doppioni: la stessa uscita da Garmin e da intervals.icu (stesso giorno, stesso
   tipo, durata simile) vale una volta sola, con i campi delle due fonti uniti. */
window.RSGarmin = (function(){
  function tipo(t){t=String(t||'').toLowerCase();
    if(/run|corsa|trail|treadmill|track|jog/.test(t))return 'corsa';
    if(/ride|cycl|bike|bici|spin|gravel/.test(t))return 'bici';
    if(/swim|nuoto/.test(t))return 'nuoto';
    if(/breath|meditat|respir|sleep|nap/.test(t))return 'pausa';
    if(/strength|weight|gym|forza/.test(t))return 'pesi';
    if(/walk|hik|cammin/.test(t))return 'cammino';
    if(/soccer|football|calcio/.test(t))return 'calcio';
    return 'altro';}
  const NOMI={corsa:'Corsa',bici:'Bici',nuoto:'Nuoto',pesi:'Forza',cammino:'Camminata',calcio:'Calcio',altro:'Attivita\''};
  // sport in cui i km dicono qualcosa (nel calcio o in palestra no)
  const CON_KM={corsa:1,bici:1,nuoto:1,cammino:1};
  function quando(s){if(typeof s==='number')return s>1e12?s:s*1000;const m=/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?/.exec(String(s||''));return m?new Date(+m[1],+m[2]-1,+m[3],+(m[4]||12),+(m[5]||0),+(m[6]||0)).getTime():null;}
  function iso(ts){const d=new Date(ts);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
  function norm(id,a){
    const ts=quando(a.start);if(!ts)return null;
    const sec=+a.durationSec||null,km=+a.distanceM>0?Math.round(a.distanceM/10)/100:null,v=+a.avgSpeed||null;
    return {id,fonti:[a.source==='intervals.icu'?'intervals':'garmin'],nome:a.name||'',tipo:tipo(a.type),ts,giorno:iso(ts),sec,km,
      passo:v>0.5?Math.round(1000/v):(km&&sec?Math.round(sec/km):null),fc:+a.avgHR?Math.round(a.avgHR):null,fcMax:+a.maxHR?Math.round(a.maxHR):null,
      dsl:+a.elevGain?Math.round(a.elevGain):null,load:+a.trainingLoad?Math.round(a.trainingLoad):null,rpe:+a.rpe>0?Math.round(+a.rpe):null,feel:+a.feel||null,
      te:+a.aerobicTE||null,teA:+a.anaerobicTE||null,kcal:+a.kcal||null,zt:Array.isArray(a.zoneTimes)?a.zoneTimes:(a.zoneTimes&&typeof a.zoneTimes==='object'?Object.values(a.zoneTimes):null),traccia:a.traccia?id:null,laps:Array.isArray(a.laps)?a.laps:(a.laps&&typeof a.laps==='object'?Object.values(a.laps):null)};
  }
  // attivita' senza doppioni, dalla piu' recente
  function attivita(gd){
    const L=Object.entries(gd&&gd.activities||{}).map(([id,a])=>a?norm(id,a):null).filter(a=>a&&a.tipo!=='pausa'&&!(a.sec&&a.sec<180)).sort((x,y)=>x.ts-y.ts);
    const out=[];
    L.forEach(a=>{
      // stessa uscita dalle due fonti: stessa ora di inizio (entro 3'), oppure stesso giorno, tipo e durata simile.
      // Garmin da' il tempo totale, intervals.icu quello in movimento: nel calcio differiscono di parecchi minuti
      const d=out.find(b=>b.tipo===a.tipo&&b.fonti[0]!==a.fonti[0]&&(Math.abs(a.ts-b.ts)<=180000||(b.giorno===a.giorno&&a.sec&&b.sec&&Math.abs(a.sec-b.sec)<=Math.max(300,0.12*Math.max(a.sec,b.sec)))));
      if(!d){out.push(a);return;}
      // tiene Garmin come base (training effect), prende da intervals.icu RPE, sensazioni e carico
      const g=d.fonti[0]==='garmin'?d:a,o=g===d?a:d;
      if(!(g.laps&&g.laps.length)&&o.laps)g.laps=o.laps;
      Object.keys(o).forEach(k=>{if(g[k]==null&&o[k]!=null)g[k]=o[k];});
      g.fonti=['garmin','intervals'];if(g!==d){out[out.indexOf(d)]=g;}
    });
    return out.sort((x,y)=>y.ts-x.ts);
  }
  function giorno(gd,d){return gd&&gd.days?gd.days[d]||null:null;}
  // sonno su 5 come nel questionario: dal punteggio, se manca dalle ore
  function sonno5(g){if(!g)return null;const s=+g.sleepScore;if(s>0)return s<40?1:s<60?2:s<75?3:s<88?4:5;const h=(+g.sleepSeconds||0)/3600;if(!h)return null;return h<5?1:h<6?2:h<7?3:h<8?4:5;}
  const HRV_ST={BALANCED:'nella norma',UNBALANCED:'sbilanciata',LOW:'bassa',POOR:'molto bassa',NONE:null,NO_STATUS:null};
  // i numeri del giorno con la media dei 7 giorni prima (per HRV e FC a riposo)
  function sintesi(gd,d){
    const g=giorno(gd,d);if(!g)return null;
    const prima=[];for(let i=1;i<=7;i++){const x=new Date(d+'T12:00:00');x.setDate(x.getDate()-i);const y=giorno(gd,iso(x.getTime()));if(y)prima.push(y);}
    const media=k=>{const v=prima.map(y=>+y[k]).filter(x=>x>0);return v.length>=3?Math.round(v.reduce((t,x)=>t+x,0)/v.length):null;};
    const o={readiness:+g.trainingReadiness>0?Math.round(g.trainingReadiness):null,sonnoSec:+g.sleepSeconds||null,sleepScore:+g.sleepScore||null,sonno5:sonno5(g),
      hrv:+g.hrvLastNightAvg||null,hrvBase:+g.hrvWeeklyAvg||media('hrvLastNightAvg'),hrvStatus:g.hrvStatus&&HRV_ST[g.hrvStatus]!==null?HRV_ST[g.hrvStatus]||String(g.hrvStatus).toLowerCase().replace(/_/g,' '):null,
      fcRiposo:+g.restingHR||null,fcBase:media('restingHR'),bb:+g.bodyBatteryHigh||null,ctl:+g.ctl||null,atl:+g.atl||null,passi:+g.steps||null,stress:+g.stressAvg||null};
    // segnali da guardare: HRV sotto la sua media del 10% o piu', FC a riposo sopra di 5 battiti o piu'
    o.hrvGiu=o.hrv&&o.hrvBase?o.hrv<=o.hrvBase*0.9:false;o.fcSu=o.fcRiposo&&o.fcBase?o.fcRiposo>=o.fcBase+5:false;
    o.vuoto=!Object.keys(o).some(k=>!['hrvGiu','fcSu'].includes(k)&&o[k]!=null&&o[k]!==false);
    return o.vuoto?null:o;
  }
  function oreTxt(s){if(!s)return '';const m=Math.round(s/60);return Math.floor(m/60)+'h '+String(m%60).padStart(2,'0')+'\'';}
  // riga leggibile per l'app e la scheda atleta
  function riga(o){if(!o)return '';const p=[];
    if(o.sonnoSec)p.push('sonno '+oreTxt(o.sonnoSec)+(o.sleepScore?' ('+o.sleepScore+')':''));
    if(o.hrv)p.push('HRV '+Math.round(o.hrv)+(o.hrvStatus?' '+o.hrvStatus:o.hrvBase?' (media '+o.hrvBase+')':''));
    if(o.fcRiposo)p.push('FC a riposo '+o.fcRiposo+(o.fcBase&&o.fcRiposo!==o.fcBase?' (media '+o.fcBase+')':''));
    if(o.bb)p.push('body battery '+o.bb);
    return p.join(' &#183; ');}
  // prontezza unica: q dal questionario (punteggio e voci su 5), g dall'orologio.
  // La readiness dell'orologio vale piu' delle risposte; senza, il sonno misurato prende il posto di quello dichiarato.
  function prontezza(q,o,punti){
    if(!o)return q;
    const r=Object.assign({},q||{});r.orologio=o;
    if(o.sonno5)r.sonno=o.sonno5;
    if(o.readiness!=null){r.score=o.readiness;r.da='orologio';return r;}
    if(q&&typeof q.score==='number'&&o.sonno5&&punti&&q.dolori&&q.energia&&q.stress){r.score=punti(o.sonno5,q.dolori,q.energia,q.stress);r.da=(q.da||'questionario')+' con il sonno dell\'orologio';return r;}
    return q?r:Object.assign(r,{score:null});
  }
  // RPE stimato dalla FC media rispetto alla FC di soglia (o al 90% della massima): solo dove manca l'RPE
  function rpeDaFc(fc,lthr){if(!fc||!lthr)return null;const r=fc/lthr;return r<0.75?2:r<0.82?3:r<0.87?4:r<0.91?5:r<0.95?6:r<0.99?7:r<1.02?8:r<1.05?9:10;}
  function fcSogliaDi(gd){const p=profilo(gd);return p&&((p.zone&&p.zone.fcSoglia)||(p.soglia&&p.soglia.fc)||(p.zone&&p.zone.fcMax&&Math.round(p.zone.fcMax*0.9)))||null;}
  // attivita' -> registri delle sedute fatte.
  // logs: i registri veri {chiave: log}; pianificate(iso) -> [{pid,wi,sid,tipo,nome}] le sedute in programma quel giorno.
  // Una corsa dell'orologio arricchisce la corsa registrata a mano lo stesso giorno; se non c'e' diventa una seduta
  // fatta, agganciata alla corsa in programma quel giorno. Il registro vero vale sempre (RPE, note).
  function fondi(logs,gd,pianificate){
    const out={};Object.entries(logs||{}).forEach(([k,l])=>{if(l)out[k]=l;});
    const A=attivita(gd);if(!A.length)return out;
    const lthr=fcSogliaDi(gd);
    const usati=new Set();
    const fatteProg=new Set(Object.values(out).filter(l=>l&&l.progId&&l.sessId!=null).map(l=>l.progId+'|'+l.weekIdx+'|'+l.sessId));
    const compat=(l,a)=>{const t=l.type||(l.totalSets?'pesi':'');if(a.tipo==='corsa')return t==='corsa'||!!l.corsa;if(a.tipo==='pesi')return t==='pesi'||(!t&&!l.corsa);return !['corsa','pesi'].includes(t)&&!l.corsa;};
    A.slice().sort((x,y)=>x.ts-y.ts).forEach(a=>{
      // prima il registro gia' legato a questa attivita' (RPE dato dall'atleta), poi uno dello stesso giorno
      const k=Object.keys(out).find(k=>!usati.has(k)&&out[k].gmId!=null&&String(out[k].gmId)===String(a.id))||Object.keys(out).find(k=>{const l=out[k];return !usati.has(k)&&l.ts&&!l.gm&&l.gmId==null&&iso(l.ts)===a.giorno&&compat(l,a);});
      const corsa=a.tipo==='corsa'?{fonte:a.fonti.join('+'),km:a.km,sec:a.sec,fc:a.fc,fcMax:a.fcMax,dsl:a.dsl,passo:a.passo,load:a.load,te:a.te}:null;
      // senza seduta in programma restano i tratti corsi (per km o per cambio di ritmo)
      const giriDi=(c,ps)=>{if(!c||!a.laps||!window.RSOrologio)return c;try{const r=ps?window.RSOrologio.confrontaGiri(ps,a.laps,null):{blocchi:window.RSOrologio.blocchi(a.laps),giri:[],centrati:null};if(!r||!r.blocchi.length)return c;
          const gi=r.giri.length?r.giri.map(x=>({n:x.nome,m:Math.round(x.m),s:Math.round(x.s),fc:x.fc,t:x.bersaglio||null,e:x.esito||null})):r.blocchi.map((x,i)=>({n:'Tratto '+(i+1),m:Math.round(x.m),s:Math.round(x.s),fc:x.fc}));
          return Object.assign({},c,{giri:gi},r.centrati?{centrati:r.centrati}:{});}catch(e){return c;}};
      if(k){usati.add(k);const l=out[k];
        const pl=l.progId&&pianificate?pianificate(a.giorno).find(x=>x.pid===l.progId&&x.sid===l.sessId):null;
        if(corsa&&!l.corsa)Object.assign(corsa,giriDi(corsa,pl&&pl.s));
        out[k]=Object.assign({},l,{gmId:a.id,gmFonte:a.fonti.join('+')},a.traccia?{gmTraccia:a.traccia}:{},a.zt?{gmZt:a.zt}:{},a.fc?{gmFc:a.fc}:{},a.load?{gmLoad:a.load}:{},(!l.corsa&&corsa)?{corsa}:{},(!(+l.duration)&&a.sec)?{duration:Math.round(a.sec/60)}:{},(!(+l.avgRpe)&&a.rpe)?{avgRpe:a.rpe}:{});
        return;}
      const adatta=p=>!fatteProg.has(p.pid+'|'+p.wi+'|'+p.sid)&&(a.tipo==='corsa'?p.tipo==='corsa':a.tipo==='pesi'?p.tipo==='pesi':false);
      let p=(pianificate?pianificate(a.giorno):[]).filter(adatta)[0];
      // la corsa spostata: se quel giorno non c'e' niente da fare, vale per la seduta saltata piu' vicina
      // nei giorni prima della stessa settimana (mai in avanti: quella si fa ancora)
      if(!p&&pianificate){const d=new Date(a.ts),dow=(d.getDay()+6)%7;for(let i=1;i<=dow&&!p;i++){const x=new Date(a.ts-i*864e5);p=pianificate(iso(x.getTime())).filter(adatta)[0];}}if(p)fatteProg.add(p.pid+'|'+p.wi+'|'+p.sid);
      if(p&&corsa&&p.s&&window.RSOrologio){try{corsa.prevKm=window.RSOrologio.stima(window.RSOrologio.passi(p.s,null)).km||null;}catch(e){}}
      if(corsa)Object.assign(corsa,giriDi(corsa,p&&p.s));
      const d=new Date(a.ts);
      out['gm_'+a.id]=Object.assign({ts:a.ts,date:String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+d.getFullYear(),
        type:a.tipo==='corsa'?'corsa':a.tipo==='pesi'?'pesi':'altro',sessName:p?p.nome:(a.nome||NOMI[a.tipo]),duration:a.sec?Math.round(a.sec/60):null,
        avgRpe:a.rpe||null,source:'orologio',gm:true,gmId:a.id,gmFonte:a.fonti.join('+'),gmTipo:a.tipo},a.traccia?{gmTraccia:a.traccia}:{},a.zt?{gmZt:a.zt}:{},a.fc?{gmFc:a.fc}:{},a.load?{gmLoad:a.load}:{},
        !a.rpe&&rpeDaFc(a.fc,lthr)?{rpeStima:rpeDaFc(a.fc,lthr)}:{},
        corsa?{corsa}:{},a.tipo!=='corsa'&&a.km&&CON_KM[a.tipo]?{km:a.km}:{},p?{progId:p.pid,weekIdx:p.wi,sessId:p.sid}:{});
    });
    return out;
  }
  // gli script possono scrivere garmin_data/{nome_cognome} invece dell'ID dell'atleta: stessa chiave dal nome
  function chiave(nome){return String(nome||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');}
  // soglia, zone e previsioni dell'orologio: Garmin prima, poi intervals.icu
  function profilo(gd){
    const P=gd&&gd.profilo||{},g=P.garmin||{},i=P.intervals_icu||{};
    const sg=g.soglia||{},si=i.soglia||{};
    const sec=sg.sec||si.sec||null,fc=sg.fc||si.fc||null;
    const o={};
    if(sec||fc)o.soglia={sec,fc,data:sg.data||si.data||null,fonte:sg.sec||sg.fc?'Garmin':'intervals.icu'};
    if(g.previsioni)o.previsioni=g.previsioni;
    if(g.record)o.record=g.record;
    const z=g.zone||i.zone;if(z&&Array.isArray(z.z))o.zone=Object.assign({fonte:g.zone?'Garmin':'intervals.icu'},z);
    return Object.keys(o).length?o:null;
  }
  // zone FC leggibili: Z1..Z5 dai limiti inferiori
  function zoneTxt(z){if(!z||!Array.isArray(z.z))return null;const L=z.z.slice(0,5),o={};L.forEach((v,k)=>{const n=L[k+1];o['Z'+(k+1)]=n?v+'-'+(n-1):'>'+v;});return o;}
  return {tipo,NOMI,attivita,giorno,sintesi,sonno5,riga,oreTxt,prontezza,fondi,iso,quando,chiave,profilo,zoneTxt,rpeDaFc};
})();


// ── TRACCIA DI UNA CORSA: LINEA TEMPORALE E MAPPA ──────────────────────
/* Sul modello di intervals.icu. La traccia (garmin_tracce/{aid}/{id}, un punto ogni 10 s:
   t, d, fc, cad, v, q, lat, lon) diventa una linea temporale unica: passo, FC, cadenza e
   quota impilati sulla stessa scala (tempo o km), un solo cursore che scorre su tutti, in
   alto i valori del punto. Trascinando si seleziona un tratto e si zooma: statistiche del
   tratto e mappa stretta su quel pezzo; doppio clic o "Tutta la corsa" per tornare. Le zone
   FC colorano la corsia della FC, i tratti di lavoro dell'orologio sono fasce cliccabili.
   Tema chiaro (come intervals.icu) o scuro, ricordato. Canvas disegnato a mano: veloce
   anche con molti punti. Leaflet (mappa) si carica solo quando serve. */
window.RSTraccia = (function(){
  let css=false,leaflet=null;
  const TEMI={
    chiaro:{bg:'#FFFFFF',pan:'#F7F5F2',tx:'#2B2622',mu:'#8A8178',gr:'rgba(0,0,0,.07)',bd:'rgba(0,0,0,.10)',sel:'rgba(255,106,46,.10)',cur:'#2B2622',fasc:'rgba(255,106,46,.07)',
      passo:'#F05A1A',fc:'#E11D48',cad:'#7C3AED',q:'#94A3B8',zone:['rgba(148,163,184,.10)','rgba(59,130,246,.10)','rgba(34,197,94,.11)','rgba(249,115,22,.12)','rgba(225,29,72,.12)']},
    scuro:{bg:'#151213',pan:'#1C1717',tx:'#F4F1EC',mu:'#8E8678',gr:'rgba(255,255,255,.06)',bd:'rgba(255,255,255,.09)',sel:'rgba(255,106,46,.16)',cur:'#F4F1EC',fasc:'rgba(255,106,46,.08)',
      passo:'#FF6A2E',fc:'#FB7185',cad:'#A78BFA',q:'#6B6460',zone:['rgba(148,163,184,.08)','rgba(59,130,246,.10)','rgba(34,197,94,.10)','rgba(249,115,22,.11)','rgba(244,63,94,.12)']}};
  function stili(){if(css)return;css=true;const s=document.createElement('style');s.textContent=`
.trk2{--bg:#fff;border-radius:14px;overflow:hidden;font-family:Inter,sans-serif}
.trk2-bar{display:flex;flex-wrap:wrap;align-items:stretch;gap:0;border-bottom:1px solid var(--bd)}
.trk2-v{padding:8px 12px;min-width:74px;border-right:1px solid var(--bd)}.trk2-v i{display:block;font-style:normal;font-size:10.5px;color:var(--mu);letter-spacing:.2px}.trk2-v b{display:block;font-size:16px;font-weight:650;color:var(--tx);font-variant-numeric:tabular-nums;line-height:1.25}
.trk2-v.passo b{color:var(--c-passo)}.trk2-v.fc b{color:var(--c-fc)}.trk2-v.cad b{color:var(--c-cad)}
.trk2-tg{margin-left:auto;display:flex;align-items:center;gap:6px;padding:6px 10px}
.trk2-cf{font:500 11.5px Inter,sans-serif;padding:5px 8px;border-radius:999px;border:1px solid var(--bd);background:transparent;color:var(--tx);max-width:190px}
.trk2-tg button{font:600 11.5px Inter,sans-serif;padding:5px 10px;border-radius:999px;border:1px solid var(--bd);background:transparent;color:var(--mu);cursor:pointer}.trk2-tg button.on{background:var(--tx);border-color:var(--tx);color:var(--bg)}
.trk2-sel{display:none;flex-wrap:wrap;align-items:center;gap:4px 16px;padding:8px 12px;font-size:12.5px;color:var(--tx);background:var(--sel);border-bottom:1px solid var(--bd)}.trk2-sel.on{display:flex}.trk2-sel b{font-variant-numeric:tabular-nums}.trk2-sel span i{font-style:normal;color:var(--mu);margin-right:4px}
.trk2-sel button{margin-left:auto;font:600 12px Inter,sans-serif;padding:5px 12px;border-radius:999px;border:0;background:#FF6A2E;color:#fff;cursor:pointer}
.trk2-tl{position:relative;cursor:crosshair;touch-action:pan-y;user-select:none;-webkit-user-select:none}.trk2-tl canvas{display:block;width:100%}
.trk2-gi{display:flex;flex-wrap:wrap;gap:6px;padding:10px 12px;border-top:1px solid var(--bd)}.trk2-gi:empty{display:none}
.trk2-gi button{font:500 11.5px Inter,sans-serif;padding:5px 9px;border-radius:9px;border:1px solid var(--bd);background:var(--pan);color:var(--tx);cursor:pointer;font-variant-numeric:tabular-nums}.trk2-gi button.lav{border-color:rgba(255,106,46,.45)}.trk2-gi button b{color:var(--c-passo)}
.trk2-sp{padding:10px 12px 4px;border-bottom:1px solid var(--bd)}.trk2-sp:empty{display:none}
.trk2-sph{display:flex;align-items:center;gap:6px;margin-bottom:6px}.trk2-sph b{font-size:12.5px;color:var(--tx);margin-right:6px}.trk2-sph i{margin-left:auto;font-style:normal;font-size:10.5px;color:var(--mu)}
.trk2-sph button{font:600 11px Inter,sans-serif;padding:4px 9px;border-radius:999px;border:1px solid var(--bd);background:transparent;color:var(--mu);cursor:pointer}.trk2-sph button.on{background:var(--tx);border-color:var(--tx);color:var(--bg)}
.trk2-spb{display:flex;align-items:flex-end;gap:3px;height:118px}
.trk2-spb button{all:unset;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:0;height:100%;border-radius:6px}
.trk2-spb button i{font-style:normal;font-size:9.5px;color:var(--mu)}.trk2-spb button u{display:block;width:100%;border-radius:4px 4px 0 0;background:var(--c-passo);opacity:.55;margin:2px 0}
.trk2-spb button.svelto u{opacity:.95}.trk2-spb button.lento u{opacity:.3}.trk2-spb button.sel u{outline:2px solid var(--tx)}
.trk2-spb button b{font-size:10.5px;color:var(--tx);font-variant-numeric:tabular-nums}.trk2-spb button s{text-decoration:none;font-size:9.5px;color:var(--c-fc)}
.trk2-spb button:hover u{opacity:1}
.trk2-spt{margin:6px 0 6px}.trk2-spt summary{font-size:11.5px;color:var(--mu);cursor:pointer}.trk2-spt table{width:100%;border-collapse:collapse;font-size:12px;margin-top:6px;color:var(--tx)}.trk2-spt th{text-align:right;font-weight:500;color:var(--mu);font-size:10.5px;padding:3px 6px;border-bottom:1px solid var(--bd)}.trk2-spt td{text-align:right;padding:4px 6px;border-bottom:1px solid var(--bd);font-variant-numeric:tabular-nums}.trk2-spt th:first-child,.trk2-spt td:first-child{text-align:left}.trk2-spt b{color:var(--c-passo)}
.trk2-fc{padding:10px 12px;border-top:1px solid var(--bd)}.trk2-fc:empty{display:none}
.trk2-sph{flex-wrap:wrap}.trk2-sph button{white-space:nowrap}@media (max-width:560px){.trk2-sph i{display:none}.trk2-sph b{width:100%;margin-bottom:2px}.trk2-v{min-width:64px;padding:7px 10px}}
.trk2.semp .trk2-sph i{display:none}.trk2.semp .trk2-sp{border-bottom:0}
.trk2-sl{display:flex;flex-direction:column;margin:2px 0 8px;font-variant-numeric:tabular-nums}
.trk2-slh,.trk2-sl button{display:grid;grid-template-columns:1.1fr 1fr 1fr .8fr;align-items:center;gap:6px;padding:8px 6px;text-align:left}
.trk2-slh{font-size:10.5px;color:var(--mu);border-bottom:1px solid var(--bd);padding-top:2px}
.trk2-sl button{all:unset;display:grid;grid-template-columns:1.1fr 1fr 1fr .8fr;gap:6px;padding:9px 6px;border-bottom:1px solid var(--bd);font-size:13px;color:var(--tx);cursor:pointer}
.trk2-sl button b{font-weight:700;color:var(--tx)}.trk2-sl button.svelto b{color:var(--c-passo)}.trk2-sl button.lento{color:var(--mu)}.trk2-sl button.lento b{color:var(--mu);font-weight:600}
.trk2-sl button span:last-child{color:var(--c-fc)}.trk2-sl button.sel{background:var(--sel)}
.trk2-lnb{display:flex;flex-wrap:wrap;align-items:center;gap:5px;padding:8px 12px 2px}.trk2-lnb>i{font-style:normal;font-size:10.5px;color:var(--mu);margin-right:2px}
.trk2-lnb button{font:600 11px Inter,sans-serif;padding:4px 10px;border-radius:999px;border:1px solid var(--bd);background:transparent;color:var(--mu);cursor:pointer;text-decoration:line-through;opacity:.7}
.trk2-lnb button.on{text-decoration:none;opacity:1;color:var(--tx);background:var(--pan)}.trk2-lnb button.on.c-passo{box-shadow:inset 0 -2px 0 var(--c-passo)}.trk2-lnb button.on.c-fc{box-shadow:inset 0 -2px 0 var(--c-fc)}.trk2-lnb button.on.c-cad{box-shadow:inset 0 -2px 0 var(--c-cad)}
.trk2-fas{display:inline-flex;align-items:center;gap:4px;margin-left:auto;flex-wrap:wrap}.trk2-fas>i{font-style:normal;font-size:10.5px;color:var(--mu);margin-right:2px}
.trk2-fas button{font:600 11px Inter,sans-serif;padding:4px 10px;border-radius:999px;border:1px solid var(--bd);background:transparent;color:var(--mu);cursor:pointer}.trk2-fas button.on{background:var(--tx);border-color:var(--tx);color:var(--bg)}
.trk2-fas em{font:700 9.5px Inter,sans-serif;font-style:normal;padding:2px 6px;border-radius:5px;color:var(--tx);background:color-mix(in srgb,var(--z) 22%,transparent)}
.trk2-mgl{display:flex;flex-wrap:wrap;gap:6px;padding:4px 0 10px}.trk2-mgl button{display:flex;flex-direction:column;align-items:flex-start;gap:1px;font:500 11px Inter,sans-serif;padding:7px 11px;border-radius:10px;border:1px solid var(--bd);background:var(--pan);color:var(--mu);cursor:pointer;font-variant-numeric:tabular-nums;min-width:78px}.trk2-mgl button b{font-size:14px;color:var(--tx)}.trk2-mgl button i{font-style:normal;color:var(--c-passo)}.trk2-mgl button.sel{outline:2px solid var(--tx)}
.trk2-mg{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:10px 12px;border-top:1px solid var(--bd)}.trk2-mg:empty{display:none}.trk2-mg>b{font-size:12.5px;color:var(--tx);margin-right:4px}
.trk2-mg button{font:500 11.5px Inter,sans-serif;padding:5px 9px;border-radius:9px;border:1px solid var(--bd);background:var(--pan);color:var(--mu);cursor:pointer;font-variant-numeric:tabular-nums}.trk2-mg button b{color:var(--tx)}.trk2-mg button i{font-style:normal;color:var(--c-passo)}
.trk2-fch{display:flex;gap:8px;align-items:baseline;margin-bottom:8px}.trk2-fch b{font-size:12.5px;color:var(--tx)}.trk2-fch i{font-style:normal;font-size:11px;color:var(--mu)}
.trk2-zone{display:flex;flex-direction:column;gap:4px;margin-bottom:10px}.trk2-zone div{display:grid;grid-template-columns:26px 1fr 56px 34px;align-items:center;gap:8px;font-size:11.5px;color:var(--tx)}.trk2-zone span{color:var(--mu);font-weight:600}.trk2-zone u{display:block;height:9px;border-radius:5px;background:var(--pan);overflow:hidden}.trk2-zone em{display:block;height:100%;border-radius:5px}.trk2-zone b{text-align:right;font-weight:600;font-variant-numeric:tabular-nums}.trk2-zone i{font-style:normal;text-align:right;color:var(--mu)}
.trk2-fcn{display:flex;flex-wrap:wrap;gap:8px 22px}.trk2-fcn span{display:flex;flex-direction:column}.trk2-fcn i{font-style:normal;font-size:10.5px;color:var(--mu)}.trk2-fcn b{font-size:15px;color:var(--tx);font-variant-numeric:tabular-nums}.trk2-fcn b.male{color:#F97316}.trk2-fcn em{font-style:normal;font-size:10.5px;color:var(--mu)}
.trk2-map{height:300px;border-top:1px solid var(--bd);background:var(--pan)}
.trk2-aiuto{padding:7px 12px;font-size:11px;color:var(--mu);border-top:1px solid var(--bd)}
.trk2.scuro .trk2-osm{filter:invert(1) hue-rotate(180deg) brightness(.8) contrast(.9) saturate(.6)}
.trk2 .leaflet-container{font-family:Inter,sans-serif}
.trk2-dot{width:12px;height:12px;border-radius:50%;background:#fff;border:3px solid #FF6A2E;box-shadow:0 0 0 2px rgba(0,0,0,.25)}`;document.head.appendChild(s);}
  function carica(){
    if(window.L)return Promise.resolve(window.L);
    if(leaflet)return leaflet;
    leaflet=new Promise((ok,ko)=>{
      const l=document.createElement('link');l.rel='stylesheet';l.href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';document.head.appendChild(l);
      const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';s.onload=()=>ok(window.L);s.onerror=ko;document.head.appendChild(s);
    });
    return leaflet;
  }
  const mmss=s=>{if(s==null||!isFinite(s))return '-';s=Math.round(s);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');};
  const hms=s=>{s=Math.round(s||0);const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+':'+String(m).padStart(2,'0'):m)+':'+String(x).padStart(2,'0');};
  const kmTxt=m=>m==null?'-':String((Math.round(m/10)/100).toFixed(2)).replace('.',',');
  const tema=()=>{try{return localStorage.getItem('rs_trk_tema')==='scuro'?'scuro':'chiaro';}catch(e){return 'chiaro';}};
  const asse=()=>{try{return localStorage.getItem('rs_trk_asse')==='tempo'?'tempo':'km';}catch(e){return 'km';}};
  // passo dalla velocita', liscio su 5 punti; fermo o quasi = vuoto
  function passi(v){const p=(v||[]).map(x=>x&&x>1.2?1000/x:null);return p.map((x,i)=>{if(x==null)return null;const w=[p[i-2],p[i-1],x,p[i+1],p[i+2]].filter(y=>y!=null);return w.reduce((t,y)=>t+y,0)/w.length;});}
  function quant(a,q){const v=a.filter(x=>x!=null).sort((x,y)=>x-y);return v.length?v[Math.min(v.length-1,Math.max(0,Math.floor(v.length*q)))]:null;}
  // migliori tratti della corsa, come i best efforts di intervals.icu: per ogni distanza il pezzo
  // continuo piu' veloce (finestra mobile sulla distanza, tempo riportato alla distanza esatta).
  // Punti ogni 10 s: sotto i 400 m il dato e' troppo grezzo. Scarta i salti del GPS (oltre 7 m/s).
  const DMIG=[400,1000,1609,3000,5000,10000,21097,42195];
  const DMNOME={400:'400 m',1000:'1 km',1609:'Miglio',3000:'3 km',5000:'5 km',10000:'10 km',21097:'Mezza',42195:'Maratona'};
  function migliori(tr,dist){
    const T=tr&&tr.t||[],D=tr&&tr.d||[],n=T.length,out=[];if(n<3)return out;
    const dd=[];let u=0;for(let i=0;i<n;i++){if(D[i]!=null&&D[i]>=u)u=D[i];dd.push(u);}
    (dist||DMIG).forEach(m=>{if(dd[n-1]<m)return;let best=null,j=0;
      for(let i=0;i<n;i++){if(j<i)j=i;while(j<n-1&&dd[j]-dd[i]<m)j++;const dm=dd[j]-dd[i];if(dm<m)break;
        const s=(T[j]-T[i])*m/dm;if(s>0&&m/s<=7&&(!best||s<best.s))best={m,s:Math.round(s),i0:i,i1:j};}
      if(best)out.push(best);});
    return out;
  }

  function mostra(el,tr,opz){
    stili();opz=opz||{};
    const n=(tr.t||[]).length;if(n<3){el.innerHTML='<p style="color:#8E8678">Traccia vuota.</p>';return;}
    const T=tr.t,D=tr.d||T.map(()=>null),P=passi(tr.v),FC=tr.fc||null,CAD=tr.cad||null,Q=tr.q||null;
    // cadenza: valori interi e a scalini, liscia su 5 punti (fermo = vuoto)
    const CADs=CAD?CAD.map((x,i)=>{if(!x||x<100)return null;const w=[CAD[i-2],CAD[i-1],x,CAD[i+1],CAD[i+2]].filter(y=>y&&y>=100);return w.reduce((t,y)=>t+y,0)/w.length;}):null;
    const lanes=[{k:'passo',lbl:'Passo /km',d:P,inv:true,fmt:mmss,h:96}].concat(FC?[{k:'fc',lbl:'FC',d:FC,h:86,zone:true}]:[],CAD?[{k:'cad',lbl:'Cadenza',d:CADs,h:64}]:[],Q?[{k:'q',lbl:'Quota',d:Q,h:56,area:true}]:[]);
    lanes.forEach(L=>{L.h0=L.h;});
    // corsie nascoste (e mappa), ricordate: con meno corsie le altre si allungano
    let NASC=(()=>{try{const a=JSON.parse(localStorage.getItem('rs_trk_nasc')||'[]');return Array.isArray(a)?a:[];}catch(e){return [];}})();
    const LNOME={passo:'Passo',fc:'FC',cad:'Cadenza',q:'Quota',map:'Mappa'};
    // fasce dei ritmi dell'atleta (E, M, T, I, R) sul passo: dove cade ogni tratto rispetto ai suoi ritmi
    const RZC={E:'#3B82F6',M:'#22C55E',T:'#EAB308',I:'#F97316',R:'#E11D48'},RZN={E:'Facile',M:'Maratona',T:'Soglia',I:'Intervalli',R:'Ripetute'};
    const HZ=!!(opz.zone&&Array.isArray(opz.zone.z)&&FC);
    const RZ=opz.ritmi?['E','M','T','I','R'].map(c=>{const v=opz.ritmi[c];if(!v)return null;const a=Array.isArray(v)?Math.min(v[0],v[1]):v-4,b=Array.isArray(v)?Math.max(v[0],v[1]):v+4;return {c,a,b,m:(a+b)/2};}).filter(Boolean):[];
    // fasce di sfondo, una scelta sola: ritmi dell'atleta sul passo, zone FC sulla FC, o nessuna
    let FAS=(()=>{try{return localStorage.getItem('rs_trk_fasce')||'';}catch(e){return '';}})();
    if(!['ritmi','fc','no'].includes(FAS)||(FAS==='ritmi'&&!RZ.length)||(FAS==='fc'&&!HZ))FAS=RZ.length?'ritmi':HZ?'fc':'no';
    const haMappa=tr.lat&&tr.lat.some(x=>x!=null);
    // tratti dai giri dell'orologio (per passo dell'allenamento o cambio di ritmo), posati sulla traccia per distanza
    let tratti=[];
    if(opz.giri&&window.RSOrologio&&D[n-1]){let acc=0;const B=window.RSOrologio.blocchi(opz.giri);const med=quant(B.map(b=>b.passo),0.5);
      tratti=B.map((b,k)=>{const a=acc;acc+=b.m;const i0=D.findIndex(x=>x!=null&&x>=a),i1=D.findIndex(x=>x!=null&&x>=acc);return {k,i0:Math.max(0,i0),i1:i1<0?n-1:i1,m:b.m,s:b.s,passo:b.passo,fc:b.fc,lav:B.length>1&&b.passo<med-5};}).filter(x=>x.i1>x.i0);}
    const kmSplit=[];if(D[n-1]){let a=0;for(let k=1;k<=Math.ceil(D[n-1]/1000);k++){const lim=k*1000;let b=D.findIndex((x,i)=>i>a&&x!=null&&x>=lim);if(b<0)b=n-1;if(b>a&&(D[b]-D[a])>=150)kmSplit.push({i0:a,i1:b,nome:k<=Math.floor(D[n-1]/1000)?String(k):kmTxt(D[n-1])});a=b;if(b>=n-1)break;}}
    let SP=(()=>{try{return localStorage.getItem('rs_trk_split')||'km';}catch(e){return 'km';}})();
    const MG=migliori(tr);   // migliori tratti della corsa, una scheda degli split
    let B=null,Bnome='';   // corsa di confronto: curve tratteggiate sulla stessa scala
    const SEMP=!!opz.semplice;
    let T0=SEMP?'scuro':tema(),AX=asse(),v0=0,v1=n-1,cur=null,drag=null,map=null,mk=null,lineSel=null,lineAll=null;
    el.innerHTML=`<div class="trk2 ${T0}${SEMP?' semp':''}">
      <div class="trk2-bar"></div><div class="trk2-sel"></div>
      <div class="trk2-sp"></div>
      <div class="trk2-lnb"></div>
      <div class="trk2-tl" title="Trascina per zoomare su un tratto, doppio clic per tutta la corsa"><canvas></canvas></div>
      ${haMappa?'<div class="trk2-map"></div>':''}
      <div class="trk2-fc"></div>
</div>`;
    const box=el.querySelector('.trk2'),spBox=box.querySelector('.trk2-sp'),fcBox=box.querySelector('.trk2-fc'),bar=box.querySelector('.trk2-bar'),selBox=box.querySelector('.trk2-sel'),wrap=box.querySelector('.trk2-tl'),cv=wrap.querySelector('canvas'),giBox=null;
    // mostra o nascondi le corsie e la mappa
    function corsie(){const lb=box.querySelector('.trk2-lnb');if(!lb)return;
      lb.innerHTML='<i>Mostra</i>'+lanes.map(L=>`<button type="button" data-ln="${L.k}" class="c-${L.k}${NASC.includes(L.k)?'':' on'}">${LNOME[L.k]}</button>`).join('')+(haMappa?`<button type="button" data-ln="map" class="c-map${NASC.includes('map')?'':' on'}">Mappa</button>`:'')+(RZ.length||HZ?`<span class="trk2-fas"><i>Fasce</i>${(RZ.length?[['ritmi','Ritmi']]:[]).concat(HZ?[['fc','Zone FC']]:[],[['no','Nessuna']]).map(([k,t])=>`<button type="button" data-fas="${k}" class="${FAS===k?'on':''}">${t}</button>`).join('')}${FAS==='ritmi'?RZ.map(z=>`<em style="--z:${RZC[z.c]}">${z.c}</em>`).join(''):''}</span>`:'');}
    function colori(){const C=TEMI[T0];box.className='trk2 '+T0+(SEMP?' semp':'');['bg','pan','tx','mu','bd','sel'].forEach(k=>box.style.setProperty('--'+k,C[k]));box.style.background=C.bg;['passo','fc','cad'].forEach(k=>box.style.setProperty('--c-'+k,C[k]));}
    colori();
    const X=i=>AX==='tempo'?T[i]:(D[i]!=null?D[i]:0);
    // barra dei valori: al cursore, se no il totale della vista
    function valori(i){
      const tot=i==null;
      const a=tot?v0:i,b=tot?v1:i;
      const dur=T[b]-T[a],dist=(D[b]||0)-(D[a]||0);
      const med=(arr)=>{if(!arr)return null;let s=0,c=0;for(let k=a;k<=b;k++)if(arr[k]!=null){s+=arr[k];c++;}return c?s/c:null;};
      const cel=(k,l,v)=>`<div class="trk2-v ${k}"><i>${l}</i><b>${v}</b></div>`;
      bar.innerHTML=(tot?cel('','Tempo',hms(dur))+cel('','Distanza',kmTxt(dist)+' km')+cel('passo','Passo medio',dist>0?mmss(dur/(dist/1000)):'-')
        :cel('','Tempo',hms(T[i]))+cel('','Distanza',kmTxt(D[i])+' km')+cel('passo','Passo',P[i]!=null?mmss(P[i]):'-'))
        +(FC?cel('fc',tot?'FC media':'FC',(tot?Math.round(med(FC)||0):(FC[i]||'-'))):'')
        +(CAD?cel('cad',tot?'Cadenza media':'Cadenza',(tot?Math.round(med(CAD)||0):(CAD[i]||'-'))):'')
        +(CAD&&tr.v?cel('','Falcata',(()=>{const f=tot?(dur>0&&med(CAD)?dist/dur*60/med(CAD):null):(tr.v[i]>1.2&&CAD[i]>100?tr.v[i]*60/CAD[i]:null);return f?f.toFixed(2).replace('.',',')+' m':'-';})()):'')
        +(Q?cel('','Quota',(tot?Math.round(med(Q)||0):(Q[i]!=null?Math.round(Q[i]):'-'))+' m'):'')
        +(SEMP?'':`<div class="trk2-tg">${opz.altre&&opz.altre.length?`<select class="trk2-cf" aria-label="Confronta con un'altra corsa"><option value="">Confronta con...</option>${opz.altre.map(a=>`<option value="${a.id}"${B&&B._id===a.id?' selected':''}>${a.nome}</option>`).join('')}</select>`:''}<button type="button" data-ax="km" class="${AX==='km'?'on':''}">Km</button><button type="button" data-ax="tempo" class="${AX==='tempo'?'on':''}">Tempo</button><button type="button" data-te="${T0==='chiaro'?'scuro':'chiaro'}">${T0==='chiaro'?'Scuro':'Chiaro'}</button></div>`);
    }
    bar.addEventListener('change',async e=>{const sel=e.target.closest('.trk2-cf');if(!sel)return;
      if(!sel.value){B=null;Bnome='';disegna();return;}
      try{const t2=await opz.carica(sel.value);if(t2&&t2.t&&t2.t.length>3){B={t:t2.t,d:t2.d||[],p:passi(t2.v),fc:t2.fc||null,cad:t2.cad||null,q:t2.q||null,_id:sel.value};Bnome=sel.options[sel.selectedIndex].text;}else{B=null;}}catch(x){B=null;}
      disegna();});
    bar.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
      if(b.dataset.ax){AX=b.dataset.ax;try{localStorage.setItem('rs_trk_asse',AX);}catch(x){}}
      if(b.dataset.te){T0=b.dataset.te;try{localStorage.setItem('rs_trk_tema',T0);}catch(x){}colori();tessere();pannelloFc();}
      valori(cur);disegna();});
    // statistiche del tratto selezionato
    function selezione(){
      if(v0===0&&v1===n-1){selBox.classList.remove('on');selBox.innerHTML='';return;}
      const dur=T[v1]-T[v0],dist=(D[v1]||0)-(D[v0]||0);let fs=0,fc=0,fm=0,cs=0,cc=0,gain=0;
      for(let k=v0;k<=v1;k++){if(FC&&FC[k]){fs+=FC[k];fc++;fm=Math.max(fm,FC[k]);}if(CAD&&CAD[k]){cs+=CAD[k];cc++;}if(Q&&k>v0&&Q[k]!=null&&Q[k-1]!=null&&Q[k]>Q[k-1])gain+=Q[k]-Q[k-1];}
      const s=(l,v)=>`<span><i>${l}</i><b>${v}</b></span>`;
      selBox.innerHTML=s('Tratto',hms(dur))+s('Distanza',kmTxt(dist)+' km')+s('Passo',dist>0?mmss(dur/(dist/1000))+' /km':'-')+(fc?s('FC media',Math.round(fs/fc))+s('max',fm):'')+(cc?s('Cadenza',Math.round(cs/cc)):'')+(cc&&dist>0&&dur>0?s('Falcata',(dist/dur*60/(cs/cc)).toFixed(2).replace('.',',')+' m'):'')+(Q?s('Salita',Math.round(gain)+' m'):'')+'<button type="button">Tutta la corsa</button>';
      selBox.classList.add('on');selBox.querySelector('button').onclick=()=>zoom(0,n-1);
    }
    // disegno della linea temporale
    const PAD={l:8,r:50,t:6,b:22},GAP=8;
    function disegna(){
      const LV=lanes.filter(L=>!NASC.includes(L.k)),hb=lanes.reduce((t,l)=>t+l.h0,0),hv=LV.reduce((t,l)=>t+l.h0,0)||1,fz=LV.length<=1?1.5:LV.length===2?1.15:1;void hb;void hv;
      lanes.forEach(L=>{if(NASC.includes(L.k))L.sy=null;else L.h=Math.round(L.h0*fz);});
      const C=TEMI[T0],dpr=window.devicePixelRatio||1,W=wrap.clientWidth||600,H=PAD.t+LV.reduce((t,l)=>t+l.h+GAP,0)+PAD.b;
      cv.width=W*dpr;cv.height=H*dpr;cv.style.height=H+'px';const g=cv.getContext('2d');g.setTransform(dpr,0,0,dpr,0,0);
      g.fillStyle=C.bg;g.fillRect(0,0,W,H);
      const x0=X(v0),x1=X(v1),pw=W-PAD.l-PAD.r,sx=v=>PAD.l+(x1>x0?(v-x0)/(x1-x0):0)*pw;
      // fasce dei tratti di lavoro, su tutte le corsie
      tratti.filter(t=>t.lav&&t.i1>=v0&&t.i0<=v1).forEach(t=>{const a=sx(X(Math.max(t.i0,v0))),b=sx(X(Math.min(t.i1,v1)));g.fillStyle=C.fasc;g.fillRect(a,PAD.t,b-a,H-PAD.t-PAD.b);});
      let y=PAD.t;
      LV.forEach(L=>{
        L.y=y;
        const vis=L.d.slice(v0,v1+1),lo0=quant(vis,0.02),hi0=quant(vis,0.98);
        let lo=lo0,hi=hi0;if(lo==null){y+=L.h+GAP;return;}if(hi-lo<1){lo-=1;hi+=1;}const pad=(hi-lo)*0.12;lo-=pad;hi+=pad;L.lo=lo;L.hi=hi;
        const yL=y,sy=v=>L.inv?yL+(v-lo)/(hi-lo)*L.h:yL+L.h-(v-lo)/(hi-lo)*L.h;L.sy=sy;
        // zone FC sotto la curva
        if(FAS==='fc'&&L.zone&&opz.zone&&Array.isArray(opz.zone.z)){const z=opz.zone.z;for(let k=0;k<5;k++){const a=z[k],b=z[k+1]||999;const ya=Math.max(y,Math.min(y+L.h,sy(b))),yb=Math.max(y,Math.min(y+L.h,sy(a)));if(yb>ya){g.fillStyle=C.zone[k];g.fillRect(PAD.l,ya,pw,yb-ya);}}}
        if(FAS==='ritmi'&&L.k==='passo'&&RZ.length){RZ.forEach(z=>{const ya=Math.max(y,Math.min(y+L.h,sy(z.a))),yb=Math.max(y,Math.min(y+L.h,sy(z.b)));if(yb-ya<1)return;g.fillStyle=RZC[z.c];g.globalAlpha=T0==='chiaro'?.10:.13;g.fillRect(PAD.l,ya,pw,yb-ya);g.globalAlpha=.85;g.font='700 9.5px Inter, sans-serif';g.textAlign='right';if(yb-ya>=9)g.fillText(z.c,W-PAD.r-4,(ya+yb)/2+3.5);g.textAlign='left';g.globalAlpha=1;});}
        // griglia e scala a destra
        g.strokeStyle=C.gr;g.lineWidth=1;g.fillStyle=C.mu;g.font='10px Inter, sans-serif';g.textAlign='left';
        for(let k=0;k<=2;k++){const v=lo+(hi-lo)*(0.15+k*0.35),yy=Math.round(sy(v))+.5;g.beginPath();g.moveTo(PAD.l,yy);g.lineTo(W-PAD.r,yy);g.stroke();g.fillText(L.fmt?L.fmt(v):String(Math.round(v)),W-PAD.r+5,yy+3);}
        g.fillStyle=C.mu;g.font='600 10.5px Inter, sans-serif';g.fillText(L.lbl,PAD.l+4,y+11);
        // la curva: un punto per pixel (il minimo o massimo del pixel), cosi' resta liscia e veloce
        g.save();g.beginPath();g.rect(PAD.l,y,pw,L.h);g.clip();
        // corsa di confronto: stessa distanza (o stesso tempo) dall'inizio, tratteggiata
        const bd=B?(L.k==='passo'?B.p:L.k==='fc'?B.fc:L.k==='cad'?B.cad:L.k==='q'?B.q:null):null;
        if(bd){g.strokeStyle=T0==='chiaro'?'#0EA5E9':'#38BDF8';g.globalAlpha=.85;g.lineWidth=1.3;g.setLineDash([4,3]);g.beginPath();let su=false;
          for(let i=0;i<B.t.length;i++){const v=bd[i],xv=AX==='tempo'?B.t[i]:B.d[i];if(v==null||xv==null||xv<x0||xv>x1){su=false;continue;}const px=sx(xv),py=sy(v);if(!su){g.moveTo(px,py);su=true;}else g.lineTo(px,py);}
          g.stroke();g.setLineDash([]);g.globalAlpha=1;}
        g.strokeStyle=C[L.k];g.fillStyle=C[L.k];g.lineWidth=1.6;g.lineJoin='round';
        if(L.punti){for(let i=v0;i<=v1;i++){const v=L.d[i];if(v==null)continue;g.fillRect(sx(X(i))-1,sy(v)-1,2,2);}}
        else{g.beginPath();let su=false;for(let i=v0;i<=v1;i++){const v=L.d[i];if(v==null){su=false;continue;}const px=sx(X(i)),py=sy(v);if(!su){g.moveTo(px,py);su=true;}else g.lineTo(px,py);}g.stroke();
          if(L.area){g.lineTo(sx(X(v1)),y+L.h);g.lineTo(sx(X(v0)),y+L.h);g.closePath();g.globalAlpha=.25;g.fill();g.globalAlpha=1;}}
        g.restore();
        y+=L.h+GAP;
      });
      if(B){g.font='600 10px Inter, sans-serif';g.textAlign='right';g.fillStyle=T0==='chiaro'?'#0EA5E9':'#38BDF8';g.fillText('- - '+Bnome,W-PAD.r-4,PAD.t+11);g.textAlign='left';}
      // asse in basso: km o tempo
      g.fillStyle=C.mu;g.font='10px Inter, sans-serif';g.textAlign='center';
      const span=x1-x0,step=AX==='tempo'?[60,120,300,600,900,1200,1800,3600].find(s=>span/s<=8)||3600:[100,200,500,1000,2000,5000,10000].find(s=>span/s<=8)||10000;
      for(let v=Math.ceil(x0/step)*step;v<=x1;v+=step){const px=sx(v);g.fillText(AX==='tempo'?(v>=3600?hms(v).slice(0,-3):Math.round(v/60)+'\''):String(v/1000).replace('.',',')+(step<1000?'':' km'),px,H-6);}
      // selezione in corso
      if(drag&&drag.b!=null){const a=Math.min(drag.a,drag.b),b=Math.max(drag.a,drag.b);g.fillStyle=C.sel;g.fillRect(a,PAD.t,b-a,H-PAD.t-PAD.b);}
      // cursore su tutte le corsie
      if(cur!=null&&cur>=v0&&cur<=v1){const px=Math.round(sx(X(cur)))+.5;g.strokeStyle=C.cur;g.globalAlpha=.55;g.lineWidth=1;g.beginPath();g.moveTo(px,PAD.t);g.lineTo(px,H-PAD.b);g.stroke();g.globalAlpha=1;
        LV.forEach(L=>{const v=L.d[cur];if(v==null||!L.sy)return;g.fillStyle=C.bg;g.strokeStyle=C[L.k];g.lineWidth=2;g.beginPath();g.arc(px,L.sy(v),3.5,0,7);g.fill();g.stroke();});
        // cartellini sulla scala a destra, come su intervals.icu: il valore del punto nel colore della corsia
        const cy=(L,v)=>Math.max(L.y+8,Math.min(L.y+L.h-8,L.sy(v)));
        const pill=(L,v,col,dy)=>{if(v==null||!L.sy)return;const txt=L.fmt?L.fmt(v):String(Math.round(v)),yy=dy!=null?dy:cy(L,v),x=W-PAD.r+2,w=PAD.r-4;
          g.fillStyle=col;g.beginPath();if(g.roundRect)g.roundRect(x,yy-8,w,16,4);else g.rect(x,yy-8,w,16);g.fill();g.fillStyle='#fff';g.font='700 10.5px Inter, sans-serif';g.textAlign='center';g.fillText(txt,x+w/2,yy+4);g.textAlign='left';};
        // valore della corsa di confronto allo stesso km (o tempo)
        let bi=null;if(B){const xv=X(cur),arr=AX==='tempo'?B.t:B.d;let lo=0,hi=arr.length-1;while(hi-lo>1){const m=(lo+hi)>>1;if((arr[m]||0)<xv)lo=m;else hi=m;}bi=Math.abs((arr[lo]||0)-xv)<=Math.abs((arr[hi]||0)-xv)?lo:hi;if(Math.abs((arr[bi]||0)-xv)>(AX==='tempo'?30:80))bi=null;}
        // se il punto esatto manca (pausa, GPS) prende il piu' vicino
        const vic=d=>{for(let k=0;k<=6;k++){if(d[cur-k]!=null)return d[cur-k];if(d[cur+k]!=null)return d[cur+k];}return null;};
        LV.forEach(L=>{const v=vic(L.d);pill(L,v,C[L.k]==='#94A3B8'||C[L.k]==='#6B6460'?'#64748B':C[L.k]);
          if(bi!=null){const bd=L.k==='passo'?B.p:L.k==='fc'?B.fc:L.k==='cad'?B.cad:L.k==='q'?B.q:null,bv=bd?bd[bi]:null;if(bv!=null){let dy=null;if(v!=null&&L.sy){const a=cy(L,v),b=cy(L,bv);if(Math.abs(b-a)<17){dy=b>=a?a+17:a-17;if(dy>L.y+L.h-8)dy=a-17;if(dy<L.y+8)dy=a+17;}}pill(L,bv,T0==='chiaro'?'#0EA5E9':'#0284C7',dy);}}});}
      cv._sx=sx;cv._W=W;
    }
    // da pixel a indice (ricerca sul valore dell'asse)
    function idx(px){const x0=X(v0),x1=X(v1),pw=(cv._W||600)-PAD.l-PAD.r,val=x0+Math.max(0,Math.min(1,(px-PAD.l)/pw))*(x1-x0);let lo=v0,hi=v1;while(hi-lo>1){const m=(lo+hi)>>1;if(X(m)<val)lo=m;else hi=m;}return Math.abs(X(lo)-val)<=Math.abs(X(hi)-val)?lo:hi;}
    function cursore(i){cur=i;valori(i);disegna();if(mk&&i!=null&&tr.lat[i]!=null)mk.setLatLng([tr.lat[i],tr.lon[i]]);}
    // statistiche di un pezzo [a,b]
    function stat(a,b){const dur=T[b]-T[a],dist=(D[b]||0)-(D[a]||0);let fs=0,fc=0,fm=0,cs=0,cc=0,gain=0;
      for(let k=a;k<=b;k++){if(FC&&FC[k]){fs+=FC[k];fc++;fm=Math.max(fm,FC[k]);}if(CAD&&CAD[k]){cs+=CAD[k];cc++;}if(Q&&k>a&&Q[k]!=null&&Q[k-1]!=null&&Q[k]>Q[k-1])gain+=Q[k]-Q[k-1];}
      return {dur,dist,passo:dist>0?dur/(dist/1000):null,fc:fc?Math.round(fs/fc):null,fcMax:fm||null,cad:cc?Math.round(cs/cc):null,gain:Math.round(gain)};}
    // split sopra la linea temporale: per km o per tratti dell'allenamento, barre alte quanto la velocita'
    function split(){
      const tabs=`<div class="trk2-sph"><b>Split</b><button type="button" data-sp="km" class="${SP!=='tratti'&&SP!=='migliori'?'on':''}">Per km</button>${tratti.length>1?`<button type="button" data-sp="tratti" class="${SP==='tratti'?'on':''}">Per allenamento</button>`:''}${MG.length?`<button type="button" data-sp="migliori" class="${SP==='migliori'?'on':''}">Migliori tratti</button>`:''}<i>clic per zoomare</i></div>`;
      if(SP==='migliori'&&MG.length){spBox.innerHTML=tabs+`<div class="trk2-mgl">${MG.map((x,k)=>`<button type="button" data-mg="${k}" class="${x.i0>=v0&&x.i1<=v1&&!(v0===0&&v1===n-1)?'sel':''}"><span>${DMNOME[x.m]}</span><b>${hms(x.s)}</b><i>${mmss(x.s/(x.m/1000))}/km</i></button>`).join('')}</div>`;spBox._S=null;return;}
      const L=SP==='tratti'&&tratti.length>1?tratti.map(t=>({i0:t.i0,i1:t.i1,nome:String(t.k+1),lav:t.lav})):kmSplit;
      if(L.length<2){spBox.innerHTML=MG.length?tabs:'';return;}
      const S=L.map(x=>Object.assign({},x,stat(x.i0,x.i1))).filter(x=>x.passo),ps=S.map(x=>x.passo),lo=Math.min(...ps),hi=Math.max(...ps),med=quant(ps,0.5);
      const tot=S.reduce((t,x)=>t+x.dist,0);
      if(SEMP){spBox.innerHTML=tabs+`<div class="trk2-sl"><div class="trk2-slh"><span>${SP==='tratti'?'Tratto':'Km'}</span><span>Dist.</span><span>Passo</span><span>FC</span></div>${S.map((x,k)=>`<button type="button" data-k="${k}" class="${x.passo<med-3?'svelto':x.passo>med+8?'lento':''}${x.i0>=v0&&x.i1<=v1&&!(v0===0&&v1===n-1)?' sel':''}"><span>${x.nome}</span><span>${kmTxt(x.dist)}</span><b>${mmss(x.passo)}</b><span>${x.fc||'-'}</span></button>`).join('')}</div>`;spBox._S=S;return;}
      spBox.innerHTML=tabs+`
        <div class="trk2-spb">${S.map((x,k)=>{const h=hi>lo?28+Math.round((hi-x.passo)/(hi-lo)*52):60,dentro=x.i0>=v0&&x.i1<=v1&&!(v0===0&&v1===n-1);
          return `<button type="button" data-k="${k}" class="${x.passo<med-3?'svelto':x.passo>med+8?'lento':''}${dentro?' sel':''}" style="flex:${Math.max(0.35,x.dist/tot*S.length)}" title="${x.nome}: ${kmTxt(x.dist)} km in ${hms(x.dur)}"><i>${x.nome}</i><u style="height:${h}px"></u><b>${mmss(x.passo)}</b>${x.fc?`<s>${x.fc}</s>`:''}</button>`;}).join('')}</div>
        <details class="trk2-spt"><summary>Tabella degli split</summary><table><thead><tr><th>${SP==='tratti'?'Tratto':'Km'}</th><th>Dist.</th><th>Tempo</th><th>Passo</th><th>FC</th><th>max</th><th>Cad.</th><th>Salita</th></tr></thead><tbody>${S.map(x=>`<tr><td>${x.nome}</td><td>${kmTxt(x.dist)}</td><td>${hms(x.dur)}</td><td><b>${mmss(x.passo)}</b></td><td>${x.fc||'-'}</td><td>${x.fcMax||'-'}</td><td>${x.cad||'-'}</td><td>${x.gain} m</td></tr>`).join('')}</tbody></table></details>`;
      spBox._S=S;
    }
    spBox.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
      if(b.dataset.sp){SP=b.dataset.sp;try{localStorage.setItem('rs_trk_split',SP);}catch(x){}split();return;}
      if(b.dataset.mg!=null){const m=MG[+b.dataset.mg];if(m)zoom(m.i0,m.i1);return;}
      const x=(spBox._S||[])[+b.dataset.k];if(x)zoom(x.i0,x.i1);});
    // frequenza cardiaca della vista: tempo nelle zone, deriva cardiaca (passo su FC fra prima e seconda meta'), sopra soglia
    function ritmiHtml(){
      if(!RZ.length)return '';
      const E=RZ.find(z=>z.c==='E'),t={},dt=k=>k>0?T[k]-T[k-1]:0;let tot=0;
      for(let k=v0+1;k<=v1;k++){const p=P[k];if(p==null)continue;const d=dt(k);tot+=d;
        let c=E&&p>E.b+15?'lento':RZ.reduce((a,z)=>Math.abs(p-z.m)<Math.abs(p-a.m)?z:a).c;t[c]=(t[c]||0)+d;}
      if(!tot)return '';
      const righe=(t.lento?[{c:'lento'}]:[]).concat(RZ).filter(z=>t[z.c]);
      return `<div class="trk2-fch" style="margin-top:12px"><b>Ritmi dell'atleta</b><i>tempo vicino a ogni ritmo${!(v0===0&&v1===n-1)?', nel tratto scelto':''}</i></div>
        <div class="trk2-zone">${righe.map(z=>{const pc=t[z.c]/tot*100;return `<div><span>${z.c==='lento'?'&lt;E':z.c}</span><u><em style="width:${pc.toFixed(1)}%;background:${z.c==='lento'?'#94A3B8':RZC[z.c]}"></em></u><b>${hms(t[z.c])}</b><i>${Math.round(pc)}%</i></div>`;}).join('')}</div>`;
    }
    function pannelloFc(){
      if(!FC){fcBox.innerHTML=ritmiHtml();return;}
      const z=opz.zone&&Array.isArray(opz.zone.z)?opz.zone.z.slice(0,5):null,dt=k=>k>0?T[k]-T[k-1]:0;
      let zt=[0,0,0,0,0],tot=0,sopra=0;const soglia=opz.zone&&opz.zone.fcSoglia;
      for(let k=v0+1;k<=v1;k++){const f=FC[k];if(!f)continue;const d=dt(k);tot+=d;if(soglia&&f>=soglia)sopra+=d;if(z){let zi=0;for(let j=0;j<5;j++)if(f>=z[j])zi=j;zt[zi]+=d;}}
      // deriva: rapporto velocita'/FC nella prima e nella seconda meta' della vista
      const mid=v0+Math.floor((v1-v0)/2),rap=(a,b)=>{let sv=0,sf=0,c=0;for(let k=a;k<=b;k++){if(FC[k]&&tr.v&&tr.v[k]>1.2){sv+=tr.v[k];sf+=FC[k];c++;}}return c?sv/sf:null;};
      const r1=rap(v0,mid),r2=rap(mid,v1),der=r1&&r2?(r1-r2)/r1*100:null;
      const C=TEMI[T0];
      fcBox.innerHTML=`<div class="trk2-fch"><b>Frequenza cardiaca</b>${!(v0===0&&v1===n-1)?'<i>del tratto scelto</i>':''}</div>
        ${z?`<div class="trk2-zone">${zt.map((t,k)=>{const pc=tot?t/tot*100:0;return `<div><span>Z${k+1}</span><u><em style="width:${pc.toFixed(1)}%;background:${['#94A3B8','#3B82F6','#22C55E','#F97316','#E11D48'][k]}"></em></u><b>${hms(t)}</b><i>${Math.round(pc)}%</i></div>`;}).join('')}</div>`:''}
        <div class="trk2-fcn">${der!=null?`<span><i>Deriva cardiaca</i><b class="${der>5?'male':''}">${der>0?'+':''}${der.toFixed(1).replace('.',',')}%</b><em>${der<=5?'sotto il 5%: tenuta aerobica buona':'oltre il 5%: la FC sale a parita\' di passo'}</em></span>`:''}
          ${soglia?`<span><i>Sopra la soglia (${soglia})</i><b>${hms(sopra)}</b></span>`:''}
          <span><i>FC media e massima</i><b>${Math.round(stat(v0,v1).fc||0)} / ${stat(v0,v1).fcMax||'-'}</b></span></div>${ritmiHtml()}`;
    }
    function zoom(a,b){v0=Math.max(0,Math.min(a,b));v1=Math.min(n-1,Math.max(a,b));if(v1-v0<3){v0=0;v1=n-1;}cur=null;valori(null);selezione();disegna();mappaSel();split();pannelloFc();}
    const pos=e=>{const r=cv.getBoundingClientRect();const p=e.touches?e.touches[0]:e;return p.clientX-r.left;};
    wrap.addEventListener('mousemove',e=>{const x=pos(e);if(drag){drag.b=x;}cursore(idx(x));});
    wrap.addEventListener('mouseleave',()=>{if(!drag){cur=null;valori(null);disegna();}});
    wrap.addEventListener('mousedown',e=>{drag={a:pos(e),b:null};});
    const su=()=>{if(!document.body.contains(cv)){window.removeEventListener('mouseup',su);return;}if(!drag)return;const d=drag;drag=null;if(d.b!=null&&Math.abs(d.b-d.a)>8)zoom(idx(Math.min(d.a,d.b)),idx(Math.max(d.a,d.b)));else disegna();};
    window.addEventListener('mouseup',su);
    wrap.addEventListener('dblclick',()=>zoom(0,n-1));
    wrap.addEventListener('touchstart',e=>cursore(idx(pos(e))),{passive:true});
    wrap.addEventListener('touchmove',e=>cursore(idx(pos(e))),{passive:true});
    // tratti dell'orologio come pulsanti: clic = zoom su quel tratto
    // mappa
    let tile=null;
    function tessere(){if(!map||!window.L)return;if(tile)map.removeLayer(tile);tile=window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,className:'trk2-osm',attribution:'&copy; OpenStreetMap'}).addTo(map);}
    function mappaSel(){if(!map||!window.L)return;const L=window.L;if(lineSel)map.removeLayer(lineSel);
      const pts=[];for(let i=v0;i<=v1;i++)if(tr.lat[i]!=null)pts.push([tr.lat[i],tr.lon[i]]);
      lineSel=L.polyline(pts,{color:'#FF6A2E',weight:4.5,opacity:.95}).addTo(map);if(pts.length>1)map.fitBounds(lineSel.getBounds(),{padding:[18,18]});}
    if(haMappa)carica().then(L=>{
      const mb=box.querySelector('.trk2-map');if(!mb)return;
      const pts=tr.lat.map((x,i)=>x!=null&&tr.lon[i]!=null?[x,tr.lon[i]]:null).filter(Boolean);
      map=L.map(mb,{scrollWheelZoom:false});tessere();
      lineAll=L.polyline(pts,{color:'#94A3B8',weight:3,opacity:.8}).addTo(map);
      L.circleMarker(pts[0],{radius:5,color:'#22C55E',fillColor:'#22C55E',fillOpacity:1}).addTo(map);
      L.circleMarker(pts[pts.length-1],{radius:5,color:'#2B2622',fillColor:'#2B2622',fillOpacity:1}).addTo(map);
      mk=L.marker(pts[0],{icon:L.divIcon({className:'',html:'<div class="trk2-dot"></div>',iconSize:[12,12],iconAnchor:[6,6]})}).addTo(map);
      mappaSel();setTimeout(()=>{map.invalidateSize();mappaSel();},150);
    }).catch(()=>{const b=box.querySelector('.trk2-map');if(b)b.innerHTML='<p style="padding:12px;color:#8E8678">Mappa non disponibile (senza connessione).</p>';});
    box.querySelector('.trk2-lnb').addEventListener('click',e=>{const f=e.target.closest('[data-fas]');if(f){FAS=f.dataset.fas;try{localStorage.setItem('rs_trk_fasce',FAS);}catch(x){}corsie();disegna();return;}
      const b=e.target.closest('[data-ln]');if(!b)return;const k=b.dataset.ln,i=NASC.indexOf(k);
      if(i>=0)NASC.splice(i,1);else{if(k!=='map'&&lanes.filter(L=>!NASC.includes(L.k)).length<=1)return;NASC.push(k);}
      try{localStorage.setItem('rs_trk_nasc',JSON.stringify(NASC));}catch(x){}
      const mb=box.querySelector('.trk2-map');if(mb){mb.style.display=NASC.includes('map')?'none':'';if(!NASC.includes('map')&&map)setTimeout(()=>{map.invalidateSize();mappaSel();},60);}
      corsie();disegna();});
    {const mb=box.querySelector('.trk2-map');if(mb&&NASC.includes('map'))mb.style.display='none';}
    corsie();valori(null);disegna();split();pannelloFc();
    if(window.ResizeObserver){new ResizeObserver(()=>disegna()).observe(wrap);}
    return {zoom,ridisegna:disegna};
  }
  return {mostra,carica,migliori,DMIG,DMNOME};
})();

// ── PREVENZIONE (PREHAB): LA SCHEDA DEL GIORNO ─────────────────────────
/* Una scheda a parte, non dentro la seduta: prima di ogni corsa sempre la stessa, prima
   della forza secondo la seduta (gambe A, gambe B, parte alta). 6-8 esercizi, 15-25 minuti:
   rullo all'inizio, mobilita' e stretch, attivazione con isometrie, rinforzo mirato sulle
   zone dell'atleta, chiusura dinamica (corsa) o mobilita' delle spalle (parte alta).
   Le foto vengono dalla libreria della prevenzione (coach/prev/<k>.jpg).

   Isometrie, come si dosano (le note degli esercizi seguono queste regole):
   - lunghe sub-massimali: 30-45" x 3-5 a circa il 70% dello sforzo, 1-2' di recupero; calmano
     il dolore del tendine e lo caricano senza irritarlo (Rio 2015 rotuleo; Achille, bandelletta).
     Spanish squat, wall sit, isometria del polpaccio e del soleo, spinta su avampiede;
   - di tenuta (yielding): si tiene una posizione o un carico 10-30", controllo e tendine
     (Copenhagen, side plank, split squat fermo);
   - finali: la tenuta 5-10" sull'ultima ripetizione (bridge, calf raise), attivazione;
   - brevi massimali (overcoming): 3-5" di spinta massima contro un fermo x 4-6, 1' di
     recupero; forza a un angolo senza fatica, utili in stagione e prima delle gare;
   - pause dentro la ripetizione (2-3" in buca): forza nel punto debole del movimento. */
window.RSPrehab = (function(){
  // n nome, k foto della libreria (o null), s serie, r ripetizioni o tempo, c nota
  const CAT={
    rullo:{n:'Foam roller',k:'foam-roller-glutei',s:1,r:"5' in tutto",c:"30-40\" per gruppo: glutei, abduttori, tensore della fascia lata, quadricipiti, polpacci"},
    rulloAlto:{n:'Foam roller dorsale',k:'estensione-toracica-con-foam-roller',s:1,r:"2'",c:'estensione toracica sul rullo, poi dorsali'},
    mobGin:{n:'Mobilita\' ginocchio da supina',k:null,s:2,r:'8 per lato',c:'flessione ed estensione lente, senza forzare'},
    n9090:{n:'90-90',k:'90-90',s:2,r:'8 per lato',c:'busto alto, cambio lato controllato'},
    stretch:{n:'Stretch a scelta: pigeon, psoas o frog',k:'pigeon-stretch',s:1,r:'30-40" per lato',c:'quello che oggi senti piu\' rigido'},
    bridge:{n:'Glute bridge',k:'glute-bridge',s:2,r:'8',c:'tenuta 10" sull\'ultima ripetizione (isometria finale), poi 1 serie da 8 su una gamba'},
    lateral:{n:'Camminata laterale con miniband',k:'camminata-laterale-con-miniband',s:2,r:'10 passi per lato',c:'mezzo squat, ginocchia fuori'},
    calf:{n:'Calf raise',k:'calf-raise',s:2,r:'10',c:'bipodalico con tenuta 10" sull\'ultima, poi 1 serie da 10 monopodalica per lato'},
    dinam:{n:'Stretching dinamico',k:'half-kneel-quads-stretch',s:1,r:'8-10 per esercizio',c:'quadricipiti, femorali, slanci frontali e laterali'},
    pogo:{n:'Pogo jump',k:'pogo-jump',s:2,r:'10 + 10 per gamba',c:'veloci e reattivi: bipodali, poi monopodali. Poi si parte'},
    wallsit:{n:'Wall sit',k:'wall-sit',s:2,r:'30"',c:'isometria lunga dei quadricipiti, al 70% dello sforzo: protegge ginocchio e bandelletta'},
    spanish:{n:'Spanish squat',k:'spanish-squat',s:4,r:'30-45"',c:'isometria lunga, 70% dello sforzo, 1\' di recupero: tendine rotuleo'},
    calfIso:{n:'Isometria del polpaccio',k:'isometria-polpaccio-a-gamba-stesa-al-castello',s:3,r:'30-45"',c:'isometria lunga, sulle punte a meta\' altezza: Achille e polpaccio'},
    soleoIso:{n:'Isometria del soleo (ginocchio piegato)',k:'isometria-polpaccio-a-gamba-flessa-al-castello',s:3,r:'30-45"',c:'isometria lunga a ginocchio flesso: soleo, che regge la corsa'},
    soleoEcc:{n:'Eccentriche del soleo',k:'eccentriche-soleo-da-seduto-al-castello',s:3,r:'8 per lato',c:'discesa lenta in 4", risalita con due gambe'},
    avampiede:{n:'Spinta isometrica su avampiede',k:'spinta-isometrica-su-avampiede',s:3,r:'30"',c:'isometria lunga sull\'avampiede, ginocchio leggermente piegato'},
    caviglia:{n:'Dorsiflessione caviglia a muro',k:'dorsiflessione-caviglia-a-muro',s:2,r:'10 per lato',c:'ginocchio verso il muro, tallone a terra'},
    tibiale:{n:'Tibialis raise',k:null,s:2,r:'15',c:'schiena al muro, punte su senza staccare i talloni: tibiale anteriore e periostite'},
    copen:{n:'Copenhagen plank',k:'copenhagen-half-planks',s:2,r:'20" per lato',c:'isometria di tenuta degli adduttori; leva corta (ginocchio) se e\' la prima volta'},
    deadbug:{n:'Dead bug',k:'dead-bug-elastico-gambe-alternate',s:2,r:'8 per lato',c:'schiena appoggiata, espira lungo'},
    goblet:{n:'Goblet squat lento',k:null,s:2,r:'8',c:'3" in discesa e 2" fermo in basso: caviglia, anca e ginocchio insieme'},
    slBridge:{n:'Single leg glute bridge',k:'single-leg-glute-bridge',s:2,r:'8 per lato',c:'tenuta 5" in alto sull\'ultima'},
    nordic:{n:'Nordic hamstring con elastico',k:'nordic-hamstring-con-elastico',s:2,r:'5',c:'eccentrica lenta: flessori'},
    tspine:{n:'Rotazione toracica in ginocchio',k:'half-kneeling-t-spine-rotation',s:2,r:'6 per lato',c:'segui la mano con lo sguardo'},
    extrarot:{n:'Rotazione esterna con elastico',k:'rotazione-esterna-con-elastico',s:2,r:'12 per lato',c:'gomito al fianco, lento'},
    pullApart:{n:'Band pull apart',k:null,s:2,r:'15',c:'scapole indietro e in basso'},
    scapPush:{n:'Push up scapolari',k:null,s:2,r:'10',c:'braccia tese, solo le scapole'}
  };
  const ZONE_INF={bandelletta:['wallsit'],rotulea:['spanish'],ginocchio:['wallsit'],lca:['spanish'],lcm:['wallsit'],quadricipite:['wallsit'],
    achille:['calfIso','soleoEcc'],polpaccio:['soleoIso'],caviglia:['caviglia'],piede:['avampiede'],tibiale:['tibiale'],adduttori:['copen'],
    hamstring:['nordic'],hamprox:['slBridge'],glutei_t:['lateral'],anca:['n9090'],lombalgia:['deadbug'],core:['deadbug'],colonna:['deadbug'],spalle:['extrarot'],glutei:['slBridge']};
  function zoneDi(p){const z=new Set();(p&&p.carenze||[]).forEach(x=>z.add(x));Object.keys(p&&p.infortuni||{}).forEach(x=>z.add(x));(p&&p.problemi||[]).forEach(x=>z.add(x));return [...z];}
  function voce(id,extra){const e=CAT[id];return e?Object.assign({id,n:e.n,k:e.k,s:e.s,r:e.r,c:e.c},extra||{}):null;}
  // le zone dell'atleta entrano al posto degli esercizi generici in coda, fino a 8 esercizi
  function personalizza(base,zone,max,riserva){
    const out=base.slice();const aggiunte=[];
    // stessa famiglia (isometria del ginocchio, del polpaccio): una basta
    const FAM=[['wallsit','spanish'],['calfIso','soleoIso','avampiede'],['bridge','slBridge']];
    const gia=id=>out.includes(id)||aggiunte.includes(id)||FAM.some(f=>f.includes(id)&&f.some(x=>x!==id&&(out.includes(x)||aggiunte.includes(x))));
    zone.forEach(z=>(ZONE_INF[z]||[]).forEach(id=>{if(!gia(id))aggiunte.push(id);}));
    aggiunte.forEach(id=>{if(out.length>=max){const i=out.findIndex(x=>riserva.includes(x));if(i<0)return;out.splice(i,1);}out.splice(Math.max(0,out.length-(out.includes('pogo')?2:0)),0,id);});
    return out;
  }
  // scheda tipo: corsa (sempre uguale), gambe A e B (il rinforzo vero diviso nei due giorni), parte alta
  function bozza(tipo,profilo){
    const zone=zoneDi(profilo);let ids,intro,fine;
    if(tipo==='corsa'){ids=personalizza(['mobGin','n9090','stretch','bridge','lateral','calf','dinam','pogo'],zone,8,['lateral','stretch','mobGin']);intro='rullo';fine='Poi si parte: i primi 10 minuti facili.';}
    else if(tipo==='gambeB'){ids=personalizza(['caviglia','stretch','slBridge','soleoEcc','tibiale','copen','deadbug'],zone,8,['deadbug','tibiale']);intro='rullo';fine='Poi le serie di avvicinamento del primo esercizio.';}
    else if(tipo==='alta'){ids=personalizza(['tspine','extrarot','pullApart','scapPush','deadbug'],zone.filter(z=>['spalle','core','colonna','lombalgia'].includes(z)),7,['scapPush']);intro='rulloAlto';fine='Poi le serie di avvicinamento del primo esercizio.';}
    else{ids=personalizza(['caviglia','n9090','bridge','spanish','avampiede','goblet','deadbug'],zone,8,['deadbug','goblet']);intro='rullo';fine='Poi le serie di avvicinamento del primo esercizio.';}
    return {tipo,intro:voce(intro),es:ids.map(id=>voce(id)).filter(Boolean),fine};
  }
  const TIPI=[['corsa','Prima della corsa'],['gambeA','Prima della forza: gambe A'],['gambeB','Prima della forza: gambe B'],['alta','Prima della forza: parte alta']];
  // minuti: circa 40" a serie (o il tempo scritto) piu' i cambi; il rullo conta i suoi
  function minuti(card){
    const sec=e=>{const r=String(e.r||'');const t=/(\d+)\s*'/.exec(r);if(t)return +t[1]*60;const s=/(\d+)(?:-(\d+))?\s*"/.exec(r);const lato=/per lato/.test(r)?2:1;
      const base=s?(+(s[2]||s[1])):35;return ((+e.s||1)*base*lato)+((+e.s||1)*20);};
    const tot=(card.intro?sec(card.intro):0)+(card.es||[]).reduce((t,e)=>t+sec(e),0);
    return Math.max(5,Math.round(tot/60));
  }
  // da e a testo: "Glute bridge 2x8 - tenuta 10" sull'ultima"
  function testo(card){return (card.es||[]).map(e=>e.n+' '+(e.s||1)+'x'+(e.r||'')+(e.c?' - '+e.c:'')).join('\n');}
  function daTesto(txt){
    return String(txt||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean).map(r=>{
      let nota='';const d=/\s[-\u2013]\s(.+)$/.exec(r);if(d){nota=d[1].trim();r=r.slice(0,d.index);}
      const m=/^(.*?)\s+(\d+)\s*[x×]\s*(.+)$/i.exec(r);
      const n=(m?m[1]:r).trim(),s=m?+m[2]:1,rr=m?m[3].trim():'';
      const c=Object.entries(CAT).find(([,v])=>v.n.toLowerCase()===n.toLowerCase());
      const db=!c&&window.PREV_DB?(window.PREV_DB.find(x=>String(x.n).toLowerCase()===n.toLowerCase())||null):null;
      return {id:c?c[0]:null,n,k:c?c[1].k:db?db.k:null,s,r:rr,c:nota};
    });
  }
  // quale scheda per una seduta: corsa e sprint la corsa; la forza dalle sue gambe
  const GAMBE=/squat|stacco|deadlift|rdl|affond|lunge|split|step ?up|hip thrust|leg press|pressa|bulgar|nordic|calf|hamstring|glute|trap bar|good morning|pistol|clean|snatch|jump|salt/i;
  function tipoSeduta(s){
    if(!s)return null;if(s.type==='corsa'||s.type==='sprint')return 'corsa';
    if(s.type!=='pesi')return null;
    const nomi=Object.values(s.exercises||{}).filter(e=>e&&!/^Prevenzione/.test(e.cue||'')).map(e=>e.name||'');
    const g=nomi.filter(n=>GAMBE.test(n)).length;return g>=2||g/Math.max(1,nomi.length)>=0.4?'gambe':'alta';
  }
  /* Le schede seguono le sedute del programma: "Pre-corsa" per corse e sprint, poi una per
     ogni tipo di seduta di forza, col suo nome (Forza corsa A, Forza corsa B, Gambe...).
     La bozza di ognuna dipende da cosa c'e' nella seduta (gambe o parte alta); con due tipi
     di gambe il rinforzo si divide fra la prima e la seconda. */
  function nomeBase(n){return String(n||'Seduta').replace(/\s*\((?:MD[-+]\d|[^)]*)\)\s*$/,'').replace(/\s+\d+$/,'').trim();}
  function chiave(n){return 'f_'+nomeBase(n).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40);}
  function schede(p){
    const W=Object.entries(p&&p.weeks||{}).sort((a,b)=>(a[1].order||0)-(b[1].order||0)),out=[],visti={};let corsa=false;
    W.forEach(([,w])=>Object.values(w&&w.sessions||{}).sort((a,b)=>((a.dayOfWeek??9)-(b.dayOfWeek??9))||((a.order||0)-(b.order||0))).forEach(x=>{
      if(!x||/^Test|^Controllo/i.test(x.name||''))return;const t=tipoSeduta(x);if(!t)return;
      if(t==='corsa'){corsa=true;return;}const k=chiave(x.name);if(visti[k])return;visti[k]=1;out.push({k,nome:nomeBase(x.name),cl:t});}));
    let ng=0;out.forEach(o=>{o.base=o.cl==='gambe'?(ng++%2===1?'gambeB':'gambeA'):'alta';});
    return (corsa?[{k:'corsa',nome:'Pre-corsa',base:'corsa'}]:[]).concat(out);
  }
  function bozzaDi(p,sc){const b=bozza(sc.base,p&&p.intake||{});return Object.assign(b,{tipo:sc.k,nome:sc.nome});}
  // la scheda di una seduta del programma: quella salvata dal preparatore o la bozza
  function carta(p,wi,sid){
    const W=Object.entries(p&&p.weeks||{}).sort((a,b)=>(a[1].order||0)-(b[1].order||0)),w=W[+wi];if(!w)return null;
    const s=(w[1].sessions||{})[sid],t=tipoSeduta(s);if(!t)return null;
    const k=t==='corsa'?'corsa':chiave(s.name),sc=schede(p).find(x=>x.k===k)||{k,nome:t==='corsa'?'Pre-corsa':nomeBase(s.name),base:t==='corsa'?'corsa':t==='gambe'?'gambeA':'alta'};
    const sal=p.prehab&&p.prehab[k];
    if(sal&&sal.es)return Object.assign({tipo:k,nome:sc.nome},sal,{es:Array.isArray(sal.es)?sal.es:Object.values(sal.es)});
    return bozzaDi(p,sc);
  }
  return {CAT,TIPI,bozza,bozzaDi,schede,chiave,nomeBase,minuti,testo,daTesto,tipoSeduta,carta,zoneDi};
})();

/* RSMuscoli: di ogni esercizio il gruppo muscolare (con i secondari a mezza serie), l'attrezzo,
   lo schema di movimento e se e' monopodalico; colori per gruppo (petto rosso, gambe blu,
   schiena verde, come i fogli di carta), serie a settimana per gruppo, esercizi simili per
   Sostituisci e una scala per Progredisci / Regredisci. Il nome basta: italiano o inglese. */
window.RSMuscoli=(function(){
  const GR={
    petto:{n:'Petto',c:'#F87171'},schiena:{n:'Schiena',c:'#4ADE80'},spalle:{n:'Spalle',c:'#FBBF24'},braccia:{n:'Braccia',c:'#F472B6'},
    gambe:{n:'Quadricipiti',c:'#60A5FA'},glutei:{n:'Glutei',c:'#A78BFA'},femorali:{n:'Femorali',c:'#2DD4BF'},polpacci:{n:'Polpacci',c:'#67E8F9'},
    core:{n:'Core',c:'#A8A29E'},esplosivo:{n:'Esplosivo',c:'#FB923C'}
  };
  const ORD=['petto','schiena','spalle','braccia','gambe','glutei','femorali','polpacci','core','esplosivo'];
  // [regola sul nome, gruppo, secondari, schema]; la prima che combacia vince
  const R=[
    [/clean|snatch|jerk|girata|strappo|slancio|swing|med ?ball|lancio|slam|throw|toss/,'esplosivo',{},'olimpico'],
    [/jump|salt|hop|bound|balz|pogo|pliom|drop|hurdle|ostacol|skip|corda/,'esplosivo',{},'pliometria'],
    [/copenhagen|adduct|addutt/,'gambe',{core:.5},'isolamento'],
    [/abduct|abdutt|band walk|lateral walk|clam|monster walk/,'glutei',{},'isolamento'],
    [/heel raise|calf|polpacc|soleo|tibial/,'polpacci',{},'isolamento'],
    [/hip t(h)?rust|glute bridge|bridge|ponte|kick ?back|kick rear|slancio dietro|pull through/,'glutei',{femorali:.5},'hinge'],
    [/nordic|hamstring|leg curl|curl femorali|ghr|glute ham/,'femorali',{},'hinge'],
    [/back extension|hyperext|iperest|reverse hyper|good morning/,'femorali',{glutei:.5,schiena:.5},'hinge'],
    [/\brdl\b|romanian|rumen|stiff|single leg deadlift|stacc.*gamba/,'femorali',{glutei:.5},'hinge'],
    [/deadlift|stacc|trap bar squat/,'glutei',{femorali:.5,gambe:.5,schiena:.5},'hinge'],
    [/leg extension|estension.*gamb|wall sit|sissy|spanish/,'gambe',{},'isolamento'],
    [/split|bulgar|rfess|lunge|affond|step ?up|step down|pistol|single leg (box )?squat|kickstand|skater/,'gambe',{glutei:.5},'affondo'],
    [/squat|leg press|pressa|hack|pendulum|belt squat/,'gambe',{glutei:.5},'squat'],
    [/pull ?-?over|braccia tese|straight arm/,'schiena',{},'tirata_vert'],
    [/pull ?-?up|\bchin|trazion|lat ?machine|pulldown|lat pull|iliac/,'schiena',{braccia:.5},'tirata_vert'],
    [/face pull|rear delt|reverse fly|posterior|alzate posteriori|croci inverse|\bt\b \(palms|banded t/,'spalle',{schiena:.5},'isolamento'],
    [/row|rematore|pulley|low row|t-bar|inverted|australian|gorilla/,'schiena',{braccia:.5},'tirata_orizz'],
    [/shrug|scrollat/,'schiena',{},'isolamento'],
    [/lateral raise|alzate laterali|alzate frontali|alzate anteriori|front raise|scaption|\by\b su panca|alzate/,'spalle',{},'isolamento'],
    [/plank|dead ?bug|pallof|crunch|core|addomin|bird ?dog|rollout|ab wheel|carry|farmer|side bend|hollow|leg raise|russian|twist|landmine rotation|anti-?rot|v-?up|cervical|cervic|barchetta|superman/,'core',{},'core'],
    [/external rotation|internal rotation|\ber\b|\bir\b|rotation|rotazion|cuffia|shoulder(?! press)|spall(?!.*press)/,'spalle',{},'isolamento'],
    [/military|overhead press|strict press|shoulder press|lento|arnold|push press|landmine press|handstand|seated dumbbell press|sopra la testa(?!.*corda)/,'spalle',{braccia:.5},'spinta_vert'],
    [/curl|bicip|hammer|martello/,'braccia',{},'isolamento'],
    [/tricep|tricip|pushdown|french|skull|kick ?back|estension.*cavo|distensioni sopra la testa/,'braccia',{},'isolamento'],
    [/fly|croci|pec deck|pectoral/,'petto',{spalle:.5},'isolamento'],
    [/wrist|polso|forearm|avambracc|dead hang|radial|pronation|supination/,'braccia',{},'isolamento'],
    [/dip/,'petto',{braccia:.5,spalle:.5},'spinta_orizz'],
    [/bench|panca|chest press|push ?-?up|piegament|floor press|press/,'petto',{braccia:.5,spalle:.5},'spinta_orizz'],
  ];
  const ATT=[['trap bar',/trap bar|esagonale/],['multipower',/smith|multipower/],['cavi',/cable|cavo|cavi|rope|corda|pulley|pushdown|face pull|lat ?machine|pulldown|low row|iliac/],
    ['manubri',/dumbbell|manubri|manubrio|\bdb\b|goblet|arnold|concentration|hammer|martello|spider/],['kettlebell',/kettlebell|\bkb\b/],
    ['bilanciere',/barbell|bilanciere|\bbb\b|ez\b|zercher|good morning|back squat|front squat|high bar|low bar|panca piana|military press|strict press|push press|rematore bilanciere|stacco da terra|hip thrust bilanciere|clean|snatch|jerk|t-bar|landmine|^(?!.*(single|singol|\bsl\b)).*(deadlift|\brdl\b|romanian)/],
    ['macchina',/machine|macchina|leg press|pressa|pendulum|hack|chest press|pec deck|pectoral|leg extension|leg curl|seated hamstring|abduction|adduction|hip abduction|seated row|chest supported machine|assisted/],
    ['elastico',/band|elastic|banded/],['corpo libero',/bodyweight|corpo libero|push ?-?up|pull ?-?up|chin ?-?up|trazioni|dip|plank|dead bug|bird dog|nordic|bridge|ponte|inverted|australian|pistol|wall sit|copenhagen|step ?up|lunge|affondi|split squat$|bulgarian split squat$|squat bulgaro$|dead hang|handstand|pogo|jump|hop|salto|bound|balz/],
    ['palla medica',/med ?ball/],['trx',/trx/]];
  const MONO=/single|one arm|singol|\bsl\b|unilater|split|bulgar|rfess|lunge|affond|step ?up|step down|pistol|kickstand|un braccio|una gamba|monopod|alternat|copenhagen|side plank|lateral lunge|skater|landmine press/;
  const cache={};
  const norm=n=>String(n||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').trim();
  function info(nome){
    const n=norm(nome);if(!n)return null;if(cache[n])return cache[n];
    const r=R.find(x=>x[0].test(n));
    const at=(ATT.find(a=>a[1].test(n))||[''])[0];
    const o=r?{g:r[1],s:r[2],sc:r[3]}:{g:'',s:{},sc:'altro'};
    o.att=at;o.mono=MONO.test(n)&&!/double leg|bilater|due gambe/.test(n);o.n=nome;
    // livello per la scala: dall'attrezzo, con i ritocchi (box e assistito piu' facili, deficit e fermo piu' duri)
    const base={'elastico':1,'trx':1.5,'corpo libero':/pull ?-?up|chin|trazion|dip|nordic|handstand|pistol/.test(n)?4:1.5,'kettlebell':2,'macchina':2,'cavi':2.2,'multipower':2.6,'manubri':3,'trap bar':3.5,'bilanciere':4,'palla medica':2}[at]||2.5;
    o.liv=o.g==='esplosivo'?base:base+(/box|assist|supported|hand supported|incline push|hands elevated|band|iso/.test(n)?-0.7:0)+(/deficit|pause|fermo|tempo|ecc|weighted|zavorr|front|zercher|overhead/.test(n)?0.6:0)+(o.mono&&/gambe|glutei|femorali/.test(o.g)?0.8:0);
    cache[n]=o;return o;
  }
  // serie per gruppo: il principale conta la serie intera, i secondari mezza; la prevenzione non conta
  function serie(esercizi){
    const t={};(esercizi||[]).forEach(e=>{if(!e||/^Prevenzione/.test(e.cue||''))return;const x=info(e.name);if(!x||!x.g)return;const k=parseFloat(String(e.sets||'').replace(',','.'))||0;if(!k)return;
      t[x.g]=(t[x.g]||0)+k;Object.entries(x.s||{}).forEach(([g,f])=>{t[g]=(t[g]||0)+k*f;});});
    return t;
  }
  // fasce delle serie a settimana per gruppo (Schoenfeld 2017, Pelland 2024): ipertrofia 10-20,
  // forza e mantenimento meno; sotto 4 si mantiene e basta
  function fascia(ob){return /estetica|ipertrof|pesi/.test(ob||'')?[10,20]:/forza/.test(ob||'')?[6,15]:[4,12];}
  // parole del movimento, senza attrezzo: "Smith Machine RFESS" e "RFESS" sono lo stesso esercizio
  const VUOTE=/^(dumbbell|dumbbells|barbell|smith|machine|cable|cavo|cavi|manubri|manubrio|bilanciere|multipower|kettlebell|kb|db|bb|band|banded|elastico|con|su|da|di|the|with|alla|al|in|e|a|weighted|zavorrato|seated|seduto|standing)$/;
  const parole=n=>new Set(norm(n).replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(w=>w&&!VUOTE.test(w)));
  const somi=(a,b)=>{const A=parole(a),B=parole(b);let c=0;A.forEach(w=>{if(B.has(w))c++;});return c/Math.max(1,Math.min(A.size,B.size));};
  // simili: stesso schema e stesso gruppo; prima lo stesso movimento con un altro attrezzo, poi i piu' vicini di difficolta'
  function simili(nome,lista){
    const a=info(nome);if(!a||!a.g)return [];
    const ns=[...new Set((lista||[]).filter(Boolean))].filter(x=>norm(x)!==norm(nome));
    return ns.map(x=>({x,i:info(x),k:somi(nome,x)})).filter(o=>o.i&&o.i.g===a.g&&o.i.sc===a.sc).sort((p,q)=>q.k-p.k||(p.i.mono===a.mono?0:1)-(q.i.mono===a.mono?0:1)||Math.abs(p.i.liv-a.liv)-Math.abs(q.i.liv-a.liv)).map(o=>o.x);
  }
  // un gradino piu' duro (d=1) o piu' facile (d=-1) nello stesso schema e gruppo, il piu' vicino come movimento
  function gradino(nome,lista,d){
    const a=info(nome);if(!a||!a.g)return null;
    const c=simili(nome,lista).map(x=>({x,i:info(x),k:somi(nome,x)})).filter(o=>d>0?o.i.liv>a.liv+0.05:o.i.liv<a.liv-0.05)
      .sort((p,q)=>(q.i.mono===a.mono)-(p.i.mono===a.mono)||(q.i.att?1:0)-(p.i.att?1:0)||Math.round((q.k-p.k)*2)-0||(d>0?p.i.liv-q.i.liv:q.i.liv-p.i.liv));
    return (c[0]||{}).x||null;
  }
  /* scrivere per intenzione, come si parla in sala: "schiena tirata orizzontale", "petto inclinato",
     "gambe mono", "gambe macchina", "accessori polpacci", "flessori mono", "gluteo pesante",
     "spalle laterali cavi", "esplosivo gambe". Ogni parola deve far parte del vocabolario: se ce n'e'
     una sconosciuta ("Back squat con fermo") e' un nome scritto a mano e resta com'e'. */
  const V_GR=[[/^(schiena|dorso|dorsali|dorsale|lat|tirata|tirate)$/,'schiena'],[/^(petto|pettorali|pettorale|panca)$/,'petto'],[/^(gambe|gamba|quad|quadricipiti|quadricipite|quadri)$/,'gambe'],
    [/^(glutei|gluteo|glute|gluteus)$/,'glutei'],[/^(flessori|flessore|femorali|femorale|ischio|ischiocrurali|hamstring|posteriori)$/,'femorali'],[/^(polpacci|polpaccio|soleo|calf|gastrocnemio)$/,'polpacci'],
    [/^(spalle|spalla|deltoidi|deltoide|deltoids)$/,'spalle'],[/^(braccia|braccio)$/,'braccia'],[/^(bicipiti|bicipite|bicipite)$/,'bicipiti'],[/^(tricipiti|tricipite)$/,'tricipiti'],
    [/^(core|addome|addominali|addominale|abs)$/,'core'],[/^(adduttori|adduttore|inguine)$/,'adduttori'],[/^(abduttori|abduttore|medio|medi)$/,'abduttori'],[/^(tibiale|tibiali)$/,'tibiale'],[/^(avambracci|avambraccio|presa|grip)$/,'avambracci']];
  const V_SC=[[/^(orizzontale|orizzontali|rematore|rematori|row)$/,'orizz'],[/^(verticale|verticali|trazioni|trazione|pulldown)$/,'vert'],[/^(inclinato|inclinata|inclinate|alta|alto|incline)$/,'incl'],
    [/^(declinato|declinata|bassa|basso)$/,'decl'],[/^(piana|piano|piatta)$/,'piana'],[/^(laterali|laterale|alzate)$/,'lat'],[/^(posteriore|rear)$/,'post'],[/^(frontale|frontali|anteriore|anteriori)$/,'front'],
    [/^(spinta|press|distensioni)$/,'spinta'],[/^(squat|accosciata)$/,'squat'],[/^(stacco|stacchi|hinge|anca)$/,'hinge'],[/^(affondi|affondo|split|bulgaro|bulgarian|lunge)$/,'affondo'],[/^(estensioni|estensione|extension)$/,'ext'],
    [/^(curl)$/,'curl'],[/^(croci|fly|aperture)$/,'fly'],[/^(antirotazione|rotazione|anti)$/,'antirot'],[/^(plank)$/,'plank']];
  const V_ATT=[[/^(macchina|macchinario|machine|guidato|guidata)$/,'macchina'],[/^(cavi|cavo|cable|corda)$/,'cavi'],[/^(manubri|manubrio|dumbbell|db)$/,'manubri'],[/^(bilanciere|barbell|bb)$/,'bilanciere'],
    [/^(multipower|smith)$/,'multipower'],[/^(kettlebell|kb)$/,'kettlebell'],[/^(elastico|elastici|band)$/,'elastico'],[/^(trap|esagonale)$/,'trap bar'],[/^(libero|bodyweight)$/,'corpo libero']];
  const V_MOD=/^(mono|monopodalico|monopodalica|unilaterale|singolo|singola|single|pesante|pesanti|heavy|forza|leggero|leggera|volume|pump|accessori|accessorio|complementare|complementari|isolamento|esplosivo|esplosiva|esplosivi|potenza|salti|isometrico|isometrica|iso|eccentrico|eccentrica|funzionale|corsa|runner|meno|invasivo|invasiva|seduto|seduta|in|piedi|corpo|bar|per|di|con|da|la|il|lo|le|i|gli|e|a|al|alla|su|una|un|gamba|braccio|presa|stretta|larga|neutra|inversa|neutro)$/;
  // gli esercizi di riferimento, nell'ordine in cui li scegliamo se tutto il resto e' pari
  const BASE={
    'schiena|orizz':['Chest Supported Dumbbell Row','Seated Row (Narrow Grip)','Barbell Bent Over Row','DB Row','Chest Supported Machine Row','Low Row'],
    'schiena|vert':['Pull Up','Lat Pulldown','Chin Up','Close Grip Lat Pulldown','Assisted Pull Up (Machine)','Half Kneeling Single Arm Lat Pulldown'],
    'schiena|':['Pull Up','Chest Supported Dumbbell Row','Lat Pulldown','Seated Row (Narrow Grip)'],
    'petto|incl':['Incline Dumbbell Bench Press','Incline Barbell Bench Press','Incline Chest Press Machine','Smith Machine Incline Press'],
    'petto|decl':['Panca Declinata Multipower','Dip Petto Avanti','Weighted Dip'],
    'petto|fly':['Chest Fly Machine','Croci Cavi Alti','Dumbbell Neutral Grip Fly','Pec Deck'],
    'petto|':['Barbell Bench Press','Dumbbell Bench Press','Machine Chest Press','Push Up'],
    'gambe|squat':['High Bar Back Squat','Barbell Front Squat','Hack Squat','Leg Press','Dumbbell Goblet Squat'],
    'gambe|affondo':['Bulgarian Split Squat','Dumbbell Split Squat','Reverse Lunge','Step Up','Smith Machine Split Squat'],
    'gambe|ext':['Leg Extension Machine','Single Leg Extension'],
    'gambe|':['High Bar Back Squat','Leg Press','Bulgarian Split Squat','Hack Squat','Leg Extension Machine'],
    'femorali|hinge':['Barbell RDL','Dumbbell RDL','Single Leg RDL','Good Morning'],
    'femorali|curl':['Seated Hamstring Curl Machine','Single Leg Seated Hamstring Curl','Prone Hamstring Curl','Nordic Hamstring Curl','Hamstring Curl Sliders Eccentric'],
    'femorali|':['Barbell RDL','Seated Hamstring Curl Machine','Nordic Hamstring Curl','Single Leg RDL'],
    'glutei|':['Barbell Hip Thrust','Smith Machine Hip Thrust','Single Leg Hip Thrust','Hip Abduction Machine','Glute Bridge'],
    'polpacci|':['Single Leg Heel Raise','Seated Heel Raise','Smith Machine Deficit Heel Raise','Leg Press Heel Raise','Heel Raise'],
    'spalle|lat':['Dumbbell Lateral Raise','Alzate Laterali Cavi','Lateral Raise Band (90°)'],
    'spalle|post':['Rope Face Pull (ER)','Chest Supported Rear Delt Fly','Alzate Posteriori Cavi'],
    'spalle|front':['Dumbbell Front Raise'],
    'spalle|':['Seated Dumbbell Press','Strict Press','Shoulder Press Machine','Landmine Press'],
    'bicipiti|':['Dumbbell Curl','Cable Curl','Hammer Curl','Barbell Curl','Incline Bicep Curl'],
    'tricipiti|':['Rope Cable Tricep Pushdown','Overhead Cable Tricep Extension','Dumbbell Skull Crusher','Dip su Panca'],
    'braccia|':['Dumbbell Curl','Rope Cable Tricep Pushdown'],
    'core|antirot':['Pallof Press','Dead Bug','Bird dog'],
    'core|plank':['Plank','Side Plank'],
    'core|':['Pallof Press','Dead Bug','Side Plank','Rollout Ab Wheel'],
    'adduttori|':['Copenhagen Plank','Hip Adduction Machine','Short Copenhagen Plank'],
    'abduttori|':['Hip Abduction Machine','Lateral Band Walk','Side Plank'],
    'tibiale|':['Tibialis Raise'],
    'avambracci|':['Dead Hang','Weighted Wrist Flexion','Farmer Carry']
  };
  const ESPL=[[/alta|petto|spinta|braccia|spalle/,'Med Ball Chest Pass','4','5'],[/tirata|schiena/,'Med Ball Overhead Slam','4','5'],[/orizz|lungo|broad|hinge|anca/,'Broad Jump','4','3'],[/reattiv|pogo|caviglia|polpacc/,'Pogo Hop','3','10'],[/mono|una gamba|single/,'Single Leg Box Jump','3','3 per lato'],[/./,'Countermovement Jump','4','4']];
  function intento(testo,lista,ob){
    const t=norm(testo);if(!t)return null;
    const L=lista||[];
    if(L.some(x=>norm(x)===t))return null;
    const w=t.replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(Boolean);if(!w.length||w.length>8)return null;
    let g='',sc='',att='',ignoti=0;const has=r=>w.some(x=>r.test(x));
    w.forEach(x=>{const a=V_GR.find(([r])=>r.test(x)),b=V_SC.find(([r])=>r.test(x)),c=V_ATT.find(([r])=>r.test(x));
      if(a){if(!g||g==='schiena'&&a[1]!=='schiena'||a[1]==='abduttori')g=a[1];}else if(b){if(!sc)sc=b[1];}else if(c){att=c[1];}else if(!V_MOD.test(x)&&!/^\d+$/.test(x))ignoti++;});
    if(ignoti)return null;
    const mono=has(/^(mono|monopodalic[oa]|unilaterale|singol[oa]|single)$/)||/una gamba|un braccio/.test(t),pes=has(/^(pesant[ei]|heavy|forza)$/),legg=has(/^(legger[oa]|volume|pump)$/);
    const acc=has(/^(accessori|accessorio|complementar[ei]|isolamento)$/),iso=has(/^(isometric[oa]|iso)$/),ecc=has(/^eccentric[oa]$/),fun=has(/^(funzionale|corsa|runner)$/),soft=has(/^(meno|invasiv[oa])$/);
    if(has(/^(esplosiv[oa]|esplosivi|potenza|salti)$/)){const e=ESPL.find(x=>x[0].test(t));return {name:e[1],sets:e[2],reps:e[3],rest:'2\'',cue:'massima velocita\', recupero pieno'};}
    if(!g){if(sc==='orizz'||sc==='vert')g='schiena';else if(sc==='squat'||sc==='affondo'||sc==='ext')g='gambe';else if(sc==='hinge')g='femorali';else return null;}
    if(g==='schiena'&&!sc&&has(/^tirat[ae]$/))sc='';
    if(g==='femorali'&&!sc)sc=acc?'curl':'';
    if(g==='gambe'&&!sc&&(mono||fun))sc='affondo';
    if(g==='gambe'&&!sc&&acc)sc='ext';
    if(g==='petto'&&sc==='spinta')sc='';
    // dalla lista: stesso gruppo, poi i filtri uno alla volta finche' resta qualcosa
    const GRI={bicipiti:'braccia',tricipiti:'braccia',adduttori:'gambe',abduttori:'glutei',tibiale:'polpacci',avambracci:'braccia'}[g]||g;
    let C=[...new Set(L)].map(n=>({n,i:info(n)})).filter(o=>o.i&&o.i.g===GRI);
    const filtra=f=>{const r=C.filter(f);if(r.length)C=r;};
    const nm=o=>norm(o.n);
    if(g==='bicipiti')filtra(o=>/curl|bicip|hammer|martello/.test(nm(o)));
    if(g==='tricipiti')filtra(o=>/tricip|pushdown|french|skull|dip|extension|estension/.test(nm(o)));
    if(g==='adduttori')filtra(o=>/copenhagen|adduct|addutt/.test(nm(o)));
    if(g==='abduttori')filtra(o=>/abduct|abdutt|band walk|lateral walk|clam/.test(nm(o)));
    if(g==='avambracci')filtra(o=>/wrist|polso|hang|carry|grip|avambr/.test(nm(o)));
    const SCH={orizz:'tirata_orizz',vert:g==='spalle'?'spinta_vert':'tirata_vert',squat:'squat',affondo:'affondo',hinge:'hinge'}[sc];
    if(SCH)filtra(o=>o.i.sc===SCH);
    if(sc==='incl')filtra(o=>/inclin|incline/.test(nm(o))&&!/fly|croci/.test(nm(o)));
    if(sc==='decl')filtra(o=>/declin|dip/.test(nm(o)));
    if(sc==='piana')filtra(o=>!/inclin|incline|declin/.test(nm(o))&&o.i.sc==='spinta_orizz');
    if(sc==='fly')filtra(o=>/fly|croci|pec deck|pectoral/.test(nm(o)));
    if(sc==='lat')filtra(o=>/lateral|laterali|scaption/.test(nm(o)));
    if(sc==='post')filtra(o=>/face pull|rear|reverse fly|posterior/.test(nm(o)));
    if(sc==='front')filtra(o=>/front raise|frontal|anterior/.test(nm(o)));
    if(sc==='ext')filtra(o=>/extension|estension/.test(nm(o)));
    if(sc==='curl')filtra(o=>/curl/.test(nm(o)));
    if(sc==='antirot')filtra(o=>/pallof|dead ?bug|bird|anti/.test(nm(o)));
    if(sc==='plank')filtra(o=>/plank/.test(nm(o)));
    if(acc&&!sc)filtra(o=>o.i.sc==='isolamento'||o.i.att==='macchina'||o.i.att==='cavi');
    if(iso)filtra(o=>/isometric|iso\b|wall sit|plank|hold/.test(nm(o)));
    if(ecc)filtra(o=>/nordic|eccentric|ecc\b/.test(nm(o)));
    if(att)filtra(o=>o.i.att===att||(att==='macchina'&&o.i.att==='cavi'));
    else if(soft)filtra(o=>['macchina','cavi','manubri','multipower','corpo libero','elastico'].includes(o.i.att));
    const sed=has(/^sedut[oa]$/);if(sed)filtra(o=>/seated|sedut/.test(nm(o)));
    if(mono)filtra(o=>o.i.mono);else if(!['polpacci','adduttori','abduttori','core'].includes(g))filtra(o=>!o.i.mono);
    // classifica: prima i riferimenti della scheda, poi il livello giusto per l'intenzione
    const pref=BASE[g+'|'+sc]||BASE[g+'|']||[],pi=n=>{const k=pref.findIndex(x=>norm(x)===norm(n));return k<0?99:k;};
    const voluto=pes?4:legg||acc?2.2:soft?2.4:3;
    C.sort((a,b)=>pi(a.n)-pi(b.n)||Math.abs(a.i.liv-voluto)-Math.abs(b.i.liv-voluto)||a.n.length-b.n.length);
    if(!C.length)return null;
    const name=C[0].n,x=info(name),per=x.mono?' per lato':'';
    const isol=acc||x.sc==='isolamento'||['polpacci','bicipiti','tricipiti','braccia','abduttori','avambracci'].includes(g)||sc==='lat'||sc==='post'||sc==='fly'||sc==='ext'||sc==='curl';
    let d;
    if(iso)d={sets:'3',reps:'30-45"'+per,rest:'60"',cue:'isometria: spingi forte e tieni'};
    else if(/copenhagen|plank|wall sit/.test(norm(name)))d={sets:'3',reps:'20-30"'+per,rest:'60"'};
    else if(g==='core'||x.sc==='core')d={sets:'3',reps:/plank/.test(norm(name))?'30-45"'+per:'8-10'+per,rest:'60"'};
    else if(ecc)d={sets:'3',reps:'4-6'+per,rest:'2\'',cue:'eccentrica lenta 3-4"'};
    else if(isol)d={sets:'3',reps:(legg||g==='polpacci'?'12-15':'10-12')+per,rpe:'8',rest:'60-75"'};
    else if(pes)d={sets:'4',reps:(x.mono?'5-6':'4-6')+per,pct:x.mono||x.att!=='bilanciere'?null:'82,5',rpe:x.mono||x.att!=='bilanciere'?'8':null,rest:'2\'30"'};
    else if(legg)d={sets:'3',reps:'10-12'+per,rpe:'8',rest:'90"'};
    else if(fun)d={sets:'3',reps:'6-8'+per,rpe:'8',rest:'2\''};
    else d={sets:'3',reps:(/forza/.test(ob||'')?'5-6':'8-10')+per,rpe:'8',rest:'2\''};
    if(att&&x.att!==att)d.cue=(d.cue?d.cue+', ':'')+'con '+att;
    Object.keys(d).forEach(k=>{if(d[k]==null)delete d[k];});
    return Object.assign({name},d);
  }
  return {GR,ORD,info,serie,fascia,simili,gradino,norm,intento};
})();

/* Logo RS Coaching (provvisorio, dato dall'utente il 12/10): la sigla RS su fondo trasparente,
   la scritta COACHING si scrive sotto col testo, nel colore del contesto. Usato da sito,
   app atleta e PDF: .rs-img prende l'immagine da --rs-logo. */
window.RS_LOGO='data:image/png;base64,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';
(function(){
  try{document.documentElement.style.setProperty('--rs-logo','url("'+window.RS_LOGO+'")');}catch(e){}
  const css='.rs-img{display:block;background:var(--rs-logo) center/contain no-repeat;width:42px;height:34px;flex-shrink:0;filter:none!important}'
    +'.rs-logo.rs-v2{display:inline-flex;flex-direction:column;align-items:center;gap:3px}'
    +'.rs-logo.rs-v2 .rs-word{font:500 8px/1 Montserrat,Inter,sans-serif!important;letter-spacing:.42em!important;padding-left:.42em;color:var(--rs-coach,#F4F1EC)!important}'
    +'.rs-logo.rs-v2 .rs-word b,.rs-logo.rs-v2 .rs-word span{color:inherit!important;font:inherit!important}'
    +'.rs-logo.rs-v2.lg .rs-img{width:96px;height:78px}.rs-logo.rs-v2.lg .rs-word{font-size:13px!important}'
    +'.rs-logo.rs-v2.sm .rs-img{width:30px;height:24px}';
  const add=()=>{if(document.getElementById('rs-logo-css'))return;const st=document.createElement('style');st.id='rs-logo-css';st.textContent=css;(document.head||document.documentElement).appendChild(st);};
  if(document.head)add();else document.addEventListener('DOMContentLoaded',add);
})();
