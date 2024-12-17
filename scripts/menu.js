document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('nav-icon4');
    const menu = document.querySelector('.nav-menu');

    burger.addEventListener('click', function() {
        this.classList.toggle('open');
        menu.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        // Obtenir la position et la hauteur du header
        const headerHeight = header.offsetHeight;
        const currentScroll = window.scrollY;

        // Si on a dépassé le header
        if (currentScroll > headerHeight) {
            // Gestion de l'affichage/masquage basé sur la direction du scroll
            if (currentScroll > lastScrollY) {
                navbar.classList.add('hide-nav');
            } else {
                navbar.classList.remove('hide-nav');
            }
            navbar.classList.add('nav-scrolled');
        } else {
            // Si on est dans le header
            navbar.classList.remove('nav-scrolled');
            navbar.classList.remove('hide-nav');
        }

        lastScrollY = currentScroll;
    });
});