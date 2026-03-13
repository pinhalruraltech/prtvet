import { auth, db } from "./firebase-init.js";

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", async () => {

```
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

try {

    const cred = await signInWithEmailAndPassword(auth, email, senha);

    const uid = cred.user.uid;

    const q = query(collection(db, "usuarios"), where("uid", "==", uid));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {

        alert("Usuário não encontrado no sistema.");
        return;

    }

    const dadosUsuario = querySnapshot.docs[0].data();

    if (!dadosUsuario.ativo) {

        alert("Usuário desativado.");
        return;

    }

    localStorage.setItem("clinicaId", dadosUsuario.clinicaId);
    localStorage.setItem("papel", dadosUsuario.papel);
    localStorage.setItem("uid", uid);

    window.location.href = "pages/dashboard.html";

} catch (erro) {

    alert("Erro no login: " + erro.message);

}
```

});
