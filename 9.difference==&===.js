// Difference between == and === operators
/*
JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The
strict operators take type of variable in consideration, while non-strict operators make type
correction/conversion based upon values of variables. The strict operators follow the below
conditions for different types,
*/
/*
i. Two strings are strictly equal when they have the same sequence of characters, same length,
and same characters in corresponding positions.
*/
    console.log("Hello"=="Hello");//true
    console.log("Hello"==="Hello");//true
    
    console.log("5"==5);//true
    console.log("5"===5);//false
/*
ii. Two numbers are strictly equal when they are numerically equal. i.e, Having the same
number value. There are two special cases in this,
a. NaN is not equal to anything, including NaN.
*/
    console.log(NaN==5);//false
    console.log(NaN===5);//false
/*
b. Positive and negative zeros are equal to one another.
*/
    console.log(5==5);//true
    console.log(5===5);//true

    console.log(0==-0);//true
    console.log(0===-0);//true
/*
iii. Two Boolean operands are strictly equal if both are true or both are false.
*/
    console.log(true==true);//true
    console.log(true===true);//true

    console.log(false==0);//true
    console.log(false===0);//false
/*
iv. Two objects are strictly equal if they refer to the same Object.
*/
    let obj1 = { name: "Alice" };
    let obj2 = { name: "Alice" };
    let obj3 = obj1;

    console.log(obj1 == obj2);//false
    console.log(obj1 === obj2);//false
    console.log(obj1 === obj3);//true
/*
v. Null and Undefined types are not equal with ===, but equal with ==. i.e, null===undefined
--> false but null==undefined --> true
*/

    console.log(null==undefined);//true
    console.log(null===undefined);//false
