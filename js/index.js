let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
const agua = 'Agua'
const fuego = 'Fuego'
const tierra = 'Tierra'


function  iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'none';

    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);


    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego)
};

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex';
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none';


    let escogerMascotaJugador = (inputHipodoge.checked) ? 
        spanMascotaJugador.innerHTML = 'Hipodoge'
    : (inputCapipepo.checked) ? 
        spanMascotaJugador.innerHTML = 'Capipepo'
    : (inputRatigueya.checked) ? 
        spanMascotaJugador.innerHTML = 'Ratigueya'
    : alert('elige una mascota');

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.disabled = true;

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
    // Combate entre jugador y enemigo || HACER QUE los botones se desactiven si no se ha escojido un pokemon
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    if(ataqueEnemigo === ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador === fuego && ataqueEnemigo === tierra) {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.textContent = vidasEnemigo;
    } else if(ataqueJugador === agua && ataqueEnemigo === fuego) {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.textContent = vidasEnemigo;
    } else if(ataqueJugador === tierra && ataqueEnemigo === agua) {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.textContent = vidasEnemigo;
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador;
    }

    //revisar las vidas
    revisarVidas();
}

function revisarVidas(){
    if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES!!! Ganaste 🚀🙌🏽🎉')
    }else if (vidasJugador == 0) {
        crearMensajeFinal('Perdiste 🙁😿💔')
    }
}



function crearMensaje(resultado){
    
    let sectionMensajes = document.getElementById('resultado');
    let ataquesDelJugador = document.getElementById('ataques-del-jugador');
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');


    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);

}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado');

    sectionMensajes.innerHTML = resultadoFinal;

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true;

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'block';
}


function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego);
