// VARIABLES

var greet = 'Hola mundo'; // string
var age = 23; // number
var isOpen = false; // boolean
var miNombre = 'Juan Pablo'; // camelcase
var MiNombre = 'Juan Pablo'; // pascalcase se utiliza por lo general cuando se crean 'classes'

// NAN => Not A Number

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
// ARREGLOS
// OBJETOS
// CONDICIONES
// LOOPS
// FUNCIONES







