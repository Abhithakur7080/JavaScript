//What is the difference between Call, Apply and Bind

var employee1 = {firstName: 'Abhijeet', lastName: 'kumar'};
var employee2 = {firstName: 'Abhi', lastName: 'Thakur'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

//call: The call() method invokes a function with a given this value and arguments provided one by one.
console.log("CALL");
invite.call(employee1, "Hello", "How are you?")
invite.call(employee2, "Hello", "How are you?")

//apply: Invokes the function with a given this value and allows you to pass in arguments as an array.
console.log("APPLY");
invite.apply(employee1, ["Hello", "How are you?"]);
invite.apply(employee2, ["Hello", "How are you?"]);

//bind: returns a new function, allowing you to pass any number of arguments.
console.log("BIND");
var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);

inviteEmployee1("Hello", "How are you?")
inviteEmployee2("Hello", "How are you?")