const body = document.body;
const themeBtn = document.querySelector('#theme-toggle');
let darkMode = localStorage.getItem('darkMode');

const addDarkMode = () => {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
};

const addLightMode = () => {
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');
  localStorage.setItem('darkMode', '');
};

const toggleTheme = () => {
  !body.classList.contains('dark-mode') ? addDarkMode() : addLightMode();
};

darkMode === 'enabled' ? addDarkMode() : addLightMode();

themeBtn.addEventListener('click', toggleTheme);
