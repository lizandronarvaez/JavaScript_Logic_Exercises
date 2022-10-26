// 33.  Leer un número entero y determinar si termina en 7.
function termina_en_siente(num) {
    // Creamos un nuevo array de numeros
    const numero = num.toString().split('')
    // Accedemos ala posicion final del ultimo numero
    const numeroFinal = numero[numero.length - 1]
    // Comparamos con un condicional if si el termino pasado en la funcion termina en 7
    if (numeroFinal == 7) {
        console.log(`El numero ${num} termina en 7`)
    } else {
        console.log(`El numero ${num} no termina en 7`)
    }
}
// Llamamos a la funcion pasando el numero a evaluar
termina_en_siente(2017)