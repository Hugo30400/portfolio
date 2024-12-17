document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('nav-icon4');
    const menu = document.querySelector('.nav-menu');
    const body = document.body;  // Sélection du body

    burger.addEventListener('click', function() {
        this.classList.toggle('open');
        menu.classList.toggle('open');
        body.classList.toggle('no-scroll');  // Toggle la classe no-scroll
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const headerHeight = header.offsetHeight;
        const currentScroll = window.scrollY;

        if (currentScroll <= headerHeight) {
            navbar.classList.remove('nav-scrolled');
            navbar.classList.remove('hide-nav');
        }
        else if (currentScroll > headerHeight + 50) {
            navbar.classList.add('nav-scrolled');
            if (currentScroll > lastScrollY) {
                navbar.classList.add('hide-nav');
            } else {
                navbar.classList.remove('hide-nav');
            }
        }

        lastScrollY = currentScroll;
    });
});