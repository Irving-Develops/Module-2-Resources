// class Dog {
//     constructor(name){
//         this.name = name;
//     }

//     changeName() {
//         this.name = "Layla";
//     }
// }

// let dog = new Dog("Tarzan");
// console.log(dog.changeName());
// console.log(dog)


// let hello = function(){
//     console.log('hello');
// };

// //Takes in a callback and a timer
// global.setTimeout(hello, 5000);

// class Cat {

//     //method to that prints out meow when invoked
//     purr() {
//         console.log('meeeooooow');
//     }

//     purrMore() {
//         this.purr();
//     }
// }




// let cat = new Cat();

// const boundPurr = cat.purrMore.bind(cat);

//will print [function: bound purrMore]
//console.log(cat.purrMore.bind(cat));
//console.log(boundPurr);

//will print meeeeooooow
//console.log(cat.purrMore())

//global.setTimeout(boundPurr, 5000);


// let sayMeow = cat.purrMore;
// //console.log(sayMeow());

// let boundCat = sayMeow.bind(cat)

// boundCat()
//let boundFunc = func.bind(context);

//wont run because cat.purrMore is a callback, when the function calls
//purrMore all it has to reference is the callback itself not whats inside
// global.setTimeout(cat.purrMore, 5000);




// function hello() {
//    console.log(this)
// }

// hello()

// class Cat {
//     constructor(name){
//         this.name = name;
//     }

//     // sayName() {
//     //     console.log(this.name)
//     // }

//     purrNTimes(n) {
//         for(let i=0; i<n; i++) {
//             console.log(`${this.name} says: meow`)
//         }
//     }
// }

// // console.log(cat.sayName())

// class Dog {
//     constructor(name){
//         this.name = name;
//     }
// }

// let dog = new Dog("Bella")
// let cat = new Cat("Scrappy");

// //makes bella meow 5 times
// //cat.purrNTimes.call(dog, 5);

// cat.purrNTimes.apply(dog, [5]);

// let sayNameFunc = cat.sayName;

// let sayHelloCat = sayNameFunc.bind(cat);
// sayHelloCat();

// let sayHelloDog = sayNameFunc.bind(dog);
// sayHelloDog();

// const boundPurr = cat.purrMore.bind(cat);



//Call and Apply =================================================

//assigning return of func.call() to a variable
// let callReturn = func.call(context, ...args)

//assigning return of func.apply() to a variable
// let applyReturn = func.apply(context, [...args]);


//the first argument is the this that you want to bind to the functions context

//apply takes in an array of arguments

//call spreads them out in comma separated values




class Dog {
    constructor(name) {
        this.name = name;
    }

    bark = () => {
        console.log(`${this.name} barked at you`);
    }
}

const fido = new Dog("Fido");
fido.bark(); // Fido barked at you
const fidoBark = fido.bark;
fidoBark(); //