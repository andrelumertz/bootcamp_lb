// Criar um programa que calcule a media das notas entre os alunos e envia 
// mensagem do calculo da media.


const alunosDaTurmaA= [        // array: coleção de valores agrupados em uma variavel;
    {
        nome:"Andre",
        nota:9.8

    },
    {
        nome: "Lucas",
        nota: 10
    },
    {
        nome:"Otavio",
        nota:5
    }
]
const alunosDaTurmaB= [        // array: coleção de valores agrupados em uma variavel;
    {
        nome:"Ivo",
        nota:9.8

    },
    {
        nome: "Junior",
        nota: 10
    },
    {
        nome:"Harley Davidson",
        nota:5
    }
]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media){
    // se a media for maior que 5, parabenizar a turma 
    if (media > 5) {  
        console.log(` A media da turma ${media}.  foi de ${media}.Parabéns` )
    } else {
        console.log(" A media  da turma ${turma} é menor que 5" )
    }
}

enviaMensagem(media1,'turmaA')
enviaMensagem(media2,'turmaB')


const nomes = (nome1, nome2) => { 
  return (res = ` Os nomes são ${nome1} e ${nome2} !!`);
};

nomes('André','Maria');
