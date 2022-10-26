// 22.  Leer un número entero de tres dígitos y determinar si el primer dígito es igual al último.
const prompt = require('prompt-sync')()
// Introducimos por pantalla el numero que nos pide
const enteroNum = prompt('Introduce un numero entero de 3 cifras: ');
// Aplicando metodos para pasar el numero a string
const resultado = enteroNum.toString().split('')
// Desectruturamos el array devuelvo con el metodo split
const [numero1, , numero3] = resultado
// Condicional para comparar un numero con otro
numero1 === numero3 ? console.info(`El numero ${enteroNum} tiene el primer y el ultimo numero igual`)
    : console.info('No hay ningun digito que sean iguales')
