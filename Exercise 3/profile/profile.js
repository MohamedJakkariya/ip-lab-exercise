const username_input = document.querySelector('#username');
const website_input = document.querySelector('#website');
const error_message_div = document.querySelector('.error-message');

const submit_form = document.querySelector('#update_submit');

submit_form.addEventListener('click', e => {
  error_message_div.style.color = 'red';

  if (!username_input.value) return (error_message_div.innerHTML = 'username is required.');

  error_message_div.innerHTML = 'Updated succesfully.';

  error_message_div.style.color = 'green';
});
