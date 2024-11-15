import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "./firebaseconfig.js";

// Initialize Firebaseconst 
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
            alert(`Skor berhasil disimpan: ${score} silahkan cek profil!`);
            window.location.href = "../../../index.html";

        })
        .catch((error) => {
            alert(`Gagal menyimpan skor: ${error.message}`);
        });
    } catch (error) {
        alert(`Kesalahan: ${error.message || error}`);
    }
}

const selesaiButton = document.getElementById("selesai");

// button untuk selesai
selesaiButton.addEventListener("click", () => {

    const finalScore = localStorage.getItem("gameScore");
    const parsedScore = parseInt(finalScore);

    // Debugging: Log sebelum menyimpan
    console.log("Menyimpan data dummy ke Firestore...");

    // Panggil fungsi penyimpanan
    saveScoreToFirebase(parsedScore);

});
