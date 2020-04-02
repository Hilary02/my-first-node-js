'use strict';

function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n.value);
    return value;
}

// #01
// const number = process.argv[2] || 0;
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//     sum = sum + i;
// }
// console.log(sum);


// #02
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
const length = 30;
for (let i = 0; i < length; i++) {
    console.log(fib(i));
}
