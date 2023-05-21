const themeBtn = document.querySelector('#theme-toggle');
const html = document.querySelector('html');
let darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') {
  enableDarkMode();
}

themeBtn.addEventListener('click', () => {
  trans();
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  html.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
  html.classList.remove('dark');
  localStorage.setItem('darkMode', '');
}

// function for transition theme changing
function trans() {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 260);
}
