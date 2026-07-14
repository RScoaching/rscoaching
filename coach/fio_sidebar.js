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
<div class="sidebar" id="sb-sidebar">
  <div class="sb-top">
    <div class="fio-brand">
      <img class="fio-crest" src="./fiorentina.png" alt="Stemma Fiorentina"
        onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'fio-crest fio-crest-fb',textContent:'ACF'}))">
      <div class="fio-word">FIORENTINA</div>
    </div>
    <div class="logo-sub">Primavera U19 Femminile</div>
  </div>
  <div class="nav-s">
    <div class="nav-lbl">Monitoraggio</div>
    <a class="nav-item" aria-label="Carico" href="./carico.html" data-page="carico">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg></span>
      <span class="nav-lbl-text">Carico</span>
    </a>
    <div class="nav-lbl">Squadra</div>
    <a class="nav-item" aria-label="Atlete" href="./atlete.html" data-page="atlete">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3.2"/><path d="M15 6.2a3 3 0 0 1 0 5.6"/><path d="M4 20c0-3.3 2.2-5.6 5-5.6s5 2.3 5 5.6"/><path d="M17 14.6c1.9.6 3 2.6 3 5.4"/></svg></span>
      <span class="nav-lbl-text">Atlete</span>
    </a>
    <div class="nav-lbl">Programmazione</div>
    <a class="nav-item" aria-label="Esercitazioni" href="./esercitazioni.html" data-page="esercitazioni">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4v-.8A1.2 1.2 0 0 1 10.2 2h3.6A1.2 1.2 0 0 1 15 3.2V4"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h4"/></svg></span>
      <span class="nav-lbl-text">Esercitazioni</span>
    </a>
    <span class="nav-item soon" aria-disabled="true" data-page="forza">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9v6"/><path d="M6 7v10"/><path d="M18 7v10"/><path d="M21 9v6"/><path d="M6 12h12"/></svg></span>
      <span class="nav-lbl-text">Forza</span><span class="soon-pill">presto</span>
    </span>
    <span class="nav-item soon" aria-disabled="true" data-page="calendario">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M4 10h16"/></svg></span>
      <span class="nav-lbl-text">Calendario</span><span class="soon-pill">presto</span>
    </span>
    <div class="nav-lbl">Output</div>
    <span class="nav-item soon" aria-disabled="true" data-page="report">
      <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg></span>
      <span class="nav-lbl-text">Report</span><span class="soon-pill">presto</span>
    </span>
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
    if (el.dataset.page === pageId && !el.classList.contains('soon')) el.classList.add('active');
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
  font-size:9px;color:rgba(244,241,236,.34);
  letter-spacing:1.6px;margin-top:8px;text-transform:uppercase;
}
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
  #sb-sidebar{display:flex !important;transform:none !important;}
}`;
