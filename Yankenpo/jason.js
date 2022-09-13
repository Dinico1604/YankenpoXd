function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1)+ min);
}
function eleccion(jugada){
    if(jugada == 1){
        resultado = "Papel"
    } else if(jugada == 2){
        resultado = "Piedra"
    } else if(jugada == 3){
        resultado = "Tijera"
    } else {
        resultado = "NULO"    
    }
    return resultado
}

let jugador = 0
let pc = 0
let triunfo = 0
let perdida = 0
    while(triunfo < 3 && perdida < 3){
        pc = aleatorio(1, 3)
        jugador = prompt("Elegir: 1 para papel, 2 para piedra, 3 para tijera")
        //alert("Elegiste " + jugador)
        alert("Tu elegiste " + eleccion(jugador))
        alert("PC elige: " + eleccion(pc))
        // pelea
        if ( pc == jugador){
            alert("Empate")
        } else if (jugador == 1 && pc == 2 ) {
            alert("Ganaste")
            triunfo = triunfo + 1
        } else if (jugador == 2 && pc == 3){
            alert("Ganaste")
            triunfo = triunfo + 1
        } else if (jugador == 3 && pc == 1) {
            alert("Ganaste")
            triunfo = triunfo + 1            
        } else {
            alert ("perdiste")
            perdida = perdida + 1
        }
}
    alert("Ganaste " + triunfo + " veces.Perdiste " + perdida + " veces" )
