///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//var clientes, bd;
//function iniciar() {
//    clientes = document.getElementById("cajaformulario");
//    var boton = document.getElementById("grabar");
//    boton.addEventListener("click", agregarobjeto);
////    boton.addEventListener("click", agregarobjeto);
//
//    var solicitud = indexedDB.open("basededatos");
//    solicitud.addEventListener("error", mostrarerror);
//    solicitud.addEventListener("success", comenzar);
//    solicitud.addEventListener("upgradeneeded", crearbd);
//}
//function mostrarerror(evento) {
//    alert("Error: " + evento.code + " " + evento.message);
//}
//function comenzar(evento) {
//    bd = evento.target.result;
//    
//}
//function crearbd(evento) {
//    var basededatos = evento.target.result;
//    var clientes = basededatos.createObjectStore("clientes", {keyPath: "id"});
////    almacen.createIndex("BuscarFecha", "fecha", {unique: false});
//}
//function agregarobjeto() {
//    var email = document.getElementById("email").value;
//    var contrasena = document.getElementById("contrasena").value;
//    var nombre = document.getElementById("nombre").value;
//    var movil = document.getElementById("movil").value;
////    var imagen = document.getElementById("").value;
//    
//    var transaccion = bd.transaction(["clientes"], "readwrite");
//    var clientes = transaccion.objectStore("clientes");
////    transaccion.addEventListener("complete", mostrar);
//
//    var solicitud = clientes.add({id: email, contrasena: contrasena, nombre: nombre, movil: movil});
//    document.getElementById("email").value = "";
//    document.getElementById("contrasena").value = "";
//    document.getElementById("nombre").value = "";
//    document.getElementById("movil").value = "";
////    document.getElementById("").value = "";
//}
////function mostrar() {
////    cajadatos.innerHTML = "";
////    var transaccion = bd.transaction(["clientes"]);
////    var almacen = transaccion.objectStore("peliculas");
////    var puntero = almacen.openCursor();
////    puntero.addEventListener("success", mostrarlista);
////}
////function mostrarlista(evento) {
////    var puntero = evento.target.result;
////    if (puntero) {
////        cajadatos.innerHTML += "<div>" + puntero.value.id + " - " + puntero.value.nombre + " - " + puntero.value.fecha + "</div>";
////        puntero.continue();
////    }
////}
//window.addEventListener("load", iniciar);
//
