// es11 -- ECMAScript2020
// Fue publicada en el 2020

// Importancia dinamica -- dynamic import
// Consiste en cargar modulos cuando se vayan a usar y no al iniciar la aplicacion, esto hace que la 
// pagina web sea mas rapida porque descarga menos recursos
// import recibe un argumento de tipo string con la ruta del modulo a importar y devuelve una promesa

const ruta = "./file.js"
const btn = document.getElementById('btn')

// resolve promises
btn.addEventListener("click", () => {
    import(ruta).then((module)=>{
        console.log(module.function1());
        console.log(module.function2());
    }).catch((err)=>{
        console.log(err.message);
    })
})

// resolve using async - await
btn.addEventListener("click", async () => {
    try {
        const module = await import(ruta);
        console.log(module.function1());
        console.log(module.function2());
    } catch (e) {
        console.log(e.message);
    }
});

// Caracteristicas de ES2020
// BigInt -> dato primitivo para manejar numeros muy grandes
console.log(26n);
console.log(BigInt(26n));

// Limites numericos de javascript
const max = Number.MAX_SAFE_INTEGER; // 9007199254740991
const min = Number.MIN_SAFE_INTEGER; // -9007199254740991

// Los bigInt ayuda a manejar operaciones de enteros fuera de los limites mencionados   
const number = max + 2 // 9007199254740992
const bigint = BigInt(max) + BigInt(2) // 9007199254740993n
console.log(number);
console.log(bigint);


// Manejo de varias promesas .all
// Resuelve varias promesas con el metodo .all
// Recibe un array de promesas, si una promesa es rechazada entonces entrara en catch
// retorna array con las promesas rersueltas
const promise1 = () => {
    return new Promise ((resolve, reject)=>{
        if (true){
            resolve ("promise1 resolved")
        } else {
            reject ("promise1 rejected")
        }
    })
}
const promise2 = () => {
    return new Promise ((resolve, reject)=>{
        if (true){ // possible error
            resolve ("promise2 resolved")
        } else {
            reject ("promise2 rejected")
        }
    })
}
const promise3 = () => {
    return new Promise ((resolve, reject)=>{
        if (true){
            resolve ("promise3 resolved")
        } else {
            reject ("promise3 rejected")
        }
    })
}

Promise.all([promise1(), promise2(), promise3()]).then((res)=> console.log(res)) // [ 'promise1 resolved', 'promise2 resolved', 'promise3 resolved' ]
                                                .catch((err)=> console.log(err))


// .allSettled permite manejar varias promesas
// Devuelve un array de objetos con el estado y el valor de cada promesa, haya sido rechazada o no
// Recibe array de promesas

const promesa4 = Promise.reject("Ups promesa 1 falló") 
const promesa5 = Promise.resolve("Promesa 2")
const promesa6 = Promise.reject("Ups promesa 3 falló")

Promise.allSettled([promesa4, promesa5, promesa6])
    .then(respuesta => console.log(respuesta))

/* [
  {
    status: 'rejected',
    reason: 'Ups promesa 1 falló'
  },
  { status: 'fulfilled', value: 'Promesa 2' },
  {
    status: 'rejected',
    reason: 'Ups promesa 3 falló'
  }
] */


// Objeto global 
// Objeto accequible y creado en el momento que js compila un archivo y lo convierte en codigo
// node -> global -> objeto global
// navegador -> window -> objeto global
// node y navegador -> globalThis -> objeto global
// Ejecuta el siguiente código y observa que muestra
console.log(window)
console.log(globalThis)

// En el navegador
window === globalThis // true

// En Node.js
global === globalThis // true


// Operador Nullish Coalescing
// Consiste en evaluar una variables con los simbolos ??
// Si es null o undefined se le asiganara un valor

const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'

// Diferencia entre || y Nusllish coalescing
// || -> Evalua un valor falsey, que es un false en un contexto booleano: 0, "", false, NaN, undefined o null.
// ?? -> undefined, null
const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

orId //  'Sin id'
nullishId // 0


// Encadenamiento opcional
// Cuando se accede a una propiedad de un obj que no existe devuelve undefined
// Cuando se accede a una propiedad mas profunda de un obj que no existe devuelve error
const myObj = {}
try {
    console.log(myObj.name); // entra sin error e imprime undefined
    console.log(myObj.name.apellido); // Error
} catch{
    console.log("Error");
}

// El encadenamiento opcional - optional chaining ?
// Detiene la evaluacion del objeto cuando el valor es null o undefined
// Devuelve undefined sin detener el codigo
const usuario = {}
console.log(usuario.redes?.facebook) 
// undefined
// Si abusas del encadenamiento opcional y existe un error en usuario, el programa podría “ocultarlo” por un undefined, provocando que el debugging sea más complicado. 
