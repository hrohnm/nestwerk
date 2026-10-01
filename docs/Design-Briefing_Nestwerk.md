# Design-Briefing: Nestwerk Hebammen-App

Oct 1, 2026 · @Henning Müller

## Start-Prompt

Diesen Text kopierst du als erste Nachricht in ein neues Claude-Design-Projekt. Am besten hängst du dieses Briefing zusätzlich als PDF oder Markdown an (Export über das Menü des Dokuments), damit Claude Design alle Details zu Farben, Screens und Beispieldaten nachlesen kann.

```markdown
Wir gestalten „Nestwerk“, eine Web-App (PWA) für eine Hebammenpraxis mit drei freiberuflichen Hebammen in Frankfurt am Main, die die Praxis gleichberechtigt führen – es gibt keine Chefin. Jede hat einen eigenen Login und betreut ihre eigenen Mamas und Babys; bei Urlaub oder Krankheit übergeben sie Betreute per Vertretung an die Kolleginnen. Die App ersetzt die bisherige Software Hebamio und begleitet die Hebammen bei Hausbesuchen in Schwangerschaft und Wochenbett.

Hauptgerät ist ein Tablet (iPad 11″, quer und hoch), das während des Hausbesuchs im Wohnzimmer der Familie benutzt wird – oft einhändig, mit wenig Zeit und manchmal einem Baby auf dem Arm. Zweitgerät ist das Handy unterwegs im Auto (Route, Navigation, schnelle Notizen).

Gestalte zuerst das Designsystem und danach den Screen „Heute“ im Tablet-Querformat (1194 × 834 px).

Designsystem:
- Stimmung: warm, ruhig, vertrauensvoll, professionell – nicht verspielt, nicht klinisch.
- Farben: Hintergrund Creme #FBF7F2, Flächen Weiß #FFFFFF, Primär Salbeigrün #4F7A68, Akzent Terrakotta #C8735A, Text #2B2A28, Text leise #6F6A64, Linien #E7E0D7; Status: Erfolg #3C8D5A, Hinweis #C98A00, Warnung #B8433A. Dazu ein Dunkelmodus für nächtliche Rufbereitschaft.
- Schrift: „Nunito Sans“ für die Oberfläche, „Fraunces“ für wenige Titel und die Baby-Urkunde. Grundgröße 17 px auf dem Tablet.
- Raster 8 px, Eckenradius 12 px, Touch-Ziele mindestens 48 px, keine Schatten außer für schwebende Elemente.
- Navigation: auf dem Tablet eine schmale linke Seitenleiste mit Heute, Route, Betreute, Kalender, Praxis; auf dem Handy eine untere Tab-Leiste.

Screen „Heute“ (Tablet quer): links die Tagesroute als vertikale Zeitleiste von Start (Zuhause, 8:30) über fünf Hausbesuche bis Ende (Schule Tochter, 13:15) mit Fahrzeiten zwischen den Stopps; rechts groß der nächste Besuch (Familie, Adresse, Besuchsgrund, Warnhinweise, letzter Gewichtswert des Babys) mit den Buttons „Navigation starten“ und „Ankunft melden“; darunter offene Aufgaben (2 Dokumentationen nicht abgeschlossen, 1 Baby-Urkunde fällig, 3 HebSet-Bögen fehlen Unterschriften). Oben die angemeldete Hebamme (Sarah Weber, Avatar mit Initialen, antippbar zum Abmelden) und ein Sync-Status („Alles gesichert“). Der Besuch bei Familie Nguyen ist als Vertretung für Miriam markiert (Chip „Vertretung“ + kurzes Übergabe-Briefing). Ein dezenter Hinweis zeigt: „Lena ist ab 5. Oktober im Urlaub – 2 Übernahmen warten auf deine Bestätigung.“

Verwende realistische deutsche Beispieldaten, keine Platzhalter wie Lorem ipsum. Alle Texte auf Deutsch, per Du mit den Hebammen.
```

## Produkt und Nutzerinnen

