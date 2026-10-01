// Beispieldaten laut Design-Briefing – alle Namen und Werte sind erfunden.
// Stichtag: Donnerstag, 1. Oktober 2026.

window.NW_DATA = {
  today: "Donnerstag, 1. Oktober 2026",
  me: { name: "Sarah Weber", first: "Sarah", initials: "SW", key: "sarah" },
  team: [
    { key: "sarah", name: "Sarah Weber", initials: "SW", info: "14 Betreute" },
    { key: "lena", name: "Lena Hoffmann", initials: "LH", info: "Urlaub ab 5. Oktober" },
    { key: "miriam", name: "Miriam Yilmaz", initials: "MY", info: "krank gemeldet" },
  ],

  start: { time: "08:30", title: "Start: Zuhause", place: "Bornheim" },
  end: { time: "12:27", title: "Ende: Schule (Tochter)", place: "spätestens 13:15", buffer: "48 min Puffer" },
  km: 24,

  visits: [
    {
      id: "becker", time: "08:44", until: "09:29", duration: 45, driveBefore: 14, km: 3.8,
      family: "Familie Becker", mother: "Anna Becker", child: "Mila",
      district: "Nordend", address: "Eckenheimer Landstraße 112, 60318 Frankfurt",
      reason: "Wochenbett Tag 5", type: "wochenbett",
      hints: [{ level: "caution", text: "Gewicht −6,8 %" }],
      prep: { level: "caution", text: "Mila lag gestern 6,8 % unter dem Geburtsgewicht. Heute genau wiegen und eine Stillmahlzeit beobachten." },
      baby: { birth: 3380, birthLabel: "26.09., 06:42 Uhr", last: 3150, lastDay: "Mi", lastTemp: 37.0, lastFeeds: 8, lastBreast: ["gut"], day: 5 },
      mum: { lastTemp: 36.8, lastLochia: "rubra", lastMood: "erschöpft" },
    },
    {
      id: "oeztuerk", time: "09:41", until: "10:21", duration: 40, driveBefore: 12, km: 2.9,
      family: "Familie Öztürk", mother: "Aylin Öztürk", child: null,
      district: "Bornheim", address: "Berger Straße 268, 60385 Frankfurt",
      reason: "Schwangerschaft 36+2, Vorsorge", type: "vorsorge",
      hints: [{ level: "muted", text: "Erstgebärende" }],
      prep: { level: "info", text: "Erstgebärende. Letztes Mal Fragen zu Geburtsanzeichen und Kliniktasche – Infoblatt mitnehmen." },
      preg: { ssw: "36+2", et: "01.11.2026", lastSys: 118, lastDia: 76, lastWeight: 71.4, lastDay: "17.09." },
    },
    {
      id: "krueger", time: "10:31", until: "11:21", duration: 50, driveBefore: 10, km: 3.1,
      family: "Familie Krüger", mother: "Julia Krüger", child: "Jonas",
      district: "Seckbach", address: "Wilhelmshöher Straße 45, 60389 Frankfurt",
      reason: "Abschlussbesuch 12 Wochen", type: "abschluss",
      hints: [{ level: "accent", text: "Urkunde fällig" }],
      prep: { level: "info", text: "Letzter Besuch der Betreuung: Baby-Urkunde gemeinsam mit der Familie ansehen und drucken." },
      baby: { birth: 3620, birthLabel: "10.07., 23:18 Uhr", last: 5390, lastDay: "10.09.", lastTemp: 36.9, lastFeeds: 7, lastBreast: ["gut"], day: 83, lastLength: 59, lastHead: 39.5 },
      mum: { lastTemp: 36.7, lastLochia: "keine", lastMood: "gut" },
    },
    {
      id: "nguyen", time: "11:35", until: "12:15", duration: 40, driveBefore: 14, km: 4.6,
      family: "Familie Nguyen", mother: "Thi Nguyen", child: "Lia",
      district: "Ostend", address: "Hanauer Landstraße 76, 60314 Frankfurt",
      reason: "Wochenbett Tag 10, Stillberatung", type: "wochenbett",
      substitute: { for: "Miriam", key: "miriam" },
      hints: [{ level: "caution", text: "Milchstau rechts" }],
      briefing: "Milchstau rechts seit gestern, Quarkwickel besprochen. Mutter spricht gut Englisch, Vater kaum Deutsch. Klingel defekt – bitte anrufen. Nächster Besuch nach Absprache.",
      baby: { birth: 3540, birthLabel: "21.09., 14:05 Uhr", last: 3480, lastDay: "Mi", lastTemp: 36.9, lastFeeds: 10, lastBreast: ["Milchstau"], day: 10 },
      mum: { lastTemp: 37.6, lastLochia: "fusca", lastMood: "erschöpft" },
    },
  ],
  lastDrive: 12,

  tasks: [
    { n: 2, label: "Dokus offen", sub: "von Montag und Dienstag", icon: "file", tone: "c" },
    { n: 1, label: "Urkunde", sub: "fällig für Jonas Krüger", icon: "award", tone: "a" },
    { n: 3, label: "Unterschriften", sub: "fehlen auf HebSet-Bögen", icon: "pen", tone: "p" },
  ],

  handovers: [
    {
      id: "wagner", family: "Familie Wagner", who: "Sophie & Baby Emil", reason: "Wochenbett, ab Tag 9", district: "Bornheim",
      next: "Mo, 5. Oktober · ca. 10:00", period: "5.–16. Oktober", detour: "+6 min Umweg",
      briefing: "Emil trinkt gut, Nabel noch nicht ganz trocken. Hund im Haus (freundlich). Mutter wünscht Besuche vormittags.",
    },
    {
      id: "schulz", family: "Familie Schulz", who: "Hanna Schulz", reason: "Schwangerschaft 38+1", district: "Nordend",
      next: "Di, 6. Oktober · ca. 11:30", period: "5.–16. Oktober", detour: "+9 min Umweg",
      briefing: "Zweites Kind, Geburt im Geburtshaus geplant. Leichte Ödeme an den Füßen – Blutdruck im Blick behalten.",
    },
  ],

  snippets: [
    "Stillen beobachtet, Anlegen korrigiert.",
    "Nabel trocken und reizlos.",
    "Brustwarzen wund – Lanolin und Anlegepositionen besprochen.",
    "Kind rosig, wach und trinkfreudig.",
    "Gewichtskontrolle morgen.",
    "Vitamin D und K besprochen.",
  ],

  placeholders: {
    route: { title: "Route planen", items: ["Karte von Frankfurt-Ost mit nummerierten Stopps", "Start- und Endpunkt (Zuhause → Schule Tochter, spätestens 13:15)", "Besuche per Drag-and-drop verschieben, live neu berechnet", "Warnung, wenn der Endpunkt nicht pünktlich erreicht wird", "„Route bestätigen“ mit Nachricht an die Familien"] },
    betreute: { title: "Betreute", items: ["Liste eigener Betreuter und aktueller Vertretungen", "Akte mit Stammdaten, Hauptbetreuerin und Zeitstrahl", "Wachstumskurve mit Geburtsgewicht als Referenzlinie", "Dokumente und Status der HebSet-Bögen", "Baby-Urkunde in drei Stilen"] },
    kalender: { title: "Kalender & Team", items: ["Woche mit einer Spalte pro Hebamme in ihren Farben", "Abwesenheiten, private Blocker, Rufbereitschaft", "„Vertretung planen“ mit Briefings", "„Ich falle heute aus“ mit Verteilungsvorschlag"] },
    praxis: { title: "Praxis", items: ["Neuanmeldungen (2 offen, ET Februar 2027)", "Monatsabschluss für HebSet mit Pool-Nachweis", "Vorlagen und Textbausteine", "Protokoll aller Praxis-Änderungen"] },
  },
};
