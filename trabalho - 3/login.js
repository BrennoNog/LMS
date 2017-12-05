window.onload  = iniciar;

var permitegravar;

function iniciar(){
    if(typeof(Storage) !== "undefined"){
        permitegravar = true;
    }else{
        permitegravar = false;
    }
}

function gravar(nome,senha){
    if(localStorage.nome=="undefined" &&  localStorage.senha=="undefined"){
        if(permitegravar==true){
            localStorage.nome = nome;
            localStorage.senha = senha;
            console.log("deu certo!");
        }
    }else{
        console.log("tem gente");
    }
}

function sair(){
    localStorage.nome=undefined;
    localStorage.senha=undefined;
    console.log("saiu");
}

