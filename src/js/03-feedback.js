import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const saveFormState = throttle(() => {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
}, 500);

emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);

window.addEventListener('load', () => {
  const feedbackFormState = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (feedbackFormState) {
    emailInput.value = feedbackFormState.email;
    messageInput.value = feedbackFormState.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  if (emailInput.value === '' || messageInput === '') {
    return alert('Будь ласка, заповніть всі поля');
  }

  console.log(feedbackFormState);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
