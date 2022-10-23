// function declaration
function greet() {
    console.log('hello there');
}

greet();
greet();
greet();

// function expression
const speak = function (name = 'joice', time = 'evening') {
    console.log(`good ${time} ${name}`);
}

speak('adam', 'morning');
speak('name');
speak('jeff');


// returing values

const calcArea = function (radius) {
    return 3.14 * radius ** 2;
}

const area = calcArea(5);
console.log('Area: ', area);

// arrow function

const calcAreaArrow = (radius) => 3.14 * radius ** 2;

console.log('Area Arrow: ', calcAreaArrow(5));

const greetArrow = () => 'hello world';
console.log(greetArrow());

// classic function 

const bill = function (products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10, 15, 30], 0.2));

// arrow version

const billArrow = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(billArrow([10, 15, 30], 0.2));

// functions 

// methods - dot notation


//
// callback function

const myFunc = (callBackFunc) => {
    // do something
    let value = 50;
    callBackFunc(value);
}

myFunc(value => {
    // do something
    console.log('callback func val: ', value);
});

//
// foreach method

// array
let people = ['adam', 'jan', 'oliver', 'anna'];

// then define callback function
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

// then invoke callback function within array of people
people.forEach(logPerson);

// CALLBACK FUNCTION IN ACTION

const ul = document.querySelector('.people');
let newPeople = ['adam', 'jan', 'oliver', 'anna'];

let html = ``;

newPeople.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`
});
console.log(html);
ul.innerHTML = html;