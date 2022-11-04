// Data em que terei que entregar a lista
let minhaMercedes = new Date("oct 10, 2024 12:00:00").getTime()


// Atualizar a contagem a cada 1 segundo
let atualization = setInterval(function() {

    // Pegando a data atual do sistema
    let now = new Date().getTime()

    // Calculando a distande da data atual até a data da meta
    let distance = minhaMercedes -  now

    let anos = Math.floor(distance / (1000 * 60 * 60 * 24) / 365 )
    let meses = Math.floor(distance / (1000 * 60 * 60 * 24) / 30 )
    let semanas = Math.floor(distance / (1000 * 60 * 60 * 24) / 7 )
    let dias = Math.floor(distance / (1000 * 60 * 60 * 24))
    let horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let segundos = Math.floor(distance % (1000 * 60) / (1000))


    let timer = document.querySelector('.timer')
    timer.innerHTML = anos + ' ' + meses + ' ' + semanas + ' ' + dias + ' ' + horas + ':' + minutos + ':' + segundos

}, 1000)