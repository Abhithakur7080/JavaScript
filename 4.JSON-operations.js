/*
JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford . It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json
*/
var text = {
    name: "Abhijeet",
    age: 21,
    city: "patna"
}

//Stringification: converting a native object to a string so it can be transmitted across the network
var textStringify = JSON.stringify(text);
console.log(textStringify); // {"name":"Abhijeet","age":21,"city":"patna"}

//Parsing: Converting a string to a native object
var textParse = JSON.parse(textStringify);
console.log(textParse); //{name: 'Abhijeet', age: 21, city: 'patna'}
