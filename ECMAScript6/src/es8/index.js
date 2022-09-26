// es8
// Publicado en 2017

// Transformar obj a arrays
const myObj = {
    name: 'Nicolas',
    age: 23,
    email: 'nicolas.zg@hotmail.com'
}
let result = Object.entries(myObj)

console.log(result);

// Obtener los llaves de un objeto en un array
let myKeys = Object.keys(myObj)
console.log(myKeys);

// Obtener los valores de un objeto en un array
let myValues = Object.values(myObj)
console.log(myValues);

// padStart -> Completa un string con otro string en el inicio hasta obtener un total de caracteres especificado
console.log("nicolas".padStart(10));
console.log("nicolas".padStart(10, "foo"));
console.log("nicolas".padStart(9));

// padEnd -> Completa un string con otro string en el final hasta obtener un total de caracteres especificado
console.log("nicolas".padEnd(10));
console.log("nicolas".padEnd(10, "foo"));
console.log("nicolas".padEnd(9));

// Trailing commas -> Consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.
const user = {
    name: 'Nicolas',
    age: 23,
    email: 'nicolas.zg@hotmail.com', // <-- Trailing comma
}
const names = [
    "Nicolas",
    "Zarate",
    "Guarin", // <-- Trailing comma
]
