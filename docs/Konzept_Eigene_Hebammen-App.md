# Konzept: Eigene Hebammen-App für die Praxis

Oct 1, 2026 · @Henning Müller

## Zusammenfassung

Empfehlung: eine eigene Tablet-first-Web-App (PWA) (Arbeitstitel **„Nestwerk“**) bauen, die den Hausbesuchsalltag von drei Hebammen besser abbildet als Hebamio – die Kassenabrechnung aber über den Abrechnungspartner HebSet laufen lässt. Hebamio deckt Dokumentation, Abrechnung, Kurse, QM und Kalender bereits breit ab; der Mehrwert der eigenen App liegt in Bedienung, Automatisierung und Familien-Erlebnis.

Drei Ideen tragen das Konzept:

- **Tagesroute statt Terminliste:** Die App plant die Hausbesuche automatisch in der besten Reihenfolge – mit frei wählbarem Start- und Endpunkt (z. B. Wohnung → Hausbesuche → Schule der Tochter um 13:15) und führt das Fahrtenbuch nebenbei.
- **Dokumentation in 60 Sekunden:** Große Touch-Kacheln, Vorlagen pro Besuchstyp, Spracheingabe und automatisch übernommene Vorwerte – direkt im Wohnzimmer der Familie, auch offline.
- **Erinnerungen für die Familie:** Zum Ende der Hebammenbetreuung erzeugt die App per Knopfdruck eine liebevoll gestaltete Baby-Urkunde mit persönlichem Text und Tabelle der Messwerte (Gewicht, Länge, Kopfumfang) als PDF zum Drucken oder Versenden.

Wichtigste Abgrenzung: Hebamio ist eine Komplettsoftware für den gesamten Markt (ab 395 € pro Hebamme und Jahr). Die eigene App ist auf genau eine Praxis zugeschnitten – das spart Lizenzkosten (\~1.200 €/Jahr), kostet aber Entwicklungs- und Wartungszeit sowie Verantwortung für Datenschutz und Abrechnungskorrektheit.

## Analyse Hebamio

Hebamio ist eine webbasierte Komplettsoftware für Hebammen (Anbieter in Deutschland: Somedio Software GmbH) mit Dokumentation, Abrechnung, Kalender, Kursen, QM und Videosprechstunde. Die mobile App Hebamio+ dient vor allem zum Einlesen von Versichertenkarten und zeigt die Web-Oberfläche in einer App-Hülle. Die hebamio.de-Startseite selbst blockiert automatisierte Abrufe; die Angaben stammen aus Unterseiten, App-Stores und Partnerartikeln (siehe Quellen). Die detaillierte A–Z-Funktionsliste stammt von der österreichischen Schwesterseite hebamio.com und enthält einzelne AT-spezifische Punkte (z. B. Mutter-Kind-Pass).

### Funktionsumfang

| Bereich | Was Hebamio bietet | Relevanz für die Praxis |
| --- | --- | --- |
| Betreute verwalten | Schnellanlage, Cockpit pro Schwangerschaft, Anamnese, Schwangerschaftsrechner, Archiv, Online-Anmeldeseite für Frauen, Behandlungsvertrag mit E-Signatur | Hoch – Kernfunktion |
| Dokumentation | Vorsorge, Geburt, Wochenbett, Telefonberatung; Apgar-Rechner, Gewichtscheck (Warnung bei 5 %/10 % unter Geburtsgewicht, Perzentile), Rhesuscheck, EPDS-Fragebogen, Themenliste Wochenbett, Freitext-„Bonusfelder“, Formulare anpassbar, Offline-Modus, PDF-Export der Kartei | Hoch – täglich im Einsatz |
| Rechtssicherheit | Über 60 hinterlegte Dokumentationsstandards; Einträge 36 h frei editierbar, danach nur noch kommentierbar | Hoch – muss nachgebaut werden |
| Kalender | Kalender pro Hebamme, Kolleginnen-Kalender einsehbar, Kategorien/Farben, private Termine, Sync mit Google/Outlook/Apple, Tourliste, Navigation aus dem Termin starten, Terminbestätigung per E-Mail | Hoch |
| Fahrten | Km-Distanz per Google Maps, Fahrtenbuch, automatisches Kilometergeld | Mittel – keine echte Routenoptimierung |
| Abrechnung | Rechnung mit einem Klick, Sammelrechnungen, Plausibilitätsprüfung, elektronische Abrechnung mit Kassen (seit 09/2021), Privatrechnungen per E-Mail, Mahnwesen, Zahlstatus, Liste nicht abgerechneter Betreuter, EÜR/Bilanz, Partner-Abrechnungszentrum Optica | Sehr hoch – aber regulatorisch aufwendig |
| eLB | Elektronische Leistungsbestätigung statt Quittierungsbogen | Hoch |
| Kurse | Kurstypen, Kursorte, Teilnehmerverwaltung, Anmeldebestätigungen, Rundmails, Rechnungen für alle Teilnehmenden, Kurse kopieren | Mittel – abhängig vom Kursangebot |
| Videosprechstunde | Zertifiziert, Einzel- und Gruppentermine bis 25 Personen, Kurse aufzeichnen (Aufpreis) | Niedrig–mittel |
| QM | Integriertes, anpassbares QM-Modul mit Handbuch, Standards, Leistungsbeschreibungen | Mittel |
| TI | Mobile TI-Anbindung (KIM) gemeinsam mit slis, Kartenlesen per Hebamio+ | Mittel – für Hebammen derzeit freiwillig |
| Sonstiges | Medikamentenverwaltung, Erinnerungen, Minihomepage, Statistiken, eigenes Logo und Stempel auf Rechnungen | Niedrig–mittel |

### Preise (Stand laut hebamio.de)

