function verificarEmail() {

    var email = document.getElementById("email").value;

    var verificacionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (verificacionEmail.test(email)) {
        alert("Logging In")
        }

    else {
        alert("Invalid email");
    }
}

document.getElementById("send_button").addEventListener("click", verificarEmail);