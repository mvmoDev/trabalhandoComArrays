const nomes = [ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda' ]
[ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]


 
const sala1 = nomes.slice(0,nomes.length/2) // método para dividir o array. os parâmetros são: qual posição ele vai iniciar e onde vai terminar
const sala2 = nomes.slice(nomes.length/2) // quando coloco sem a onde vai terminar ele entende que vai até o final


console.log("tamanho da array:" , nomes.length)
console.log("Alunos da sala 1 :" + (sala1)) 
console.log("Alunos da sala 1 :" + (sala2)) 