| Produkt | Preis | Hinweis |
| --- | --- | --- |
| Hebamio Software | 395 €/Jahr inkl. USt | 6 Wochen Test, monatlich kündbar |
| Praxis-/Teamversion | 395 € pro Person und Jahr | Kostenloser Verwaltungsaccount und Schulung |
| Hebamio+ (Kartenlesen) | 6,99 €/Monat | Nur Kartenlesefunktion kostenpflichtig |
| Videosprechstunde | Aufpreis | Laut FAQ extra |

Für die Praxis mit drei Hebammen ergeben sich damit rund **1.185 € pro Jahr** plus Kartenleser-Abo; einige Seiten nennen bereits 406 € für den neuen Tarifvertrag.

### Stärken und Lücken

- **Stärken:** fachlich sehr vollständig, rechtssichere Standards, funktionierende Kassenabrechnung, TI-Anbindung, Support und Schulung.
- **Lücken, die die eigene App schließen kann:** keine echte Routenoptimierung (nur Tourliste und Km-Berechnung), App ist im Kern eine Web-Oberfläche statt nativer Tablet-Bedienung, kaum Angebote für die Familien selbst (Urkunde, Wachstumsverlauf, Elternportal), wenig Automatisierung bei Übergaben im Team und Vertretungen.

### Rahmen: neuer Hebammenhilfevertrag

