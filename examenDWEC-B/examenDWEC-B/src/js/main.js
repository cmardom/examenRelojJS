

document.getElementById('divMensaje').hidden = true;


etqFormulario.hidden = false;
etqNombre_Usuario.innerText = "";
etqMesa.hidden = true;


let ordenValores = ['A','2','3','4','5','6','7','8','9','J','Q','K'];
let intentos = 0;
let acertadas = 0;
let cartas = [];
let cartasOrdenadas = []; 
let orden = 0;
let jugadores = [];



//localStorage
let playerLS = JSON.parse(localStorage.getItem('player'));
if (playerLS){
    cargar_player(playerLS.id, playerLS.nombre, playerLS.resultado, playerLS.enJuego);
    etqMesa.hidden = false;
    login(playerLS);
}

let enJuegoLS = JSON.parse(localStorage.getItem('enJuego'));
console.log(enJuegoLS);
if (enJuegoLS){
   enJuego.cartas = [...enJuegoLS.cartas];
   enJuego.intentos = enJuegoLS.intentos;
   enJuego.siguiente = enJuegoLS.siguiente;
   enJuego.acertadas = enJuegoLS.acertadas;

   
  

   etqSiguiente.innerText = enJuego.siguiente;
   etqIntentos.innerText = enJuego.intentos;

   for (let i = 0; i < enJuego.acertadas; i++){
    const etqCarta = document.getElementById('carta'+i);
    etqCarta.src = "assets/img/cartas/"+enJuego.cartas[i]+".png";
   }

   localStorage.setItem('enJuego', JSON.stringify(enJuego));


}

//jugar
function generarCartas(){
    let palos = ['H'];
    for (let palo of palos){
        cartasOrdenadas = cartasOrdenadas.concat("A"+palo);
    
        for (let i = 2; i < 10; i++){
            cartasOrdenadas = cartasOrdenadas.concat(""+i+palo);
        }
    
        for (let figura of ['J', 'Q', 'K']){
            cartasOrdenadas.push(figura + palo);
        }
    }


    cartas = cartasOrdenadas; 
    // cartas = _.shuffle(cartasOrdenadas);
    return cartas;
}
generarCartas();

for (let i = 0; i < 12; i++){
    const etqCarta = document.getElementById('carta'+i);
    etqCarta.addEventListener("click", ()=>{
        voltearCarta(i, etqCarta);
        console.log(cartas);

    });
}


//Event listener de botones
botonConsultar.addEventListener("click", ()=>{
    fetch('http://localhost:3000/players').then(resp =>{
        resp.json().then(listaJugadores =>{
            let encontrado = false;

            for (let jug of listaJugadores){
                if (jug.nombre === inputUsuario.value && jug.passwd === inputPasswd.value){
                    login(jug);
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado){
                alert("No existe el jugador");
            }
        })


    }).catch(error => alert("Error!"));
});


botonCerrarSesion.addEventListener("click", ()=>{
    logout();
   

});