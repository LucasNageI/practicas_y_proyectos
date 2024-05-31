/* Ejercicio 2: Concatenación de Todos los Strings en un Array
Completar la función concatenarStrings que recibe un array de strings como parámetro y haz que devuelva la concatenación de todos esos strings en un único string. */

let array_de_strings = ["hola", "como", "va"]

function concatenarStrings (strings) {
    return strings[0] + " " + strings[1] + " " + strings[2]
}

console.log(concatenarStrings(array_de_strings))