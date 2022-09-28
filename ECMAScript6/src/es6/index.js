
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
    'nombre' : 'Nicolas',
    'age' : 23,
    'country' : 'COL'
}
// Antes de es6
console.log(person.nombre, person.age, person.country);
// es6
let { nombre } = person; // Destructuracion
console.log(nombre);


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


// parametros de objeto
let name = "Nicolas";
let age = 23;
// Antes de es6
let objTmp = {
    name: name, age: age
}
console.log(objTmp);
// es6
let obj = {
    name,
    age
}
console.log(obj);


// Arrow functions => Funciones flecha
const names = [
    {name: "Nicolas", age: 22},
    {name: "Andres", age: 23}
]
// antes de es6
let justNamesTmp =  names.map( function (x){
    return x.name
} );
console.log(justNamesTmp);
// es6 
let justNames = names.map( (x) => (
    x.name  // Retorno implicito entre parentesis 
));
console.log(justNames);

const listOfName = (name, age, country) => {
    // codigo
}
const oneName = name =>{
    // Solo se pasa un parametro para usarlo de esta forma
}
const square = num => num * num; // Se retorna directamente


// Promises => Promesas
// Espera a que algo pase y ayuda a lidiar con las callbacks hell
const helloPromise = () => {
    return new Promise ((resolve, reject)=>{
        if (false) {
            resolve("Promesa resuelta")
        } else {
            reject("promesa eyectada")
        }
    })
}
const resolve = helloPromise().then(res => {
                console.log(res);
            })
            .then((res) => {
                console.log(`resuelto ${res}`);
            })
            .catch(res => {
                console.log(res);

            });

console.log(resolve); // Promise Pending


// Clases
// Forma para crear clases y manejar la herencia en javacript
// permite resolver problemas con el paradigma de programación orientada a objetos (POO)
class Calculator {
    constructor () { 
        this.valueA = 0;
        this.valueB = 0;
    }
    sum( valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(1, 2));


// Modules 
// Exporta e importa codigo de otros archivos, a esto se le llama modulo
const hello  = require('./module');
console.log(hello());


// Generadores
// Es una funcion especial que reforma algoritmo de valores segun el valor definido.
// Devuelven solamenete un valor en cada invocacion
// Yield retorna valor segun su frecuencia
// next retorna objeto segun el estado del generador 
function* holaMundo(){
    if (true) { 
        yield ("Hello MUNDO");
    } 
    if (true) { 
        yield ("Hello Mundo x2")
    }
}
const generator = holaMundo()

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
