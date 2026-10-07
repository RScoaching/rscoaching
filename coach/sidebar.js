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
  background:#0B0A0D;
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
  font-size:11px;font-weight:500;color:rgba(248,250,255,.32);
  padding:0 8px 4px;margin-top:18px;
}
.nav-item{
  display:flex;align-items:center;gap:9px;
  padding:9px 10px;font-size:13px;font-weight:500;
  color:rgba(248,250,255,.55);
  cursor:pointer;border-radius:8px;margin-bottom:2px;
  text-decoration:none;
  transition:color .15s ease,background .15s ease;
}
.nav-item:hover{
  color:rgba(248,250,255,.78);
  background:rgba(255,255,255,.05);
}
.nav-item.active{
  color:#fff;
  background:rgba(255,255,255,.07);
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
