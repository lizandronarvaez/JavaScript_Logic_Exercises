const prompt = require('prompt-sync')()
// // 1) Ejercicio de logica
// const contarCaracteres = (cadena = "") =>
//   !cadena
//     ? console.warn("No haz introducido ningun valor")
//     : console.info(`El texto ${cadena} tiene ${cadena.length} caracteres`);

// // contarCaracteres("Hola mundo");

// // 2) Segundo ejercicio de logica
// const textRecortado = (cadena = '', logitud = undefined) => {
//   !cadena ? console.log('No hay texto')
//     : console.log(cadena.slice(0, logitud))
// }
// // textRecortado('Lizandro Narvaez',8)

// // 3)Ejercicio 3, factorial de un numero
const factorialNumero = (numero) => {
  return numero == 0 ? 1 : numero * factorialNumero(numero - 1);
};
/**Algoritmo buscar el ultimo digito de un numero y compararlo */
const numeroEsIgual = () => {
  // Declarando las variables
  let num1, num2, numero1, numero2;
  // Asigando valor alas variables declaras
  num1 = 5468;
  num2 = 5468;
  numero1 = num1.toString().slice(-1);
  numero2 = num2.toString().slice(-1);
  // Comparandolo con un condicional
  num1 <= 0 || num2 <= 0
    ? `${(num1 = num1 * -1)} ${(num2 = num2 * -1)}`
    : numero1 == numero2
      ? console.log(
        `El ultimo numero de ${num1} y ${num2} acaba en ${(numero1, numero2)
        } y son iguales`
      )
      : console.log("Los numeros no son iguales");
};

// Ejecucion de la funcion

/**Algoritmo buscar numero par o impar */
const esPar_o_Impar = (num) => {
  num <= 0
    ? console.log("Solo se puede introducir numeros enteros y positivos")
    : num % 2 == 0
      ? console.log(`El numero ${num} es par`)
      : console.log(`El numero ${num} es impar`);
};

// Leer un numero entero y determinar cuantos digitos tiene
const contarDigitos = (numero) => {
  if (numero <= 0) {
    /**Pasaremos el numero a positivo en caso de que sea negativo */
    numero = numero * -1;
    let digitos = numero.toString().length;
    console.log(`El numero introducido ${numero} tiene ${digitos} digitos`);
  } else {
    let digitos = numero.toString().length;
    console.log(`El numero introducido ${numero} tiene ${digitos} digitos`);
  }
};

// Contar los numeros de un numero

const cuentaNumeros = (digitos) => {
  if (digitos <= 0) {
    digitos = digitos * -1;
    let contarDigitos = digitos.toString().length;
    if (digitos >= 1 && digitos <= 9) {
      console.log(`El numero ${digitos} tiene ${contarDigitos} digitos`);
    } else {
      if (digitos >= 10 && digitos <= 99) {
        console.log(`El numero ${digitos} tiene ${contarDigitos}`);
      } else {
        if (digitos >= 100 && digitos <= 999) {
          console.log(`El numero ${digitos} tiene ${contarDigitos} digitos`);
        } else {
          if (digitos >= 1000 && digitos <= 9999) {
            console.log(`El numero ${digitos} tiene ${contarDigitos} digitos`);
          } else {
            console.log(`El numero ${digitos} tiene mas de 4 digitos`);
          }
        }
      }
    }
  } else {
    let contarDigitos = digitos.toString().length;
    if (digitos >= 1 && digitos <= 9) {
      console.log(`El numero ${digitos} tiene ${contarDigitos} digitos`);
    } else {
      if (digitos >= 10 && digitos <= 99) {
        console.log(`El numero ${digitos} tiene ${contarDigitos} digitos`);
      } else {
        if (digitos >= 100 && digitos <= 999) {
          console.log(`El numero ${digitos} tiene ${contarDigitos} digitos`);
        } else {
          if (digitos >= 1000 && digitos <= 9999) {
            console.log(`El numero ${digitos} tiene ${contarDigitos} digitos`);
          } else {
            console.log(`El numero ${digitos} tiene mas de 4 digitos`);
          }
        }
      }
    }
  }
};

// Leer numero y devolver si es negativo o positivo
// Si es POSITIVO verificar si tiene 2 digitos y si es negativo 3 digitos

const numero_de_digitos = (numero) => {
  if (numero > 0) {
    if (numero >= 10 && numero <= 99) {
      console.log("El numero es positivo y tiene 2 digitos");
    } else {
      console.log("El numero es positivo pero no es de 2 digitos");
    }
  } else {
    if (numero < 0) {
      if (numero >= -999 && numero <= -100) {
        console.log("El numero es negativo y tiene 3 digitos");
      } else {
        console.log("El numero es negativo pero no contiene 3 digitos");
      }
    }
  }
};

// Escibir por pantalla el numero del numero introducido
const nombreNumero = (numero) => {
  if (numero < 0) numero = numero * -1;
  if (numero == 1) {
    console.log("El numero digitado es Uno");
  } else {
    if (numero == 2) {
      console.log("El numero digitado es dos");
    } else {
      if (numero == 4) {
        console.log("El numero digitado es cuatro");
      } else {
        if (numero == 5) {
          console.log("El numero digitado es cinco");
        } else {
          console.log("El numero es mayor que cinco");
        }
      }
    }
  }
};

