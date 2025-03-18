/* Ejercicio 1: Calcula el doble de un número
En este ejercicio, practicarás el uso de variables y operadores aritméticos.
Debes escribir un programa en JavaScript que:
1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.
Requisitos:
• Utiliza la función prompt() para solicitar el dato al usuario.
• Almacena el número ingresado en una variable.
• Utiliza un operador aritmético para calcular el doble del número.*/


const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Ingresa un numero:")); // Solicita al usuario que ingrese un número cualquiera.

numero = Number(numero);

let doble = numero * 2; // Calcula el doble de ese número.

console.log(`El doble de ${numero} es: ${doble}`); // Muestra el resultado en la consola.
