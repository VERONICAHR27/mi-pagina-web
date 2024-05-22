function vernombre(){
  const nombre = prompt("Cual es tu nombre")
   if(nombre!==null){
          document.write(nombre);
      }else{
          document.write("Para continuar ingrese su nombre")
      }
}

  
  function registrarUsuario(){
    const nombre = prompt ("Cual es tu nombre");
    const apellido = prompt("Cual es su apellido");
    const correo = prompt("Cual es su correo");
    alert("Hola me llamo "  + nombre + " " + apellido);
    alert("Mi correo es " + correo);
    console.log(nombre);
  }
  
  