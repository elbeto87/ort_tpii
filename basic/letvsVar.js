// let vs var

var variable1 = 8;

// var el alcance de var es a nivel function 
// let el alcance es a nivel bloque, let no permite declarar mas de una vez la misma variabla en el mismo bloque

let x =1;

if(x ===1){
    x = 2;
    console.log(x);
}

console.log(x);

const key = '123';

const person = {
    nombre: 'wes',
    edad: 28,
}

Object.freeze(person);
Object.seal(person);
person.apellido = 'fernandez';
//Object.freeze(person);
person.nombre = 'asdfasdf';
console.log(person.apellido);





