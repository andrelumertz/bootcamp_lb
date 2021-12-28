/* ====================================================
Desafio 1-1: Primeiros passos com JS
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.



========================================================*/
/*

const nome = "Carlos";
const peso = 100;
const altura = 1.50;

const imc = peso / (altura * altura);

if (imc >= 30)  {  
    console.log("Carlos você está acima do peso;" )
}   
if (imc < 29.9) {
    console.log("Carlos você não está acima do peso;" )
}
*/
/* ====================================================
         Desafio 1-1: Primeiros passos com JS

Crie um programa para calcular a aposentadoria de uma pessoa.


========================================================*/

// Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:


const nome = 'Jorgina';
const sexo = 'M'
const idade = 100;
const contribuicao = 70;

if (((sexo == 'F' && contribuicao >= 30) && (idade + contribuicao >= 85)) || ((sexo == 'M' && contribuicao >= 35) && (idade + contribuicao >= 95))) {
    console.log(`${nome}, você pode se aposentar.`)
} else {
    console.log(`${nome}, você não pode se aposentar.`)
}

/// Outra forma de fazer seria

const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

const calculoContribuicao = idade + contribuicao

// essas variáveis irão retornar true ou false
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}