Nestwerk soll den Hausbesuch so schnell dokumentierbar machen, dass die Hebamme mehr Zeit für die Familie hat; das Design misst sich daran, ob ein Wochenbettbesuch in unter 60 Sekunden dokumentiert ist.

| Person | Situation | Was sie vom Design braucht |
| --- | --- | --- |
| Hebamme (3×, gleichberechtigt) | Eigener Login; 4–7 Hausbesuche am Tag mit eigenen Betreuten, Auto, wechselnde Netzabdeckung, Rufbereitschaft; teilt sich Praxisaufgaben (Neuanmeldungen, Monatsabschluss) mit den Kolleginnen | Große Ziele, wenige Taps, Vorwerte sichtbar, offline zuverlässig; klare Anzeige, welche Betreuten eigene sind und welche gerade vertreten werden |
| Familie | Schaut beim Besuch aufs Tablet, unterschreibt, bekommt später Urkunde und Infos; wird informiert, wenn eine Kollegin vertritt | Freundliche, verständliche Ansichten ohne Fachjargon |

**Designziele**

1. **Ein Blick reicht:** Der Heute-Screen beantwortet „Wo muss ich hin, was ist wichtig, was ist offen?“ ohne Scrollen.
2. **Erfassen statt Tippen:** Stepper, Kacheln und Textbausteine statt Formularfelder; Tastatur nur für Freitext.
3. **Vertrauen:** Gesundheitsdaten wirken geschützt; Warnhinweise sind klar, aber nicht alarmierend.
4. **Warm für die Familie:** Alles, was die Familie sieht (Unterschrift, Wachstumskurve, Urkunde), ist liebevoll gestaltet.

**Nicht im Scope des Designs:** Kassenabrechnung (läuft über HebSet), Login-Technik, Datenmodell.

## Geräte, Frames und Breakpoints

Designs entstehen zuerst für das Tablet im Querformat; jeder Kern-Screen bekommt danach eine Handy-Variante, ausgewählte Screens auch das Hochformat.

| Frame | Größe (px) | Breakpoint | Layout | Wann zeichnen |
| --- | --- | --- | --- | --- |
| Tablet quer (iPad 11″) | 1194 × 834 | ab 1024 | Seitenleiste 72 px (Icons + Label) + 2–3 Spalten | Jeder Screen zuerst |
| Tablet hoch | 834 × 1194 | 600–1023 | Seitenleiste einklappbar, 1–2 Spalten | Besuch, Unterschrift, Akte |
| Handy (iPhone 15) | 393 × 852 | unter 600 | Untere Tab-Leiste, 1 Spalte | Heute, Route, Schnellnotiz |
| Druck | A4/A5 hoch | – | Freies Layout | Baby-Urkunde, HebSet-Bogen |

**Wichtig für eine Web-App:** Die App läuft vom Home-Bildschirm im Vollbild. Oben und unten sind die Systemleisten (Uhrzeit, Home-Indikator) zu berücksichtigen – Inhalte und fixierte Leisten bekommen Sicherheitsabstände. Keine Browser-Leiste im Mockup zeigen.

## Designsystem

Das Designsystem ist ein Vorschlag als Ausgangspunkt – Claude Design soll es im ersten Schritt als Styleguide-Seite darstellen, damit ihr es gemeinsam anpassen könnt, bevor Screens entstehen.

### Farben

| Token | Hell | Dunkel | Verwendung |
| --- | --- | --- | --- |
| background | #FBF7F2 | #1C1B1A | Seitenhintergrund |
| surface | #FFFFFF | #262422 | Karten, Panels |
| surface-muted | #F3EDE5 | #2F2C29 | Seitenleiste, Gruppen |
| primary | #4F7A68 | #7FB09A | Hauptaktionen, aktive Navigation |
| primary-soft | #E3EEE8 | #2C3B34 | Ausgewählte Zustände |
| accent | #C8735A | #E39A82 | Familie/Baby-Momente, Urkunde, Highlights |
| text | #2B2A28 | #F1ECE6 | Fließtext |
| text-muted | #6F6A64 | #A9A29A | Metadaten, Hinweise |
| border | #E7E0D7 | #3A3632 | Linien, Trennungen |
| success | #3C8D5A | #6CC08A | Abgeschlossen, Gewicht steigt |
| caution | #C98A00 | #E8B53D | Hinweis (z. B. Unterschrift fehlt) |
| warning | #B8433A | #E57A70 | Warnhinweis (z. B. Gewichtsverlust über 10 %) |

