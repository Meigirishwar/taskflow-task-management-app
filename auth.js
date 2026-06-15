function register() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
        name,
        email,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    window.location.href = "login.html";
}

function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (
        user &&
        user.email === email &&
        user.password === password
    ) {
        alert("Login Successful");

       window.location.href = "dashboard.html";
    }
    else {
        alert("Invalid Credentials");
    }
}
function logout() {
    window.location.href = "login.html";
}