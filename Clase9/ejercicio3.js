/* Ejercicio 3: Declara dos variables booleanas condicion1 y condicion2.
Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el resultado de diversas combinaciones lógicas.*/


const prompt = require('prompt-sync')();

function ejercicio3() {
  let condicion1 = prompt("Ingresa el primer valor booleano (true o false): ") === 'true';
  let condicion2 = prompt("Ingresa el segundo valor booleano (true o false): ") === 'true';
 
  // Muestra los resultados de las combinaciones lógicas
  console.log("condicion1 AND condicion2: " + (condicion1 && condicion2));  // AND
  console.log("condicion1 OR condicion2: " + (condicion1 || condicion2));   // OR
  console.log("NOT condicion1: " + !condicion1);  // NOT para condicion1
  console.log("NOT condicion2: " + !condicion2);  // NOT para condicion2
}

ejercicio3();


