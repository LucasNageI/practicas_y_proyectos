const form_html = document.getElementById("form")
const username_html = document.getElementById("username")
const email_html = document.getElementById("email")
const password_html = document.getElementById("password")
const confirm_password_html = document.getElementById("confirm-password")

function validarEmail (email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
}
function verificarPassword (password) {
    return password !== password.toLowerCase() && password.length >= 8
}
function validarPasswords (password1, password2) {
    return password1 === password2
}

function resetearEmail () {
    email_html.value = ""
}
function resetearPassword () {
    password_html.value = ""
}
function resetearConfirmPassword () {
    confirm_password_html.value = ""
}

const DATOS = {
    EMAIL: {
        error: "email no valido",
        reset: resetearEmail,
        validacion: validarEmail
    },
    PASSWORD: {
        error: "contraseña no valida",
        reset: resetearPassword,
        validacion: verificarPassword
    },
    PASSWORDS: {
        error: "las contraseñas no coinciden",
        reset: resetearConfirmPassword,
        validacion: validarPasswords
    }
}

function validaciones (error, validacion, reset) {
    if(validacion === false){
        reset()
        console.log(error)
    }
}

const formHandler = (event) => {
    event.preventDefault()
    validaciones(DATOS.EMAIL.error, DATOS.EMAIL.validacion(email_html.value), DATOS.EMAIL.reset)
    validaciones(DATOS.PASSWORD.error, DATOS.PASSWORD.validacion(password_html.value), DATOS.PASSWORD.reset)
    validaciones(DATOS.PASSWORDS.error, DATOS.PASSWORDS.validacion(password_html.value, confirm_password_html.value), DATOS.PASSWORDS.reset)
    console.log(`
        username: ${username_html.value} \n
        email: ${email_html.value} \n
        password: ${password_html.value} \n
        confirm password: ${confirm_password_html.value}
        `
    )
}

form_html.addEventListener("submit", formHandler)