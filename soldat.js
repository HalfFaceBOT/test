window.onload = function () {
    const soldat = document.getElementById("soldat");
    const container = document.getElementById("spiel-container");

    soldat.style.display = "none";  // Bild zuerst unsichtbar machen

    // Berechne die Größe des Soldaten basierend auf der Bildschirmgröße
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Auf mobilen Geräten (kleinere Bildschirme) wird der Soldat größer
    const width = screenWidth < 768 ? screenWidth * 0.15 : 50;   // 15% der Bildschirmbreite auf Mobilgeräten, sonst 50px
    const height = screenHeight < 768 ? screenHeight * 0.1 : 50;  // 10% der Bildschirmhöhe auf Mobilgeräten, sonst 50px

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
