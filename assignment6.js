// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const users = [
//                 { id: 1, name: 'Sus', age: 25 },
//                 { id: 2, name: 'Sunil', age: 20 },
//                 { id: 3, name: 'Charles', age: 15 },
//             ];
//             resolve(users);
//         }, 2000);
//     });
// }
// fetchData().then(users => {
//     console.log(users);
// });



// function processData(numbers, callback) {
//     const processedNumbers = numbers.map(callback);
//     return processedNumbers;
// }

// function newNumber(num) {
//     return num + 10;
// }

// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = processData(numbers, newNumber);
// console.log(newNumbers); 


// async function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const users = [
//                 { id: 1, name: 'Sus', age: 15 },
//                 { id: 2, name: 'Man', age: 20 },
//                 { id: 3, name: 'Ran', age: 25 },
//             ];
//             resolve(users);
//         }, 2000);
//     });
// }


// async function fetchAndLogUsers() {
//     const users = await fetchData();
//     console.log(users);
// }

// fetchAndLogUsers();



// function doubleNumbers(numbers) {
//     return numbers.map(num => num * 2);
// }
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = doubleNumbers(numbers);
// console.log(doubledNumbers); 


// function filterNumbersGreaterThanTen(numbers) {
//     return numbers.filter(num => num >= 10);
// }
// const numbers = [5, 10, 15, 3, 8, 20];
// const filteredNumbers = filterNumbersGreaterThanTen(numbers);
// console.log(filteredNumbers); 


// function findFirstNumberGreaterThanFifteen(numbers) {
//     return numbers.find(num => num > 15);
// }

// const numbers = [10, 5, 20, 25, 15];
// const firstNumberGreaterThanFifteen = findFirstNumberGreaterThanFifteen(numbers);
// console.log(firstNumberGreaterThanFifteen);


// 8. Array Manipulation: Reduce
// function sum(...numbers){
//     return numbers.reduce((sum, Number) => sum + Number, 0);
// }

// / 10. Classes and Objects

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     info() {
//         return (`Hello, ${this.name} whose age is ${this.age}`);
//     }
// }
// const person1 = new Person("Ram", 10);
// console.log(person1.info());


// // 11. Inheritance

// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age);
//         this.grade = grade;
//     }
//     study() {
//         return `${this.name} is studying.`;
//     }
// }

// const student1 = new Student("Ram", 10, "A+");
// console.log(student1.study());

// */
// //12. Error Handling with Promises

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() < 0.5 ? reject("Failed to fetch data") : resolve([
//                 { id: 1, name: 'Ram', age: 10 },
//                 { id: 2, name: 'Hari', age: 20 },
//                 { id: 3, name: 'Shyam', age: 30 }
//             ]);
//         }, 1000);
//     });
// }



// fetchData().then((message)=> {
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// });



// Conceptual questions

//2. What is a closure in JavaScript? Provide an example.
//A closure is a function that has access to its own scope, as well as the outer scope in which it was defined. 
//This means it can access variables from its parent scope even after the parent function has finished executing.
//Example :-
// function add(){
//     let a = 5;
//     let b =10;

//     function print(){
//         console.log(a+b);
//     }
//     return print;
// }

// let c = add();
// c();


// 1.Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions:
// Promises are used in JavaScript to handle asynchronous operations, such as fetching data from a server or reading a file. They provide a cleaner and more organized way to work 
// with asynchronous code compared to traditional callback functions. Some advantages of promises over callbacks include:

// Readability: Promises use a more linear and readable syntax, making it easier to understand asynchronous code and avoid "callback hell."
// Error Handling: Promises have built-in error handling through the .catch() method, which makes error management more straightforward compared to callbacks.
// Chaining: Promises support method chaining with .then(), allowing for a more elegant way to sequence asynchronous operations.
// Promise Composition: Promises support combining multiple asynchronous operations using functions like Promise.all() and Promise.race(), which simplifies
//  complex asynchronous workflows.


//3. What is a callback function and why is it used in JavaScript?
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. 
// They are commonly used in asynchronous programming to handle asynchronous operations like AJAX requests or setTimeout.


//4. What are async/await in JavaScript and how do they improve asynchronous programming?
// Async and await are keywords introduced in ES2017 (ES8) to simplify asynchronous code and make it look more like synchronous code.
// Async/await improve asynchronous programming by:
// - Making asynchronous code more readable and easier to understand, especially for developers familiar with synchronous programming.
// - Simplifying error handling with traditional try/catch blocks.
// - Allowing better handling of promise chaining and composition.


//5. Write the difference between ES6 and JS.
// JavaScript (JS) is the programming language, while ES6 (ECMAScript 2015) is a version of JavaScript with new features, syntax, and enhancements. 
// ES6 is a part of JavaScript, it's essentially an updated version of JavaScript with additional features.


// 6. What are some of the major features introduced in ES6?
// ES6 introduced several new features and enhancements to JavaScript. Some major ones include:

// - Arrow functions: A more concise syntax for writing functions.
// - let and const declarations: New ways to declare variables with block scope.
// - Template literals: A new way to create strings with interpolation and multiline support.
// - Enhanced object literals: Shorthand syntax for defining object properties and methods.
// - Destructuring assignment: An easy way to extract values from arrays and objects.
// - Classes: Syntactic sugar for defining constructor functions and inheritance.
// - Promises: A built-in mechanism for handling asynchronous operations.
// - Modules: A standardized way to organize and share JavaScript code between files.
// - for...of loop: A new loop for iterating over iterable objects like arrays and strings.