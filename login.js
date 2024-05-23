const email ="veronica@gmail.com";
const password ="vero123";

function validarLogin(){
    const correo = prompt("Ingresar su correo");
    const contrasena = prompt("Ingresar contraseña");
    if (correo===email && contrasena===password){
        document.write("Ingreso exitoso");
    }else {
        document.write("Hubo un error en el email y/o password")
    }
}
function validarSiAlMenosUnUsuarioESMayor(){
    const edad1 = Number (promt("Ingresa la edad del usuario"));
    const edad2 = Number (promt("Ingresa la edad del usuario"));
    const edad3 = Number (promt("Ingresa la edad del usuario"));
    if (edad1 >= 18 || edad2 >= 18 || edad3 >= 18) {
        document.write("Al menos un usuario es mayor");
      } else {
        document.write("Todos los usuario son menores");
}
}

function mostrarNumeros(){
    let contador = 0
    while(tru){
        console.log("Bucle infinito" + contador);
        contador += 1;   
    }
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
  
  function imprimirNumeros() {
    /**
     * let i = 0 Valor incial
     * i <= 100 Condicion
     * i++ de cuanto en cuanto van los paasa
     * Nota:
     * i++ = i += 1
     */
  
    const elementos = [
      {
        title: "¿Qué requisitos necesito para iniciar?",
        text: "Puedes iniciar a estudiar sin tener ningún conocimiento previo sobre programación. Solo debes tener una laptop o tablet con teclado, y muchas ganas de entrar al futuro.",
      },
      {
        title: "¿A qué personas está dirigido?",
        text: " Tanto para personas que quieren iniciar una carrera profesional con gran demanda laboral, como para personas que ya son profesionales ó trabajan en otras industrias, y que quieren dar un salto a un mejor estilo de vida.",
      },
    ];
  
    for (let i = 0; i <= 100; i++) {
      document.write("<p class='card'>El número es: " + i + "</p>");
    }
  
    for (let i = 0; i < elementos.length; i++) {
      document.write(
        "<div class='card'><p> " +
          elementos[i].title +
          "</p><p>" +
          elementos[i].text +
          "</p></div>"
      );
    }
  }
  function imprimirImagen(){
    const cantidadVeces = Number(prompt("Cuantas imagenes quieres ver"));
    for (let i = 0; i<cantidadVeces; i++){
        document.write("<img src='./plazavea.png' />");
    }
  }