// menghitung posisi menu relatif terhadap tombol
function positionMenu(button, menu) {
  const buttonRect = button.getBoundingClientRect(); // Dapatkan posisi tombol
  menu.style.top = buttonRect.bottom + window.scrollY + "px"; 
  menu.style.left = buttonRect.left + window.scrollX + "px"; 
}

// untuk Menu 1
document.getElementById("menu1").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  const button = this; // Ambil tombol yang diklik

  positionMenu(button, menu); // Posisi menu
  menu.classList.toggle("show"); // Toggle class untuk menampilkan/menyembunyikan dropdown
});

// untuk Menu 2
document.getElementById("menu2").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  const button = this; // Ambil tombol yang diklik

  positionMenu(button, menu); // Posisi menu
  menu.classList.toggle("show"); // Toggle class untuk menampilkan/menyembunyikan dropdown
});

// kondisi menu saat layar diresize atau halaman di-scroll
window.addEventListener("resize", function () {
  const menu = document.getElementById("menu");
  if (menu.classList.contains("show")) {
      // Jika menu sedang ditampilkan, perbarui posisinya
      const button1 = document.getElementById("menu1");
      const button2 = document.getElementById("menu2");

      // Pilih tombol yang sedang aktif
      const activeButton = menu.style.left === button1.getBoundingClientRect().left + "px" ? button1 : button2;

      positionMenu(activeButton, menu);
  }
});

// kondisi menu saat layar diresize atau halaman di-scroll
window.addEventListener("scroll", function () {
  const menu = document.getElementById("menu");
  if (menu.classList.contains("show")) {
      // Jika menu sedang ditampilkan, perbarui posisinya
      const button1 = document.getElementById("menu1");
      const button2 = document.getElementById("menu2");

      // Pilih tombol yang sedang aktif
      const activeButton = menu.style.left === button1.getBoundingClientRect().left + "px" ? button1 : button2;

      positionMenu(activeButton, menu);
  }
});

// Mengecek status login
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const topSignedOut = document.getElementById("top_signed_out");
const topSignedIn = document.getElementById("top_signed_in");

// Mengatur tampilan elemen berdasarkan status login
if (isLoggedIn) {
  // Tampilkan elemen untuk pengguna yang sudah login
  topSignedOut.classList.add("hidden");
  topSignedIn.classList.remove("hidden");
} else {
  // Tampilkan elemen untuk pengguna yang belum login
  topSignedOut.classList.remove("hidden");
  topSignedIn.classList.add("hidden");
}
