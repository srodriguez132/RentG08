// JavaScript Document
var zonadatos,bd;
function iniciar(){
	zonadatos=document.getElementById("zonadatos");
	
	var botonregistro=document.getElementById("registrarse");
	
	botonregistro.addEventListener("click", agregarobjeto);
 
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
        
	var transaccion=bd.transaction("clientes", "readwrite");
	
	var almacen=transaccion.objectStore("clientes");
        
        var agregar;
        
        
             if(document.registro.email.value===''|| document.registro.contrasena.value==='' || document.registro.nombre.value==='' || document.registro.apellido.value===''){
                 alert('Rellene los campos');
             }
             else if(document.registro.nombre.value.length<=2){
                 alert('El nombre debe contener más de dos caracteres');
                 
             }
             else{
	       agregar=almacen.add({email: email, contrasena:contrasena, nombre: nombre, apellido:apellido, movil: movil, imagen: imagen});
               //agregar.addEventListener("success", mostrar, false);
               
               agregar.onsuccess = function(e){
                   alert('Registro completado correctamente');
//                   location.href="altaPacientes.html";
               };
               
               agregar.onerror = function(e) {
               alert('Este email ya está en uso');

               };
            
            document.getElementById("email").value = "";
            document.getElementById("contrasena").value = "";         
            document.getElementById("nombre").value = "";      
            document.getElementById("apellido").value = "";
            document.getElementById("movil").value = "";
         }
               

}



window.addEventListener("load", iniciar, false);


