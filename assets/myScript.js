const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menu.addEventListener("click", ()=> {
    menu.classList.toggle("bx-x");
    navBar.classList.toggle("open");
});

window.addEventListener("scroll", ()=> {
    menu.classList.remove("bx-x");
    navBar.classList.remove("open");
});

const sr = ScrollReveal({
    distance: "30px",
    duration: 2500,
    reset: true
});

sr.reveal(".home-text", {delay: 200, origin: "left"});
sr.reveal(".home-img", {delay: 200, origin: "right"});
sr.reveal(".container, .about, .menu, .contact", {delay: 200, origin: "bottom"});