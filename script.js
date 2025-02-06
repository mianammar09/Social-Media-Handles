const textElement = document.getElementById("typing-text");
const texts = ["Ammar Ajmal.", "a Software Engineer.", "Self-Optimistic.", "Driven by Personal Growth.", "Focused on Achieving My Own Goals.", "Passionate About Enhancing My Own Skills."];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[index];
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentText.length) {
        speed = 2000; // Pause after typing
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        speed = 500; // Pause before retyping
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    // If scrolling down, hide the navbar
    if (prevScrollPos < currentScrollPos) {
        navbar.style.top = "-80px"; // Adjust this value based on your navbar height
    } else {
        navbar.style.top = "0"; // Show navbar
    }
    prevScrollPos = currentScrollPos;
};