// 25.  Leer un número entero de tres dígitos y determinar si alguno de sus dígitos es igual a la suma de los otros dos.
const prompt = require('prompt-sync')()

const numeroInput = prompt('Introduce un numero de 3 cifras: ')
const nuevoNumero = numeroInput.toString().split('')
const [num1, num2, num3] = nuevoNumero
const suma1 = Number(num2) + Number(num3)
const suma2 = Number(num1) + Number(num3)
const suma3 = Number(num1) + Number(num2)
if (suma1 == num1) {
    console.log(`Si sumamos los digitos ${num2} + ${num3} es igual al primer digito ${num1}`)
} else if (suma2 == num2) {
    console.log(`Si sumamos ${num1} + ${num3} es igual al segundo digito ${num2}`)
} else if (suma3 == num3) {
    console.log(`Si sumamos ${num1} + ${num2} es igual al tercer digito ${num3}`)
} else {
    console.log('La suma de los numeros no es igual es ninguno')
}
