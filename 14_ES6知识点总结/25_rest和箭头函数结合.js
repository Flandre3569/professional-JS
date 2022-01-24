const numbers = (...nums) => nums;
console.log(numbers(1, 2, 3, 4, 5));

const headAndTail = (head, ...tail) => [head, tail];
console.log(headAndTail(1, 2, 3, 4, 5));

