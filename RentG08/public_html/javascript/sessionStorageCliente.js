window.addEventListener('load', mostrarNombre, false);

function iniciar() {
    var boton = document.getElementById('btnInicioSesion');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
}
function nuevoitem() {
//    var valid = document.iniciarSesion.checkValidity();
//    
//    if(valid){
    var clave = document.getElementById('email').value;
    var valor = document.getElementById('nombre').value;
    sessionStorage.setItem(clave, valor);
    mostrar();
   
    document.getElementById('nombre').value = '';
//    }
}
function mostrarNombre() {
//    var cajadatos = document.getElementById('cajadatos');
//    cajadatos.innerHTML = '';
//    for (var f = 0; f < sessionStorage.length; f++) {
//        var clave = sessionStorage.key(f);
//        var valor = sessionStorage.getItem(clave);
//        cajadatos.innerHTML += 'Hola, ' + clave ;
//    }


}