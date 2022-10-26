// 38.  Leer tres números enteros y determinar si el último dígito de los tres números es igual.
// Creamos 3 variables asinandole los numeros a evaluar
let numeroUno = 981
let numeroDos = 121
let numeroTres = 92
function digito_final_es_igual() {
    let num1 = numeroUno.toString().slice(-1)
    let num2 = numeroDos.toString().slice(-1)
    let num3 = numeroTres.toString().slice(-1)
    let resultado = (num1 === num2 && num1 === num3 && num2 === num3) ?
        `El ultimo digito de los numeros ${numeroUno}, ${numeroDos}, ${numeroTres} son iguales`
        : `El ultimo digito de los 3 numeros no son iguales`
    console.log(resultado)
}

digito_final_es_igual()