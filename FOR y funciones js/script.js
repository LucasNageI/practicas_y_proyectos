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

/* suma de los primeros 5 numeros naturales */

let suma = 0

for (i = 1 ; i <=5; i = i + 1){
    suma += i
}

console.log(suma)

/* contador */

for (i = 1; i <= 5 ; i += 1) {
    console.log(i)
}

/* explicar el siguiente codigo */

function validarNumeros /* se declara una funcion llamada "validarNumeros" */ ()/* no se especifican parametros */{

    let num = prompt("ingrese un numero") /* se crea una variable llamada "num" que va a obtener un dato por medio de un prompt */

    while(!num || isNaN(num)){ /* bucle while, que lo que hace es que cada vez que el valor de num sea falsy, o NaN, se ejecute el codigo dentro de este while */
        num = prompt("error: vuelva a ingresar el numero") /* reasigna a la variable un valor nuevo de prompr, donde se pide que nuevamente se ingrese un numero */
    }

    num = Number(num) /* se pasa el string numerico ingresado del prompt al tipo de dato Number */

    console.log(num) /* muestra en consola la variable num, que contiene el valor numerico del dato ingresado */

    return num /* retorna la variable num */
}

validarNumeros() /* se invoca a la funcion, sin parametros porque la funcion no los especifico */

/* basicamente, esta funcion recibe un dato de un prompt que almacena en una variable, verifica que no sea NUll, ni undefined, ni "", ni NaN, para luego cambiar el tipo de dato de string a number, y despues mostrar en consola la variable, ademas de retornar el valor de la variable  */