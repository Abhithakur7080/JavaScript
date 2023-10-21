//There are many ways to create objects in javascript as below
/*
i. Object constructor:
The simplest way to create an empty object is using the Object constructor. Currently this
approach is not recommended.
*/
var object = new Object();
/*
ii. Object's create method:
The create method of Object creates a new object by passing the prototype object as a
parameter
*/
var object = Object.create(null);
/*
iii. Object literal syntax:
The object literal syntax is equivalent to create method when it passes null as parameter
*/
var object = {};
/*
iv. Function constructor:
Create any function and apply the new operator to create object instances,
*/
function Person1(name) {
    var object = {}
    object.name = name;
    object.age = 21;
    return object;
}
var object1 = new Person1("Abhijeet");
console.log(object1);
console.log(object1.name);
console.log(object1.age);

/*
v. Function constructor with prototype:
This is similar to function constructor but it uses prototype for their properties and methods,
*/
function Person2() { }
Person2.prototype.name = "Abhijeet";
Person2.prototype.age = 21;
var object2 = new Person2();
console.log(object1);
console.log(object1.name);
console.log(object1.age);

//This is equivalent to an instance created with an object create method with a function
//prototype and then call that function with an instance and parameters as arguments.

function Person3(name, age) {
    this.name = name;
    this.age = age
}
var object3 = new Person3("Abhijeet", 21)
console.log(object1);
console.log(object1.name);
console.log(object1.age);

//OR

function Person4(name, age) {
    this.name = name;
    this.age = age
}
// Create a new instance using function prototype.
var newInstance = Object.create(Person4.prototype)

// Call the function
var result = Person4.call(newInstance, "Abhijeet", 21);

// If the result is a non-null object then use it otherwise just use the new instance
console.log(result && typeof result === 'object' ? result : newInstance);


/*
vi. ES6 Class syntax:
ES6 introduces class feature to create the objects
*/

class Person5 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

var object5 = new Person5("Abhijeet", 21);
console.log(object5);
console.log(object5.name);
console.log(object5.age);

/*
vii. Singleton pattern:
A Singleton is an object which can only be instantiated one time. Repeated calls to its
constructor return the same instance and this way one can ensure that they don't
accidentally create multiple instances.
*/

var object6 = new function(){
    this.name = "Abhijeet";
    this.age = 21;
}
console.log(object6);
console.log(object6.name);
console.log(object6.age);