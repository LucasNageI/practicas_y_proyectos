const input_1_html = document.getElementById("input-1")

const submit_1_html = document.getElementById("submit-1")

submit_1_html.addEventListener("click", () => {
    console.log(input_1_html.value)
    input_1_html.value = ""
})

const formulario_html = document.getElementById("formulario")

const handler_formulario = (event) => {
    event.preventDefault()
    console.log("su nombre es " + formulario_html.nombre.value + " " + formulario_html.apellido.value)
    formulario_html.nombre.value = ""
    formulario_html.apellido.value = ""
}

formulario_html.addEventListener("submit", handler_formulario)