const json_string = '{"nombre": "Juan", "edad": 30, "esEstudiante": false}'
let usuario = JSON.parse(json_string)

console.log(usuario.nombre)
console.log(usuario.edad)
console.log(usuario.esEstudiante)

/* lo que hice fue crear un string formato json, que pueda ser cambiado a objeto en cualquier momento, para demostrarlo, hice la prueaba con el metodo JSON.parse(), que devolvio los datos que habia ingresado en el string, pero ingresandolos como si fueran objetos */

usuario = JSON.stringify(usuario)

console.log(usuario)

/* mismo caso pero al reves, tome el objeto, y use el metodo JSON.stringify() para pasarlo a string, que tiene la misma sintaxis que el string de la variable json_string */