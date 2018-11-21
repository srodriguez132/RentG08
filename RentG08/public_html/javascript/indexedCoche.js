// JavaScript Document
var bd;
function iniciar() {

    var database = indexedDB.open("RentG08");



    dataBase.onupgradeneeded = function (e) {

        active = dataBase.result;

        object = active.createObjectStore("coches", {keyPath: 'matricula'});

        var almacen = transaccion.objectStore("coches");

        var agregar;

        agregar = almacen.add({
            matricula: '1111aaa',
            marca: 'BMW',
            imagen: 'img/bmw.png'
        });
        
        agregar = almacen.add({
            matricula: '2222bbb',
            marca: 'Citroen',
            imagen: 'img/citroen.png'
        });
        
        agregar = almacen.add({
            matricula: '3333ccc',
            marca: 'Ford',
            imagen: 'img/ford.png'
        });
        
        agregar = almacen.add({
            matricula: '4444ddd',
            marca: 'Mercedes',
            imagen: 'img/mercedes.png'
        });
    };

    dataBase.onsuccess = function (e) {
        alert('Base de datos cargada correctamente');

    };

    dataBase.onerror = function (e) {
        alert('Error cargando la base de datos');
    };
}

/*
 function mostrar(){
 
 zonadatos.innerHTML="";
 
 var transaccion=bd.transaction(["pacientes"],"readonly");
 
 var almacen=transaccion.objectStore("pacientes");
 
 var cursor=almacen.openCursor();
 
 cursor.addEventListener("success", mostrarDatos, false);	
 
 }
 
 function mostrarDatos(e){
 
 var cursor=e.target.result;
 
 if(cursor){
 
 //zonadatos.innerHTML+="<div>" + cursor.value.TIS + " - " + cursor.value.gnombre + " - " + cursor.value.telefono +" - " + cursor.value.fecha + " - " +cursor.value.hombre +" - " + cursor.value.mujer + "</div>";
 
 cursor.continue();
 
 
 }
 
 }*/

//function comprobarFechaNac(){
//    var fecha = document.getElementById("fecha");
//    var today = new Date();
//    var anyo = today.getFullYear();
//    var mes = today.getMonth() + 1;
//    var dia = today.getDate();
//    
//    if(dia<10) {
//        dia='0'+dia;
//    } 
//    if(mes<10) {
//       mes='0'+mes;
//    } 
//    var hoy = anyo + "-" + mes + "-" + dia;
//    
//    if(fecha.value < hoy){
//        var valido = document.formDatos.checkValidity();
//        if(valido){
//         agregarobjeto();
//        }
//        else{
//         alert('Algun dato introducido no es correcto'); 
//        }
//    }
//    else{
//        alert("Error en la fecha de nacimiento. La fecha introducida es posterior a hoy.");
//    }
//    
//}

window.addEventListener("load", iniciar, false);
