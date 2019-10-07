export function showMobileMenu() {
    const menu = document.querySelector('.navigation-bar .navbar-menu');
    const submitPollButton = document.querySelector('.navigation-bar .submit-poll-button');

    menu.style.display = 'block';
    submitPollButton.style.display = 'block';
}

export function hideMobileMenu() {
    const menu = document.querySelector('.navigation-bar .navbar-menu');
    const submitPollButton = document.querySelector('.navigation-bar .submit-poll-button');

    menu.style.display = 'none';
    submitPollButton.style.display = 'none';
}