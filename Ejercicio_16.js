const prompt = require('prompt-sync')()
// 16.  Leer  un  número  entero  de  tres  dígitos  y  determinar  si  al  menos  dos  de  sus  tres  dígitos  son iguales.
const igualdadNumeros = () => {
    const numero = prompt('Introduce un numero de tres cifras: ')
    if(numero <= 99 && numero > 999){
        return `Debes introducir solo numeros de tres cifras`
    }else{
        numero.toString().split('')
    let numero1 = numero[0]
    let numero2 = numero[1]
    let numero3 = numero[2]
    if (numero1 === numero2 || numero2=== numero3 || numero1===numero3) {
        return `Hay dos numeros iguales en el numero introducido`
    }else{
        return `Ninguno de los numeros introducidos son iguales`
    }
    }
    
}
const resultado = igualdadNumeros()
console.log(resultado)