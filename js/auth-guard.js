import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { db } from "./firebase-init.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const auth = getAuth();

/**
 * CONFIGURAÇÃO DA PÁGINA
 * exemplo:
 * area: "app" ou "adm"
 * chave: "clientes", "usuarios", etc
 */
export async function protegerPagina(PERMISSAO_PAGINA){

    return new Promise((resolve)=>{

        onAuthStateChanged(auth, async (user)=>{

            if(!user){
                window.location.href = "/index.html";
                return;
            }

            const uid = user.uid;

            // 🔎 USUÁRIO
            const userSnap = await getDoc(doc(db,"usuarios",uid));

            if(!userSnap.exists()){
                alert("Usuário não encontrado");
                return;
            }

            const u = userSnap.data();

            if(!u.ativo){
                alert("Usuário inativo");
                return;
            }

            const clinicaId = u.clinicaId;
            const grupoId = u.grupo;

            // 🔎 CLÍNICA
            const clinicaSnap = await getDoc(doc(db,"clinicas",clinicaId));

            if(!clinicaSnap.exists()){
                alert("Clínica não encontrada");
                return;
            }

            const clinica = clinicaSnap.data();

            // 🔎 GRUPOS
            const gruposSnap = await getDoc(doc(db,"config","grupos"));

            const grupos = gruposSnap.data().lista || [];

            const grupo = grupos.find(g=>g.id === grupoId);

            if(!grupo){
                alert("Grupo não encontrado");
                return;
            }

            // 🔐 VALIDAÇÃO DUPLA

            const area = PERMISSAO_PAGINA.area;
            const chave = PERMISSAO_PAGINA.chave;

            const permitidoClinica = clinica.modulos?.[chave];
            const permitidoGrupo = grupo.permissoes?.[area]?.[chave];

            if(!permitidoClinica || !permitidoGrupo){
                alert("Acesso negado");
                window.location.href = "/app/dashboard.html";
                return;
            }

            // 💾 SALVA CONTEXTO GLOBAL
            localStorage.setItem("uid", uid);
            localStorage.setItem("clinicaId", clinicaId);
            localStorage.setItem("grupo", grupoId);

            resolve({
                usuario: u,
                clinica,
                grupo
            });

        });

    });

}