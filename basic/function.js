// Tipos de declaracion de funciones

function add(a,b){
    return a + b;
}

function calcularTotal(total, tax = 0.13, tip = 0.15){
    return total + (total * tax) + (total * tip);
}

function calcularTotal1(){
    let total = arguments[0];
    let tax = arguments[1];
    let tip = arguments[2];

    return total + (total * tax) + (total * tip);
}

//console.log(`Importe total: $ ${calcularTotal(100)}`);
console.log(`Importe total: ${calcularTotal1(100,0.2,0.13)}`);

// funciones que se asigna a una variable

const square = function(x){
    return x*x;
}

square(4);

// arrow function, flecha

const getSuma = (a,b) => a + b;

[45,55,4,1].forEach(num => console.log(num));
[45,55,4,1].sort((a,b) => a - b);

// this y arrow funcion no es aconsejable


