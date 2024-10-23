const canvas = document.getElementById('laser-camera');
const ctx = canvas.getContext('2d');
const outputMessage = document.getElementById('output-message');

// Inisialisasi panjang gelombang dan intensitas
let wavelength = 550;
let intensity = 5;

// Fungsi untuk menghasilkan warna berdasarkan panjang gelombang (dalam format RGB)
function wavelengthToColor(wavelength) {
    if (wavelength < 450) return [0, 0, 255]; // Biru
    if (wavelength < 495) return [0, 255, 255]; // Cyan
    if (wavelength < 570) return [0, 255, 0]; // Hijau
    if (wavelength < 590) return [255, 255, 0]; // Kuning
    if (wavelength < 620) return [255, 165, 0]; // Oranye
    return [255, 0, 0]; // Merah
}

// Fungsi untuk menggambar laser beam yang lebih kecil dan fokus
function drawLaserBeam() {
    const [r, g, b] = wavelengthToColor(wavelength);

    // Bersihkan canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Tentukan posisi dan ukuran laser
    const laserWidth = 10;  // Lebar sinar laser
    const laserHeight = canvas.height * 0.6;  // Panjang sinar laser (60% dari tinggi canvas)
    const laserX = (canvas.width / 2) - (laserWidth / 2);  // Pusatkan sinar laser di tengah canvas
    const laserY = (canvas.height / 2) - (laserHeight / 2);  // Posisi vertikal sinar laser

    // Gambar sinar laser
    const brightness = intensity / 10; // Opacity berdasarkan intensitas laser
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${brightness})`;
    ctx.fillRect(laserX, laserY, laserWidth, laserHeight);  // Gambar garis vertikal yang menyerupai laser beam

    // Buat efek "glow" dengan garis lebih besar tapi lebih transparan
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${brightness / 2})`;  // Lebih transparan
    ctx.fillRect(laserX - 5, laserY, laserWidth + 10, laserHeight);  // Buat efek lebih besar di sekitar sinar laser

    // Perbarui pesan kualitas gambar
    outputMessage.textContent = `Kualitas Gambar: Panjang Gelombang ${wavelength} nm, Intensitas ${intensity}`;
}

// Event listeners untuk input panjang gelombang dan intensitas
document.getElementById('wavelength').addEventListener('input', (e) => {
    wavelength = e.target.value;
    drawLaserBeam();
});

document.getElementById('intensity').addEventListener('input', (e) => {
    intensity = e.target.value;
    drawLaserBeam();
});

// Inisialisasi pertama kali
drawLaserBeam();
