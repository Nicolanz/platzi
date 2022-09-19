const title = document.querySelector('h1')
const parrafo = document.querySelector('p')
const id_parrafo = document.getElementById("id_parrafo")
const class_parrafo = document.getElementsByClassName("class_parrafo")[0]
const input = document.querySelector('input')

console.log({
    title,
    parrafo,
    id_parrafo,
    class_parrafo,
    input
});

title.innerText = "Texto";
title.setAttribute("class", "verde");
title.classList.add("rojo") 
title.classList.remove("rojo") 
console.log(title.getAttribute("class")); 

input.value = "456"

const img = document.createElement('img')
img.setAttribute("src", "./profie-picture9.png");
id_parrafo.append(img)
