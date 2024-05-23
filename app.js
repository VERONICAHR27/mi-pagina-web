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
  
  
  function adivinarNumero() {
    let numeroCorrecto = 121;
    let respuestaDelUsuario = null;
    let contadorDeIntentos = 0;
  
    while (respuestaDelUsuario !== numeroCorrecto) {
      respuestaDelUsuario = Number(prompt("Adivina el número"));
  
      contadorDeIntentos += 1;
  
      if (contadorDeIntentos === 5) {
        document.write("Llegaste el limite de intentos");
        break;
      }
  
      if (respuestaDelUsuario === numeroCorrecto) {
        document.write("Adivinaste el numero \n");
      } else {
        document.write("<p>Sigue intentando " + contadorDeIntentos + "</p>");
      }
    }
  }

  function imprimirImagen(){
    const cantidadVeces = Number(prompt("Cuantas imagenes quieres ver"));
    for (let i = 0; i<cantidadVeces; i++){
        document.write("<img src='./PORTADA 2.jpg' />");
    }
  }