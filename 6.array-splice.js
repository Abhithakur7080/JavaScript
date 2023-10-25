/*
The splice() method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the option second argument indicates the number of elements to be deleted. Each additional argument is added to the array.
*/

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2);
console.log(arrayIntegers1);// returns [1, 2];
console.log(arrayIntegersOriginal1);// returns [3, 4, 5];

let arrayIntegers2 = arrayIntegersOriginal2.splice(3);
console.log(arrayIntegers2);// returns [4, 5];
console.log(arrayIntegersOriginal2);// returns [1, 2, 3];

let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); 
//1 for 1 element remove -> 4 only
console.log(arrayIntegers3);//returns [4];
console.log(arrayIntegersOriginal3);// returns [1, 2, 3, "a", "b", "c", 5];