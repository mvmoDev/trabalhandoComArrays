const listaDeChamada = ['João' , 'Ana' , 'Caio' , 'Laura' , 'Marjorie' , 'Leo']

listaDeChamada.splice(1,2, 'Rodrigo') //método que altera o array original para remoção e inserção de elementos. 1 para.- Qual posição vai iniciar. 2 para.- Quantos elementos vou remover. 3 para.- o que quero inserir. pode vir sem o terceiro e se no segundo colocar 0 ele não retira ninguém, assim pode inserir sem retirar ningém.

console.log("Lista de chamadas :" + (listaDeChamada))
