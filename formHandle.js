const form = document.querySelector('form#sign-up');
const inputs = form?.querySelectorAll('input');
const inputValues = new Map();

inputs?.forEach(input => {
  input.addEventListener('change', () => {
    if (input.name === 'terms-checkbox') {
      inputValues.set(input.name, input.checked);
    } else {
      inputValues.set(input.name, input.value);
    }
  });
});

form?.addEventListener('submit', e => {
  e.preventDefault();

  if (
    inputValues.size >= 3 &&
    inputValues.get('name') &&
    inputValues.get('email') &&
    inputValues.get('password') &&
    inputValues.get('terms-checkbox')
  ) {
    console.log('Submited succesfuly');

    console.log(inputValues.get('name'));

    alert(`Succesfull. Name: ${inputValues.get('name')}`);
  }
});
