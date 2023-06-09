import './utils/darkmode';
import './utils/formHandle';
import './utils/slider';

import './pages/signin';
import './pages/activation';
import './pages/lost-password';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-wrapper nav');
const preloader = document.querySelector('#preloader');

// preloader
window.addEventListener('load', () => {
  preloader.style.animation = 'hiding 600ms ease 0s 1 normal forwards';
  preloader.querySelector('img').style.scale = 0.2;
  preloader.querySelector('img[alt="spinner"]').style.scale = 0;
});

preloader.addEventListener('animationend', () => {
  preloader.style.display = 'none'; // Hide the preloader after the animation ends
});

// nav
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

// fetching
async function fetchData(type, callback, destination) {
  try {
    const res = await fetch('./data.json');
    const data = await res.json();

    for (let item of data[type]) {
      const el = callback(item);
      destination?.appendChild(el);
    }
  } catch (error) {
    console.log(error);
  }
}

// features section
const featuresContainer = document.querySelector('#features-container');

function createFeature({ title, desc }) {
  const feature = document.createElement('div');
  feature.classList.add('feature-card');
  feature.innerHTML = `
  <img src="./home/features/features-icon.svg" />
    <span>${title}</span>
    <p>${desc}</p>
  `;
  return feature;
}

window.onload = fetchData('features', createFeature, featuresContainer);

// qr-types section
const qrTypesContainer = document.querySelector('#qr-types-container');

function createCard({ title, desc }) {
  const card = document.createElement('div');
  card.classList.add('card-type-wrapper');
  let src = title.toLowerCase();

  card.innerHTML = `
  <div class="card">
  <div>
    <img src="./home/qr_code_types_icons/${src}.svg" />
    <span>${title}</span>
  </div>
  <p>${desc}</p>
  </div>
  `;
  return card;
}

window.onload = fetchData('types', createCard, qrTypesContainer);

// pricing section
const pricingCardLists = document.querySelectorAll('.pricing-card ul');

pricingCardLists.forEach(ul => {
  for (let i = 0; i < 12; i++) {
    const li = document.createElement('li');
    li.innerText = '4 QR code types';
    ul.appendChild(li);
  }
});