// Escribir el nombre del numero con estructura SWITCH
let numero;
let numero2;
if (numero < 0) numero = numero * -1;
switch (numero) {
  case 1:
    console.log("UNO");
    break;
  case 2:
    console.log("DOS");
    break;
  case 3:
    console.log("TRES");
    break;
  case 4:
    console.log("CUATRO");
    break;
  case 5:
    switch (numero2) {
      case 1:
        console.log("Cincuenta y Uno");
        break;
      case 2:
        console.log("Cincuenta y Dos");
        break;
      case 3:
        console.log("Cincuenta y Tres");
        break;
      case 4:
        console.log("Cincuenta y Cuatro");
        break;
      case 5:
        console.log("Cincuenta y Cinco");
        break;
      default:
        console.log("El numero es mayor que 5");
    }
    break;
  default:
  // console.log("El numero es mayor que cinco");
}
// Ejercicios
// Leer un numero y devolver si termina en 4
const numeroFinal = (num) => {
  const numero = num.toString().slice(-1);
  if (numero == 4) {
    return `El numero ${num} que haz introducido acaba en ${numero}`;
  } else {
    return `El numero ${num} no acaba en 4`;
  }
};

// console.log(numeroFinal(200048554));

// Leer un numero y devolver si tiene mas de 3 digitos
const longituNumero = (num) => {
  const numero = num.toString().length;
  if (numero == 3) console.log("El numero introducido tiene 3 digitos");
  if (numero > 3)
    console.log("El numero que haz introducido tiene mas de 3 digitos");
  if (numero < 3) console.log("El numero introducido no tiene 3 digitos");
};

// Leer un numero y devolver si es negativo
const numeroNegativo = (num) => {
  num < 0
    ? console.log(`El numero ${num} es negativo`)
    : console.log(`El numero ${num} es positivo`);
};
// Leer un numero y sumar cada numero
const sumarNumero = (num) => {
  let numero = num
    .toString()
    .split("")
    .reduce((x, y) => {
      return Number(x) + Number(y);
    });
  console.log(numero);
};
// sumarNumero(25251);

// Comprobar si los numeros introducidos son pares
const comparaNumero = (num) => {
  console.log(`El numero introducido es ${num}`);
  num
    .toString()
    .split("")
    .map((element) => {
      if (element % 2 == 0) {
        console.log(`${element} es un numero par`);
      } else {
        console.log(`${element} no es un numero par`);
      }
    });
};
// comparaNumero(52);

// Comprobar si el numero introducido  menor que 20 es primo

function esPrimo(num) {
  if (num > 20) {
    console.log("El numero a evaluar debe ser menor que 20");
  } else {
    if (num % 2 == 1) {
      console.log(`${num} es un numero primo`);
    } else {
      console.log(`${num} no es un numero primo`);
    }
  }
}

// Comprobar numero si es primo y negativo
function es_primo_y_negativo(num) {
  if (num > 0) {
    console.log("El numero a evaluar debe ser menor que 0");
  } else {
    num = num * -1;
    if (num % 2 == 1) {
      console.log(`-${num} es un numero primo y negativo`);
    } else {
      console.log(`-${num} es negativo pero no es un numero primo`);
    }
  }
}

// Dados dos digitos comprobar si son primos
const sonPrimos = (numero) => {
  numero
    .toString()
    .split("")
    .map((num) => {
      if (num % 2 === 1) {
        console.log(`${num} es numero primo`);
      } else {
        console.log(`${num} no es un numero primo`);
      }
    });
};
// Comprobar si un numero es multiplo de otro
const multiploNumero = () => {
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.table(`fizzBuzz`);
    } else if (i % 3 == 0) {
      console.table(`fizz`);
    } else if (i % 5 == 0) {
      console.table(`buzz`);
    } else {
      console.table(`${i}`);
    }
  }
  // num
  //   .toString()
  //   .split("")
  //   .map((e) => {
  //     if (num % e == 0 && num % e === 0) {
  //       console.log("fizz");
  //     } else {
  //       console.log("buzz");
  //     }
  //   });
};

// multiploNumero();

// Comprobar que los numeros pasados por parametros sean iguales

function numerosIguales(numero) {
  numero
    .toString()
    .split("")
    .forEach((element) => {
      if (Number(element) !== Number(element)) {
        console.log("Los numeros son iguales");
      } else {
        console.log("Los numeros no son iguales");
      }
    });
}

const par = (x) => {
  if (x < 0) {
    x = x * -1;
    if (x % 2 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (x % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
};

// Leer un numero entero pasado por parametro y determinar cual es el mayor

const numeroMayor = (numero) => {
  numero.toString().split('').sort((b, a) => {
    if (a > b) {
      console.log(`El numero ${a} es el mayor de ${numero}`)
    } else if (a < b) {
      console.log(`${b} es el numero mayor de ${numero}`)
    } else if (a === b) {
      console.log(`Los numeros introducidos ${numero} son iguales, no se puede evaluar`)
    }
  })
}

// 13.  Leer dos números enteros de dos dígitos y determinar si la suma de los dos números origina un número par.

const comprobarSumarPar = () => {
  const n1 = Number(prompt('Introduce un numero de dos digitos: '))
  const n2 = Number(prompt('Introduce otro numero de dos digitos: '))
  const sumaNumeros = n1 + n2
  if (sumaNumeros % 2 == 0) {
    console.log(`El numero ${sumaNumeros} es un numero par`)
  } else {
    console.log(`El numero ${sumaNumeros} es impar`)
  }
}

// 14.  Leer dos números enteros de dos dígitos y determinar a cuánto es igual la suma de todos los dígitos.

const suma_todos_digitos = () => {
  // Convirtiendo los numeros en arrays
  const n1 = Number(prompt('Introduce un numero de dos digitos: ')).toString().split('')
  const n2 = Number(prompt('Introduce otro numero de dos digitos: ')).toString().split('')
  // Sumando los dos arrays y devolviendo uno solo y sumar todos los digitos del array
  const num = n1.concat(...n2).reduce((a, b) => {
    return Number(a) + Number(b)
  })
  return `La suma de todos los numeros de ${n1},${n2} es ${num}`
}


