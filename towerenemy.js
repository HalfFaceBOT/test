function createTowerEnemy(x = 20, y = 10) {
    const img = document.createElement('img');
    img.src = 'towerenemy.png';
    img.id = 'tower-enemy';
    img.style.position = 'absolute';
    img.style.top = `${y}vh`;  // Position in % der Höhe des Viewports
    img.style.left = `${x}vw`; // Position in % der Breite des Viewports
    img.style.width = '80px';   // Feste Größe des Turms
    img.style.zIndex = 10;

    const container = document.getElementById('spiel-container');
    container.appendChild(img);
}

window.onload = () => {
    createTowerEnemy(20, 10); // Beispielwerte anpassen
};
