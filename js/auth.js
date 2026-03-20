import { auth, db } from "./firebase-init.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    try {

        const cred = await signInWithEmailAndPassword(auth, email, senha);
        const uid = cred.user.uid;

        const q = query(
            collection(db, "usuarios"),
            where("uid", "==", uid)
        );

        const snap = await getDocs(q);

        if (snap.empty) {
            alert("Usuário não encontrado");
            return;
        }

        const user = snap.docs[0].data();

        if (!user.ativo) {
            alert("Usuário inativo");
            return;
        }

        // 🔐 salva dados
        localStorage.setItem("uid", uid);
        localStorage.setItem("clinicaId", user.clinicaId);
        localStorage.setItem("papel", user.grupo);

        // 🚀 redireciona
        window.location.href = "index.html";

    } catch (err) {
        alert("Erro: " + err.message);
    }

});