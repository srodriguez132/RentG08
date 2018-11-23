var cajadatos, bdClientes, bdCoches, bdReservas;

function iniciar() {

//    iniciarCoches();
    iniciarReservas();

}



//function iniciarClientes(){
//	zonadatos=document.getElementById("zonadatos");
//	
//	var boton=document.getElementById("registrarse");
//	
//	boton.addEventListener("click", agregarobjetocliente);
// 
//        var solicitud=indexedDB.open("RentG08");
//	
//	solicitud.onsuccess=function(e){
//		bdClientes=e.target.result;				
//	};
//        
//        solicitud.onerror=function(e){
//		alert(solicitud.error.message);		
//	};
//	
//	solicitud.onupgradeneeded=function(e){
//		bdClientes=e.target.result;
//		bdClientes.createObjectStore("clientes", {keyPath: "email"});
//	};	
//}

//function agregarobjetocliente(){
//        
//	var email=document.getElementById("email").value;
//        
//        var contrasena=document.getElementById("contrasena").value;
//	
//	var nombre=document.getElementById("nombre").value;
//        
//        var apellido=document.getElementById("apellido").value;	
//	
//	var movil=document.getElementById("movil").value;
//       
//        var imagen=document.getElementById("caja").value;
//        
//	var transaccion=bdClientes.transaction("clientes", "readwrite");
//	
//	var almacen=transaccion.objectStore("clientes");
//        
//        var agregar;
//        
//        
//             if(document.registro.email.value===''|| document.registro.contrasena.value==='' || document.registro.nombre.value==='' || document.registro.apellido.value===''){
//                 alert('Rellene los campos');
//             }
//             else if(document.registro.nombre.length<=2){
//                 alert('El nombre debe contener más de dos caracteres');
//                 
//             }
//             else{
//	       agregar=almacen.add({email: email, contrasena:contrasena, nombre: nombre, apellido:apellido, movil: movil, imagen: imagen});
//               //agregar.addEventListener("success", mostrar, false);
//               
//               agregar.onsuccess = function(e){
//                   alert('Registro completado correctamente');
////                   location.href="altaPacientes.html";
//               };
//               
//               agregar.onerror = function(e) {
//               alert('Este email ya está en uso');
//
//               };
//            
//            document.getElementById("email").value = "";
//            document.getElementById("contrasena").value = "";         
//            document.getElementById("nombre").value = "";      
//            document.getElementById("apellido").value = "";
//            document.getElementById("movil").value = "";
//         }
//               
//
//}

//function iniciarCoches() {
//
//    var solicitud = indexedDB.open("RentG08");
//
//    solicitud.onsuccess = function (e) {
//
//        bdCoches = e.target.result;
//
//    };
//
//    solicitud.onerror = function (e) {
//        alert(solicitud.error.message);
//    };
//
//    solicitud.onupgradeneeded = function (e) {
//        bdCoches = e.target.result;
//        bdCoches.createObjectStore("coches", {keyPath: "matricula"});
//        var transaccion = bdCoches.transaction("coches", "readwrite");
//
//        var almacen = transaccion.objectStore("coches");
//        var agregar;
//        const datos = [{matricula: "1111aaa", marca: "BMW", imagen: "../img/bmw.png"},
//            {matricula: "2222bbb", marca: "Citroen", imagen: "../img/citroen.png"},
//            {matricula: "3333ccc", marca: "Ford", imagen: "../img/ford.png"},
//            {matricula: "4444ddd", marca: "Mercedes", imagen: "../img/mercedes.png"}];
//        for (var i in datos) {
//            almacen.add(datos[i]);
//        }
//    };
//
//}


