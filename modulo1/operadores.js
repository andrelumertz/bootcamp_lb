/*=========================================
          OPERADORES DE COMPARAÇÃO


     > Maior
     < Menor
     >= Maior igual a
     <= Menor gual a
     == Igual a 
     === Igual e do mesmo tipo
     != Diferente de 
     !== Diferente, incluso do tipo


==========================================*/

///console.log(5 > 4) // true e Booleano
///console.log(5 < 4) // false e Booleano
///console.log(5 >= 4) // true e Booleano
///console.log(4 <= 4) // true e Booleano

///console.log(5 == "4") // false
///console.log(5 === "4") // false 
///console.log(5 != '4') // true 
///console.log(4 !== '4') // true



// DESAFIO 1
// verificar se a pessoa é maior de 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
// se apessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

// verificar se a pessoa é maior de 18 anos
//const nome= "Ana"
//const idade= 17

// se sim, deixar entrar, se não, bloquear a entrada
/*
if (idade >= 18) {  
    console.log(` Olá ${nome}. A sua idade é ${idade}.  A sua entrada é permitida` )
}   else {
    console.log(` Que pena ${nome}!! Você tem ${idade}, não possui idade nescessaria para entrar` )
}
// se apessoa tiver 17 anos // avisar para voltar quando fizer 18 anos
if (idade === 17) {
      console.log(`Volte no outro ano ${nome} quando tiver 18 anos` )
}

/* ====================================================
    OPERADORES DE LÓGICOS

 &&  "E" As duas condiçoes devem ser verdadeiras 
      para que a condição final seja verdadeira.
  ||  "OU" Uma das condiçoes deve ser verdadeira
       para que a condição final seja verdadeira.
  !    "NÃO"  Nega uma condição


========================================================*/

/*
console.log(5==5 && 6 == 6) //true  // somente quando os dois forem iguais
console.log(5==5 && 6 != 6) // false


console.log(! (5 > 5 )) //true  
console.log(! (5 < 6 )) // false
*/

const idade= 14

if (!(idade >= 18) || idade === 17) {  
    console.log("Bolquear a entrada" )
}   else {
    console.log("Deixar entrar" )
}


/* ====================================================
    OPERADORES DE ARITMETICOS

 * Multiplicaçao
 / Divisão
 % resto da divisão
 + Adição
 - Subtração

========================================================*/
console.log(2 * 2) //4
console.log(2 / 2) // 1
console.log(2 % 1.5)
console.log(2 + 2) //4
console.log(2 - 2) // 0