const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']
                              //[3]
const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]
// aero function
const exibeNomeNota = (nomeDoAluno) => {
    // método includes(booleano) verefica se tal coisa existe,ele faz uma busca por valor (no caso uma busca por Ana), já index of(retorna um número) vai trazer o numero do indíce também fazendo uma pesquisa por Ana
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
                                  //[0] [3]
        return listaDeNotasEAlunos [0] [indice] + ' , sua média é ' + listaDeNotasEAlunos[1] [indice]
    }else{
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))

//onde está nomeDoAluno vai ser substituido por Ana

