let hamburger = document.getElementById("hamburger-icon");

hamburger.addEventListener("click", toggleNavMenu);

// declare a function which toggles the navtop
function toggleNavMenu() {
    let navList = document.getElementById("nav-list");
    navList.classList.toggle("visible");
}