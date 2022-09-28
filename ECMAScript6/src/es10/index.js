// es10
// Version que salio en julio 2019

// Aplanamiento de arrays
// Consister en transformar un array de arrays a uno de 1 sola dimension
// Los metodos flat y flatMap permiten realizar el aplanamiento

// flat -> Devuelve un array donde los sub-arrays han sido propagrados hasta una profundidad especrifica
// Este metodo es inmutable, lo que significa que devuelve un nuevo array con los cambios y no cambia el original
const myArray = [1, 2, [1,  2], 3]
const result = myArray.flat()
console.log(result); // [ 1, 2, 1, 2, 3 ]

const myArray2 = [1, 2, [1, [2, 3]], 4]
const result2 = myArray2.flat()
console.log(result2); // [ 1, 2, 1, [ 2, 3 ], 4 ]

const result3 = myArray2.flat(2)
console.log(result3); // [ 1, 2, 1, 2, 3, 4 ]

const myArray3 = [1, 2, [3, 4, [5, 6, [7, 8,  [9, 10]]]]]
const result4 = myArray3.flat(Infinity) // Se usa el valor de Infinity para aplanar arrays multidimensionales
console.log(result4); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// flatMap -> Es una combinacion de map y flat
// Este metodo es inmutable, lo que significa que devuelve un nuevo array con los cambios y no cambia el original
// Este método recibe los mismos argumentos que el método map{target="_blank"}.
const newArray = [2, 4, 6, 8, 10, 12, 14]
const newResult = newArray.flatMap((x)=>{
    console.log(x * 2);
    return x
})
console.log(newResult);

const newStrArrays = ["Nicolas Andres", "Zarate Guarin"]
const newStrResult = newStrArrays.map((str)=>{
    return str.split(" ")
})
console.log(newStrResult);

let numbers = [ 1, 2, 3, 4 ]
numbers = numbers.map((x)=>[x*2])
numbers = numbers.flatMap((x)=>{
    return (x);
})
console.log(numbers); // [ 2, 4, 6, 8 ]

// Cuidado, primero hace el map y luego el flat
const numbers2 = [1,[2,3], 4, 5]
console.log(numbers2.flatMap(number => [number *2])); 
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number


// Eliminar espacios de un string
// Metodos para eliminar espacios en blanco de un string
// trim -> elimina espacios en blanco al inicio y al final
// trimStart -> elimina espacios al inicio
// trimEnd -> eliminar espacios al final
const saludo  = "   Hola    "
console.log(saludo.trim()); // "Hola"
console.log(saludo.trimStart()); // "Hola      "
console.log(saludo.trimEnd()); // "     Hola"


// Parametro opcional de catch
// Permite omitir el error si es necesario, para que este sea obligatorio
try {
    console.log("Hola");
} catch(e){
    console.log(e.message); // Maneja error con parametro
}
try {
    throw new Error("Error");
} catch {
    console.log("Error"); // Maneja error sin parametro
}


// Convertir array de arrays a objetos con javascript
const arrayEntries = [
    ["name", "Nicolas"],
    ["age", 23],
    ["email", "nicolas.zg@hotmail.com"],
]
const user = Object.fromEntries(arrayEntries)
console.log(user);
/*  { name: 'Nicolas', age: 23, email: 'nicolas.zg@hotmail.com' }   */


// Propiedad description de los tipos symbol
// Ahora los tipos primitivos symbol tienen una propiedad description que sirve para mostrar su valor
const nombre = Symbol("Nicolas")
console.log(nombre); // Symbol(Nicolas)
console.log(nombre.description); // 'Nicolas'
