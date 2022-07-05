const signupFormHandler = async function (event) {
  event.preventDefault();

  const firstnameEl = document.querySelector('#firstname-signup');
  const lastnameEl = document.querySelector('#lastname-signup');
  const emailEl = document.querySelector('#email-signup');
  const weightEl = document.querySelector('#weight-signup');
  const passwordEl = document.querySelector('#password-signup');
  fetch('/api/user', {
    method: 'post',
    body: JSON.stringify({
      first_name: firstnameEl.value,
      last_name: lastnameEl.value,
      email: emailEl.value,
      user_weight: weightEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function () {
      // after log in, it will jump to which routes?
      document.location.replace('/workout');
    })
    .catch((err) => console.log(err));
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