Kontrast: Text auf background und surface mindestens 4,5:1; Status nie nur über Farbe, immer mit Icon und Wort.

### Typografie

| Stil | Schrift | Größe / Zeilenhöhe (Tablet) | Handy | Verwendung |
| --- | --- | --- | --- | --- |
| Display | Fraunces 600 | 32 / 40 | 26 / 32 | Seitentitel „Heute“, Urkunde |
| Titel | Nunito Sans 700 | 22 / 28 | 20 / 26 | Kartentitel, Name der Familie |
| Untertitel | Nunito Sans 600 | 18 / 24 | 17 / 22 | Abschnittsüberschriften |
| Text | Nunito Sans 400 | 17 / 24 | 16 / 22 | Standard |
| Klein | Nunito Sans 400 | 14 / 20 | 13 / 18 | Metadaten, Zeitangaben |
| Messwert | Nunito Sans 700, Ziffern tabellarisch | 28 / 32 | 24 / 28 | Gewicht, Temperatur |

### Abstände, Formen, Icons

- Raster 8 px; Abstände 4, 8, 12, 16, 24, 32, 48.
- Eckenradius: 12 px Karten, 10 px Buttons, 999 px Chips.
- Touch-Ziele mindestens 48 × 48 px, Primärbuttons 56 px hoch.
- Schatten nur für schwebende Elemente (Bottom Sheet, Dialog); sonst Flächen und Linien.
- Icons: Lucide oder Phosphor, Strichstärke 1,75, 24 px.

### Komponenten

| Komponente | Varianten | Hinweise |
| --- | --- | --- |
| Button | Primär, Sekundär, Text, Gefahr; mit Icon | Primär nur einmal pro Bereich |
| Seitenleiste / Tab-Leiste | Tablet links, Handy unten | Badge für offene Aufgaben |
| Karte | Besuch, Familie, Aufgabe, Messwert | Ganze Karte antippbar |
| Zeitleisten-Stopp | Start, Besuch, Fahrt, Pause, Ende | Fahrzeit zwischen Stopps als dünne Zeile |
| Messwert-Stepper | Gewicht (5 g), Temperatur (0,1 °C), Länge (0,5 cm) | Vorwert und Differenz daneben („+180 g seit Di“) |
| Auswahl-Kachel | Ja/Nein, Mehrfach (z. B. Stillen: gut, wund, Milchstau) | Groß, mit Icon |
| Textbaustein-Chip | Tippen fügt Satz ein | Eigene Bausteine anlegbar |
| Hinweis-Banner | Info, Hinweis, Warnung | Nie rot ohne Handlungsempfehlung |
| Statusanzeige Sync | Gesichert, Wartet (n), Offline | Immer oben rechts |
| Unterschriftsfeld | Vollbild-Modus, Stift/Finger | „Neu“ und „Bestätigen“ |
| Bottom Sheet (Handy) / Seitenpanel (Tablet) | Schnellnotiz, Details | Gleicher Inhalt, anderes Gefäß |
| Wachstumskurve | Gewicht mit Perzentilen | Geburtsgewicht als Referenzlinie |

## Navigation und Screens

Die App hat fünf Hauptbereiche; alles, was während eines Hausbesuchs passiert, liegt unter „Heute“ und „Betreute“ und ist von „Heute“ aus mit einem Tipp erreichbar.

&#91;embedded content: Navigation · 5 Bereiche, öffentliche Anmeldeseite\]

