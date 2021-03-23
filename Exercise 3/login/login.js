const username_input = document.querySelector('#username');
const password_input = document.querySelector('#password');
const confirmation_check_box = document.querySelector('#confirmation-check');
const error_message_div = document.querySelector('.error-message');

const submit_form = document.querySelector('#login_submit');

submit_form.addEventListener('submit', e => {
  e.preventDefault();

  error_message_div.style.color = 'red';

  if (!username_input.value) return (error_message_div.innerHTML = 'username is required.');

  if (!password_input.value) return (error_message_div.innerHTML = 'passwrod is required.');

  error_message_div.innerHTML = "You're logged in.";

  error_message_div.style.color = 'green';
});
