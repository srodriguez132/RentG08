// JavaScript Document
var bd, zonadatos;
function iniciar(){
	zonadatos=document.getElementById("zonadatos");
	
	boton=document.getElementById("reserva");
//	
	boton.addEventListener("click", agregarobjeto);
          boton1 = document.getElementById("botonPost");
          if(boton1)
    boton1.addEventListener("click", mostrarDespues);
     boton2 = document.getElementById("botonAnt");
     if(boton2)
    boton2.addEventListener("click", mostrarAntes);
       boton3 = document.getElementById("botonC");
       if(boton3)
    boton3.addEventListener("click", mostrarPorClientes);
       boton4 = document.getElementById("botonF");
       if(boton4)
    boton4.addEventListener("click", mostrarPorFecha);
       boton5 = document.getElementById("botonM");
       if(boton5)
    boton5.addEventListener("click", mostrarPorMatricula);
    
    
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
        
	var email=sessionStorage.getItem().email;
        
        var matricula=document.getElementById("matricula").value;
	
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


function mostrarDespues(){

	zonadatos.innerHTML="";
	
	var transaccion=bd.transaction(["reservas"],"readonly");
	
	var almacen=transaccion.objectStore("reservas");
	
	var cursor=almacen.openCursor();
	
	cursor.addEventListener("success", mostrarDatosDespues, false);	
	
}

function mostrarDatosDespues(e){
	
	var cursor=e.target.result;
	if(cursor){
	if (cursor.value.fechaI>document.getElementById("fecha") && cursor.value.email===sessionStorage.getItem().email){
        zonadatos.innerHTML+="<div>"+ cursor.value.id + " - "+ cursor.value.email + " - " + cursor.value.matricula + " - " + cursor.value.fechaHoraI +" - " + cursor.value.fechaHoraF + " - " +cursor.value.lugar + "</div>";	
                }
		cursor.continue();		
	}

}
function mostrarAntes(){

	zonadatos.innerHTML="";
	
	var transaccion=bd.transaction(["reservas"],"readonly");
	
	var almacen=transaccion.objectStore("reservas");
	
	var cursor=almacen.openCursor();
	
	cursor.addEventListener("success", mostrarDatosAntes, false);	
	
}

function mostrarDatosAntes(e){
	
	var cursor=e.target.result;
	
	if(cursor){
		if (cursor.value.fechaI<document.getElementById("fecha")&& cursor.value.email===sessionStorage.getItem().email){
zonadatos.innerHTML+="<div>" +  cursor.value.email + " - " + cursor.value.contraseña + " - " + cursor.value.fechaHoraI +" - " + cursor.value.fechaHoraF + " - " +cursor.value.lugar + "</div>";	
                }
		cursor.continue();		
	}

}
function mostrarPorClientes(){

	zonadatos.innerHTML="";
	
	var transaccion=bd.transaction(["reservas"],"readonly");
	
	var almacen=transaccion.objectStore("reservas");
	
	var cursor=almacen.openCursor();
	
	cursor.addEventListener("success", mostrarDatosPorClientes, false);	
	
}

function mostrarDatosPorClientes(e){
	
	var cursor=e.target.result;
	if(cursor){
	if (cursor.value.email===document.getElementById("cliente")){
zonadatos.innerHTML+="<div>"+ cursor.value.id + " - "+ cursor.value.email + " - " + cursor.value.contraseña + " - " + cursor.value.fechaHoraI +" - " + cursor.value.fechaHoraF + " - " +cursor.value.lugar + "</div>";	
                }
		cursor.continue();		
	}

}
function mostrarPorFecha(){

	zonadatos.innerHTML="";
	
	var transaccion=bd.transaction(["reservas"],"readonly");
	
	var almacen=transaccion.objectStore("reservas");
	
	var cursor=almacen.openCursor();
	
	cursor.addEventListener("success", mostrarDatosDespues, false);	
	
}

function mostrarDatosPorFecha(e){
	
	var cursor=e.target.result;
	if(cursor){
	if (cursor.value.fechaI=document.getElementById("fecha")){
zonadatos.innerHTML+="<div>"+ cursor.value.id + " - "+ cursor.value.email + " - " + cursor.value.contraseña + " - " + cursor.value.fechaHoraI +" - " + cursor.value.fechaHoraF + " - " +cursor.value.lugar + "</div>";	
                }
		cursor.continue();		
	}

}
function mostrarPorMatricula(){

	zonadatos.innerHTML="";
	
	var transaccion=bd.transaction(["reservas"],"readonly");
	
	var almacen=transaccion.objectStore("reservas");
	
	var cursor=almacen.openCursor();
	
	cursor.addEventListener("success", mostrarDatosDespues, false);	
	
}

function mostrarDatosPorMatricula(e){
	
	var cursor=e.target.result;
	if(cursor){
	if (cursor.value.matricula===document.getElementById("matricula")){
zonadatos.innerHTML+="<div>" +cursor.value.id + " - "+ cursor.value.email + " - " + cursor.value.contraseña + " - " + cursor.value.fechaHoraI +" - " + cursor.value.fechaHoraF + " - " +cursor.value.lugar + "</div>";	
                }
		cursor.continue();		
	}

}
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
