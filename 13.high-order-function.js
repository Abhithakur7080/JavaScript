//What is a higher order function
/*
Higher-order function is a function that accepts another function as an argument or returns a
function as a return value or both.
*/

const firstOrder = () => console.log("this is a first order function!");
const higherOrderFunction = ReturnFirstOrder => ReturnFirstOrder();

higherOrderFunction(firstOrder);