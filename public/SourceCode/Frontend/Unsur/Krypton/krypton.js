const canvas = document.getElementById('laser_camera');
const ctx = canvas.getContext('2d');
const outputMessage = document.getElementById('output_message');

let wavelength = 550;
let intensity = 5;

// menghasilkan warna berdasarkan panjang gelombang 
function wavelength_color(wavelength) {
    if (wavelength < 450) return [0, 0, 255]; // Biru
    if (wavelength < 495) return [0, 255, 255]; // Cyan
    if (wavelength < 570) return [0, 255, 0]; // Hijau
    if (wavelength < 590) return [255, 255, 0]; // Kuning
    if (wavelength < 620) return [255, 165, 0]; // Oranye
    return [255, 0, 0]; // Merah
}

// menggambar laser beam yang lebih kecil dan fokus
function drawLaserBeam() {
    const [r, g, b] = wavelength_color(wavelength);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Tentukan posisi dan ukuran laser
    const laser_width = 10;  
    const laser_height = canvas.height * 0.6; 
    const laserX = (canvas.width / 2) - (laser_width / 2);  // Pusatkan sinar laser di tengah canvas
    const laserY = (canvas.height / 2) - (laser_height / 2);  // Posisi vertikal sinar laser

    // Gambar sinar laser
    const brightness = intensity / 10; // Opacity berdasarkan intensitas laser
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${brightness})`;
    ctx.fillRect(laserX, laserY, laser_width, laser_height);  // Gambar garis vertikal yang menyerupai laser beam

    // Buat efek "glow" dengan garis lebih besar tapi lebih transparan
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${brightness / 2})`;  // Lebih transparan
    ctx.fillRect(laserX - 5, laserY, laser_width + 10, laser_height);  // Buat efek lebih besar di sekitar sinar laser

    // Perbarui pesan kualitas gambar
    outputMessage.textContent = `Kualitas Gambar: Panjang Gelombang ${wavelength} nm, Intensitas ${intensity}`;
}

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
