// boolans & comparisions
console.log(true, false, "true", "false");

// methods can return booleans
let email = 'test@test.com';

// includes
let result = email.includes('@');
console.log('includes @: ', result);

let names = ['adam', 'franek', 'piotr'];
result = names.includes('piotr');
console.log('includes piotr in array: ', result);
result = names.includes('hubert');
console.log('includes hubert in array: ', result);


// comparison operators

let age = 25;
console.log('age == 25? ', age == 25);
console.log('age == 30? ', age == 30);
console.log('age != 30? ', age != 30);
console.log('age > 20? ', age > 20);
console.log('age < 20? ', age < 20);
console.log('age <= 25? ', age <= 25);
console.log('age >= 25? ', age >= 25);

let name = 'piotr';

// comparison of first letter in order of alphabet
console.log('piotr > Sara ', name > 'Sara');
console.log('piotr > Piotr ', name > 'Piotr');


// loose comparison (different types can still be equal)
console.log('name == piotr ', name == 'piotr');
console.log('name == Piotr ', name == 'Piotr');


console.log('loose comparison ');
console.log('25 == 25 ', age == 25);
console.log('25 == string 25 ', age == '25');
console.log('25 != 25 ', age != 25);
console.log('25 != string 25 ', age != '25');




//strict comparison (different types cannot be equal)
console.log('strict comparison ');
console.log('25 === 25 ', age === 25);
console.log('25 === string 25 ', age === '25');
console.log('25 !== 25 ', age !== 25);
console.log('25 !== string 25 ', age !== '25');

