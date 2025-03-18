/*Ejercicio 2 – Usando las variables:
Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje personalizado que incluya toda esta información.
Desglosando el ejercicio deberás:
1. Pide al usuario que ingrese su nombre.
2. Pide al usuario que ingrese su edad.
3. Pide al usuario que ingrese su peso.
4. Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.
Pista: En el ejercicio anterior, declaramos valores en las variables.
Ahora nos toca pedir datos al usuario, por lo que usaremos promptsync para solicitar esta información.*/

const prompt = require('prompt-sync')(); // Importar prompt-sync

const nombre = prompt('Ingresa tu nombre: ');
const edad = prompt('Ingresa tu edad: ');
const peso = prompt('Ingresa tu peso: ');

console.log(`Hola, ${nombre}. Tenes ${edad} años y pesas ${peso} kg.`);
