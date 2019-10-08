export function showMobileMenu() {
    const menu = document.querySelector('.navigation-bar .navbar-menu');
    menu.classList.toggle('active');
}

export function hideMobileMenu() {
    const menu = document.querySelector('.navigation-bar .navbar-menu');

    menu.classList.toggle('active');
}