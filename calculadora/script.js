const formulario = document.getElementById("formulario")

const ACCIONES = {
    SUMAR: {
        accion: (a, b) => a + b
    },
    RESTAR: {
        accion: (a, b) => a - b
    },
    MULTIPLICAR: {
        accion: (a, b) => a * b
    },
    DIVIDIR: {
        accion: (a, b) => a / b
    },
    AC: {
        accion: (texto) => texto = ""
    },
    DEL: {
        accion: (texto) => texto.trimEnd() 
    }
}

const handleSubmit = (event) => {
    event.preventDefault()
    const submit_btn = event.target
    console.log(event.target)
}

let string_num = ""

const handleCalculardora = (event) => {
    const numero = event.target.value
    string_num = string_num + numero
    resultado.innerText = string_num
    if(event.target === DEL){
        ACCIONES.DEL.accion(string_num)
    }

}

formulario.addEventListener("submit", handleSubmit)
formulario.addEventListener("click", handleCalculardora)