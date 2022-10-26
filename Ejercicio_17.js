// 17.  Leer un número entero de tres dígitos y determinar en qué posición está el mayor dígito.
// Importo el prompt para utilzarlo desde la consola
const prompt = require('prompt-sync')()
// Creo una funcion
function busqueda_digito_mayor() {
    const tresDigitos = prompt('Introduce un numero de 3 digitos: ')
    if (tresDigitos.length < 3 && tresDigitos.length > 3) {
        return 'El numero que se requiere debe ser de 3 cifras'
    } else {
        tresDigitos.toString().split('')
        const [num1, num2, num3] = tresDigitos
        if (num1 > num2 & num1 > num3) {
            return `El numero ${num1} es el mayor de todos y esta en la posicion ${tresDigitos.length - 2}`
        } else if (num2 > num1 & num2 > num3) {
            return `El numero ${num2} es el mayor de todos y esta en la posicion ${tresDigitos.length - 1}`
        } else if (num3 > num1 & num3 > num2) {
            return `El numero ${num3} es el mayor de todos y esta en la posicion ${tresDigitos.length}`
        } else {
            return `No hay ningun numero que sea mayor que otro, los numeros son iguales`
        }
    }
}
const resultado = busqueda_digito_mayor()
console.log(resultado)
