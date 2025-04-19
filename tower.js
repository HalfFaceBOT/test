// tower.js

// Funktion, um das Bild zu laden und an einer bestimmten Position anzuzeigen
function loadTowerImage() {
    // Bildquelle
    const imgSrc = 'tower.png';

    // Variablen für die Position des Bildes
    const left = 931;  // Beispielwert für "left"
    const top = 238;   // Beispielwert für "top"
    
    // Lebenswert des Turms (dieser Wert kann sich ändern)
    let towerHealth = 200; // Beispielwert: Der Turm hat derzeit volle Lebenspunkte (200)
    const maxHealth = 200; // Maximale Lebenspunkte

    // Neues Bild erstellen
    const towerImg = new Image();
    towerImg.src = imgSrc;

    // Sobald das Bild geladen ist, setzen wir die Position
    towerImg.onload = function() {
        // Erstellen eines div-Containers für den Turm
        const imgContainer = document.createElement('div');
        imgContainer.style.position = 'absolute';
        imgContainer.style.left = left + 'px';
        imgContainer.style.top = top + 'px';
        
        // Erstellen des roten Balkens über dem Turm
        const healthBarContainer = document.createElement('div');
        healthBarContainer.style.position = 'absolute';
        healthBarContainer.style.width = towerImg.width + 'px'; // gleiche Breite wie das Bild
        healthBarContainer.style.height = '10px'; // Höhe des Balkens
        healthBarContainer.style.backgroundColor = 'red'; // Hintergrund des Balkens bleibt rot
        healthBarContainer.style.top = '-15px'; // Der Balken wird 15px oberhalb des Turms positioniert

        // Erstellen eines Textes für die Lebensanzeige (nur Leben, ohne Maximalwert)
        const healthText = document.createElement('span');
        healthText.style.position = 'absolute';
        healthText.style.color = 'white';
        healthText.style.fontSize = '12px';
        healthText.style.left = '50%';
        healthText.style.top = '-20px';
        healthText.style.transform = 'translateX(-150%)'; // Text zentrieren
        healthText.innerHTML = `❤️ ${towerHealth}`; // Nur den verbleibenden Lebenswert anzeigen

        // Der Balken wird rot und ändert seine Breite, wenn die Gesundheit sinkt
        const healthFill = document.createElement('div');
        healthFill.style.width = (towerHealth / maxHealth) * 100 + '%'; // Prozentuale Breite entsprechend der Gesundheit
        healthFill.style.height = '100%';
        healthFill.style.backgroundColor = 'red'; // Die Farbe bleibt rot

        // Balken mit Füllung
        healthBarContainer.appendChild(healthFill);
        
        // Hinzufügen der Elemente zum Container
        imgContainer.appendChild(healthBarContainer);
        imgContainer.appendChild(towerImg);
        imgContainer.appendChild(healthText);

        // Das Bild zum Body der Seite hinzufügen
        document.body.appendChild(imgContainer);
    };
}

// Bild laden und positionieren, wenn das Skript ausgeführt wird
loadTowerImage();
