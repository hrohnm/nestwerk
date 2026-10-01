# Nestwerk – Klick-Prototyp (POC)

Klickbarer Prototyp für das Tablet im Querformat (iPad 11″, 1194 × 834) nach dem [Design-Briefing](../docs/Design-Briefing_Nestwerk.md). Reines HTML/CSS/JS ohne Build-Schritt.

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

Außerdem: Übernahmen von Lena bestätigen (Banner „Ansehen“), Vertretung für Miriam bei Familie Nguyen, Antippen einzelner Stopps in der Route, Dunkelmodus, Sperrbildschirm „Wer arbeitet gerade?“ (Avatar oben rechts). Route, Betreute, Kalender und Praxis sind Platzhalter.

Tipp zum Ausprobieren der Warnung: im Besuch bei Mila das Gewicht auf unter 3.042 g senken (> 10 % Verlust).

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Einstieg, lädt Schriften (Nunito Sans, Fraunces) |
| `styles.css` | Design-Tokens hell/dunkel und alle Komponenten |
| `data.js` | Beispieldaten aus dem Briefing (Stichtag 1. Oktober 2026) |
| `app.js` | Zustand, Screens und Interaktionen |
| `assets/logo.png` | Praxislogo |