Seit 1. November 2025 gilt ein neuer Hebammenhilfevertrag, der u. a. Vergütung nach Zeitaufwand statt Pauschalen einführt ([Positionspapier](https://www.dielinkebt.de/fileadmin/user_upload/PDF_Dokumente/2026/Positionspapier_Hebammenhilfsvertrag.pdf)). Im März 2026 gab es bereits eine Änderungsvereinbarung ([GKV-Spitzenverband](https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/ambulante_leistungen/hebammen/aktuelle_dokumente/Hebammenhilfevertrag_AendV_26-03-16.pdf)). Genau diese Dynamik ist das größte Argument, die Abrechnungslogik nicht selbst zu pflegen.

## Rollen und Rahmenbedingungen

Die App dient drei Hebammen einer Praxis und – optional – den betreuten Familien; jede Rolle sieht nur, was sie braucht.

| Rolle | Nutzung | Gerät | Rechte |
| --- | --- | --- | --- |
| Hebamme (3×, gleichberechtigt) | Eigener Login; betreut ihre Mamas und Babys, dokumentiert, plant ihre Route; übernimmt bei Urlaub und Krankheit Betreute der Kolleginnen | Tablet, Handy, PC | Eigene Betreute voll; Betreute der Kolleginnen während einer Vertretung voll; Praxisfunktionen (Neuanmeldungen, Monatsabschluss, Vorlagen, Einstellungen) für alle gleich |
| Familie (optional) | Online-Anmeldung, Termine sehen, Dokumente/Urkunde abrufen, Fragen stellen | Handy | Nur eigene Daten, nur freigegebene Inhalte |
| Abrechnungsdienstleister | HebSet: Empfang der Versichertenbestätigungen und Pool-Nachweise | Schnittstelle | Nur Export, kein Login |

Es gibt bewusst keine Chefinnen-Rolle: Jede Änderung an Praxiseinstellungen ist für alle sichtbar protokolliert, und kritische Aktionen (z. B. Nutzer anlegen, Daten löschen) brauchen die Bestätigung einer zweiten Hebamme.

**Rahmenbedingungen, die das Konzept prägen:**

- **Gesundheitsdaten (Art. 9 DSGVO):** besondere Kategorie – Verschlüsselung, Rollenrechte, Protokollierung, Auftragsverarbeitungsverträge mit allen Dienstleistern, Hosting in der EU (am besten Deutschland), Datenschutz-Folgenabschätzung.
- **Dokumentations- und Aufbewahrungspflicht:** Hebammen-Berufsordnung des Landes (Hessen) und Hebammenhilfevertrag; Aufbewahrung in der Regel mindestens 10 Jahre, Geburtsdokumentation teils länger – vor Umsetzung mit Berufsverband klären.
- **Abrechnung:** Kassenabrechnung nach Hebammenhilfevertrag (seit 01.11.2025 neue Fassung) und § 302 SGB V – ändert sich regelmäßig, daher über HebSet.
- **Einsatzort:** Hausbesuche mit schlechtem Netz, wenig Zeit, oft ein Baby auf dem Arm – Offline-Fähigkeit und Einhandbedienung sind Pflicht.
- **Medizinprodukt?** Reine Dokumentation und Planung ist in der Regel kein Medizinprodukt; automatische Diagnose- oder Therapievorschläge könnten es machen – Warnhinweise (z. B. Gewichtsverlust) daher als Hinweis, nicht als Diagnose formulieren.

## Kernmodule

Die App besteht aus zehn Kernmodulen, die Hebamios Grundfunktionen abdecken und an den Hausbesuch angepasst sind. Priorität: **M** = MVP, **2** = Phase 2, **3** = später.

| Modul | Inhalt | Besser als Hebamio durch | Prio |
| --- | --- | --- | --- |
| Heute-Cockpit | Startbildschirm: Tagesroute, nächster Besuch, offene Dokus, Warnhinweise, Aufgaben | Ein Blick statt mehrerer Menüs | M |
| Betreute (Akte) | Stammdaten, Kasse, Anamnese, Schwangerschaftsrechner, ET, Kinder, Dokumente, Zeitstrahl aller Kontakte | Zeitstrahl-Ansicht pro Familie, Mutter und Kind getrennt und verknüpft | M |
| Online-Anmeldung | Formular für Schwangere mit Wunschleistungen, Adresse, ET; landet als Anfrage mit Verfügbarkeits-Check | Automatischer Abgleich mit Kapazität und Wohnort (Einzugsgebiet) | M |
| Dokumentation | Vorsorge, Wochenbett, Telefon/Video, Stillberatung, Rückbildung; Vorlagen pro Besuchstyp; Vorwerte übernehmen; Fotos (z. B. Naht, Haut); Unterschrift auf dem Tablet | Spracheingabe, Kacheln, Diff zum letzten Besuch | M |
| Kind & Messwerte | Gewicht, Länge, Kopfumfang, Temperatur, Bilirubin, Stillen/Ausscheidungen; Kurve mit Perzentilen; Hinweis bei >7 % bzw. >10 % Gewichtsverlust | Grafischer Verlauf, Basis für die Baby-Urkunde | M |
| Kalender & Team | Kalender pro Hebamme + Praxisansicht, Kategorien, private Blöcke, Sync mit Google/Apple/Outlook (ICS), Vertretungsplan, Urlaub, Rufbereitschaft | Vertretung übernimmt Akte und Termine mit einem Tipp | M |
| Leistungserfassung & eLB | Jede Doku erzeugt automatisch die Leistungsposition inkl. Zeitaufwand; Bestätigung durch Frau per Unterschrift/eLB | Keine doppelte Erfassung | M |
| Abrechnung | Vorbefüllte HebSet-Versichertenbestätigungen, Zusatzbogen, Stunden- und Km-Nachweis für die Pool-Aufteilung, Liste noch nicht eingereichter Leistungen, Abgleich der Auszahlungen | Rechnung, Mahnwesen und Inkasso macht HebSet | M |
| Kurse | Geburtsvorbereitung, Rückbildung, Babymassage: Termine, Orte, Online-Buchung, Warteliste, Teilnehmerliste, Rundmail, Rechnung | Online-Buchung mit Warteliste | 2 |
| Praxis & QM | Standards, Checklisten, Vorlagen, Hygieneplan, Gerätewartung, Fortbildungsnachweise, Statistiken (Betreuungen, Km, Umsatz) | Fortbildungspunkte-Tracker; QM-Handbuch alternativ über HebSet-Partner Qualitas | 3 |

**Rechtssichere Dokumentation (von Hebamio übernehmen):** Einträge sind nach Abschluss (Vorschlag: 24 h) gesperrt und nur noch per datiertem Nachtrag ergänzbar; jede Änderung wird mit Person und Zeit protokolliert; die gesamte Akte ist als PDF exportierbar.

## Abrechnungspartner HebSet

Die Kassenabrechnung übernimmt [HebSet](https://www.hebset.de/) (hebset KG, Großaitingen); die App muss daher keine eigene Abrechnung nach § 302 SGB V können, sondern HebSet vollständige, fehlerfreie Belege liefern. HebSet arbeitet heute papierbasiert: Hebammen tragen Leistungen in personalisierte Versichertenbestätigungen ein und schicken die Originale ein ([Abrechnungsservice](https://www.hebset.de/abrechnungsservice/)). Preise sind auf der Website nicht veröffentlicht.

### Was HebSet übernimmt

| Leistung | Details | Folge für die App |
| --- | --- | --- |
| Rechnungserstellung | Nach aktuellen Gebührenverträgen und -verordnungen; Positionskontrolle und Rückfragen vor der Rechnungsstellung | Keine Gebührenlogik nachbauen – Änderungen am Hebammenhilfevertrag bleiben HebSets Aufgabe |
| Erfassungsbögen | Personalisierte Versichertenbestätigungen: Formular 3.2 Schwangerschaft, 3.3 außerklinische Geburt, 3.4 Wochenbett, 3.5 Kurse, dazu ein Zusatzbogen; auf Wunsch individuell angepasst ([Zubehör](https://www.hebset.de/zubehoer/)) | App erzeugt diese Bögen vorbefüllt aus der Dokumentation |
| Pool-Abrechnung | Für Praxen ohne Mehrkosten; Aufteilung nach geleisteten Stunden, Zusatzdienste und Kilometer werden berücksichtigt, Aufteilung geht an jede Hebamme | App liefert Stunden- und Kilometernachweis pro Hebamme und Monat |
| Mahnwesen und Inkasso | HebSet ist zugleich Inkassounternehmen | Kein eigenes Mahnwesen nötig |
| Kundenportal | Seit Januar 2024: Rechnungen, Einnahmen und Ausgaben, Auswertungen, Unterlagen für den Sicherstellungszuschlag ([Aktuelles](https://www.hebset.de/aktuelles/)) | Keine eigene EÜR oder Umsatzauswertung im MVP, nur ein Link ins Portal |
| Kartenlesen | Eigene Handy-App mit mobilem Kartenleser | eGK-Lesen in der Web-App entfällt |
| QM | Kooperation mit Qualitas: fertiges QM-Handbuch und Auditbogen, für HebSet-Kundinnen 790 € im ersten Jahr, danach 410 € pro Jahr ([Qualitas](https://www.qualitas-hebamme.de/leistungen/rsp-hebset/)) | QM-Modul der App kann schlank bleiben |
| Betreuung | Jede Hebamme hat eine feste Ansprechpartnerin ([Über uns](https://www.hebset.de/ueber-uns/)) | – |

### Ablauf mit der App

Wie weit sich der Weg digitalisieren lässt, hängt davon ab, ob HebSet digital unterschriebene Belege annimmt. Das Konzept sieht daher zwei Stufen vor:

- **Stufe A (sofort möglich):** Die App druckt zu Betreuungsbeginn den HebSet-Bogen mit Kopfdaten vor (Name, Kasse, Versichertennummer, ET). Die Frau unterschreibt wie bisher pro Besuch auf Papier. Am Monatsende gleicht die App die Dokumentation mit den Einträgen ab, erinnert an fehlende Unterschriften, erstellt den Zusatzbogen und den Pool-Nachweis und markiert alles als „eingereicht“.
- **Stufe B (Ziel):** Die Frau unterschreibt auf dem Tablet; die App erzeugt den vollständig ausgefüllten, unterschriebenen Bogen als PDF zum Upload ins HebSet-Portal – oder nutzt die elektronische Leistungsbestätigung (eLB), falls HebSet sie unterstützt.

In beiden Stufen gleicht die Hebamme Auszahlungen und Rückläufer aus dem HebSet-Portal in der App ab; offene Posten erscheinen im Heute-Cockpit.

### Mit HebSet zu klären

- [ ] Nimmt HebSet digital unterschriebene PDFs oder Uploads über das Kundenportal statt Papier-Originalen an?
- [ ] Unterstützt HebSet die elektronische Leistungsbestätigung (eLB)?
- [ ] Gibt es ein Datenformat oder eine Schnittstelle (CSV, XML, API) für Leistungsdaten und für den Rückimport von Zahlungen?
- [ ] Darf die App die personalisierten Bögen im HebSet-Layout selbst erzeugen und drucken?
- [ ] Welche Angaben braucht die Pool-Aufteilung (Stunden, Dienste, Kilometer) und in welcher Form?
- [ ] Konditionen: Gebühr, Auszahlungsrhythmus, Vorfinanzierung
- [ ] Datenschutz: Auftragsverarbeitungsvertrag und Schweigepflichtentbindung der Frauen für die Abrechnung (Baustein im Behandlungsvertrag)

* [ ] Wie werden Vertretungsleistungen einer Kollegin auf den Bögen gekennzeichnet?

## Neue Module

Zwei Module bilden den Kern der eigenen App: die automatische Tagesroute und die Baby-Urkunde. Dazu kommen sieben weitere Ideen, die es so bei Hebamio nicht gibt.

### Automatische Routenplanung

Die App berechnet für jede Hebamme die beste Besuchsreihenfolge des Tages zwischen einem frei wählbaren Start- und Endpunkt und hält dabei feste Zeiten ein.

**Eingaben**

- **Startpunkt** und **Endpunkt** pro Tag, aus gespeicherten Orten wählbar („Zuhause“, „Praxis“, „Schule Tochter“, „Kita“) oder frei; Standard pro Wochentag hinterlegbar (z. B. Di + Do: Ende Schule 13:15).
- **Ankunftsfenster am Endpunkt** („spätestens 13:10 an der Schule“) – wird als harte Bedingung behandelt.
- **Besuche** mit Dauer (aus Besuchstyp, z. B. Wochenbett 45 min, Erstbesuch 75 min) und optionalem Zeitfenster („nicht vor 10 Uhr“, „Stillberatung zur Mittagsmahlzeit“) oder fixer Uhrzeit.
- **Puffer** zwischen Terminen (Standard 10 min) und Parkzuschlag für Innenstadt-Adressen (Frankfurt!).
- **Pausen** und private Termine als Blocker.

**Ablauf**

1. Am Vorabend (oder morgens) öffnet die Hebamme „Morgen planen“; alle fälligen Wochenbettbesuche werden vorgeschlagen.
2. Die App berechnet die Route (Fahrzeiten mit Verkehrsprognose für die Uhrzeit) und zeigt Karte, Zeitleiste und Gesamtkilometer.
3. Die Hebamme verschiebt bei Bedarf per Drag-and-drop; die App rechnet live nach und warnt, wenn der Endpunkt nicht mehr pünktlich erreicht wird.
4. Mit „Route bestätigen“ erhalten die Familien optional eine SMS/Nachricht mit Zeitfenster („Ihre Hebamme kommt zwischen 9:30 und 10:00“).
5. Unterwegs: ein Tipp startet die Navigation (Apple/Google Maps, Waze); bei Verspätung passt die App die folgenden Ankunftszeiten an und bietet an, die nächste Familie zu informieren.
6. Gefahrene Strecken fließen automatisch ins Fahrtenbuch und in die Wegegeld-Abrechnung.

**Zusatzfunktionen**

- **Praxis-Modus:** Neue Wochenbett-Anfragen werden der Hebamme vorgeschlagen, deren bestehende Touren am besten passen (Umweg in Minuten).
- **Notfall-Einschub:** „Dringender Besuch jetzt“ – die App zeigt, welche Kollegin am schnellsten vor Ort wäre und wie sich die eigene Route verschiebt.
- **Wochenansicht:** Kilometer und Fahrzeit pro Tag, um Touren auszubalancieren.

**Technik:** Optimierung als „Vehicle Routing Problem mit Zeitfenstern“. Mögliche Dienste: Google Routes API (Route Optimization), HERE Tour Planning, Mapbox Optimization oder selbst gehostet mit OpenRouteService/VROOM + OSRM. Datenschutz: nur Koordinaten und Zeiten an den Dienst senden, nie Namen oder Gesundheitsdaten; selbst gehostete Variante bevorzugen.

### Baby-Urkunde zum Betreuungsende

Wenn die Hebammenbetreuung endet (in der Regel 12 Wochen nach Geburt, länger bei Stillproblemen oder ärztlicher Anordnung), schlägt die App automatisch eine persönliche Urkunde für das Kind vor.

**Ablauf**

1. Die App erkennt das nahende Betreuungsende (berechnet aus Geburtsdatum und letzter Leistung) und zeigt eine Aufgabe „Abschluss & Urkunde“.
2. Beim Abschlussbesuch tippt die Hebamme auf „Urkunde erstellen“; Daten werden aus der Akte übernommen.
3. Die Hebamme wählt eine Vorlage (z. B. Aquarell, Sternenhimmel, schlicht) und eine Textvariante; der Text ist frei editierbar, optional mit KI-Vorschlag auf Basis der Notizen („Liebt Fliegerhaltung“).
4. Vorschau auf dem Tablet – die Familie kann gleich mitschauen.
5. Ausgabe als druckfertiges PDF (A4/A5), per E-Mail oder im Familienportal; optional unterschrieben mit digitaler Unterschrift und Praxisstempel.

**Inhalt der Urkunde**

- Kopfzeile: „Urkunde über eine wunderbare erste Zeit“, Praxislogo
- Name des Kindes, Geburtsdatum, Uhrzeit, Geburtsort, Name der Hebamme
- Optional: Fuß- oder Handabdruck (Foto-Upload), Foto des Babys
- Persönlicher Text (Beispiel unten)
- Tabelle mit Messwerten der Betreuungszeit
- Unterschrift der Hebamme, Datum

**Beispieltext:**

> Liebe Mila, am 14. Juni 2026 um 6:42 Uhr bist du mit 3.380 Gramm und 51 Zentimetern auf die Welt gekommen. In den ersten zwölf Wochen durfte ich dich und deine Eltern begleiten – beim ersten Baden, beim Stillen-Lernen und bei so mancher kurzen Nacht. Heute wiegst du schon 5.640 Gramm und schaust neugierig in die Welt. Es war mir eine Freude, dich ein Stück auf deinem Weg zu begleiten. Alles Liebe, deine Hebamme Sarah

**Beispieltabelle (aus den Messwerten erzeugt):**

| Datum | Alter | Gewicht (g) | Länge (cm) | Kopfumfang (cm) | Besonderheit |
| --- | --- | --- | --- | --- | --- |
| 14.06.2026 | Geburt | 3.380 | 51 | 35 | Hallo Welt! |
| 17.06.2026 | 3 Tage | 3.150 | – | – | Erster Hausbesuch |
| 24.06.2026 | 10 Tage | 3.420 | – | – | Geburtsgewicht wieder erreicht |
| 14.07.2026 | 1 Monat | 4.250 | 54 | 37 | Erstes Lächeln |
| 06.09.2026 | 12 Wochen | 5.640 | 59 | 39,5 | Abschied von der Hebamme |

Die App wählt automatisch die aussagekräftigsten Zeilen (Geburt, Tiefstwert, Geburtsgewicht wieder erreicht, Monatswerte, letzter Besuch) und eine kleine Wachstumskurve. Meilensteine kann die Hebamme bei jedem Besuch mit einem Tipp markieren.

### Vertretung und Übergabe

Jede Hebamme hat ihre eigenen Betreuten; bei Urlaub oder Krankheit übergibt sie einzelne oder alle an Kolleginnen – mit Briefing, zeitlich begrenztem Zugriff und automatischer Rückgabe.

**Grundprinzip**

- Jede Betreute hat eine **Hauptbetreuerin**; im Kalender sehen alle drei die Termine der Praxis, die Akte aber nur die Hauptbetreuerin und eine aktive Vertretung.
- Im Behandlungsvertrag willigt die Familie ein, dass im Vertretungsfall eine Kollegin der Praxis Zugriff erhält (Baustein „Praxisteam“).
- Eine Vertretung hat immer Zeitraum, Vertreterin und Grund; sie endet automatisch, danach ist der Zugriff wieder zu.
- Was die Vertreterin dokumentiert, steht unter ihrem Namen in der Akte und zählt im Pool-Nachweis für HebSet zu ihren Stunden und Kilometern.

**Geplante Vertretung (Urlaub, Fortbildung)**

1. Hebamme trägt den Abwesenheitszeitraum ein; die App listet alle Betreuten mit Besuchen in dieser Zeit.
2. Die App schlägt pro Betreute eine Vertreterin vor – nach Wohnort (Umweg in den bestehenden Routen) und Auslastung; per Drag-and-drop änderbar.
3. Pro Betreute füllt die Hebamme ein kurzes **Übergabe-Briefing**: „Was ist wichtig?“ (z. B. Stillprobleme, Familie spricht wenig Deutsch, Hund im Haus), offene Punkte, nächster geplanter Besuch.
4. Die Kolleginnen bestätigen die Übernahme; erst dann wird der Zugriff aktiv. Die Familie bekommt optional eine Nachricht: „Vom 5. bis 16. Oktober besucht Sie Lena Hoffmann.“
5. Bei Rückkehr zeigt die App eine **Rückgabe-Zusammenfassung**: alle Besuche, Messwerte und Hinweise aus der Vertretungszeit.

**Ungeplante Vertretung (Krankheit)**

1. Ein Tipp auf „Ich falle heute aus“ (auch vom Handy, auch von einer Kollegin für sie auslösbar).
2. Die App verteilt die heutigen Besuche auf die beiden Kolleginnen so, dass deren Routen möglichst wenig wachsen – und zeigt, was sich nicht mehr unterbringen lässt (Vorschlag: verschieben oder telefonisch).
3. Die Kolleginnen bestätigen mit einem Tipp; Briefings stammen aus der letzten Dokumentation automatisch (letzter Besuch, Warnhinweise, offene Aufgaben).
4. Die Familien werden informiert; die Vertretung läuft bis zur Gesundmeldung.

**Abrechnung:** Leistungen der Vertreterin laufen auf ihren Namen. Bei der Pool-Abrechnung über HebSet ist das unkritisch, weil die Aufteilung nach geleisteten Stunden erfolgt – trotzdem mit HebSet klären, wie Vertretungsleistungen auf den Bögen gekennzeichnet werden.

### Weitere Ideen

| Idee | Nutzen | Prio |
| --- | --- | --- |
| Spracheingabe & KI-Zusammenfassung | Notizen diktieren, App strukturiert sie in Doku-Felder; Hebamme prüft und bestätigt (lokal oder EU-gehostetes Modell) | 2 |
| Familienportal | Termine, Hebammen-Infoblätter (Stillen, Nabelpflege), Wachstumskurve, Urkunde, sichere Nachrichten statt WhatsApp | 2 |
| Vertretungs-Übergabe | Siehe Abschnitt „Vertretung und Übergabe“ oben | M |
| Kapazitätsplanung | Kalender der ET-Termine pro Monat und Hebamme; zeigt freie Plätze für Neuanmeldungen | M |
| Erinnerungen & Checklisten | U-Untersuchungen, Vitamin-K/D, Hebammenhilfe-Fristen, Wiedervorlagen | 2 |
| Materialverwaltung | Verbrauch in der Hebammentasche (Waagenkalibrierung, Teststreifen, Ablaufdaten) | 3 |
| Feedback der Familien | Kurzumfrage zum Betreuungsende, Grundlage für QM und Google-Bewertungen | 3 |

## UX- und Designkonzept

Das Tablet ist das Hauptgerät für Dokumentation beim Hausbesuch; das Handy dient unterwegs für Route, schnelle Notizen und Kalender. Ein responsives Layout passt sich an beide an.

### Layout nach Gerät

| Gerät | Layout | Hauptsächlich für |
| --- | --- | --- |
| Tablet quer (10–13″) | Seitenleiste mit Modulen links, Liste in der Mitte, Detail rechts (3 Spalten) | Dokumentation, Akte, Wochenplanung, Abrechnung |
| Tablet hoch | 2 Spalten (Liste + Detail), Seitenleiste einklappbar | Dokumentation auf dem Schoß, Unterschrift der Familie |
| Handy | Untere Tab-Leiste (Heute, Route, Betreute, Kalender, Mehr), 1 Spalte | Route, Navigation, Schnellnotiz, Anruf |

### Gestaltungsprinzipien

- **Große Touch-Ziele:** mindestens 48 px, wichtige Aktionen in Daumenreichweite; Einhandbedienung auf dem Handy.
- **Schnellerfassung:** Werte über Stepper und Slider (Gewicht in 5-g-Schritten), Ja/Nein-Kacheln, Textbausteine; Vorwert sichtbar mit Differenz („+180 g seit Dienstag“).
- **Ein Besuch = ein Bildschirm:** alle Felder eines Besuchstyps scrollbar auf einer Seite, Pflichtfelder markiert, „Abschließen“ erst wenn vollständig.
- **Apple Pencil / Stylus:** Unterschriften, Skizzen (z. B. Lage, Naht), handschriftliche Notizen mit Texterkennung.
- **Ruhige, warme Gestaltung:** helle Hintergründe, ein Akzentton, Dunkelmodus für nächtliche Rufbereitschaft; Warnungen dezent, aber eindeutig.
- **Diskretion:** Datenschutz-Modus blendet Namen auf dem Handy-Sperrbildschirm und in Benachrichtigungen aus; Bildschirmsperre nach 2 Minuten, Entsperren per Passkey (Face ID / Fingerabdruck).

### Offline-Fähigkeit

Die App arbeitet „offline first“: Der Tagesbedarf (Betreute der Route, Vorlagen, letzte Messwerte) liegt verschlüsselt auf dem Gerät; Einträge werden sofort lokal gespeichert und synchronisiert, sobald Netz da ist. Ein Statussymbol zeigt „Alles gesichert“ oder „3 Einträge warten“. Konflikte (zwei Hebammen ändern dieselbe Akte) werden feldweise zusammengeführt und im Zweifel zur Auswahl angezeigt.

### Umsetzung als Web-App (PWA)

Die App läuft im Browser und wird auf Tablet und Handy über „Zum Home-Bildschirm“ installiert; danach startet sie im Vollbild wie eine normale App. Updates stehen sofort allen zur Verfügung – ohne App-Store, ohne Prüfung, ohne Entwicklerkonto.

| Thema | Was im Browser geht | Worauf achten |
| --- | --- | --- |
| Installation | iPad/iPhone: Teilen → „Zum Home-Bildschirm“; Android: Installationshinweis in Chrome | Bei der Einrichtung einmal gemeinsam installieren; die App immer über das Home-Symbol öffnen, nicht im Browser-Tab |
| Offline | Service Worker cacht die App, IndexedDB hält die Daten | Safari kann Daten von Webseiten, die nicht installiert sind, nach etwa 7 Tagen ohne Nutzung löschen – installierte Web-Apps sind davon ausgenommen; zusätzlich dauerhaften Speicher anfragen und den Sync-Status sichtbar machen |
| Push-Benachrichtigungen | Web Push; auf iPad/iPhone ab iOS 16.4 für installierte Web-Apps | Keine Namen oder Gesundheitsdaten im Benachrichtigungstext |
| Anmeldung | Passkeys (WebAuthn) mit Face ID oder Fingerabdruck | Zweites Gerät oder Wiederherstellungscode als Backup |
| Stift und Unterschrift | Pointer Events mit Druckstärke, Unterschriftsfeld per Canvas | Handballen-Erkennung auf dem iPad testen |
| Kamera | Fotos und Dokumente direkt aus der App | Bilder verschlüsselt in der App speichern, nicht in der Fotomediathek |
| Standort | Geolocation für „Ankunft melden“ und Verspätungsberechnung | Nur bei geöffneter App – keine Ortung im Hintergrund |
| Kartenleser/NFC | Auf dem iPad nicht möglich | Siehe Schnittstellen |

Folge für die Routenplanung: Weil eine Web-App den Standort nicht im Hintergrund verfolgen kann, entsteht das Fahrtenbuch aus der bestätigten Route plus einem Tipp auf „Ankunft melden“ je Besuch – das reicht für Wegegeld und Kilometernachweis.

### Zentrale Bildschirme

1. **Heute** – Zeitleiste mit Route, nächster Besuch groß mit „Navigation starten“ und „Ankunft melden“.
2. **Besuch** – Kopf mit Mutter/Kind und Warnhinweisen, darunter Doku-Kacheln, unten „Unterschrift & Abschließen“.
3. **Akte** – Zeitstrahl aller Kontakte, Wachstumskurve, Dokumente, Leistungsübersicht.
4. **Planung** – Karte + Wochenkalender, Drag-and-drop zwischen Tagen und Kolleginnen.
5. **Abschluss** – Checkliste zum Betreuungsende inkl. Urkunde und Feedback-Link.

## Technik, Datenschutz und Schnittstellen

Empfohlen ist eine Progressive Web App für iPad, Android-Tablets und Handys mit verschlüsselter Offline-Datenbank im Browser und einem in Deutschland gehosteten Backend; Karten und Routen laufen über einen selbst betriebenen Routing-Dienst.

### Empfohlener Technik-Stack

| Baustein | Empfehlung | Alternative | Begründung |
| --- | --- | --- | --- |
| Web-App | PWA mit React (Next.js oder Vite) oder SvelteKit, responsives Layout | Flutter Web | Eine Codebasis für alle Geräte, sofortige Updates, kein App-Store |
| Offline-Daten | IndexedDB (z. B. Dexie oder RxDB), verschlüsselt per Web Crypto API, Service Worker | SQLite im Browser (wa-sqlite mit OPFS) | Offline first, schnelle Suche |
| Synchronisation | PowerSync oder ElectricSQL mit Postgres | Eigene Sync-Logik mit Änderungsprotokoll | Konflikte feldweise lösen |
| Backend | Supabase (Postgres) selbst gehostet bei Hetzner/IONOS in Deutschland | Eigenes Node/NestJS + Postgres | Auth, Rollenrechte (Row Level Security), Dateispeicher |
| Routing | VROOM + OSRM/OpenRouteService selbst gehostet | Google Route Optimization API (AVV nötig) | Keine Gesundheitsdaten an Dritte |
| Karten | MapLibre GL JS mit eigenen oder EU-Kartenkacheln | Google Maps JS | Datensparsam, keine Tracking-Cookies |
| PDF | Server-seitige Vorlagen (z. B. Typst oder HTML → PDF) | Clientseitig (pdf-lib) | Urkunde, Rechnungen, Akten-Export |
| KI (optional) | EU-gehostetes Sprachmodell mit AVV, Spracherkennung serverseitig (z. B. Whisper selbst gehostet) | Diktierfunktion der Tastatur | Diktat, Urkundentext |

### Datenschutz und Sicherheit

- [ ] Verschlüsselung: TLS bei Übertragung, AES-256 auf dem Server, verschlüsselte IndexedDB auf dem Gerät; Schlüssel wird erst nach dem Entsperren abgeleitet und nie im Klartext im Browser gespeichert
- [ ] Anmeldung mit Zwei-Faktor, Passkeys mit Face ID/Fingerabdruck, automatische Sperre, Fernabmeldung bei Geräteverlust (lokale Daten werden beim nächsten Online-Kontakt gelöscht und sind ohne Schlüssel unlesbar)
- [ ] Rollen- und Rechtekonzept: Hebamme sieht eigene Betreute, Vertretung zeitlich begrenzt
- [ ] Audit-Log für jeden Lese- und Schreibzugriff auf Akten
- [ ] Verzeichnis der Verarbeitungstätigkeiten, Datenschutz-Folgenabschätzung, AVV mit Hosting-, Routing-, E-Mail/SMS- und KI-Anbietern
- [ ] Einwilligungen der Familien (Familienportal, Fotos, Nachrichten) digital erfassen und widerrufbar machen
- [ ] Backups täglich, verschlüsselt, an zweitem deutschen Standort; Wiederherstellung regelmäßig testen
- [ ] Lösch- und Archivierungskonzept nach Ablauf der Aufbewahrungsfrist

### Schnittstellen

| Schnittstelle | Zweck | Phase | Hinweis |
| --- | --- | --- | --- |
| HebSet (Abrechnungspartner) | Kassenabrechnung nach § 302 SGB V | MVP | Start mit vorbefüllten PDF-Bögen; Datenexport, sobald HebSet ihn annimmt |
| Kalender (ICS/CalDAV) | Termine in Google/Apple/Outlook | MVP | Nur Initialen statt Namen exportieren |
| Navigation (Deep Links) | Apple Maps, Google Maps, Waze | MVP | Keine Datenübertragung nötig |
| E-Mail/SMS (EU-Anbieter) | Terminhinweise, Rechnungen, Urkunde | MVP | Gesundheitsinfos nicht in Klartext-Mails |
| Versichertenkarte (NFC/Kartenleser) | Stammdaten einlesen | 2 | Im Browser kaum möglich (Web NFC nur Android/Chrome, nicht auf dem iPad); einfachste Lösung: Handy-App mit mobilem Kartenleser von HebSet; sonst Foto der Karte + Texterkennung oder Kartenleser am Praxis-PC mit kleiner Hilfssoftware |
| Steuer/Buchhaltung (DATEV-Export, lexoffice) | EÜR, Belege | 3 |  |
| Telematikinfrastruktur (KIM, ePA, eMutterpass) | Austausch mit Ärzten, Kliniken | 3 | Für Hebammen derzeit freiwillig; nur über zertifizierte TI-Dienstleister realistisch |

## Roadmap, Aufwand und Risiken

Empfehlung: in vier Phasen bauen und Hebamio erst kündigen, wenn die eigene App mindestens vier Wochen parallel ohne Datenverlust und mit funktionierender Abrechnung gelaufen ist.

&#91;embedded content: Roadmap · 4 Phasen, 3 Entscheidungspunkte\]

Das MVP (hervorgehoben) enthält bereits beide Wunschfunktionen – Tagesroute und Baby-Urkunde; die Kassenabrechnung läuft von Anfang an über HebSet.

### Geschätzter Aufwand und Kosten

| Posten | Grobschätzung | Hinweis |
| --- | --- | --- |
| Phase 0 + MVP | 450–650 Entwicklerstunden | Eine erfahrene Person in Teilzeit: ca. 5 Monate |
| Phase 2 | 250–400 Stunden |  |
| Externe Vergabe MVP | ca. 40.000–80.000 € | Abhängig von Agentur/Freelancer |
| Hosting, Backup, Routing-Server | ca. 40–80 €/Monat | Deutsches Rechenzentrum |
| Domain | ca. 10–20 €/Jahr | Kein App-Store-Konto nötig |
| Abrechnungsdienstleister | laut HebSet-Vertrag (nicht öffentlich) | Zum Vergleich: AZH nimmt 3,6–3,8 % vom Rechnungsbetrag zzgl. USt |
| Wartung | 5–10 Stunden/Monat | Updates, Tarifänderungen, Betriebssysteme |

Zum Vergleich: Hebamio kostet die Praxis rund 1.200 € pro Jahr. Finanziell lohnt sich die eigene App also nur, wenn die Entwicklung privat erfolgt – der eigentliche Gewinn ist Zeit im Alltag und eine App, die genau zur Praxis passt.

### Build oder Buy

| Option | Vorteile | Nachteile |
| --- | --- | --- |
| Komplett selbst bauen (inkl. Kassenabrechnung) | Volle Kontrolle | Abrechnungsregeln ändern sich laufend, hohes Haftungs- und Pflegerisiko |
| **Eigene App + HebSet (gewählt)** | Alltag optimal abgebildet, Abrechnung bleibt sicher | Belege gehen anfangs als Papier-Original an HebSet |
| Hebamio behalten + Zusatz-App (nur Route und Urkunde) | Schnell (ca. 2 Monate), geringes Risiko | Doppelte Datenpflege, Hebamio hat keine offene API – vorab anfragen |

### Risiken

| Risiko | Auswirkung | Gegenmaßnahme |
| --- | --- | --- |
| Datenpanne mit Gesundheitsdaten | Sehr hoch (Meldepflicht, Bußgeld, Vertrauen) | Sicherheitskonzept, externer Datenschutz-Check vor Go-live |
| Unvollständige Dokumentation | Haftung der Hebammen | Standards und Pflichtfelder mit Hebammen erarbeiten, Gegenprüfung durch erfahrene Kollegin |
| Abrechnungsfehler | Einnahmeausfall | Positionskontrolle durch HebSet vor Rechnungsstellung, Parallelbetrieb |
| Abhängigkeit von einer Person (Entwickler) | App steht bei Ausfall still | Saubere Doku, Standard-Technik, Datenexport jederzeit möglich |
| Akzeptanz im Team | App wird nicht genutzt | Hebammen ab Phase 0 einbinden, Prototyp im echten Hausbesuch testen |

### Nächste Schritte

- [ ] Mit allen drei Hebammen einen typischen Tag und die größten Ärgernisse mit Hebamio aufnehmen
- [ ] Datenexport aus Hebamio anfragen (Format, Umfang) – wichtig für die Migration
- [ ] Offene Punkte mit der HebSet-Ansprechpartnerin klären (siehe Abschnitt HebSet)
- [ ] Klick-Prototyp für „Heute“, „Besuch“ und „Urkunde“ auf dem Tablet bauen und testen
- [ ] Datenschutz-Beratung (z. B. über den Hebammenverband) zum Konzept einholen

## Quellen

- [Hebamio – Startseite und FAQ](https://www.hebamio.de/)
- [Hebamio – Angebot und Preise](https://www.hebamio.de/angebot/)
- [Hebamio – Hebammenpraxen](https://www.hebamio.de/hebammenpraxen/)
- [Hebamio – FAQ](https://www.hebamio.de/faq/)
- [Hebamio+ im App Store](https://apps.apple.com/de/app/hebamio/id1614247878)
- [Hebamio – Funktionen von A–Z (österreichische Version)](https://www.hebamio.com/funktionen.html)
- [Interview Corinna Zimmermann zu Hebamio](https://www.hebamio.de/hebamme-corinna-zimmermann-im-interview-mein-start-mit-hebamio/)
- [e-health-com: Erste Hebamme an mobiler TI (Hebamio + slis)](https://e-health-com.de/details-unternehmensnews/erste-hebamme-an-die-mobile-telematikinfrastruktur-angeschlossen/)
- [Optica: Telematikinfrastruktur für Hebammen](https://www.optica.de/wissenswert/detail/telematikinfrastruktur-geburtshilfe)
- [Handelsblatt: Keine TI-Pflicht für Hebammen](https://www.handelsblatt.com/technik/medizin/inside-digital-health/telematikinfrastruktur-die-datenautobahn-ti-funktioniert-noch-ohne-hebammen/100142209.html)
- [GKV-Spitzenverband: Änderungsvereinbarung Hebammenhilfevertrag (03/2026)](https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung_1/ambulante_leistungen/hebammen/aktuelle_dokumente/Hebammenhilfevertrag_AendV_26-03-16.pdf)

* [HebSet – Startseite](https://www.hebset.de/)
* [HebSet – Abrechnungsservice](https://www.hebset.de/abrechnungsservice/)
* [HebSet – Zubehör](https://www.hebset.de/zubehoer/)
* [HebSet – Aktuelles (Kundenportal)](https://www.hebset.de/aktuelles/)
* [HebSet – Über uns](https://www.hebset.de/ueber-uns/)
* [Qualitas – Rundum-Sorglos-Paket für HebSet-Kundinnen](https://www.qualitas-hebamme.de/leistungen/rsp-hebset/)
* [Hebammen AZH – Abrechnung für Hebammenteams (Preisvergleich)](https://hebammen-azh.de/leistungen/hebammenteam/abrechnung)
