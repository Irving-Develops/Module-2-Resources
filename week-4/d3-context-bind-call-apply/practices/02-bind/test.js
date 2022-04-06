// Your code here
const Employee = require('./employee');

let johnWick = new Employee(
    'John Wick',
    'Dog Lover'
);

const boundName = johnWick.sayName.bind(johnWick);
const boundOccupation = johnWick.sayOccupation.bind(johnWick);
// setTimeout (() => {
//     johnWick.sayName();
// }, 2000);

setTimeout(boundName, 2000);
setTimeout (boundOccupation, 2000);
