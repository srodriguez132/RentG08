window.addEventListener('load', iniciar, false);
//window.addEventListener('load', mostrarNombre, false);

function iniciar() {
    var boton = document.getElementById('btnInicioSesion');
    if(boton){
    boton.addEventListener('click', nuevoitem, false);
    }
    mostrarNombre();
    
}
function nuevoitem() {
//    var valid = document.iniciarSesion.checkValidity();
//    
//    if(valid){
    var clave = document.getElementById('email').value;
//    var valor = document.getElementById('nombre').value;
    sessionStorage.setItem("email", clave);
  //  mostrar();
   
    document.getElementById('nombre').value = '';
//    }
}
function mostrarNombre() {
  var cajadatos = document.getElementById('nombreSesion');
   cajadatos.innerHTML = '';
//    for (var f = 0; f < sessionStorage.length; f++) {
var clave = sessionStorage.getItem("email");
     //  var valor = sessionStorage.getItem("valor");
     cajadatos.innerHTML += 'Hola, ' + clave;
//    }


}