;
function iniciarReservas() {
    zonadatos = document.getElementById("zonadatos");

    boton = document.getElementById("reservar");
//	
    boton.addEventListener("click", agregarobjetoreserva);

    boton1 = document.getElementById("botonPost");
    if (boton1)
        boton1.addEventListener("click", mostrarDespues);
    boton2 = document.getElementById("botonAnt");
    if (boton2)
        boton2.addEventListener("click", mostrarAntes);
    boton3 = document.getElementById("botonC");
    if (boton3)
        boton3.addEventListener("click", mostrarPorClientes);
    boton4 = document.getElementById("botonF");
    if (boton4)
        boton4.addEventListener("click", mostrarPorFecha);
    boton5 = document.getElementById("botonM");
    if (boton5)
        boton5.addEventListener("click", mostrarPorMatricula);


//    var solicitud = indexedDB.open("RentG08", 2);
    var solicitud = indexedDB.open("RentG08");

    solicitud.onsuccess = function (e) {
        bdReservas = e.target.result;
    };

    solicitud.onerror = function (e) {
        alert(solicitud.error.message);
    };

    solicitud.onupgradeneeded = function (e) {
        bdReservas = e.target.result;
        bdReservas.createObjectStore("reservas", {keyPath: "id"});
         bdCoches.createObjectStore("coches", {keyPath: "matricula"});
        var transaccion = bdCoches.transaction("coches", "readwrite");

        var almacen = transaccion.objectStore("coches");
        var agregar;
        const datos = [{matricula: "1111aaa", marca: "BMW", imagen: "../img/bmw.png"},
            {matricula: "2222bbb", marca: "Citroen", imagen: "../img/citroen.png"},
            {matricula: "3333ccc", marca: "Ford", imagen: "../img/ford.png"},
            {matricula: "4444ddd", marca: "Mercedes", imagen: "../img/mercedes.png"}];
        for (var i in datos) {
            almacen.add(datos[i]);
        }
    };
}

function agregarobjetoreserva() {

    var id = Math.random();

    for (var e = 0; e < sessionStorage.length; e++) {
        var email = sessionStorage.key(e);
    }
    var matricula = document.getElementById("coche").value;

    var fechaI = document.getElementById("fechaI").value;

    var horaI = document.getElementById("horaI").value;

    var fechaHoraI = new Date(fechaI + ' ' + horaI);

    var fechaF = document.getElementById("fechaF").value;

    var horaF = document.getElementById("horaF").value;

    var fechaHoraF = new Date(fechaF + ' ' + horaF);

    var lugar = document.getElementById("lugar").value;

    var transaccion = bdReservas.transaction("reservas", "readwrite");

    var almacen = transaccion.objectStore("reservas");

    var agregar;
    
        var today = new Date();

    var anyo = today.getFullYear();
    var mes = today.getMonth() + 1;
    var dia = today.getDate();
    var hora = today.getHours();
    var min = today.getMinutes();

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
    var horaActual = hora + ":" + min;

    if (document.reserva.fechaI.value === '' || document.reserva.horaI.value === '' ||
            document.reserva.fechaF.value === '' || document.reserva.horaF.value === '' ||
            document.reserva.coche.value === '') {
        alert('Completa todos los campos');
    }
    else if(fechaI.value < hoy){
             alert("La fecha de inicio introducida debe ser mayor que la actual");
    }
    else if (fechaI.value === hoy) {
        if (horaI.value <= horaActual) {
            alert("La hora de inicio introducida debe ser mayor que la actual");
        }
    }
    else if(fechaF.value < fechaI.value) {
        alert("La fecha de fin debe ser mayor que la de inicio");
    } 
    else if (fechaF.value === fechaI.value) {
        if (horaF.value < horaI.value) {
            alert("La hora de fin debe ser mayor que la de inicio");
        }
    }
    else {
            agregar = almacen.add({id: id, email: email, matricula: matricula, fechaHoraI: fechaHoraI, fechaHoraF: fechaHoraF, lugar: lugar});
            //agregar.addEventListener("success", mostrar, false);

            agregar.onsuccess = function (e) {
                alert('Reserva completada correctamente');
//                   
            };

            agregar.onerror = function (e) {
                alert('La reserva no se ha podido realizar');
//               location.href="altaPacientes.html";
            };
        





    }



}


function mostrarDespues() {

    zonadatos.innerHTML = "";

    var transaccion = bdReservas.transaction(["reservas"], "readonly");

    var almacen = transaccion.objectStore("reservas");

    var cursor = almacen.openCursor();

    cursor.addEventListener("success", mostrarDatosDespues, false);

}

function mostrarDatosDespues(e) {

    var cursor = e.target.result;
    if (cursor) {
        if (cursor.value.fechaI > document.getElementById("fecha") && cursor.value.email === sessionStorage.getItem().email) {
            zonadatos.innerHTML += "<div>" + cursor.value.id + " - " + cursor.value.email + " - " + cursor.value.matricula + " - " + cursor.value.fechaHoraI + " - " + cursor.value.fechaHoraF + " - " + cursor.value.lugar + "</div>";
        }
        cursor.continue();
    }

}
function mostrarAntes() {

    zonadatos.innerHTML = "";

    var transaccion = bdReservas.transaction(["reservas"], "readonly");

    var almacen = transaccion.objectStore("reservas");

    var cursor = almacen.openCursor();

    cursor.addEventListener("success", mostrarDatosAntes, false);

}

