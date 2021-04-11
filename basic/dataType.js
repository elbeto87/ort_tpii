// Los tipos existentes son: Number, String, Boolean, Symbol, Null, Undefined, Object

// NUMBER
let var1 = 1;
let var2 = -0;

console.log("1/0 = " + var1 / var2);
console.log("Raiz cuadrada de (-1)" + Math.sqrt(-1));

// STRING //
let saludo = 'Hola " mundo';
let saludo1 = "Hola mundo's 2";
let caracter = "c";
let pizza = '🍕';

console.log(saludo + "quiero una " + pizza );
console.log(`${saludo} quiero una ${pizza}`);

// Null
let nulo = 45;
nulo = null;
// Undefined
let nodefinido;
// nota uno de los motivos de la creacion de typescript

variableSinDeclarar=10;

console.log(variableSinDeclarar);

// Ejercicio 1
// Probar de "sumar" + un booleano con una numero
// prueben de utilizar typeof variable

//[45,55,4,1].forEach(num => console.log(num));

// Parse de numeros
let cadenaNumero = '34';

cadenaNumero = parseInt(cadenaNumero) + 1;

console.log(cadenaNumero);

// declaración de objetos

let actor = {
    nombre : 'Julio',
    edad: 45
};

// JSON: Javascript Object Notation

// notacion corchetes []
console.log(`Nombre de actor: ${actor["nombre"]}`);

// notacion punto .
console.log(`Edad del actor:${actor.edad}`);







