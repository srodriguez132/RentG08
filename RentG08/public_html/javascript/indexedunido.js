var bd, cajadatos, bdCoches, bdReservas, bdClientes;
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var i = 0;

function iniciar() {

    zonadatos = document.getElementById("zonadatos");

    if (document.getElementById("registrarse")) {

        var botonregistro = document.getElementById("registrarse");

        botonregistro.addEventListener("click", agregarobjeto);
    }
    if (document.getElementById("reservar")) {
        var botonreserva = document.getElementById("reservar");

        botonreserva.addEventListener("click", agregarreserva);
    }
//    var boton1 = document.getElementById("botonPost");
//    if (boton1)
//        boton1.addEventListener("click", mostrarDespues);
//    var boton2 = document.getElementById("botonAnt");
//    if (boton2)
//        boton2.addEventListener("click", mostrarAntes);
//    var boton3 = document.getElementById("botonC");
//    if (boton3)
//        boton3.addEventListener("click", mostrarPorClientes);
//    var boton4 = document.getElementById("botonF");
//    if (boton4)
//        boton4.addEventListener("click", mostrarPorFecha);
//    var boton5 = document.getElementById("botonM");
//    if (boton5)
//        boton5.addEventListener("click", mostrarPorMatricula);

    //nombre de la base de datos
    var solicitud = indexedDB.open("RentG08");
    solicitud.onsuccess = function (e) {
        bd = e.target.result;
    };

    solicitud.onerror = function (e) {
        alert(solicitud.error.message);
    };

    solicitud.onupgradeneeded = function (e) { // 
        //conector
        bd = e.target.result;

        //Crear base de datos de clientes
        bdClientes = bd.createObjectStore("clientes", {keyPath: "email"});

        //Crear base de datos de reservas
        bdReservas = bd.createObjectStore("reservas", {keyPath: 'id'});

        //Crear base de datos de coches
        bdCoches = bd.createObjectStore("coches", {keyPath: 'matricula'});


    };
}
;

function agregarreserva() {
    i = i+1;
    var id = i;
    
    for (var e = 0; e < sessionStorage.length; e++) {
        var email = sessionStorage.key(e);
    }
    
    var matricula = document.getElementById("coche").value;

    var fechaI = document.getElementById("fechaI").value;

    var horaI = document.getElementById("horaI").value;

    var fechaF = document.getElementById("fechaF").value;

    var horaF = document.getElementById("horaF").value;

    var lugar = document.getElementById("lugar").value;

    var transaccion = bd.transaction("reservas", "readwrite");

    var almacen = transaccion.objectStore("reservas");

    var agregar;
    
    if(document.reserva.fechaI.value==="" || document.reserva.horaI.value==="" ||
            document.reserva.fechaF.value==="" || document.reserva.horaF.value===""){
        alert('Completa todos los campos');
    }
    else{
    agregar = almacen.add({id: id, email: email, matricula: matricula,fechaI: fechaI, horaI: horaI, fechaF: fechaF, horaF: horaF, lugar: lugar});
    //agregar.addEventListener("success", mostrar, false);

    agregar.onsuccess = function (e) {
        alert('Registro completado correctamente');
//                   location.href="altaPacientes.html";
    };

    agregar.onerror = function (e) {
        alert('Este email ya está en uso');

    };
}
}

function agregarobjeto() {

    var email = document.getElementById("email").value;

    var contrasena = document.getElementById("contrasena").value;

    var nombre = document.getElementById("nombre").value;

    var apellido = document.getElementById("apellido").value;

    var movil = document.getElementById("movil").value;

    var imagen = document.getElementById("caja").value;

    var transaccion = bd.transaction("clientes", "readwrite");

    var almacen = transaccion.objectStore("clientes");

    var agregar;

    if (document.registro.email.value === '' || document.registro.contrasena.value === '' || document.registro.nombre.value === '' || document.registro.apellido.value === '') {
        alert('Rellene los campos');
    } else if (document.registro.nombre.value.length <= 2) {
        alert('El nombre debe contener más de dos caracteres');

    } else {
        agregar = almacen.add({email: email, contrasena: contrasena, nombre: nombre, apellido: apellido, movil: movil, imagen: imagen});
        //agregar.addEventListener("success", mostrar, false);

        agregar.onsuccess = function (e) {
            alert('Registro completado correctamente');
//                   location.href="altaPacientes.html";
        };

        agregar.onerror = function (e) {
            alert('Este email ya está en uso');

        };

        document.getElementById("email").value = "";
        document.getElementById("contrasena").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("movil").value = "";
    }


}

//function agregarcoches(){
//        var transaccion = bdCoches.transaction("coches", "readwrite");
//        var almacen = transaccion.objectStore("coches");
//        const datos = [{matricula: "1111aaa", marca: "BMW", imagen: "../img/bmw.png"},
//            {matricula: "2222bbb", marca: "Citroen", imagen: "../img/citroen.png"},
//            {matricula: "3333ccc", marca: "Ford", imagen: "../img/ford.png"},
//            {matricula: "4444ddd", marca: "Mercedes", imagen: "../img/mercedes.png"}];
//        for (var i in datos) {
//            almacen.add(datos[i]);
//        }
//}

window.addEventListener("load", iniciar, false);
//window.addEventListener("load", agregarcoches, false);