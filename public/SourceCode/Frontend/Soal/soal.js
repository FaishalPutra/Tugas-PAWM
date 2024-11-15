// Variabel global untuk skor
let score = 0;
let currentDraggedElement = null;

const draggables = document.querySelectorAll('.answer');
const dropZones = document.querySelectorAll('.drop-zone');
const scoreDisplay = document.getElementById('score');

// Fungsi untuk memperbarui skor
function updateScore(newScore) {
  score = newScore;
  scoreDisplay.textContent = score; // Perbarui tampilan skor
  localStorage.setItem('gameScore', score); // Simpan ke localStorage
}

// Reset skor di awal
localStorage.setItem('gameScore', 0);

// Event Listener untuk draggable elemen
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.answer); // Simpan data jawaban
    e.target.classList.add('dragging');
    currentDraggedElement = e.target;
  });

  draggable.addEventListener('dragend', function () {
    this.classList.remove('dragging');
    currentDraggedElement = null;
  });
});

// Event Listener untuk drop zones
dropZones.forEach(zone => {
  zone.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  zone.addEventListener('drop', function (e) {
    e.preventDefault();
    const answer = e.dataTransfer.getData('text/plain'); // Ambil data jawaban
    const correctAnswer = this.id === 'drop1' ? 'F2' :
                          this.id === 'drop2' ? 'Cl2' :
                          this.id === 'drop3' ? 'Ar' :
                          this.id === 'drop4' ? 'F2' :
                          this.id === 'drop5' ? 'Rn' : null;

    // Cek jawaban benar atau salah
    if (answer === correctAnswer) {
      this.textContent = answer; // Tampilkan jawaban
      this.style.backgroundColor = 'lightgreen'; // Warna hijau
      updateScore(score + 20); // Tambah skor
      if (currentDraggedElement) {
        currentDraggedElement.remove();
      }
    } else {
      updateScore(score - 10); // Kurangi skor
      alert('Jawaban tidak tepat!');
      if (currentDraggedElement) {
        currentDraggedElement.remove();
      }
    }
  });
});
