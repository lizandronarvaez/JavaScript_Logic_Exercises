// 18.  Leer un número entero de tres dígitos y determinar si algún dígito es múltiplo de los otros.
const prompt = require('prompt-sync')()

function esMultiplo() {
    const digitos = prompt('Introduce un numero de 3 digitos: ')
    if (digitos.length < 3 && digitos.length > 3) {
        return 'Solo puedes introducir numeros que contengan 3 digitos'
    } else {
        const nuevoDigito = digitos.toString().split('')
        const [num1, num2, num3] = nuevoDigito

    }
}

const ejecucion = esMultiplo()
console.log(ejecucion)