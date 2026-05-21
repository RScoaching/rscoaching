// Shared sidebar HTML — injected into all coach pages
window.SIDEBAR_HTML = `
<div class="sidebar">
  <div class="sb-top">
    <div class="logo">RS<span>.</span>Coaching</div>
    <div class="logo-sub">Preparazione Atletica</div>
  </div>
  <div class="nav-s">
    <div class="nav-lbl">Principale</div>
    <a class="nav-item" href="/coach/" data-page="dashboard">
      <span class="nav-icon">⊞</span><span>Dashboard</span>
    </a>
    <a class="nav-item" href="/coach/" data-page="athletes">
      <span class="nav-icon">◎</span><span>Atleti</span>
    </a>
    <a class="nav-item" href="/coach/" data-page="groups">
      <span class="nav-icon">◈</span><span>Gruppi</span>
    </a>
    <a class="nav-item" href="/coach/" data-page="analytics">
      <span class="nav-icon">📊</span><span>Analytics</span>
    </a>

    <div class="nav-lbl" style="margin-top:12px;">Programmazione</div>
    <a class="nav-item" href="/coach/builder.html" data-page="builder">
      <span class="nav-icon">🔨</span><span>Program Builder</span>
    </a>
    <a class="nav-item" href="/coach/planner.html" data-page="planner">
      <span class="nav-icon">📅</span><span>Planner Settimanale</span>
    </a>
    <a class="nav-item" href="/coach/piani.html" data-page="piani">
      <span class="nav-icon">📨</span><span>Piani Rapidi</span>
    </a>

    <div class="nav-lbl" style="margin-top:12px;">Database</div>
    <a class="nav-item" href="/coach/" data-page="database">
      <span class="nav-icon">🗄</span><span>Esercizi</span>
    </a>
    <a class="nav-item" href="/coach/" data-page="tools">
      <span class="nav-icon">🧮</span><span>Strumenti S&amp;C</span>
    </a>

    <div class="nav-lbl" style="margin-top:12px;">Sedute</div>
    <a class="nav-item" href="/coach/" data-page="sessions">
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

// Shared sidebar CSS
window.SIDEBAR_CSS = `
.sidebar{width:230px;background:var(--sb);border-right:1px solid var(--sbb);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;flex-shrink:0;box-shadow:4px 0 20px rgba(0,0,0,.4);overflow-y:auto;}
.sb-top{padding:24px 22px 16px;border-bottom:1px solid var(--sbb);background:linear-gradient(180deg,#060910,var(--sb));flex-shrink:0;}
.logo{font-family:'Bebas Neue',sans-serif;font-size:24px;letter-spacing:3px;color:var(--white);}
.logo span{color:var(--teal);}
.logo-sub{font-size:10px;color:rgba(255,255,255,.2);letter-spacing:.8px;margin-top:2px;}
.nav-s{padding:14px 12px 0;flex:1;}
.nav-lbl{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,.18);padding:0 8px 6px;}
.nav-item{display:flex;align-items:center;gap:9px;padding:9px 10px;font-size:13px;font-weight:500;color:rgba(255,255,255,.4);cursor:pointer;border-radius:8px;margin-bottom:1px;border-left:2px solid transparent;text-decoration:none;transition:all .15s;}
.nav-item:hover{color:rgba(255,255,255,.78);background:rgba(255,255,255,.04);}
.nav-item.active{color:var(--white);background:rgba(6,214,160,.08);border-left-color:var(--teal);}
.nav-icon{font-size:15px;opacity:.7;flex-shrink:0;}
.nav-item.active .nav-icon{opacity:1;}
.sb-foot{padding:14px 22px;border-top:1px solid var(--sbb);font-size:11px;color:rgba(255,255,255,.18);line-height:1.5;flex-shrink:0;}
.sb-foot strong{color:rgba(255,255,255,.32);display:block;font-size:12px;}`;
