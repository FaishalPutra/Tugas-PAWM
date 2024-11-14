const canvas = document.getElementById('xenon-lamp');
const ctx = canvas.getContext('2d');
const outputMessage = document.getElementById('output-message');

// Inisialisasi arus dan tekanan
let current = 50;
let pressure = 5;

// Fungsi untuk menghitung cahaya yang dihasilkan
function calculateLumen(current, pressure) {
    return Math.floor((current * pressure) * 50);  // Tingkatkan faktor lumen untuk efek lebih jelas
}

// Fungsi untuk memperbarui visualisasi lampu dan keluaran cahaya
function updateLamp() {
    const lumen = calculateLumen(current, pressure);

    // Bersihkan canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gambar visualisasi cahaya
    const brightness = Math.min(lumen / 5000, 1); // Pastikan brightness tidak lebih dari 1
    ctx.fillStyle = `rgba(255, 255, 100, ${brightness})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Perbarui pesan keluaran
    outputMessage.textContent = `Cahaya yang dihasilkan: ${lumen} lumen`;
}

// Event listeners untuk input arus dan tekanan
document.getElementById('current').addEventListener('input', (e) => {
    current = e.target.value;
    updateLamp();
});

document.getElementById('pressure').addEventListener('input', (e) => {
    pressure = e.target.value;
    updateLamp();
});

// Inisialisasi pertama kali
updateLamp();
