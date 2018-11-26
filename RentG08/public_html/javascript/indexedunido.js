var bd, cajadatos, bdCoches, bdReservas, bdClientes,cajaReservas;
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var i = 0;
function iniciar() {

    cajaReservas = document.getElementById("cajaReservas");
    if (document.getElementById("registrarse")) {

        var botonregistro = document.getElementById("registrarse");
        botonregistro.addEventListener("click", agregarobjeto);
    }
    if (document.getElementById("reservar")) {
        var botonreserva = document.getElementById("reservar");
        botonreserva.addEventListener("click", agregarreserva);
    }
    //var boton1 = document.getElementById("botonPost");
    //if (boton1)
    //    boton1.addEventListener("click", mostrarDespues);
    //var boton2 = document.getElementById("botonAnt");
    //if (boton2)
    //    boton2.addEventListener("click", mostrarAntes);
    var boton3 = document.getElementById("botonC");
    if (boton3)
        boton3.addEventListener("click", mostrarClientes);
    var boton4 = document.getElementById("botonF");
    if (boton4)
        boton4.addEventListener("click", mostrarPorFecha);
    var boton5 = document.getElementById("botonM");
    if (boton5)
        boton5.addEventListener("click", mostrarPorMatricula);

    //nombre de la base de datos
    var solicitud = indexedDB.open("RentG08");
    solicitud.onsuccess = function (e) {
        bd = e.target.result;
        var transaccion = bd.transaction(["coches"], "readwrite");
        var almacen = transaccion.objectStore("coches");
        const datos = [{matricula: "1111aaa", marca: "BMW", imagen: "../img/bmw.png"},
            {matricula: "2222bbb", marca: "Citroen", imagen: "../img/citroen.png"},
            {matricula: "3333ccc", marca: "Ford", imagen: "../img/ford.png"},
            {matricula: "4444ddd", marca: "Mercedes", imagen: "../img/mercedes.png"}];
        for (var i in datos) {
            almacen.add(datos[i]);
        }
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
        bdReservas.createIndex("BuscarMatricula", "matricula", {unique: false});
        bdReservas.createIndex("BuscarFecha", "fechaF", {unique: false});
        bdReservas.createIndex("BuscarCliente", "email", {unique: false});
        //Crear base de datos de coches
        bdCoches = bd.createObjectStore("coches", {keyPath: 'matricula'});
    };
}
;
function agregarreserva() {
    i = i + 1;
    var id = Math.random();
//    for (var e = 0; e < sessionStorage.length; e++) {
    var email = sessionStorage.getItem("email");
//    }

    var matricula;
    if (document.getElementById('coche1').checked === true) {
        matricula = document.getElementById("coche1").value;
    } else if (document.getElementById('coche2').checked === true) {
        matricula = document.getElementById("coche2").value;
    } else if (document.getElementById('coche3').checked === true) {
        matricula = document.getElementById("coche3").value;
    } else if (document.getElementById('coche4').checked === true) {
        matricula = document.getElementById("coche4").value;
    }

    var fechaI = document.getElementById("fechaI").value;
    var horaI = document.getElementById("horaI").value;
    var fechaF = document.getElementById("fechaF").value;
    var horaF = document.getElementById("horaF").value;
    var lugar = document.getElementById("lugar").value;
    var transaccion = bd.transaction("reservas", "readwrite");
    var almacen = transaccion.objectStore("reservas");
    var agregar;
    var hoy = new Date();
    var anyo = hoy.getFullYear();
    var mes = hoy.getMonth() + 1;
    var dia = hoy.getDate();
    var hora = hoy.getHours();
    var min = hoy.getMinutes();
    if (min < 10) {
        min = '0' + min;
    }

    if (hora < 10) {
        hora = '0' + hora;
    }

    if (dia < 10) {
        dia = '0' + dia;
    }

    if (mes < 10) {
        mes = '0' + mes;
    }
    var hoy = anyo + "-" + mes + "-" + dia;
    var hora = hora + ":" + min;
    if (document.reserva.fechaI.value === '' || document.reserva.horaI.value === ''
            || document.reserva.fechaF.value === '' || document.reserva.horaF.value === '' ||
            (document.getElementById('coche1').checked === false && document.getElementById('coche2').checked === false &&
                    document.getElementById('coche3').checked === false && document.getElementById('coche4').checked === false)) {
        alert('Rellene todos los campos');
    }
    else if(fechaI.value <= hoy){
          alert('La fecha de inicio debe ser posterior a la de hoy');
    }
    else if(fechaI.value === hoy && horaI.value < hora){
          alert('La hora de inicio debe ser mayor a la actual');
    }
      else if( fechaF.value <= fechaI.value){
          alert('La fecha de fin debe ser mayor que la fecha de inicio');
      }
      else if(fechaF.value === fechaI.value && horaF.value < horaF.value){
          alert('La hora de entrega debe ser posterior a la hora de inicio');
      }
    else {
        agregar = almacen.add({id: id, email: email, matricula: matricula, fechaI: fechaI, horaI: horaI, fechaF: fechaF, horaF: horaF, lugar: lugar});
        //agregar.addEventListener("success", mostrar, false);

        agregar.onsuccess = function (e) {
            alert('Reserva realizada correctamente');
//                   location.href="altaPacientes.html";
        };
        agregar.onerror = function (e) {
            alert('No se ha podido realizar la reserva');
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
     var valido = document.datos.checkValidity();
    if(valido){ 
    if (document.datos.email.value === '' || document.datos.contrasena.value === '' || document.datos.nombre.value === '' || document.datos.apellido.value === '') {
        alert('Rellene los campos');
    } else if (document.datos.nombre.value.length <= 2) {
        alert('El nombre debe contener más de dos caracteres');
    } else {
        agregar = almacen.add({email: email, contrasena: contrasena, nombre: nombre, apellido: apellido, movil: movil, imagen: imagen});
        //agregar.addEventListener("success", mostrar, false);

        agregar.onsuccess = function (e) {
            alert('Registro completado correctamente');

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
else{
    alert('Introduzca datos correctos');
}
}
function mostrarClientes() {
     cajaReservas.innerHTML = "";
    var buscar = document.getElementById("consCliente").value; 
    var transaccion = bd.transaction(["reservas"],"readonly");
    var almacen = transaccion.objectStore("reservas");
    var indice = almacen.index("BuscarCliente");
    var rango = IDBKeyRange.only(buscar);

    var cursor = indice.openCursor(rango);
    cursor.addEventListener("success", mostrarDatosPorMatricula);

}

function mostrarDatosPorClientes(e) {

    var cursor = e.target.result;
    if (cursor) {
    var    fechaHoraI= new Date( cursor.value.fechaI + ' '+ cursor.value.horaI);
      var   fechaHoraF= new Date( cursor.value.fechaF +' ' +cursor.value.horaF);
   cajaReservas.innerHTML += "<div>" + cursor.value.email + " - " + cursor.value.matricula + " - " + fechaHoraI + " - " + fechaHoraF + " - " + cursor.value.lugar + "</div><br />";
        cursor.continue();
        }
   }
function mostrarPorFecha() {
     cajaReservas.innerHTML = "";
    var buscar = document.getElementById("consFecha").value; 
    var transaccion = bd.transaction(["reservas"],"readonly");
    var almacen = transaccion.objectStore("reservas");
    var indice = almacen.index("BuscarFecha");
    var rango = IDBKeyRange.only(buscar);

    var cursor = indice.openCursor(rango);
    cursor.addEventListener("success", mostrarDatosPorMatricula);

}

function mostrarDatosPorFecha(e) {

    var cursor = e.target.result;
    if (cursor) {
    var    fechaHoraI= new Date( cursor.value.fechaI + ' '+ cursor.value.horaI);
      var   fechaHoraF= new Date( cursor.value.fechaF +' ' +cursor.value.horaF);
   cajaReservas.innerHTML += "<div>" + cursor.value.email + " - " + cursor.value.matricula + " - " + fechaHoraI + " - " + fechaHoraF + " - " + cursor.value.lugar + "</div>";
        cursor.continue();
        }
   }
function mostrarPorMatricula() {
     cajaReservas.innerHTML = "";
    var buscar = document.getElementById("consMatricula").value; 
    var transaccion = bd.transaction(["reservas"],"readonly");
    var almacen = transaccion.objectStore("reservas");
    var indice = almacen.index("BuscarMatricula");
    var rango = IDBKeyRange.only(buscar);

    var cursor = indice.openCursor(rango);
    cursor.addEventListener("success", mostrarDatosPorMatricula);

}

function mostrarDatosPorMatricula(e) {

    var cursor = e.target.result;
    if (cursor) {
    var    fechaHoraI= new Date( cursor.value.fechaI + ' '+ cursor.value.horaI);
      var   fechaHoraF= new Date( cursor.value.fechaF +' ' +cursor.value.horaF);
   cajaReservas.innerHTML += "<div>" + cursor.value.email + " - " + cursor.value.matricula + " - " + fechaHoraI + " - " + fechaHoraF + " - " + cursor.value.lugar + "</div>";
        cursor.continue();
        }
   }

window.addEventListener("load", iniciar, false);
