/* Ejercicio 5: Eliminar un Elemento de un Array
Completar la función eliminarElemento que recibe un array de strings y un string stringEliminar como parámetros, y haz que devuelva un array sin el elemento que se eliminó. Si el elemento no está en el array, la función debe retornar null. */

let array_de_strings = ["a", "b", "c", "d", "e"]

function eliminarElemento (array, string) {
    if (array.indexOf(string) === -1){
        return null
    }
    else{
        array.splice(1, array.indexOf(string))
    }
    return array 
}

console.log(eliminarElemento(array_de_strings, "x"))