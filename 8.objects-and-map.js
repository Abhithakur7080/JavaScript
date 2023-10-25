// How do you compare Object and Map

/*
Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.
*/

/*
i. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map including functions, objects, and any primitive.
*/
//Object are Strings and Symbols
const obj = {
    1: "Abhijeet",
    "city": "Bengalore",
    $: "kumar"
}
console.log(obj);

//Map including functions, objects, and any primitive.
const map = new Map();
const keyObj = {id: 1}
map.set(keyObj, "Abhijeet kumar")
console.log(map);
/*
ii. The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
*/
//not in order
const obj1 = { 'b': 2, 'a': 1 };
for (const key in obj1) {
    console.log(key);
}

//in order
const map1 = new Map();
map1.set('b', 2);
map1.set('a', 1);

for (const key of map1.keys()) {
    console.log(key);
}
/*
iii. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
*/
const obj2 = { 'a': 1, 'b': 2 };
let objSize = 0;
for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
        objSize++;
    }
}
console.log(objSize);

const map2 = new Map();
map2.set('a', 1);
map2.set('b', 2);
console.log(map2.size);
/*
iv. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object
requires obtaining its keys in some fashion and iterating over them.
*/
const obj3 = { 'a': 1, 'b': 2 };
for (const key in obj3) {
    if (obj3.hasOwnProperty(key)) {
        console.log(key, obj3[key]);
    }
}
const map3 = new Map();
map3.set('a', 1);
map3.set('b', 2);

for (const [key, value] of map3) {
    console.log(key, value);
}
/*
v. An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
*/
const obj4 = {
    'toString': 'value1',
    'hasOwnProperty': 'value2'
};

const map4 = new Map();
map.set('toString', 'value1');
map.set('hasOwnProperty', 'value2');
/*
vi. A Map may perform better in scenarios involving frequent addition and removal of key pairs.
*/
const map5 = new Map();
const obj5 = {};

// Measure time for adding and deleting in map
console.time('Map');
for (let i = 0; i < 10000; i++) {
    map5.set(i, 'value');
    map5.delete(i);
}
console.timeEnd('Map');

// Measure time for adding and deleting in object
console.time('Object');
for (let i = 0; i < 10000; i++) {
    obj5[i] = 'value';
    delete obj5[i];
}
console.timeEnd('Object');
