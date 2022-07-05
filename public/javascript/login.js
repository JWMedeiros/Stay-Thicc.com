const loginFormHandler = async function (event) {
  event.preventDefault();
  const emailEl = document.querySelector('#email-login');
  const passwordEl = document.querySelector('#password-login');
  fetch('/api/user/login', {
    method: 'post',
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (res){
      return res.json();
    })
    .then(function () {
      //Jump to the workout page
      document.location.replace('/workout');
    })
    .catch((err) => console.log('you messed up'+err));
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
