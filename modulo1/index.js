//console.log("Ola mundo do code !")  /// Olá mundo do JS
// Criar um programa que calcule a media das notas entre os alunos e envia 
// mensagem do calculo da media.
// se a media for maior que 5, parabenizar  a turma

//const nome = "Mayk" 
//const nome2 ='Diego'
//const nome3 = `Ana e ${nome}` // com essa acentuação não colocamos variaves dentro de variaveis

//console.log(nome3)  // imprime a variavel armazenada

const aluno01 = "Mayk"
const notaAluno01 = 9.8 // numeros não precisam de aspas
const aluno02 = 'Diego'
const notaAluno02 = 10 
const aluno03 = 'Cauã' 
const notaAluno03 = 2
const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3  // Aqui estamos calculando as medias dos alunos

// se a media for maior que 5, parabenizar a turma // Isso se chama estrutura condicional 

if (media > 5) {  
    console.log(` A nota foi de ${media}. Parabéns` )
} else {
    console.log(" A media é menor que 5" )
}



const somaAlunos = (aluno1, aluno2)  => {
    return soma = aluno1 + aluno2
}

function saudacao(nome,idade) {
    
   if (idade >= 18 ) {
      return ` Olá ${nome}, voce possui ${idade} entao esta liberado para entrar na festa !! `;
   } 
    else {
        return ` Infelizmente voice não podera entar ${nome}, pois não é de maior `
    }
    
}

// liberação de entradas

 const monitor = (nome,idade) => {
    if (idade >= 18 ) {
      return ` Olá ${nome}, voce possui ${idade} entao esta liberado para entrar na festa !! `
   } 
    else {
        return ` Infelizmente voice não podera entar ${nome}, pois não é de maior `
    }
    
} 

