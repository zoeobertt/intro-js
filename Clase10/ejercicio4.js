/*Ejercicio 4 – Tipo de Datos:
Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiera su nombre. 
Además, realizar operaciones y validaciones adicionales sobre estos valores.
Pasos a seguir:
Declaración de Variables:
1. Declara una variable llamada verdadero y asígnale un dato
de tipo booleano (true o false).
2. Declara una variable llamada texto y asígnale un string de tu
elección (puedes usar cualquier mensaje que prefieras).
3. Declara una variable llamada numero y asígnale un dato
numérico (puedes usar cualquier número entero o decimal).
4. Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.
Operaciones y Validaciones:
1. Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.
2. Concatena el “string” de la variable texto con otro mensaje adicional.
3. Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
4. Implementa una condición para verificar si la variable nada
es null y muestra un mensaje si es así.*/

const prompt = require('prompt-sync')();

const verdadero = true; 
let texto = prompt("Me gusta el invierno:"); 
let numero = parseInt(prompt("23:")); 
let nada = null; 

// Operaciones y Validaciones: 

// 1.
let suma = numero + 3; 
console.log("Resultado de la suma:", suma); 

// 2.
let mensajeCompleto = texto + "Y a vos? "; 
console.log("Mensaje Completo:", mensajeCompleto); 

// 3.
if (verdadero) {
    console.log("La variable 'verdadero' es true");
} else {
    console.log("La variable 'verdadero' es false");
}

// 4.
if (nada === null) {
    console.log("La variable 'nada' es null");
}

