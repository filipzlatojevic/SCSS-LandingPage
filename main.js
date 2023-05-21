// import '/qr-code-purchase.svg';
// import hero from '/home/qr-code-purchase.svg';
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-wrapper nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

// console.dir(hero);

// const heroImg = document.querySelector('#hero-img');
// heroImg.src = hero;
