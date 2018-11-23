// JavaScript Document
var cajadatos,bd;
function iniciar(){
	zonadatos=document.getElementById("zonadatos");
	
	var boton=document.getElementById("registrarse");
	
	boton.addEventListener("click", agregarobjeto);
 
        var solicitud=indexedDB.open("RentG08");
	
	solicitud.onsuccess=function(e){
		bd=e.target.result;				
	};
        
        solicitud.onerror=function(e){
		alert(solicitud.error.message);		
	};
	
	solicitud.onupgradeneeded=function(e){
		bd=e.target.result;
		bd.createObjectStore("clientes", {keyPath: "email"});
	};	
}
      
function agregarobjeto(){
        
	var email=document.getElementById("email").value;
        
        var contrasena=document.getElementById("contrasena").value;
	
	var nombre=document.getElementById("nombre").value;
        
        var apellido=document.getElementById("apellido").value;	
	
	var movil=document.getElementById("movil").value;
       
        var imagen=document.getElementById("caja").value;
        
	var transaccion=bd.transaction(["clientes"], "readwrite");
	
	var almacen=transaccion.objectStore("clientes");
        
        var agregar;
        
        
             
	       agregar=almacen.add({email: email, contrasena:contrasena, nombre: nombre, apellido:apellido, movil: movil, imagen: imagen});
               //agregar.addEventListener("success", mostrar, false);
               
               agregar.onsuccess = function(e){
                   alert('Registro completado correctamente');
//                   location.href="altaPacientes.html";
               };
               
               agregar.onerror = function(e) {
               alert('Este email ya está en uso');
//               location.href="altaPacientes.html";
               };
               
               
          cajadatos.innerHTML= "";     
              
                
             
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