Die hervorgehobenen Bereiche tragen den Hausbesuch; die Anmeldeseite ist öffentlich und die einzige Ansicht für Familien im MVP.

| Screen | Bereich | Inhalt | Frames | Prio | Prompt |
| --- | --- | --- | --- | --- | --- |
| Designsystem | – | Farben, Schrift, Komponenten als Styleguide | Tablet | MVP | Start + 1 |
| Anmeldung | – | Login per Passkey, Auswahl der Hebamme auf geteiltem Gerät, Sperrbildschirm | Tablet, Handy | MVP | 13 |
| Heute | Heute | Tagesroute als Zeitleiste, nächster Besuch, offene Aufgaben, Vertretungshinweise, Sync-Status | Tablet quer, Handy | MVP | Start + 2 |
| Besuch dokumentieren | Betreute | Kopf mit Mutter/Kind und Hinweisen, Eingaben als Stepper und Kacheln, Vorwerte, Abschließen | Tablet quer und hoch | MVP | 3 |
| Unterschrift | Betreute | Vollbild-Unterschrift der Mutter mit Zusammenfassung der Leistung | Tablet hoch | MVP | 4 |
| Akte | Betreute | Stammdaten, Hauptbetreuerin, Zeitstrahl (mit Namen der jeweiligen Hebamme), Wachstumskurve, Dokumente, HebSet-Status | Tablet quer | MVP | 5 |
| Route planen | Route | Karte + Zeitleiste, Start/Ende, Drag-and-drop, Warnung Endpunkt | Tablet quer, Handy | MVP | 6 |
| Kalender und Team | Kalender | Woche mit Spalte pro Hebamme, Abwesenheiten, Rufbereitschaft | Tablet quer | MVP | 7 |
| Vertretung planen | Kalender | Abwesenheit eintragen, Betreute auf Kolleginnen verteilen, Briefings, Bestätigung | Tablet quer | MVP | 13 |
| Ausfall melden | Heute | „Ich falle heute aus“, automatische Verteilung der Besuche, Bestätigung der Kolleginnen | Handy | MVP | 13 |
| Rückgabe | Heute | Zusammenfassung der Vertretungszeit pro Betreute | Tablet quer | MVP | 13 |
| Baby-Urkunde | Betreute | A4-Vorlage in 3 Stilen + Vorschau mit Familie | A4, Tablet | MVP | 8 |
| Monatsabschluss | Praxis | Leistungen je Betreute, HebSet-Bogen-Status, Pool-Nachweis | Tablet quer | MVP | 9 |
| Online-Anmeldung | öffentlich | Formular für Schwangere, Bestätigung | Handy | MVP | 10 |
| Zustände und Dunkelmodus | alle | Offline, leer, Verspätung, Warnung, gesperrt | Tablet, Handy | MVP | 11 |
| Kurse | Praxis | Kurstermine, Teilnehmende, Warteliste | Tablet | Phase 2 | – |
| Familienportal | öffentlich | Termine, Infoblätter, Urkunde, Nachrichten | Handy | Phase 2 | – |

## Beispieldaten

Alle Namen und Werte sind erfunden und passen zueinander, damit die Mockups wie ein echter Arbeitstag aussehen. Stichtag in allen Screens: **Donnerstag, 1. Oktober 2026**.

### Praxis und Team

| Person | Rolle | Farbe im Kalender | Aktive Betreute |
| --- | --- | --- | --- |
| Sarah Weber | Hebamme | Salbei (primary) | 14 |
| Lena Hoffmann | Hebamme | Terrakotta (accent) | 11 |
| Miriam Yilmaz | Hebamme | Blaugrau #6B8BA4 | 9 |

Praxisname: Hebammenpraxis Nestwerk, Frankfurt-Bornheim. Abrechnung: HebSet. Zwei offene Neuanmeldungen (ET Februar 2027).

### Abwesenheiten und Vertretungen

