const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn i');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})