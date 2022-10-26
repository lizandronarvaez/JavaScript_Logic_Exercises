// 34.  Leer un número entero menor que mil y determinar cuántos dígitos tiene.
function contarDigitos(num) {
    // Almacenamos en una variable el nuevo nuevo
    const resultado =
        num.toString()
            .split('')
            .length
    // Utilizamos un condional para evaluar de tal forma que si un numero tenga un 1 especifique las cifras que tiene
    if (num < 10) {
        console.log(`El numero ${num} tiene ${resultado} cifra`)
    } else {
        console.log(`El numero ${num} tiene ${resultado} cifras`)
    }
}
// Llamos ala funcion
contarDigitos(4)
contarDigitos(10)
contarDigitos(120)
contarDigitos(250)
contarDigitos(944)
contarDigitos(24)
contarDigitos(30)
