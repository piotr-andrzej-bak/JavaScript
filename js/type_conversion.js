console.log('====EXPLICIT TYPE CONVERTION====');
let score = '100';

score = Number(score);
console.log(score + 1)

console.log('type of score: ', typeof score);

let result = Number('hello');
console.log('type conversion result: ', result);

result = 50;
console.log('type of result (number): ', typeof result);
console.log('type string: ', result);
result = String(50);
console.log('type of result (string): ', typeof result);
console.log('type convesrion number to string: ', result);

// 0 false
// pozostałe true numery
result = Boolean(100);
console.log('type of result (boolean): ', typeof result);
console.log('type convesrion number to boolean: ', result);

// strings z wartoscia ma true
// bez wartosci ma false
result = Boolean('100');
console.log('type of result (boolean): ', typeof result);
console.log('type convesrion number to boolean: ', result);
