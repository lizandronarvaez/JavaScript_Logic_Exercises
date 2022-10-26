// 39.  Leer tres números enteros y determina si el penúltimo dígito de los tres números es igual.
let numeroUno = 1945
let numeroDos = 25641
let numeroTres = 42416441
function digito_final_es_igual() {
    // 
    let num1 = numeroUno.toString().split('')
    let num2 = numeroDos.toString().split('')
    let num3 = numeroTres.toString().split('')
    // 
    let findPenultimo1 = num1[num1.length - 2]
    let findPenultimo2 = num2[num2.length - 2]
    let findPenultimo3 = num3[num3.length - 2]
    let resultado = (findPenultimo1 === findPenultimo2 && findPenultimo2 === findPenultimo3 && findPenultimo1 === findPenultimo2) ?
        `El penultimo digito de los numeros ${numeroUno}, ${numeroDos}, ${numeroTres} son iguales`
        : `El ultimo digito de los 3 numeros no son iguales`
    console.log(resultado)
    // console.log(num1)
}

digito_final_es_igual()