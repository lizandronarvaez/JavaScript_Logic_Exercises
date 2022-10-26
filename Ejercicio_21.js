const prompt = require('prompt-sync')()
function busqueda_numero_mayor() {
    const entradaNumero1 = prompt('Introduce un numero de 2 digitos: ')
    const entradaNumero2 = prompt('Introduce un segundo numero de 2 digitos: ')
    const entradaNumero3 = prompt('Introduce un tercer numero de 2 digitos: ')
    // Destructuramos el numero introducido
    // Primer numero
    const num1 = entradaNumero1.toString().split('')
    // Segundo numero
    const num2 = entradaNumero2.toString().split('')
    // Tercer Numero
    const num3 = entradaNumero3.toString().split('')
    // Evaluacion con los condicionales y buscamos el numero mayor de todos
    if ([...num1] > [...num2] && [...num1] > [...num3]) {
        return `El numero mayor se ecuentra en el primer entero`
    } else if ([...num2] > [...num1] && [...num2] > [...num3]) {
        return `El numero mayor se ecuentra en el segundo entero`
    } else if ([...num3] > [...num1] && [...num3] > [...num2]) {
        return `El numero mayor se encuentra en el tercer entero`
    } else {
        return 1
    }
}

console.log(busqueda_numero_mayor())