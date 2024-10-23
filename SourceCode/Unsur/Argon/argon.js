const canvas = document.getElementById('welding-simulation');
const ctx = canvas.getContext('2d');
const resultMessage = document.getElementById('result-message');

// Fungsi untuk menggambar hasil pengelasan
function simulateWelding(gasType) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gasType === 'argon') {
        // Pengelasan dengan Argon
        ctx.fillStyle = 'silver';
        ctx.fillRect(100, 150, 400, 100);  // Logam dasar
        ctx.strokeStyle = 'green';  // Warna las untuk argon
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(100, 200);
        ctx.lineTo(500, 200);  // Lasan argon
        ctx.stroke();
        resultMessage.textContent = 'Hasil Pengelasan dengan Argon: Lasan bersih tanpa oksidasi!';
    } else if (gasType === 'air') {
        // Pengelasan tanpa gas pelindung (udara)
        ctx.fillStyle = 'silver';
        ctx.fillRect(100, 150, 400, 100);  // Logam dasar
        ctx.strokeStyle = 'red';  // Warna las untuk udara (teroksidasi)
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(100, 200);
        ctx.lineTo(500, 200);  // Lasan udara
        ctx.stroke();
        ctx.fillStyle = 'black';  // Tanda oksidasi
        ctx.fillRect(200, 150, 200, 100);  // Logam yang teroksidasi
        resultMessage.textContent = 'Hasil Pengelasan dengan Udara: Lasan teroksidasi, kualitas buruk!';
    }
}

// Event listener untuk tombol
document.getElementById('argon-weld').addEventListener('click', function() {
    simulateWelding('argon');
});

document.getElementById('air-weld').addEventListener('click', function() {
    simulateWelding('air');
});
