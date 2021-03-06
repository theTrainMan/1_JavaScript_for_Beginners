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
/*
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
*/

/*************************************************************/
// OBJECT LITERALS - Key Value Pairs
/*
const person = {
    firstName: 'Peter',
    lastName: 'Jackson',
    age: 44,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: 'Main Street',
        number: 50,
        city: 'Boston',
        state: 'limpopo'

    }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.address.city);

person.email = 'john@gmail.com';
// Destructuring

const { firstName, lastName, age, hobbies, address: { city } } = person;
console.log(firstName, age);
console.log(city);

/*************************************************************/

// OBJECT ARRAYS 
/*
// These are an Array with 3 values and objects inside
const todos = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Do the laundry',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Go buy some groceries',
        isCompleted: true
    }
]
console.log(todos);
console.log(todos[1]);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos); //changing the format to a JSON file
console.log(todoJSON);

/*************************************************************/
/*
// LOOPS - For
for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// LOOPS - While
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// Loop through an Array
for (let i = 0; i < todos.length; i++) {
    console.log(`For Loop Number: ${i}`);
}
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.isCompleted);
}

// Higher order Array Methods - ForEach[Loops through the Array], Map[Creates a new Array from an Array] & filter[Creates a new array based on a condition]
// forEach
todos.forEach(function(todo) {
    console.log(todo.text);
})

//Map
const todoText = todos.map(function(todo) {
    return todo.text;
})
console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
})
console.log(todoCompleted);

// Adding multiple queries - Functional Programming
const todoCompletedAdd = todos.filter(function(todo) {
    return todo.isCompleted === false;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompletedAdd);
*/


/*************************************************************/
// Conditionals Statements
// Use === as it matches the type exactly.
/*
const x = 6;
const y = 12;

// OR - ||
if (x > 5 || y > 10) {
    console.log('x is more than 5 OR y is more than 10');
}
// AND - &&
if (x > 5 && y > 10) {
    console.log('x is more than 5 AND y is more than 10');
}

// Ternary operator - ? and else : - short hand if statement
const v = 1;
const color = v > 10 ? 'red' : 'white'

console.log(color);

// Switches
switch (color) {
    case 'red':
        console.log('The color is red');
        break;
    case 'blue':
        console.log('The color is blue');
        break;
    default:
        console.log('Color is neither color');

        break;
}
*/
/************************************************************/
/*
// FUNCTIONS
function addNums(num1, num2) {
    console.log(num1 + num2);

}
addNums(5, 4)

function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(5, 40));

//Arrow Functions
const addNumsArr = (num1, num2) => {
    return num1 + num2;
}
console.log(addNumsArr(105, 40));

//Arrow Function shorten
const AddNumsArrShrt = (num1, num2) => console.log(num1 + num2);
AddNumsArrShrt(19, 1)

const AddNumsArrShrt1 = (num1, num2) => (num1 + num2);
console.log(AddNumsArrShrt1(50, 50));

*/
/************************************************************/

// Object oriented Programming
//Constructor functions [with prototypes or ES6 classes]
/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    /*this.getBirthYear = function() { //Adding this function to the Constructor function
        return this.dob.getFullYear();
    }  //replaced by the Prototype below
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
    */


/*
// PROTOTYPES - another object but can attach methods and properties to the prototype.... 
// How not include the functions inside the Constructor is to use prototype
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear(); // This prototype can replace the function in the constructor
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`; // This prototype can replace the function in the constructor
}
*/
/*
// CLASS
class NewPerson {
    constructor() { // Method inside a Class
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// the classes gives same information as the constructor function


//Instantiate an Object
const person1 = new Person('John', 'Tracey', '4-3-2002');
const person2 = new Person('Mary', 'Hendrix', '12-1-1972');

console.log(person1);
console.log(person2);
console.log(person1.lastName);
console.log(person1.dob.getFullYear());

//Adding a method to the function
console.log(person1.getBirthYear());
console.log(person2.getBirthYear());

console.log(person1.getFullName());
console.log(person2.getFullName());

console.log(person1);

// Object orientated Programming with ES5
*/

/************************************************************/
/*
// DOM - Document Object
//console.log(window);

// Single Element Selectors
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('.h1'));
console.log(document.querySelector('.btn'));


// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
//console.log(document.getElementByClassNAme('item')); older no more in use
//console.log(document.getElementByTagName('li')); // older no more in use


const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item)); //Looping through to get back all the items in the list.
*/

// MAnipulating the DOM 
/*
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = ('Hello')
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Why me?</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'blue';
btn.addEventListener('click', (e) => { // Adding an Event
    e.preventDefault();
    console.log(e.target);
});

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> And Again Why me?</h1>';
})

// Using other events other than click, you can use mousehover, mouseover, it depends on the site and what you want to accomplish.
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', (e) => {

})*/
const btn1 = document.querySelector('.btn1')
btn1.remove();
const btn2 = document.querySelector('.btn2')
btn2.remove();

/************************************************************/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear the fields
        nameInput.value = '';
        emailInput.value = '';

    }

}




/************************************************************/

/************************************************************/