// es9
// Publicada en junio del 2018

// parametros rest
// consiste en agrupar el residuo de elementos mediante la sintaxis de 3 puntos (...)
const printElements = (a, b, ...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);
}
printElements(1, 2, 3, 4, 5, 6)

// parametros rest en objetos y arrays con destructuracion
// El parámetro rest siempre deberá estar en la última posición, caso contrario existirá un error de sintaxis.
// function hola (primero, ...rest, ultimo) { ... }
// SyntaxError: Rest element must be last element. 
let myObj = {
    name: "Nicolas",
    age: 23,
    email: "nicolas.zg@hotmail.com",
}
let myArr = [1, 2, 3, 4, 5, 6, 7, 8]

const {email, ...user} = myObj
console.log(email);
console.log(user);

const [uno, ...numbers] = myArr
console.log(uno);
console.log(numbers);

// Diferencia entre parametro rest y operador de propagacion
// El aprametro rest agrupa el residuo de elementos y siempre debe estar en la ultima posicion
// operador de propagacion expande los elementos de un iterable y no importa el orden en donde este situado
const myNewArr = [
    1, 2, 3, 4, 5, 6
]
const printMyElements = (primero, segundo, ...resto) => { // Parametro rest
    console.log(primero);
    console.log(segundo);
    console.log(resto);
}

printMyElements(...myNewArr, "Final"); // Operador de propagacion


// Propiedades de propagacion
// Consiste en crear objetos a partir de otros usando el spread operator (operador de prpagacion)
let oneObj = {
    name: "Nico",
    edad: 23,
    email: "nicolas.zg@hotmail.com",
}
let twoObj = {
    ...oneObj,
    country: "COL",
}
console.log(twoObj);


// Crear copias de objetos utilizando las propiedades de propagación
// Semenjante a crear copias de arrays utilizando el operador de propagación,
//se puede realizar copias de objetos en un solo nivel mediante las propiedades de propagación.
// De esta manera el segundo objeto tendrá una referencia en memoria diferente al original.
const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false

// finally en promesas
// El metodo finally ejecuta codigo despues de que una promesa haya sido resuelta o rechazada
const promesa = () => {
    return new Promise((resolve, reject)=>{
        if (true) { // catch on false
            resolve("Promesa resuelta")
        } else{
            reject("Promesa eyectada")
        }
    })
}
promesa().then(response => console.log(response)) // Promesa resuelta
    .catch(error => console.log(response)) // Promesa rechazada
    .finally( () => console.log("Finalizado") ) // Código final  

// Expresiones regulares
// Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres increíblemente potente y están presentes en todos los lenguajes de programación. En JavaScript se crea estre patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda.
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
