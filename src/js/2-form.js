const forms = document.querySelectorAll('.feedback-form label');
const formInputs = [];

forms.forEach(form => {
  const input = form.querySelector('input, textarea');
  if (input) {
    input.addEventListener('input', saveInputToLocalStorage);
    formInputs.push(input);
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    let isFormValid = true;

    formInputs.forEach(input => {
      if (input.value.trim() === '') {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      alert('Всі поля форми повинні бути заповнені');
      return;
    }
    localStorage.removeItem(feedbackFormState);
    form.reset();
  });
});

function saveInputToLocalStorage(event) {
  const feedbackFormState = {
    email: document.querySelector('[name="email"]').value,
    message: document.querySelector('[name="message"]').value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}
