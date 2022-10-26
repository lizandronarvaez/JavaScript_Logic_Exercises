// 35.  Leer  un  número  entero  de  dos  dígitos,  guardar  cada  dígito  en  una  variable  diferente  y  luego mostrarlas en pantalla.
function contarDigitos(num) {
    const resultado = num.toString().split('')
    const [num1, num2] = resultado
    console.log(`Hemos almacenado en la variable num1 el valor ${num1}`)
    console.log(`Hemos almacenado en la variable num2 el valor ${num2}`)
}

contarDigitos(28)