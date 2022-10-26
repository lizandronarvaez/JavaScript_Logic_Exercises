// 30.  Leer un número entero de cuatro dígitos y determinar si el segundo dígito es igual al penúltimo.
function digitosIguales(numero) {

    const digitos = numero.toString().split('')
    // Accedemos ala posicion de cada numero
    const segundoDigito = digitos[1]
    const penultimoDigito = digitos[digitos.length - 2]
    // Realizamos la comparacion con condicional if
    if (segundoDigito === penultimoDigito) {
        console.log(`El numero ${numero} tiene el segundo digito igual al penultimo`)
    } else {
        console.log(`El numero ${numero} no cumple con el enunciado del ejercicio`)
    }

}
// Llamamos ala funcion
console.log('-----------------------------------------------------------------')
digitosIguales(2456)
console.log('-----------------------------------------------------------------')
digitosIguales(4223)
console.log('-----------------------------------------------------------------')
digitosIguales(8005)
console.log('-----------------------------------------------------------------')
