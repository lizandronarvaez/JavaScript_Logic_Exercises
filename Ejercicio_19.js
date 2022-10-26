const prompt = require('prompt-sync')()

function dosVariables() {
    let numeroInput = prompt('Introduce un numero de 3 digitos: ')
    if (numeroInput.length < 3 || numeroInput.length > 3) {
        return 'El numero introducido debe contener 3 cifras'
    } else {
        let [num1, num2, num3] = numeroInput.toString().split('')
        if (num1 >= num2 && num1 >= num3) {
            return `${num1} es mayor`
        } else if (num2 >= num1 && num2 >= num3) {
            return `${num2} es mayor`
        } else if (num3 >= num1 && num3 >= num2) {
            return `${num3} es mayor`
        } else {
            if (num1 == num2 && num1 == num3) {
                return `Los numeros son iguales`
            } else if (num2 == num1 && num2 == num3) {
                return `Los numeros son iguales`
            } else if (num3 == num1 && num3 == num2) {
                return `Los numeros son iguales`
            }
        }
    }
}

console.log(dosVariables())