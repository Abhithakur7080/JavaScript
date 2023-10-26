//What is arrow functions
/*
An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.
*/
// Traditional function
const add = function (a, b) {
    return a + b;
  };
console.log(add(5,3));//8

// Arrow function for the same purpose
const addArrow = (a, b) => a + b;
console.log(addArrow(5,3));//8

// Arrow function with no parameters
const greet = () => "Hello, world!";
console.log(greet());//Hello, world!

// Arrow function with a single parameter
const square = x => x * x;
console.log(square(4));//16