window.onload = function () {
    const soldat = document.getElementById("soldat");
    const container = document.getElementById("spiel-container");
  
    soldat.style.display = "none";  // Bild zuerst unsichtbar machen
  
    const width = 50;              // Breite des Soldaten
    const height = 50;             // Höhe des Soldaten
  
    // Berechne die Position auf Basis der genauen Container-Größe
    const leftPercent = Math.random() * (0.8 - 0.1) + 0.1; // Zufällige % von 10% bis 80%
    const left = Math.round(container.clientWidth * leftPercent); // Genauere Positionierung
  
    // Berechne die `top`-Position und passe sie an, wenn nötig
    const top = Math.round(container.clientHeight * 0.68); // Basiswert 68%
    
    // Mögliche Korrektur für mobile Geräte, falls es immer noch zu weit unten ist
    const correction = 5; // Dieser Wert kann je nach Bedarf angepasst werden
    const adjustedTop = top - correction;
  
    // Setze die Größe des Soldaten
    soldat.style.width = width + "px";
    soldat.style.height = height + "px";
  
    // Setze die Position des Soldaten
    soldat.style.left = left + "px";
    soldat.style.top = adjustedTop + "px";
  
    // Bild sichtbar machen
    setTimeout(() => {
      soldat.style.display = "block";
    }, 10);
  };
  