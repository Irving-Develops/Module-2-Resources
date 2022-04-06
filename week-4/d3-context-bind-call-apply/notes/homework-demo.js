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
// console.log(cat.purrMore.bind(cat));
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

//     sayName() {
//         console.log(this.name)
//     }
// }

// let cat = new Cat("Scrappy");
//console.log(cat.sayName())

// class Dog {
//     constructor(name){
//         this.name = name;
//     }
// }

// let dog = new Dog("Bella")

// let sayNameFunc = cat.sayName;

// let sayHelloCat = sayNameFunc.bind(cat);
// sayHelloCat();

// let sayHelloDog = sayNameFunc.bind(dog);
// sayHelloDog();

// const boundPurr = cat.purrMore.bind(cat);

