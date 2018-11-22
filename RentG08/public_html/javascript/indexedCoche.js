// JavaScript Document
var bd;
function agregarObjeto() {
        var transaccion = bd.transaction(["coches"], "readwrite");

        var almacen = transaccion.objectStore("coches");
        var agregar;

        agregar = almacen.add[{matricula: "1111aaa", marca: "BMW", imagen: "//img/bmw.png"},
                {matricula: "2222bbb", marca: "Citroen", imagen: "//img/citroen.png"},
                {matricula: "3333ccc", marca: "Ford", imagen: "//img/ford.png"},
                {matricula: "4444dd", marca: "Mercedes", imagen: "//img/mercedes.png"}];
//        agregar.onsuccess = function (e) {
//            alert('Registro completado correctamente');
////                   location.href="altaPacientes.html";
//        };

//        agregar.onerror = function (e) {
//            alert('Registro fallido');
////               location.href="altaPacientes.html";
//        };
    }
function iniciar() {

    var solicitud = indexedDB.open("RentG08");

    solicitud.onsuccess = function (e) {
        bd = e.target.result;
        var transaccion = bd.transaction(["coches"], "readwrite");

        var almacen = transaccion.objectStore("coches");
        var agregar;
        const datos = [{matricula: "1111aaa", marca: "BMW", imagen: "//img/bmw.png"},
                {matricula: "2222bbb", marca: "Citroen", imagen: "//img/citroen.png"},
                {matricula: "3333ccc", marca: "Ford", imagen: "//img/ford.png"},
                {matricula: "4444dd", marca: "Mercedes", imagen: "//img/mercedes.png"}];
     for (var i in datos) {
         almacen.add(datos[i]);
    }
    };

    solicitud.onerror = function (e) {
        alert(solicitud.error.message);
    };

    solicitud.onupgradeneeded = function (e) {
        bd = e.target.result;
        bd.createObjectStore("coches", {keyPath: "matricula"});
    };
    
}
    

;
window.addEventListener("load", iniciar);
