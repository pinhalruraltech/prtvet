import { db } from "./firebase-init.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function carregarClinica() {

    const clinicaId = localStorage.getItem("clinicaId");

    if (!clinicaId) return null;

    const ref = doc(db, "clinicas", clinicaId);
    const snap = await getDoc(ref);

    if (!snap.exists()) return null;

    const data = snap.data();

    // 🎨 aplica tema
    document.documentElement.style.setProperty("--cor-primaria", data.visual?.corPrimaria || "#2D6A4F");

    // 🖼️ logo
    if (data.visual?.logo) {
        const logo = document.getElementById("logo-clinica");
        if (logo) logo.src = data.visual.logo;
    }

    return data;
}