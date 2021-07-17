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


// OPERADORES DE ASIGNACIÓN

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


// OPERADORES DE COMPARACIÓN

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


// OPERADORES LÓGICAS

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
let arr2 = ['tomate', 'lechuga', 'cilantro'];
let arr3 = arr1.concat(arr2);

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

// propiedades y métodos (Son funciones dentro de objetos)
// CRUD - CREATE, READ, UPDATE, DELETE

let username = {
  name: 'JP',
  age: undefined,
  city: 'CDMX',
  email: 'jp@mail.com' // llave - valor => propiedad || método
};

username.name = 'Juan Pablo';
username.country = 'México'; 
username.country = 'España';

delete username.age;

let users = [];

let user_adry = {
  name: 'Adriana',
  city: 'CDMX'
};

let user_lalo = {
  name: 'Eduardo',
  city: 'Madrid'
};

let user_beto = {
  name: 'Alberto',
  city: 'Madrid'
};

let user_jp = {
  name: 'jp',
  city: 'CDMX'
};

users.push(user_adry);
users.push(user_lalo);
users.push(user_beto);
users.push(user_jp);

users[3].gender = 'M';
users[3].interests = ['Programar', 'Pasear', 'Leer'];
users[3].interests.push('Dormir');
users[3].interests.splice(1, 1, 'Pasear en bicicleta');


// CONDICIONES

// if - else if -else
// switch

let player = {
  life: 4
};

// if (player.life <= 0) {
//   console.log('Game Over');
// } else {
//   console.log('Sigue jugando');
// };

let month = 'jan';

// if (month === 'jan') {
//   console.log('Estamos en enero');
// } else if (month === 'feb') {
//   console.log('Estamos en febrero');
// } else if (month === 'mar') {
//   console.log('Estamos en marzo');
// } else {
//   console.log('Me rindo, no sé en qué mes estamos');
// };

// switch(month) {
//   case 'jan':
//     console.log('Estamos en enero');
//     break;
//   case 'feb':
//     console.log('Estamos en febrero');
//     break;
//   case 'mar':
//     console.log('Estamos en marzo');
//     break;
//   default:
//     console.log('Me rindo, no sé en qué mes estamos');
// };


// LOOPS

// for
// while
// do .. while
// for .. of  // itera sobre arrays
// for .. in  // itera sobre objetos

// for (let i = 0; i < users.length; i++) {
//   if (users[i].name === 'jp') {
//     console.log('Te encontramos Juan Pablo');
//   };
// };

// PAIR PROGRAMMING
// Reversear un string usando el ciclo for

let name_jp = 'Juan Pablo';
let new_name_jp = '';
// for (let i = 0; i < name_jp.length; i++) {
//   console.log(name_jp[i]);
// };

// for (let i = name_jp.length - 1; i >= 0; i--) {
//   new_name_jp += name_jp[i];
// };

let total_loop = name_jp.length - 1;

// while (total_loop >= 0) {
//   if (name_jp[total_loop] === 'u') {
//     break;
//   };
//   new_name_jp += name_jp[total_loop];
//   total_loop -= 1;
// };

// let i = 0;
// do {
//   console.log(i);
//   i += 1;
// } while (i > 9);

// for (let item of users) {
//   if (item.interests) {
//     console.log(item.interests[2])
//   };
// };

// let arr_2d = [
//   [1,2,3,4,5],
//   [11,2,3,4,5],
//   [21,2,3,4,5],
//   [31,2,3,4,5],
//   [41,2,3,4,5],
// ];

// for (item in user_jp) {
//   console.log(item); // Toma las llaves del objeto
//   console.log(user_jp[item]); // Toma los valores de las llaves
// };


// FUNCIONES

// terminología: parámetros y argumentos
// Un parámetro va dentro de los paréntesis de una función declarada
// Un argumento va dentro de los paréntesis de una función invocada

function hello(user) {
  console.log(`Hola ${user}`);
}

function sum(a, b) {
  return a + b;
};

hello(users[3].name);
let total_sum = sum(3, 5);


// DOM

document.title = 'Sesión 03 modificado desde JS';

let h1 = '';

let header = document.getElementById('header');
let input = document.getElementById('input');

header.style.color = 'white';
header.style.backgroundColor = 'red';

input.addEventListener('input', function(e) {
  header.innerText = e.target.value;
});


let button = document.getElementById('button');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let h2 = document.getElementById('h2');

button.addEventListener('click', function() {
  h2.innerText = parseInt(num1.value) + parseInt(num2.value);
  num1.value = '';
  num2.value = '';
});

