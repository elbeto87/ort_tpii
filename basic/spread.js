// El operador ... (spread), devolver los elementos de un array

const BETP2A = ['Maria','Pedro', 'Jose', 'Anna'];
const YATP2D = ['Mario', 'Jack'];

// Union de arrays

const TP2 = [...BETP2A, ...YATP2D];

console.log(TP2);

// funciones que reciben parametros variables
function convertirMoneda(rate, ...amounts){
    return amounts.map(amount => amount * rate);
} 

console.log(convertirMoneda(3.4, 45,56,67,45,34,34));

// Ejemplo de asignacion de array con arrays de variables
const runner = ['Pablo', 342343, 5.6, 4.7, 3.2, 7.8];
const [name, id, ...runs] = runner;

console.log(name, id, runs);