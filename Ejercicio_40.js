/** 40.  Leer   dos  números  enteros  y  si  la  diferencia  entre  los  dos  es  menor  o  igual  a  
 *  10  entonces mostrar en pantalla todos los enteros comprendidos entre el menor y el mayor de los 
 *  números leídos.
*/
let numeroUno = 1450
let numeroDos = 1460

function imprimeListaNumeros() {
    if (numeroUno - numeroDos > 1 && numeroUno - numeroDos <= 10) {
        for (let i = numeroDos + 1; numeroUno > i; i++) {
            console.log(i)
        }
    } else if (numeroDos - numeroUno > 1 && numeroDos - numeroUno <= 10) {
        for (let i = numeroUno + 1; numeroDos > i; i++) {
            console.log(i)
        }
    } else {
        console.log(`La diferencia entre ${numeroUno} y ${numeroDos} es mayor que 10`)
    }
}

imprimeListaNumeros()