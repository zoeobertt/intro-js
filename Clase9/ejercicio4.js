/* Ejercicio 4: Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.*/


const prompt = require('prompt-sync')();

function ejercicio4() {
    let nombre = prompt("Ingresa tu nombre: "); // Pide al usuario que ingrese su nombre.
 
  // Verifica si el nombre ingresado es igual al tuyo.
  if (nombre === "Zoe") {
    console.log("¡Hola, Zoe! Tu nombre es igual al mío.");
  } else {
    console.log("Tu nombre no es igual al mío.");
  }
}

ejercicio4();
