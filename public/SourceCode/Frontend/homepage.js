// menghitung posisi menu relatif terhadap tombol
function positionMenu(button, menu) {
  const buttonRect = button.getBoundingClientRect(); // posisi tombol
  menu.style.top = buttonRect.bottom + window.scrollY + "px"; 
  menu.style.left = buttonRect.left + window.scrollX + "px"; 
}

// untuk Menu 1
document.getElementById("menu1").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  const button = this; // Ambil tombol yang diklik

  positionMenu(button, menu); 
  menu.classList.toggle("show"); // menampilkan/menyembunyikan dropdown
});

// untuk Menu 2
document.getElementById("menu2").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  const button = this; // Ambil tombol yang diklik

  positionMenu(button, menu); 
  menu.classList.toggle("show"); // menampilkan/menyembunyikan dropdown
});

// Hilangkan menu saat layar diresize
window.addEventListener("resize", function () {
  const menu = document.getElementById("menu");
  if (menu.classList.contains("show")) {
      menu.classList.remove("show"); // Sembunyikan menu
  }
});

// Hilangkan menu saat halaman di-scroll
window.addEventListener("scroll", function () {
  const menu = document.getElementById("menu");
  if (menu.classList.contains("show")) {
      menu.classList.remove("show"); // Sembunyikan menu
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
