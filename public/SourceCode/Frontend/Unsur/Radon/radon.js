const resultMessage = document.getElementById('result-message');
const warningMessage = document.getElementById('warning-message');

let radonLevel = 0;

// Fungsi untuk mengukur tingkat radon di ruangan yang dipilih
function ukur_radon(room) {
    if (room === 'basement') {
        radonLevel = Math.floor(Math.random() * 400) + 100; // Tingkat radon tinggi di ruang bawah tanah
    } else if (room === 'living-room') {
        radonLevel = Math.floor(Math.random() * 200) + 50; // Tingkat radon sedang di ruang tamu
    } else if (room === 'bedroom') {
        radonLevel = Math.floor(Math.random() * 100) + 10; // Tingkat radon rendah di kamar tidur
    }

    resultMessage.textContent = `Hasil Pengukuran Radon: ${radonLevel} Bq/m³`;

    if (radonLevel > 200) {
        warningMessage.textContent = 'Bahaya! Tingkat radon terlalu tinggi, segera lakukan tindakan!';
    } else {
        warningMessage.textContent = '';
    }
}

// Fungsi untuk mengurangi tingkat radon dengan ventilasi
function add_ventilation() {
    if (radonLevel > 0) {
        radonLevel -= 50;
        resultMessage.textContent = `Tingkat Radon Setelah Ventilasi: ${radonLevel} Bq/m³`;

        if (radonLevel <= 200) {
            warningMessage.textContent = '';
        }
    }
}

// Fungsi untuk mengurangi tingkat radon dengan sealing cracks
function seal_cracks() {
    if (radonLevel > 0) {
        radonLevel -= 30;
        resultMessage.textContent = `Tingkat Radon Setelah Sealing Cracks: ${radonLevel} Bq/m³`;

        if (radonLevel <= 200) {
            warningMessage.textContent = '';
        }
    }
}

// Event listeners untuk ruangan
document.getElementById('basement').addEventListener('click', () => ukur_radon('basement'));
document.getElementById('living-room').addEventListener('click', () => ukur_radon('living-room'));
document.getElementById('bedroom').addEventListener('click', () => ukur_radon('bedroom'));

// Event listeners untuk tindakan pencegahan
document.getElementById('ventilation').addEventListener('click', add_ventilation);
document.getElementById('seal-cracks').addEventListener('click', seal_cracks);
