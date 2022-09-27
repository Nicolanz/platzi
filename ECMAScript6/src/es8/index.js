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

// Async - await 
// Promise
const worldHello = () => {
    return new Promise ((resolve, reject)=>{
        (false) // error on false and resolved promise on true 
        ?   setTimeout( () => resolve("Hello world"), 3000)
        :   reject(new Error ('Mensaje error'))
    })
}
// resolve prmise with async await 
const resolvePromise = async () => { // Function declaration
    const result = await worldHello(); // await syntax
    console.log(result);
    console.log("Impesion!");
    return result;
} 
resolvePromise();

// catch error on promise with async - await
const anotherFunction = async () =>{
    try {
        const result = await worldHello();
        console.log(result);
    }  catch (e) {
        console.log(`Se ejecuto el error ${e.message}`);
    }
}

anotherFunction();

