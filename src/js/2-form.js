const forms = document.querySelectorAll('.feedback-form label');
const formInputs = [];

forms.forEach(form => {
  const input = form.querySelector('input, textarea');
  if (input) {
    input.addEventListener('input', foo);
    formInputs.push(input);
  }
});

function foo(event) {
  const feedback = {
    email: document.querySelector('[name="email"]').value,
    message: document.querySelector('[name="message"]').value,
  };

}

const form = document.querySelector('.feedback-form');

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

  const feedbackFormState = {
    email: document.querySelector('[name="email"]').value.trim(),
    message: document.querySelector('[name="message"]').value.trim(),
  };

  localStorage.setItem('feedbackFormState', JSON.stringify(feedbackFormState));
  form.reset();
  console.log(feedbackFormState);
  
  form.reset();
});
