# Nestwerk – Klick-Prototyp (POC)

Klickbarer Prototyp für die Hebammenpraxis Kindkesmöön in Bad Doberan, für das Tablet im Querformat (iPad 11″, 1194 × 834) nach dem [Design-Briefing](../docs/Design-Briefing_Nestwerk.md). Reines HTML/CSS/JS ohne Build-Schritt.

## Starten

`index.html` im Browser öffnen – oder lokal ausliefern:

```bash
cd prototype && python3 -m http.server 8000
# http://localhost:8000
```

## Durchklickbarer Ablauf

1. **Heute** – Tagesroute als Zeitleiste, nächster Besuch, offene Aufgaben, Sync-Status, Vertretungshinweis
2. **Navigation starten** – Auswahl Apple Karten / Google Maps / Waze
3. **Ankunft melden** – Fahrtenbuch-Eintrag, dann „Besuch dokumentieren“
4. **Besuch dokumentieren** – Stepper mit Vorwerten und Differenz, Auswahl-Kacheln, Textbausteine, Pflichtfelder, Gewichts-Hinweis/Warnung (live berechnet), Timer gegen das 60-Sekunden-Ziel
5. **Unterschrift** – Zusammenfassung der Leistung, Unterschriftsfeld (Finger/Stift/Maus), „Neu“ und „Bestätigen“
6. **Zurück zu Heute** – Besuch abgehakt, nächster Besuch steht oben

Außerdem: Übernahmen von Johanna bestätigen (Banner „Ansehen“), Vertretung für Johanna bei Familie Nguyen, Antippen einzelner Stopps in der Route, Dunkelmodus, Sperrbildschirm „Wer arbeitet gerade?“ (Avatar oben rechts). Route, Kalender und Praxis sind noch Platzhalter.

Tipp zum Ausprobieren der Warnung: im Besuch bei Mila das Gewicht auf unter 3.042 g senken (> 10 % Verlust).

## Betreute, Akte und Baby-Urkunde

- **Betreute** (Seitenleiste): eigene Betreute, Vertretungen und ausstehende Übernahmen
- **Akte** (aus der Liste oder über „Akte“ auf der Besuchskarte):
  - *Überblick* mit Wachstumskurve – in den ersten 14 Tagen mit Geburtsgewicht und den Grenzen −7 % / −10 %, danach mit Perzentilenband (vereinfacht) – sowie Stammdaten von Mutter und Kind
  - *Zeitstrahl* aller Kontakte mit Namen der jeweiligen Hebamme; abgeschlossene Einträge gesperrt
  - *Dokumente & HebSet* mit Status je Bogen (eingereicht, vollständig, Unterschrift fehlt)
  - Werte, die beim Besuch erfasst werden, erscheinen sofort in Kurve, Zeitstrahl und HebSet-Status
- **Baby-Urkunde** für Jonas Krüger (Aufgabe „1 Urkunde“ auf Heute oder „Urkunde erstellen“ in der Akte):
  - drei Vorlagen: Aquarell, Sternenhimmel, Schlicht
  - Text bearbeiten (Vorschau aktualisiert sich live), Vollbild für die Familie, E-Mail
  - **Drucken** erzeugt eine echte A4-Seite (im Druckdialog „Hintergrundgrafiken“ aktivieren)

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Einstieg, lädt Schriften (Nunito Sans, Fraunces) |
| `styles.css` | Design-Tokens hell/dunkel und alle Komponenten |
| `data.js` | Beispieldaten: echtes Team, erfundene Familien in Bad Doberan und Umgebung (Stichtag 1. Oktober 2026) |
| `app.js` | Zustand, Heute, Besuch, Unterschrift und Interaktionen |
| `akte-data.js` | Akten- und Urkunden-Daten (erfunden) |
| `akte.js` | Betreute, Akte mit Wachstumskurve, Baby-Urkunde und Druck |
| `assets/logo.png` | Praxislogo |
