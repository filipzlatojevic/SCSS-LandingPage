const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-wrapper nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

// fetching
async function fetchData(type, callback, destination) {
  try {
    const res = await fetch('./data.json');
    const data = await res.json();

    console.log(data[type][0]['desc']);

    for (let feat of data[type]) {
      const item = callback(feat);
      destination.appendChild(item);
    }
  } catch (error) {
    console.log(error);
  }
}

// features
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

// qr-types
const qrTypesContainer = document.querySelector('#qr-types-container');

function createCard({ title, desc }) {
  const card = document.createElement('div');
  card.classList.add('card');
  let src = title.toLowerCase();

  card.innerHTML = `
  <div>
    <img src="./home/qr_code_types_icons/${src}.svg" />
    <span>${title}</span>
  </div>
  <p>${desc}</p>
  `;
  return card;
}

window.onload = fetchData('types', createCard, qrTypesContainer);
