// 29.  Leer  un  número  entero  de  cinco  dígitos  y  determinar  si  es  un  número  capicúo.  Ej.15651,59895.
function esCapicua(numero) {
    let numeroCapicua = numero.toString().split('')
    let [num1, num2, , num4, num5] = numeroCapicua
    if(numeroCapicua.length > 5){
        console.log('Solo puedes evaluar numeros con 5 digitos')
    }else{
        if (num1 === num5 && num2 === num4) {
            console.log('******************************')
            console.log(`* ${numero} es un numero CAPICUA *`)
            console.log('******************************')
        } else {
            console.log('********************************')
            console.log(`* ${numero} no es un numero CAPICUA *`)
            console.log('********************************')
        
    }
  }
}
esCapicua(92529)