| Hebamme | Abwesenheit | Art | Vertretung | Status |
| --- | --- | --- | --- | --- |
| Miriam Yilmaz | seit 30.09.2026, bis Gesundmeldung | Krankheit (ungeplant) | Heutige Besuche verteilt: Familie Nguyen → Sarah, 2 Besuche → Lena | Aktiv |
| Lena Hoffmann | 05.–16.10.2026 | Urlaub (geplant) | 6 Betreute: 4 → Sarah, 2 → Miriam (sofern gesund) | 2 Übernahmen warten auf Sarahs Bestätigung |

**Beispiel-Briefing** (Familie Nguyen, von Miriam): „Milchstau rechts seit gestern, Quarkwickel besprochen. Mutter spricht gut Englisch, Vater kaum Deutsch. Klingel defekt – bitte anrufen. Nächster Besuch nach Absprache.“

### Tagesroute von Sarah

| Zeit | Stopp | Stadtteil | Anlass | Dauer | Hinweis |
| --- | --- | --- | --- | --- | --- |
| 08:30 | Start: Zuhause | Bornheim | – | – | – |
| 08:44 | Familie Becker – Baby Mila | Nordend | Wochenbett Tag 5 | 45 min | Gewicht −8,3 % (Hinweis) |
| 09:41 | Familie Öztürk – Aylin | Bornheim | Schwangerschaft 36+2, Vorsorge | 40 min | Erstgebärende |
| 10:31 | Familie Krüger – Baby Jonas | Seckbach | Abschlussbesuch 12 Wochen | 50 min | Baby-Urkunde fällig |
| 11:35 | Familie Nguyen – Baby Lia | Ostend | Wochenbett Tag 10, Stillberatung | 40 min | Milchstau rechts; Vertretung für Miriam |
| 12:24 | Familie Schmitt – Baby Paul | Riederwald | Wochenbett Tag 21 | 35 min | HebSet-Bogen: 2 Unterschriften fehlen |
| 13:07 | Ende: Schule (Tochter) | Ostend | spätestens 13:15 | – | 8 min Puffer |

Fahrzeiten zwischen den Stopps 8–14 min, Tagesstrecke 31 km, Sync-Status: „Alles gesichert“.

### Messwerte Baby Mila Becker (für Besuch und Wachstumskurve)

| Datum | Gewicht (g) | Veränderung zur Geburt | Temperatur (°C) | Stillen |
| --- | --- | --- | --- | --- |
| 01.10.2026 | 3.100 | −8,3 % | 36,9 | 9× / 24 h, Brustwarzen wund |
| 30.09.2026 | 3.150 | −6,8 % | 37,0 | 8× / 24 h |
| 28.09.2026 | 3.210 | −5,0 % | 37,1 | 8× / 24 h |
| 26.09.2026 (Geburt) | 3.380 | – | – | Geburt 06:42 Uhr, Klinik, 51 cm, KU 35 cm |

### Messwerte Baby Jonas Krüger (für die Baby-Urkunde)

| Datum | Alter | Gewicht (g) | Länge (cm) | Kopfumfang (cm) | Meilenstein |
| --- | --- | --- | --- | --- | --- |
| 01.10.2026 | 12 Wochen | 6.020 | 61 | 40,5 | Abschied von der Hebamme |
| 10.09.2026 | 2 Monate | 5.390 | 59 | 39,5 | Lacht laut |
| 10.08.2026 | 1 Monat | 4.480 | 56 | 38 | Erstes Lächeln |
| 20.07.2026 | 10 Tage | 3.650 | – | – | Geburtsgewicht wieder erreicht |
| 13.07.2026 | 3 Tage | 3.420 | – | – | Erster Hausbesuch |
| 10.07.2026 | Geburt | 3.620 | 53 | 35,5 | Geboren um 23:18 Uhr |

## Zustände, Barrierefreiheit und Texte

Jeder Kern-Screen braucht neben dem Normalfall die Zustände aus der Tabelle; sie entscheiden, ob die App im Hausbesuch wirklich trägt.

