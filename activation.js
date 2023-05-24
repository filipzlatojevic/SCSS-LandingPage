const activationForm = document.querySelector('form#activation');
const activationInput = activationForm?.querySelector('input');

const inputValue = new Map();

activationInput?.addEventListener('change', () => {
  inputValue.set('email', activationInput.value);
});

activationForm?.addEventListener('submit', e => {
  e.preventDefault();

  const btn = activationForm.querySelector('button');
  const paragraph = document.querySelector('#activation-p');
  if (inputValue.get('email')) {
    btn.disabled = true;
    // TODO Once API is finished: fetch POST method, handle pending, resolve and reject state of async operations

    // simulate error handling
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function simulateError() {
      if (Math.random() < 0.5) {
        await delay(500);
        paragraph.innerHTML = 'Mails can get lost, but we can send you another activation email for your account.';
        paragraph.classList.remove('error');
        btn.innerHTML = 'Done!';
      } else {
        await delay(500);
        paragraph.classList.add('error');
        paragraph.innerHTML = "Sorry, something went wrong. We couldn't send you the link. Please try again.";
        btn.disabled = false;
      }
    }

    simulateError();
  }
});
