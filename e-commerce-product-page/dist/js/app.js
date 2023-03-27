const burgerEl = document.querySelector('.burger');
const navEl = document.querySelector('.header__nav');
const overlayEl = document.querySelector('.overlay');

burgerEl.addEventListener('click', () => {
    burgerEl.classList.toggle('burger--open');
    navEl.classList.toggle('header__nav--open');
    overlayEl.classList.toggle('overlay--visible');
})