document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Email: ${email}\nPassword: ${password}`);
});

document.getElementById('otp-login').addEventListener('click', function () {
    alert('Login via OTP');
});

document.getElementById('forgot-password').addEventListener('click', function () {
    alert('Forgot Password');
});

document.getElementById('sign-up').addEventListener('click', function () {
    document.querySelector(".right-panel-login").style.display = "none";
    document.querySelector(".right-panel").style.display = "block";
});

function showPassword() {
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    if (password1.type === "password") {
        password1.type = "text";
        password2.type = "text";
    } else {
        password1.type = "password";
        password2.type = "password";
    }
}

function signup() {
    const login = document.querySelector(".right-panel-login");
    const sign = document.querySelector(".right-panel");
    login.style.display = "block";
    sign.style.display = "none";
}
function signin() {
    const login = document.querySelector(".right-panel-login");
    const sign = document.querySelector(".right-panel");
    login.style.display = "none";
    sign.style.display = "block";
}