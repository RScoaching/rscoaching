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
  function rgProgramma(p,R){
    const I=p&&p.intake||{};const D=+I.garaDist;
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
  function target(f,campo,R){
    const fa=fascia(passoDi(f,campo,R));
    if(fa)return {tipo:'pace',lo:fa[0],hi:fa[1]};
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
  function passi(s,R){
    const out=[];const arr=Array.isArray(s&&s.corsaFasi)?s.corsaFasi:Object.values(s&&s.corsaFasi||{});
    arr.forEach(f=>{
      if(!f)return;
      const nome=String(f.tipo||'Corsa').slice(0,30),note=[f.zona,f.note].filter(Boolean).join(' - ');
      const intv=f.reps||f.repDist||f.repPace;
      if(!intv){
        out.push({kind:'step',nome,note,intens:intens(f.tipo),dur:durata(f.dist)||{tipo:'open'},target:target(f,'pace',R)});
        return;
      }
      const n=Math.max(1,parseInt(f.reps,10)||1),ser=Math.max(1,parseInt(f.serie,10)||1);
      const tg=target(f,'repPace',R),rec=recupero(f),pz=pezzi(f.repDist);
      const lavoro=pz?pz.map((d,i)=>({kind:'step',nome:nome+' '+(i+1),note,intens:'active',dur:d,target:tg})):[{kind:'step',nome,note,intens:'active',dur:durata(f.repDist)||{tipo:'open'},target:tg}];
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
    let m=0,s=0;inFila(P).forEach(x=>{const pc=x.target&&x.target.tipo==='pace'?(x.target.lo+x.target.hi)/2:(x.intens==='rest'?900:x.intens==='recovery'?420:360);
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
    const P=passi(s,R),pr=stima(P),fila=inFila(P);
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
    const fila=inFila(passi(s,R)).filter(x=>x.dur.tipo!=='open'||x.intens==='active');
    if(B.length!==fila.length)return {blocchi:B,giri:[],centrati:null};
    const giri=B.map((b,i)=>{const x=fila[i],t=x.target;let e='';
      if(t&&t.tipo==='pace')e=b.passo>t.lo+3?'lento':b.passo<t.hi-3?'veloce':'ok';
      return {nome:x.nome,intens:x.intens,bersaglio:tgTxt(t),m:b.m,s:b.s,passo:b.passo,fc:b.fc,esito:e};});
    const q=giri.filter(g=>g.intens==='active'&&g.esito);
    return {blocchi:B,giri,centrati:q.length?{ok:q.filter(g=>g.esito==='ok').length,n:q.length}:null};
  }
  return {durata,passi,inFila,stima,righe,durTxt,tgTxt,fitWorkout,icu,jsonPassi,zip,scarica,nomeFile,giorno,iso,crc16,leggiFit,leggiGpx,leggiFile,confronta,blocchi,confrontaGiri};
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
      te:+a.aerobicTE||null,teA:+a.anaerobicTE||null,kcal:+a.kcal||null,traccia:a.traccia?id:null,laps:Array.isArray(a.laps)?a.laps:(a.laps&&typeof a.laps==='object'?Object.values(a.laps):null)};
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
        out[k]=Object.assign({},l,{gmId:a.id,gmFonte:a.fonti.join('+')},a.traccia?{gmTraccia:a.traccia}:{},(!l.corsa&&corsa)?{corsa}:{},(!(+l.duration)&&a.sec)?{duration:Math.round(a.sec/60)}:{},(!(+l.avgRpe)&&a.rpe)?{avgRpe:a.rpe}:{});
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
        avgRpe:a.rpe||null,source:'orologio',gm:true,gmId:a.id,gmFonte:a.fonti.join('+'),gmTipo:a.tipo},a.traccia?{gmTraccia:a.traccia}:{},
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
.trk2-tg button{font:600 11.5px Inter,sans-serif;padding:5px 10px;border-radius:999px;border:1px solid var(--bd);background:transparent;color:var(--mu);cursor:pointer}.trk2-tg button.on{background:var(--tx);border-color:var(--tx);color:var(--bg)}
.trk2-sel{display:none;flex-wrap:wrap;align-items:center;gap:4px 16px;padding:8px 12px;font-size:12.5px;color:var(--tx);background:var(--sel);border-bottom:1px solid var(--bd)}.trk2-sel.on{display:flex}.trk2-sel b{font-variant-numeric:tabular-nums}.trk2-sel span i{font-style:normal;color:var(--mu);margin-right:4px}
.trk2-sel button{margin-left:auto;font:600 12px Inter,sans-serif;padding:5px 12px;border-radius:999px;border:0;background:#FF6A2E;color:#fff;cursor:pointer}
.trk2-tl{position:relative;cursor:crosshair;touch-action:pan-y;user-select:none;-webkit-user-select:none}.trk2-tl canvas{display:block;width:100%}
.trk2-gi{display:flex;flex-wrap:wrap;gap:6px;padding:10px 12px;border-top:1px solid var(--bd)}.trk2-gi:empty{display:none}
.trk2-gi button{font:500 11.5px Inter,sans-serif;padding:5px 9px;border-radius:9px;border:1px solid var(--bd);background:var(--pan);color:var(--tx);cursor:pointer;font-variant-numeric:tabular-nums}.trk2-gi button.lav{border-color:rgba(255,106,46,.45)}.trk2-gi button b{color:var(--c-passo)}
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

  function mostra(el,tr,opz){
    stili();opz=opz||{};
    const n=(tr.t||[]).length;if(n<3){el.innerHTML='<p style="color:#8E8678">Traccia vuota.</p>';return;}
    const T=tr.t,D=tr.d||T.map(()=>null),P=passi(tr.v),FC=tr.fc||null,CAD=tr.cad||null,Q=tr.q||null;
    // cadenza: valori interi e a scalini, liscia su 5 punti (fermo = vuoto)
    const CADs=CAD?CAD.map((x,i)=>{if(!x||x<100)return null;const w=[CAD[i-2],CAD[i-1],x,CAD[i+1],CAD[i+2]].filter(y=>y&&y>=100);return w.reduce((t,y)=>t+y,0)/w.length;}):null;
    const lanes=[{k:'passo',lbl:'Passo /km',d:P,inv:true,fmt:mmss,h:96}].concat(FC?[{k:'fc',lbl:'FC',d:FC,h:86,zone:true}]:[],CAD?[{k:'cad',lbl:'Cadenza',d:CADs,h:64}]:[],Q?[{k:'q',lbl:'Quota',d:Q,h:56,area:true}]:[]);
    const haMappa=tr.lat&&tr.lat.some(x=>x!=null);
    // tratti dai giri dell'orologio (per passo dell'allenamento o cambio di ritmo), posati sulla traccia per distanza
    let tratti=[];
    if(opz.giri&&window.RSOrologio&&D[n-1]){let acc=0;const B=window.RSOrologio.blocchi(opz.giri);const med=quant(B.map(b=>b.passo),0.5);
      tratti=B.map((b,k)=>{const a=acc;acc+=b.m;const i0=D.findIndex(x=>x!=null&&x>=a),i1=D.findIndex(x=>x!=null&&x>=acc);return {k,i0:Math.max(0,i0),i1:i1<0?n-1:i1,m:b.m,s:b.s,passo:b.passo,fc:b.fc,lav:B.length>1&&b.passo<med-5};}).filter(x=>x.i1>x.i0);}
    let T0=tema(),AX=asse(),v0=0,v1=n-1,cur=null,drag=null,map=null,mk=null,lineSel=null,lineAll=null;
    el.innerHTML=`<div class="trk2 ${T0}">
      <div class="trk2-bar"></div><div class="trk2-sel"></div>
      <div class="trk2-tl"><canvas></canvas></div>
      <div class="trk2-gi"></div>
      ${haMappa?'<div class="trk2-map"></div>':''}
      <div class="trk2-aiuto">Passa sopra per i valori del punto. Trascina per scegliere un tratto e zoomare, doppio clic per tornare a tutta la corsa.</div></div>`;
    const box=el.querySelector('.trk2'),bar=box.querySelector('.trk2-bar'),selBox=box.querySelector('.trk2-sel'),wrap=box.querySelector('.trk2-tl'),cv=wrap.querySelector('canvas'),giBox=box.querySelector('.trk2-gi');
    function colori(){const C=TEMI[T0];box.className='trk2 '+T0;['bg','pan','tx','mu','bd','sel'].forEach(k=>box.style.setProperty('--'+k,C[k]));box.style.background=C.bg;['passo','fc','cad'].forEach(k=>box.style.setProperty('--c-'+k,C[k]));}
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
        +(Q?cel('','Quota',(tot?Math.round(med(Q)||0):(Q[i]!=null?Math.round(Q[i]):'-'))+' m'):'')
        +`<div class="trk2-tg"><button type="button" data-ax="km" class="${AX==='km'?'on':''}">Km</button><button type="button" data-ax="tempo" class="${AX==='tempo'?'on':''}">Tempo</button><button type="button" data-te="${T0==='chiaro'?'scuro':'chiaro'}">${T0==='chiaro'?'Scuro':'Chiaro'}</button></div>`;
    }
    bar.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
      if(b.dataset.ax){AX=b.dataset.ax;try{localStorage.setItem('rs_trk_asse',AX);}catch(x){}}
      if(b.dataset.te){T0=b.dataset.te;try{localStorage.setItem('rs_trk_tema',T0);}catch(x){}colori();tessere();}
      valori(cur);disegna();});
    // statistiche del tratto selezionato
    function selezione(){
      if(v0===0&&v1===n-1){selBox.classList.remove('on');selBox.innerHTML='';return;}
      const dur=T[v1]-T[v0],dist=(D[v1]||0)-(D[v0]||0);let fs=0,fc=0,fm=0,cs=0,cc=0,gain=0;
      for(let k=v0;k<=v1;k++){if(FC&&FC[k]){fs+=FC[k];fc++;fm=Math.max(fm,FC[k]);}if(CAD&&CAD[k]){cs+=CAD[k];cc++;}if(Q&&k>v0&&Q[k]!=null&&Q[k-1]!=null&&Q[k]>Q[k-1])gain+=Q[k]-Q[k-1];}
      const s=(l,v)=>`<span><i>${l}</i><b>${v}</b></span>`;
      selBox.innerHTML=s('Tratto',hms(dur))+s('Distanza',kmTxt(dist)+' km')+s('Passo',dist>0?mmss(dur/(dist/1000))+' /km':'-')+(fc?s('FC media',Math.round(fs/fc))+s('max',fm):'')+(cc?s('Cadenza',Math.round(cs/cc)):'')+(Q?s('Salita',Math.round(gain)+' m'):'')+'<button type="button">Tutta la corsa</button>';
      selBox.classList.add('on');selBox.querySelector('button').onclick=()=>zoom(0,n-1);
    }
    // disegno della linea temporale
    const PAD={l:8,r:44,t:6,b:22},GAP=8;
    function disegna(){
      const C=TEMI[T0],dpr=window.devicePixelRatio||1,W=wrap.clientWidth||600,H=PAD.t+lanes.reduce((t,l)=>t+l.h+GAP,0)+PAD.b;
      cv.width=W*dpr;cv.height=H*dpr;cv.style.height=H+'px';const g=cv.getContext('2d');g.setTransform(dpr,0,0,dpr,0,0);
      g.fillStyle=C.bg;g.fillRect(0,0,W,H);
      const x0=X(v0),x1=X(v1),pw=W-PAD.l-PAD.r,sx=v=>PAD.l+(x1>x0?(v-x0)/(x1-x0):0)*pw;
      // fasce dei tratti di lavoro, su tutte le corsie
      tratti.filter(t=>t.lav&&t.i1>=v0&&t.i0<=v1).forEach(t=>{const a=sx(X(Math.max(t.i0,v0))),b=sx(X(Math.min(t.i1,v1)));g.fillStyle=C.fasc;g.fillRect(a,PAD.t,b-a,H-PAD.t-PAD.b);});
      let y=PAD.t;
      lanes.forEach(L=>{
        L.y=y;
        const vis=L.d.slice(v0,v1+1),lo0=quant(vis,0.02),hi0=quant(vis,0.98);
        let lo=lo0,hi=hi0;if(lo==null){y+=L.h+GAP;return;}if(hi-lo<1){lo-=1;hi+=1;}const pad=(hi-lo)*0.12;lo-=pad;hi+=pad;L.lo=lo;L.hi=hi;
        const sy=v=>L.inv?y+(v-lo)/(hi-lo)*L.h:y+L.h-(v-lo)/(hi-lo)*L.h;L.sy=sy;
        // zone FC sotto la curva
        if(L.zone&&opz.zone&&Array.isArray(opz.zone.z)){const z=opz.zone.z;for(let k=0;k<5;k++){const a=z[k],b=z[k+1]||999;const ya=Math.max(y,Math.min(y+L.h,sy(b))),yb=Math.max(y,Math.min(y+L.h,sy(a)));if(yb>ya){g.fillStyle=C.zone[k];g.fillRect(PAD.l,ya,pw,yb-ya);}}}
        // griglia e scala a destra
        g.strokeStyle=C.gr;g.lineWidth=1;g.fillStyle=C.mu;g.font='10px Inter, sans-serif';g.textAlign='left';
        for(let k=0;k<=2;k++){const v=lo+(hi-lo)*(0.15+k*0.35),yy=Math.round(sy(v))+.5;g.beginPath();g.moveTo(PAD.l,yy);g.lineTo(W-PAD.r,yy);g.stroke();g.fillText(L.fmt?L.fmt(v):String(Math.round(v)),W-PAD.r+5,yy+3);}
        g.fillStyle=C.mu;g.font='600 10.5px Inter, sans-serif';g.fillText(L.lbl,PAD.l+4,y+11);
        // la curva: un punto per pixel (il minimo o massimo del pixel), cosi' resta liscia e veloce
        g.save();g.beginPath();g.rect(PAD.l,y,pw,L.h);g.clip();
        g.strokeStyle=C[L.k];g.fillStyle=C[L.k];g.lineWidth=1.6;g.lineJoin='round';
        if(L.punti){for(let i=v0;i<=v1;i++){const v=L.d[i];if(v==null)continue;g.fillRect(sx(X(i))-1,sy(v)-1,2,2);}}
        else{g.beginPath();let su=false;for(let i=v0;i<=v1;i++){const v=L.d[i];if(v==null){su=false;continue;}const px=sx(X(i)),py=sy(v);if(!su){g.moveTo(px,py);su=true;}else g.lineTo(px,py);}g.stroke();
          if(L.area){g.lineTo(sx(X(v1)),y+L.h);g.lineTo(sx(X(v0)),y+L.h);g.closePath();g.globalAlpha=.25;g.fill();g.globalAlpha=1;}}
        g.restore();
        y+=L.h+GAP;
      });
      // asse in basso: km o tempo
      g.fillStyle=C.mu;g.font='10px Inter, sans-serif';g.textAlign='center';
      const span=x1-x0,step=AX==='tempo'?[60,120,300,600,900,1200,1800,3600].find(s=>span/s<=8)||3600:[100,200,500,1000,2000,5000,10000].find(s=>span/s<=8)||10000;
      for(let v=Math.ceil(x0/step)*step;v<=x1;v+=step){const px=sx(v);g.fillText(AX==='tempo'?(v>=3600?hms(v).slice(0,-3):Math.round(v/60)+'\''):String(v/1000).replace('.',',')+(step<1000?'':' km'),px,H-6);}
      // selezione in corso
      if(drag&&drag.b!=null){const a=Math.min(drag.a,drag.b),b=Math.max(drag.a,drag.b);g.fillStyle=C.sel;g.fillRect(a,PAD.t,b-a,H-PAD.t-PAD.b);}
      // cursore su tutte le corsie
      if(cur!=null&&cur>=v0&&cur<=v1){const px=Math.round(sx(X(cur)))+.5;g.strokeStyle=C.cur;g.globalAlpha=.55;g.lineWidth=1;g.beginPath();g.moveTo(px,PAD.t);g.lineTo(px,H-PAD.b);g.stroke();g.globalAlpha=1;
        lanes.forEach(L=>{const v=L.d[cur];if(v==null||!L.sy)return;g.fillStyle=C.bg;g.strokeStyle=C[L.k];g.lineWidth=2;g.beginPath();g.arc(px,L.sy(v),3.5,0,7);g.fill();g.stroke();});}
      cv._sx=sx;cv._W=W;
    }
    // da pixel a indice (ricerca sul valore dell'asse)
    function idx(px){const x0=X(v0),x1=X(v1),pw=(cv._W||600)-PAD.l-PAD.r,val=x0+Math.max(0,Math.min(1,(px-PAD.l)/pw))*(x1-x0);let lo=v0,hi=v1;while(hi-lo>1){const m=(lo+hi)>>1;if(X(m)<val)lo=m;else hi=m;}return Math.abs(X(lo)-val)<=Math.abs(X(hi)-val)?lo:hi;}
    function cursore(i){cur=i;valori(i);disegna();if(mk&&i!=null&&tr.lat[i]!=null)mk.setLatLng([tr.lat[i],tr.lon[i]]);}
    function zoom(a,b){v0=Math.max(0,Math.min(a,b));v1=Math.min(n-1,Math.max(a,b));if(v1-v0<3){v0=0;v1=n-1;}cur=null;valori(null);selezione();disegna();mappaSel();}
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
    giBox.innerHTML=tratti.length>1?tratti.map(t=>`<button type="button" data-k="${t.k}" class="${t.lav?'lav':''}">${t.k+1} &#183; ${kmTxt(t.m)} km &#183; <b>${mmss(t.passo)}</b>${t.fc?' &#183; '+t.fc:''}</button>`).join(''):'';
    giBox.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const t=tratti[+b.dataset.k];if(t)zoom(t.i0,t.i1);});
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
    valori(null);disegna();
    if(window.ResizeObserver){new ResizeObserver(()=>disegna()).observe(wrap);}
    return {zoom,ridisegna:disegna};
  }
  return {mostra,carica};
})();
