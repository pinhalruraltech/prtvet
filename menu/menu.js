import { db } from "../js/firebase-init.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* TOGGLE */
window.toggleMenu = function(){
    document.getElementById("menuHorizontal").classList.toggle("hidden");
};

/* LOGOUT */
window.logout = function(){
    localStorage.clear();
    window.location.href = "./login.html";
};

/* PERFIL */
window.irPerfil = function(){
    window.location.href = "./app/perfil.html";
};

/* LOAD MENU */
export async function carregarMenu(){

    const uid = localStorage.getItem("uid");
    const clinicaId = localStorage.getItem("clinicaId");

    if(!uid || !clinicaId) return;

    try{

        /* 🔥 USUÁRIO (AGORA CERTO) */
        const userSnap = await getDoc(doc(db,"usuarios",uid));

        if(userSnap.exists()){
            const u = userSnap.data();

            document.getElementById("usuarioNome").innerHTML = `
                <i data-lucide="user"></i>
                <span>${u.usuario || "Usuário"}</span>
            `;
        }

        /* 🔥 CLÍNICA */
        const clinicaSnap = await getDoc(doc(db,"clinicas",clinicaId));

        if(clinicaSnap.exists()){
            const c = clinicaSnap.data();

            document.getElementById("tituloClinica").innerText = c.titulo || c.nome || "Clínica";
            document.getElementById("subtituloClinica").innerText = c.subtitulo || "";

            if(c.visual?.logo){
                document.getElementById("logoClinica").src = c.visual.logo;
            }

            if(c.visual?.corPrimaria){
                document.getElementById("menuWrapper").style.background = c.visual.corPrimaria;
            }
        }

        lucide.createIcons();

    }catch(e){
        console.error("Erro menu:", e);
    }
}