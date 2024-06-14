const formulario = document.getElementById("formulario")

let string_num = ""

let numero = ""

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

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
}

const handleCalculardora = (event) => {

    if((typeof(Number(event.target.value) === 1, 2, 3, 4, 5, 6, 7, 8, 9, 0))){
        numero = event.target.value
        if(numero === undefined || numero === AC || numero === DEL){
            string_num = string_num + ""
            resultado.innerText = string_num
        }
        else{
            if(event.target === formulario.DEL){
                ACCIONES.DEL.accion()
                resultado.innerText = string_num
            }
            else if(event.target === formulario.AC){
                ACCIONES.AC.accion()
                resultado.innerText = string_num
            }
            else{
            string_num = string_num + numero
            resultado.innerText = string_num
            }
        }
    }

}

formulario.addEventListener("submit", handleSubmit)
formulario.addEventListener("click", handleCalculardora)