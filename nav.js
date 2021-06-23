let toggle = document.getElementById("toggle");
let links = document.getElementById("links");

toggle.addEventListener("click", (event) => {
    event.preventDefault();
    if (links.className === "menuNav__container"){
        links.classList.toggle("menuNav__container--open");
    } else if (links.className === "menuNav__container menuNav__container--open") {
        links.classList.toggle("menuNav__container--close");
        links.classList.toggle("menuNav__container--open");
    } else if (links.className === "menuNav__container" || "menuNav__container menuNav__container--close"){
        links.classList.toggle("menuNav__container--close");
        links.classList.toggle("menuNav__container--open");
    }
})