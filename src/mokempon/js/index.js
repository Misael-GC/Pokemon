function  iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
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
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    }else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }

}



function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego);