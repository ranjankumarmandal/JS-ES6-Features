// iterator - this is a simple custom function in js

function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ?
            {value: names[nextIndex++], done: false} : 
            {done: true}
        }
    }
}
const nameArr = ['ranjan', 'kumar', 'mandal'];
const names = nameIterator(nameArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());


// generator - these are special function in js uses keyword 'function*' not 'function', also 'yeild' keyword is used inside this to return a valu
function* sayNames() {
    yield 'ranjan';
    yield 'kumar';
    yield 'mandal';
}
const names1 = sayNames();

console.log(names1.next());
console.log(names1.next());
console.log(names1.next());