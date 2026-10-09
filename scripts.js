const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");
const cabecalho = document.querySelector(".fale-conosco")

function mostrarform() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
    
}

function esconderform(){
    formulario.style.left = "-340%";
    formulario.style.transform = "translateX(0%)";
    mascara.style.visibility = "hidden";
    
}