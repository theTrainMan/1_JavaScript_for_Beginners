// Single Line Comments
/*
    Multi line comments
*/

/*********************************************************/
// alert('Hello World')
//console.log("Hello World")

// Variables - var [not to be used], let[reassign the value] and const[used when a value will remain the same.]

// DataTypes
// Primitive - String, Number Boolean, Null, undefined, Symbol
/*
const name = 'John';
const age = 50;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //undefined

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
*/
/**********************************************************/

// Strings - Concatenation
// console.log('My names is ' + name + ' and I am ' + age);
// template String or literals
// console.log(`My name is  ${name} and I am ${age}`);
/*
//Property doesn't have parenthesis, otherwise it is a method.
const s = "Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 4));
console.log(s.substring(0, 4).toUpperCase());
console.log(s.split(''));

const w = 'technology, computers, IT, Code, Bootstrap, weapons, tears, apple'
console.log(w.split(','))*/

/*************************************************************/

// ARRAYS - variables that holds multiple values

const numbers = new Array(1, 6, 9, 3, 11, 522, 52); //Constructor Array
const fruits = ['apples', 'oranges', 'pears', 'bananas', 'mangos', 10, true];
console.log(numbers);
console.log(fruits);
console.log(fruits[1]);
fruits[8] = 'grapes';
fruits.push('lemons'); // Push adds to the end of the Array
fruits.unshift('strawberries'); // Unshift adds to the beginning
fruits.pop(); //Pop Removes the last entry of the Array

console.log(fruits);
console.log(Array.isArray(fruits)); // isArray checks to see if it True
console.log(fruits.indexOf('oranges'));