function adjustVoltage(value) {
    const neonLamp = document.getElementById('neon-lamp');
    const voltageOutput = document.getElementById('voltage-output');


    voltageOutput.textContent = value;


    if (value == 0) {
        neonLamp.style.backgroundColor = 'black';  // Lampu mati
    } else if (value <= 30) {
        neonLamp.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';  
    } else if (value <= 60) {
        neonLamp.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';  
    } else if (value <= 90) {
        neonLamp.style.backgroundColor = 'rgba(255, 0, 0, 0.8)'; 
    } else {
        neonLamp.style.backgroundColor = 'rgba(255, 0, 0, 1)';  
    }
}
