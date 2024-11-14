import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Konfigurasi Firebase Anda
const firebaseConfig = {
    apiKey: "AIzaSyA6q1gDeI12XW2kIBPzlmBN0budzntjl9I",
    authDomain: "gas-mulia.firebaseapp.com",
    projectId: "gas-mulia",
    storageBucket: "gas-mulia.firebasestorage.app",
    messagingSenderId: "48320895231",
    appId: "1:48320895231:web:6fe18e9a070d0c396114ca",
    measurementId: "G-KF51LZG7JS",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function saveScoreToFirebase(score) {
    try {
        // Periksa apakah pengguna login
        const user = auth.currentUser;

        if (!user) {
            throw new Error("Tidak ada pengguna yang login. Anda harus login terlebih dahulu.");
        }

        // Simpan data ke Firestore
        await setDoc(
            doc(db, "users", user.uid),
            { score: score }, // Data yang disimpan
            { merge: true }  // Pastikan tidak overwrite data lama
        )
        .then(() => {
            console.log("Data berhasil disimpan ke Firestore.");
            alert(`Skor berhasil disimpan: ${score}`);
            window.location.href = "../../../index.html";

        })
        .catch((error) => {
            console.error("Gagal menyimpan skor ke Firestore:", error);
            alert(`Gagal menyimpan skor: ${error.message}`);
        });
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message || error);
        alert(`Kesalahan: ${error.message || error}`);
    }
}

// Ambil tombol selesai
const selesaiButton = document.getElementById("selesai");

// Event Listener untuk tombol selesai
selesaiButton.addEventListener("click", () => {

    const finalScore = localStorage.getItem("gameScore");
    const parsedScore = parseInt(finalScore);

    // Debugging: Log sebelum menyimpan
    console.log("Menyimpan data dummy ke Firestore...");

    // Panggil fungsi penyimpanan
    saveScoreToFirebase(parsedScore);

});
