// nessas funções você nao consegue passar como parâmetro algo que não seja uma função(ela pode estar antes ou depois), caso precise pode aceitar como par o indíce
const nomes = ['Ana','Ju','Leo','Paula']

nomes.forEach(ImprimeNomes)

function ImprimeNomes(nomes) {
    console.log(nomes)
}