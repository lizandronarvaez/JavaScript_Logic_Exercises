// 42.  Leer dos números enteros y determinar si la diferencia entre los dos es un número par.

function resultadoEsPar(numero1, numero2) {
    // Aqui realizamos las resta de los numeros
    let resultado = numero1 - numero2
    // En caso de que la resta sea negativa o menor que 0, aplicamos un condicional que convierta el numero a positivo
    resultado < 0 ? resultado = resultado * (-1) : null
    // En caso se que el resultado sea 0
    resultado == 0 ? console.log(`${resultado} no es un numero para evaluar`)
        : resultado % 2 == 0 ? console.log(`La resta entre ${numero1} - ${numero2} es: ${resultado} un numero par`)
            : console.log(`${resultado} es un numero impar`)
    // Aqui comprobamos si la el resultado de la resta es un numero primo
        
}

resultadoEsPar(10000, 10000)
