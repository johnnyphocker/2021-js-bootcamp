// VARIABLES

var greet = 'Hola mundo'; // string
var age = 23; // number
var isOpen = false; // boolean
var miNombre = 'Juan Pablo'; // camelcase
var MiNombre = 'Juan Pablo'; // pascalcase se utiliza por lo general cuando se crean 'classes'

// NAN => Not A Number
// undefined
// null

// OPERADORES ARITMÉTICOS

// +
// -
// *
// /
// **
// %


// OPERACIONES DE ASIGNACIÓN

// =
// +=
// -=
// *=
// /=
// **=

var total = 5;
total += 4; // 9 total = total + 4
total -= 3; // 6
total *= 2; // 12
total /= 4; // 3
total **= 4; // 81


// OPERACIONES DE COMPARACIÓN

var a = 2;
var b = 3;
var c = 5;

// == igual que
// === igual que - modo estricto
// < menor que
// > mayor que
// <= menor o igual que
// >= mayor o igual que
// != diferente que
// !== diferente que - modo estricto


// OPERACIONES LÓGICOS

// && (and)
// || (or)
// ! (not)

// true && true =>  true
// true && false =>  false
// false && true =>  false
// false && false =>  false

// true || true =>  true
// true || false =>  true
// false || true =>  true
// false || false =>  false


// CADENAS DE TEXTO

var text1 = "Texto con comillas dobles"; 
var text2 = 'Texto con comillas simples';
var text3 = 'texto con \'ambas\' comillas';

var id = 'ID-12343-356'
var slug = 'Esto-es-un-slug-';


// MÉTODOS PARA CADENAS DE TEXTO

// length => Es una propiedad, no un método.
// slice
// substring
// replace
// replaceAll
// toUpperCase
// toLowerCase
// repeat
// concat

// var number_id = id.slice(3, id.length);
// var number_id = id.substring(3, id.length); // Igual que 'slice', pero no acepta datos negativos.
// var replaced_id = id.replace('-', '');
// var replaced_id = id.replaceAll('-', '');
// var lower_cased_id = id.toLowerCase();
// var upper_cased_slug = slug.toUpperCase();
// var repeated_slug = slug.repeat(3);

// EJERCICIO
// Crear una variable con su nombre que contenga su nombre todo en minúscula
// en una cadena de texto y guardarlo en otra variable con el formato de
// la primera letra en mayúscula y todas las demas en minúscula


var nombre1 = 'juan';
var nombre2 = 'pablo';
// var upper_cased_username = username.toUpperCase().slice(0,1) + username.slice(1);
// var upper_cased_username = username[0].toUpperCase() + username.slice(1)
// var upper_cased_username = username.replace('j', 'J');
// var nombre3 = nombre1.concat(' ', nombre2)


// INDEXOF, INCLUDES, STARTSWITH, ENDSWITH

// var konami = 'konami';
// var teclas = 'konamibkcsbjkdfbkjbfkbsdkbfkonamisdfbsdbfsdbfbsdkjfjsdkfsjdfsdnkonami'

// console.log(teclas.indexOf(konami));
// console.log(teclas.includes(konami));
// console.log(teclas.startsWith(konami));
// console.log(teclas.endsWith(konami));


// LET, CONST, BACKTICKS => ES6
 
let text4 = 'hola' // scope global
// const PI = Math.PI;

// if (true) { // scope local
//   let text4 = 'mundo';
//   console.log('Alcance local', PI);
// }

// console.log('Alcance global', text4);
// console.log('Alcance global', PI);

// text4 = nombre1 + nombre2;
// text4 = `hola mi nombre es ${nombre1} ${nombre2}`;

// text4 = `
//   <section>
//     <div>${nombre1}</div>
//     <div>${nombre2}</div>
//   </section>
// `;

// console.log(text4)


// MATH

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.sqrt    // returns the square root
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// Math.sin
// Math.cos
// Math.tan

// Math.random
// Math.round
// Math.ceil
// Math.floor

// PAIR PROGRAMMING
// crear un slug en donde al final tenga un número random
// y que ese número no contenga el '0.'

// let random = Math.random().toString().slice(2)
// console.log(slug + random) // Me regresa un número entre el 0 y el 1

// if (Math.random() < 0.5) {
//   console.log('Salió cara');
// } else {
//   console.log('Salió cruz');
// };

// console.log(Math.floor(3.5));
// console.log(Math.ceil(3.5));
// console.log(Math.round(3.5));
// console.log(Math.sin(60));
// console.log(Math.cos(60));
// console.log(Math.tan(60));


// ARREGLOS => ARRAYS

// let names = ['Lalo', 'Beto', 'Adry', 'Jimena', 'Edwin'];
let shopping_cart = ['Mario Kart'];


// MÉTODOS DE ARREGLOS

// push => sirve para añadir información al final del array
// unshift => sirve para añadir información al principio del array
// pop => sirve para remover información al final del array
// shift => sirve para remover información al principio del array
// splice

shopping_cart.push('Altered beasts');
shopping_cart.push('FIFA 2021');
shopping_cart.push('Minecraft');
shopping_cart.push('RE2', 'Horizont');

shopping_cart.pop();

shopping_cart.unshift('Days gone');
shopping_cart.unshift('Tomb raider');
shopping_cart.shift();

shopping_cart.splice(1, 0, 'Mario 64')

shopping_cart[1] = 'Assassin\'s creed';

// length => Es un propiedad
// sort
// concat
// slice
// split
// join - toString
// reverse
// indexOf
// includes

// shopping_cart.length;
// shopping_cart.sort();

let arr1 = ['manzana', 'pera', 'mango'];
// let arr2 = ['tomate', 'lechuga', 'cilantro'];
// let arr3 = arr1.concat(arr2);

// let cart_sliced = shopping_cart.slice(1, 3);

// let fruits = arr1.reverse();

// PAIR PROGRAMMING
// Crear una variable y verificar que esa variable sea un palíndromo

let str = 'anitalavalatina';
// str = str.replaceAll(' ', '');
// str = str.replaceAll(',', '');

// let isPal = str === str.split('').reverse().join('');

// arr1.indexOf('peras');
// arr1.includes('peras');




// OBJETOS
// CONDICIONES
// LOOPS
// FUNCIONES
// DOM







