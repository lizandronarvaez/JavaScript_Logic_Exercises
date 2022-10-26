// 36.  Leer un número entero de 4 dígitos y determinar si tiene mas dígitos pares o impares.
// Variables que utilizaremos
let contador1 = 1;
let contador2 = 1;
// Funcion declarada
function paresImpares(num) {
    const resultado = num.toString().split('')
    resultado.forEach(item => {
        if (item % 2 == 0) {
            contador1++
        }
        if (item % 2 == 1) {
            contador2++
        }
    });
    if (contador1 > contador2) {
        console.log(`En el numero ${num} hay mas numeros pares`)
    } else if (contador1 < contador2) {
        console.log(`En el numero ${num} hay mas numeros impares`)
    } else {
        console.log(`En el numero ${num} existen mismos numeros pares e impares`)
    }
}
// Callback ala funcion introduciendo el numero a evaluar
paresImpares(1234)

