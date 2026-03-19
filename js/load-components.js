async function carregarMenu(){

const resp = await fetch("../components/menu.html");

const html = await resp.text();

document.getElementById("menu").innerHTML = html;

}

carregarMenu();
