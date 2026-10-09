// Qasim Ali Portfolio Website

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Qasim Ali Portfolio!");
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Project cards animation
const cards = document.querySelectorAll('.card');

cards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        this.style.transition = '0.3s ease';
    });
});