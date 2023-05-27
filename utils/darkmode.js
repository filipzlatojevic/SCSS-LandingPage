const themeBtn = document.querySelector('#theme-toggle');
const body = document.body;
let darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') {
  enableDarkMode();
}

themeBtn.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  // trans();
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
  body.classList.remove('dark');
  localStorage.setItem('darkMode', '');
}

// function for transition theme changing
// function trans() {
//   if (!isMobileDevice()) {
//     document.documentElement.classList.add('transition');
//     window.setTimeout(() => {
//       document.documentElement.classList.remove('transition');
//     }, 260);
//   }
// }

// function isMobileDevice() {
//   return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
// }
