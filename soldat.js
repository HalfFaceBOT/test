window.onload = function() {
    const soldat = document.getElementById("soldat");

    // Bild unsichtbar machen, bevor es positioniert wird
    soldat.style.display = "none";  // Bild vorerst unsichtbar

    // 🔧 EINSTELLUNGEN – Hier kannst du alles anpassen:
    const width = 50;         // Breite in px
    const height = 50;        // Höhe in px
    const startTop = 650;     // Abstand von oben in px (immer gleich)
    
    // Zufällige `left`-Position im Bereich von 720 bis 1120
    const startLeft = Math.floor(Math.random() * (1120 - 720 + 1)) + 720;

    // Größe setzen
    soldat.style.width = width + "px";
    soldat.style.height = height + "px";

    // Position setzen
    soldat.style.left = startLeft + "px";
    soldat.style.top = startTop + "px";

    // Bild sichtbar machen, nachdem es positioniert wurde
    setTimeout(function() {
        soldat.style.display = "block";  // Bild nach der Positionierung sichtbar machen
    }, 10); // Verzögerung mit minimalem Wert (10 ms)
};
