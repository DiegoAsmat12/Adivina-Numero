let numeroRandom=0;

let btngenerador = document.querySelector('#generaNumero');
let resultadoBox = document.querySelector('.resultado');
let btnAdivina = document.querySelector('.formularioAdivina button');
btngenerador.addEventListener('submit',generarRandom);
function generarRandom(event){
    numeroRandom = Math.floor(Math.random()*100)+1;
    resultadoBox.innerHTML="";
    event.preventDefault();
}



btnAdivina.addEventListener('submit',verificarRandom);
function verificarRandom(event){
    event.preventDefault();
    let numero = parseInt(event.target.closest('.formularioAdivina').querySelector('#adivinaNumero').value);
    if(!numeroRandom){
        resultadoBox.innerHtml = "<p>Por favor, genera el número random</p>";
        return;
    }
    
        if(numero<numeroRandom){
            resultadoBox.innerHTML+="<p>Intenta con un número más grande</p>"

        }
        else if(numero>numeroRandom){
            resultadoBox.innerHTML+="<p>Intenta con un número más pequeño</p>"
        }
        else{
            resultadoBox.innerHTML+="<p>Has adivinado el número</p>"
        }
    
    
}