| Zustand | Wo | Gestaltung |
| --- | --- | --- |
| Offline | Alle Screens | Sync-Anzeige „Offline – 3 Einträge warten“ in caution; alles bleibt bedienbar |
| Leer | Heute ohne Termine, neue Betreute ohne Messwerte | Freundlicher Satz + eine Aktion („Morgen planen“) |
| Laden | Route berechnen | Skeleton der Zeitleiste, Text „Route wird berechnet …“ |
| Hinweis | Gewichtsverlust 7–10 %, fehlende Unterschrift | Banner in caution mit Handlungsvorschlag |
| Warnung | Gewichtsverlust über 10 %, Temperatur über 38 °C | Banner in warning, Icon + Wort „Warnung“, nie nur Farbe |
| Verspätung | Route | Folgende Ankunftszeiten in caution, Button „Familie informieren“ |
| Endpunkt gefährdet | Route | Banner: „Schule wird erst 13:22 erreicht – Besuch verschieben?“ |
| Gesperrter Eintrag | Abgeschlossene Doku | Schloss-Icon, nur „Nachtrag hinzufügen“ |
| Datenschutz-Modus | Handy-Sperrbildschirm, Benachrichtigungen | Nur Initialen und Uhrzeit („S.B. 08:44“) |

### Barrierefreiheit

- WCAG 2.2 AA: Kontrast 4,5:1, Fokus-Rahmen sichtbar, alle Icons mit Beschriftung.
- Dynamische Schriftgröße bis 200 % ohne abgeschnittene Inhalte.
- Bedienbar mit einer Hand: Hauptaktionen unten rechts (Tablet) bzw. unten mittig (Handy).
- Keine Information nur über Farbe; Diagramme zusätzlich mit Werten.

### Tonalität

| Für | Ton | Beispiel |
| --- | --- | --- |
| Hebammen | Kollegial, per Du, knapp | „Noch 2 Dokus offen – jetzt erledigen?“ |
| Familien | Warm, per Sie, ohne Fachbegriffe | „Ihre Hebamme kommt heute zwischen 9:30 und 10:00 Uhr.“ |
| Warnungen | Sachlich, mit nächstem Schritt | „Mila hat 8,3 % abgenommen. Stillmahlzeiten prüfen und morgen erneut wiegen.“ |
| Urkunde | Persönlich, liebevoll, per Du an das Kind | „Lieber Jonas, am 10. Juli 2026 um 23:18 Uhr …“ |

Wortwahl: „Betreute“ statt „Patientin“, „Besuch“ statt „Termin“, „Baby“ statt „Neugeborenes“ in der Oberfläche.

## Baby-Urkunde

Die Urkunde ist das emotionalste Element der App und wird als druckfertige A4-Seite im Hochformat gestaltet, in drei Stilvarianten mit gleichem Inhalt.

**Aufbau von oben nach unten**

1. Kopf: Praxislogo klein, Titel in Fraunces „Urkunde über eine wunderbare erste Zeit“.
2. Name des Kindes groß (Display), darunter Geburtsdatum, Uhrzeit, Geburtsort.
3. Optional: rundes Foto des Babys oder Fußabdruck (Platzhalter mit gestrichelter Linie).
4. Persönlicher Text, 4–6 Sätze, zentriert oder linksbündig.
5. Tabelle der Messwerte (Datum, Alter, Gewicht, Länge, Kopfumfang, Meilenstein) mit dezenten Linien, 6 Zeilen.
6. Kleine Wachstumskurve (Gewicht) neben oder unter der Tabelle.
7. Fuß: Unterschrift der Hebamme, Name, Datum, Praxisstempel als Bild.

**Stilvarianten**

| Variante | Wirkung | Gestaltung |
| --- | --- | --- |
| Aquarell | Verspielt, sanft | Weiche Aquarell-Flecken in Salbei und Terrakotta an den Rändern |
| Sternenhimmel | Ruhig, poetisch | Dunkelblauer Kopfbereich mit feinen Sternen, Rest hell |
| Schlicht | Zeitlos | Viel Weißraum, feine Linie als Rahmen, nur Typografie |

