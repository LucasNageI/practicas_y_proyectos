const formulario = document.getElementById("formulario")

let string_num = ""

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
    RESET: {
        accion: () => {
            string_num.replaceAll(string_num, "") 
            string_num = ""
        }
    },
    DEL: {
        accion: () => {
            let string_modificado = string_num.slice(0, -1)
            string_num = string_modificado
        } 
    }
}

let numero = ""
let resultado_operacion = ""
let operacion = []

const handleCalculardora = (event) => {

    numero = event.target.value

    if((numero === "1"||numero === "2"||numero === "3"||numero === "4"||numero === "5"||numero === "6"||numero === "7"||numero === "8" ||numero === "9"||numero === "0")){
        string_num = string_num + numero
        resultado.innerText = string_num
    }

    else if(numero === undefined || numero === "=" || numero === "RESET" || numero === "DEL"){
        string_num = string_num + ""
        if(numero === "DEL"){
            ACCIONES.DEL.accion()
            resultado.innerText = string_num
        }
        else if(numero === "RESET"){
            ACCIONES.RESET.accion()
            resultado.innerText = string_num
        }
    }

    else{
        if(string_num.includes("+") || string_num.includes("-") || string_num.includes("x") || string_num.includes("/") || string_num === ""){
            string_num = string_num + ""
            resultado.innerText = string_num
        }
        else{
            string_num = string_num + " " + numero + " "
            resultado.innerText = string_num
        }
    }
}

const handleSubmit = (event) => {
    event.preventDefault()
    operacion = string_num.split(" ")
    if(operacion[1] === "+"){
        resultado_operacion = ACCIONES.SUMAR.accion(parseFloat(operacion[0]), parseFloat(operacion[2]))
        resultado.innerText = resultado_operacion
    }
    else if(operacion[1] === "-"){
        resultado_operacion = ACCIONES.RESTAR.accion(parseFloat(operacion[0]), parseFloat(operacion[2]))
        resultado.innerText = resultado_operacion
    }
    else if(operacion[1] === "x"){
        resultado_operacion = ACCIONES.MULTIPLICAR.accion(parseFloat(operacion[0]), parseFloat(operacion[2]))
        resultado.innerText = resultado_operacion
    }
    else if(operacion[1] === "/"){
        resultado_operacion = ACCIONES.DIVIDIR.accion(parseFloat(operacion[0]), parseFloat(operacion[2]))
        resultado.innerText = resultado_operacion
    }
    string_num = ""
}

formulario.addEventListener("submit", handleSubmit)
formulario.addEventListener("click", handleCalculardora)