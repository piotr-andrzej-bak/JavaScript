const names = ['adam', 'piotr', 'jeff'];

console.log('========FOR LOOP========');
// for loop
for(let i = 0; i < names.length; i++)
{
    let html = `
        <div>${names[i]}</div>
    `;
    console.log(html);
};

console.log('========WHILE LOOP========');
// while loop
let i = 0;

while(i < names.length)
{
    console.log(names[i]);
    i++;
}

console.log('========DO WHILE LOOP========');
// do while loop
// execute at least once
i = 0;
do
{
    console.log(names[i]);
    i++;
}
while(i < names.length);