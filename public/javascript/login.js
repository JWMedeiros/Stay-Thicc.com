const loginFormHandler = async function (event) {
    event.preventDefault();

    const emailEl = document.querySelector("#email-login");
    const passwordEl = document.querySelector("#password-login");
    fetch("/api/user/login", {
        method: "post",
        body: JSON.stringify({
            username: emailEl.value,
            password: passwordEl.value
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then(function () {
            // after log in, it will jump to which routes?
            document.location.replace("/userworkout");
        })
        .catch(err => console.log(err));
};

document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);