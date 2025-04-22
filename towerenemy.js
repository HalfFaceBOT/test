// towerenemy.js

function createTowerEnemy(x = 100, y = 100) {
    const img = document.createElement('img');
    img.src = 'towerenemy.png'; // Achte darauf, dass die Datei vorhanden ist
    img.id = 'tower-enemy';
    img.style.position = 'absolute';
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
    img.style.width = '80px'; // optional: Größe anpassen
    img.style.zIndex = 10;
  
    document.body.appendChild(img);
  }
  
  // Füge das Bild beim Laden der Seite ein
  window.onload = () => {
    createTowerEnemy(790, 50); // ← hier kannst du top/left ändern
  };
  