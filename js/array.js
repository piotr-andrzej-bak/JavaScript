let array = ['adam', 'george', 'jeff'];
array[1] = 'ken';
console.log(array[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['adam', 'jeff', 30, 20];
console.log(random);

console.log('random array lenght: ',random.length);

// array methods

let result = array.join('joined with; ',';');
console.log(result);

// index of
result = array.indexOf('adam');
console.log('indefOf adam: ',result);


result = array.concat(random);
console.log('array concat: ','indefOf adam: ',result);

result = array.push('piotr');
console.log('array with pushd piotr: ',result);

// remove last value
result = array.pop();
console.log('pop last value: ',result);