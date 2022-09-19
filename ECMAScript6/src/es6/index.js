
// parametros por defecto
// Antes de es6
function newFunction(name, age, country) {
    var name = name || "Nicolas";
    var age = age || 23;
    var country = country || "Colombia";
    console.log(name, age, country);
}
newFunction();
newFunction("Omar", 34, "Bolivia");
// es6
function newFunction2(name = "Nicolas", age = 23, country = "Colombia"){
    console.log(name, age, country);
}
newFunction2();
newFunction2("Andres", 24, "Chile");


// Concatenacion 
let hola = "hola";
let mundo = "mundo";
// Antes de es6
let holamundo = hola + ' ' + mundo;
console.log(holamundo);
// es6
let holamundo2 = `${hola} ${mundo}`;
console.log(holamundo2);


// multilinea en strings
// Antes de es6
var lorem = "Esta es una frase epica \n" + "javaScript no es Java";
console.log(lorem);
// es6
var loremIpsum = `Esta es una frase epica
javaScript no es Java`;
console.log(loremIpsum);


// destructuracion de elementos (objetos)
let person = {
    'name' : 'Nicolas',
    'age' : 23,
    'country' : 'COL'
}
// Antes de es6
console.log(person.name, person.age, person.country);
// es6
let { name } = person; // Destructuracion
console.log(name);


// operador de propagacion - spread operator
let team1 = ["Oscar", "Luis", "Julian"];
let team2 = ["Nicolas", "Kenneth", "Pedro"];
// Antes de es6
let soccer1 = ["David", "Oscar", "Luis", "Julian", "Nicolas", "Kenneth", "Pedro"]
// es6
let soccer2 = ["david", ...team1, ...team2]; // Operador de propagacion
console.log(soccer1);
console.log(soccer2);


// Implementacion de let, var y const
{
    var globalVar = "variable global var";
}
{
    let globalLet= "Global let";
    console.log(globalLet);
}
console.log(globalVar);

const a = "b"; // constante que no cambia
// a = "a" // error
console.log(a);