**Drucktechnik:** A4 (210 × 297 mm), 10 mm Rand, Farben auch auf Heimdruckern gut (keine großen vollfarbigen Flächen), Text mindestens 10 pt. Zusätzlich eine Ansicht auf dem Tablet „Vorschau mit Familie“ mit den Buttons „Drucken“, „Per E-Mail senden“, „Text bearbeiten“.

**Beispieltext für das Mockup:**

> Lieber Jonas, am 10. Juli 2026 um 23:18 Uhr bist du mit 3.620 Gramm und 53 Zentimetern auf die Welt gekommen. Zwölf Wochen lang durfte ich dich und deine Eltern begleiten – beim ersten Baden, beim Stillen-Lernen und bei so mancher kurzen Nacht. Heute wiegst du schon 6.020 Gramm und lachst laut, wenn dein Papa singt. Es war mir eine Freude, dich ein Stück auf deinem Weg zu begleiten. Alles Liebe, deine Hebamme Sarah

## Ablauf im Design-Projekt

Arbeite die Screens in dieser Reihenfolge ab: erst das Designsystem freigeben, dann die MVP-Screens, dann die Varianten. Jeder Prompt unten ist eine eigene Nachricht im Design-Projekt; nach jedem Schritt prüfen und Feedback geben, bevor der nächste kommt.

**1. Designsystem prüfen** (nach dem Start-Prompt)

```markdown
Zeig mir das Designsystem als Styleguide-Seite: Farbpalette hell und dunkel, Typografie-Stufen, Buttons, Karten, Messwert-Stepper, Auswahl-Kacheln, Hinweis-Banner (Info, Hinweis, Warnung), Sync-Anzeige, Seitenleiste und Tab-Leiste.
```

**2. Heute auf dem Handy**

```markdown
Gestalte „Heute“ für das Handy (393 × 852): oben der nächste Besuch als große Karte mit „Navigation starten“, darunter die kompakte Zeitleiste der Route, unten die Tab-Leiste mit Badge für offene Aufgaben.
```

**3. Besuch dokumentieren**

```markdown
Gestalte den Screen „Besuch“ für den Wochenbettbesuch bei Baby Mila Becker (Tag 5) im Tablet-Querformat: Kopf mit Mutter und Kind, Hinweis-Banner zum Gewichtsverlust von 8,3 %; links die Bereiche Kind, Mutter, Stillen, Notizen; rechts die Eingaben als Messwert-Stepper und Auswahl-Kacheln mit Vorwerten. Unten fixiert „Unterschrift & Abschließen“. Danach dieselbe Ansicht im Hochformat.
```

**4. Unterschrift**

```markdown
Gestalte die Vollbild-Unterschrift für die Mutter im Tablet-Hochformat: kurzer Satz, was bestätigt wird (Leistung, Datum, Dauer), großes Unterschriftsfeld, Buttons „Neu“ und „Bestätigen“. Freundlich, per Sie.
```

**5. Akte einer Familie**

```markdown
Gestalte die Akte der Familie Becker (Tablet quer): Stammdaten-Karte, Zeitstrahl aller Kontakte seit Schwangerschaft, Wachstumskurve von Mila mit Geburtsgewicht als Referenzlinie, Dokumente, Status der HebSet-Bögen.
```

**6. Route planen**

```markdown
Gestalte „Route planen“ für morgen (Tablet quer): links Karte von Frankfurt-Ost mit nummerierten Stopps, rechts die Zeitleiste mit Start- und Endpunkt-Auswahl (Zuhause → Schule Tochter, spätestens 13:15), Besuche per Drag-and-drop verschiebbar, Gesamtkilometer, Warn-Banner wenn der Endpunkt nicht pünktlich erreicht wird, Button „Route bestätigen“.
```

**7. Kalender und Team**

```markdown
Gestalte den Wochenkalender der Praxis (Tablet quer) mit einer Spalte pro Hebamme in ihren Farben, privaten Blockern, Rufbereitschaft und einem Panel für „Vertretung übergeben“.
```

