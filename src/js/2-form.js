const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const localStorageKey = 'feedback-form-state';

const savedDataForm = JSON.parse(localStorage.getItem(localStorageKey));

if (savedDataForm) {
  emailInput.value = savedDataForm.email;
  messageInput.value = savedDataForm.message;
}

form.addEventListener('input', safeInputForm);
function safeInputForm(event) {
  const feedbackFormState = {
    email: form.querySelector('[name="email"]').value,
    message: form.querySelector('[name="message"]').value,
  };

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}
form.addEventListener('submit', cleanInputForm);
function cleanInputForm(event) {
  event.preventDefault();
  let isFormValid = true;

  const formInputs = form.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    if (input.value.trim() === '') {
      isFormValid = false;
    }
  });

  if (isFormValid === false) {
    alert('All form fields must be filled in');
    return;
  }

  localStorage.removeItem('feedback-form-state');
  form.reset();
}
