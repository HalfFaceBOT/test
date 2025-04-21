window.onload = function () {
    const soldat = document.getElementById("soldat");
    const container = document.getElementById("spiel-container");

    // Bild ausblenden, bevor es positioniert wird
    soldat.style.display = "none";

    // 🔧 EINSTELLUNGEN – Größe
    const width = 50;
    const height = 50;

    // Zufälliger left-Wert (zwischen 10% und 80% der Containerbreite)
    const leftPercent = Math.random() * (0.8 - 0.1) + 0.1;
    const left = container.offsetWidth * leftPercent;

    // Fester top-Wert (68% der Containerhöhe)
    const top = container.offsetHeight * 0.68;

    // Größe setzen
    soldat.style.width = width + "px";
    soldat.style.height = height + "px";

    // Position setzen
    soldat.style.left = left + "px";
    soldat.style.top = top + "px";

    // Bild anzeigen
    setTimeout(() => {
        soldat.style.display = "block";
    }, 10);
};
