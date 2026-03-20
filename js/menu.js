// ===============================
// ELEMENTOS
// ===============================
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.getElementById("menuToggle");

// ===============================
// ABRIR / FECHAR MENU
// ===============================
toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// ===============================
// ATIVAR ÍCONES LUCIDE
// ===============================
lucide.createIcons();

// ===============================
// MARCAR MENU ATIVO AUTOMATICAMENTE
// ===============================
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".menu-item").forEach(link => {
  const href = link.getAttribute("href");

  if (href === currentPage) {
    link.classList.add("active");
  }
});

// ===============================
// TÍTULO DINÂMICO NA TOPBAR
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
// FIREBASE - USUÁRIO
// ===============================
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    let nome = user.displayName || user.email || "Usuário";

    // pega só o primeiro nome
    nome = nome.split(" ")[0];

    document.getElementById("userNome").innerText = nome;
  }
});

// ===============================
// LOGOUT
// ===============================
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "../login.html";
  });
});

// ===============================
// (PRONTO PARA PERMISSÕES FUTURAS)
// ===============================
// Aqui você pode esconder menus por grupo depois
// Exemplo:
//
// const grupo = "FUNCIONARIO";
//
// if (grupo !== "ADM") {
//   document.querySelector('a[href="usuarios.html"]').style.display = "none";
// }
