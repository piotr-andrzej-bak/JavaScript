const age = 25;

if (age > 20) {
    console.log('you are over 20 years old');
}

const names = ['adam', 'piotr', 'jeff'];

if (names.length >= 3) {
    console.log("if statement true")
}

const password = 'p@ss1121121222';

if (password.length >= 12 && password.includes('@')) {
    console.log('strong password');
} else if (password.length >= 8 || password.includes('@')) {
    console.log('good password');
} else {
    console.log('weak password')
}

let user = false;
if(!user){
    console.log('user is not false')
}