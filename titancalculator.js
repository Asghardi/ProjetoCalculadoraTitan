// Titan Calculator

// Chamando o display 

const display = document.querySelector("h3");

function inserir (numero){


    let numeros =  display.innerHTML;

    let concatnumeros = display.innerHTML = numeros + numero
   

if (concatnumeros.length >= 14){

    display.innerHTML = numeros;
}

}

function igualdade (){

    let resultado = display.innerHTML;

    let result;

    if (resultado){

        result = display.innerHTML = eval(resultado);

    }else{
        display.innerHTML = "Digite Um Valor Válido!"
    }

    if (result === Infinity){

        display.innerHTML = "Divisão impossível. Aperte C"
    }



}

function limpar (){

    display.innerHTML = "";

}












