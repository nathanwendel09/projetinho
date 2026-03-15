function CalcularIMC(){

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);

let classificacao = "";

    if (imc < 18.15){
        classificacao = "Abaixo do peso, é recomendado procurar algum profissional de saúde.";
    }
    else if (imc < 25){
        classificacao = "Peso normal";
    }
    else if (imc < 30){
        classificacao = "Sobrepeso, é recomendado procurar algum profissional de saúde.";
    }
    else{
        classificacao = "Obesidade, é recomendado procurar algum profissional de saúde.";
    }
        

    document.getElementById("resultado").innerText = 
    "Seu IMC é: " + imc.toFixed(2) + " - " + classificacao;

}