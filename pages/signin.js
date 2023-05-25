const signInForm = document.querySelector('form#sign-in');
const signInInputs = signInForm?.querySelectorAll('input');
const rememberCheckbox = signInForm?.querySelector('#remember-checkbox');

const inputValuesSignIn = new Map();

signInInputs?.forEach(input => {
  input.addEventListener('change', () => {
    if (input.name === 'remember-checkbox') {
      inputValuesSignIn.set(input.name, input.checked);
    } else {
      inputValuesSignIn.set(input.name, input.value);
    }
  });
});

signInForm?.addEventListener('submit', e => {
  e.preventDefault();
  if (inputValuesSignIn.get('name') && inputValuesSignIn.get('password')) {
    // TODO Once API is finished: fetch POST method, remove alert, handle pending, resolve and reject state of async operations
    alert('Succesfull sign in.');

    if (inputValuesSignIn.get('remember-checkbox')) {
      localStorage.setItem('name', inputValuesSignIn.get('name'));
    }

    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  }
});
