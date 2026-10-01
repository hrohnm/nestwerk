// Akten-Daten für den Prototyp – Familien, Kontaktdaten und Messwerte sind erfunden.
// Ergänzt window.NW_DATA um Betreute, Akten und die Baby-Urkunde.

(function () {
  const D = window.NW_DATA;

  // Weitere eigene Betreute (ohne Besuch heute)
  D.moreClients = [
    { id: "hansen", family: "Familie Hansen", mother: "Lea Hansen", child: "Ida", district: "Kröpelin", reason: "Wochenbett Tag 18", type: "wochenbett", next: "Mo, 5. Oktober" },
    { id: "brandt", family: "Familie Brandt", mother: "Maria Brandt", child: "Theo", district: "Retschow", reason: "Wochenbett, 7 Wochen", type: "wochenbett", next: "Di, 6. Oktober" },
    { id: "lange", family: "Familie Lange", mother: "Sophie Lange", child: null, district: "Bad Doberan", reason: "Schwangerschaft 30+1", type: "vorsorge", next: "Do, 8. Oktober" },
  ];

  D.records = {
    becker: {
      main: "marielena", since: "12.06.2026", et: "28.09.2026",
      mother: { name: "Anna Becker", born: "14.03.1994 (32 J.)", insurance: "AOK Nordost", insNo: "A12•••••789", phone: "0151 ••• 22 14", note: "1. Kind" },
      child: { name: "Mila Becker", born: "26.09.2026, 06:42 Uhr", place: "Klinikum Südstadt Rostock", mode: "Spontangeburt", weight: 3380, length: 51, head: 35, apgar: "9 / 10 / 10" },
      growth: [
        { day: 0, date: "26.09.", w: 3380, label: "Geburt" },
        { day: 2, date: "28.09.", w: 3210 },
        { day: 4, date: "30.09.", w: 3150 },
      ],
      todayDay: 5,
      timeline: [
        { date: "12.06.2026", phase: "Schwangerschaft", title: "Erstgespräch & Anamnese", who: "marielena", note: "Behandlungsvertrag unterschrieben, ET 28.09.2026." },
        { date: "03.07.2026", phase: "Schwangerschaft", title: "Vorsorge SSW 27+4", who: "marielena", note: "RR 112/70, Herztöne regelmäßig, Kind aktiv." },
        { date: "07.08.2026", phase: "Schwangerschaft", title: "Vorsorge SSW 32+4", who: "johanna", note: "Vertretung während Marielenas Urlaub. Unauffällig." },
        { date: "05.09.2026", phase: "Kurs", title: "Geburtsvorbereitung (Wochenendkurs)", who: "marielena", note: "Mit Partner teilgenommen." },
        { date: "26.09.2026", phase: "Geburt", title: "Geburt im Klinikum Südstadt Rostock", who: null, note: "Spontangeburt um 06:42 Uhr, 3.380 g, 51 cm, KU 35 cm." },
        { date: "28.09.2026", phase: "Wochenbett", title: "Wochenbett Tag 2 · Erstbesuch", who: "marielena", note: "3.210 g (−5,0 %). Stillen 8× in 24 h, Anlegen mit Hilfe." },
        { date: "29.09.2026", phase: "Wochenbett", title: "Telefonberatung (Rufbereitschaft, 22:40 Uhr)", who: "johanna", note: "Mila sehr unruhig an der Brust – Clusterfeeding erklärt." },
        { date: "30.09.2026", phase: "Wochenbett", title: "Wochenbett Tag 4", who: "marielena", note: "3.150 g (−6,8 %). Brustwarzen beginnen wund zu werden." },
      ],
      docs: [
        { name: "Behandlungsvertrag", meta: "inkl. Baustein „Praxisteam“ · unterschrieben 12.06.2026", icon: "pen" },
        { name: "Anamnesebogen", meta: "12.06.2026", icon: "file" },
        { name: "Mutterpass", meta: "Foto, 3 Seiten · 03.07.2026", icon: "file" },
        { name: "Geburtsbericht Klinikum Südstadt", meta: "PDF · 28.09.2026", icon: "file" },
      ],
      hebset: [
        { form: "3.2 Schwangerschaft", items: "4 Leistungen · Juni–September", status: "submitted", detail: "eingereicht am 30.09." },
        { form: "3.4 Wochenbett", items: "Leistungen im Oktober", status: "missing", detail: "Unterschrift für heute fehlt", todayId: "becker" },
      ],
    },

    krueger: {
      main: "marielena", since: "02.04.2026", et: "08.07.2026",
      mother: { name: "Julia Krüger", born: "22.11.1990 (35 J.)", insurance: "Techniker Krankenkasse", insNo: "K48•••••215", phone: "0170 ••• 81 07", note: "2. Kind" },
      child: { name: "Jonas Krüger", born: "10.07.2026, 23:18 Uhr", place: "Klinikum Südstadt Rostock", mode: "Spontangeburt", weight: 3620, length: 53, head: 35.5, apgar: "9 / 10 / 10" },
      growth: [
        { day: 0, date: "10.07.", w: 3620, label: "Geburt" },
        { day: 3, date: "13.07.", w: 3420 },
        { day: 10, date: "20.07.", w: 3650 },
        { day: 31, date: "10.08.", w: 4480 },
        { day: 62, date: "10.09.", w: 5390 },
      ],
      todayDay: 83,
      timeline: [
        { date: "02.04.2026", phase: "Schwangerschaft", title: "Erstgespräch & Anamnese", who: "marielena", note: "Zweites Kind, große Schwester Paula (4 J.)." },
        { date: "14.05.2026", phase: "Schwangerschaft", title: "Vorsorge SSW 32+1", who: "marielena", note: "Unauffällig." },
        { date: "10.07.2026", phase: "Geburt", title: "Geburt im Klinikum Südstadt Rostock", who: null, note: "Spontangeburt um 23:18 Uhr, 3.620 g, 53 cm, KU 35,5 cm." },
        { date: "13.07.2026", phase: "Wochenbett", title: "Erster Hausbesuch · Tag 3", who: "marielena", note: "3.420 g (−5,5 %). Stillen gut." },
        { date: "20.07.2026", phase: "Wochenbett", title: "Wochenbett Tag 10", who: "marielena", note: "3.650 g – Geburtsgewicht wieder erreicht. Meilenstein markiert." },
        { date: "10.08.2026", phase: "Wochenbett", title: "Hausbesuch · 1 Monat", who: "marielena", note: "4.480 g, 56 cm. Erstes Lächeln." },
        { date: "24.08.2026", phase: "Wochenbett", title: "Telefonberatung", who: "johanna", note: "Blähungen am Abend – Fliegergriff und Bauchmassage erklärt." },
        { date: "10.09.2026", phase: "Wochenbett", title: "Hausbesuch · 2 Monate", who: "marielena", note: "5.390 g, 59 cm. Lacht laut." },
      ],
      docs: [
        { name: "Behandlungsvertrag", meta: "inkl. Baustein „Praxisteam“ · unterschrieben 02.04.2026", icon: "pen" },
        { name: "Geburtsbericht Klinikum Südstadt", meta: "PDF · 13.07.2026", icon: "file" },
        { name: "Infoblatt Babymassage-Kurs", meta: "an Familie gesendet · 10.09.2026", icon: "file" },
      ],
      hebset: [
        { form: "3.4 Wochenbett · Juli", items: "6 Leistungen", status: "submitted", detail: "eingereicht am 03.08." },
        { form: "3.4 Wochenbett · August", items: "3 Leistungen", status: "submitted", detail: "eingereicht am 02.09." },
        { form: "3.4 Wochenbett · September", items: "1 Leistung", status: "complete", detail: "vollständig, wird mit Monatsabschluss eingereicht" },
      ],
      certificate: {
        title: "Urkunde über eine wunderbare erste Zeit",
        name: "Jonas Krüger", first: "Jonas",
        bornLine: "geboren am 10. Juli 2026 um 23:18 Uhr im Klinikum Südstadt Rostock",
        rows: [
          { date: "10.07.2026", age: "Geburt", w: 3620, l: 53, h: 35.5, note: "Geboren um 23:18 Uhr" },
          { date: "13.07.2026", age: "3 Tage", w: 3420, l: null, h: null, note: "Erster Hausbesuch" },
          { date: "20.07.2026", age: "10 Tage", w: 3650, l: null, h: null, note: "Geburtsgewicht wieder erreicht" },
          { date: "10.08.2026", age: "1 Monat", w: 4480, l: 56, h: 38, note: "Erstes Lächeln" },
          { date: "10.09.2026", age: "2 Monate", w: 5390, l: 59, h: 39.5, note: "Lacht laut" },
          { date: "01.10.2026", age: "12 Wochen", w: 6020, l: 61, h: 40.5, note: "Abschied von der Hebamme", today: true },
        ],
        text: "Lieber Jonas, am 10. Juli 2026 um 23:18 Uhr bist du mit 3.620 Gramm und 53 Zentimetern auf die Welt gekommen. Zwölf Wochen lang durfte ich dich und deine Eltern begleiten – beim ersten Baden, beim Stillen-Lernen und bei so mancher kurzen Nacht. Heute wiegst du schon 6.020 Gramm und lachst laut, wenn dein Papa singt. Es war mir eine Freude, dich ein Stück auf deinem Weg zu begleiten.",
        closing: "Alles Liebe, deine Hebamme Marielena",
        date: "Bad Doberan, 1. Oktober 2026",
      },
    },
  };
})();
