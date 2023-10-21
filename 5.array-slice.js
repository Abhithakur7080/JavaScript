/*
The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.
*/

let arrayIntegers = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegers.slice(0,2); 
console.log(arrayIntegers1);// returns [1,2]

let arrayIntegers2 = arrayIntegers.slice(2,3); 
console.log(arrayIntegers2);// returns [3]

let arrayIntegers3 = arrayIntegers.slice(4); 
console.log(arrayIntegers3);//returns [5]