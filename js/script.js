const header = document.querySelector("header");
const banner = document.querySelector(".about");
const headerHeight = header.clientHeight;
const bannerHeight = banner.clientHeight;
const bannerYposition = banner.getBoundingClientRect();

function checkHeaderPosition(){
    if(window.scrollY > bannerHeight) {
        header.classList.remove("in-banner");
    } else {
        header.classList.add("in-banner");
    }
}

window.addEventListener('scroll', () => {
    checkHeaderPosition();
})