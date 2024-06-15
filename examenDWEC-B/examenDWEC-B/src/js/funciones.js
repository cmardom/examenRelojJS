function rutaCarta(index){
    return "assets/img/cartas/" + cartas[index] + ".png";
}


function valorCarta(numeroLetra){
    let cartavalor = numeroLetra.substring(0,1); //se coge num
    return ordenValores.indexOf(cartavalor)+1; // A=1, 2=2, 3=3... 
}


function voltearCarta(i, etqCarta){

    let siguiente = ordenValores[orden];
    if (etqCarta.src.includes("red")){
        etqCarta.src = rutaCarta(i);


    }

    


    if (valorCarta(cartas[i]) === valorCarta(ordenValores[orden])
        || valorCarta(cartas[i]) === siguiente){
        acertadas++;
        orden++;


        siguiente = ordenValores[orden];
        etqSiguiente.innerText = siguiente;
        
       
        

    } else {
        intentos++;
        etqIntentos.innerText = intentos;

        let interval;

        interval = setTimeout(()=>{
            etqCarta.src = "assets/img/cartas/red_back.png";
        },300);
    }

    if (acertadas === 12){
        etqSiguiente.innerText = "";
        document.getElementById('divMensaje').hidden = false;
        etqMensaje.innerText = "HAS GANAO";

    }





    enJuego.cartas = cartas;
    enJuego.intentos = intentos;
    enJuego.siguiente = siguiente;
    enJuego.acertadas = acertadas;
    player.enJuego = intentos;
    player.resultado = acertadas;
    localStorage.setItem("player", JSON.stringify(player));
    localStorage.setItem("enJuego", JSON.stringify(enJuego));
}

function login(jug){
    botonConsultar.hidden = true;
    botonCerrarSesion.hidden = false;
    inputPasswd.hidden = true;
    inputUsuario.hidden = true;
    etqMesa.hidden = false;

   
    etqNombre_Usuario.innerText = "Hola, " + jug.nombre;

    cargar_player(jug.id, jug.nombre, jug.resultado, jug.enJuego);
    localStorage.setItem('player', JSON.stringify(player));
}

function logout(){
    botonConsultar.hidden = false;
    botonCerrarSesion.hidden = true;
    inputPasswd.hidden = false;
    inputUsuario.hidden = false;
    etqMesa.hidden = true;

    siguiente = "A";
    intentos = 1;
    etqSiguiente.innerText = siguiente;
    etqIntentos.innerText = intentos;

   
    etqNombre_Usuario.innerText = "";
    localStorage.clear();

    for (let i = 0; i < 12; i++){
        const etqCarta = document.getElementById('carta'+i);
        
        etqCarta.src = "assets/img/cartas/red_back.png";

    
       
    }


   
}