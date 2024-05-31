/* Ejercicio 3: Filtrar Números Mayores a 10
Completar la función filtrarMayoresADiez que recibe un array de números y haz que devuelva un array con todos los números mayores a 10. */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

function filtrarMayoresADiez (numeros) {
    let array_numeros_menores_a_10 = []
    for (let i = 0; numeros[i] < 10; i++){
        array_numeros_menores_a_10 = array_numeros_menores_a_10 + " " + numeros[i]
    }
    return array_numeros_menores_a_10
}

console.log(filtrarMayoresADiez(numeros))