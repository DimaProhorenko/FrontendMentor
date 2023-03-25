const root = document.documentElement;
const togglerBtn = document.querySelector('.toggler__btn');

togglerBtn.addEventListener('click', e => {
    togglerBtn.classList.toggle('toggler__btn--active');
    root.classList.toggle('theme-dark')
})