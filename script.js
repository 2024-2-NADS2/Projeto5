// script.js

// Animação no carregamento dos ícones das redes sociais
document.addEventListener("DOMContentLoaded", function() {
    const socialMediaIcons = document.querySelectorAll("footer .social-media li img");
    socialMediaIcons.forEach(icon => {
        icon.style.opacity = 0; // Inicialmente invisível
        icon.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
            icon.style.opacity = 1; // Gradualmente visível
        }, 500);
    });
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Feedback visual ao clicar no botão de chamada para ação
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', function() {
    this.style.backgroundColor = '#00BFFF'; // Mantenha a cor de fundo
    setTimeout(() => {
        this.style.backgroundColor = ''; // Restaura a cor original após o clique
    }, 200);
});