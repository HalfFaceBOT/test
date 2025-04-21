window.onload = function () {
    const soldat = document.getElementById("soldat");
    const container = document.getElementById("spiel-container");
  
    soldat.style.display = "none";
  
    const width = 50;
    const height = 50;
  
    const leftPercent = Math.random() * (0.8 - 0.1) + 0.1; // 10%–80%
    const left = container.offsetWidth * leftPercent;
    const top = container.offsetHeight * 0.68; // 68% von oben
  
    soldat.style.width = width + "px";
    soldat.style.height = height + "px";
    soldat.style.left = left + "px";
    soldat.style.top = top + "px";
  
    setTimeout(() => {
      soldat.style.display = "block";
    }, 10);
  };
  