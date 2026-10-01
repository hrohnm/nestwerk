// Nestwerk – Betreute, Akte (mit Wachstumskurve) und Baby-Urkunde
// Registriert zusätzliche Screens, Overlays und Aktionen bei app.js (window.NW).

(function () {
  const N = window.NW;
  const D = N.D;
  const { ic, esc, fmtG, fmt1, fmtNum } = N;
  const S = () => N.S;

  // ---------- Helfer ----------
  const member = (key) => D.team.find((t) => t.key === key);
  const whoChip = (key) => {
    if (!key) return `<span class="who-chip none">${ic("info", "xs")} Klinik</span>`;
    const m = member(key);
    return `<span class="who-chip"><span class="mini-av ${key}">${m.initials}</span>${m.name.split(" ")[0]}</span>`;
  };
  const clientById = (id) => D.visits.find((v) => v.id === id) || D.moreClients.find((c) => c.id === id);
  const parentsLine = (c) => (c.child ? `${c.mother.split(" ")[0]} & Baby ${c.child}` : c.mother);

  function go(screen, patch) {
    const s = S();
    s.hist.push({ screen: s.screen, nav: s.nav, akteId: s.akteId, akteTab: s.akteTab });
    Object.assign(s, { screen, nav: "betreute", overlay: null }, patch || {});
  }

  // Akte: echte Daten, sonst aus den Besuchsdaten abgeleitet
  function recordFor(id) {
    if (D.records[id]) return D.records[id];
    const c = clientById(id);
    const b = c.baby;
    return {
      main: c.substitute ? c.substitute.key : "marielena",
      since: "–", et: c.preg ? c.preg.et : "–",
      mother: { name: c.mother, born: "–", insurance: "–", insNo: "–", phone: "–", note: "" },
      child: b ? { name: `${c.child} ${c.mother.split(" ").pop()}`, born: b.birthLabel, place: "–", mode: "–", weight: b.birth, length: null, head: null, apgar: "–" } : null,
      growth: b ? [{ day: 0, date: "Geburt", w: b.birth, label: "Geburt" }, { day: Math.max(1, b.day - 1), date: b.lastDay, w: b.last }] : [],
      todayDay: b ? b.day : null,
      timeline: c.briefing || c.prep ? [{ date: "30.09.2026", phase: c.preg ? "Schwangerschaft" : "Wochenbett", title: "Letzter Besuch", who: c.substitute ? c.substitute.key : "marielena", note: c.briefing || c.prep.text }] : [],
      docs: [{ name: "Behandlungsvertrag", meta: "inkl. Baustein „Praxisteam“", icon: "pen" }],
      hebset: [],
      generic: true,
    };
  }

  function measuredWeight(id) {
    const m = S().measured[id];
    return m && m.touched.weight ? m.val.weight : null;
  }

  function growthPoints(id) {
    const rec = recordFor(id);
    const pts = rec.growth.slice();
    const w = measuredWeight(id);
    if (w != null) pts.push({ day: rec.todayDay, date: "heute", w, label: "heute" });
    return pts;
  }

  // ---------- Wachstumskurve (SVG) ----------
  // Vereinfachte WHO-Gewichtsperzentilen (Jungen, kg) für die Darstellung im Prototyp
  const PCT = { days: [0, 14, 30, 61, 91], p3: [2.5, 2.9, 3.4, 4.4, 5.1], p50: [3.3, 4.0, 4.5, 5.6, 6.4], p97: [4.4, 5.1, 5.8, 7.1, 8.0] };
  const interp = (arr, d) => {
    const xs = PCT.days;
    for (let i = 1; i < xs.length; i++) if (d <= xs[i]) return arr[i - 1] + ((arr[i] - arr[i - 1]) * (d - xs[i - 1])) / (xs[i] - xs[i - 1]);
    return arr[arr.length - 1];
  };

  function growthChart(points, birth, opt = {}) {
    const W = opt.w || 640, H = opt.h || 300;
    const pad = { l: opt.compact ? 44 : 56, r: 16, t: 20, b: opt.compact ? 28 : 34 };
    const maxDay = Math.max(...points.map((p) => p.day));
    const early = maxDay <= 14;
    const xMax = early ? Math.max(7, maxDay + 2) : Math.ceil((maxDay + 7) / 14) * 14;
    let yMin, yMax, yStep;
    if (early) { yMin = Math.floor((birth * 0.87) / 100) * 100; yMax = Math.ceil((birth * 1.03) / 100) * 100; yStep = 100; }
    else { yMin = 2000; yMax = 8000; yStep = 1000; }
    const x = (d) => pad.l + ((W - pad.l - pad.r) * d) / xMax;
    const y = (g) => pad.t + ((H - pad.t - pad.b) * (yMax - g)) / (yMax - yMin);
    let svg = `<svg class="gc" viewBox="0 0 ${W} ${H}" role="img" aria-label="Gewichtsverlauf">`;

    // Raster + Achsen
    for (let g = yMin; g <= yMax; g += yStep) {
      if (opt.compact && (early ? g % 200 : g % 2000)) continue;
      svg += `<line class="grid" x1="${pad.l}" x2="${W - pad.r}" y1="${y(g)}" y2="${y(g)}"/><text class="ax" x="${pad.l - 8}" y="${y(g) + 4}" text-anchor="end">${early ? fmtG(g) : g / 1000 + " kg"}</text>`;
    }
    const xStep = opt.compact ? 28 : 14;
    const xTicks = early ? Array.from({ length: xMax + 1 }, (_, i) => i) : Array.from({ length: Math.floor(xMax / xStep) + 1 }, (_, i) => i * xStep);
    xTicks.forEach((d) => {
      if (opt.compact && early && d % 2) return;
      const lbl = early ? (d === 0 ? "Geburt" : `Tag ${d}`) : d === 0 ? "Geburt" : `${d / 7} W.`;
      svg += `<text class="ax" x="${x(d)}" y="${H - 8}" text-anchor="middle">${lbl}</text>`;
    });

    if (early) {
      // Geburtsgewicht und Hinweisgrenzen (7 % / 10 %)
      [[1, "ref", ""], [0.93, "c7", "−7 %"], [0.9, "c10", "−10 %"]].forEach(([f, cls, lbl]) => {
        const g = birth * f;
        if (g < yMin) return;
        svg += `<line class="${cls}" x1="${pad.l}" x2="${W - pad.r}" y1="${y(g)}" y2="${y(g)}"/>`;
        if (lbl && !opt.compact) svg += `<text class="rl rl-${cls}" x="${W - pad.r - 4}" y="${y(g) - 6}" text-anchor="end">${lbl}</text>`;
      });
    } else {
      // Perzentilenband P3–P97 und Median
      const ds = Array.from({ length: xMax + 1 }, (_, i) => i).filter((d) => d % 2 === 0);
      const top = ds.map((d) => `${x(d)},${y(interp(PCT.p97, d) * 1000)}`);
      const bot = ds.slice().reverse().map((d) => `${x(d)},${y(interp(PCT.p3, d) * 1000)}`);
      svg += `<polygon class="band" points="${top.concat(bot).join(" ")}"/>`;
      svg += `<polyline class="p50" points="${ds.map((d) => `${x(d)},${y(interp(PCT.p50, d) * 1000)}`).join(" ")}"/>`;
      svg += `<line class="ref" x1="${pad.l}" x2="${W - pad.r}" y1="${y(birth)}" y2="${y(birth)}"/>`;
    }

    // Messwerte
    svg += `<polyline class="line" points="${points.map((p) => `${x(p.day)},${y(p.w)}`).join(" ")}"/>`;
    let lastLabelX = -99;
    points.forEach((p, i) => {
      const last = i === points.length - 1;
      svg += `<circle class="pt ${last ? "last" : ""}" cx="${x(p.day)}" cy="${y(p.w)}" r="${last ? 6 : 4.5}"/>`;
      const near = x(p.day) - lastLabelX < (opt.compact ? 60 : 44);
      if ((!opt.compact || i === 0 || last) && (!near || last)) {
        svg += `<text class="val ${last ? "last" : ""}" x="${x(p.day)}" y="${y(p.w) - 12}" text-anchor="${i === 0 ? "start" : "middle"}">${fmtG(p.w)}</text>`;
        lastLabelX = x(p.day);
      }
    });
    return svg + "</svg>";
  }

  // ---------- Betreute ----------
  function clientRow(c, opts = {}) {
    const s = S();
    const st = s.status[c.id];
    let right;
    if (opts.pending) right = `<span class="chip muted">${ic("lock", "xs")} nach Bestätigung</span>`;
    else if (st === "done") right = `<span class="chip success">${ic("check", "xs")} heute dokumentiert</span>`;
    else if (c.time) right = `<span class="when">heute ${c.time}</span>`;
    else right = `<span class="when muted">${c.next}</span>`;
    const chips = [];
    if (c.substitute) chips.push(`<span class="chip vertretung-${c.substitute.key}">${ic("swap", "xs")} Vertretung für ${c.substitute.for}</span>`);
    if (opts.pending) chips.push(`<span class="chip vertretung-${D.absence.key}">${ic("swap", "xs")} von ${D.absence.first}</span>`);
    return `<button class="card client ${opts.pending ? "pending" : ""}" data-act="${opts.pending ? "handover" : "client"}" data-id="${c.id}">
      <span class="avatar soft">${ic(c.child || opts.baby ? "baby" : "user")}</span>
      <span class="who"><b>${c.family}</b><span class="muted">${opts.pending ? c.who : parentsLine(c)}</span></span>
      <span class="what"><span>${c.reason}</span><span class="muted">${c.district}</span></span>
      <span class="chips">${chips.join("")}</span>
      <span class="right">${right}</span>
      ${ic("right", "sm")}
    </button>`;
  }

  N.screens.betreute = function () {
    const own = D.visits.filter((v) => !v.substitute);
    const subs = D.visits.filter((v) => v.substitute);
    const pending = D.handovers.filter((h) => S().handover[h.id] !== "accepted");
    const accepted = D.handovers.filter((h) => S().handover[h.id] === "accepted");
    const total = own.length + D.moreClients.length;
    return `${N.topbar("Betreute", `${total} eigene · ${subs.length} in Vertretung`)}
      <div class="list-page">
        <div class="list-tools">
          <label class="search">${ic("betreute", "sm")}<input type="search" placeholder="Name, Ort oder Kind suchen" aria-label="Betreute suchen"></label>
          <div class="filters">${["Alle", "Schwangerschaft", "Wochenbett", "Vertretung"].map((f, i) => `<button class="chip-btn ${i === 0 ? "on" : ""}" data-act="filter">${f}</button>`).join("")}</div>
        </div>
        <h3 class="list-h">Heute</h3>
        <div class="list">${own.map((c) => clientRow(c)).join("")}${subs.map((c) => clientRow(c)).join("")}</div>
        <h3 class="list-h">Weitere eigene Betreute</h3>
        <div class="list">${D.moreClients.map((c) => clientRow(c)).join("")}</div>
        ${pending.length || accepted.length ? `<h3 class="list-h">Übernahmen von ${D.absence.first} · ab ${D.absence.from}</h3>
          <div class="list">${D.handovers.map((h) => clientRow({ ...h, next: h.next, reason: h.reason }, { pending: S().handover[h.id] !== "accepted", baby: /Baby/.test(h.who) })).join("")}</div>` : ""}
      </div>`;
  };

  // ---------- Akte ----------
  function dl(rows) {
    return `<dl class="facts-dl">${rows.filter(([, v]) => v != null && v !== "").map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>`;
  }

  function overviewTab(c, rec) {
    const pts = growthPoints(c.id);
    let chart;
    if (rec.child && pts.length) {
      const birth = rec.child.weight;
      const last = pts[pts.length - 1];
      const diff = ((last.w - birth) / birth) * 100;
      const early = Math.max(...pts.map((p) => p.day)) <= 14;
      chart = `<section class="card pane chart-card">
        <div class="pane-h"><h3>Gewichtsverlauf ${c.child}</h3>
          <span class="legend">${early ? `<span><i class="lg ref"></i> Geburtsgewicht</span><span><i class="lg c7"></i> −7 %</span><span><i class="lg c10"></i> −10 %</span>` : `<span><i class="lg band"></i> Perzentilen 3–97</span><span><i class="lg ref"></i> Geburtsgewicht</span>`}</span></div>
        ${growthChart(pts, birth)}
        <div class="chart-sum">
          <div><span class="k">Geburt</span><b class="num">${fmtG(birth)} g</b></div>
          <div><span class="k">Zuletzt (${last.date})</span><b class="num">${fmtG(last.w)} g</b></div>
          <div><span class="k">Zur Geburt</span><b class="num ${diff <= -10 ? "bad" : diff <= -7 ? "down" : diff >= 0 ? "up" : ""}">${diff >= 0 ? "+" : "−"}${fmt1(Math.abs(diff))} %</b></div>
          <div><span class="k">Messungen</span><b class="num">${pts.length}</b></div>
        </div>
      </section>`;
    } else {
      chart = `<section class="card pane empty-pane">
        ${ic("heart")}
        <h3>${c.preg ? `SSW ${c.preg.ssw} · ET ${c.preg.et}` : "Noch keine Messwerte"}</h3>
        <p class="muted">${c.preg ? "Die Wachstumskurve erscheint nach der Geburt automatisch – mit dem Geburtsgewicht als Referenzlinie." : "Sobald beim nächsten Besuch gewogen wird, erscheint hier der Verlauf."}</p>
        ${c.preg ? `<div class="chart-sum"><div><span class="k">Letzter Blutdruck</span><b class="num">${c.preg.lastSys}/${c.preg.lastDia}</b></div><div><span class="k">Gewicht</span><b class="num">${fmt1(c.preg.lastWeight)} kg</b></div><div><span class="k">Letzte Vorsorge</span><b class="num">${c.preg.lastDay}</b></div></div>` : ""}
      </section>`;
    }
    const m = rec.mother, k = rec.child;
    return `<div class="akte-grid">
      ${chart}
      <div class="akte-side">
        <section class="card pane"><div class="pane-h"><h3>${ic("user", "sm")} Mutter</h3></div>
          ${dl([["Name", m.name], ["Geboren", m.born], ["Betreut seit", rec.since], ["Krankenkasse", m.insurance], ["Versichertennr.", `<span class="num">${m.insNo}</span>`], ["Telefon", `<span class="num">${m.phone}</span>`], ["Adresse", c.address || c.district], ["Hinweis", m.note]])}
        </section>
        ${k ? `<section class="card pane"><div class="pane-h"><h3>${ic("baby", "sm")} Kind</h3></div>
          ${dl([["Name", k.name], ["Geboren", k.born], ["Ort", k.place], ["Geburt", k.mode], ["Maße", `<span class="num">${fmtG(k.weight)} g${k.length ? ` · ${k.length} cm · KU ${fmtNum(k.head, k.head % 1 ? 1 : 0)} cm` : ""}</span>`], ["Apgar", k.apgar]])}
        </section>` : ""}
      </div>
    </div>`;
  }

  function timelineTab(c, rec) {
    const s = S();
    const items = rec.timeline.slice();
    if (c.time) {
      const m = S().measured[c.id];
      if (s.status[c.id] === "done") {
        let note = "Dokumentiert und von der Familie unterschrieben.";
        if (m && m.touched.weight && rec.child) {
          const diff = ((m.val.weight - rec.child.weight) / rec.child.weight) * 100;
          note = `${fmtG(m.val.weight)} g (${diff >= 0 ? "+" : "−"}${fmt1(Math.abs(diff))} %). ${note}`;
        }
        items.push({ date: "01.10.2026", phase: items.length ? items[items.length - 1].phase : "Wochenbett", title: `${c.reason} · heute`, who: D.me.key, note, today: true });
      } else {
        items.push({ date: "01.10.2026", phase: items.length ? items[items.length - 1].phase : "Wochenbett", title: `${c.reason} · heute ${c.time} geplant`, who: D.me.key, note: "Noch nicht dokumentiert.", today: true, planned: true });
      }
    }
    items.reverse();
    let lastPhase = null;
    const html = items.map((t) => {
      const head = t.phase !== lastPhase ? `<li class="tl-phase">${t.phase}</li>` : "";
      lastPhase = t.phase;
      return `${head}<li class="tl-item ${t.today ? "today" : ""} ${t.planned ? "planned" : ""}">
        <span class="tl-date num">${t.date.slice(0, 6)}<small>${t.date.slice(6)}</small></span>
        <span class="tl-dot"></span>
        <div class="tl-body">
          <div class="tl-title"><b>${esc(t.title)}</b>${whoChip(t.who)}</div>
          <p>${esc(t.note)}</p>
          ${t.today ? (t.planned ? "" : `<span class="tl-lock">${ic("check", "xs")} bis morgen 09:25 änderbar, danach gesperrt</span>`) : t.who ? `<span class="tl-lock">${ic("lock", "xs")} gesperrt · nur Nachtrag möglich</span>` : ""}
        </div>
      </li>`;
    }).join("");
    return `<div class="tl-wrap">
      <div class="tl-intro muted">${ic("info", "sm")} Alle Kontakte seit Betreuungsbeginn, mit Namen der jeweiligen Hebamme. Abgeschlossene Einträge sind nach 24 Stunden gesperrt.</div>
      ${items.length ? `<ol class="tl">${html}</ol>` : `<p class="muted">Noch keine Kontakte dokumentiert.</p>`}
    </div>`;
  }

  function docsTab(c, rec) {
    const s = S();
    const hebset = rec.hebset.map((h) => {
      let status = h.status, detail = h.detail;
      if (h.todayId && s.status[h.todayId] === "done") { status = "complete"; detail = "heutige Leistung unterschrieben"; }
      const chip = status === "submitted" ? `<span class="chip success">${ic("check", "xs")} eingereicht</span>`
        : status === "complete" ? `<span class="chip accent-p">${ic("checkc", "xs")} vollständig</span>`
        : `<span class="chip caution">${ic("alert", "xs")} Unterschrift fehlt</span>`;
      return `<li class="doc-row"><span class="ic-box p">${ic("file", "sm")}</span><span class="grow"><b>Bogen ${h.form}</b><span class="muted small">${h.items} · ${detail}</span></span>${chip}</li>`;
    }).join("");
    return `<div class="docs-grid">
      <section class="card pane">
        <div class="pane-h"><h3>${ic("file", "sm")} Dokumente</h3><button class="btn text small" data-act="adddoc">${ic("plus", "sm")} Hinzufügen</button></div>
        <ul class="doc-list">${rec.docs.map((d) => `<li class="doc-row"><span class="ic-box">${ic(d.icon, "sm")}</span><span class="grow"><b>${d.name}</b><span class="muted small">${d.meta}</span></span>${ic("right", "sm")}</li>`).join("")}</ul>
      </section>
      <section class="card pane">
        <div class="pane-h"><h3>${ic("pen", "sm")} HebSet-Bögen</h3></div>
        ${hebset ? `<ul class="doc-list">${hebset}</ul>` : `<p class="muted">Noch keine Leistungen abgerechnet.</p>`}
        <p class="muted small" style="margin:16px 0 0">Die Kassenabrechnung läuft über HebSet. Vollständige Bögen werden mit dem Monatsabschluss eingereicht.</p>
      </section>
    </div>`;
  }

  N.screens.akte = function () {
    const s = S();
    const c = clientById(s.akteId);
    const rec = recordFor(c.id);
    const main = member(rec.main);
    const tabs = [["overview", "Überblick"], ["timeline", "Zeitstrahl"], ["docs", "Dokumente & HebSet"]];
    const body = s.akteTab === "timeline" ? timelineTab(c, rec) : s.akteTab === "docs" ? docsTab(c, rec) : overviewTab(c, rec);
    return `<header class="visit-top">
        <button class="icon-btn" data-act="goback" aria-label="Zurück">${ic("left")}</button>
        <span class="avatar soft">${ic(c.child ? "baby" : "user")}</span>
        <div style="flex:1;min-width:0"><h1>${c.family}</h1>
          <div class="sub">${parentsLine(c)} · ${c.reason}</div></div>
        <span class="main-chip">Hauptbetreuerin ${whoChip(main.key)}</span>
        ${c.substitute ? `<span class="chip vertretung-${c.substitute.key}">${ic("swap", "xs")} Du vertrittst heute</span>` : ""}
        ${D.records[c.id] && D.records[c.id].certificate ? `<button class="btn accent small" data-act="urkunde" data-id="${c.id}">${ic("award", "sm")} Urkunde erstellen</button>` : ""}
      </header>
      <nav class="tabs" role="tablist">${tabs.map(([k, l]) => `<button role="tab" class="tab ${s.akteTab === k ? "on" : ""}" aria-selected="${s.akteTab === k}" data-act="akte-tab" data-k="${k}">${l}</button>`).join("")}
        <span class="spacer"></span>${rec.generic ? `<span class="muted small">Im Prototyp nur Grunddaten</span>` : `<button class="btn text small" data-act="pdf">${ic("file", "sm")} Akte als PDF</button>`}</nav>
      <div class="akte-body">${body}</div>`;
  };

  // ---------- Baby-Urkunde ----------
  function certRows(id) {
    const cert = D.records[id].certificate;
    const m = S().measured[id];
    return cert.rows.map((r) => {
      if (!r.today || !m) return r;
      return { ...r, w: m.touched.weight ? m.val.weight : r.w, l: m.touched.length ? m.val.length : r.l, h: m.touched.head ? m.val.head : r.h };
    });
  }

  function stars() {
    let seed = 7, out = "";
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    for (let i = 0; i < 70; i++) out += `<circle cx="${(rnd() * 210).toFixed(1)}" cy="${(rnd() * 72).toFixed(1)}" r="${(rnd() * 0.5 + 0.15).toFixed(2)}" opacity="${(rnd() * 0.6 + 0.4).toFixed(2)}"/>`;
    return `<svg class="stars" viewBox="0 0 210 72" preserveAspectRatio="none" aria-hidden="true">${out}</svg>`;
  }

  function certHtml(id, style, text) {
    const cert = D.records[id].certificate;
    const rows = certRows(id);
    const pts = rows.map((r, i) => ({ day: [0, 3, 10, 31, 62, 83][i], w: r.w }));
    const nf = (v) => (v == null ? "–" : fmtNum(v, v % 1 ? 1 : 0));
    return `<div class="cert cert-${style}">
      ${style === "aquarell" ? `<div class="wash" aria-hidden="true"></div>` : ""}
      ${style === "sterne" ? `<div class="sky" aria-hidden="true">${stars()}</div>` : ""}
      <header class="c-head">
        <img src="assets/logo.png" alt="Praxislogo">
        <div class="c-title">${cert.title}</div>
      </header>
      <div class="c-name">${cert.name}</div>
      <div class="c-born">${cert.bornLine}</div>
      ${style !== "schlicht" ? `<div class="c-photo"><span>Foto oder<br>Fußabdruck</span></div>` : `<div class="c-rule"></div>`}
      <p class="c-text">${esc(text)}</p>
      <p class="c-closing">${cert.closing}</p>
      <div class="c-data">
        <table>
          <thead><tr><th>Datum</th><th>Alter</th><th class="n">Gewicht<small>g</small></th><th class="n">Länge<small>cm</small></th><th class="n">Kopf<small>cm</small></th><th>Meilenstein</th></tr></thead>
          <tbody>${rows.map((r) => `<tr><td>${r.date.slice(0, 6)}</td><td>${r.age}</td><td class="n">${fmtG(r.w)}</td><td class="n">${r.l ? nf(r.l) : "–"}</td><td class="n">${r.h ? nf(r.h) : "–"}</td><td>${r.note}</td></tr>`).join("")}</tbody>
        </table>
        <div class="c-chart"><div class="c-chart-h">Gewicht in den ersten 12 Wochen</div>${growthChart(pts, rows[0].w, { w: 300, h: 190, compact: true })}</div>
      </div>
      <footer class="c-foot">
        <div class="c-sign"><span class="sig">Marielena Pontus</span><span class="line"></span><small>Marielena Pontus · Hebamme · ${D.practice.name}<br>${cert.date}</small></div>
        <img class="stamp" src="assets/logo.png" alt="Praxisstempel">
      </footer>
    </div>`;
  }

  const STYLES = [["aquarell", "Aquarell", "sanft, verspielt"], ["sterne", "Sternenhimmel", "ruhig, poetisch"], ["schlicht", "Schlicht", "zeitlos, viel Weißraum"]];

  N.screens.urkunde = function () {
    const s = S();
    const id = s.cert.id;
    const c = clientById(id);
    const cert = D.records[id].certificate;
    const measured = !!s.measured[id];
    return `<header class="visit-top">
        <button class="icon-btn" data-act="goback" aria-label="Zurück">${ic("left")}</button>
        <span class="avatar soft">${ic("award")}</span>
        <div style="flex:1"><h1>Baby-Urkunde für ${cert.first}</h1><div class="sub">${c.family} · ${c.reason}</div></div>
        <button class="btn text small" data-act="cert-family">${ic("face", "sm")} Vollbild für die Familie</button>
      </header>
      <div class="cert-screen">
        <div class="cert-stage"><div class="cert-scale" style="--s:.6">${certHtml(id, s.cert.style, s.cert.text)}</div></div>
        <aside class="cert-panel">
          <section>
            <h3>Vorlage</h3>
            <div class="styles">${STYLES.map(([k, l, d]) => `<button class="style-tile ${s.cert.style === k ? "on" : ""}" data-act="cert-style" data-k="${k}" aria-pressed="${s.cert.style === k}">
              <span class="sw sw-${k}"></span><span><b>${l}</b><small>${d}</small></span>${s.cert.style === k ? ic("checkc", "sm") : ""}</button>`).join("")}</div>
          </section>
          <section>
            <h3>Persönlicher Text</h3>
            ${s.cert.editing
              ? `<textarea id="cert-text" rows="9">${esc(s.cert.text)}</textarea>
                 <div class="row-btns"><button class="btn text small" data-act="cert-restore">Vorlage wiederherstellen</button><button class="btn secondary small" data-act="cert-edit">${ic("check", "sm")} Fertig</button></div>`
              : `<p class="cert-text-prev">${esc(s.cert.text)}</p><button class="btn text small" data-act="cert-edit">${ic("pen", "sm")} Text bearbeiten</button>`}
          </section>
          <section class="src">
            <p class="small">${ic("check", "xs")} 6 Messwerte aus der Akte übernommen</p>
            <p class="small ${measured ? "" : "muted"}">${measured ? `${ic("check", "xs")} Heutige Werte aus dem Abschlussbesuch` : `${ic("info", "xs")} Heutige Werte werden nach dem Besuch übernommen`}</p>
          </section>
          <div class="cert-actions">
            <button class="btn secondary" data-act="cert-mail">${ic("note")} E-Mail</button>
            <button class="btn primary" data-act="cert-print">${ic("file")} Drucken</button>
          </div>
        </aside>
      </div>`;
  };

  N.overlays.family = function () {
    const s = S();
    return `<div class="family-view" data-act="cert-family-close">
      <div class="cert-scale" style="--s:.66">${certHtml(s.cert.id, s.cert.style, s.cert.text)}</div>
      <button class="btn secondary family-close" data-act="cert-family-close">${ic("x")} Schließen</button>
    </div>`;
  };

  // ---------- Aktionen ----------
  Object.assign(N.actions, {
    client(el) { go("akte", { akteId: el.dataset.id, akteTab: "overview" }); },
    akte(el) { go("akte", { akteId: el.dataset.id, akteTab: "overview" }); },
    "akte-tab"(el) { S().akteTab = el.dataset.k; },
    goback() {
      const s = S();
      const prev = s.hist.pop();
      if (prev) Object.assign(s, prev);
      else Object.assign(s, { screen: "heute", nav: "heute" });
      s.overlay = null;
    },
    urkunde(el) {
      const s = S();
      const id = el.dataset.id;
      if (!s.cert || s.cert.id !== id) s.cert = { id, style: "aquarell", text: D.records[id].certificate.text, editing: false };
      go("urkunde");
    },
    "cert-style"(el) { S().cert.style = el.dataset.k; },
    "cert-edit"() { const c = S().cert; c.editing = !c.editing; },
    "cert-restore"() { const c = S().cert; c.text = D.records[c.id].certificate.text; },
    "cert-family"() { S().overlay = "family"; },
    "cert-family-close"() { S().overlay = null; },
    "cert-mail"() { N.toast("Urkunde als PDF an Familie Krüger vorbereitet – bitte E-Mail-Adresse bestätigen.", "note"); },
    "cert-print"() {
      const c = S().cert;
      document.getElementById("print-root").innerHTML = certHtml(c.id, c.style, c.text);
      setTimeout(() => window.print(), 50);
      return false;
    },
    pdf() { N.toast("Akten-Export als PDF folgt in einem späteren Schritt.", "file"); },
    adddoc() { N.toast("Foto oder Dokument aufnehmen – folgt in einem späteren Schritt.", "plus"); },
    filter() { N.toast("Filter folgen in einem späteren Schritt.", "info"); },
  });

  document.addEventListener("input", (e) => {
    if (e.target.id === "cert-text" && S().cert) {
      S().cert.text = e.target.value;
      const prev = document.querySelector(".cert-stage .c-text");
      if (prev) prev.textContent = e.target.value; // Vorschau live aktualisieren
    }
  });
})();
