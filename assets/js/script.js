const titulo = document.getElementById("titulo");
titulo.style.backgroundColor = "green";

const pintar = (elemento, color = "green") => {
    elemento.style.backgroundColor = color; 
}

titulo.addEventListener("click", () => {
    const colorActual = titulo.style.backgroundColor; 

    
    if (colorActual === "green") {
        pintar(titulo, "yellow"); 
    } else {
        pintar(titulo, "green"); 
    }
});
