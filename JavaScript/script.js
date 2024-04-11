const navbar = document.querySelector("#nav")
const navBtn = document.querySelector("#nav-btn")
const closeBtn = document.querySelector("#close-btn")
const sidebar = document.querySelector("#sidebar")

// fix the navbar
window.addEventListener("scroll", function () {
    if (window.scrollY > 1) {
        navbar.classList.add("nav-fixed");
    } 
    
    else {
        navbar.classList.remove("nav-fixed");
    }
});

// show the sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("sidebar-show")
});

// hide the sidebar
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("sidebar-show")
});