/* Ejercicio 6: Crear una Lista de Nombres
Completar la función crearLista que reciba un array de nombres y un string nombreDeLista, y haz que devuelva un string con el formato especificado. */

function crearLista (array, nombreArray) {
    return `${nombreArray}: ` + [array]
}

console.log(crearLista(["maxi", "seba", "lucas"], "amigos"))