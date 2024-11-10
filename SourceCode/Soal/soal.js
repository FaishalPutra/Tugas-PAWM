let score = 0;
let currentDraggedElement = null; // Variabel elemen yang sedang di-drag

// Elemen draggable dan drop zone
const draggables = document.querySelectorAll('.answer');
const dropZones = document.querySelectorAll('.drop-zone');
const scoreDisplay = document.getElementById('score');

// Event Listeners untuk draggable
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.answer); // Simpan data jawaban
    e.target.classList.add('dragging');
    currentDraggedElement = e.target; // Simpan elemen yang sedang di-drag
  });

  draggable.addEventListener('dragend', function () {
    this.classList.remove('dragging');
    currentDraggedElement = null; // Reset elemen yang sedang di-drag
  });
});

// Event Listeners untuk drop zones
dropZones.forEach(zone => {
  zone.addEventListener('dragover', function (e) {
    e.preventDefault(); // Izinkan drop
  });

  zone.addEventListener('drop', function (e) {
    e.preventDefault();
    this.classList.remove('over'); // Hapus efek "over"
    
    const answer = e.dataTransfer.getData('text/plain'); // Ambil data jawaban
    const correctAnswer = this.id === 'drop1' ? 'F2' :
                          this.id === 'drop2' ? 'Cl2' :
                          this.id === 'drop3' ? 'Ar' :
                          this.id === 'drop4' ? 'F2' :
                          this.id === 'drop5' ? 'Rn' : null;

    // Cek jawaban benar
    if (answer === correctAnswer) {
      this.textContent = answer; // Tampilkan jawaban di drop zone
      this.style.backgroundColor = 'lightgreen'; // Tampilkan warna hijau
      score += 20; // Tambah skor
      scoreDisplay.textContent = score; // Perbarui skor

      // Hapus elemen 
      if (currentDraggedElement) {
        currentDraggedElement.remove(); 
      }
    } else {
      score -= 10; // kurang skor
      scoreDisplay.textContent = score; // Perbarui skor
      alert('Jawaban tidak tepat!');

      // Hapus elemen 
      if (currentDraggedElement) {
        currentDraggedElement.remove(); 
      }
    }
  });
});
