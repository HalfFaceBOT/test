function createTowerEnemy(x = 100, y = 100) {
    const img = document.createElement('img');
    img.src = 'towerenemy.png';
    img.id = 'tower-enemy';
    img.style.position = 'absolute';
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
    img.style.width = '80px';
    img.style.zIndex = 10;

    const container = document.getElementById('spiel-container');
    container.appendChild(img); // ← jetzt relativ zum Spielbereich
}

window.onload = () => {
    createTowerEnemy(200, 50); // Werte ggf. anpassen
};
