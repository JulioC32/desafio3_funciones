const primeraCaja = document.getElementById("a");
const segundaCaja = document.getElementById("b");
const terceraCaja = document.getElementById("c");
const cuartaCaja = document.getElementById("d");

function pintarCajaNegra(elemento) {
    elemento.style.backgroundColor = "black";
}

primeraCaja.addEventListener('click', () => {
    pintarCajaNegra(primeraCaja)
})
segundaCaja.addEventListener('click', () => {
    pintarCajaNegra(segundaCaja)
})
terceraCaja.addEventListener('click', () => {
    pintarCajaNegra(terceraCaja)
})
cuartaCaja.addEventListener('click', () => {
    pintarCajaNegra(cuartaCaja)
})


const boxCaja = document.getElementById('key');

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        boxCaja.style.backgroundColor = "pink";
    } else if (event.key === 's') {
        boxCaja.style.backgroundColor = "orange";
    } else if (event.key === 'd') {
        boxCaja.style.backgroundColor = "skyblue";
    }

});



function crearDiv(color) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.margin = "50px";
    nuevoDiv.style.cursor = "pointer"

    boxnew.appendChild(nuevoDiv);
}


document.addEventListener("keydown", function (event) {
    if (event.key === "q") {
        crearDiv("#8a2be2"); 
    } else if (event.key === "w") {
        crearDiv("#7c7c7c"); 
    } else if (event.key === "e") {
        crearDiv("#80552d"); 
    }
})
    