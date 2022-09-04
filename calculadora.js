const sumar = require("./funciones/sumar.js");
const restar = require ("./funciones/restar.js");
const multiplicar = require ("./funciones/multiplicar.js");
const dividir = require ("./funciones/dividir.js")

const accion = process.argv[2];


const num1 = parseInt (process.argv[3]);
const num2 = parseInt (process.argv[4]);

if(! accion || ! num1 || ! num2) return; 

switch(accion) {
    case "sumar": {
        const resultado = sumar(num1, num2);
        console.log(num1, "+", num2, "=", resultado);
        break;
    }
    case "restar": {
        const resultado = restar(num1, num2);
        console.log(num1, "-", num2, "=", resultado);
        break;
    }
    case "multiplicar": {
        const resultado = multiplicar(num1, num2);
        console.log(num1, "*", num2, "=", resultado);
        break;
    }
    case "dividir": {
        const resultado = dividir(num1, num2);
        console.log(num1, "/", num2, "=", resultado);
        break;
    }
    default: {
        console.log ("Accion indefinida")
    }
}