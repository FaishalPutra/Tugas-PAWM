const kotakSignin = document.getElementById("kotak_signin");
const kotakSignup = document.getElementById("kotak_signup");
const registerLink = document.getElementById("register");
const backButton = document.getElementById("back");


// Pindah ke Sign Up
registerLink.addEventListener("click", () => {
  kotakSignin.classList.add("hidden");
  kotakSignup.classList.remove("hidden");
});

// Pindah kembali ke Sign In
backButton.addEventListener("click", () => {
  kotakSignup.classList.add("hidden");
  kotakSignin.classList.remove("hidden");
});
