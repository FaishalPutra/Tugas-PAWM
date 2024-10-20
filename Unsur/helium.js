let heliumAmount = 0;
const balloon = document.getElementById('balloon');

function addHelium() {
    if (heliumAmount < 400) {  // Batas ketinggian balon
        heliumAmount += 50;
        balloon.style.bottom = heliumAmount + 'px';
    }
}

function resetBalloon() {
    heliumAmount = 0;
    balloon.style.bottom = heliumAmount + 'px';
}