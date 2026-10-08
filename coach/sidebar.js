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
  <div class="rs-logo sm">
    <svg class="rs-mark" viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect width="36" height="36" rx="10" fill="url(#rsGsbM)"/><rect x="9" y="20" width="4.2" height="7" rx="2.1" fill="#fff" opacity=".55"/><rect x="15.9" y="15" width="4.2" height="12" rx="2.1" fill="#fff" opacity=".8"/><rect x="22.8" y="9" width="4.2" height="18" rx="2.1" fill="#fff"/><defs><linearGradient id="rsGsbM" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#FF8A4D"/><stop offset="1" stop-color="#E2611C"/></linearGradient></defs></svg>
    <div class="rs-word"><b>RS</b><span>COACHING</span></div>
  </div>
</div>
<div class="sb-mob-overlay" id="sb-mob-ov"></div>
<div class="sidebar" id="sb-sidebar">
  <div class="sb-top">
    <div class="rs-logo">
      <svg class="rs-mark" viewBox="0 0 36 36" fill="none" aria-hidden="true"><rect width="36" height="36" rx="10" fill="url(#rsGsb)"/><rect x="9" y="20" width="4.2" height="7" rx="2.1" fill="#fff" opacity=".55"/><rect x="15.9" y="15" width="4.2" height="12" rx="2.1" fill="#fff" opacity=".8"/><rect x="22.8" y="9" width="4.2" height="18" rx="2.1" fill="#fff"/><defs><linearGradient id="rsGsb" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#FF8A4D"/><stop offset="1" stop-color="#E2611C"/></linearGradient></defs></svg>
      <div class="rs-word"><b>RS</b><span>COACHING</span></div>
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
    <a class="nav-item" aria-label="Planner Settimanale" href="./planner.html" data-page="planner">
      <span class="nav-icon">${window.rsIcon('planner')}</span><span class="nav-lbl-text">Planner Settimanale</span>
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
    const L=Object.entries(tempi||{}).map(([id,x])=>Object.assign({id},x)).filter(x=>x&&x.sec>0);
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
  function rgProgramma(p,R){
    const I=p&&p.intake||{};const D=+I.garaDist;
    if(I.obiettivo==='gara'&&D&&sec(I.garaTempo))return Math.round(sec(I.garaTempo)/(DIST[String(D)]||D*1000)*1000);
    if(p&&p.ritmi&&p.ritmi.RGfisso&&p.ritmi.RG)return p.ritmi.RG;
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
    opz=opz||{};const vecchi=opz.vecchi||(p&&p.ritmi)||null;const rg=rgProgramma(p,R);
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
  function istantanea(R,rg,fisso){const o={};['E','M','T','I','R'].forEach(c=>{if(R&&R[c])o[c]=R[c];});if(rg)o.RG=rg;if(fisso)o.RGfisso=true;if(R&&R.vdot)o.vdot=R.vdot;o.ts=Date.now();return o;}
  // passo di una fase per l'app atleta: se la fase ha un codice e l'atleta ha i suoi ritmi, i suoi
  function passoFase(f,R,campo){const v=f&&f.rit&&f.rit!=='RG'&&R?R[f.rit]:null;return v?testo(v):(f?f[campo]||'':'');}
  return {DIST,DNOME,CODICI,NOMI,DESC,sec,passo,tempo,metri,distNome,vdot,previsto,daVdot,vdotDaSoglia,calcola,zoneFc,valore,testo,rgProgramma,codice,codiceDaPasso,codiceFase,daTesto,etichetta,ricalcola,istantanea,passoFase,dataTs};
})();
