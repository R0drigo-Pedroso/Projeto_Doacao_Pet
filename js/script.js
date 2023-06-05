// Efeito Header
const header = document.querySelector("header");
const headerHeight = header.clientHeight;

function checkHeaderPosition(){
    if(window.scrollY > headerHeight) {
        header.classList.remove("in-banner");
    } else {
        header.classList.add("in-banner");
    }
}

window.addEventListener('scroll', () => {
    checkHeaderPosition();
})

// Menu ativo conforme a seção visível na página
const btnMobile = document.querySelector(".btn-mobile");
const menuMobile = document.querySelector(".menu-mobile");

btnMobile.addEventListener("click", () => menuMobile.classList.toggle("active"));
menuMobile.addEventListener("click", () => menuMobile.classList.toggle("active"));


