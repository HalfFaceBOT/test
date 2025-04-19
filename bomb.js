let bombCount = 0;
const maxBombs = 3;
let downFinished = false; // Flag, das angibt, ob der Countdown abgelaufen ist

// Event-Listener für Klicks, um Bomben zu platzieren
document.addEventListener("click", function (e) {
  // Wenn der Countdown abgelaufen ist, können keine neuen Bomben mehr platziert werden
  if (bombCount >= maxBombs || downFinished) return;

  const bomb = document.createElement("img");
  bomb.src = "bomb.png";  // Bild der Bombe
  bomb.style.position = "absolute";
  bomb.style.width = "30px"; // Größe der Bombe
  bomb.style.height = "40px";
  bomb.style.left = `${e.pageX - 20}px`; // Positionierung nach dem Klick (zentriert)
  bomb.style.top = `${e.pageY - 20}px`;
  document.body.appendChild(bomb); // Füge die Bombe zum Body der Seite hinzu

  bombCount++; // Erhöhe die Anzahl der Bomben
});

// Diese Funktion wird nach Ablauf des Countdowns aufgerufen
function stopBombPlacement() {
  downFinished = true; // Setze das Flag, um das Platzieren von Bomben zu verhindern
}