function mostrarDatosAntes(e) {

    var cursor = e.target.result;

    if (cursor) {
        if (cursor.value.fechaI < document.getElementById("fecha") && cursor.value.email === sessionStorage.getItem().email) {
            zonadatos.innerHTML += "<div>" + cursor.value.email + " - " + cursor.value.contraseña + " - " + cursor.value.fechaHoraI + " - " + cursor.value.fechaHoraF + " - " + cursor.value.lugar + "</div>";
        }
        cursor.continue();
    }

}
function mostrarPorClientes() {

    zonadatos.innerHTML = "";

    var transaccion = bdReservas.transaction(["reservas"], "readonly");

    var almacen = transaccion.objectStore("reservas");

    var cursor = almacen.openCursor();

    cursor.addEventListener("success", mostrarDatosPorClientes, false);

}

function mostrarDatosPorClientes(e) {

    var cursor = e.target.result;
    if (cursor) {
        if (cursor.value.email === document.getElementById("cliente")) {
            zonadatos.innerHTML += "<div>" + cursor.value.id + " - " + cursor.value.email + " - " + cursor.value.contraseña + " - " + cursor.value.fechaHoraI + " - " + cursor.value.fechaHoraF + " - " + cursor.value.lugar + "</div>";
        }
        cursor.continue();
    }

}
function mostrarPorFecha() {

    zonadatos.innerHTML = "";

    var transaccion = bdReservas.transaction(["reservas"], "readonly");

    var almacen = transaccion.objectStore("reservas");

    var cursor = almacen.openCursor();

    cursor.addEventListener("success", mostrarDatosDespues, false);

}

function mostrarDatosPorFecha(e) {

    var cursor = e.target.result;
    if (cursor) {
        if (cursor.value.fechaI = document.getElementById("fecha")) {
            zonadatos.innerHTML += "<div>" + cursor.value.id + " - " + cursor.value.email + " - " + cursor.value.contraseña + " - " + cursor.value.fechaHoraI + " - " + cursor.value.fechaHoraF + " - " + cursor.value.lugar + "</div>";
        }
        cursor.continue();
    }

}
function mostrarPorMatricula() {

    zonadatos.innerHTML = "";

    var transaccion = bdReservas.transaction(["reservas"], "readonly");

    var almacen = transaccion.objectStore("reservas");

    var cursor = almacen.openCursor();

    cursor.addEventListener("success", mostrarDatosDespues, false);

}

function mostrarDatosPorMatricula(e) {

    var cursor = e.target.result;
    if (cursor) {
        if (cursor.value.matricula === document.getElementById("matricula")) {
            zonadatos.innerHTML += "<div>" + cursor.value.id + " - " + cursor.value.email + " - " + cursor.value.contraseña + " - " + cursor.value.fechaHoraI + " - " + cursor.value.fechaHoraF + " - " + cursor.value.lugar + "</div>";
        }
        cursor.continue();
    }

}

function comprobarFechaInicio() {

    var fechaI = document.getElementById("fechaI");
    var horaI = document.getElementById("horaI");
    var today = new Date();

    var anyo = today.getFullYear();
    var mes = today.getMonth() + 1;
    var dia = today.getDate();
    var hora = today.getHours();
    var min = today.getMinutes();

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
    var horaActual = hora + ":" + min;

    if (fechaI.value < hoy) {
        alert("La fecha de inicio introducida debe ser mayor que la actual");
        return false;
    } else if (fechaI.value === hoy) {
        if (horaI.value <= horaActual) {
            alert("La hora de inicio introducida debe ser mayor que la actual");
            return false;
        }
    } else {
        return true;
    }

}
function comprobarFechaFin() {
    var fechaI = document.getElementById("fechaI");
    var horaI = document.getElementById("horaI");
    var fechaF = document.getElementById("fechaF");
    var horaF = document.getElementById("horaF");

    if (fechaF.value < fechaI.value) {
        alert("La fecha de fin debe ser mayor que la de inicio");
        return false;
    } else if (fechaF.value === fechaI.value) {
        if (horaF.value < horaI.value) {
            alert("La hora de fin debe ser mayor que la de inicio");
            return false;
        }
    } else {
        return true;
    }

}


//registro.window.addEventListener("load", iniciarRegistro, false);


window.addEventListener("load", iniciar, false);
