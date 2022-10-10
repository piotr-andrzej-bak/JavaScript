// template strings
const title = 'Best reads of 2019';
const author = 'Miro';
const likes = 30;
let result = null;

// concatenation way
result = 'Teh blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);

// template string way 
// template literal
// back ticks ''
result = `The blog calls ${title} by ${author} has ${likes} like`;
console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);