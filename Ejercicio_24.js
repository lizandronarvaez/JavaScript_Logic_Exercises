// 24.  Leer un número entero de tres dígitos y determinar cuántos dígitos pares tiene.
const prompt = require('prompt-sync')()
// Entrada por consola del numero a evaluar
const numero = prompt('Introduce un numero entero de 3 cifras: ')
// Aplicamos el metodo toString y split para que nos devuelva un nuevo array
const resultado = numero.toString().split('')
// Desestructuramos el array nuevo
const [numero1, numero2, numero3] = resultado
// Comparamos con un condicional y sus operadores 
if (numero1 % 2 == 0 && numero % 2 == 0 && numero3 % 2 == 0) {
    console.log(`Son pares los tres numeros`)
} else {
    if (numero1 % 2 == 0) {
        console.log(`${numero1} es un numero par`)
    } else {
        console.log(`${numero1} no es un numero par`)
    }
    if (numero2 % 2 == 0) {
        console.log(`${numero2} es un numero par`)
    } else {
        console.log(`${numero2} no es un numero par`)
    }
    if (numero3 % 2 == 0) {
        console.log(`${numero3} es un numero par`)
    } else {
        console.log(`${numero3} no es un numero par`)
    }
}