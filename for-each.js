const notas = [10, 6.5 ,8 , 7.5]

let somaDasNotas = 0

//paracada - função de callback, seu parâmetro não são dados,seu parâmetro é outra função , ela chama outra função

notas.forEach(nota => {
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)
