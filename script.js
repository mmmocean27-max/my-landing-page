
const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Animated changing headline
const words = ["Digital", "Creative", "Powerful", "Modern"];
let index = 0;

const changingText = document.getElementById("changingText");

setInterval(() => {
    changingText.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % words.length;
        changingText.textContent = words[index];
        changingText.style.opacity = 1;
    }, 300);

}, 2200);
