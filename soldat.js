window.onload = function () {
    const soldat = document.getElementById("soldat");
    const container = document.getElementById("spiel-container");

    soldat.style.display = "none";  // Bild zuerst unsichtbar machen

    // Berechne die Größe des Soldaten basierend auf der Bildschirmgröße
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Auf mobilen Geräten (kleine Bildschirme) wird der Soldat kleiner
    const width = screenWidth < 768 ? 40 : 80;  // 40px auf kleinen Geräten, sonst 80px
    const height = screenHeight < 768 ? 40 : 80;  // 40px auf kleinen Geräten, sonst 80px

    // Berechne die Position des Soldaten
    const leftPercent = Math.random() * (0.8 - 0.1) + 0.1; // Zufällige Position von 10% bis 80% des Containers
    const left = Math.round(container.clientWidth * leftPercent); // Genauere Positionierung

    const top = Math.round(container.clientHeight * 0.68); // Immer 68% der Höhe des Containers

    // Setze die Größe des Soldaten
    soldat.style.width = width + "px";
    soldat.style.height = height + "px";

    // Setze die Position des Soldaten
    soldat.style.left = left + "px";
    soldat.style.top = top + "px";

    // Bild sichtbar machen
    setTimeout(() => {
        soldat.style.display = "block";
    }, 10);
};
