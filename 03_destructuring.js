// destructuring assignment

let a, b;

// Array Destructuring
[a, b] = [100, 200];            // here a = 100 and b = 200
[a, b, ...rest] = [100, 200, 300, 400, 500];   // here rest = [300, 400, 500] and a = 100, b = 200

const person = ['ranjan', 'kumar', 'mandal'];
const [person1, person2, person3] = person;             // or


// Object Destructuring
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});  // here rest = {c:300, d: 400, e: 500} and a = 100, b = 200

const person = {name: 'ranjan', age: 22, city: 'india'};
const {name, age, city} = person;       // here name = 'ranjan', age = 22, city = 'india'

