// calculator.js

// const operations = ['+', '-', '*'];

// function add(num1, num2) {
//     // ...
// }

// function subtract(num1, num2) {
//     // ...
// }

// function multiply(num1, num2) {
//     // ...
// }

//Ways to export functions to module


// 1.)

// module.exports = { // only add, subtract, and operations gets exported from this file
//     add,
//     subtract,
//     operations
// };

// The above is shorthand for below
// module.exports = {
//   add: add,
//   subtract: subtract,
//   operations: operations
// };


// 2.)
// module.export.add = add;
// module.export.subtract = subtract;
// module.export.operations = operations;

//shorthand for above
// exports.add = add;
// exports.subtract = subtract;
// exports.operations = operations;

// 3.)
//to export a single item from a module
//module.exports = operations;

//if you wanted to import the calculator properties in a different file you use:
//const {add, subtract, operations} = require('./calculator');


//Creating a Class

// class Book {
//     constructor(title, series, author) {
//         this.title = title;
//         this.series = series;
//         this.author = author;
//         Book.numBooks += 1;
//     }
//     getInformation() {
//         return `${this.title} by ${this.author}`;
//     }

    // Static method that accepts a variable number
    // of Book instances and returns an array of their titles.
    // Notice the use of a rest parameter (...books)
    // to capture the passed parameters as an array of values.
    // static getTitles(...books) {
    //     return books.map((book) => book.title);
    // }
    // static numBooks = 0;
    
//}


//constructor method is important because they:
// > don't explicitly return a value
// > the this keyword references the newly created object instance
// const fellowshipOfTheRing = new Book(
//     'The Fellowship of the Ring',
//     'The Lord of the Rings',
//     'J.R.R Tolkein');
    
    
//     const theTwoTowers = new Book(
//         'The Two Towers',
//         'The Lord of the Rings',
//         'J.R.R. Tolkein');
        
// console.log(Book.numBooks)
    
// Call the static `Book.getTitles()` method
// to get an array of the book titles.
//const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

//the array of titles
//console.log(bookTitles)
//console.log(bookTitles.join(', '))



// console.log(fellowshipOfTheRing.getInformation())
//instanceof is used to check if the object is an instance of the Book class
//console.log(fellowshipOfTheRing instanceof Book)

//Three things occur when instantiating an instance of a class

    // 1.) An empty object is created
    // 2.) The constructor method is called and this is bound to the new object
    // 3.) The new object is returned after the constructor method has completed

//Methods

    // a method is a function that is part of the class. Performs an action
    //invoked on a given instance
    //

    //Example of an instance method

    // getInformation() {
    //     return `${this.title} by ${this.author}`;
    // }














// class Person {
//     constructor(firstName) {
//         this.firstName = 'Caleb';
//     }

//     greet() {
//         // this?
//         console.log(`${this.firstName} says hello!`);
//     }
// }

// const kristen = new Person('Kristen');
// console.log(kristen)

// class Person {
//     constructor(firstName) {
//         this.firstName = firstName;
//     }

//     greet() {
//         console.log(`${this.firstName} says hello!`);
//     }
// }

// const kristen = new Person('Kristen');
// kristen.greet();


// class Person {
//     constructor(firstName) {
//         // this?
//         this.firstName = 'Caleb';
//     }

//     greet() {
//         console.log(`${this.firstName} says hello!`);
//     }
// }

// const kristen = new Person('Kristen');
// console.log(kristen.greet())