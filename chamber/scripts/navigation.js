const hamburgerMenu = document.querySelector("#navButton");
const navElement = document.querySelector(".menuLinks");
const navElements = document.querySelectorAll(".menuLinks li");

hamburgerMenu.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerMenu.classList.toggle("open");
})

navElements.forEach(element => {
    element.addEventListener("click", () => {
        let currentPage = document.querySelector(".current-menu-item");
        currentPage.classList.toggle("current-menu-item");
        element.classList.toggle("current-menu-item");
    })
});