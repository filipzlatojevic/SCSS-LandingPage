const signUpForm = document.querySelector('form#sign-up');
const signUpInputs = signUpForm?.querySelectorAll('input');
const signUpCheckboxWrapper = signUpForm?.querySelector('.checkbox-wrapper');

const inputValues = new Map();
let termsChecked = false;

signUpInputs?.forEach(input => {
  input.addEventListener('change', () => {
    if (input.name === 'terms-checkbox') {
      inputValues.set(input.name, input.checked);
      if (input.checked) {
        termsChecked = true;
        signUpCheckboxWrapper.classList.remove('error');
      } else {
        termsChecked = false;
        signUpCheckboxWrapper.classList.add('error');
      }
    } else {
      inputValues.set(input.name, input.value);
    }
  });
});

signUpForm?.addEventListener('submit', e => {
  e.preventDefault();
  // TODO once API is done, handle pending, resolve and reject.

  if (
    inputValues.size >= 3 &&
    inputValues.get('name') &&
    inputValues.get('email') &&
    inputValues.get('password') &&
    inputValues.get('terms-checkbox')
  ) {
    alert(
      `Succesfull created account. ${inputValues.get(
        'name'
      )}, the verivfication link are sent to your email addres (${inputValues.get(
        'email'
      )}), please verificate your account.`
    );

    setTimeout(() => {
      window.location.href = '/sign-in.html';
    }, 1000);
  } else if (!termsChecked) {
    signUpCheckboxWrapper.classList.add('error');
  } else {
    console.log('something went wrong, try again.');
  }
});
