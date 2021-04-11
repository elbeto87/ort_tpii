// Desestructurar objetos
const persona = {
    nombre: 'Pablo',
    apellido: 'Fernandez',
    pais: 'Argentina'
}

// const nombre = persona.nombre;
// const apellido = persona.apellido;

const {nombre, apellido} = persona;

console.log(nombre, apellido);

const usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    links: {
        social : {
            twitter: 'https://twitter.com/juanp',
            facebook: 'https://facebook.com/juan.p'
        },
        web : {
            blog: 'https://juanperes.com'
        }
    }
};

const {f:facebook, t:twitter} = usuario.links.social;

// Desestructurar arrays
const details = ['Juan Perez', 234234, 'juan@tecnoshare.com'];
const [name, id, email] = details;
console.log(name, id, email);

const curso = ['Pablo', 'Laura','Federico', 'Matias', 'Anna'];

const [profesor, asistente, ...alumnos] = curso;

console.log(profesor, asistente, alumnos);

// Swapping 
let a = 5;
let b = 6;

// let aux = a;
// a = b;
// b = aux;

[a, b] = [b, a];

console.log(a, b);
