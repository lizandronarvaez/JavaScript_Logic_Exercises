const prompt = require('prompt-sync')()
// 15.  Leer un número entero de tres dígitos y determinar a cuánto es igual la suma de sus dígitos.
function suma_tres_digitos() {
    const numero = prompt('Introduce un numero de 3 digitos: ')
    if (numero.length > 3 || numero.length < 3) {
        return 'Solo puedes introducir un maximo o minimo de tres digitos '
    } else {
        return `La suma de los digitos del numero introducido ${numero} es igual a ${numero.toString().split('').reduce((a, b) => { return Number(a) + Number(b) })}`

    }
}

console.log(suma_tres_digitos())