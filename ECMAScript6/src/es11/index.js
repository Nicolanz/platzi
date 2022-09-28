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
