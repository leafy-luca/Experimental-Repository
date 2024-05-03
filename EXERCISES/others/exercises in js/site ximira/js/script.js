


function mudaVisibilidadeDitados(ev){
    
    let ditados = document.getElementsByClassName("ditadosximira");
    if (ditados[0].style.display == "none"){
        this.innerHTML = "Esconder os ditados";
        ditados[0].style.display = "block";
        ditados[1].style.display = "block";
    } else {
        this.innerHTML = "Mostrar os ditados";
        ditados[0].style.display = "none";
        ditados[1].style.display = "none";
    }
}

function vinculaClique(){
    let linkClicavel = document.getElementById("hideDitados");
    linkClicavel.addEventListener("click", mudaVisibilidadeDitados);
}