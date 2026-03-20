import { auth } from "./firebase-init.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

    if (!user) {
        // 🔴 não logado
        window.location.href = "../index.html";
        return;
    }

    // ✅ logado — garante consistência
    localStorage.setItem("uid", user.uid);

});