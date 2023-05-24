const lostPasswordForm = document.querySelector('form#lost-password');
const lostPassInput = lostPasswordForm?.querySelector('input');

const inputValueLostPass = new Map();

lostPassInput?.addEventListener('change', () => {
  inputValueLostPass.set('email', lostPassInput.value);
});

lostPasswordForm?.addEventListener('submit', e => {
  e.preventDefault();

  const paragraph = document.querySelector('#lost-password-p');
  const btn = lostPasswordForm.querySelector('button');
  if (inputValueLostPass.get('email')) {
    btn.disabled = true;
    // TODO Once API is finished: fetch POST method, handle pending, resolve and reject state of async operations

    // simulate error handling
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function simulateError() {
      if (Math.random() < 0.5) {
        await delay(500);
        paragraph.innerHTML = 'We will send you an email with a magic recovery link to reset your password.';
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
