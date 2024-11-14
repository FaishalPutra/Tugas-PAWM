document.getElementById("menu1").addEventListener("click", function() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show"); // Toggle class untuk menampilkan atau menyembunyikan dropdown
});

document.getElementById("menu2").addEventListener("click", function() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show"); // Toggle class untuk menampilkan atau menyembunyikan dropdown
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
