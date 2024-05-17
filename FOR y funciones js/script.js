/* function suma (numero1, numero2) {
    let resultadoSuma = (numero1 + numero2)
    return (resultadoSuma)
}

function multiplicacion (numero1, numero2) {
    let resultadoMultiplicacion = (numero1 * numero2)
    return (resultadoMultiplicacion)
}

function resta (numero1, numero2) {
    let resultadoResta = (numero1 - numero2)
    return (resultadoResta)
}

function division (numero1, numero2) {
    let resultadoDivision = (numero1 / numero2)
    return (resultadoDivision)
}

let operacion = prompt("Que operacion desea realizar?")

while (operacion != "suma" && operacion != "multiplicacion" && operacion != "resta" && operacion != "division") {
    operacion = prompt("operacion no reconocida, vuelva a intentarlo")
}

if(operacion === "suma") {
    let numero1 = Number(prompt("Ingrese el primer numero a sumar"))
    let numero2 = Number(prompt("Ingrese el segundo numero"))
    console.log(suma(numero1, numero2))
}
else if(operacion === "multiplicacion"){
    let numero1 = Number(prompt("Ingrese el primer numero a multiplicar"))
    let numero2 = Number(prompt("Ingrese el segundo numero"))
    console.log(multiplicacion(numero1, numero2))
}
else if(operacion === "resta"){
    let numero1 = Number(prompt("Ingrese el primer numero a restar"))
    let numero2 = Number(prompt("Ingrese el segundo numero"))
    console.log(resta(numero1, numero2))
}
else if(operacion === "division"){
    let numero1 = Number(prompt("Ingrese el primer numero a dividir"))
    let numero2 = Number(prompt("Ingrese el segundo numero"))
    console.log(division(numero1, numero2))
} */

/* imprime todos los numeros pares del 1 al 10 */

for (let i = 0; i <= 10 ; i += 2) {
    console.log(i)
}