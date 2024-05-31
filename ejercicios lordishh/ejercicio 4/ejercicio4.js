/* Ejercicio 4: Suma de Números Pares en un Array
Completar la función sumarPares que recibe un array de números para devuelva la suma de todos los números que sean pares. */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumarPares (numeros) {
    let suma_numeros_pares = 0
    for(let i = 1; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            suma_numeros_pares = suma_numeros_pares + numeros[i]
        }
    }
    return suma_numeros_pares
}

console.log(sumarPares(numeros))