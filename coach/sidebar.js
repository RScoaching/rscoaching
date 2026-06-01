// Shared sidebar HTML — injected into all coach pages
window.SIDEBAR_HTML = `
<div class="sidebar">
  <div class="sb-top">
    <div class="logo">RS<span>.</span>Coaching</div>
    <div class="logo-sub">Preparazione Atletica</div>
  </div>
  <div class="nav-s">
    <div class="nav-lbl">Principale</div>
    <a class="nav-item" href="./index.html" data-page="dashboard">
      <span class="nav-icon">⊞</span><span>Dashboard</span>
    </a>
    <a class="nav-item" href="./index.html?goto=athletes" data-page="athletes">
      <span class="nav-icon">◎</span><span>Atleti</span>
    </a>
    <a class="nav-item" href="./index.html?goto=groups" data-page="groups">
      <span class="nav-icon">◈</span><span>Gruppi</span>
    </a>
    <a class="nav-item" href="./index.html?goto=analytics" data-page="analytics">
      <span class="nav-icon">📊</span><span>Analytics</span>
    </a>

    <div class="nav-lbl" style="margin-top:14px;">Programmazione</div>
    <a class="nav-item" href="./builder.html" data-page="builder">
      <span class="nav-icon">🔨</span><span>Program Builder</span>
    </a>
    <a class="nav-item" href="./planner.html" data-page="planner">
      <span class="nav-icon">📅</span><span>Planner Settimanale</span>
    </a>

    <div class="nav-lbl" style="margin-top:14px;">Database</div>
    <a class="nav-item" href="./index.html?goto=database" data-page="database">
      <span class="nav-icon">🗄</span><span>Esercizi</span>
    </a>
    <a class="nav-item" href="./index.html?goto=tools" data-page="tools">
      <span class="nav-icon">🧮</span><span>Strumenti S&amp;C</span>
    </a>

    <div class="nav-lbl" style="margin-top:14px;">Storico</div>
    <a class="nav-item" href="./index.html?goto=sessions" data-page="sessions">
      <span class="nav-icon">≡</span><span>Tutte le sedute</span>
    </a>
  </div>
  <div class="sb-foot">
    <strong>Raoul Simon</strong>Preparatore Atletico
  </div>
</div>`;

// Mark active nav item based on current page
window.markActiveNav = function(pageId) {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.remove('active');
    if (el.dataset.page === pageId) el.classList.add('active');
  });
};

// Shared sidebar CSS — Slate Dark (Figma/Linear style)
window.SIDEBAR_CSS = `
.sidebar{
  width:220px;
  background:#161B25;
  border-right:1px solid rgba(255,255,255,0.06);
  display:flex;flex-direction:column;
  position:sticky;top:0;height:100vh;
  flex-shrink:0;overflow-y:auto;
  z-index:10;
}
.sb-top{
  padding:22px 18px 16px;
  border-bottom:1px solid rgba(255,255,255,0.06);
  flex-shrink:0;
}
.logo{
  font-family:'Bebas Neue',sans-serif;
  font-size:24px;letter-spacing:3px;
  color:#E2E8F0;
}
.logo span{color:#FF6830;}
.logo-sub{
  font-size:9px;
  color:rgba(226,232,240,.20);
  letter-spacing:1.8px;
  margin-top:3px;
  text-transform:uppercase;
}
.nav-s{padding:10px 8px 0;flex:1;}
.nav-lbl{
  font-size:9px;font-weight:700;
  text-transform:uppercase;
  letter-spacing:2px;
  color:rgba(226,232,240,.18);
  padding:0 8px 4px;
}
.nav-item{
  display:flex;align-items:center;gap:9px;
  padding:8px 10px;
  font-size:12.5px;font-weight:500;
  color:rgba(226,232,240,.40);
  cursor:pointer;border-radius:8px;
  margin-bottom:1px;
  border-left:2px solid transparent;
  text-decoration:none;
  transition:all .14s;
  letter-spacing:.1px;
}
.nav-item:hover{
  color:rgba(226,232,240,.80);
  background:rgba(255,255,255,.05);
}
.nav-item.active{
  color:#E2E8F0;
  background:rgba(99,102,241,.14);
  border-left-color:#6366F1;
  font-weight:600;
}
.nav-icon{font-size:14px;opacity:.6;flex-shrink:0;}
.nav-item.active .nav-icon{opacity:1;}
.sb-foot{
  padding:12px 18px;
  border-top:1px solid rgba(255,255,255,.06);
  font-size:10px;
  color:rgba(226,232,240,.20);
  line-height:1.6;
  flex-shrink:0;
}
.sb-foot strong{
  color:rgba(226,232,240,.35);
  display:block;
  font-size:11px;
  font-weight:600;
}`;
