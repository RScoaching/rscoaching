// RS.Coaching — Shared Sidebar · Premium Glass Design
window.SIDEBAR_HTML = `
<div class="sb-mob-bar" id="sb-mob-bar">
  <button class="sb-ham" id="sb-ham-btn" aria-label="Apri menu">&#9776;</button>
  <div class="sb-mob-logo" style="display:flex;align-items:center;gap:8px;">
    <div style="width:26px;height:26px;background:#FF6830;border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 2px 8px rgba(255,104,48,.4);">
      <span style="font-family:'Bebas Neue',sans-serif;font-size:13px;color:#fff;letter-spacing:1px;line-height:1;">RS</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:0px;justify-content:center;">
      <span style="font-family:'Bebas Neue',sans-serif;font-size:10px;color:#8B5CF6;letter-spacing:3px;line-height:1.1;">RS</span>
      <span style="font-size:6.5px;font-weight:700;color:rgba(248,250,255,.35);letter-spacing:2.5px;text-transform:uppercase;line-height:1.2;">COACHING</span>
    </div>
  </div>
</div>
<div class="sb-mob-overlay" id="sb-mob-ov"></div>
<div class="sidebar" id="sb-sidebar">
  <div class="sb-top">
    <div class="logo" style="display:flex;align-items:center;gap:9px;font-size:unset;letter-spacing:unset;filter:none;">
      <div style="width:32px;height:32px;background:#FF6830;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 3px 12px rgba(255,104,48,.4);">
        <span style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:#fff;letter-spacing:1px;line-height:1;">RS</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:1px;justify-content:center;">
        <span style="font-family:'Bebas Neue',sans-serif;font-size:12px;color:#8B5CF6;letter-spacing:3.5px;line-height:1.1;">RS</span>
        <span style="font-size:7px;font-weight:700;color:rgba(248,250,255,.28);letter-spacing:2.5px;text-transform:uppercase;line-height:1.2;">COACHING</span>
      </div>
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
  background:rgba(8,6,18,.88);
  backdrop-filter:blur(28px) saturate(1.8);
  -webkit-backdrop-filter:blur(28px) saturate(1.8);
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
.logo{
  font-family:'Bebas Neue',sans-serif;
  font-size:26px;letter-spacing:4px;
  color:#F8FAFF;
  filter:drop-shadow(0 0 18px rgba(255,90,31,.25));
}
.logo span{
  background:linear-gradient(135deg,#8B5CF6,#6D28D9);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-clip:text;
}
.logo-sub{
  font-size:9px;color:rgba(248,250,255,.20);
  letter-spacing:2px;margin-top:4px;text-transform:uppercase;
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
  background:linear-gradient(90deg,rgba(139,92,246,.15),rgba(139,92,246,.04));
  border-left-color:#8B5CF6;
  font-weight:600;
  box-shadow:inset 0 0 0 1px rgba(255,90,31,.12);
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
  background:rgba(8,6,18,.95);backdrop-filter:blur(20px);
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
