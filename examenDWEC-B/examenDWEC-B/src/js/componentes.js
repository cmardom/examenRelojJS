const etqSiguiente = document.getElementById("siguiente");
const etqIntentos = document.getElementById("intentos");
const etqMensaje = document.getElementById("mensaje");
const etqMesa= document.getElementById("mesa");
const botonNuevoJuego = document.getElementById("nuevoJuego");
const etqFormulario = document.getElementById("formulario");
const inputUsuario = document.getElementById("login");
const inputPasswd = document.getElementById("password");
const botonConsultar = document.getElementById("botonConsultar");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");
const etqNombre_Usuario = document.getElementById("nombre_usuario");




let player = {
    id: 0,
    nombre: "",
    resultado: [],
    enJuego: ""
};

function cargar_player(id, nombre, resultado, enJuego) {
    player.id = id;
    player.nombre = nombre;
    player.resultado = resultado;
    player.enJuego = enJuego;
}

let enJuego = {
    cartas: [],
    intentos: 0,
    siguiente: 'A',
    acertadas: 0
}

function enJuego_reset() {
    // Reinicializar las propiedades a valores por defecto.
  
}