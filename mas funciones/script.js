/* Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario. */

function vocales (letra) {
    letra = letra.toLowerCase()
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        return true
    }
    else {
        return false
    }
}

let letraIngresada = "a"
console.log(vocales(letraIngresada))

/* Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx». */

function generarCaracteres (numero, caracter) {
    let respuesta = ""
    for (let i = 0; i < numero ; i++){
        respuesta += caracter
    }
    return respuesta
}

console.log(generarCaracteres(10, "x"))