// TALLER CALCULADORA
const prompt = require('prompt-sync')();
 let numero1= Number(prompt('Ingrese el primer número: '));
 let operacion = prompt('Ingrese la operación (+, -, *, /): ');
 let numero2 = Number(prompt('Ingrese el segundo número: '));
 
 let resultado;

 if (operacion=== "+") {
    resultado= numero1 + numero2;
    console.log(`El resultado de la suma es : ${resultado}`);
    }else if ( operacion === "-") {
        resultado= numero1 - numero2;
        console.log (`El resultado de la resta es  : ${resultado}`);
        }else if ( operacion === "*") {
            resultado= numero1 * numero2;
        console.log (`El resultado de la multiplicación es  : ${resultado}`);
        }else if ( operacion === "/") {
            if (numero2 === 0) {
                console.log("Error : no se puede divir entre cero");
            } else {
                resultado = numero1 / numero2;
                console.log (`El resultado de la división es  : ${resultado}`);
            }
        } else {
            console.log("Operación no válida");
        }
    




