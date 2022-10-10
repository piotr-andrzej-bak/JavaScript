/*
loosely typed language

NUMBER
    1,2,3, 3.14
STRING
    'hello world', "test"
BOOLEAN
    true false
NULL
    set a variable with no value
UNDEFINED
    for variablen not yet defined
OBJECT
    complex data structures
SYMBOL
    used with objects
*/

// strings
console.log('hello, world');
let email = 'test@test.com';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + " " + lastName;
console.log("Concatenation: ", fullName);

//getting single characters
console.log("Single char: ", fullName[0]);

// string lenght
console.log("Lenght: ", fullName.length);

// string method
console.log("To uppercase: ", fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log('To lowercase', result);

// common string methods

let index = email.indexOf('@');
console.log('index of @ (zero based) in email: ', index);

let email2 = 'test@test.com';
let result2 = email.lastIndexOf('m');
console.log('last index of M: ', result2)

let sliced = email.slice(0, 4)
console.log('slice: ', sliced)

// substring
let substr = email.substring(4, 10);
console.log('substring: ', substr);

// replace first found
result = email.replace('t', 'r');
console.log('replace first found: ', result);

