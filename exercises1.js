// Ejercicios de estructuras de control, bucles, funciones y forEach y map

// ==============================
// EJERCICIOS JAVASCRIPT OCTUBRE
// ==============================

// ------------------------------
// CONDICIONALES
// ------------------------------

console.log("Ejercicio 1: if simple");
// Escribe una función llamada 'esAdultoMayor' que reciba una edad y devuelva true si es mayor de 65, false en caso contrario.
function esAdultoMayor(edad) {
    return edad > 65;
}
// Datos de prueba:
console.log(esAdultoMayor(70)); // Debería mostrar: true
console.log(esAdultoMayor(50)); // Debería mostrar: false

console.log("\nEjercicio 2: if-else");
// Escribe una función llamada 'verificarTemperatura' que reciba una temperatura (°C) y devuelva 'Hace calor' si es ≥30, 'Hace frío' si es <30.
function verificarTemperatura(temp) {
    if (temp >= 30) return 'Hace calor';
    else return 'Hace frío';
}
// Datos de prueba:
console.log(verificarTemperatura(32)); // Debería mostrar: 'Hace calor'
console.log(verificarTemperatura(20)); // Debería mostrar: 'Hace frío'

console.log("\nEjercicio 3: if-else if");
// Escribe una función llamada 'clasificarEdad' que reciba una edad y devuelva:
// 'Niño' si ≤12, 'Adolescente' si 13-17, 'Adulto' si 18-64, 'Adulto mayor' si ≥65
function clasificarEdad(edad) {
    if (edad <= 12) return 'Niño';
    else if (edad <= 17) return 'Adolescente';
    else if (edad <= 64) return 'Adulto';
    else return 'Adulto mayor';
}
// Datos de prueba:
console.log(clasificarEdad(10)); // Debería mostrar: 'Niño'
console.log(clasificarEdad(15)); // Debería mostrar: 'Adolescente'
console.log(clasificarEdad(30)); // Debería mostrar: 'Adulto'
console.log(clasificarEdad(70)); // Debería mostrar: 'Adulto mayor'

console.log("\nEjercicio 4: switch");
// Escribe una función llamada 'obtenerColor' que reciba un número del 1 al 3 y devuelva: 1 → 'Rojo', 2 → 'Verde', 3 → 'Azul', otro → 'Color desconocido'
function obtenerColor(num) {
switch(num) {
    case 1: return 'Rojo';
    case 2: return 'Verde';
    case 3: return 'Azul';
    default: return 'Color desconocido';
    }
}
// Datos de prueba:
console.log(obtenerColor(1)); // Debería mostrar: 'Rojo'
console.log(obtenerColor(3)); // Debería mostrar: 'Azul'
console.log(obtenerColor(5)); // Debería mostrar: 'Color desconocido'

console.log("\nEjercicio 5: Condicional ternario");
// Escribe una función llamada 'esPositivo' que reciba un número y devuelva 'Positivo' si ≥0, 'Negativo' si <0
function esPositivo(num) {
    return num >= 0 ? 'Positivo' : 'Negativo';
}
// Datos de prueba:
console.log(esPositivo(5));  // Debería mostrar: 'Positivo'
console.log(esPositivo(-3)); // Debería mostrar: 'Negativo'

console.log("\nEjercicio 6: Combinación de condicionales");
// Escribe una función llamada 'puedeVotar' que reciba edad y nacionalidad ('sí' o 'no') y devuelva true si edad ≥18 y nacionalidad 'sí', false en caso contrario
function puedeVotar(edad, nacionalidad) {
    return edad >= 18 && nacionalidad === 'sí';
}
// Datos de prueba:
console.log(puedeVotar(20, 'sí'));  // Debería mostrar: true
console.log(puedeVotar(16, 'sí'));  // Debería mostrar: false
console.log(puedeVotar(25, 'no'));  // Debería mostrar: false

// ------------------------------
// BUCLES
// ------------------------------

console.log("\nEjercicio 7: Bucle for");
// Escribe una función llamada 'imprimirPares' que imprima los números pares del 2 al 20.
function imprimirPares() {
    for (let i = 2; i <= 20; i += 2) console.log(i);
}
// Datos de prueba:
imprimirPares();

console.log("\nEjercicio 8: Bucle for (suma)");
// Escribe una función llamada 'sumarPares' que sume todos los números pares hasta n
function sumarPares(n) {
    let suma = 0;
    for (let i = 2; i <= n; i += 2) suma += i;
    return suma;
}
// Datos de prueba:
console.log(sumarPares(10)); // Debería mostrar: 30

console.log("\nEjercicio 9: Bucle while");
// Escribe una función llamada 'contarImpares' que cuente de 1 hasta n solo los números impares
function contarImpares(n) {
let i = 1;
    while (i <= n) {
    if (i % 2 !== 0) console.log(i);
    i++;
    }
}
// Datos de prueba:
contarImpares(10);

