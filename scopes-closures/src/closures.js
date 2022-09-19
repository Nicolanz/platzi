// closures
// Permiten acceder al ambito de una funcion exterior desde una funcion interior
// Los closures no son siempre usados


// Ambito lexico
// Significa que la accebilidad de las variables esta determinada por la posicion de las mismas dentro de los ambitos anidados
const myGlobal = 0;

const myFuction = () => {
    const myNumber = 1;
    console.log(myGlobal);
    
    const parent = () => { // Funcion interna
        const inner = 2;
        console.log(myNumber);
        console.log(myGlobal);

        const child = () =>{
            console.log(inner);
            console.log(myNumber);
            console.log(myGlobal);
        }

        return child();
    }
    return parent();
}

myFuction();



// closure
const greeting = () => {
    let userName = "Nicolaszarate";

    const displayUsername = () => {
        return `Hello ${userName}`;
    }

    return displayUsername;
}

const g = greeting();
console.log(g); // retorna la funcion
console.log(g()); // retorna la funcion y la ejecuta

