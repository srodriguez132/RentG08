// JavaScript Document
var bd;
function iniciar(){
	zonadatos=document.getElementById("zonadatos");
	
	boton=document.getElementById("reserva");
//	
	boton.addEventListener("click", agregarobjeto);
 
        var solicitud=indexedDB.open("RentG08", 2);
	
	solicitud.onsuccess=function(e){
		bd=e.target.result;				
	};
        
        solicitud.onerror=function(e){
		alert(solicitud.error.message);		
	};
	
	solicitud.onupgradeneeded=function(e){
		bd=e.target.result;
		bd.createObjectStore("reservas", {keyPath: "id"});
	};	
}
      
function agregarobjeto(){
    
        var id=Math.random();
        
	var email=document.getElementById("email").value;
        
        var matricula=document.getElementById("contrasena").value;
	
	var fechaI=document.getElementById("fechaI").value;
        
        var horaI=document.getElementById("horaI").value;
	
        var fechaHoraI = new Date(fechaI+' '+horaI);
        
	var fechaF=document.getElementById("fechaF").value;
       
        var horaF=document.getElementById("horaF").value;
        
        var fechaHoraF = new Date(fechaF+' '+horaF);
        
        var lugar=document.getElementById("lugar").value;
        
	var transaccion=bd.transaction(["reservas"], "readwrite");
	
	var almacen=transaccion.objectStore("reservas");
        
        var agregar;
        
             
	       agregar=almacen.add({id: id, email:email, matricula: matricula, fechahoraI:fechahoraI, fechahoraF: fechahoraF, lugar: lugar});
               //agregar.addEventListener("success", mostrar, false);
               
               agregar.onsuccess = function(e){
                   alert('Reserva completada correctamente');
//                   location.href="altaPacientes.html";
               };
               
               agregar.onerror = function(e) {
               alert('La reserva no se ha podido realizar');
//               location.href="altaPacientes.html";
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
