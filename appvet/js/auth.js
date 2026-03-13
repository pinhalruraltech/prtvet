import { auth, db } from "./firebase-init.js";

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const erroDiv = document.getElementById("erroLogin");
    const btnLogin = document.getElementById("btnLogin");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        erroDiv.innerText = "";
        btnLogin.disabled = true;
        btnLogin.innerText = "Entrando...";

        try {

            // login firebase
            const cred = await signInWithEmailAndPassword(auth, email, senha);
            const uid = cred.user.uid;

            // buscar usuario no firestore
            const q = query(
                collection(db, "usuarios"),
                where("uid", "==", uid)
            );

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {

                erroDiv.innerText = "Usuário não encontrado no sistema.";
                btnLogin.disabled = false;
                btnLogin.innerText = "Entrar";
                return;

            }

            const dadosUsuario = querySnapshot.docs[0].data();

            if (!dadosUsuario.ativo) {

                erroDiv.innerText = "Usuário desativado.";
                btnLogin.disabled = false;
                btnLogin.innerText = "Entrar";
                return;

            }

            // salvar sessão
            localStorage.setItem("clinicaId", dadosUsuario.clinicaId);
            localStorage.setItem("papel", dadosUsuario.papel);
            localStorage.setItem("uid", uid);

            // redirecionar
            window.location.href = "pages/dashboard.html";

        } catch (erro) {

            erroDiv.innerText = "Erro no login: " + erro.message;

            btnLogin.disabled = false;
            btnLogin.innerText = "Entrar";

        }

    });

});
