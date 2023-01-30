const openMenuMobile = document.querySelector('.header__menu-container--open');
const closeMenuMobile = document.querySelector('.header__menu-container__menu--close__close');
const menuMobile = document.querySelector('.header__menu-container__menu');

console.log(menuMobile);

function openAndCloseMenuMobile() {
    menuMobile.classList.toggle('active');
}


openMenuMobile.addEventListener('click', openAndCloseMenuMobile);
closeMenuMobile.addEventListener('click', openAndCloseMenuMobile);