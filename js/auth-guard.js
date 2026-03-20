import { auth, db } from "./firebase-init.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "../login.html";
        return;
    }

    const uid = user.uid;

    // 🔎 busca usuário no banco
    const q = query(
        collection(db, "usuarios"),
        where("uid", "==", uid)
    );

    const snap = await getDocs(q);

    if (snap.empty) {
        alert("Usuário não encontrado");
        return;
    }

    const data = snap.docs[0].data();

    // 🔐 garante sessão completa
    localStorage.setItem("uid", uid);
    localStorage.setItem("clinicaId", data.clinicaId);
    localStorage.setItem("papel", data.grupo);

});