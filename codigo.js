var numQuadrados =  9;
var cores= [];
var corEscolhida;

var quadrados=
document.querySelectorAll(".quadrado");
var qualCor=
document.querySelectorAll("#cor-escolhida");
var resultDisplay=
document.getElementById("resultado");
var h1=
document.querySelectorAll("h1");
var resetar=
document.getElementById("reset");
var dif=
document.querySelectorAll(".dificuldade");
var facil=
document.querySelectorAll(".dificuldade");
var normal=
document.querySelectorAll(".dificuldade");

init();

function init(){
    qualCor.textContent = corEscolhida;
    setupQuadrados();
    setupDificuldade();
    reset(); 
}

resetar.addEventListener("click", 
function(){
    reset();
});

function setupQuadrados(){
    for (var i=0; i < quadrados.length; i++){
     quadrados[i].style.backgroundColor = cores[i];
     quadrados[i].addEventListener("click", function(){
       var corClicada = this.style.backgroundColor;
       if(corClicada === corEscolhida){
         resultDisplay.textContent = "Acertou!";
         resetar.textContent = "Jogar de novo";
         changeCores(corEscolhida);
       }
       else{
        this.style.backgroundColor = "rgb(67, 47, 117)";
        resultDisplay.textContent = "Tente de novo";
       }
     });
  }
}

function setupDificuldade(){
    for(var i=0; i < dif.length; i++){
        dif[i].addEventListener("click", function(){
    
    for(var i=0; i < dif.length; i++){
        dif[i].classList.remove("selecionado");
    }
    this.classList.add("selecionado");
   if(this.textContent === "Fácil"){
    numQuadrados = 3;
   }
   else if(this.textContent === "Normal"){
    numQuadrados = 6;
   }
   else {
    numQuadrados = 9;
   }
   
   reset();
 });
}
}
function reset(){
    cores = genRandomCores(numQuadrados);
    corEscolhida = escolhaCor();
    qualCor.textContent = corEscolhida;
    resetar.textContent = "Mudar Cores";
    resultDisplay.textContent = "";
    for(var i=0; i < quadrados.length; i++){
        if(cores[i]){
            quadrados[i].style.display = "block";
            quadrados[i].style.backgroundColor = cores[i];
        }
    else{
            quadrados[i].style.display = "none";
    }
    }
}

function changeCores(cor){
 for(var i = 0; i < quadrados.length; i++){
   quadrados[i].style.backgroundColor = cor;
 }
}

function escolhaCor(){
    var random= Math.floor(Math.random() * cores.length);
    return cores[random];
}

function genRandomCores(){
    var fila = [];
    for(var i = 0; i < numQuadrados; i++){
        fila.push(criarCor());
    }
    return fila;
}

function criarCor(){
    var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}