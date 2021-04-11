// declaración e inicializacion de un Array

let nombres = ['Juan', 'Pedro', 'Maria', 'Eduardo'];

let primerNombre = nombres[0];
let ultimoNombre = nombres[nombres.length -1];

// iterar en un Array
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
console.log();

for (const nombre of nombres) {
    if(nombre === 'Pedro'){
        break;
    }
    console.log(nombre);
}

for (const nombre in nombres) {
   console.log(nombres[nombre]);
}

// agregar al final
nombres.push('Elena');

// sacar del final
let ultimo = nombres.pop();

// sacar del principio
let primero = nombres.shift();

// agrega al principio
nombres.unshift('Anna');

// Buscar la posición de:
let posicion =  nombres.indexOf('Elena');

nombres.splice(2,1);

//nombres.slice()

nombres.sort();
console.log(nombres);

// generar un array a partir de un string
let stringNombres = "Juan;Pedro;Maria;Julia";
let arrNombres = stringNombres.split(';');

// Join 
stringNombres =  arrNombres.join(',');
console.log(stringNombres);

// Ejercicio 1
// Dato un array de numeros enteros, multiplicar por 2 si es par y por 3 si es impar

// Ejercicio 2
// Dado un array de numeros enteros positivos, determinar el segundo mayor
// [3,4,6,6,5,5] el segundo mayor: 5