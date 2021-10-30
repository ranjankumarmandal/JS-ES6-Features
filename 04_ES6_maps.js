// Maps - key value pair - can use any type as key or value

const map1 = new Map();

// set keys
const key1 = 'ranjan kumar',
      key2 = true,
      key3 = function() {};

// set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// Iterating maps

// implement for key and value both. using loop for...of  or forEach or any other loop
for(let [key, value] of map1) {
    console.log(key, value);
}

// implement for keys only
for(let key of map1.keys()) {
    console.log(key);
}

for(let value of map1.values()) {
    console.log(value);
}

