let nomealuno = "";
let elemento = document.querySelector("#aluno");

while(nomealuno == ""){
    nomealuno = prompt("Qual é o seu nome?")
}

if (nomealuno == null){
    elemento.textContent = 'seja muito bem vindo.';
}else{
    elemento.textContent = nomealuno
}
