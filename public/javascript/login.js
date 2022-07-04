//const { response } = require("express");
console.log('\n\n\nlogin.js');

const loginFormHandler = async function (event) {
  event.preventDefault();
  console.log('Inside logformhandler');
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
      console.log('successful response'+res);
      return res.json();
    })
    .then(function () {
      //Jump to the workout page
      console.log('GOING TO WORKOUT');
      document.location.replace('/api/workout');
    })
    .catch((err) => console.log('you messed up'+err));
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
