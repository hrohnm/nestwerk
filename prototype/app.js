// Nestwerk – Klick-Prototyp (POC)
// Ablauf: Heute → Navigation starten → Ankunft melden → Besuch dokumentieren → Unterschrift → zurück zu Heute mit nächstem Besuch.

(function () {
  const D = window.NW_DATA;

  // ---------- Icons (Lucide-Stil, Strich 1,75) ----------
  const P = {
    heute: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    betreute: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    kalender: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    praxis: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    nav: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    checkc: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="m9.5 14 2 2 3.5-3.5"/>',
    cloudup: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M12 17v-5M9.5 14.5 12 12l2.5 2.5"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    car: '<path d="M19 17h2v-4l-2-5H5l-2 5v4h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M9 17h6M3 13h18"/>',
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
    flag: '<path d="M4 22V4a1 1 0 0 1 1-1h12l-2 4 2 4H5"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    swap: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    baby: '<circle cx="12" cy="8" r="5"/><path d="M10 8h.01M14 8h.01M10.5 10.5c.8.6 2.2.6 3 0M5 21a7 7 0 0 1 14 0"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    drop: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z"/>',
    note: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
    reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    tablet: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 16h.01"/>',
    face: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  };
  const ic = (name, cls = "") => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[name] || ""}</svg>`;

  // ---------- Helfer ----------
  const fmtG = (g) => g.toLocaleString("de-DE") + "";
  const fmt1 = (n) => n.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const fmtNum = (n, d) => n.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d });
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const addMin = (hhmm, m) => {
    const [h, mm] = hhmm.split(":").map(Number);
    const t = h * 60 + mm + m;
    return String(Math.floor(t / 60)).padStart(2, "0") + ":" + String(t % 60).padStart(2, "0");
  };
  const visitById = (id) => D.visits.find((v) => v.id === id);

  // ---------- Zustand ----------
  const initial = () => ({
    screen: "heute",           // heute | besuch | placeholder
    nav: "heute",
    overlay: null,             // navsheet | menu | handover | sign | lock
    selected: null,
    status: Object.fromEntries(D.visits.map((v) => [v.id, "open"])), // open | driving | arrived | done
    durations: {},
    doc: null,
    sync: "ok",
    handover: Object.fromEntries(D.handovers.map((h) => [h.id, "open"])), // open | accepted | asked
    toast: null,
    clock: "08:30",
  });
  let S = initial();
  let theme = localGet("nw-theme") || "light";
  let toastTimer = null, syncTimer = null;

  function localGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function localSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* egal */ } }

  const nextVisit = () => D.visits.find((v) => S.status[v.id] !== "done");
  const shownVisit = () => (S.selected && visitById(S.selected)) || nextVisit();
  const openHandovers = () => D.handovers.filter((h) => S.handover[h.id] === "open").length;

  function toast(text, icon = "checkc") {
    S.toast = { text, icon };
    clearTimeout(toastTimer);
    // Nur den Toast entfernen – kein komplettes Neuzeichnen (würde z. B. eine laufende Unterschrift löschen)
    toastTimer = setTimeout(() => { S.toast = null; document.querySelectorAll(".toast").forEach((t) => t.remove()); }, 3600);
  }
  function syncPending() {
    S.sync = "pending";
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => { S.sync = "ok"; document.querySelectorAll(".sync").forEach((el) => { el.outerHTML = syncChip(); }); }, 2500);
  }

  // ---------- Rahmen ----------
  function sidebar() {
    const items = [["heute", "Heute"], ["route", "Route"], ["betreute", "Betreute"], ["kalender", "Kalender"], ["praxis", "Praxis"]];
    const badge = D.tasks.reduce((a, t) => a + t.n, 0);
    return `<nav class="sidebar" aria-label="Hauptnavigation">
      <img class="logo" src="assets/logo.png" alt="Praxislogo">
      ${items.map(([k, l]) => `<button class="nav-item ${S.nav === k ? "on" : ""}" data-act="nav" data-k="${k}" aria-current="${S.nav === k ? "page" : "false"}">
        ${ic(k)}<span>${l}</span>${k === "heute" ? `<span class="badge">${badge}</span>` : ""}</button>`).join("")}
      <div class="grow"></div>
    </nav>`;
  }

  function syncChip() {
    return S.sync === "ok"
      ? `<span class="sync" role="status">${ic("cloud", "sm")} Alles gesichert</span>`
      : `<span class="sync pending" role="status">${ic("cloudup", "sm")} Wartet (1)</span>`;
  }

  function topbar(title, sub) {
    return `<header class="topbar">
      <div><h1>${title}</h1>${sub ? `<div class="date">${sub}</div>` : ""}</div>
      <div class="spacer"></div>
      ${syncChip()}
      <button class="avatar-btn" data-act="menu" aria-label="Angemeldet als ${D.me.name}">
        <span class="who"><b>${D.me.name}</b><small>Hebamme</small></span>
        <span class="avatar">${D.me.initials}</span>
      </button>
    </header>`;
  }

  // ---------- Heute ----------
  function chipFor(h) {
    const icon = h.level === "caution" ? ic("alert", "xs") : h.level === "accent" ? ic("award", "xs") : "";
    return `<span class="chip ${h.level}">${icon}${esc(h.text)}</span>`;
  }

  function timeline() {
    const nv = nextVisit();
    const shown = shownVisit();
    let html = `<li class="stop endpoint">
        <span class="t num">${D.start.time}</span><span class="dot">${ic("home")}</span>
        <span class="body"><span class="ttl">${D.start.title}</span><span class="sub">${D.start.place}</span></span></li>`;
    D.visits.forEach((v) => {
      const st = S.status[v.id];
      html += `<li class="drive"><span></span><span class="line"></span><span>${ic("car", "xs")} ${v.driveBefore} min</span></li>`;
      const cls = [st === "done" ? "done" : "", nv && nv.id === v.id ? "is-next" : "", shown && shown.id === v.id ? "sel" : ""].join(" ");
      const chips = [];
      if (st === "done") chips.push(`<span class="chip success">${ic("check", "xs")} Dokumentiert</span>`);
      else {
        // Ruhige Zeitleiste: höchstens ein Chip pro Stopp, Vertretung hat Vorrang
        if (v.substitute) chips.push(`<span class="chip vertretung-${v.substitute.key}" title="Vertretung für ${v.substitute.for}">${ic("swap", "xs")} Vertretung</span>`);
        else if (v.hints[0]) chips.push(chipFor(v.hints[0]));
      }
      html += `<li><button class="stop ${cls}" data-act="select" data-id="${v.id}">
        <span class="t num">${v.time}</span>
        <span class="dot">${st === "done" ? ic("check") : ""}</span>
        <span class="body"><span class="ttl">${v.family}</span>
          <span class="sub">${v.reason}</span>
          ${chips.length ? `<span class="chips">${chips.join("")}</span>` : ""}</span>
      </button></li>`;
    });
    html += `<li class="drive"><span></span><span class="line"></span><span>${ic("car", "xs")} ${D.lastDrive} min</span></li>
      <li class="stop endpoint"><span class="t num">${D.end.time}</span><span class="dot">${ic("flag")}</span>
        <span class="body"><span class="ttl">${D.end.title}</span><span class="sub">${D.end.place} · ${D.end.buffer}</span></span></li>`;
    const done = D.visits.filter((v) => S.status[v.id] === "done").length;
    return `<section class="card timeline" aria-label="Tagesroute">
      <div class="head"><span class="section-title" style="margin:0">${ic("route", "sm")} Deine Route</span><span class="small num">${done} von ${D.visits.length} erledigt · ${D.km} km</span></div>
      <ol class="stops">${html}</ol>
    </section>`;
  }

  function lastValueFact(v) {
    if (v.type === "vorsorge") {
      const p = v.preg;
      return `<div class="fact"><div class="k">Letzter Blutdruck (${p.lastDay})</div><div class="v num">${p.lastSys}/${p.lastDia} mmHg</div><div class="d">Gewicht ${fmt1(p.lastWeight)} kg · ET ${p.et}</div></div>`;
    }
    const b = v.baby;
    const diff = ((b.last - b.birth) / b.birth) * 100;
    const diffTxt = (diff > 0 ? "+" : "−") + fmt1(Math.abs(diff)) + " % zur Geburt";
    return `<div class="fact"><div class="k">Letztes Gewicht ${v.child} (${b.lastDay})</div><div class="v num">${fmtG(b.last)} g</div><div class="d">${diffTxt} (${fmtG(b.birth)} g)</div></div>`;
  }

  function nextCard() {
    const v = shownVisit();
    if (!v) {
      return `<section class="card next"><div class="label">${ic("checkc", "sm")} Alle Besuche erledigt</div>
        <h2>Schön gemacht, ${D.me.first}!</h2><p class="muted">Alle ${D.visits.length} Besuche sind dokumentiert. Bis zur Schule hast du noch Zeit.</p>
        <div class="actions"><button class="btn primary" data-act="nav" data-k="route">${ic("route")} Morgen planen</button></div></section>`;
    }
    const st = S.status[v.id];
    const isNext = nextVisit() && nextVisit().id === v.id;
    let label;
    if (st === "done") label = `<div class="label">${ic("checkc", "sm")} Dokumentiert · ${S.durations[v.id] || ""}</div>`;
    else if (st === "driving") label = `<div class="label">${ic("car", "sm")} Unterwegs · Ankunft ca. ${v.time}</div>`;
    else if (st === "arrived") label = `<div class="label">${ic("pin", "sm")} Vor Ort seit ${v.time}</div>`;
    else if (isNext) label = `<div class="label">${ic("nav", "sm")} Nächster Besuch · Abfahrt ${addMin(v.time, -v.driveBefore)}</div>`;
    else label = `<div class="label accent">${ic("info", "sm")} Später heute</div>`;

    let banner = "";
    if (v.briefing) {
      banner = `<div class="briefing"><b>Übergabe von ${v.substitute.for}:</b> „${esc(v.briefing)}“</div>`;
    } else if (v.prep && st !== "done") {
      banner = `<div class="banner ${v.prep.level}">${ic(v.prep.level === "info" ? "info" : "alert", "sm")}<span><b>${v.prep.level === "info" ? "Gut zu wissen" : "Hinweis"}:</b> ${esc(v.prep.text)}</span></div>`;
    }

    let actions = "";
    if (st === "done") {
      actions = `<span class="status-line">${ic("lock", "sm")} Eintrag gesperrt nach 24 h – danach nur Nachtrag</span>
        <button class="btn secondary" data-act="select" data-id="">${ic("left")} Zum nächsten Besuch</button>`;
    } else if (!isNext) {
      actions = `<span class="status-line">${ic("clock", "sm")} Erst nach ${nextVisit().family}</span>
        <button class="btn secondary" data-act="select" data-id="">${ic("left")} Zum nächsten Besuch</button>`;
    } else if (st === "open") {
      actions = `<button class="btn secondary" data-act="arrive" data-id="${v.id}">${ic("pin")} Ankunft melden</button>
        <button class="btn primary" data-act="navsheet" data-id="${v.id}">${ic("nav")} Navigation starten</button>`;
    } else if (st === "driving") {
      actions = `<span class="status-line"><span class="progress"><i></i></span> ${v.driveBefore} min · ${fmt1(v.km)} km</span>
        <button class="btn secondary" data-act="navsheet" data-id="${v.id}">${ic("nav")} Navigation</button>
        <button class="btn primary" data-act="arrive" data-id="${v.id}">${ic("pin")} Ankunft melden</button>`;
    } else if (st === "arrived") {
      actions = `<span class="status-line">${ic("check", "sm")} Ankunft ${v.time} · Fahrtenbuch +${fmt1(v.km)} km</span>
        <button class="btn primary" data-act="document" data-id="${v.id}">${ic("file")} Besuch dokumentieren</button>`;
    }

    const chips = [];
    if (v.substitute) chips.push(`<span class="chip vertretung-${v.substitute.key}">${ic("swap", "xs")} Vertretung für ${v.substitute.for}</span>`);
    return `<section class="card next" aria-label="Besuch">
      ${label}
      <div class="row">
        <div style="flex:1">
          <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><h2>${v.family}</h2>${chips.join("")}</div>
          <div class="who">${v.child ? `${v.mother.split(" ")[0]} & Baby ${v.child}` : v.mother} · ${v.reason}</div>
        </div>
        <div class="time"><div class="big num">${v.time}</div><div class="muted small num">bis ${v.until} · ${v.duration} min</div></div>
      </div>
      <div class="addr">${ic("pin", "sm")} <span>${v.address} <span class="muted">· ${v.district}</span></span></div>
      ${banner}
      <div class="facts">${lastValueFact(v)}</div>
      <div class="actions">${actions}</div>
    </section>`;
  }

  function tasksRow() {
    return `<div class="card tasks" aria-label="Offene Aufgaben">${D.tasks.map((t) => `<button class="task" data-act="task" title="${t.label} ${t.sub}">
      <span class="ic ${t.tone}">${ic(t.icon, "sm")}</span><span class="l"><span class="num">${t.n}</span> ${t.label}</span></button>`).join("")}</div>`;
  }

  function heute() {
    const n = openHandovers();
    const handoverBanner = n
      ? `<div class="banner info">${ic("swap", "sm")}<span class="grow"><b>Lena ist ab 5. Oktober im Urlaub</b> – ${n === 1 ? "1 Übernahme wartet" : n + " Übernahmen warten"} auf deine Bestätigung.</span>
         <button class="btn text act" data-act="handover">Ansehen ${ic("right", "sm")}</button></div>`
      : "";
    return `${topbar("Heute", D.today)}
      <div class="heute">
        ${timeline()}
        <div class="right">${handoverBanner}${nextCard()}${tasksRow()}</div>
      </div>`;
  }

  // ---------- Besuch dokumentieren ----------
  function newDoc(v) {
    const d = { id: v.id, start: Date.now(), touched: {}, val: {}, tiles: {}, notes: "", section: null };
    if (v.type === "vorsorge") {
      Object.assign(d.val, { sys: v.preg.lastSys, dia: v.preg.lastDia, mweight: v.preg.lastWeight });
      d.tiles = { heart: [], position: [], mood: [], complaints: [] };
      d.section = "vorsorge";
    } else {
      const b = v.baby;
      Object.assign(d.val, { weight: b.last, temp: b.lastTemp, feeds: b.lastFeeds, mtemp: v.mum.lastTemp });
      if (v.type === "abschluss") Object.assign(d.val, { length: b.lastLength, head: b.lastHead });
      d.tiles = { skin: [], navel: [], stool: [], breast: [], latch: [], lochia: [], mood: [], uterus: [] };
      d.section = "kind";
    }
    return d;
  }

  function sectionsFor(v) {
    if (v.type === "vorsorge") return [
      ["vorsorge", "Vorsorge", "user", ["sys", "dia"]],
      ["kind", "Kind im Bauch", "heart", ["heart"]],
      ["notizen", "Notizen", "note", []],
    ];
    return [
      ["kind", "Kind", "baby", ["weight", "temp"]],
      ["mutter", "Mutter", "user", []],
      ["stillen", "Stillen", "drop", ["feeds"]],
      ["notizen", "Notizen", "note", []],
    ];
  }

  const LABELS = { weight: "Gewicht", temp: "Temperatur Kind", feeds: "Stillmahlzeiten", sys: "Blutdruck systolisch", dia: "Blutdruck diastolisch", heart: "Herztöne" };

  function missingFields(v) {
    const d = S.doc;
    const miss = [];
    sectionsFor(v).forEach(([, , , req]) => req.forEach((k) => {
      const done = d.touched[k] || (d.tiles[k] && d.tiles[k].length);
      if (!done) miss.push(LABELS[k]);
    }));
    return miss;
  }

  function sectionDone(v, key) {
    const d = S.doc;
    const sec = sectionsFor(v).find((s) => s[0] === key);
    const req = sec[3];
    if (key === "notizen") return d.notes.trim().length > 0;
    if (req.length) return req.every((k) => d.touched[k] || (d.tiles[k] && d.tiles[k].length));
    return Object.keys(d.tiles).some((k) => ["lochia", "mood", "uterus"].includes(k) && d.tiles[k].length) || d.touched.mtemp;
  }

  function stepper(key, label, unit, steps, decimals, prevTxt, diffHtml, sub) {
    const d = S.doc;
    const val = d.val[key];
    const touched = d.touched[key];
    const [small, big] = steps;
    return `<div class="card field" data-field="${key}">
      <div class="fl"><span>${label}</span><span class="muted">${prevTxt}</span></div>
      <div class="stepper">
        ${big ? `<button class="sbtn" data-act="step" data-k="${key}" data-d="${-big}" aria-label="${label} minus ${big}">−${fmtNum(big, decimals)}</button>` : ""}
        <button class="sbtn" data-act="step" data-k="${key}" data-d="${-small}" aria-label="${label} minus ${small}">−</button>
        <span class="val ${touched ? "" : "untouched"}">${fmtNum(val, decimals)}<small>${unit}</small></span>
        <button class="sbtn" data-act="step" data-k="${key}" data-d="${small}" aria-label="${label} plus ${small}">+</button>
        ${big ? `<button class="sbtn" data-act="step" data-k="${key}" data-d="${big}" aria-label="${label} plus ${big}">+${fmtNum(big, decimals)}</button>` : ""}
      </div>
      ${touched ? `<div class="diff">${diffHtml || ""}</div>` : `<div class="hint">Vorwert übernommen – bitte messen und anpassen</div>`}
      ${sub || ""}
    </div>`;
  }

  function tiles(key, options, multi, prev) {
    const sel = S.doc.tiles[key];
    return `<div class="tiles" role="group">${options.map(([val, warn]) => {
      const on = sel.includes(val);
      return `<button class="tile ${on ? "on" : ""} ${on && warn ? "warn" : ""}" data-act="tile" data-k="${key}" data-v="${esc(val)}" data-m="${multi ? 1 : 0}" aria-pressed="${on}">
        ${on ? ic("check", "xs") : ""}${esc(val)}${prev && prev.includes(val) && !on ? ` <span class="prev">zuletzt</span>` : ""}</button>`;
    }).join("")}</div>`;
  }

  function babyBanners(v) {
    const d = S.doc, b = v.baby, out = [];
    if (d.touched.weight && b.day <= 14) {
      const loss = ((b.birth - d.val.weight) / b.birth) * 100;
      const name = v.child;
      if (loss > 10) out.push(["warning", "alert", `<b>Warnung:</b> ${name} hat ${fmt1(loss)} % abgenommen. Stillen genau prüfen, Zufüttern mit der Kinderärztin abklären und morgen erneut wiegen.`]);
      else if (loss >= 7) out.push(["caution", "alert", `<b>Hinweis:</b> ${name} hat ${fmt1(loss)} % abgenommen. Stillmahlzeiten prüfen und morgen erneut wiegen.`]);
      else if (loss > 0) out.push(["info", "info", `${name} liegt ${fmt1(loss)} % unter dem Geburtsgewicht – im erwarteten Bereich.`]);
      else out.push(["success", "checkc", `<b>Geburtsgewicht erreicht:</b> ${name} wiegt ${fmtG(d.val.weight - b.birth)} g mehr als bei der Geburt.`]);
    } else if (!d.touched.weight && v.prep && b.day <= 14) {
      out.push([v.prep.level, "alert", `<b>Hinweis vom letzten Besuch:</b> ${esc(v.prep.text)}`]);
    }
    if (d.touched.temp && d.val.temp >= 38) out.push(["warning", "alert", `<b>Warnung:</b> Temperatur ${fmt1(d.val.temp)} °C. Nach 30 Minuten erneut messen, bei Bestätigung Kinderärztin informieren.`]);
    if (d.touched.mtemp && d.val.mtemp >= 38) out.push(["warning", "alert", `<b>Warnung:</b> Temperatur der Mutter ${fmt1(d.val.mtemp)} °C. Brust und Wunde prüfen, ggf. Gynäkologin informieren.`]);
    return out;
  }

  function docSectionsHtml(v) {
    const d = S.doc;
    if (v.type === "vorsorge") {
      const p = v.preg;
      const dsys = d.val.sys - p.lastSys, ddia = d.val.dia - p.lastDia;
      const bp = (d.touched.sys || d.touched.dia) && (d.val.sys >= 140 || d.val.dia >= 90)
        ? `<div class="banner warning" style="margin-top:16px">${ic("alert", "sm")}<span><b>Warnung:</b> Blutdruck ${d.val.sys}/${d.val.dia} mmHg. In 15 Minuten erneut messen, Urin auf Eiweiß prüfen, ggf. Ärztin informieren.</span></div>` : "";
      return `
      <section id="sec-vorsorge"><h2>${ic("user")} Vorsorge <span class="req-l">· SSW ${p.ssw} · ET ${p.et}</span></h2>
        <div class="grid2">
          ${stepper("sys", "Blutdruck systolisch", " mmHg", [2], 0, `zuletzt ${p.lastSys} (${p.lastDay})`, `<span>Veränderung</span><b class="${dsys > 0 ? "down" : "up"}">${dsys >= 0 ? "+" : "−"}${Math.abs(dsys)} mmHg</b>`)}
          ${stepper("dia", "Blutdruck diastolisch", " mmHg", [2], 0, `zuletzt ${p.lastDia} (${p.lastDay})`, `<span>Veränderung</span><b class="${ddia > 0 ? "down" : "up"}">${ddia >= 0 ? "+" : "−"}${Math.abs(ddia)} mmHg</b>`)}
          ${stepper("mweight", "Gewicht Mutter", " kg", [0.1, 0.5], 1, `zuletzt ${fmt1(p.lastWeight)} kg`, `<span>seit ${p.lastDay}</span><b>${d.val.mweight - p.lastWeight >= 0 ? "+" : "−"}${fmt1(Math.abs(d.val.mweight - p.lastWeight))} kg</b>`)}
          <div class="card field"><div class="fl"><span>Befinden</span></div>${tiles("mood", [["gut"], ["müde"], ["ängstlich", 1], ["Beschwerden", 1]], false)}</div>
        </div>${bp}
        <div class="card field" style="margin-top:16px"><div class="fl"><span>Beschwerden</span><span class="muted">Mehrfachauswahl</span></div>
          ${tiles("complaints", [["keine"], ["Ödeme", 1], ["Kopfschmerzen", 1], ["Senkwehen"], ["Rückenschmerzen"]], true)}</div>
      </section>
      <section id="sec-kind"><h2>${ic("heart")} Kind im Bauch</h2>
        <div class="grid2">
          <div class="card field"><div class="fl"><span>Herztöne</span><span class="muted">Pflicht</span></div>${tiles("heart", [["regelmäßig"], ["auffällig", 1]], false)}</div>
          <div class="card field"><div class="fl"><span>Kindslage</span><span class="muted">zuletzt SL</span></div>${tiles("position", [["Schädellage"], ["Beckenendlage", 1], ["Querlage", 1]], false, ["Schädellage"])}</div>
        </div>
      </section>
      ${notesSection()}`;
    }

    const b = v.baby;
    const dw = d.val.weight - b.last;
    const loss = ((b.birth - d.val.weight) / b.birth) * 100;
    const weightDiff = `<span><b class="${dw >= 0 ? "up" : "down"}">${dw >= 0 ? "+" : "−"}${fmtG(Math.abs(dw))} g</b> seit ${b.lastDay}</span>
      <span>${loss > 0 ? `<b class="${loss > 10 ? "bad" : loss >= 7 ? "down" : ""}">−${fmt1(loss)} %</b> zur Geburt` : `<b class="up">+${fmtG(d.val.weight - b.birth)} g</b> über Geburtsgewicht`}</span>`;
    const tempDiff = `<span>${d.val.temp >= 38 ? `<b class="bad">${ic("alert", "xs")} erhöht</b>` : d.val.temp < 36.5 ? `<b class="down">niedrig</b>` : `<b class="up">${ic("check", "xs")} im Normbereich</b>`}</span><span>Vorwert ${fmt1(b.lastTemp)} °C</span>`;
    const extra = v.type === "abschluss" ? `
          ${stepper("length", "Länge", " cm", [0.5], 1, `zuletzt ${fmt1(b.lastLength)} cm (${b.lastDay})`, `<span>seit ${b.lastDay}</span><b class="up">+${fmt1(d.val.length - b.lastLength)} cm</b>`)}
          ${stepper("head", "Kopfumfang", " cm", [0.5], 1, `zuletzt ${fmt1(b.lastHead)} cm`, `<span>seit ${b.lastDay}</span><b class="up">+${fmt1(d.val.head - b.lastHead)} cm</b>`)}` : "";
    return `
      <section id="sec-kind"><h2>${ic("baby")} Kind · ${v.child} <span class="req-l">· ${b.day <= 28 ? "Tag " + b.day : Math.round(b.day / 7) + " Wochen"} · Geburtsgewicht ${fmtG(b.birth)} g</span></h2>
        <div class="grid2">
          ${stepper("weight", "Gewicht", " g", [5, 50], 0, `zuletzt ${fmtG(b.last)} g (${b.lastDay})`, weightDiff)}
          ${stepper("temp", "Temperatur", " °C", [0.1], 1, `zuletzt ${fmt1(b.lastTemp)} °C`, tempDiff)}
          ${extra}
          <div class="card field"><div class="fl"><span>Haut</span></div>${tiles("skin", [["rosig"], ["leicht gelb"], ["deutlich gelb", 1]], false, ["rosig"])}</div>
          <div class="card field"><div class="fl"><span>Nabel</span></div>${tiles("navel", [["trocken"], ["nässt", 1], ["gerötet", 1], ["abgefallen"]], false)}</div>
        </div>
        <div class="card field" style="margin-top:16px"><div class="fl"><span>Stuhl</span><span class="muted">zuletzt Übergangsstuhl</span></div>
          ${tiles("stool", [["Mekonium"], ["Übergangsstuhl"], ["Muttermilchstuhl"], ["kein Stuhl seit 24 h", 1]], false, ["Übergangsstuhl"])}</div>
      </section>
      <section id="sec-mutter"><h2>${ic("user")} Mutter · ${v.mother.split(" ")[0]}</h2>
        <div class="grid2">
          ${stepper("mtemp", "Temperatur", " °C", [0.1], 1, `zuletzt ${fmt1(v.mum.lastTemp)} °C`, `<span>${d.val.mtemp >= 38 ? `<b class="bad">erhöht</b>` : `<b class="up">${ic("check", "xs")} im Normbereich</b>`}</span>`)}
          <div class="card field"><div class="fl"><span>Befinden</span><span class="muted">zuletzt ${v.mum.lastMood}</span></div>${tiles("mood", [["gut"], ["erschöpft"], ["traurig", 1], ["überfordert", 1]], false, [v.mum.lastMood])}</div>
          <div class="card field"><div class="fl"><span>Lochien</span><span class="muted">zuletzt ${v.mum.lastLochia}</span></div>${tiles("lochia", [["rubra"], ["fusca"], ["flava"], ["alba"], ["übelriechend", 1]], false, [v.mum.lastLochia])}</div>
          <div class="card field"><div class="fl"><span>Gebärmutter</span></div>${tiles("uterus", [["gut zurückgebildet"], ["weich", 1], ["druckempfindlich", 1]], false)}</div>
        </div>
      </section>
      <section id="sec-stillen"><h2>${ic("drop")} Stillen</h2>
        <div class="grid2">
          ${stepper("feeds", "Mahlzeiten in 24 h", "×", [1], 0, `zuletzt ${b.lastFeeds}×`, `<span>seit ${b.lastDay}</span><b class="${d.val.feeds >= b.lastFeeds ? "up" : "down"}">${d.val.feeds - b.lastFeeds >= 0 ? "+" : "−"}${Math.abs(d.val.feeds - b.lastFeeds)}</b>`)}
          <div class="card field"><div class="fl"><span>Anlegen</span></div>${tiles("latch", [["selbstständig"], ["mit Hilfe"], ["Stillhütchen"]], false)}</div>
        </div>
        <div class="card field" style="margin-top:16px"><div class="fl"><span>Brust</span><span class="muted">Mehrfachauswahl</span></div>
          ${tiles("breast", [["gut"], ["Brustwarzen wund", 1], ["Milchstau", 1], ["Rhagaden", 1], ["Mastitis-Verdacht", 1]], true, b.lastBreast)}</div>
      </section>
      ${notesSection()}`;
  }

  function notesSection() {
    return `<section id="sec-notizen" class="notes"><h2>${ic("note")} Notizen</h2>
      <div class="snippets">${D.snippets.map((s, i) => `<button class="snip" data-act="snip" data-i="${i}">${ic("plus", "xs")} ${esc(s)}</button>`).join("")}</div>
      <textarea id="notes" placeholder="Freitext – oder Textbaustein antippen">${esc(S.doc.notes)}</textarea>
      <div style="display:flex;justify-content:flex-end;margin-top:8px"><button class="btn text" data-act="mic">${ic("mic", "sm")} Diktieren</button></div>
    </section>`;
  }

  function besuch() {
    const v = visitById(S.doc.id);
    const d = S.doc;
    const secs = sectionsFor(v);
    const banners = v.type === "vorsorge" ? [] : babyBanners(v);
    if (v.briefing) banners.unshift(["info", "swap", `<b>Übergabe von ${v.substitute.for}:</b> ${esc(v.briefing)}`]);
    const miss = missingFields(v);
    const typeLabel = v.type === "vorsorge" ? "Vorsorge" : v.type === "abschluss" ? "Abschlussbesuch" : "Wochenbettbesuch";
    return `<header class="visit-top">
        <button class="icon-btn" data-act="back" aria-label="Zurück zu Heute">${ic("left")}</button>
        <span class="avatar" style="background:var(--accent-soft);color:var(--accent)">${ic(v.child ? "baby" : "user")}</span>
        <div style="flex:1"><h1>${v.child ? `${v.mother} & Baby ${v.child}` : v.mother}</h1>
          <div class="sub">${typeLabel} · ${v.reason} · ${v.address.split(",")[0]}</div></div>
        ${v.substitute ? `<span class="chip vertretung-${v.substitute.key}">${ic("swap", "xs")} Vertretung für ${v.substitute.for}</span>` : ""}
        <span class="timer" id="timer">${ic("clock", "xs")} <span class="num">0:00</span></span>
        ${syncChip()}
      </header>
      <div class="visit-body">
        <nav class="sec-nav" aria-label="Bereiche">
          ${secs.map(([k, l, icon]) => `<button class="sec-btn ${d.section === k ? "on" : ""}" data-act="sec" data-k="${k}">${ic(icon)} ${l}
            ${sectionDone(v, k) ? `<span class="ok">${ic("checkc", "sm")}</span>` : secs.find((s) => s[0] === k)[3].length ? `<span class="req" title="Pflichtfelder offen"></span>` : ""}</button>`).join("")}
          <div class="grow"></div>
          <div class="meta">${ic("cloud", "xs")} Wird lokal gespeichert – auch ohne Netz.</div>
        </nav>
        <div class="doc" id="doc">
          ${banners.length ? `<div class="banners">${banners.map(([lvl, icon, txt]) => `<div class="banner ${lvl}">${ic(icon, "sm")}<span>${txt}</span></div>`).join("")}</div>` : ""}
          ${docSectionsHtml(v)}
        </div>
      </div>
      <footer class="doc-foot">
        <span class="state">${ic("checkc", "sm")} Entwurf gesichert</span>
        <span class="spacer"></span>
        ${miss.length ? `<span class="missing">${ic("alert", "sm")} Noch offen: ${miss.join(", ")}</span>` : `<span class="state" style="color:var(--success)">${ic("check", "sm")} Alle Pflichtfelder erfasst</span>`}
        <button class="btn primary" data-act="tosign" ${miss.length ? "disabled" : ""}>${ic("pen")} Unterschrift & Abschließen</button>
      </footer>`;
  }

  // ---------- Overlays ----------
  function overlay() {
    const v = shownVisit();
    switch (S.overlay) {
      case "navsheet":
        return `<div class="scrim" data-act="close"><aside class="panel" data-stop="1" aria-label="Navigation starten">
          <h2>Navigation starten <button class="icon-btn" data-act="close" aria-label="Schließen">${ic("x")}</button></h2>
          <p class="muted" style="margin:0">Zu ${v.family}, ${v.address}. Es werden nur Adresse und Ziel übergeben – keine Gesundheitsdaten.</p>
          ${[["Apple Karten", "Standard auf dem iPad"], ["Google Maps", "mit Verkehrslage"], ["Waze", "mit Blitzer-Hinweisen"]].map(([n, s]) =>
            `<button class="opt" data-act="drive" data-app="${n}">${ic("nav")}<span>${n}<small>${s}</small></span><span class="end">${ic("right")}</span></button>`).join("")}
          <div class="banner info">${ic("info", "sm")}<span>Fahrzeit ca. ${v.driveBefore} min · ${fmt1(v.km)} km. Bei Verspätung bietet Nestwerk an, die Familie zu informieren.</span></div>
        </aside></div>`;
      case "handover":
        return `<div class="scrim" data-act="close"><aside class="panel" data-stop="1" aria-label="Übernahmen bestätigen">
          <h2>Übernahmen von Lena <button class="icon-btn" data-act="close" aria-label="Schließen">${ic("x")}</button></h2>
          <p class="muted" style="margin:0">Lena ist vom 5. bis 16. Oktober im Urlaub. Erst nach deiner Bestätigung bekommst du Zugriff auf die Akten.</p>
          ${D.handovers.map((h) => {
            const st = S.handover[h.id];
            return `<div class="card handover">
              <div style="display:flex;justify-content:space-between;gap:8px;align-items:center"><h3>${h.family}</h3><span class="chip vertretung-lena">${ic("swap", "xs")} Vertretung für Lena</span></div>
              <div class="muted small">${h.who} · ${h.reason} · ${h.district}</div>
              <div class="small"><b>Nächster Besuch:</b> ${h.next} · ${h.detour}</div>
              <div class="briefing small"><b>Was ist wichtig?</b> ${esc(h.briefing)}</div>
              ${st === "open" ? `<div class="acts"><button class="btn secondary" data-act="ho" data-id="${h.id}" data-v="asked">Rückfrage</button><button class="btn primary" data-act="ho" data-id="${h.id}" data-v="accepted">${ic("check", "sm")} Übernehmen</button></div>`
                : st === "accepted" ? `<span class="chip success">${ic("check", "xs")} Übernommen – Lena wird informiert</span>` : `<span class="chip caution">${ic("note", "xs")} Rückfrage an Lena gesendet</span>`}
            </div>`;
          }).join("")}
        </aside></div>`;
      case "menu":
        return `<div class="scrim" style="background:transparent" data-act="close"></div>
          <div class="menu" role="menu">
            <div class="hd"><b>${D.me.name}</b>Angemeldet per Passkey · Praxis-Tablet</div>
            <button data-act="theme">${ic(theme === "dark" ? "sun" : "moon")} ${theme === "dark" ? "Hellmodus" : "Dunkelmodus (Rufbereitschaft)"}</button>
            <button data-act="lock">${ic("lock")} Bildschirm sperren</button>
            <button data-act="lock">${ic("logout")} Abmelden</button>
          </div>`;
      case "sign":
        return signOverlay();
      case "lock":
        return `<div class="lock">
          <img src="assets/logo.png" alt="Praxislogo">
          <h1>Wer arbeitet gerade?</h1>
          <p class="muted" style="margin:-12px 0 0">Geteiltes Praxis-Tablet · Entsperren mit Face ID</p>
          <div class="people">${D.team.map((t) => `<button class="card person" data-act="unlock" data-k="${t.key}">
            <span class="avatar ${t.key}">${t.initials}</span>${t.name}<small>${t.key === "sarah" ? ic("face", "xs") + " Face ID" : t.info}</small></button>`).join("")}</div>
        </div>`;
      default:
        return "";
    }
  }

  function signOverlay() {
    const v = visitById(S.doc.id);
    const leistung = v.type === "vorsorge" ? "Vorsorgeuntersuchung in der Schwangerschaft" : v.type === "abschluss" ? "Hausbesuch im Wochenbett (Abschluss)" : "Hausbesuch im Wochenbett";
    return `<div class="sign-wrap"><div class="sign" role="dialog" aria-label="Unterschrift">
      <div class="portrait-note">${ic("tablet", "xs")} Tablet zur Familie drehen</div>
      <h2>Bitte bestätigen Sie den heutigen Besuch</h2>
      <p class="muted">Mit Ihrer Unterschrift bestätigen Sie, dass ${D.me.name} Sie heute besucht hat. Die Bestätigung geht an die Abrechnungsstelle HebSet.</p>
      <dl class="sum">
        <dt>Leistung</dt><dd>${leistung}</dd>
        <dt>Datum</dt><dd>Donnerstag, 01.10.2026</dd>
        <dt>Uhrzeit</dt><dd class="num">${v.time}–${v.until} Uhr (${v.duration} Minuten)</dd>
        <dt>Hebamme</dt><dd>${D.me.name}${v.substitute ? ` (Vertretung für ${v.substitute.for} Yilmaz)` : ""}</dd>
        <dt>Versicherte</dt><dd>${v.mother}</dd>
      </dl>
      <div class="pad"><canvas id="pad"></canvas><div class="hint"><span>Unterschrift ${v.mother}</span><span>${ic("pen", "xs")}</span></div></div>
      <div class="acts">
        <button class="btn secondary" data-act="sign-clear">${ic("reset")} Neu</button>
        <button class="btn primary" data-act="sign-ok" id="sign-ok" disabled>${ic("check")} Bestätigen</button>
      </div>
      <button class="btn text" data-act="sign-cancel" style="align-self:center">Zurück zur Dokumentation</button>
    </div></div>`;
  }

  function placeholder() {
    const p = D.placeholders[S.nav];
    return `${topbar(p.title, "Folgt in einem nächsten Prototyp-Schritt")}
      <div class="placeholder"><div class="card">
        <h2>${p.title}</h2>
        <p class="muted" style="margin:0">Dieser Bereich ist im POC noch nicht ausgestaltet. Geplant laut Briefing:</p>
        <ul>${p.items.map((i) => `<li>${i}</li>`).join("")}</ul>
        <div><button class="btn primary" data-act="nav" data-k="heute">${ic("heute")} Zurück zu Heute</button></div>
      </div></div>`;
  }

  // ---------- Prototyp-Leiste ----------
  function flowStep() {
    if (S.overlay === "sign") return 4;
    if (S.screen === "besuch") return 3;
    const anyDone = D.visits.some((v) => S.status[v.id] === "done");
    const nv = nextVisit();
    if (nv && S.status[nv.id] === "arrived") return 2;
    if (nv && S.status[nv.id] === "driving") return 1;
    return anyDone ? 5 : 0;
  }
  function protoBar() {
    const steps = ["Heute", "Navigation", "Ankunft", "Dokumentieren", "Unterschrift", "Nächster Besuch"];
    const cur = flowStep();
    return `<img src="assets/logo.png" alt=""><b>Nestwerk</b><span class="proto-sub">Klick-Prototyp · Tablet quer</span>
      <div class="proto-steps">${steps.map((s, i) => `<span class="proto-step ${i === cur ? "on" : i < cur ? "done" : ""}">${i + 1}. ${s}</span>`).join("")}</div>
      <span class="spacer"></span>
      <button class="proto-btn" data-act="theme">${ic(theme === "dark" ? "sun" : "moon", "xs")} ${theme === "dark" ? "Hell" : "Dunkel"}</button>
      <button class="proto-btn" data-act="reset">${ic("reset", "xs")} Neu starten</button>`;
  }

  // ---------- Render ----------
  const $device = document.getElementById("device");
  const $bar = document.getElementById("proto-bar");

  function render() {
    document.documentElement.dataset.theme = theme;
    const docEl = document.getElementById("doc");
    const scroll = docEl ? docEl.scrollTop : 0;
    const notesFocused = document.activeElement && document.activeElement.id === "notes";

    let main;
    if (S.screen === "besuch") main = besuch();
    else if (S.screen === "placeholder") main = placeholder();
    else main = heute();

    $device.innerHTML = `${sidebar()}<main class="main">${main}</main>${overlay()}
      ${S.toast ? `<div class="toast ${S.toast.shown ? "" : "fresh"}" role="status">${ic(S.toast.icon, "sm")} ${S.toast.text}</div>` : ""}`;
    $bar.innerHTML = protoBar();

    if (S.toast) S.toast.shown = true;
    const newDocEl = document.getElementById("doc");
    if (newDocEl) newDocEl.scrollTop = scroll;
    if (notesFocused) { const n = document.getElementById("notes"); n.focus(); n.selectionStart = n.selectionEnd = n.value.length; }
    if (S.overlay === "sign") initPad();
    tick();
  }

  // Dokumentations-Timer (Ziel: unter 60 Sekunden)
  function tick() {
    const el = document.querySelector("#timer .num");
    if (!el || !S.doc) return;
    const s = Math.floor((Date.now() - S.doc.start) / 1000);
    el.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
    document.getElementById("timer").classList.toggle("ok", s < 60);
  }
  setInterval(tick, 1000);

  // ---------- Unterschriftsfeld ----------
  let padHasInk = false;
  function initPad() {
    const c = document.getElementById("pad");
    if (!c) return;
    const r = c.getBoundingClientRect();
    const scale = c.offsetWidth / r.width; // CSS-Skalierung des Geräterahmens ausgleichen
    c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2;
    const ctx = c.getContext("2d");
    ctx.scale(2, 2);
    ctx.lineWidth = 2.6; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
    padHasInk = false;
    let drawing = false;
    const pos = (e) => { const b = c.getBoundingClientRect(); return [(e.clientX - b.left) * scale, (e.clientY - b.top) * scale]; };
    c.addEventListener("pointerdown", (e) => { drawing = true; c.setPointerCapture(e.pointerId); const [x, y] = pos(e); ctx.beginPath(); ctx.moveTo(x, y); });
    c.addEventListener("pointermove", (e) => {
      if (!drawing) return;
      const [x, y] = pos(e); ctx.lineTo(x, y); ctx.stroke();
      if (!padHasInk) { padHasInk = true; document.getElementById("sign-ok").disabled = false; }
    });
    const stop = () => { drawing = false; };
    c.addEventListener("pointerup", stop); c.addEventListener("pointercancel", stop);
  }

  // ---------- Aktionen ----------
  const actions = {
    nav(el) {
      const k = el.dataset.k;
      S.nav = k; S.overlay = null;
      S.screen = k === "heute" ? "heute" : "placeholder";
      if (k === "heute") S.selected = null;
    },
    select(el) { S.selected = el.dataset.id || null; },
    navsheet(el) { S.selected = el.dataset.id; S.overlay = "navsheet"; },
    drive(el) {
      const v = shownVisit();
      S.status[v.id] = "driving"; S.overlay = null;
      toast(`${el.dataset.app} geöffnet – gute Fahrt!`, "nav");
    },
    arrive(el) {
      const v = visitById(el.dataset.id);
      S.status[v.id] = "arrived"; S.selected = v.id;
      toast(`Ankunft ${v.time} gemeldet · Fahrtenbuch: ${fmt1(v.km)} km`, "pin");
      syncPending();
    },
    document(el) {
      const v = visitById(el.dataset.id);
      S.doc = newDoc(v); S.screen = "besuch"; S.nav = "betreute";
    },
    back() { S.screen = "heute"; S.nav = "heute"; },
    sec(el) {
      S.doc.section = el.dataset.k;
      render();
      const t = document.getElementById("sec-" + el.dataset.k);
      if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      return false;
    },
    step(el) {
      const k = el.dataset.k, d = parseFloat(el.dataset.d);
      const dec = ["temp", "mtemp", "mweight", "length", "head"].includes(k) ? 1 : 0;
      if (!S.doc.touched[k]) S.doc.touched[k] = true;
      S.doc.val[k] = Math.round((S.doc.val[k] + d) * 10 ** dec) / 10 ** dec;
    },
    tile(el) {
      const { k, v, m } = el.dataset;
      const arr = S.doc.tiles[k];
      const i = arr.indexOf(v);
      if (m === "1") {
        if (i >= 0) arr.splice(i, 1); else arr.push(v);
        if (v === "keine" || v === "gut") S.doc.tiles[k] = arr.filter((x) => x === v || i >= 0);
        else S.doc.tiles[k] = S.doc.tiles[k].filter((x) => x !== "keine" && x !== "gut");
      } else S.doc.tiles[k] = i >= 0 ? [] : [v];
    },
    snip(el) {
      const s = D.snippets[+el.dataset.i];
      S.doc.notes = (S.doc.notes.trim() ? S.doc.notes.trim() + " " : "") + s;
    },
    mic() { toast("Spracheingabe ist für Phase 2 geplant.", "mic"); },
    tosign() { S.overlay = "sign"; },
    "sign-clear"() { render(); return false; },
    "sign-cancel"() { S.overlay = null; },
    "sign-ok"() {
      const v = visitById(S.doc.id);
      const s = Math.floor((Date.now() - S.doc.start) / 1000);
      const dur = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")} min`;
      S.durations[v.id] = `in ${dur} erfasst`;
      S.status[v.id] = "done";
      S.overlay = null; S.screen = "heute"; S.nav = "heute"; S.selected = null; S.doc = null;
      S.clock = v.until;
      const nv = nextVisit();
      toast(`Besuch bei ${v.family} abgeschlossen · dokumentiert in ${dur}${nv ? ` · weiter zu ${nv.family}` : ""}`);
      syncPending();
    },
    handover() { S.overlay = "handover"; },
    ho(el) {
      S.handover[el.dataset.id] = el.dataset.v;
      if (!openHandovers()) toast("Alle Übernahmen beantwortet – Lena wird informiert.", "swap");
    },
    menu() { S.overlay = S.overlay === "menu" ? null : "menu"; },
    theme() { theme = theme === "dark" ? "light" : "dark"; localSet("nw-theme", theme); if (S.overlay === "menu") S.overlay = null; },
    lock() { S.overlay = "lock"; },
    unlock(el) {
      if (el.dataset.k !== "sarah") { toast("Im Prototyp ist nur Sarahs Arbeitstag hinterlegt.", "info"); return; }
      S.overlay = null; toast("Willkommen zurück, Sarah.", "face");
    },
    task() { toast("Aufgabenliste folgt im nächsten Prototyp-Schritt.", "info"); },
    close() { S.overlay = null; },
    reset() { S = initial(); },
  };

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    // Klicks innerhalb eines Panels nicht als "Schließen" werten
    if (el.dataset.act === "close" && el.classList.contains("scrim") && e.target !== el) return;
    const fn = actions[el.dataset.act];
    if (!fn) return;
    const res = fn(el, e);
    if (res !== false) render();
  });

  document.addEventListener("input", (e) => {
    if (e.target.id === "notes" && S.doc) {
      const before = S.doc.notes.trim().length > 0;
      S.doc.notes = e.target.value;
      if (before !== (S.doc.notes.trim().length > 0)) render();
    }
  });

  // ---------- Geräterahmen skalieren ----------
  function fit() {
    const stage = document.querySelector(".stage");
    const s = Math.min((stage.clientWidth - 48) / 1214, (stage.clientHeight - 40) / 854, 1);
    $device.style.transform = `scale(${s})`;
  }
  window.addEventListener("resize", fit);

  render();
  fit();
})();
