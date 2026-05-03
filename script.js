function flipCard(cardElement) {
    cardElement.classList.toggle('is-flipped');
}
/* =====================================
   MENU USUÁRIO
===================================== */

function toggleMenu() {
    const menu = document.getElementById("dropdownUser");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

/* botão sair */
function logoutUser() {

    /* apagar login salvo */
    localStorage.removeItem("usuario");

    /* redireciona */
    window.location.href = "login.html";
}

/* fecha clicando fora */
window.addEventListener("click", function(e){

    const menu = document.getElementById("dropdownUser");
    const btn = document.querySelector(".btn-user-icon");

    if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
    }

});