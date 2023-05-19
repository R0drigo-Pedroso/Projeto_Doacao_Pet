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