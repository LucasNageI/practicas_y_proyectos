/* en general, se usan para tener una sintaxis mas facil de leer, o como alternativa a las funciones anonimas tradicionales, fueron agregadas en ES6 */

/* esta es la sintaxis basica de una arrow function */

const arrow_function = (a, b) => a + b /* como la funcion no tiene llaves, directamente retorna lo que esta despues de la flecha */

console.log(arrow_function(10, 8))

const arrow_function_2 = (c, d) => {return c - d} /* si vamos a poner llaves, si o si necesitamos un "return", de lo contrario, devolvera undefined */

console.log(arrow_function_2(10, 5))

/* ejercicios */

/* Escribe una arrow function que reciba un nombre y devuelva un mensaje de saludo. */

const saludo = (nombre) => "hola, " + nombre

console.log(saludo("pepe"))

/* Escribe una arrow function que reciba un array de números y devuelva un nuevo array con solo los números pares. */

const numeros = [1, 2, 3, 4, 5, 6]

const devolverPares = (array) => {
    let cantidad_numeros = array.length
    let array_pares = []
    for(let i = 0; i < cantidad_numeros; i++)
    if(i % 2 === 0){
        array_pares.push(i)
    }
    return array_pares
}

console.log(devolverPares(numeros))

/* Escribe una arrow function que reciba un array de números y devuelva un nuevo array con el cuadrado de cada número. */

const array_de_numeros = [2, 4, 6, 5, 1, 0, 25]

const devolverNumeroAlCuadrado = (numeros) => {
    let cantidad_numeros = numeros.length
    let array_de_cuadrados = []
    for(let i = 0; i < cantidad_numeros; i++){
        array_de_cuadrados.push(numeros[i] * numeros[i])
    }
    return array_de_cuadrados
}

console.log(devolverNumeroAlCuadrado(array_de_numeros))

/* Escribe una arrow function que reciba un array de palabras y devuelva un nuevo array con la longitud de cada palabra. */

const array_de_palabras = ["hola", "como", "te", "va", "?"]

const longitudPalabras = (palabras) => {
    let cantidad_palabras = palabras.length
    let array_de_longitud = []
    for(let i = 0; i < cantidad_palabras; i++){
        array_de_longitud.push(palabras[i].length)
    }
    return array_de_longitud
}

console.log(longitudPalabras(array_de_palabras))

/* Escribe una arrow function que reciba un array de palabras y devuelva un nuevo array con todas las palabras en mayúsculas. */

const palabrasEnMayusculas = (palabrasAConvertir) => {
    let cantidad_palabras = palabrasAConvertir.length
    let array_de_palabras_convertidas = []
    for(let i = 0; i < cantidad_palabras; i++){
        array_de_palabras_convertidas.push(palabrasAConvertir[i].toUpperCase())
    }
    return array_de_palabras_convertidas
}

console.log(palabrasEnMayusculas(array_de_palabras))

/* Escribe una arrow function que reciba un array de números y devuelva la suma de todos los números. */

const numeros_a_sumar = [12, 2873, 3472]

const sumarNumeros = (numeros) => {
    let cantidad_numeros = numeros.length
    let numeros_sumados = 0
    for(let i = 0; i < cantidad_numeros; i++){
        numeros_sumados = numeros_sumados + numeros[i]
    }
    return numeros_sumados
}

console.log(sumarNumeros(numeros_a_sumar))

/* Escribe una arrow function que reciba un array de palabras y un número n, y devuelva un nuevo array con solo las palabras que tengan más de n caracteres. */

const devolverPalabrasLargas = (palabras, limite) => {
    let cantidad_palabras = palabras.length
    let palabras_permitidas = []
    for(let i = 0; i < cantidad_palabras; i++){
        if(palabras[i].length > limite){
            palabras_permitidas.push(palabras[i])
        }
    }
    return palabras_permitidas
}

console.log(devolverPalabrasLargas(["hola", "como", "te", "va", "?"], 3))

/* devolver mayores de edad */

const personas = [
    {
        nombre: "gabriel",
        edad: 17
    },    {
        nombre: "manuel",
        edad: 19
    },    {
        nombre: "juan",
        edad: 20
    },    {
        nombre: "lucas",
        edad: 22
    }
]

const filtrar_menores = personas.filter((persona) => persona.edad >= 18)

console.log(filtrar_menores)