/* TOGGLE MENU */
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
    const nome = "👤 Venício"; // depois Firebase
    const el = document.getElementById("usuarioNome");

    if(el){
        el.textContent = nome;
    }
}

/* MENU ATIVO */
function setActiveMenu(){

    const path = window.location.pathname.toLowerCase();

    let current = "";

    if(path.includes("index")) current = "inicio";
    else if(path.includes("clientes")) current = "clientes";
    else if(path.includes("animais")) current = "animais";
    else if(path.includes("atendimentos")) current = "atendimentos";
    else if(path.includes("agenda")) current = "agenda";
    else if(path.includes("financeiro")) current = "financeiro";
    else if(path.includes("estoque")) current = "estoque";
    else if(path.includes("relatorios")) current = "relatorios";
    else if(path.includes("config")) current = "config";
    else if(path.includes("vacinas")) current = "vacinas";
    else if(path.includes("internacao")) current = "internacao";
    else if(path.includes("vendas")) current = "vendas";
    else if(path.includes("documentos")) current = "documentos";
    else if(path.includes("lembretes")) current = "lembretes";

    document.querySelectorAll(".menu-item").forEach(item=>{
        if(item.dataset.link === current){
            item.classList.add("active");
        }
    });
}

/* LOGOUT */
function logout(){

    const confirmar = confirm("Deseja realmente sair?");

    if(confirmar){
        // depois você conecta com Firebase
        window.location.href = "../login.html";
    }
}

/* INIT GLOBAL */
function initMenu(){
    carregarUsuario();
    setActiveMenu();
    lucide.createIcons();
}