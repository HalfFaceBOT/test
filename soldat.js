function startCountdown(seconds) {
    const counter = document.createElement("div");
    counter.style.position = "absolute";
    counter.style.left = "850px";
    counter.style.top = "900px";
    counter.style.padding = "10px 20px";
    counter.style.fontSize = "24px";
    counter.style.fontWeight = "bold";
    counter.style.fontFamily = "Courier New, monospace";
    counter.style.color = "#fff";
    counter.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
    counter.style.border = "2px solid #fff";
    counter.style.borderRadius = "10px";
    counter.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.7)";
    counter.style.transition = "transform 0.2s ease";
    counter.style.opacity = "0";
    counter.style.animation = "fadeIn 1s forwards";
    
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn { 
        to { opacity: 1; } 
      }
      .tick { 
        transform: scale(1.2); 
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(counter);
  
    let remaining = seconds;
    counter.innerText = `Spawn in: ${remaining}s`;
  
    const interval = setInterval(() => {
      remaining--;
      counter.innerText = `Spawn in: ${remaining}s`;
  
      // Kleine Animation beim Ticken
      counter.classList.add("tick");
      setTimeout(() => counter.classList.remove("tick"), 150);
  
      if (remaining <= 0) {
        clearInterval(interval);
        document.body.removeChild(counter);
        spawnSoldat();  // Soldat wird nach dem Countdown gespawnt
        stopBombPlacement(); // Verhindere das Platzieren von Bomben nach dem Countdown
      }
    }, 1000);
}
  
function spawnSoldat() {
    const soldat = document.createElement("img");
    soldat.src = "soldat.jpg";  // Bild des Soldaten
    soldat.style.position = "absolute";
    soldat.style.top = "640px"; // Startposition des Soldaten (Y-Achse)
    
    const randomLeft = Math.floor(Math.random() * (1100 - 750 + 1)) + 750; // Zufällige X-Position
    soldat.style.left = randomLeft + "px";
    
    soldat.style.width = "34px"; // Größe des Soldaten
    soldat.style.height = "34px";
    document.body.appendChild(soldat);
  
    const speed = 2; // Geschwindigkeit des Soldaten
    let moveDirection = "up"; // Anfangs geht der Soldat nach oben
    let moveLeftRight = 0; // Keine horizontale Bewegung zu Beginn
  
    function moveSoldat() {
        let currentTop = parseInt(soldat.style.top);
        let currentLeft = parseInt(soldat.style.left);

        // Bewegung nach oben
        if (moveDirection === "up") {
            soldat.style.top = currentTop - speed + "px"; // Y-Wert wird verringert
        }

        // Zufällige Richtungsänderung (nach oben, nach links oder nach rechts)
        if (Math.random() < 0.05) {
            // Bestimme zufällig die Richtung
            const direction = Math.random();
            if (direction < 0.33) {
                moveDirection = "up"; // Wechsle nach oben
            } else if (direction < 0.66) {
                moveDirection = "left"; // Wechsle nach links, aber nur, wenn es nicht die Grenze überschreitet
                if (currentLeft > 750) { // Barriere für links: Verhindere, dass der Soldat zu weit nach links geht
                    moveLeftRight = -speed;
                }
            } else {
                moveDirection = "right"; // Wechsle nach rechts
                moveLeftRight = speed;
            }
        }

        // Bewegung nach links oder rechts
        if (moveDirection === "left" || moveDirection === "right") {
            const newLeft = currentLeft + moveLeftRight;
            if (newLeft >= 750 && newLeft <= 1100) { // Achte darauf, dass der Soldat im erlaubten Bereich bleibt
                soldat.style.left = newLeft + "px";
            }
        }

        // Überprüfe Kollision mit Bomben
        if (isCollision(soldat)) {
            handleExplosion(soldat); // Explosion wird ausgelöst, wenn Kollision erkannt wird
            return; // Stoppe die Bewegung des Soldaten, wenn er explodiert
        }

        requestAnimationFrame(moveSoldat); // Setzt die Bewegung fort
    }

    moveSoldat(); // Starte die Bewegung des Soldaten
}

// Funktion zur Kollisionserkennung mit allen Bomben
function isCollision(soldat) {
    const bombs = document.querySelectorAll("img[src='bomb.png']"); // Alle Bomben auf der Seite
  
    // Jede Bombe durchgehen und prüfen, ob eine Kollision stattfindet
    for (let bomb of bombs) {
        const soldatRect = soldat.getBoundingClientRect();
        const bombRect = bomb.getBoundingClientRect();
  
        // Überprüfen, ob sich die Rechtecke überschneiden (Kollision)
        if (!(soldatRect.right < bombRect.left || 
              soldatRect.left > bombRect.right || 
              soldatRect.bottom < bombRect.top || 
              soldatRect.top > bombRect.bottom)) {
            return true; // Kollision erkannt
        }
    }
  
    return false; // Keine Kollision
}

// Funktion, die die Bombe in boom.gif umwandelt und explodiert
function handleExplosion(soldat) {
    const bombs = document.querySelectorAll("img[src='bomb.png']"); // Alle Bomben auf der Seite
  
    for (let bomb of bombs) {
        const soldatRect = soldat.getBoundingClientRect();
        const bombRect = bomb.getBoundingClientRect();
  
        // Überprüfen, ob der Soldat die Bombe berührt
        if (!(soldatRect.right < bombRect.left || 
              soldatRect.left > bombRect.right || 
              soldatRect.bottom < bombRect.top || 
              soldatRect.top > bombRect.bottom)) {
  
            // Explosion abspielen (Boom.gif für 0,5 Sekunden)
            bomb.src = "boom.gif"; // Explosionseffekt (nur einmal abspielen)
            setTimeout(() => {
                // Bombe nach der Explosion vollständig entfernen
                bomb.remove(); // Bombe wird vollständig entfernt
            }, 500); // Explosion für 0,5 Sekunden
            
            // Soldat entfernen (tot)
            soldat.remove();
            console.log("Soldat hat die Bombe berührt und ist tot!");
        }
    }
}

// Der Countdown startet beim Laden der Seite und dauert 15 Sekunden
window.onload = () => {
    startCountdown(5); // Der Countdown dauert nun 15 Sekunden
};
