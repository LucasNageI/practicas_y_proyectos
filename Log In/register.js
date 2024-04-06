function verificarEmail() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    var verificacionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var verificacionPassword = /^[A-Za-z0-9._]+$/;;

    if (verificacionEmail.test(email)) {

            if (verificacionPassword.test(password)) {

                if (password === confirmpassword) {
                    alert("Singing Up")
                } else {
                    alert("Passwords are different")
                }

            } else {
                alert("Insecure password")
            }
        }

    else {
        alert("Invalid email");
    }
}

document.getElementById("send_button").addEventListener("click", verificarEmail);

