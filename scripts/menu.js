document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('nav-icon4');
    const menu = document.querySelector('.nav-menu');

    burger.addEventListener('click', function() {
        this.classList.toggle('open');
        menu.classList.toggle('open');
    });
});