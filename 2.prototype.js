/*
Every object in JavaScript has a built-in property, which is called its prototype.

The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
*/
let Obj = {
    city: "madrid",
    name: "Abhijeet",
    language: "javaScript",
    run: () => {
        alert("self run")
    }
}
console.log(Obj);
console.log(Obj.toString());
console.log(Obj.valueOf());

let p = {
    run: () => {
        alert("run")
    }
}

p.__proto__ = {
    subname: "Thakur"
}

//set to p propert to Obj Object
Obj.__proto__ = p
//on override property
Obj.run(); // also alert "self run" not "run"
console.log(Obj.subname);

//Object has its own properties
console.log(Object.getOwnPropertyNames(Obj));

//Object get properties from another Object
console.log(Object.getPrototypeOf(Obj));

//prototype chain like this

// Obj <-Object
//  ^
//  |
//  P  <-Object
//  ^
//  |