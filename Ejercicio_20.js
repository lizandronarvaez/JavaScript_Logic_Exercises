const prompt = require('prompt-sync')()

function ordenaNumeros() {
    const introduceNumeros = prompt('Introduce un numero con 3 digitos: ')
    if (introduceNumeros < 99 || introduceNumeros > 999) {
        return 'Solo puede contener 3 numeros'
    } else {
        return introduceNumeros.toString().split('').sort((a, b) => {
            return a-b
        }).toString()
    }
}

console.log(ordenaNumeros())