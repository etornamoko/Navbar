let toggleMenu = document.getElementById("toggle-menu");
let navList = document.getElementById("nav-list");
let navLinks = navList.querySelectorAll("li");

toggleMenu.addEventListener("click", () =>{
    navList.classList.toggle("active");
    toggleMenu.classList.toggle("fa-times")
});

navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () =>{
        navList.classList.remove("active");
        toggleMenu.classList.remove("fa-times")
    });
});