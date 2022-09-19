// vars
var a; // declaracion 
var a ='a'; // asignacion
a = 'aa' // reasigancacion



// global scope
// variables que son accesibles desde cualquier parte del codigo
// Las variables que son asignadas sin ser declaradas siempre seran globales
var fruit = "Pineapple";

function printFruit(){
    console.log(fruit);
}
printFruit();

function  countries(){
    country = 'Colombia'; // variable global
    console.log(country);
}
countries();
console.log(country);



// local scope - function scope
// Las variables que son accequibles solo desde cualquier parte de la funcion
const greeting = () => {
    let userName = "Nicolanz";
    console.log(userName);

    if (userName === "Nicolanz"){
        console.log(`Hello ${userName}!`);
    }
}
greeting();
console.log(userName); // Error



// Block Scope 
// Variables que son accesibles desde un bloque de codigo
// Es recomendable mo usar var al declarar o inicializar una variable para evitar errores cuando se declaren variables con un nombre similar
const fruits = ( ) => {
    if (true){
        var fruit1 = "Apple";  // function scope
        let fruit2 = "Pineapple"; // block scope
        const fruit3 = "Lemon"; // block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}
fruits();



// Reasignacion, redeclaracion con var, let y const
var firstName; // declarar una variable con valor undefined
firstName = "Nicolas"; // asignar una varibale
console.log(firstName);

var lastName = "Zara"; // declaracion y asignacion de una variable
lastName = "Zarate"; // reasignacion
console.log(lastName);

// Var:
// con var se puede redeclarar y reasignar
var secondName = "Andrea"; 
var secondName = "Andres";// Reasignacion con var 
console.log(secondName);

// Let
// con let no se puede redeclarar pero si reasignar dentro del mismo bloque
let fruit = "Banana";
fruit = "Apple";

console.log(fruit);
// let fruit = "Pineapple"; // no se puede redeclarar (Esta linea genera error) 
console.log(fruit);

// const 
// con const no se puede redeclara ni reasignar dentro del bloque
const animal = "Dog";
// animal = "cat"; // reasignacion fallida
// const animal = "cat"; // redeclaracion fallida
console.log(animal);

// no generara error usar metodos sobre array declarado con const sin reemplazar el array inicial
const vehicles = [];
vehicles.push("carro");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);



// Strict Mode
'use strict';
pi = 3.1416;
console.log(pi);

const myFuction = () => {
    'use strict';
    return pi = 3.1416;
}
console.log(myFuction());
