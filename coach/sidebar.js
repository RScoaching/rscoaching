// RS.Coaching — Shared Sidebar · Premium Glass Design
window.SIDEBAR_HTML = `
<div class="sb-mob-bar" id="sb-mob-bar">
  <button class="sb-ham" id="sb-ham-btn" aria-label="Apri menu">&#9776;</button>
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
    <div class="logo-sub">Strength &amp; Conditioning</div>
  </div>
  <div class="nav-s">
    <div class="nav-lbl">Overview</div>
    <a class="nav-item" aria-label="Dashboard" href="./index.html" data-page="dashboard">
      <span class="nav-icon">⊞</span><span class="nav-lbl-text">Dashboard</span>
    </a>
    <a class="nav-item" aria-label="Atleti" href="./index.html?goto=athletes" data-page="athletes">
      <span class="nav-icon">◎</span><span class="nav-lbl-text">Atleti</span>
    </a>
    <a class="nav-item" aria-label="Gruppi" href="./index.html?goto=groups" data-page="groups">
      <span class="nav-icon">◈</span><span class="nav-lbl-text">Gruppi</span>
    </a>
    <a class="nav-item" aria-label="Analytics" href="./index.html?goto=analytics" data-page="analytics">
      <span class="nav-icon">📊</span><span class="nav-lbl-text">Analytics</span>
    </a>
    <div class="nav-lbl">Programmazione</div>
    <a class="nav-item" aria-label="Program Builder" href="./builder.html" data-page="builder">
      <span class="nav-icon">🔨</span><span class="nav-lbl-text">Program Builder</span>
    </a>
    <a class="nav-item" aria-label="Planner Settimanale" href="./planner.html" data-page="planner">
      <span class="nav-icon">📅</span><span class="nav-lbl-text">Planner Settimanale</span>
    </a>
    <div class="nav-lbl">Comunicazione</div>
    <a class="nav-item" aria-label="Chat" href="./index.html?goto=chat-global" data-page="chat">
      <span class="nav-icon">💬</span><span class="nav-lbl-text">Chat</span>
    </a>
    <div class="nav-lbl">Risorse</div>
    <a class="nav-item" aria-label="Database Esercizi" href="./index.html?goto=database" data-page="database">
      <span class="nav-icon">🗄</span><span class="nav-lbl-text">Database Esercizi</span>
    </a>
    <a class="nav-item" aria-label="Strumenti S&C" href="./index.html?goto=tools" data-page="tools">
      <span class="nav-icon">🧮</span><span class="nav-lbl-text">Strumenti S&amp;C</span>
    </a>
    <a class="nav-item" aria-label="Tutte le sedute" href="./index.html?goto=sessions" data-page="sessions">
      <span class="nav-icon">≡</span><span class="nav-lbl-text">Tutte le sedute</span>
    </a>
  </div>
  <div class="sb-foot">
    <strong>Raoul Simon</strong>Preparatore Atletico
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
  background:rgba(20,16,23,.90);
  backdrop-filter:blur(28px) saturate(1.6);
  -webkit-backdrop-filter:blur(28px) saturate(1.6);
  border-right:1px solid rgba(255,255,255,.06);
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
.rs-mark{flex-shrink:0;width:30px;height:30px;filter:drop-shadow(0 3px 10px rgba(255,106,46,.40));}
.rs-word{font-family:'Bebas Neue',sans-serif;line-height:1;letter-spacing:1.5px;font-size:19px;white-space:nowrap;}
.rs-word b{font-weight:400;color:#FF6A2E;}
.rs-word span{font-weight:400;color:#F4F1EC;}
.rs-logo.sm{gap:8px;}
.rs-logo.sm .rs-mark{width:26px;height:26px;}
.rs-logo.sm .rs-word{font-size:16px;letter-spacing:1px;}
.logo-sub{
  font-size:9px;color:rgba(244,241,236,.30);
  letter-spacing:2px;margin-top:6px;text-transform:uppercase;
}
.nav-s{padding:10px 8px 0;flex:1;}
.nav-lbl{
  font-size:9px;font-weight:700;text-transform:uppercase;
  letter-spacing:2px;color:rgba(248,250,255,.16);
  padding:0 8px 4px;margin-top:16px;
}
.nav-item{
  display:flex;align-items:center;gap:9px;
  padding:9px 10px;font-size:12.5px;font-weight:500;
  color:rgba(248,250,255,.36);
  cursor:pointer;border-radius:10px;margin-bottom:2px;
  border-left:2px solid transparent;
  text-decoration:none;
  transition:all .2s cubic-bezier(.4,0,.2,1);
}
.nav-item:hover{
  color:rgba(248,250,255,.78);
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
.nav-icon{font-size:14px;opacity:.55;flex-shrink:0;transition:opacity .2s;}
.nav-item.active .nav-icon,.nav-item:hover .nav-icon{opacity:1;}
.sb-foot{
  padding:12px 18px;
  border-top:1px solid rgba(255,255,255,.05);
  font-size:10px;color:rgba(248,250,255,.18);line-height:1.7;flex-shrink:0;
}
.sb-foot strong{color:rgba(248,250,255,.34);display:block;font-size:11px;font-weight:600;}
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
