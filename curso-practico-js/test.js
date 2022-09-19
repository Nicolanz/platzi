
// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es una variable y para qué sirve?
// Una variable es un espacio de memoria en la maquina que estamos usando. Se usa para realizar operaciones en el transcurso del programa que estamos usando.

// ¿Cuál es la diferencia entre declarar e inicializar una variable?
// Cuando se declara una variable solo se nombra y declara que habra un espacio en memoria ocupado por ese identificador-nombre de la varibale.
// Cuando se inicializa una variable se define el valor-dato que va a almacenar la variable previamente declarada.

// ¿Cuál es la diferencia entre sumar números y concatenar strings?
// En programacion se pueden hacer operaciones entre variables. Cuando son de tipo number se pueden sumar las variables y calcular su resultado.
// Mientras tanto, cuando dos variables son de tipo string el resultado de sumar las variables reultara en la union de estas mismas en una misma cadena de texto, a este proceso se le llama concatenar.

// ¿Cuál operador me permite sumar o concatenar?
// En javascript podemos concatenar o sumar con el signo +


// 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

// Nombre: string
// Apellido: string
// Nombre de usuario en Platzi: string
// Edad: number
// Correo electrónico: string
// Mayor de edad: boolean
// Dinero ahorrado: number
// Deudas: boolean || number


// 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

var Nombre = "Nicolas";
var Apellido = "Zarate";
var Usuario = "Nicolaszarate";
var Edad = 23;
var Email = "nicolasandreszarate@gmail.com";
var mayorDeEdad = true;
var dineroAhorrado = 3000000;
var Deudas = 1000000;


// 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

// Nombre completo (nombre y apellido)
var nombreCompleto = Nombre + " " + Apellido;
console.log(nombreCompleto);

// Dinero real (dinero ahorrado menos deudas)
var dineroReal = dineroAhorrado - Deudas;
console.log(dineroReal);


// Funciones
// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es una función?
// Una funcion es un bloque de codigo que realiza operaciones especificas entre variables.
// Son usadas entre otras cosas para evitar reescribir codigo y organizarlo mejor.

// ¿Cuándo me sirve usar una función en mi código?
// Es util usar las funciones cuando se necesita ejecutar un mismo bloque de codigo dos o mas veces.
// Esto es asi porque se llama la funcion las veces que sea necesario usarlo en ves de escribir todo el mismo codigo varias veces.

// ¿Cuál es la diferencia entre parámetros y argumentos de una función?
// Los argumentos son las variables que se le pasan a una funcion cuando esta es llamada para ser utilizada.
// Los parametros son las varibales que se usan y son llamadas en una funcion cuando esta es definida.


// 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

function completeName(name, lastname, nickname){
    const completeName = name + " " + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
completeName("Nicolas", "Zarate", "Nico");


// Condicionales
// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es un condicional?
// Un condicional es una palabra clave o sentencia que nos permite controlar el flujo y el como se va a desenvolver nuestro codigo dependiendo de que la condicion sea verdadera o falsa.

// ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

// if - else
// Cuando se llama esta sentencia nuestro codigo tomara un camino u otro, con unicamente dos opciones en las cuales se ejecutara un solo bloque de codigo.
// if - else if - else
// Esta sentencia es similar a if - else con la diferencia que con el agragado de else if se puede añadir otra condicion que de ser cumplida definira el rumbo que tomara el codigo asignado.
// switch - case
// Similar a if - else if - else con la diferencia que con la palabra clave case se añaden tantas condiciones y filtros sea necesario para ejecutar un bloque de codigo.
// Usualmente se usa cuando es necesario que el condicional tiene muchos casos.

// ¿Puedo combinar funciones y condicionales?
// Si, es posible y es una practica que usualmente se ultiza para definir el rumbo de nuestra funcion


// 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Free";

if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("No tienes suscripcion");
}

// 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

const membresiasPlatzi = [
    {
        name: "Expert",
        description: "Puedes tomar casi todos los cursos de Platzi durante un año"
    },
    {
        name: "Basic",
        description: "Puedes tomar casi todos los cursos de Platzi durante un mes"

    },
    {
        name: "Free",
        description: "Solo puedes tomar los cursos gratis"
    },
    {
        name: "ExpertPlus",
        description: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    }
]
for (i=0; i < membresiasPlatzi.length; i++){
    if (membresiasPlatzi[i].name === tipoDeSuscripcion || membresiasPlatzi[i].name === tipoDeSuscripcion || membresiasPlatzi[i].name === tipoDeSuscripcion || membresiasPlatzi[i].name === tipoDeSuscripcion ){
        console.log(membresiasPlatzi[i].description);
        break;
    }
}



// Ciclos

// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es un ciclo?
// Un ciclo es una sentencia la cual permite ejecitar un bloque de codigo las veces que se definan

// ¿Qué tipos de ciclos existen en JavaScript?
// For, Do, while, Do while.

// ¿Qué es un ciclo infinito y por qué es un problema?
// Un ciclo infinito en un bucle el cual no termina y es un problema porque se puede ejecutar un bloque de codigo sin que nunca se termine.

// ¿Puedo mezclar ciclos y condicionales?
// Si, es posible. De hecho esta una pratica muy comun y usada para continuar o romper un bucle con las palabras clave: continue y break


// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}
i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}


// 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
// 💡 Pista: puedes usar la función prompt de JavaScript.
let person = prompt("Cuanto es 2 + 2");
while(parseInt(person) != 4){
    person = prompt("Cuanto es 2 + 2")
}
alert("Felicitaciones");



// Listas
// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es un array?
// Un array es una variable de tipo de dato Array que permite almacenar una coleccion de diferentes variables con tipos de datos diferentes en su interior.

// ¿Qué es un objeto?
// Un objeto es una variable de tipo de dato Object que peromite definir diferenwtes caracteristicas en su interior incluyendo metodos que cumple el rol de funciones.

// ¿Cuándo es mejor usar objetos o arrays?
// Se usan los objetos cuando se quiere definir varios campos dentro de un mismo objeto y un array cuando solo se quieren almacenar diferentes varibales en un mismo lugar.

// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
// Si, ambos comportamientos es posible hacerlos en el lenguaje de programacion JavaScript


// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function printFirstElement (arrayElement){
    console.log(arrayElement[0]);
}
printFirstElement(["uno", "dos"]);

// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function printAllElements(arrayObject){
    i = 0;
    while(i < arrayObject.length){
        console.log(arrayObject[i]);
        i++;
    }
}
printAllElements(["Nicolas", "Andres", "Luisa", "Fernanda"]);


// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
function printAllElementsObj(objElement){
    console.log(objElement.name);
    console.log(objElement.apellido);
    console.log(objElement.edad);
}
printAllElementsObj({
    name: "Nicolas",
    apellido: "Zarate",
    edad: 22
});
