// set stores unique values 
// These are like of array in low level architecture

const set1 = new Set();

set1.add(100);
set1.add(100);
set1.add('ranjan');
set1.add(true);

console.log(set1);          // output will be 100, 'ranjan', true. Instead of 100 two times