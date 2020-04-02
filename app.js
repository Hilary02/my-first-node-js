'use strict';

function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}

// #01
// const number = process.argv[2] || 0;
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//     sum = sum + i;
// }
// console.log(sum);


// #02
const length = 30;
for (let i = 0; i < length; i++) {
    console.log(fib(i))
}
