const sections = document.querySelectorAll("section");

sections.forEach(section => {
    const button = section.querySelector("#expand-button");
    const content = section.querySelector(".content");

    button.addEventListener("click", () => {
        expand(content);
    });
});



function expand (content) {
    content.classList.toggle("open");
}