function adjustVoltage(value) {
    const neonLamp = document.getElementById('neon-lamp');
    const voltageOutput = document.getElementById('voltage-output');

    // Update displayed voltage value
    voltageOutput.textContent = value;

    // Change the neon light color based on voltage
    if (value == 0) {
        neonLamp.style.backgroundColor = 'black';  // Lampu mati
    } else if (value <= 30) {
        neonLamp.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';  // Cahaya redup
    } else if (value <= 60) {
        neonLamp.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';  // Cahaya sedang
    } else if (value <= 90) {
        neonLamp.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';  // Cahaya terang
    } else {
        neonLamp.style.backgroundColor = 'rgba(255, 0, 0, 1)';  // Cahaya sangat terang
    }
}
