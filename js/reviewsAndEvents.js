document.addEventListener('DOMContentLoaded', () => { 

    let navMenu = document.getElementById("header");
    window.addEventListener("scroll", (e) => {
        // меню навигации //
        if (window.scrollY >= 100) {
            navMenu.style.backgroundColor = "rgba(48, 40, 39, 0.6)";
        }
        else {
            navMenu.style.backgroundColor = "rgba(48, 40, 39, 0)";
        }
    });
});