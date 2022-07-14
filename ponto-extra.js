const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)
//foreach não retorna nada,ele so executa o que está dentro do bloco. o Map sim le retorna com uma nova array ele não altera o principal. no incremento inverte o ++ porque antes eu pedi para retorna nota e ai foi necessário e ai ele tentava retorna o falor de nota e depois somer um. então ivertemos para ele colocar mais um e retornar nota
//no map você pode passar também aquilo que você quer que seja feito


console.log(notasAtualizadas)

