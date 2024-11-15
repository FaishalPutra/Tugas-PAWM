// Konfigurasi Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "./firebaseconfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Fungsi Sign Up
async function signUp(email, password, username) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Simpan username ke Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
      });   

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Fungsi Sign In
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Event Listener
const signinButton = document.getElementById("signin_but");
const signupButton = document.getElementById("signup_but");
const kotakSignup = document.getElementById("kotak_signup");
const kotakSignin = document.getElementById("kotak_signin");

// button untuk Sign Up
signupButton.addEventListener("click", async () => {
  const email = document.getElementById("signup_email").value;
  const password = document.getElementById("signup_password").value;
  const username = document.getElementById("signup_username").value;

  if (!username) {
    alert("Username tidak boleh kosong!");
    return;
  }

  try {
    const user = await signUp(email, password, username);
    alert(`Berhasil daftar, selamat datang ${username}`);
    kotakSignup.classList.add("hidden");
    kotakSignin.classList.remove("hidden");
  } catch (error) {
    alert(`Gagal daftar: ${error.message}`);
  }
});


// button untuk Sign In
signinButton.addEventListener("click", async () => {
  const email = document.getElementById("signin_email").value;
  const password = document.getElementById("signin_password").value;

  try {
    const user = await signIn(email, password);
    localStorage.setItem("isLoggedIn", "true");
    alert(`Berhasil login, selamat datang ${user.email}`);
    window.location.href = "../../../index.html";
  } catch (error) {
    alert(`Gagal login: ${error.message}`);
  }
});





