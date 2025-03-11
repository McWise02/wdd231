document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navheader");
    const menuButton = document.querySelector(".hamburger-menu");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Toggle the dropdown menu when clicking the hamburger button
    menuButton.addEventListener("click", function () {
        dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
    });

    // Function to handle screen size changes
    function handleResize() {
        if (window.innerWidth <= 768) {
            nav.style.display = "none"; // Hide regular navigation
            menuButton.style.display = "block"; // Show hamburger menu
        } else {
            nav.style.display = "flex"; // Show regular navigation
            menuButton.style.display = "none"; // Hide hamburger menu
            dropdownMenu.style.display = "none"; // Hide dropdown menu
        }
    }

    // Run function on load and on resize
    handleResize();
    window.addEventListener("resize", handleResize);
});
