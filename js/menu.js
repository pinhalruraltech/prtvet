import { auth } from "../js/firebase-init.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ===============================
// ELEMENTOS
// ===============================
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.getElementById("menuToggle");

// ===============================
// MENU
// ===============================
toggleBtn?.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

overlay?.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// ===============================
// ÍCONES
// ===============================
lucide.createIcons();

// ===============================
// MENU ATIVO
// ===============================
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".menu-item").forEach(link => {
  const href = link.getAttribute("href");

  if (href === currentPage) {
    link.classList.add("active");
  }
});

// ===============================
// TÍTULO
// ===============================
const pageMap = {
  "index.html": "Início",
  "clientes.html": "Clientes",
  "animais.html": "Animais",
  "agenda.html": "Agenda",
  "financeiro.html": "Financeiro",
  "atendimentos.html": "Atendimentos",
  "estoque.html": "Estoque",
  "relatorios.html": "Relatórios",
  "usuarios.html": "Usuários",
  "configuracoes.html": "Configurações"
};

const pageTitle = document.getElementById("pageTitle");

if (pageMap[currentPage]) {
  pageTitle.innerText = pageMap[currentPage];
}

// ===============================
// USUÁRIO
// ===============================
onAuthStateChanged(auth, (user) => {
  if (user) {
    let nome = user.displayName || user.email || "Usuário";
    nome = nome.split(" ")[0];

    const el = document.getElementById("userNome");
    if (el) el.innerText = nome;
  }
});

// ===============================
// LOGOUT
// ===============================
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "../login.html";
  });
});