**8. Baby-Urkunde**

```markdown
Gestalte die Baby-Urkunde für Jonas Krüger als A4-Druckvorlage in den drei Varianten Aquarell, Sternenhimmel und Schlicht, mit den Daten und dem Text aus dem Briefing. Danach die Tablet-Ansicht „Vorschau mit Familie“ mit Vorlagenwahl und den Buttons Drucken, Per E-Mail senden, Text bearbeiten.
```

**9. Monatsabschluss für HebSet**

```markdown
Gestalte den Screen „Monatsabschluss“ (Tablet quer): Liste aller Betreuten mit Leistungen im September, Status je HebSet-Bogen (vollständig, Unterschrift fehlt, eingereicht), Pool-Nachweis mit Stunden und Kilometern pro Hebamme, Button „Bögen als PDF erstellen“.
```

**10. Online-Anmeldung für Schwangere**

```markdown
Gestalte die öffentliche Anmeldeseite für Schwangere (Handy, per Sie): ET, Adresse, gewünschte Leistungen als Kacheln, Kontakt, Datenschutz-Einwilligung, Bestätigungsseite.
```

**11. Zustände**

```markdown
Zeig für „Heute“ und „Besuch“ die Zustände Offline, Leer, Verspätung, Warnung und gesperrter Eintrag aus dem Briefing, außerdem „Heute“ im Dunkelmodus.
```

**12. Klick-Prototyp**

```markdown
Verbinde die Screens zu einem klickbaren Prototyp für den Ablauf: Heute → Navigation starten → Ankunft melden → Besuch dokumentieren → Unterschrift → zurück zu Heute mit nächstem Besuch.
```

**13. Logins, Vertretung und Übergabe**

```markdown
Die drei Hebammen sind gleichberechtigt, jede hat einen eigenen Login. Gestalte:
1. Anmeldung (Tablet und Handy): Login per Passkey mit Face ID; auf einem geteilten Praxis-Tablet die Auswahl „Wer arbeitet gerade?“ mit den drei Avataren.
2. „Vertretung planen“ (Tablet quer): Lena trägt Urlaub vom 5. bis 16. Oktober ein; links ihre 6 betroffenen Betreuten, rechts die Kolleginnen Sarah und Miriam als Spalten mit Auslastung und Umweg-Minuten; Betreute per Drag-and-drop zuordnen; pro Betreute ein Briefing-Feld „Was ist wichtig?“; Button „Übergabe anfragen“.
3. „Übernahme bestätigen“ aus Sicht von Sarah: Karte pro Betreute mit Briefing, Zeitraum, nächstem Besuch; „Übernehmen“ oder „Rückfrage“.
4. „Ich falle heute aus“ (Handy) aus Sicht von Miriam: ihre heutigen Besuche, Vorschlag der Verteilung auf Sarah und Lena mit Routen-Mehraufwand, Button „Kolleginnen informieren“.
5. „Rückgabe“ (Tablet quer) für Lena nach dem Urlaub: pro Betreute die Besuche, Messwerte und Hinweise der Vertretungszeit, mit Namen der vertretenden Hebamme.
Kennzeichne vertretene Betreute überall einheitlich (Chip „Vertretung für Lena“ in Lenas Farbe).
```

### Checkliste

- [ ] Designsystem mit allen drei Hebammen anschauen und Farben/Schrift freigeben
- [ ] Jeden MVP-Screen auf einem echten iPad in der Hand testen (Daumenreichweite, Lesbarkeit im Tageslicht)
- [ ] Klick-Prototyp bei einem echten Hausbesuch-Ablauf durchspielen (ohne echte Daten)
- [ ] HebSet-Bogen-Layout mit HebSet abstimmen, bevor Screen 9 final wird
- [ ] Urkunde einmal auf dem Praxisdrucker ausdrucken
- [ ] Ergebnisse (Design-Tokens, Screens) für die Entwicklung exportieren
