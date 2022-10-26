// 26.  Leer un número entero de cuatro dígitos y determinar a cuanto es igual la suma de sus dígitos.
const prompt = require('prompt-sync')()
// 
const numero = prompt('Introduce un numero entero de 4 cifras: ')
// 
const nuevoNuevo = numero.toString().split('')
// Desestructamos el array nuevo devuelto
const [numero1, numero2, numero3, numero4] = nuevoNuevo
// Guardarmos la desestructuracion en una constante que nos sume los numeros que queremos
const suma_total_numeros = Number(numero1) + Number(numero2) + Number(numero3) + Number(numero4)
// Mostramos por pantalla la salida de la suma
console.log(`La suma de ${numero} es ****${suma_total_numeros}****`)