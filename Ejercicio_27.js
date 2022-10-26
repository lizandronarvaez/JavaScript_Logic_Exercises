// 27.  Leer un número entero de cuatro dígitos y determinar cuántos dígitos pares tiene.
const prompt=require('prompt-sync')()
// 
const entradaNumero=prompt('Introduce un numero de 4 cifras: ')
// 
const resultado=entradaNumero.toString().split('')
// 
resultado.forEach((item)=>{
    if(item % 2 == 0){
        console.log(`${item} es numeros par`)
    }else{
        console.log(`${item} es numero impar`)
    }
})

