function calculadora (numero1, numero2, operacion) {
    if (operacion === "multiplicar"){
    let resultadoMultiplicacion = (numero1 * numero2)
    return (resultadoMultiplicacion)
    }
    else if (operacion === "sumar"){
    let resultadoSuma = (numero1 + numero2)
    return (resultadoSuma)
    }
    else if (operacion === "dividir"){
    let resultadoDivision = (numero1 / numero2)
    return (resultadoDivision)
    }
    else if (operacion === "restar"){
    let resultadoResta = (numero1 - numero2)
    return (resultadoResta)
    }
    else {
        let error = Number(prompt("error, dato no valido, vuelva a intentarlo"))
    }
}