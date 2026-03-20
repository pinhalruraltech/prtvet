const uid = localStorage.getItem("uid");

if (!uid) {
    window.location.href = "../index.html";
}