console.log("\nEjercicio 10: Bucle do-while");
// Escribe una función llamada 'pedirContraseña' que simule pedir contraseña hasta que sea 'admin' usando un array de intentos
function pedirContraseña(intentos) {
    let i = 0;
    let contrasenia;
do {
    contrasenia = intentos[i];
    console.log(`Intento ${i+1}: ${contrasenia}`);
    i++;
} while(contrasenia !== 'admin' && i < intentos.length);
    if (contrasenia === 'admin') console.log('¡Contraseña correcta!');
    else console.log('Contraseña incorrecta, acceso denegado.');
}
// Datos de prueba:
const intentos = ['1234', 'qwerty', 'admin'];
pedirContraseña(intentos);

console.log("\nEjercicio 11: Bucle for (array)");
// Escribe una función llamada 'multiplicarArray' que reciba un array de números y devuelva el producto de todos ellos
function multiplicarArray(arr) {
let producto = 1;
    for (let i = 0; i < arr.length; i++) producto *= arr[i];
        return producto;
}
// Datos de prueba:
console.log(multiplicarArray([1,2,3,4])); // Debería mostrar: 24

console.log("\nEjercicio 12: Bucle while (factorial)");
// Escribe una función llamada 'factorial' que reciba un número n y devuelva su factorial usando while
function factorial(n) {
    let res = 1, i = 1;
    while(i <= n) { res *= i; i++; }
    return res;
}
// Datos de prueba:
console.log(factorial(5)); // Debería mostrar: 120

// ------------------------------
// forEach y map
// ------------------------------

// Ejercicio 13 (ya lo tenías)
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
  console.log(numero ** 2);
});

// Ejemplo Ejercicio 14: forEach con índice
const nombres = ['Ana', 'Juan', 'María'];
nombres.forEach((nombre,i) => console.log(`Nombre en índice ${i}: ${nombre}`));

// Ejemplo Ejercicio 15: forEach con objetos
const empleados = [
    { nombre: 'Luis', salario: 1200 },
    { nombre: 'Eva', salario: 1500 },
];
empleados.forEach(e => console.log(`${e.nombre} gana ${e.salario} euros`));

// Ejercicio 16: map básico
const cubos = numeros.map(n => n ** 3);
console.log(cubos);

// Ejercicio 17: map con strings
const palabras = ['hola','mundo','js'];
const mayus = palabras.map(p => p.toUpperCase());
console.log(mayus);

// Ejercicio 18: map con objetos
const edades = empleados.map(e => e.salario);
console.log(edades);

// Ejercicio 19: combinación map + forEach
console.log('Las edades son:', edades);
let sumaEdades = 0;
edades.forEach(e => sumaEdades += e);
console.log('La suma de todas las edades es:', sumaEdades);

// Ejercicio 20: Tipos de funciones
function restar(a,b) { return a-b; }
const modulo = function(a,b){ return a%b; };
console.log(restar(10,3));
console.log(modulo(10,3));

// Ejercicio 21: Métodos
const banco = {
  saldo: 1000,
  depositar: function(cantidad){ this.saldo += cantidad; return this.saldo; },
  retirar: function(cantidad){ this.saldo -= cantidad; return this.saldo; },
  consultarSaldo: function(){ return this.saldo; }
};
console.log(banco.depositar(500));
console.log(banco.retirar(200));
console.log(banco.consultarSaldo());

// Ejercicio 22: Parámetros por defecto
function multiplicarPor(n,factor=2){ return n*factor; }
console.log(multiplicarPor(5));
console.log(multiplicarPor(5,3));

// Ejercicio 23: Funciones que retornan valores
function esMultiploDe5(n){ return n%5===0; }
console.log(esMultiploDe5(10));
console.log(esMultiploDe5(7));

// Ejercicio 24: Arrow functions
const sumarDos = n => n+2;
console.log(sumarDos(5));

// Ejercicio 25: Funciones como argumentos
function multiplicar(a,b){ return a*b; }
function aplicarOperacionAvanzada(a,b,func){ return func(a,b); }
console.log(aplicarOperacionAvanzada(3,4,multiplicar));

// Ejercicio 26: Closure simple
function generadorDeID(){
  let id=0;
  return function(){ id++; return id; };
}
const nuevoID = generadorDeID();
console.log(nuevoID());
console.log(nuevoID());
console.log(nuevoID());

// Ejercicio 27: Closure con configuración
function contadorInicial(n){
  return function(){ n++; return n; };
}
const contarDesde5 = contadorInicial(5);
console.log(contarDesde5());
console.log(contarDesde5());

// Ejercicio 28: Condicional + bucle
function imprimirMultiplos(n,limite){
    for(let i=n;i<=limite;i+=n) console.log(i);
}
imprimirMultiplos(3,15);

// Ejercicio 29: Array + condicional
function filtrarPares(arr){
    return arr.filter(n => n%2===0);
}
console.log(filtrarPares([1,2,3,4,5,6]));

// Ejercicio 30: Objeto + map + función
const grupo = [
    {nombre:'Ana', edad:25},
    {nombre:'Luis', edad:30},
    {nombre:'Eva', edad:30}
];
function promediarEdades(arr){
    let suma = arr.reduce((acc,p)=>acc+p.edad,0);
    return suma/arr.length;
}
console.log(promediarEdades(grupo));
