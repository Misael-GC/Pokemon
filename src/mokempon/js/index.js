let ataqueJugador;
let ataqueEnemigo;
const agua = 'Agua'
const fuego = 'Fuego'
const tierra = 'Tierra'


function  iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
};

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    let escogerMascotaJugador = (inputHipodoge.checked) ? 
        spanMascotaJugador.innerHTML = 'Hipodoge'
    : (inputCapipepo.checked) ? 
        spanMascotaJugador.innerHTML = 'Capipepo'
    : (inputRatigueya.checked) ? 
        spanMascotaJugador.innerHTML = 'Ratigueya'
    : alert('elige una mascota');

    seleccionarMascotaEnemigo();
};

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    }else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }


}


function ataqueFuego(){
    ataqueJugador = fuego
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = agua;
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = tierra
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = fuego
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = agua
    }else{
        ataqueEnemigo = tierra
    }
    combate();
}

function combate() {
    if(ataqueEnemigo === ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador === fuego && ataqueEnemigo === tierra) {
        crearMensaje("GANASTE")
    } else if(ataqueJugador === agua && ataqueEnemigo === fuego) {
        crearMensaje("GANASTE")
    } else if(ataqueJugador === tierra && ataqueEnemigo === agua) {
        crearMensaje("GANASTE")
    } else {
        crearMensaje("PERDISTE")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, las mascota del enemigo atacó con ${ataqueEnemigo} - ${resultado} ` 

    sectionMensajes.appendChild(parrafo);

}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego);
