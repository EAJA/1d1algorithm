// const testF1 = require('testF1');
// const testF2 = require('testF2');

function testF1() {
    //paste
}

function testF2() {
    //paste
}

const t = [];

for (let i = 0; i < 10000; i++) {
    let p = '';

    for (let i = 0; i < 9; i++) {
        parseInt(Math.random() * 100) % 2 === 0 ? p += '> ' : p += '< ';
    }
    
    t.push(p.slice(0, -1));
}

let now = Date.now();
for (let test of t) {
    testF1(test);
}
console.log(Date.now() - now);

now = Date.now();
for (let test of t) {
    testF2(test);
}
console.log(Date.now() - now);