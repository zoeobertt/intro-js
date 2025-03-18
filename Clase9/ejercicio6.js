/* Ejercicio 6: Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad.
Muestra un mensaje personalizado según el caso*/


const prompt = require('prompt-sync')();

function ejercicio6() {
    let edad = parseInt(prompt("Ingresa tu edad: ")); // Pide al usuario que ingrese su edad
 
  // Verifica si la edad es mayor o menor de edad.
  if (edad >= 18) {  // Si la edad es mayor o igual a 18, es mayor de edad
    console.log("¡Eres mayor de edad!");
  } else {  // Si la edad es menor a 18, es menor de edad
    console.log("¡Eres menor de edad!");
  }
}

ejercicio6();
