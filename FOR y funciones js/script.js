/* imprime todos los numeros pares del 1 al 10 */

console.log("los numeros pares entre el 0 y el 10 son: ")

for (let i = 0; i <= 10 ; i += 2) {
    console.log(i)
}

/* suma de los primeros 5 numeros naturales */

console.log("la suma de los primeros 5 numeros naturales da: ")

let suma = 0

for (i = 1 ; i <=5; i = i + 1){
    suma += i
}

console.log(suma)

console.log("contador del 1 al 5")

/* contador */

for (i = 1; i <= 5 ; i += 1) {
    console.log(i)
}

/* explicar el siguiente codigo */

function validarNumeros /* se declara una funcion llamada "validarNumeros" */ (num)/* con el parametro num */{

    num = prompt("ingrese un numero") /* al parametro num se le asigna un valor ingresado por prompt */

    while(!num || isNaN(num)){ /* bucle while, que lo que hace es que cada vez que el valor de num sea falsy, o NaN, se ejecute el codigo dentro de este while */
        num = prompt("error: vuelva a ingresar el numero") /* reasigna al parametro un valor nuevo de prompt, donde se pide que nuevamente se ingrese un numero */
    }

    num = Number(num) /* se pasa el string numerico ingresado del prompt al tipo de dato Number */

    console.log("el numero ingresado es: " + num) /* muestra en consola el parametro num, que contiene el valor numerico del dato ingresado */

    return num /* retorna el parametro num */
}

validarNumeros() /* se invoca a la funcion, sin parametros porque la funcion no los especifico */

/* basicamente, esta funcion recibe un dato de un prompt que almacena en una variable, verifica que no sea NUll, ni undefined, ni "", ni NaN, para luego cambiar el tipo de dato de string a number, y despues mostrar en consola la variable, ademas de retornar el valor de la variable  */



/* Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales». */

function numeroMayor(numero1, numero2, numero3) {

    if(numero1 > numero2 && numero1 > numero3) {
        console.log("el primer numero es el mayor (" + numero1 + ")")
    }
    else if (numero2 > numero1 && numero2 > numero3) {
        console.log("el segundo numero es el mayor (" + numero2 + ")")
    }
    else if (numero3 > numero1 && numero3 > numero2) {
        console.log("el tercer numero es el mayor (" + numero3 + ")")
    }
    else if (numero1 === numero2  || numero1 === numero3 || numero2 === numero3){
        console.log("los numeros son iguales")
    }
    else{
        console.log("error")
    }
}

let numeroIngresado1 = Number(prompt("ingrese el primer numero a comparar"))
let numeroIngresado2 = Number(prompt("ingrese el segundo numero a comparar"))
let numeroIngresado3 = Number(prompt("ingrese el tercer numero a comparar"))

let ejercicioNumeros = numeroMayor(numeroIngresado1, numeroIngresado2, numeroIngresado3)
console.log(ejercicioNumeros)