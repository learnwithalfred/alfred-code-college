const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenuButton = document.querySelector('.close-button');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  mobileNav.classList.add('active');
  body.classList.add('no-scroll-bg');
});

closeMenuButton.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  body.classList.remove('no-scroll-bg');
});

document.querySelectorAll('.nav__item').forEach((item) => {
  item.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    body.classList.remove('no-scroll-bg');
  });
});
