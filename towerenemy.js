function createTowerEnemy(x = 20, y = 10) {
    const img = document.createElement('img');
    img.src = 'towerenemy.png';
    img.id = 'tower-enemy';
    img.style.position = 'absolute';
    img.style.top = `${y}vh`; // Korrekt formatierter Template-String
    img.style.left = `${x}vw`; // Korrekt formatierter Template-String
    img.style.width = '80px';  // Feste Größe des Turms bleibt erhalten
    img.style.zIndex = 10;

    const container = document.getElementById('spiel-container');
    container.appendChild(img); // Bild wird relativ zum Spielbereich hinzugefügt
}

window.onload = () => {
    createTowerEnemy(18.75, 10); // Beispielwerte anpassen
};
