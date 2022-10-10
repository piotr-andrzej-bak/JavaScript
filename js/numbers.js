// alert("test");

// console.log(1);
// console.log(12);
// console.log("uiuiu");

console.log("=======NUMBERS=======");
// var gdzie mozna zminiac wartość
let age = 25;
let year = 2019;
console.log(age, year, "year");

age = 30;

console.log(age);

// constant
const points = 100;
console.log("constant: ", points)

var score = 75;
console.log("score (var): ", score);

score = 12;
console.log("score (var): ", score);

let radius = 10;
const pi = 3.14;

// math operations +, -, *, /, **, %
console.log('divide: ', 10 / 2);

result = radius % 3;
console.log('modulo (remainder) 10 % 3: ', 10 % 3);

console.log('area od circle r=10', pi * radius ** 2);

// order of operation
// B I D M A S
// Brackets
// Indecies eg: **
// Division
// Multiplication
// Addition
// Substraction
console.log('oder of operation ', 5 * (10 - 3) ** 2);

//increament
let likes = 10;
likes++;
likes--

likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;

// NaN - not a number
console.log(5 / 'hello');

// concat numbers and strings
result = 'the blog has ' + likes + ' likes';
console.log(result);
