/* Ejercicio 1: Declara dos variables numéricas numero1 y numero2.
Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.*/


const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese dos números
const numero1 = parseInt(prompt("Ingresa el primer número: "));
const numero2 = parseInt(prompt("Ingresa el segundo número: "));

// Compara los números
if (numero1 > numero2) {
    console.log("El primer número es mayor.");
} else if (numero1 < numero2) {
    console.log("El segundo número es mayor.");
} else {
    console.log("Los dos números son iguales.");
}
