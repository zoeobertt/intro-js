/* Ejercicio 7: Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras.
Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462*/


const prompt = require('prompt-sync')();

function ejercicio7() {
  let pesoKg = parseFloat(prompt("Ingresa tu peso en kilogramos: "));
 
  // Convierte el peso de kilogramos a libras
  let pesoLibras = pesoKg * 2.20462;  // 1 kg = 2.20462 libras
 
  console.log(`Tu peso en libras es: ${pesoLibras.toFixed(2)} lbs`);
}

ejercicio7();
