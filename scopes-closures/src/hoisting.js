
// Hoisting: Elevar variables

console.log(nameOfDog);
var nameOfDog = "Pedro";
console.log(nameOfDog);


nameOfPet();
function nameOfPet(){
    console.log(`La mejor mascota es ${elmo}`); // undefined
}

var elmo = "Elmito";
