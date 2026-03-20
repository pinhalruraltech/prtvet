function toggleMenu(){
    const menu = document.getElementById("menuHorizontal");
    const icon = document.getElementById("menuIcon");

    menu.classList.toggle("hidden");

    if(menu.classList.contains("hidden")){
        icon.setAttribute("data-lucide", "chevron-down");
    } else {
        icon.setAttribute("data-lucide", "chevron-up");
    }

    lucide.createIcons();
}

/* USUÁRIO */
function carregarUsuario(){
    const nome = "👤 Venício"; // depois vem do Firebase
    document.getElementById("usuarioNome").textContent = nome;
}

/* LOGOUT */
function logout(){
    alert("Logout");
}

carregarUsuario();